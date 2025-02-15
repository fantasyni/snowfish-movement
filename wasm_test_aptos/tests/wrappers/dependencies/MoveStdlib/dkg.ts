import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    Option
} from "./option";
import {
    RandomnessConfig
} from "./randomness_config";
import {
    ValidatorConsensusInfo
} from "./validator_consensus_info";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "dkg";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== DKGSessionMetadata =============================== */

export class DKGSessionMetadata implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DKGSessionMetadata`;

    dealer_epoch: u64_import;
    randomness_config: RandomnessConfig;
    dealer_validator_set: ValidatorConsensusInfo[];
    target_validator_set: ValidatorConsensusInfo[];

    constructor(dealer_epoch: u64_import, randomness_config: RandomnessConfig, dealer_validator_set: ValidatorConsensusInfo[], target_validator_set: ValidatorConsensusInfo[]) {
        this.dealer_epoch = dealer_epoch;
        this.randomness_config = randomness_config;
        this.dealer_validator_set = dealer_validator_set;
        this.target_validator_set = target_validator_set;
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
        return DKGSessionMetadata.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DKGSessionMetadata.from_bcs_vector(args)
    }

    get_bcs() {
        return DKGSessionMetadata.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DKGSessionMetadata`
    }

    from(arg: DKGSessionMetadata) {
        this.dealer_epoch = arg.dealer_epoch;
        this.randomness_config = arg.randomness_config;
        this.dealer_validator_set = arg.dealer_validator_set;
        this.target_validator_set = arg.target_validator_set;
    }

    static from_bcs(arg: {
        dealer_epoch: u64_import,
        randomness_config: RandomnessConfig,
        dealer_validator_set: ValidatorConsensusInfo[],
        target_validator_set: ValidatorConsensusInfo[]
    }): DKGSessionMetadata {
        return new DKGSessionMetadata(arg.dealer_epoch, arg.randomness_config, arg.dealer_validator_set, arg.target_validator_set)
    }

    static from_bcs_vector(args: {
        dealer_epoch: u64_import,
        randomness_config: RandomnessConfig,
        dealer_validator_set: ValidatorConsensusInfo[],
        target_validator_set: ValidatorConsensusInfo[]
    } []): DKGSessionMetadata[] {
        return args.map(function(arg) {
            return new DKGSessionMetadata(arg.dealer_epoch, arg.randomness_config, arg.dealer_validator_set, arg.target_validator_set)
        })
    }

    static get bcs() {
        return bcs_import.struct("DKGSessionMetadata", {
            dealer_epoch: bcs_import.u64(),
            randomness_config: RandomnessConfig.bcs,
            dealer_validator_set: bcs_import.vector(ValidatorConsensusInfo.bcs),
            target_validator_set: bcs_import.vector(ValidatorConsensusInfo.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DKGSessionMetadata(val.dealer_epoch, val.randomness_config, val.dealer_validator_set, val.target_validator_set),
        });
    };
}

/* ============================== DKGSessionState =============================== */

export class DKGSessionState implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DKGSessionState`;

    metadata: DKGSessionMetadata;
    start_time_us: u64_import;
    transcript: number[];

    constructor(metadata: DKGSessionMetadata, start_time_us: u64_import, transcript: number[]) {
        this.metadata = metadata;
        this.start_time_us = start_time_us;
        this.transcript = transcript;
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
        return DKGSessionState.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DKGSessionState.from_bcs_vector(args)
    }

    get_bcs() {
        return DKGSessionState.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DKGSessionState`
    }

    from(arg: DKGSessionState) {
        this.metadata = arg.metadata;
        this.start_time_us = arg.start_time_us;
        this.transcript = arg.transcript;
    }

    static from_bcs(arg: {
        metadata: DKGSessionMetadata,
        start_time_us: u64_import,
        transcript: number[]
    }): DKGSessionState {
        return new DKGSessionState(arg.metadata, arg.start_time_us, arg.transcript)
    }

    static from_bcs_vector(args: {
        metadata: DKGSessionMetadata,
        start_time_us: u64_import,
        transcript: number[]
    } []): DKGSessionState[] {
        return args.map(function(arg) {
            return new DKGSessionState(arg.metadata, arg.start_time_us, arg.transcript)
        })
    }

    static get bcs() {
        return bcs_import.struct("DKGSessionState", {
            metadata: DKGSessionMetadata.bcs,
            start_time_us: bcs_import.u64(),
            transcript: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DKGSessionState(val.metadata, val.start_time_us, val.transcript),
        });
    };
}

