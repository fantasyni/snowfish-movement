import type { TransactionArgument, TransactionObjectInput } from "@mysten/sui/transactions";
import { bcs, fromBase64, fromHex, toHex } from '@mysten/bcs';
import { readDirDeepSync } from 'read-dir-deep'
import { MoveCodeHelper, MoveGen, SuiWasm } from '../pkg/sui_wasm.js';
import { parse, stringify } from 'smol-toml';
import path from 'path';
import fs from 'fs-extra';
import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';

let wasm = SuiWasm.new_wasm();

let wasm_config: Config | null = null;

export type Network = 'mainnet' | 'testnet' | 'devnet' | 'localnet';
export type Config = {
    network: string,
    packages: Record<string, string>,
    objects: Record<string, string>
};

export function refresh_vm() {
    wasm.refresh_vm();
}

export function new_wasm() {
    return SuiWasm.new_wasm();
}

export function new_move_gen() {
    return MoveGen.new();
}

export function new_move_code_helper() {
    return MoveCodeHelper.new();
}

export type PureArg =
    | bigint
    | string
    | number
    | boolean
    | null
    | TransactionArgument
    | Array<PureArg>
export type GenericArg =
    | TransactionObjectInput
    | PureArg
    | Array<TransactionObjectInput>
    | Array<PureArg>
    | Array<GenericArg>

export function isTransactionArgument(arg: any): arg is TransactionArgument {
    if (!arg || typeof arg !== 'object' || Array.isArray(arg)) {
        return false
    }

    return 'GasCoin' in arg || 'Input' in arg || 'Result' in arg || 'NestedResult' in arg
}

export function get_package_address(package_name: string): string {
    if (wasm_config && wasm_config.packages && wasm_config.packages[package_name]) {
        return wasm_config.packages[package_name]
    }
    return ""
}

export function get_object_address(object_key: string): string {
    if (wasm_config && wasm_config.objects && wasm_config.objects[object_key]) {
        return wasm_config.objects[object_key]
    }
    return ""
}

export function set_config(config: Config) {
    if (config != undefined) {
        wasm_config = config;
    }
}

export function setup(package_path: string) {
    let toml_path = package_path + "/Move.toml";
    let toml_string = fs.readFileSync(toml_path).toString();
    let toml: any = parse(toml_string);
    let package_name = toml.package.name;

    for (var dep_module in toml.dependencies) {
        if (dep_module.startsWith("0x") && toml.dependencies[dep_module]["local"]) {
            let local_bcs_path = toml.dependencies[dep_module]["local"] + "/bcs";
            if (fs.existsSync(local_bcs_path)) {
                let bcs_json_files = fs.readdirSync(local_bcs_path);
                for (var i = 0; i < bcs_json_files.length; i++) {
                    let bcs_json_file = local_bcs_path + "/" + bcs_json_files[i];
                    var bcs_json_data = fs.readFileSync(bcs_json_file).toString();
                    if (bcs_json_data) {
                        var bcs_json = JSON.parse(bcs_json_data);
                        for (var bcs_module in bcs_json) {
                            wasm.publish_module(fromBase64(bcs_json[bcs_module]))
                        }
                    }
                }
            }
        }
    }

    let bytecode_path = package_path + `/build/${package_name}/bytecode_modules`;

    let files = readDirDeepSync(bytecode_path, { gitignore: false, ignore: [] });
    for (var i = 0; i < files.length; i++) {
        if (files[i].indexOf("dependencies/0x") != -1) {
            continue;
        }
        let bytes = fs.readFileSync(files[i]);
        let unit8_bytes = new Uint8Array(bytes);
        wasm.publish_module(unit8_bytes)
    }
    wasm.setup_storage()
}

