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
let MODULE_NAME: string = "atomic_bridge_counterparty";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== BridgeCounterpartyEvents =============================== */

export class BridgeCounterpartyEvents implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BridgeCounterpartyEvents`;

    bridge_transfer_locked_events: EventHandle;
    bridge_transfer_completed_events: EventHandle;
    bridge_transfer_cancelled_events: EventHandle;

    constructor(bridge_transfer_locked_events ? : EventHandle, bridge_transfer_completed_events ? : EventHandle, bridge_transfer_cancelled_events ? : EventHandle) {
        this.bridge_transfer_locked_events = bridge_transfer_locked_events;
        this.bridge_transfer_completed_events = bridge_transfer_completed_events;
        this.bridge_transfer_cancelled_events = bridge_transfer_cancelled_events;
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
        return BridgeCounterpartyEvents.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BridgeCounterpartyEvents.from_bcs_vector(args)
    }

    get_bcs() {
        return BridgeCounterpartyEvents.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BridgeCounterpartyEvents`
    }

    from(arg: BridgeCounterpartyEvents) {
        this.bridge_transfer_locked_events = arg.bridge_transfer_locked_events;
        this.bridge_transfer_completed_events = arg.bridge_transfer_completed_events;
        this.bridge_transfer_cancelled_events = arg.bridge_transfer_cancelled_events;
    }

    static from_bcs(arg: {
        bridge_transfer_locked_events: EventHandle,
        bridge_transfer_completed_events: EventHandle,
        bridge_transfer_cancelled_events: EventHandle
    }): BridgeCounterpartyEvents {
        return new BridgeCounterpartyEvents(arg.bridge_transfer_locked_events, arg.bridge_transfer_completed_events, arg.bridge_transfer_cancelled_events)
    }

    static from_bcs_vector(args: {
        bridge_transfer_locked_events: EventHandle,
        bridge_transfer_completed_events: EventHandle,
        bridge_transfer_cancelled_events: EventHandle
    } []): BridgeCounterpartyEvents[] {
        return args.map(function(arg) {
            return new BridgeCounterpartyEvents(arg.bridge_transfer_locked_events, arg.bridge_transfer_completed_events, arg.bridge_transfer_cancelled_events)
        })
    }

    static get bcs() {
        return bcs_import.struct("BridgeCounterpartyEvents", {
            bridge_transfer_locked_events: EventHandle.bcs,
            bridge_transfer_completed_events: EventHandle.bcs,
            bridge_transfer_cancelled_events: EventHandle.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BridgeCounterpartyEvents(val.bridge_transfer_locked_events, val.bridge_transfer_completed_events, val.bridge_transfer_cancelled_events),
        });
    };
}

/* ============================== BridgeTransferCancelledEvent =============================== */

export class BridgeTransferCancelledEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BridgeTransferCancelledEvent`;

    bridge_transfer_id: number[];

    constructor(bridge_transfer_id: number[]) {
        this.bridge_transfer_id = bridge_transfer_id;
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
        return BridgeTransferCancelledEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BridgeTransferCancelledEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return BridgeTransferCancelledEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BridgeTransferCancelledEvent`
    }

    from(arg: BridgeTransferCancelledEvent) {
        this.bridge_transfer_id = arg.bridge_transfer_id;
    }

    static from_bcs(arg: {
        bridge_transfer_id: number[]
    }): BridgeTransferCancelledEvent {
        return new BridgeTransferCancelledEvent(arg.bridge_transfer_id)
    }

    static from_bcs_vector(args: {
        bridge_transfer_id: number[]
    } []): BridgeTransferCancelledEvent[] {
        return args.map(function(arg) {
            return new BridgeTransferCancelledEvent(arg.bridge_transfer_id)
        })
    }

    static get bcs() {
        return bcs_import.struct("BridgeTransferCancelledEvent", {
            bridge_transfer_id: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BridgeTransferCancelledEvent(val.bridge_transfer_id),
        });
    };
}

/* ============================== BridgeTransferCompletedEvent =============================== */

