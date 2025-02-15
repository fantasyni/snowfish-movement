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
let MODULE_NAME: string = "function_info";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== FunctionInfo =============================== */

export class FunctionInfo implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::FunctionInfo`;

    module_address: string;
    module_name: string;
    function_name: string;

    constructor(module_address: string, module_name: string, function_name: string) {
        this.module_address = module_address;
        this.module_name = module_name;
        this.function_name = function_name;
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
        return FunctionInfo.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return FunctionInfo.from_bcs_vector(args)
    }

    get_bcs() {
        return FunctionInfo.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::FunctionInfo`
    }

    from(arg: FunctionInfo) {
        this.module_address = arg.module_address;
        this.module_name = arg.module_name;
        this.function_name = arg.function_name;
    }

    static from_bcs(arg: {
        module_address: string,
        module_name: string,
        function_name: string
    }): FunctionInfo {
        return new FunctionInfo(arg.module_address, arg.module_name, arg.function_name)
    }

    static from_bcs_vector(args: {
        module_address: string,
        module_name: string,
        function_name: string
    } []): FunctionInfo[] {
        return args.map(function(arg) {
            return new FunctionInfo(arg.module_address, arg.module_name, arg.function_name)
        })
    }

    static get bcs() {
        return bcs_import.struct("FunctionInfo", {
            module_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            module_name: bcs_import.string(),
            function_name: bcs_import.string(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new FunctionInfo(val.module_address, val.module_name, val.function_name),
        });
    };
}

function check_dispatch_type_compatibility(arg0: FunctionInfo, arg1: FunctionInfo): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FunctionInfo.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FunctionInfo.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "check_dispatch_type_compatibility", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function check_dispatch_type_compatibility_impl(arg0: FunctionInfo, arg1: FunctionInfo): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FunctionInfo.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FunctionInfo.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "check_dispatch_type_compatibility_impl", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function is_identifier(arg0: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_identifier", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function load_function_impl(arg0: FunctionInfo) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FunctionInfo.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "load_function_impl", [], args);

}

function load_module_from_function(arg0: FunctionInfo) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FunctionInfo.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "load_module_from_function", [], args);

}

function new_function_info(arg0: string, arg1: string, arg2: string): [FunctionInfo] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_function_info", [], args);

    return [
        FunctionInfo.from_bcs(FunctionInfo.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_function_info_from_address(arg0: string, arg1: string, arg2: string): [FunctionInfo] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_function_info_from_address", [], args);

    return [
        FunctionInfo.from_bcs(FunctionInfo.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const function_info = {
    FunctionInfo,
    check_dispatch_type_compatibility,
    check_dispatch_type_compatibility_impl,
    is_identifier,
    load_function_impl,
    load_module_from_function,
    new_function_info,
    new_function_info_from_address
}