function setup_move(runtime: any, package_path: string, include_deps: boolean) {
    let toml_path = package_path + "/Move.toml";
    let toml_string = fs.readFileSync(toml_path).toString();
    let toml: any = parse(toml_string);
    let package_name = toml.package.name;

    if (include_deps) {
        for (var dep_module in toml.dependencies) {
            if (dep_module.startsWith("0x") && toml.dependencies[dep_module]["local"]) {
                let local_bcs_path = toml.dependencies[dep_module]["local"] + "/bcs";
                if (fs.existsSync(local_bcs_path)) {
                    let bcs_json_files = fs.readdirSync(local_bcs_path);
                    for (var i = 0; i < bcs_json_files.length; i++) {
                        let bcs_json_file = local_bcs_path + "/" + bcs_json_files[i];
                        let bcs_json_module = bcs_json_files[i].substring(0, (bcs_json_files[i].indexOf(".json")))
                        var bcs_json_data = fs.readFileSync(bcs_json_file).toString();
                        if (bcs_json_data) {
                            var bcs_json = JSON.parse(bcs_json_data);
                            for (var bcs_module in bcs_json) {
                                runtime.register_module(bcs_json_module, fromBase64(bcs_json[bcs_module]))
                            }
                        }
                    }
                }
            }
        }
    }

    let bytecode_path = package_path + `/build/${package_name}/bytecode_modules`;
    let files: string[] = [];

    if (include_deps) {
        files = readDirDeepSync(bytecode_path, { gitignore: false, ignore: [] });
    } else {
        var dirfiles = fs.readdirSync(bytecode_path);

        files = dirfiles.map(function (f) {
            return bytecode_path + "/" + f;
        })
    }

    for (var i = 0; i < files.length; i++) {
        let file = files[i];
        let regex = /\/dependencies\/(.*?)\/.*?.mv/
        let match: any = file.match(regex);
        if (match) {
            match = match[1];
        } else {
            // match = package_name;
            match = "";
        }
        if (file.indexOf("dependencies/0x") != -1) {
            continue;
        }
        // if (file.indexOf("_tests.mv") != -1) {
        //     continue;
        // }
        if (file.indexOf(".mv") == -1) {
            continue;
        }
        var bytes = fs.readFileSync(file);
        runtime.register_module(match, new Uint8Array(bytes))
    }

    runtime.build_bytecode_model();
}

async function setup_chain_move(runtime: any, network: Network, module_objectid: string) {
    let result_ids: string[] = [];
    // let result_ids_map: {[key: string]: string} = {};
    await get_online_packages(network, module_objectid, result_ids, "")

    const suiClient = new SuiClient({ url: getFullnodeUrl(network) });
    let results = await suiClient.multiGetObjects({
        ids: result_ids,
        options: {
            showBcs: true,
            showContent: true,
            showDisplay: true
        }
    })

    if (results) {
        for (var i = 0; i < results.length; i++) {
            let r = results[i];
            let objectid = r.data.objectId;
            let bcs: any = r.data?.bcs;
            if (bcs) {
                let moduleMap = bcs.moduleMap;
                for (var module_name in moduleMap) {
                    let module_base64 = moduleMap[module_name]
                    // console.log("register_module %s %s", objectid, module_base64)
                    let match: string = "";
                    if (objectid != module_objectid) {
                        match = objectid;
                    }
                    runtime.register_module(match, new Uint8Array(fromBase64(module_base64)))
                }
            }
        }
    }

    runtime.build_bytecode_model();
}

async function get_online_packages(network: Network, objectid: string, result_ids: string[], out: string) {
    const suiClient = new SuiClient({ url: getFullnodeUrl(network) });
    let result = await suiClient.getObject({
        id: objectid,
        options: {
            showBcs: true,
        }
    })
    if (result_ids.indexOf(objectid) == -1) {
        result_ids.push(objectid);
    }

    if (result && result.data?.bcs) {
        let bcs: any = result.data.bcs;
        let linkageTable = bcs.linkageTable;
        let typeOriginTable = bcs.typeOriginTable;

        let deps_modules: string[] = [];
        for (var package_id in linkageTable) {
            let upgraded_id = linkageTable[package_id].upgraded_id;
            if (upgraded_id == "0x0000000000000000000000000000000000000000000000000000000000000001") continue;
            if (upgraded_id == "0x0000000000000000000000000000000000000000000000000000000000000002") continue;

            if (deps_modules.indexOf(upgraded_id) == -1) {
                deps_modules.push(upgraded_id);
            }
            if (result_ids.indexOf(upgraded_id) == -1) {
                result_ids.push(upgraded_id);
                await get_online_packages(network, upgraded_id, result_ids, out);
            }
        }
        if (out) {
            gen_move_toml(deps_modules, out, objectid)
        }
    }
}

