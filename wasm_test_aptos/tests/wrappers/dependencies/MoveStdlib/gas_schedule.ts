import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    StorageGasConfig
} from "./storage_gas";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "gas_schedule";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== GasEntry =============================== */

export class GasEntry implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::GasEntry`;

    key: string;
    val: u64_import;

    constructor(key: string, val: u64_import) {
        this.key = key;
        this.val = val;
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
        return GasEntry.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return GasEntry.from_bcs_vector(args)
    }

    get_bcs() {
        return GasEntry.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::GasEntry`
    }

    from(arg: GasEntry) {
        this.key = arg.key;
        this.val = arg.val;
    }

    static from_bcs(arg: {
        key: string,
        val: u64_import
    }): GasEntry {
        return new GasEntry(arg.key, arg.val)
    }

    static from_bcs_vector(args: {
        key: string,
        val: u64_import
    } []): GasEntry[] {
        return args.map(function(arg) {
            return new GasEntry(arg.key, arg.val)
        })
    }

    static get bcs() {
        return bcs_import.struct("GasEntry", {
            key: bcs_import.string(),
            val: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new GasEntry(val.key, val.val),
        });
    };
}

/* ============================== GasSchedule =============================== */

export class GasSchedule implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::GasSchedule`;

    entries: GasEntry[];

    constructor(entries ? : GasEntry[]) {
        this.entries = entries;
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
        return GasSchedule.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return GasSchedule.from_bcs_vector(args)
    }

    get_bcs() {
        return GasSchedule.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::GasSchedule`
    }

    from(arg: GasSchedule) {
        this.entries = arg.entries;
    }

    static from_bcs(arg: {
        entries: GasEntry[]
    }): GasSchedule {
        return new GasSchedule(arg.entries)
    }

    static from_bcs_vector(args: {
        entries: GasEntry[]
    } []): GasSchedule[] {
        return args.map(function(arg) {
            return new GasSchedule(arg.entries)
        })
    }

    static get bcs() {
        return bcs_import.struct("GasSchedule", {
            entries: bcs_import.vector(GasEntry.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new GasSchedule(val.entries),
        });
    };
}

/* ============================== GasScheduleV2 =============================== */

export class GasScheduleV2 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::GasScheduleV2`;

    feature_version: u64_import;
    entries: GasEntry[];

    constructor(feature_version ? : u64_import, entries ? : GasEntry[]) {
        this.feature_version = feature_version;
        this.entries = entries;
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
        return GasScheduleV2.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return GasScheduleV2.from_bcs_vector(args)
    }

    get_bcs() {
        return GasScheduleV2.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::GasScheduleV2`
    }

    from(arg: GasScheduleV2) {
        this.feature_version = arg.feature_version;
        this.entries = arg.entries;
    }

    static from_bcs(arg: {
        feature_version: u64_import,
        entries: GasEntry[]
    }): GasScheduleV2 {
        return new GasScheduleV2(arg.feature_version, arg.entries)
    }

    static from_bcs_vector(args: {
        feature_version: u64_import,
        entries: GasEntry[]
    } []): GasScheduleV2[] {
        return args.map(function(arg) {
            return new GasScheduleV2(arg.feature_version, arg.entries)
        })
    }

    static get bcs() {
        return bcs_import.struct("GasScheduleV2", {
            feature_version: bcs_import.u64(),
            entries: bcs_import.vector(GasEntry.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new GasScheduleV2(val.feature_version, val.entries),
        });
    };
}

function on_new_epoch(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "on_new_epoch", [], args);

}

function initialize(arg0: string, arg1: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize", [], args);

}

function set_for_next_epoch(arg0: string, arg1: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_for_next_epoch", [], args);

}

function set_for_next_epoch_check_hash(arg0: string, arg1: number[], arg2: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_for_next_epoch_check_hash", [], args);

}

function set_gas_schedule(arg0: string, arg1: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_gas_schedule", [], args);

}

function set_storage_gas_config(arg0: string, arg1: StorageGasConfig) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(StorageGasConfig.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_storage_gas_config", [], args);

}

function set_storage_gas_config_for_next_epoch(arg0: string, arg1: StorageGasConfig) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(StorageGasConfig.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_storage_gas_config_for_next_epoch", [], args);

}

export const gas_schedule = {
    GasEntry,
    GasSchedule,
    GasScheduleV2,
    on_new_epoch,
    initialize,
    set_for_next_epoch,
    set_for_next_epoch_check_hash,
    set_gas_schedule,
    set_storage_gas_config,
    set_storage_gas_config_for_next_epoch
}