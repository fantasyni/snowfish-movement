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
let MODULE_NAME: string = "atomic_bridge_initiator";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
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

/* ============================== BridgeInitiatorEvents =============================== */

export class BridgeInitiatorEvents implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BridgeInitiatorEvents`;

    bridge_transfer_initiated_events: EventHandle;
    bridge_transfer_completed_events: EventHandle;
    bridge_transfer_refunded_events: EventHandle;

    constructor(bridge_transfer_initiated_events ? : EventHandle, bridge_transfer_completed_events ? : EventHandle, bridge_transfer_refunded_events ? : EventHandle) {
        this.bridge_transfer_initiated_events = bridge_transfer_initiated_events;
        this.bridge_transfer_completed_events = bridge_transfer_completed_events;
        this.bridge_transfer_refunded_events = bridge_transfer_refunded_events;
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
        return BridgeInitiatorEvents.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BridgeInitiatorEvents.from_bcs_vector(args)
    }

    get_bcs() {
        return BridgeInitiatorEvents.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BridgeInitiatorEvents`
    }

    from(arg: BridgeInitiatorEvents) {
        this.bridge_transfer_initiated_events = arg.bridge_transfer_initiated_events;
        this.bridge_transfer_completed_events = arg.bridge_transfer_completed_events;
        this.bridge_transfer_refunded_events = arg.bridge_transfer_refunded_events;
    }

    static from_bcs(arg: {
        bridge_transfer_initiated_events: EventHandle,
        bridge_transfer_completed_events: EventHandle,
        bridge_transfer_refunded_events: EventHandle
    }): BridgeInitiatorEvents {
        return new BridgeInitiatorEvents(arg.bridge_transfer_initiated_events, arg.bridge_transfer_completed_events, arg.bridge_transfer_refunded_events)
    }

    static from_bcs_vector(args: {
        bridge_transfer_initiated_events: EventHandle,
        bridge_transfer_completed_events: EventHandle,
        bridge_transfer_refunded_events: EventHandle
    } []): BridgeInitiatorEvents[] {
        return args.map(function(arg) {
            return new BridgeInitiatorEvents(arg.bridge_transfer_initiated_events, arg.bridge_transfer_completed_events, arg.bridge_transfer_refunded_events)
        })
    }

    static get bcs() {
        return bcs_import.struct("BridgeInitiatorEvents", {
            bridge_transfer_initiated_events: EventHandle.bcs,
            bridge_transfer_completed_events: EventHandle.bcs,
            bridge_transfer_refunded_events: EventHandle.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BridgeInitiatorEvents(val.bridge_transfer_initiated_events, val.bridge_transfer_completed_events, val.bridge_transfer_refunded_events),
        });
    };
}

/* ============================== BridgeTransferInitiatedEvent =============================== */

export class BridgeTransferInitiatedEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BridgeTransferInitiatedEvent`;

    bridge_transfer_id: number[];
    initiator: string;
    recipient: number[];
    amount: u64_import;
    hash_lock: number[];
    time_lock: u64_import;

    constructor(bridge_transfer_id: number[], initiator: string, recipient: number[], amount: u64_import, hash_lock: number[], time_lock: u64_import) {
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
        return BridgeTransferInitiatedEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BridgeTransferInitiatedEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return BridgeTransferInitiatedEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BridgeTransferInitiatedEvent`
    }

    from(arg: BridgeTransferInitiatedEvent) {
        this.bridge_transfer_id = arg.bridge_transfer_id;
        this.initiator = arg.initiator;
        this.recipient = arg.recipient;
        this.amount = arg.amount;
        this.hash_lock = arg.hash_lock;
        this.time_lock = arg.time_lock;
    }

    static from_bcs(arg: {
        bridge_transfer_id: number[],
        initiator: string,
        recipient: number[],
        amount: u64_import,
        hash_lock: number[],
        time_lock: u64_import
    }): BridgeTransferInitiatedEvent {
        return new BridgeTransferInitiatedEvent(arg.bridge_transfer_id, arg.initiator, arg.recipient, arg.amount, arg.hash_lock, arg.time_lock)
    }

    static from_bcs_vector(args: {
        bridge_transfer_id: number[],
        initiator: string,
        recipient: number[],
        amount: u64_import,
        hash_lock: number[],
        time_lock: u64_import
    } []): BridgeTransferInitiatedEvent[] {
        return args.map(function(arg) {
            return new BridgeTransferInitiatedEvent(arg.bridge_transfer_id, arg.initiator, arg.recipient, arg.amount, arg.hash_lock, arg.time_lock)
        })
    }

    static get bcs() {
        return bcs_import.struct("BridgeTransferInitiatedEvent", {
            bridge_transfer_id: bcs_import.vector(bcs_import.u8()),
            initiator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            recipient: bcs_import.vector(bcs_import.u8()),
            amount: bcs_import.u64(),
            hash_lock: bcs_import.vector(bcs_import.u8()),
            time_lock: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BridgeTransferInitiatedEvent(val.bridge_transfer_id, val.initiator, val.recipient, val.amount, val.hash_lock, val.time_lock),
        });
    };
}

/* ============================== BridgeTransferRefundedEvent =============================== */

export class BridgeTransferRefundedEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BridgeTransferRefundedEvent`;

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
        return BridgeTransferRefundedEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BridgeTransferRefundedEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return BridgeTransferRefundedEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BridgeTransferRefundedEvent`
    }

    from(arg: BridgeTransferRefundedEvent) {
        this.bridge_transfer_id = arg.bridge_transfer_id;
    }

    static from_bcs(arg: {
        bridge_transfer_id: number[]
    }): BridgeTransferRefundedEvent {
        return new BridgeTransferRefundedEvent(arg.bridge_transfer_id)
    }

    static from_bcs_vector(args: {
        bridge_transfer_id: number[]
    } []): BridgeTransferRefundedEvent[] {
        return args.map(function(arg) {
            return new BridgeTransferRefundedEvent(arg.bridge_transfer_id)
        })
    }

    static get bcs() {
        return bcs_import.struct("BridgeTransferRefundedEvent", {
            bridge_transfer_id: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BridgeTransferRefundedEvent(val.bridge_transfer_id),
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

function complete_bridge_transfer(arg0: string, arg1: number[], arg2: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "complete_bridge_transfer", [], args);

}

function initiate_bridge_transfer(arg0: string, arg1: number[], arg2: number[], arg3: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initiate_bridge_transfer", [], args);

}

function refund_bridge_transfer(arg0: string, arg1: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "refund_bridge_transfer", [], args);

}

export const atomic_bridge_initiator = {
    BridgeTransferCompletedEvent,
    BridgeInitiatorEvents,
    BridgeTransferInitiatedEvent,
    BridgeTransferRefundedEvent,
    initialize,
    complete_bridge_transfer,
    initiate_bridge_transfer,
    refund_bridge_transfer
}