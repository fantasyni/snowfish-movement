import { bcs, fromBase64, fromHex, toHex } from '@mysten/bcs';
import { MoveCodeHelper, MoveGen, SuiWasm } from '../../pkg/sui_wasm.js';
import { readDirDeepSync } from 'read-dir-deep';
import { parse } from 'smol-toml';
import path from 'path';
import fs from 'fs';

let wasm = SuiWasm.new_wasm()
let move_gen = MoveGen.new();
let move_code_helper = MoveCodeHelper.new();
let wasm_config: Config|null = null;

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

export function setup(package_path: string, config?: Config) {
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
    if (config != undefined) {
        wasm_config = config;
    }
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

        files = dirfiles.map(function(f) {
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
            match = package_name;
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

export function setup_move_gen(package_path: string, include_deps: boolean) {
    setup_move(move_gen, package_path, include_deps);
}

export function setup_move_code_helper(package_path: string, include_deps: boolean) {
    setup_move(move_code_helper, package_path, include_deps);
}

export function get_wasm(): SuiWasm {
    return wasm
}

export function get_move_gen(): MoveGen {
    return move_gen
}

export function get_move_code_helper(): MoveCodeHelper {
    return move_code_helper
}

export function hexToNumArray(x: string) {
    return Array.from(fromHex(x))
}

export function has_value(v: any): boolean {
    if (Array.isArray(v)) {
        return v.length > 0;
    } else {
        return v ? true : false;
    }
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

export function copy_arr_value(from_arr: any, to_arr: any) {
    if (from_arr && to_arr && Array.isArray(from_arr) && Array.isArray(to_arr)) {
        for (var i = 0; i < from_arr.length; i++) {
            to_arr[i] = from_arr[i];
        }
    }
}

export function into_arr_value(arr: any, dep = Infinity): any {
    let newArr: any[] = [];
    arr.forEach((ele: any) => {
        if (Array.isArray(ele) && dep > 0) {
            newArr.push(into_arr_value(ele, dep - 1));
        } else {
            newArr.push((ele as StructClass).into_value ? (ele as StructClass).into_value() : ele);
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

export type u64 = string | number | bigint;

export interface StructClass {
    $type: string

    from(v: any): any;
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
    value: string;
    readonly $type: string = "address";

    static $type() {
        return "address";
    }

    constructor(value: string) {
        this.value = value;
    }

    from(v: Address) {
        this.value = v.value;
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
    value: boolean;
    readonly $type: string = "bool";

    static $type() {
        return "bool";
    }

    constructor(value: boolean) {
        this.value = value;
    }

    from(v: Boolean) {
        this.value = v.value;
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
    value: string;
    readonly $type: string = "0x1::ascii::String";

    static $type() {
        return "0x1::ascii::String";
    }

    constructor(value: string) {
        this.value = value;
    }

    from(v: Ascii) {
        this.value = v.value;
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
    value: string;
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

    from(v: String) {
        this.value = v.value;
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
    value: number;
    readonly $type: string = "u8";

    static $type() {
        return "u8";
    }

    constructor(value: number) {
        this.value = value;
    }

    from(v: U8) {
        this.value = v.value;
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
    value: number;
    readonly $type: string = "u16";

    static $type() {
        return "u16";
    }

    constructor(value: number) {
        this.value = value;
    }

    from(v: U16) {
        this.value = v.value;
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
    value: number;
    readonly $type: string = "u32";

    static $type() {
        return "u32";
    }

    constructor(value: number) {
        this.value = value;
    }

    from(v: U32) {
        this.value = v.value;
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
    value: string | number | bigint;
    readonly $type: string = "u64";

    static $type() {
        return "u64";
    }

    constructor(value: string | number | bigint) {
        this.value = value;
    }

    from(v: U64) {
        this.value = v.value;
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
    value: string | number | bigint;
    readonly $type: string = "u128";

    static $type() {
        return "u128";
    }

    constructor(value: string | number | bigint) {
        this.value = value;
    }

    from(v: U128) {
        this.value = v.value;
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
    value: string | number | bigint;
    readonly $type: string = "u256";

    static $type() {
        return "u256";
    }

    constructor(value: string | number | bigint) {
        this.value = value;
    }

    from(v: U256) {
        this.value = v.value;
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