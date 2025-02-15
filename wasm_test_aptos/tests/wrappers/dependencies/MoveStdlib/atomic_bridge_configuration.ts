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
let MODULE_NAME: string = "atomic_bridge_configuration";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== BridgeConfig =============================== */

export class BridgeConfig implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BridgeConfig`;

    bridge_operator: string;
    initiator_time_lock: u64_import;
    counterparty_time_lock: u64_import;

    constructor(bridge_operator ? : string, initiator_time_lock ? : u64_import, counterparty_time_lock ? : u64_import) {
        this.bridge_operator = bridge_operator;
        this.initiator_time_lock = initiator_time_lock;
        this.counterparty_time_lock = counterparty_time_lock;
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
        return BridgeConfig.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BridgeConfig.from_bcs_vector(args)
    }

    get_bcs() {
        return BridgeConfig.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BridgeConfig`
    }

    from(arg: BridgeConfig) {
        this.bridge_operator = arg.bridge_operator;
        this.initiator_time_lock = arg.initiator_time_lock;
        this.counterparty_time_lock = arg.counterparty_time_lock;
    }

    static from_bcs(arg: {
        bridge_operator: string,
        initiator_time_lock: u64_import,
        counterparty_time_lock: u64_import
    }): BridgeConfig {
        return new BridgeConfig(arg.bridge_operator, arg.initiator_time_lock, arg.counterparty_time_lock)
    }

    static from_bcs_vector(args: {
        bridge_operator: string,
        initiator_time_lock: u64_import,
        counterparty_time_lock: u64_import
    } []): BridgeConfig[] {
        return args.map(function(arg) {
            return new BridgeConfig(arg.bridge_operator, arg.initiator_time_lock, arg.counterparty_time_lock)
        })
    }

    static get bcs() {
        return bcs_import.struct("BridgeConfig", {
            bridge_operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            initiator_time_lock: bcs_import.u64(),
            counterparty_time_lock: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BridgeConfig(val.bridge_operator, val.initiator_time_lock, val.counterparty_time_lock),
        });
    };
}

/* ============================== BridgeConfigOperatorUpdated =============================== */

export class BridgeConfigOperatorUpdated implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BridgeConfigOperatorUpdated`;

    old_operator: string;
    new_operator: string;

    constructor(old_operator: string, new_operator: string) {
        this.old_operator = old_operator;
        this.new_operator = new_operator;
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
        return BridgeConfigOperatorUpdated.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BridgeConfigOperatorUpdated.from_bcs_vector(args)
    }

    get_bcs() {
        return BridgeConfigOperatorUpdated.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BridgeConfigOperatorUpdated`
    }

    from(arg: BridgeConfigOperatorUpdated) {
        this.old_operator = arg.old_operator;
        this.new_operator = arg.new_operator;
    }

    static from_bcs(arg: {
        old_operator: string,
        new_operator: string
    }): BridgeConfigOperatorUpdated {
        return new BridgeConfigOperatorUpdated(arg.old_operator, arg.new_operator)
    }

    static from_bcs_vector(args: {
        old_operator: string,
        new_operator: string
    } []): BridgeConfigOperatorUpdated[] {
        return args.map(function(arg) {
            return new BridgeConfigOperatorUpdated(arg.old_operator, arg.new_operator)
        })
    }

    static get bcs() {
        return bcs_import.struct("BridgeConfigOperatorUpdated", {
            old_operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            new_operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BridgeConfigOperatorUpdated(val.old_operator, val.new_operator),
        });
    };
}

/* ============================== CounterpartyTimeLockUpdated =============================== */

export class CounterpartyTimeLockUpdated implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CounterpartyTimeLockUpdated`;

    time_lock: u64_import;

    constructor(time_lock: u64_import) {
        this.time_lock = time_lock;
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
        return CounterpartyTimeLockUpdated.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CounterpartyTimeLockUpdated.from_bcs_vector(args)
    }

    get_bcs() {
        return CounterpartyTimeLockUpdated.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CounterpartyTimeLockUpdated`
    }

    from(arg: CounterpartyTimeLockUpdated) {
        this.time_lock = arg.time_lock;
    }

    static from_bcs(arg: {
        time_lock: u64_import
    }): CounterpartyTimeLockUpdated {
        return new CounterpartyTimeLockUpdated(arg.time_lock)
    }

    static from_bcs_vector(args: {
        time_lock: u64_import
    } []): CounterpartyTimeLockUpdated[] {
        return args.map(function(arg) {
            return new CounterpartyTimeLockUpdated(arg.time_lock)
        })
    }

    static get bcs() {
        return bcs_import.struct("CounterpartyTimeLockUpdated", {
            time_lock: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CounterpartyTimeLockUpdated(val.time_lock),
        });
    };
}

/* ============================== InitiatorTimeLockUpdated =============================== */

export class InitiatorTimeLockUpdated implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::InitiatorTimeLockUpdated`;

    time_lock: u64_import;

    constructor(time_lock: u64_import) {
        this.time_lock = time_lock;
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
        return InitiatorTimeLockUpdated.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return InitiatorTimeLockUpdated.from_bcs_vector(args)
    }

    get_bcs() {
        return InitiatorTimeLockUpdated.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::InitiatorTimeLockUpdated`
    }

    from(arg: InitiatorTimeLockUpdated) {
        this.time_lock = arg.time_lock;
    }

    static from_bcs(arg: {
        time_lock: u64_import
    }): InitiatorTimeLockUpdated {
        return new InitiatorTimeLockUpdated(arg.time_lock)
    }

    static from_bcs_vector(args: {
        time_lock: u64_import
    } []): InitiatorTimeLockUpdated[] {
        return args.map(function(arg) {
            return new InitiatorTimeLockUpdated(arg.time_lock)
        })
    }

    static get bcs() {
        return bcs_import.struct("InitiatorTimeLockUpdated", {
            time_lock: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new InitiatorTimeLockUpdated(val.time_lock),
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

function assert_is_caller_operator(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_is_caller_operator", [], args);

}

function bridge_operator(): [string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bridge_operator", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function counterparty_timelock_duration(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "counterparty_timelock_duration", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function initiator_timelock_duration(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initiator_timelock_duration", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function set_counterparty_time_lock_duration(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_counterparty_time_lock_duration", [], args);

}

function set_initiator_time_lock_duration(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_initiator_time_lock_duration", [], args);

}

function update_bridge_operator(arg0: string, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_bridge_operator", [], args);

}

export const atomic_bridge_configuration = {
    BridgeConfig,
    BridgeConfigOperatorUpdated,
    CounterpartyTimeLockUpdated,
    InitiatorTimeLockUpdated,
    initialize,
    assert_is_caller_operator,
    bridge_operator,
    counterparty_timelock_duration,
    initiator_timelock_duration,
    set_counterparty_time_lock_duration,
    set_initiator_time_lock_duration,
    update_bridge_operator
}