export class BridgeTransferCompletedEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BridgeTransferCompletedEvent`;

    bridge_transfer_id: number[];
    pre_image: number[];

    constructor(bridge_transfer_id: number[], pre_image: number[]) {
        this.bridge_transfer_id = bridge_transfer_id;
        this.pre_image = pre_image;
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
        return BridgeTransferCompletedEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BridgeTransferCompletedEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return BridgeTransferCompletedEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BridgeTransferCompletedEvent`
    }

    from(arg: BridgeTransferCompletedEvent) {
        this.bridge_transfer_id = arg.bridge_transfer_id;
        this.pre_image = arg.pre_image;
    }

    static from_bcs(arg: {
        bridge_transfer_id: number[],
        pre_image: number[]
    }): BridgeTransferCompletedEvent {
        return new BridgeTransferCompletedEvent(arg.bridge_transfer_id, arg.pre_image)
    }

    static from_bcs_vector(args: {
        bridge_transfer_id: number[],
        pre_image: number[]
    } []): BridgeTransferCompletedEvent[] {
        return args.map(function(arg) {
            return new BridgeTransferCompletedEvent(arg.bridge_transfer_id, arg.pre_image)
        })
    }

    static get bcs() {
        return bcs_import.struct("BridgeTransferCompletedEvent", {
            bridge_transfer_id: bcs_import.vector(bcs_import.u8()),
            pre_image: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BridgeTransferCompletedEvent(val.bridge_transfer_id, val.pre_image),
        });
    };
}

/* ============================== BridgeTransferLockedEvent =============================== */

export class BridgeTransferLockedEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BridgeTransferLockedEvent`;

    bridge_transfer_id: number[];
    initiator: number[];
    recipient: string;
    amount: u64_import;
    hash_lock: number[];
    time_lock: u64_import;

    constructor(bridge_transfer_id: number[], initiator: number[], recipient: string, amount: u64_import, hash_lock: number[], time_lock: u64_import) {
        this.bridge_transfer_id = bridge_transfer_id;
        this.initiator = initiator;
        this.recipient = recipient;
        this.amount = amount;
        this.hash_lock = hash_lock;
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
        return BridgeTransferLockedEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BridgeTransferLockedEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return BridgeTransferLockedEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BridgeTransferLockedEvent`
    }

    from(arg: BridgeTransferLockedEvent) {
        this.bridge_transfer_id = arg.bridge_transfer_id;
        this.initiator = arg.initiator;
        this.recipient = arg.recipient;
        this.amount = arg.amount;
        this.hash_lock = arg.hash_lock;
        this.time_lock = arg.time_lock;
    }

    static from_bcs(arg: {
        bridge_transfer_id: number[],
        initiator: number[],
        recipient: string,
        amount: u64_import,
        hash_lock: number[],
        time_lock: u64_import
    }): BridgeTransferLockedEvent {
        return new BridgeTransferLockedEvent(arg.bridge_transfer_id, arg.initiator, arg.recipient, arg.amount, arg.hash_lock, arg.time_lock)
    }

    static from_bcs_vector(args: {
        bridge_transfer_id: number[],
        initiator: number[],
        recipient: string,
        amount: u64_import,
        hash_lock: number[],
        time_lock: u64_import
    } []): BridgeTransferLockedEvent[] {
        return args.map(function(arg) {
            return new BridgeTransferLockedEvent(arg.bridge_transfer_id, arg.initiator, arg.recipient, arg.amount, arg.hash_lock, arg.time_lock)
        })
    }

    static get bcs() {
        return bcs_import.struct("BridgeTransferLockedEvent", {
            bridge_transfer_id: bcs_import.vector(bcs_import.u8()),
            initiator: bcs_import.vector(bcs_import.u8()),
            recipient: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
            hash_lock: bcs_import.vector(bcs_import.u8()),
            time_lock: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BridgeTransferLockedEvent(val.bridge_transfer_id, val.initiator, val.recipient, val.amount, val.hash_lock, val.time_lock),
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

function abort_bridge_transfer(arg0: string, arg1: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "abort_bridge_transfer", [], args);

}

function complete_bridge_transfer(arg0: number[], arg1: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "complete_bridge_transfer", [], args);

}

function lock_bridge_transfer_assets(arg0: string, arg1: number[], arg2: number[], arg3: number[], arg4: string, arg5: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg5).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "lock_bridge_transfer_assets", [], args);

}

export const atomic_bridge_counterparty = {
    BridgeCounterpartyEvents,
    BridgeTransferCancelledEvent,
    BridgeTransferCompletedEvent,
    BridgeTransferLockedEvent,
    initialize,
    abort_bridge_transfer,
    complete_bridge_transfer,
    lock_bridge_transfer_assets
}