import {
    StructClass,
    get_package_address,
    get_wasm
} from "../../sui_wasm";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "debug";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

function native_print(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.string().serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "native_print", [], args);

}

function native_stack_trace(): [string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "native_stack_trace", [], args);

    return [
        bcs_import.string().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function print < T0 extends StructClass > (type_args: string[], arg0: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "print", type_args, args);
}

function print_stack_trace() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "print_stack_trace", [], args);

}

export const debug = {
    native_print,
    native_stack_trace,
    print,
    print_stack_trace
}