function gen_move_toml(deps_modules: string[], out: string, objectId: string) {
    let out_dir = out + "/" + objectId;
    if (!fs.existsSync(out_dir)) {
        fs.mkdirpSync(out_dir)
    }
    let move_toml = out_dir + "/Move.toml";

    let dependencies: Record<string, any> = {
        Sui: {
            git: 'https://github.com/MystenLabs/sui.git',
            subdir: 'crates/sui-framework/packages/sui-framework',
            rev: 'framework/testnet'
        }
    };
    for (var i = 0; i < deps_modules.length; i++) {
        if (deps_modules[i] == "0x0000000000000000000000000000000000000000000000000000000000000001") continue;
        if (deps_modules[i] == "0x0000000000000000000000000000000000000000000000000000000000000002") continue;
        let local_name: string = deps_modules[i];
        let local_path = "../" + deps_modules[i];
        dependencies[local_name] = {
            local: local_path
        }
    }

    let contents = {
        package: {
            name: objectId,
            // edition: '2024.beta' 
            "published-at": objectId
        },
        dependencies: dependencies,
        addresses: {
            std: "0x1",
            sui: "0x2"
        },
        'dev-dependencies': {},
        'dev-addresses': {}
    };

    let move_toml_result = stringify(contents);
    fs.writeFileSync(move_toml, move_toml_result);
}

export function setup_move_gen(move_gen: MoveGen, package_path: string, include_deps: boolean) {
    setup_move(move_gen, package_path, include_deps);
}

export function setup_move_code_helper(move_code_helper: MoveCodeHelper, package_path: string, include_deps: boolean) {
    setup_move(move_code_helper, package_path, include_deps);
}

export async function gen_move_test_scripts(move_gen: MoveGen, package_path: string, out_path: string) {
    let toml_path = package_path + "/Move.toml";
    let toml_string = fs.readFileSync(toml_path).toString();
    let toml: any = parse(toml_string);
    let package_name = toml.package.name;

    for (var dep_module in toml.dependencies) {
        if (dep_module.startsWith("0x") && toml.dependencies[dep_module]["local"]) {
            let local_bcs_path = toml.dependencies[dep_module]["local"] + "/bcs";
            if (fs.existsSync(local_bcs_path)) {
                let bcs_json_files = fs.readdirSync(local_bcs_path);
                for (var i = 0; i < bcs_json_files.length; i++) {
                    let bcs_json_file = local_bcs_path + "/" + bcs_json_files[i];
                    let bcs_json_module = bcs_json_files[i].substring(0, (bcs_json_files[i].indexOf(".json")))
                    var bcs_json_data = fs.readFileSync(bcs_json_file).toString();
                    if (bcs_json_data) {
                        var bcs_json = JSON.parse(bcs_json_data);
                        for (var bcs_module in bcs_json) {
                            move_gen.register_module(bcs_json_module, fromBase64(bcs_json[bcs_module]))
                        }
                    }
                }
            }
        }
    }

    let bytecode_path = package_path + `/build/${package_name}/bytecode_modules`;
    let files = readDirDeepSync(bytecode_path, { gitignore: false, ignore: [] });
    for (var i = 0; i < files.length; i++) {
        let file = files[i];
        let regex = /\/dependencies\/(.*?)\/.*?.mv/
        let match: any = file.match(regex);
        if (match) {
            match = match[1];
        } else {
            match = package_name;
        }
        if (file.indexOf("dependencies/0x") != -1) {
            continue;
        }
        // if (file.indexOf("_tests.mv") != -1) {
        //     continue;
        // }
        var bytes = fs.readFileSync(file);
        move_gen.register_module(match, new Uint8Array(bytes))
    }

    move_gen.build_bytecode_model()

    let out = out_path + "/tests/wrappers";
    if (!fs.existsSync(out)) {
        fs.mkdirpSync(out);
    }
    let template = out_path + "/template";
    fs.copyFileSync(template + "/sui_wasm_test.ts", out + "/sui_wasm.ts");

    move_gen.run_move_gen(out)
}

