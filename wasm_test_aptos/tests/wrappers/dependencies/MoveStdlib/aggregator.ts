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
let MODULE_NAME: string = "aggregator";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Aggregator =============================== */

export class Aggregator implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Aggregator`;

    handle: string;
    key: string;
    limit: u64_import;

    constructor(handle: string, key: string, limit: u64_import) {
        this.handle = handle;
        this.key = key;
        this.limit = limit;
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
        return Aggregator.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Aggregator.from_bcs_vector(args)
    }

    get_bcs() {
        return Aggregator.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Aggregator`
    }

    from(arg: Aggregator) {
        this.handle = arg.handle;
        this.key = arg.key;
        this.limit = arg.limit;
    }

    static from_bcs(arg: {
        handle: string,
        key: string,
        limit: u64_import
    }): Aggregator {
        return new Aggregator(arg.handle, arg.key, arg.limit)
    }

    static from_bcs_vector(args: {
        handle: string,
        key: string,
        limit: u64_import
    } []): Aggregator[] {
        return args.map(function(arg) {
            return new Aggregator(arg.handle, arg.key, arg.limit)
        })
    }

    static get bcs() {
        return bcs_import.struct("Aggregator", {
            handle: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            key: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            limit: bcs_import.u128(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Aggregator(val.handle, val.key, val.limit),
        });
    };
}

function add(arg0: Aggregator, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Aggregator.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function destroy(arg0: Aggregator) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Aggregator.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy", [], args);

}

function read(arg0: Aggregator): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Aggregator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "read", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function sub(arg0: Aggregator, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Aggregator.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sub", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function limit(arg0: Aggregator): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Aggregator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "limit", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const aggregator = {
    Aggregator,
    add,
    destroy,
    read,
    sub,
    limit
}