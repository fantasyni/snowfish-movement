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
    Option
} from "./option";
import {
    TableWithLength
} from "./table_with_length";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "block";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== BlockResource =============================== */

export class BlockResource implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BlockResource`;

    height: u64_import;
    epoch_interval: u64_import;
    new_block_events: EventHandle;
    update_epoch_interval_events: EventHandle;

    constructor(height ? : u64_import, epoch_interval ? : u64_import, new_block_events ? : EventHandle, update_epoch_interval_events ? : EventHandle) {
        this.height = height;
        this.epoch_interval = epoch_interval;
        this.new_block_events = new_block_events;
        this.update_epoch_interval_events = update_epoch_interval_events;
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
        return BlockResource.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BlockResource.from_bcs_vector(args)
    }

    get_bcs() {
        return BlockResource.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BlockResource`
    }

    from(arg: BlockResource) {
        this.height = arg.height;
        this.epoch_interval = arg.epoch_interval;
        this.new_block_events = arg.new_block_events;
        this.update_epoch_interval_events = arg.update_epoch_interval_events;
    }

    static from_bcs(arg: {
        height: u64_import,
        epoch_interval: u64_import,
        new_block_events: EventHandle,
        update_epoch_interval_events: EventHandle
    }): BlockResource {
        return new BlockResource(arg.height, arg.epoch_interval, arg.new_block_events, arg.update_epoch_interval_events)
    }

    static from_bcs_vector(args: {
        height: u64_import,
        epoch_interval: u64_import,
        new_block_events: EventHandle,
        update_epoch_interval_events: EventHandle
    } []): BlockResource[] {
        return args.map(function(arg) {
            return new BlockResource(arg.height, arg.epoch_interval, arg.new_block_events, arg.update_epoch_interval_events)
        })
    }

    static get bcs() {
        return bcs_import.struct("BlockResource", {
            height: bcs_import.u64(),
            epoch_interval: bcs_import.u64(),
            new_block_events: EventHandle.bcs,
            update_epoch_interval_events: EventHandle.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BlockResource(val.height, val.epoch_interval, val.new_block_events, val.update_epoch_interval_events),
        });
    };
}

/* ============================== CommitHistory =============================== */

export class CommitHistory implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CommitHistory`;

    max_capacity: number;
    next_idx: number;
    table: TableWithLength;

    constructor(max_capacity ? : number, next_idx ? : number, table ? : TableWithLength) {
        this.max_capacity = max_capacity;
        this.next_idx = next_idx;
        this.table = table;
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
        return CommitHistory.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CommitHistory.from_bcs_vector(args)
    }

    get_bcs() {
        return CommitHistory.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CommitHistory`
    }

    from(arg: CommitHistory) {
        this.max_capacity = arg.max_capacity;
        this.next_idx = arg.next_idx;
        this.table = arg.table;
    }

    static from_bcs(arg: {
        max_capacity: number,
        next_idx: number,
        table: TableWithLength
    }): CommitHistory {
        return new CommitHistory(arg.max_capacity, arg.next_idx, arg.table)
    }

    static from_bcs_vector(args: {
        max_capacity: number,
        next_idx: number,
        table: TableWithLength
    } []): CommitHistory[] {
        return args.map(function(arg) {
            return new CommitHistory(arg.max_capacity, arg.next_idx, arg.table)
        })
    }

    static get bcs() {
        return bcs_import.struct("CommitHistory", {
            max_capacity: bcs_import.u32(),
            next_idx: bcs_import.u32(),
            table: TableWithLength.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CommitHistory(val.max_capacity, val.next_idx, val.table),
        });
    };
}

/* ============================== NewBlock =============================== */