export async function gen_chain_move_module(move_gen: MoveGen, network: Network, module_objectid: string, out: string) {
    if (!fs.existsSync(out)) {
        fs.mkdirpSync(out);
    }

    let result_ids: string[] = [];
    await get_online_packages(network, module_objectid, result_ids, out)

    const suiClient = new SuiClient({ url: getFullnodeUrl(network) });
    let results = await suiClient.multiGetObjects({
        ids: result_ids,
        options: {
            showBcs: true,
            showContent: true,
            showDisplay: true
        }
    })

    if (results) {
        for (var i = 0; i < results.length; i++) {
            let r = results[i];
            if (r.data) {
                let bcs: any = r.data.bcs;
                let objectid = r.data.objectId;
                let moduleMap = bcs.moduleMap;
                for (var module_name in moduleMap) {
                    let module_base64 = moduleMap[module_name]
                    move_gen.run_module_gen(out, objectid, new Uint8Array(fromBase64(module_base64)))
                }
                let out_bcs = out + "/" + module_objectid + "/bcs";
                if (!fs.existsSync(out_bcs)) {
                    fs.mkdirpSync(out_bcs)
                }
                let out_bcs_file = `${out_bcs}/${objectid}.json`;
                fs.writeFileSync(out_bcs_file, JSON.stringify(moduleMap, null, 2));
            }
        }
    }
}

export async function setup_chain_move_code_helper(move_code_helper: MoveCodeHelper, network: Network, module_objectid: string) {
    await setup_chain_move(move_code_helper, network, module_objectid);
}

export function get_wasm(): SuiWasm {
    return wasm
}

export function has_arr(v: any): boolean {
    let flat_arr = v.flat(Infinity);
    return flat_arr.length > 0;
}

export function to_arr_value(v: any): any {
    if (Array.isArray(v)) {
        let flat_arr = v.flat(Infinity);
        for (var i = 0; i < flat_arr.length; i++) {
            if (typeof flat_arr != 'undefined') return flat_arr[i];
        }
    } else {
        return v;
    }
}

export function into_arr_value(arr: any, dep = Infinity): any {
    let newArr: any[] = [];
    arr.forEach((ele: any) => {
        if (Array.isArray(ele) && dep > 0) {
            newArr.push(into_arr_value(ele, dep - 1));
        } else {
            newArr.push(ele.into_value());
        }
    });
    return newArr;
}

export function get_arr_deps(arr: any) {
    if (!Array.isArray(arr)) {
        return 0;
    }

    let depth = 1;
    for (let i = 0; i < arr.length; i++) {
        const cur = arr[i];
        if (Array.isArray(cur)) {
            const curDepth = get_arr_deps(cur) + 1;
            depth = Math.max(depth, curDepth);
        }
    }

    return depth;
}

export function get_arr_bcs_vector(val: any, deps: number): any {
    if (deps > 0) {
        return bcs.vector(get_arr_bcs_vector(val, deps - 1))
    } else {
        return val.serialize_bcs()
    }
}

export function into_arr_bcs_vector(arr: any): any {
    let deps = get_arr_deps(arr);
    let val = to_arr_value(arr);
    return get_arr_bcs_vector(val, deps);
}

export type Primitive = boolean | string | number | bigint
export type TypeArgument = StructClass | Primitive

export interface StructClass {
    $type: string

