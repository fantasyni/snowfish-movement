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
let MODULE_NAME: string = "state_storage";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== GasParameter =============================== */

export class GasParameter implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::GasParameter`;

    usage: Usage;

    constructor(usage ? : Usage) {
        this.usage = usage;
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
        return GasParameter.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return GasParameter.from_bcs_vector(args)
    }

    get_bcs() {
        return GasParameter.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::GasParameter`
    }

    from(arg: GasParameter) {
        this.usage = arg.usage;
    }

    static from_bcs(arg: {
        usage: Usage
    }): GasParameter {
        return new GasParameter(arg.usage)
    }

    static from_bcs_vector(args: {
        usage: Usage
    } []): GasParameter[] {
        return args.map(function(arg) {
            return new GasParameter(arg.usage)
        })
    }

    static get bcs() {
        return bcs_import.struct("GasParameter", {
            usage: Usage.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new GasParameter(val.usage),
        });
    };
}

/* ============================== StateStorageUsage =============================== */

export class StateStorageUsage implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::StateStorageUsage`;

    epoch: u64_import;
    usage: Usage;

    constructor(epoch ? : u64_import, usage ? : Usage) {
        this.epoch = epoch;
        this.usage = usage;
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
        return StateStorageUsage.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return StateStorageUsage.from_bcs_vector(args)
    }

    get_bcs() {
        return StateStorageUsage.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::StateStorageUsage`
    }

    from(arg: StateStorageUsage) {
        this.epoch = arg.epoch;
        this.usage = arg.usage;
    }

    static from_bcs(arg: {
        epoch: u64_import,
        usage: Usage
    }): StateStorageUsage {
        return new StateStorageUsage(arg.epoch, arg.usage)
    }

    static from_bcs_vector(args: {
        epoch: u64_import,
        usage: Usage
    } []): StateStorageUsage[] {
        return args.map(function(arg) {
            return new StateStorageUsage(arg.epoch, arg.usage)
        })
    }

    static get bcs() {
        return bcs_import.struct("StateStorageUsage", {
            epoch: bcs_import.u64(),
            usage: Usage.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new StateStorageUsage(val.epoch, val.usage),
        });
    };
}

/* ============================== Usage =============================== */

export class Usage implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Usage`;

    items: u64_import;
    bytes: u64_import;

    constructor(items: u64_import, bytes: u64_import) {
        this.items = items;
        this.bytes = bytes;
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
        return Usage.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Usage.from_bcs_vector(args)
    }

    get_bcs() {
        return Usage.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Usage`
    }

    from(arg: Usage) {
        this.items = arg.items;
        this.bytes = arg.bytes;
    }

    static from_bcs(arg: {
        items: u64_import,
        bytes: u64_import
    }): Usage {
        return new Usage(arg.items, arg.bytes)
    }

    static from_bcs_vector(args: {
        items: u64_import,
        bytes: u64_import
    } []): Usage[] {
        return args.map(function(arg) {
            return new Usage(arg.items, arg.bytes)
        })
    }

    static get bcs() {
        return bcs_import.struct("Usage", {
            items: bcs_import.u64(),
            bytes: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Usage(val.items, val.bytes),
        });
    };
}

function initialize(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize", [], args);

}

function current_items_and_bytes(): [u64_import, u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "current_items_and_bytes", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r1.Raw[0]))
    ];
}

function get_state_storage_usage_only_at_epoch_beginning(): [Usage] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_state_storage_usage_only_at_epoch_beginning", [], args);

    return [
        Usage.from_bcs(Usage.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function on_new_block(arg0: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "on_new_block", [], args);

}

function on_reconfig() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "on_reconfig", [], args);

}

export const state_storage = {
    GasParameter,
    StateStorageUsage,
    Usage,
    initialize,
    current_items_and_bytes,
    get_state_storage_usage_only_at_epoch_beginning,
    on_new_block,
    on_reconfig
}