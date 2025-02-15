import {
    StructClass,
    get_package_address,
    get_wasm
} from "../../sui_wasm";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "mem";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

function replace < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "replace", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as T0);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function swap < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as T0);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a1.Raw[0])) as T0);
}

export const mem = {
    replace,
    swap
}