    serialize_bcs(): any
    return_bcs(): any
    into_value(): any
    serialize(arg: any): any
    get_bcs(): any
    get_value(): any
    from_bcs_t(arg: any): any
    from_bcs(arg: any): any
    from_bcs_vector(args: any): any
    from_bcs_vector_t(args: any): any
}

export class Address implements StructClass {
    readonly value: string;
    readonly $type: string = "address";

    static $type() {
        return "address";
    }

    constructor(value: string) {
        this.value = value;
    }

    serialize_bcs() {
        return this.get_bcs()
    }

    return_bcs() {
        return this.get_bcs()
    }

    into_value() {
        return this.value;
    }

    from_bcs_t(bytes: any) {
        return this.from_bcs(this.get_bcs().parse(bytes));
    }

    from_bcs_vector_t(bytes: any) {
        return this.from_bcs_vector(bcs.vector(this.get_bcs()).parse(bytes));
    }

    serialize(arg: any) {
        return this.get_bcs().serialize(arg);
    }

    from_bcs(arg: Address) {
        return arg
    }

    from_bcs_vector(args: Address[]) {
        return args
    }

    static get bcs() {
        return bcs.bytes(32).transform({
            // To change the input type, you need to provide a type definition for the input
            input: (val: Address) => fromHex(val.into_value()),
            output: (val) => new Address(toHex(val)),
        })
    }

    get_bcs() {
        return Address.bcs
    }

    get_value() {
        return this.value;
    }
}

export class Boolean implements StructClass {
    readonly value: boolean;
    readonly $type: string = "bool";

    static $type() {
        return "bool";
    }

    constructor(value: boolean) {
        this.value = value;
    }

    serialize_bcs() {
        return this.get_bcs()
    }

    return_bcs() {
        return this.get_bcs()
    }

    into_value() {
        return this.value;
    }

    from_bcs_t(bytes: any) {
        return this.from_bcs(this.get_bcs().parse(bytes));
    }

    from_bcs_vector_t(bytes: any) {
        return this.from_bcs_vector(bcs.vector(this.get_bcs()).parse(bytes));
    }

    serialize(arg: any) {
        return this.get_bcs().serialize(arg);
    }

    from_bcs(arg: Boolean) {
        return arg
    }

    from_bcs_vector(args: Boolean[]) {
        return args
    }

    static get bcs() {
        return bcs.bool().transform({
            input: (val: boolean) => val,
            output: (val: boolean) => new Boolean(val)
        })
    }

    get_bcs() {
        return Boolean.bcs
    }

    get_value() {
        return this.value;
    }
}

export class Ascii implements StructClass {
    readonly value: string;
    readonly $type: string = "0x1::ascii::String";

    static $type() {
        return "0x1::ascii::String";
    }

    constructor(value: string) {
        this.value = value;
    }

    serialize_bcs() {
        return this.get_bcs()
    }

    return_bcs() {
        return this.get_bcs()
    }

    into_value() {
        return this.value;
    }

    from_bcs_t(bytes: any) {
        return this.from_bcs(this.get_bcs().parse(bytes));
    }

    from_bcs_vector_t(bytes: any) {
        return this.from_bcs_vector(bcs.vector(this.get_bcs()).parse(bytes));
    }

    serialize(arg: any) {
        return this.get_bcs().serialize(arg);
    }

    from_bcs(arg: Ascii) {
        return arg
    }

    from_bcs_vector(args: Ascii[]) {
        return args
    }

    static get bcs() {
        return bcs.string().transform({
            input: (val: string) => val,
            output: (val: string) => new Ascii(val)
        })
    }

    get_bcs() {
        return Ascii.bcs
    }

    get_value() {
        return this.value;
    }
}

export class String implements StructClass {
    readonly value: string;
    readonly $type: string = "0x1::string::String";

    static $type() {
        return "0x1::string::String";
    }

    constructor(value: string) {
        this.value = value;
    }

    into_uint8array(): Uint8Array {
        return new TextEncoder().encode(this.value)
    }

    into_u8array(): U8[] {
        let uint8 = new TextEncoder().encode(this.value)
        let r: U8[] = [];
        for (var i = 0; i < uint8.length; i++) {
            r.push(new U8(uint8[i]))
        }
        return r;
    }