export class NewBlock implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::NewBlock`;

    hash: string;
    epoch: u64_import;
    round: u64_import;
    height: u64_import;
    previous_block_votes_bitvec: number[];
    proposer: string;
    failed_proposer_indices: u64_import[];
    time_microseconds: u64_import;

    constructor(hash: string, epoch: u64_import, round: u64_import, height: u64_import, previous_block_votes_bitvec: number[], proposer: string, failed_proposer_indices: u64_import[], time_microseconds: u64_import) {
        this.hash = hash;
        this.epoch = epoch;
        this.round = round;
        this.height = height;
        this.previous_block_votes_bitvec = previous_block_votes_bitvec;
        this.proposer = proposer;
        this.failed_proposer_indices = failed_proposer_indices;
        this.time_microseconds = time_microseconds;
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
        return NewBlock.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return NewBlock.from_bcs_vector(args)
    }

    get_bcs() {
        return NewBlock.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::NewBlock`
    }

    from(arg: NewBlock) {
        this.hash = arg.hash;
        this.epoch = arg.epoch;
        this.round = arg.round;
        this.height = arg.height;
        this.previous_block_votes_bitvec = arg.previous_block_votes_bitvec;
        this.proposer = arg.proposer;
        this.failed_proposer_indices = arg.failed_proposer_indices;
        this.time_microseconds = arg.time_microseconds;
    }

    static from_bcs(arg: {
        hash: string,
        epoch: u64_import,
        round: u64_import,
        height: u64_import,
        previous_block_votes_bitvec: number[],
        proposer: string,
        failed_proposer_indices: u64_import[],
        time_microseconds: u64_import
    }): NewBlock {
        return new NewBlock(arg.hash, arg.epoch, arg.round, arg.height, arg.previous_block_votes_bitvec, arg.proposer, arg.failed_proposer_indices, arg.time_microseconds)
    }

    static from_bcs_vector(args: {
        hash: string,
        epoch: u64_import,
        round: u64_import,
        height: u64_import,
        previous_block_votes_bitvec: number[],
        proposer: string,
        failed_proposer_indices: u64_import[],
        time_microseconds: u64_import
    } []): NewBlock[] {
        return args.map(function(arg) {
            return new NewBlock(arg.hash, arg.epoch, arg.round, arg.height, arg.previous_block_votes_bitvec, arg.proposer, arg.failed_proposer_indices, arg.time_microseconds)
        })
    }

    static get bcs() {
        return bcs_import.struct("NewBlock", {
            hash: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            epoch: bcs_import.u64(),
            round: bcs_import.u64(),
            height: bcs_import.u64(),
            previous_block_votes_bitvec: bcs_import.vector(bcs_import.u8()),
            proposer: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            failed_proposer_indices: bcs_import.vector(bcs_import.u64()),
            time_microseconds: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new NewBlock(val.hash, val.epoch, val.round, val.height, val.previous_block_votes_bitvec, val.proposer, val.failed_proposer_indices, val.time_microseconds),
        });
    };
}

/* ============================== NewBlockEvent =============================== */

export class NewBlockEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::NewBlockEvent`;

    hash: string;
    epoch: u64_import;
    round: u64_import;
    height: u64_import;
    previous_block_votes_bitvec: number[];
    proposer: string;
    failed_proposer_indices: u64_import[];
    time_microseconds: u64_import;

    constructor(hash: string, epoch: u64_import, round: u64_import, height: u64_import, previous_block_votes_bitvec: number[], proposer: string, failed_proposer_indices: u64_import[], time_microseconds: u64_import) {
        this.hash = hash;
        this.epoch = epoch;
        this.round = round;
        this.height = height;
        this.previous_block_votes_bitvec = previous_block_votes_bitvec;
        this.proposer = proposer;
        this.failed_proposer_indices = failed_proposer_indices;
        this.time_microseconds = time_microseconds;
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
        return NewBlockEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return NewBlockEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return NewBlockEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::NewBlockEvent`
    }

    from(arg: NewBlockEvent) {
        this.hash = arg.hash;
        this.epoch = arg.epoch;
        this.round = arg.round;
        this.height = arg.height;
        this.previous_block_votes_bitvec = arg.previous_block_votes_bitvec;
        this.proposer = arg.proposer;
        this.failed_proposer_indices = arg.failed_proposer_indices;
        this.time_microseconds = arg.time_microseconds;
    }

    static from_bcs(arg: {
        hash: string,
        epoch: u64_import,
        round: u64_import,
        height: u64_import,
        previous_block_votes_bitvec: number[],
        proposer: string,
        failed_proposer_indices: u64_import[],
        time_microseconds: u64_import
    }): NewBlockEvent {
        return new NewBlockEvent(arg.hash, arg.epoch, arg.round, arg.height, arg.previous_block_votes_bitvec, arg.proposer, arg.failed_proposer_indices, arg.time_microseconds)
    }

    static from_bcs_vector(args: {
        hash: string,
        epoch: u64_import,
        round: u64_import,
        height: u64_import,
        previous_block_votes_bitvec: number[],
        proposer: string,
        failed_proposer_indices: u64_import[],
        time_microseconds: u64_import
    } []): NewBlockEvent[] {
        return args.map(function(arg) {
            return new NewBlockEvent(arg.hash, arg.epoch, arg.round, arg.height, arg.previous_block_votes_bitvec, arg.proposer, arg.failed_proposer_indices, arg.time_microseconds)
        })
    }

    static get bcs() {
        return bcs_import.struct("NewBlockEvent", {
            hash: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            epoch: bcs_import.u64(),
            round: bcs_import.u64(),
            height: bcs_import.u64(),
            previous_block_votes_bitvec: bcs_import.vector(bcs_import.u8()),
            proposer: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            failed_proposer_indices: bcs_import.vector(bcs_import.u64()),
            time_microseconds: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new NewBlockEvent(val.hash, val.epoch, val.round, val.height, val.previous_block_votes_bitvec, val.proposer, val.failed_proposer_indices, val.time_microseconds),
        });
    };
}

/* ============================== UpdateEpochInterval =============================== */

