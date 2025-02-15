import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    EventHandle
} from "./event";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "reconfiguration";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Configuration =============================== */

export class Configuration implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Configuration`;

    epoch: u64_import;
    last_reconfiguration_time: u64_import;
    events: EventHandle;

    constructor(epoch ? : u64_import, last_reconfiguration_time ? : u64_import, events ? : EventHandle) {
        this.epoch = epoch;
        this.last_reconfiguration_time = last_reconfiguration_time;
        this.events = events;
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
        return Configuration.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Configuration.from_bcs_vector(args)
    }

    get_bcs() {
        return Configuration.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Configuration`
    }

    from(arg: Configuration) {
        this.epoch = arg.epoch;
        this.last_reconfiguration_time = arg.last_reconfiguration_time;
        this.events = arg.events;
    }

    static from_bcs(arg: {
        epoch: u64_import,
        last_reconfiguration_time: u64_import,
        events: EventHandle
    }): Configuration {
        return new Configuration(arg.epoch, arg.last_reconfiguration_time, arg.events)
    }

    static from_bcs_vector(args: {
        epoch: u64_import,
        last_reconfiguration_time: u64_import,
        events: EventHandle
    } []): Configuration[] {
        return args.map(function(arg) {
            return new Configuration(arg.epoch, arg.last_reconfiguration_time, arg.events)
        })
    }

    static get bcs() {
        return bcs_import.struct("Configuration", {
            epoch: bcs_import.u64(),
            last_reconfiguration_time: bcs_import.u64(),
            events: EventHandle.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Configuration(val.epoch, val.last_reconfiguration_time, val.events),
        });
    };
}

/* ============================== DisableReconfiguration =============================== */

export class DisableReconfiguration implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DisableReconfiguration`;

    dummy_field: boolean;

    constructor(dummy_field ? : boolean) {
        this.dummy_field = dummy_field;
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
        return DisableReconfiguration.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DisableReconfiguration.from_bcs_vector(args)
    }

    get_bcs() {
        return DisableReconfiguration.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DisableReconfiguration`
    }

    from(arg: DisableReconfiguration) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): DisableReconfiguration {
        return new DisableReconfiguration(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): DisableReconfiguration[] {
        return args.map(function(arg) {
            return new DisableReconfiguration(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("DisableReconfiguration", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DisableReconfiguration(val.dummy_field),
        });
    };
}

/* ============================== NewEpoch =============================== */

export class NewEpoch implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::NewEpoch`;

    epoch: u64_import;

    constructor(epoch: u64_import) {
        this.epoch = epoch;
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
        return NewEpoch.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return NewEpoch.from_bcs_vector(args)
    }

    get_bcs() {
        return NewEpoch.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::NewEpoch`
    }

    from(arg: NewEpoch) {
        this.epoch = arg.epoch;
    }

    static from_bcs(arg: {
        epoch: u64_import
    }): NewEpoch {
        return new NewEpoch(arg.epoch)
    }

    static from_bcs_vector(args: {
        epoch: u64_import
    } []): NewEpoch[] {
        return args.map(function(arg) {
            return new NewEpoch(arg.epoch)
        })
    }

    static get bcs() {
        return bcs_import.struct("NewEpoch", {
            epoch: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new NewEpoch(val.epoch),
        });
    };
}

/* ============================== NewEpochEvent =============================== */

export class NewEpochEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::NewEpochEvent`;

    epoch: u64_import;

    constructor(epoch: u64_import) {
        this.epoch = epoch;
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
        return NewEpochEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return NewEpochEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return NewEpochEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::NewEpochEvent`
    }

    from(arg: NewEpochEvent) {
        this.epoch = arg.epoch;
    }

    static from_bcs(arg: {
        epoch: u64_import
    }): NewEpochEvent {
        return new NewEpochEvent(arg.epoch)
    }

    static from_bcs_vector(args: {
        epoch: u64_import
    } []): NewEpochEvent[] {
        return args.map(function(arg) {
            return new NewEpochEvent(arg.epoch)
        })
    }

    static get bcs() {
        return bcs_import.struct("NewEpochEvent", {
            epoch: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new NewEpochEvent(val.epoch),
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

function current_epoch(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "current_epoch", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function disable_reconfiguration(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "disable_reconfiguration", [], args);

}

function emit_genesis_reconfiguration_event() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "emit_genesis_reconfiguration_event", [], args);

}

function enable_reconfiguration(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "enable_reconfiguration", [], args);

}

function last_reconfiguration_time(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "last_reconfiguration_time", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function reconfiguration_enabled(): [boolean] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "reconfiguration_enabled", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function reconfigure() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "reconfigure", [], args);

}

export const reconfiguration = {
    Configuration,
    DisableReconfiguration,
    NewEpoch,
    NewEpochEvent,
    initialize,
    current_epoch,
    disable_reconfiguration,
    emit_genesis_reconfiguration_event,
    enable_reconfiguration,
    last_reconfiguration_time,
    reconfiguration_enabled,
    reconfigure
}