/* ============================== DKGStartEvent =============================== */

export class DKGStartEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DKGStartEvent`;

    session_metadata: DKGSessionMetadata;
    start_time_us: u64_import;

    constructor(session_metadata: DKGSessionMetadata, start_time_us: u64_import) {
        this.session_metadata = session_metadata;
        this.start_time_us = start_time_us;
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
        return DKGStartEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DKGStartEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return DKGStartEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DKGStartEvent`
    }

    from(arg: DKGStartEvent) {
        this.session_metadata = arg.session_metadata;
        this.start_time_us = arg.start_time_us;
    }

    static from_bcs(arg: {
        session_metadata: DKGSessionMetadata,
        start_time_us: u64_import
    }): DKGStartEvent {
        return new DKGStartEvent(arg.session_metadata, arg.start_time_us)
    }

    static from_bcs_vector(args: {
        session_metadata: DKGSessionMetadata,
        start_time_us: u64_import
    } []): DKGStartEvent[] {
        return args.map(function(arg) {
            return new DKGStartEvent(arg.session_metadata, arg.start_time_us)
        })
    }

    static get bcs() {
        return bcs_import.struct("DKGStartEvent", {
            session_metadata: DKGSessionMetadata.bcs,
            start_time_us: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DKGStartEvent(val.session_metadata, val.start_time_us),
        });
    };
}

/* ============================== DKGState =============================== */

export class DKGState implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DKGState`;

    last_completed: Option < DKGSessionState > ;
    in_progress: Option < DKGSessionState > ;

    constructor(last_completed ? : Option < DKGSessionState > , in_progress ? : Option < DKGSessionState > ) {
        this.last_completed = last_completed;
        this.in_progress = in_progress;
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
        return DKGState.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DKGState.from_bcs_vector(args)
    }

    get_bcs() {
        return DKGState.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DKGState`
    }

    from(arg: DKGState) {
        this.last_completed = arg.last_completed;
        this.in_progress = arg.in_progress;
    }

    static from_bcs(arg: {
        last_completed: Option < DKGSessionState > ,
        in_progress: Option < DKGSessionState >
    }): DKGState {
        return new DKGState(arg.last_completed, arg.in_progress)
    }

    static from_bcs_vector(args: {
        last_completed: Option < DKGSessionState > ,
        in_progress: Option < DKGSessionState >
    } []): DKGState[] {
        return args.map(function(arg) {
            return new DKGState(arg.last_completed, arg.in_progress)
        })
    }

    static get bcs() {
        return bcs_import.struct("DKGState", {
            last_completed: Option.bcs(DKGSessionState.bcs),
            in_progress: Option.bcs(DKGSessionState.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DKGState(val.last_completed, val.in_progress),
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

function finish(arg0: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "finish", [], args);

}

function incomplete_session(): [Option < DKGSessionState > ] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "incomplete_session", [], args);

    return [
        Option.from_bcs(Option.bcs(DKGSessionState.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function session_dealer_epoch(arg0: DKGSessionState): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DKGSessionState.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "session_dealer_epoch", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function start(arg0: u64_import, arg1: RandomnessConfig, arg2: ValidatorConsensusInfo[], arg3: ValidatorConsensusInfo[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(RandomnessConfig.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(ValidatorConsensusInfo.bcs).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(ValidatorConsensusInfo.bcs).serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "start", [], args);

}

function try_clear_incomplete_session(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "try_clear_incomplete_session", [], args);

}

export const dkg = {
    DKGSessionMetadata,
    DKGSessionState,
    DKGStartEvent,
    DKGState,
    initialize,
    finish,
    incomplete_session,
    session_dealer_epoch,
    start,
    try_clear_incomplete_session
}