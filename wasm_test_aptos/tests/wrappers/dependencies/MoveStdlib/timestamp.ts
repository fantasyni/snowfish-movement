import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
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
let MODULE_NAME: string = "timestamp";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== CurrentTimeMicroseconds =============================== */

export class CurrentTimeMicroseconds implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CurrentTimeMicroseconds`;

    microseconds: u64_import;

    constructor(microseconds ? : u64_import) {
        this.microseconds = microseconds;
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
        return CurrentTimeMicroseconds.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CurrentTimeMicroseconds.from_bcs_vector(args)
    }

    get_bcs() {
        return CurrentTimeMicroseconds.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CurrentTimeMicroseconds`
    }

    from(arg: CurrentTimeMicroseconds) {
        this.microseconds = arg.microseconds;
    }

    static from_bcs(arg: {
        microseconds: u64_import
    }): CurrentTimeMicroseconds {
        return new CurrentTimeMicroseconds(arg.microseconds)
    }

    static from_bcs_vector(args: {
        microseconds: u64_import
    } []): CurrentTimeMicroseconds[] {
        return args.map(function(arg) {
            return new CurrentTimeMicroseconds(arg.microseconds)
        })
    }

    static get bcs() {
        return bcs_import.struct("CurrentTimeMicroseconds", {
            microseconds: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CurrentTimeMicroseconds(val.microseconds),
        });
    };
}

function now_microseconds(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "now_microseconds", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function now_seconds(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "now_seconds", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function set_time_has_started(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_time_has_started", [], args);

}

function update_global_time(arg0: string, arg1: string, arg2: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_global_time", [], args);

}

export const timestamp = {
    CurrentTimeMicroseconds,
    now_microseconds,
    now_seconds,
    set_time_has_started,
    update_global_time
}