    serialize_bcs() {
        return this.get_bcs()
    }

    return_bcs() {
        return this.get_bcs()
    }

    into_value() {
        return this.value;
    }

    from_bcs_t(bytes: any) {
        return this.from_bcs(this.get_bcs().parse(bytes));
    }

    from_bcs_vector_t(bytes: any) {
        return this.from_bcs_vector(bcs.vector(this.get_bcs()).parse(bytes));
    }

    serialize(arg: any) {
        return this.get_bcs().serialize(arg);
    }

    from_bcs(arg: String) {
        return arg
    }

    from_bcs_vector(args: String[]) {
        return args
    }

    static get bcs() {
        return bcs.string().transform({
            input: (val: string) => val,
            output: (val: string) => new String(val)
        })
    }

    get_bcs() {
        return String.bcs
    }

    get_value() {
        return this.value;
    }
}

export class U8 implements StructClass {
    readonly value: number;
    readonly $type: string = "u8";

    static $type() {
        return "u8";
    }

    constructor(value: number) {
        this.value = value;
    }

    serialize_bcs() {
        return this.get_bcs()
    }

    return_bcs() {
        return this.get_bcs()
    }

    into_value() {
        return this.value;
    }

    from_bcs_t(bytes: any) {
        return this.from_bcs(this.get_bcs().parse(bytes));
    }

    from_bcs_vector_t(bytes: any) {
        return this.from_bcs_vector(bcs.vector(this.get_bcs()).parse(bytes));
    }

    serialize(arg: any) {
        return this.get_bcs().serialize(arg);
    }

    from_bcs(arg: U8) {
        return arg
    }

    from_bcs_vector(args: U8[]) {
        return args;
    }

    static get bcs() {
        return bcs.u8().transform({
            input: (val: number) => val,
            output: (val: number) => new U8(val),
        })
    }

    get_bcs() {
        return U8.bcs
    }

    get_value() {
        return this.value;
    }
}

export class U16 implements StructClass {
    readonly value: number;
    readonly $type: string = "u16";

    static $type() {
        return "u16";
    }

    constructor(value: number) {
        this.value = value;
    }

    serialize_bcs() {
        return this.get_bcs()
    }

    return_bcs() {
        return this.get_bcs()
    }

    into_value() {
        return this.value;
    }

    from_bcs_t(bytes: any) {
        return this.from_bcs(this.get_bcs().parse(bytes));
    }

    from_bcs_vector_t(bytes: any) {
        return this.from_bcs_vector(bcs.vector(this.get_bcs()).parse(bytes));
    }

    serialize(arg: any) {
        return this.get_bcs().serialize(arg);
    }

    from_bcs(arg: any) {
        return arg
    }

    from_bcs_vector(args: U16[]) {
        return args;
    }

    static get bcs() {
        return bcs.u16().transform({
            input: (val: number) => val,
            output: (val: number) => new U16(val)
        })
    }

    get_bcs() {
        return U16.bcs
    }

    get_value() {
        return this.value;
    }
}

export class U32 implements StructClass {
    readonly value: number;
    readonly $type: string = "u32";

    static $type() {
        return "u32";
    }

    constructor(value: number) {
        this.value = value;
    }

    serialize_bcs() {
        return this.get_bcs()
    }

    return_bcs() {
        return this.get_bcs()
    }

    into_value() {
        return this.value;
    }

    from_bcs_t(bytes: any) {
        return this.from_bcs(this.get_bcs().parse(bytes));
    }

    from_bcs_vector_t(bytes: any) {
        return this.from_bcs_vector(bcs.vector(this.get_bcs()).parse(bytes));
    }

    serialize(arg: any) {
        return this.get_bcs().serialize(arg);
    }

    from_bcs(arg: U32) {
        return arg
    }

    from_bcs_vector(args: U32[]) {
        return args
    }