export class UpdateEpochInterval implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpdateEpochInterval`;

    old_epoch_interval: u64_import;
    new_epoch_interval: u64_import;

    constructor(old_epoch_interval: u64_import, new_epoch_interval: u64_import) {
        this.old_epoch_interval = old_epoch_interval;
        this.new_epoch_interval = new_epoch_interval;
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
        return UpdateEpochInterval.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UpdateEpochInterval.from_bcs_vector(args)
    }

    get_bcs() {
        return UpdateEpochInterval.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UpdateEpochInterval`
    }

    from(arg: UpdateEpochInterval) {
        this.old_epoch_interval = arg.old_epoch_interval;
        this.new_epoch_interval = arg.new_epoch_interval;
    }

    static from_bcs(arg: {
        old_epoch_interval: u64_import,
        new_epoch_interval: u64_import
    }): UpdateEpochInterval {
        return new UpdateEpochInterval(arg.old_epoch_interval, arg.new_epoch_interval)
    }

    static from_bcs_vector(args: {
        old_epoch_interval: u64_import,
        new_epoch_interval: u64_import
    } []): UpdateEpochInterval[] {
        return args.map(function(arg) {
            return new UpdateEpochInterval(arg.old_epoch_interval, arg.new_epoch_interval)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpdateEpochInterval", {
            old_epoch_interval: bcs_import.u64(),
            new_epoch_interval: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UpdateEpochInterval(val.old_epoch_interval, val.new_epoch_interval),
        });
    };
}

/* ============================== UpdateEpochIntervalEvent =============================== */

export class UpdateEpochIntervalEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpdateEpochIntervalEvent`;

    old_epoch_interval: u64_import;
    new_epoch_interval: u64_import;

    constructor(old_epoch_interval: u64_import, new_epoch_interval: u64_import) {
        this.old_epoch_interval = old_epoch_interval;
        this.new_epoch_interval = new_epoch_interval;
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
        return UpdateEpochIntervalEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UpdateEpochIntervalEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return UpdateEpochIntervalEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UpdateEpochIntervalEvent`
    }

    from(arg: UpdateEpochIntervalEvent) {
        this.old_epoch_interval = arg.old_epoch_interval;
        this.new_epoch_interval = arg.new_epoch_interval;
    }

    static from_bcs(arg: {
        old_epoch_interval: u64_import,
        new_epoch_interval: u64_import
    }): UpdateEpochIntervalEvent {
        return new UpdateEpochIntervalEvent(arg.old_epoch_interval, arg.new_epoch_interval)
    }

    static from_bcs_vector(args: {
        old_epoch_interval: u64_import,
        new_epoch_interval: u64_import
    } []): UpdateEpochIntervalEvent[] {
        return args.map(function(arg) {
            return new UpdateEpochIntervalEvent(arg.old_epoch_interval, arg.new_epoch_interval)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpdateEpochIntervalEvent", {
            old_epoch_interval: bcs_import.u64(),
            new_epoch_interval: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UpdateEpochIntervalEvent(val.old_epoch_interval, val.new_epoch_interval),
        });
    };
}

function initialize(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize", [], args);

}

function block_prologue(arg0: string, arg1: string, arg2: u64_import, arg3: u64_import, arg4: string, arg5: u64_import[], arg6: number[], arg7: u64_import) {
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
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u64()).serialize(arg5).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg6).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg7).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "block_prologue", [], args);

}

function block_prologue_common(arg0: string, arg1: string, arg2: u64_import, arg3: u64_import, arg4: string, arg5: u64_import[], arg6: number[], arg7: u64_import): [u64_import] {
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
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u64()).serialize(arg5).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg6).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg7).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "block_prologue_common", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function block_prologue_ext(arg0: string, arg1: string, arg2: u64_import, arg3: u64_import, arg4: string, arg5: u64_import[], arg6: number[], arg7: u64_import, arg8: Option < number[] > ) {
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
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u64()).serialize(arg5).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg6).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg7).toBytes(), ""),
        wasm.new_bytes(Option.bcs(bcs_import.vector(bcs_import.u8())).serialize(arg8).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "block_prologue_ext", [], args);

}

function emit_genesis_block_event(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "emit_genesis_block_event", [], args);

}

function emit_new_block_event(arg0: string, arg1: EventHandle, arg2: NewBlockEvent, arg3: NewBlock) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(EventHandle.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(NewBlockEvent.bcs.serialize(arg2).toBytes(), ""),
        wasm.new_bytes(NewBlock.bcs.serialize(arg3).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "emit_new_block_event", [], args);

    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function emit_writeset_block_event(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "emit_writeset_block_event", [], args);

}

function get_current_block_height(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_current_block_height", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_epoch_interval_secs(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_epoch_interval_secs", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function initialize_commit_history(arg0: string, arg1: number) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u32().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_commit_history", [], args);

}

function update_epoch_interval_microsecs(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_epoch_interval_microsecs", [], args);

}

export const block = {
    BlockResource,
    CommitHistory,
    NewBlock,
    NewBlockEvent,
    UpdateEpochInterval,
    UpdateEpochIntervalEvent,
    initialize,
    block_prologue,
    block_prologue_common,
    block_prologue_ext,
    emit_genesis_block_event,
    emit_new_block_event,
    emit_writeset_block_event,
    get_current_block_height,
    get_epoch_interval_secs,
    initialize_commit_history,
    update_epoch_interval_microsecs
}