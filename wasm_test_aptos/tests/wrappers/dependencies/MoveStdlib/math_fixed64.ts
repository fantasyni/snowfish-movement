import {
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    FixedPoint64
} from "./fixed_point64";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "math_fixed64";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

function pow(arg0: FixedPoint64, arg1: u64_import): [FixedPoint64] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pow", [], args);

    return [
        FixedPoint64.from_bcs(FixedPoint64.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function sqrt(arg0: FixedPoint64): [FixedPoint64] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sqrt", [], args);

    return [
        FixedPoint64.from_bcs(FixedPoint64.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function exp(arg0: FixedPoint64): [FixedPoint64] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "exp", [], args);

    return [
        FixedPoint64.from_bcs(FixedPoint64.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function exp_raw(arg0: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u256().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "exp_raw", [], args);

    return [
        bcs_import.u256().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function ln_plus_32ln2(arg0: FixedPoint64): [FixedPoint64] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ln_plus_32ln2", [], args);

    return [
        FixedPoint64.from_bcs(FixedPoint64.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function log2_plus_64(arg0: FixedPoint64): [FixedPoint64] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "log2_plus_64", [], args);

    return [
        FixedPoint64.from_bcs(FixedPoint64.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function mul_div(arg0: FixedPoint64, arg1: FixedPoint64, arg2: FixedPoint64): [FixedPoint64] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mul_div", [], args);

    return [
        FixedPoint64.from_bcs(FixedPoint64.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function pow_raw(arg0: u64_import, arg1: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u256().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pow_raw", [], args);

    return [
        bcs_import.u256().parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const math_fixed64 = {
    pow,
    sqrt,
    exp,
    exp_raw,
    ln_plus_32ln2,
    log2_plus_64,
    mul_div,
    pow_raw
}