    static get bcs() {
        return bcs.u32().transform({
            input: (val: number) => val,
            output: (val: number) => new U32(val)
        })
    }

    get_bcs() {
        return U32.bcs
    }

    get_value() {
        return this.value;
    }
}

export class U64 implements StructClass {
    readonly value: string | number | bigint;
    readonly $type: string = "u64";

    static $type() {
        return "u64";
    }

    constructor(value: string | number | bigint) {
        this.value = value;
    }

    serialize_bcs() {
        return this.get_bcs()
    }

    return_bcs() {
        return this.get_bcs()
    }

    into_value() {
        return this.value;
    }

    from_bcs_t(bytes: any) {
        return this.from_bcs(this.get_bcs().parse(bytes));
    }

    from_bcs_vector_t(bytes: any) {
        return this.from_bcs_vector(bcs.vector(this.get_bcs()).parse(bytes));
    }

    serialize(arg: any) {
        return this.get_bcs().serialize(arg);
    }

    from_bcs(arg: U64) {
        return arg
    }

    from_bcs_vector(args: U64[]) {
        return args
    }

    static get bcs() {
        return bcs.u64().transform({
            input: (val: string | number | bigint) => val,
            output: (val: string | number | bigint) => {
                if (!isNaN(Number(val))) {
                    return new U64(Number(val))
                }

                return new U64(val);
            }
        })
    }

    get_bcs() {
        return U64.bcs
    }

    get_value() {
        return this.value;
    }

    static v1_bcs(v: U64[]) {
        return v[0]
    }

    static v2_bcs(v: U64[][]) {
        return v[0][0]
    }
}

export class U128 implements StructClass {
    readonly value: string | number | bigint;
    readonly $type: string = "u128";

    static $type() {
        return "u128";
    }

    constructor(value: string | number | bigint) {
        this.value = value;
    }

    serialize_bcs() {
        return this.get_bcs()
    }

    return_bcs() {
        return this.get_bcs()
    }

    into_value() {
        return this.value;
    }

    from_bcs_t(bytes: any) {
        return this.from_bcs(this.get_bcs().parse(bytes));
    }

    from_bcs_vector_t(bytes: any) {
        return this.from_bcs_vector(bcs.vector(this.get_bcs()).parse(bytes));
    }

    serialize(arg: any) {
        return this.get_bcs().serialize(arg);
    }

    from_bcs(arg: U128) {
        return arg
    }

    from_bcs_vector(args: U128[]) {
        return args
    }

    static get bcs() {
        return bcs.u128().transform({
            input: (val: string | number | bigint) => val,
            output: (val: string | number | bigint) => {
                if (!isNaN(Number(val))) {
                    return new U128(Number(val))
                }

                return new U128(val)
            }
        })
    }

    get_bcs() {
        return U128.bcs
    }

    get_value() {
        return this.value;
    }
}

export class U256 implements StructClass {
    readonly value: string | number | bigint;
    readonly $type: string = "u256";

    static $type() {
        return "u256";
    }

    constructor(value: string | number | bigint) {
        this.value = value;
    }

    serialize_bcs() {
        return this.get_bcs()
    }

    return_bcs() {
        return this.get_bcs()
    }

    into_value() {
        return this.value;
    }

    from_bcs_t(bytes: any) {
        return this.from_bcs(this.get_bcs().parse(bytes));
    }

    from_bcs_vector_t(bytes: any) {
        return this.from_bcs_vector(bcs.vector(this.get_bcs()).parse(bytes));
    }

    serialize(arg: any) {
        return this.get_bcs().serialize(arg);
    }

    from_bcs(arg: U256) {
        return arg
    }

    from_bcs_vector(args: U256[]) {
        return args
    }

    static get bcs() {
        return bcs.u256().transform({
            input: (val: string | number | bigint) => val,
            output: (val: string | number | bigint) => {
                if (!isNaN(Number(val))) {
                    return new U256(Number(val))
                }

                return new U256(val)
            }
        })
    }

    get_bcs() {
        return U256.bcs
    }

    get_value() {
        return this.value;
    }
}