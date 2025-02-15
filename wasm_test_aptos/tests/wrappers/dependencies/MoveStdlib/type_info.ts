import {
    StructClass,
    get_package_address,
    get_wasm
} from "../../sui_wasm";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "type_info";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== TypeInfo =============================== */

export class TypeInfo implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TypeInfo`;

    account_address: string;
    module_name: number[];
    struct_name: number[];

    constructor(account_address: string, module_name: number[], struct_name: number[]) {
        this.account_address = account_address;
        this.module_name = module_name;
        this.struct_name = struct_name;
    }

    into_value() {
        return this.get_value()
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs().parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs().serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()
    }

    return_bcs() {
        return this.get_bcs()
    }

    from_bcs(arg: any) {
        return TypeInfo.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TypeInfo.from_bcs_vector(args)
    }

    get_bcs() {
        return TypeInfo.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TypeInfo`
    }

    from(arg: TypeInfo) {
        this.account_address = arg.account_address;
        this.module_name = arg.module_name;
        this.struct_name = arg.struct_name;
    }

    static from_bcs(arg: {
        account_address: string,
        module_name: number[],
        struct_name: number[]
    }): TypeInfo {
        return new TypeInfo(arg.account_address, arg.module_name, arg.struct_name)
    }

    static from_bcs_vector(args: {
        account_address: string,
        module_name: number[],
        struct_name: number[]
    } []): TypeInfo[] {
        return args.map(function(arg) {
            return new TypeInfo(arg.account_address, arg.module_name, arg.struct_name)
        })
    }

    static get bcs() {
        return bcs_import.struct("TypeInfo", {
            account_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            module_name: bcs_import.vector(bcs_import.u8()),
            struct_name: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TypeInfo(val.account_address, val.module_name, val.struct_name),
        });
    };
}

function account_address(arg0: TypeInfo): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TypeInfo.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "account_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function chain_id(): [number] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "chain_id", [], args);

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function chain_id_internal(): [number] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "chain_id_internal", [], args);

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function module_name(arg0: TypeInfo): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TypeInfo.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "module_name", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function size_of_val < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "size_of_val", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function struct_name(arg0: TypeInfo): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TypeInfo.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "struct_name", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function type_name < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "type_name", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function type_of < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "type_of", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

export const type_info = {
    TypeInfo,
    account_address,
    chain_id,
    chain_id_internal,
    module_name,
    size_of_val,
    struct_name,
    type_name,
    type_of
}