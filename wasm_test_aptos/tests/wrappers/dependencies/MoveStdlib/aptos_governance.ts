import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    SignerCapability
} from "./account";
import {
    EventHandle
} from "./event";
import {
    SimpleMap
} from "./simple_map";
import {
    SmartTable
} from "./smart_table";
import {
    Table
} from "./table";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "aptos_governance";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== CreateProposal =============================== */

export class CreateProposal implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CreateProposal`;

    proposer: string;
    stake_pool: string;
    proposal_id: u64_import;
    execution_hash: number[];
    proposal_metadata: SimpleMap < string,
    number[] > ;

    constructor(proposer: string, stake_pool: string, proposal_id: u64_import, execution_hash: number[], proposal_metadata: SimpleMap < string, number[] > ) {
        this.proposer = proposer;
        this.stake_pool = stake_pool;
        this.proposal_id = proposal_id;
        this.execution_hash = execution_hash;
        this.proposal_metadata = proposal_metadata;
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
        return CreateProposal.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CreateProposal.from_bcs_vector(args)
    }

    get_bcs() {
        return CreateProposal.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CreateProposal`
    }

    from(arg: CreateProposal) {
        this.proposer = arg.proposer;
        this.stake_pool = arg.stake_pool;
        this.proposal_id = arg.proposal_id;
        this.execution_hash = arg.execution_hash;
        this.proposal_metadata = arg.proposal_metadata;
    }

    static from_bcs(arg: {
        proposer: string,
        stake_pool: string,
        proposal_id: u64_import,
        execution_hash: number[],
        proposal_metadata: SimpleMap < string,
        number[] >
    }): CreateProposal {
        return new CreateProposal(arg.proposer, arg.stake_pool, arg.proposal_id, arg.execution_hash, arg.proposal_metadata)
    }

    static from_bcs_vector(args: {
        proposer: string,
        stake_pool: string,
        proposal_id: u64_import,
        execution_hash: number[],
        proposal_metadata: SimpleMap < string,
        number[] >
    } []): CreateProposal[] {
        return args.map(function(arg) {
            return new CreateProposal(arg.proposer, arg.stake_pool, arg.proposal_id, arg.execution_hash, arg.proposal_metadata)
        })
    }

    static get bcs() {
        return bcs_import.struct("CreateProposal", {
            proposer: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            stake_pool: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            proposal_id: bcs_import.u64(),
            execution_hash: bcs_import.vector(bcs_import.u8()),
            proposal_metadata: SimpleMap.bcs(bcs_import.string(), bcs_import.vector(bcs_import.u8())),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CreateProposal(val.proposer, val.stake_pool, val.proposal_id, val.execution_hash, val.proposal_metadata),
        });
    };
}

/* ============================== CreateProposalEvent =============================== */

export class CreateProposalEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CreateProposalEvent`;

    proposer: string;
    stake_pool: string;
    proposal_id: u64_import;
    execution_hash: number[];
    proposal_metadata: SimpleMap < string,
    number[] > ;

    constructor(proposer: string, stake_pool: string, proposal_id: u64_import, execution_hash: number[], proposal_metadata: SimpleMap < string, number[] > ) {
        this.proposer = proposer;
        this.stake_pool = stake_pool;
        this.proposal_id = proposal_id;
        this.execution_hash = execution_hash;
        this.proposal_metadata = proposal_metadata;
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
        return CreateProposalEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CreateProposalEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return CreateProposalEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CreateProposalEvent`
    }

    from(arg: CreateProposalEvent) {
        this.proposer = arg.proposer;
        this.stake_pool = arg.stake_pool;
        this.proposal_id = arg.proposal_id;
        this.execution_hash = arg.execution_hash;
        this.proposal_metadata = arg.proposal_metadata;
    }

    static from_bcs(arg: {
        proposer: string,
        stake_pool: string,
        proposal_id: u64_import,
        execution_hash: number[],
        proposal_metadata: SimpleMap < string,
        number[] >
    }): CreateProposalEvent {
        return new CreateProposalEvent(arg.proposer, arg.stake_pool, arg.proposal_id, arg.execution_hash, arg.proposal_metadata)
    }

    static from_bcs_vector(args: {
        proposer: string,
        stake_pool: string,
        proposal_id: u64_import,
        execution_hash: number[],
        proposal_metadata: SimpleMap < string,
        number[] >
    } []): CreateProposalEvent[] {
        return args.map(function(arg) {
            return new CreateProposalEvent(arg.proposer, arg.stake_pool, arg.proposal_id, arg.execution_hash, arg.proposal_metadata)
        })
    }

    static get bcs() {
        return bcs_import.struct("CreateProposalEvent", {
            proposer: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            stake_pool: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            proposal_id: bcs_import.u64(),
            execution_hash: bcs_import.vector(bcs_import.u8()),
            proposal_metadata: SimpleMap.bcs(bcs_import.string(), bcs_import.vector(bcs_import.u8())),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CreateProposalEvent(val.proposer, val.stake_pool, val.proposal_id, val.execution_hash, val.proposal_metadata),
        });
    };
}

/* ============================== Vote =============================== */

export class Vote implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Vote`;

    proposal_id: u64_import;
    voter: string;
    stake_pool: string;
    num_votes: u64_import;
    should_pass: boolean;

    constructor(proposal_id: u64_import, voter: string, stake_pool: string, num_votes: u64_import, should_pass: boolean) {
        this.proposal_id = proposal_id;
        this.voter = voter;
        this.stake_pool = stake_pool;
        this.num_votes = num_votes;
        this.should_pass = should_pass;
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
        return Vote.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Vote.from_bcs_vector(args)
    }

    get_bcs() {
        return Vote.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Vote`
    }

    from(arg: Vote) {
        this.proposal_id = arg.proposal_id;
        this.voter = arg.voter;
        this.stake_pool = arg.stake_pool;
        this.num_votes = arg.num_votes;
        this.should_pass = arg.should_pass;
    }

    static from_bcs(arg: {
        proposal_id: u64_import,
        voter: string,
        stake_pool: string,
        num_votes: u64_import,
        should_pass: boolean
    }): Vote {
        return new Vote(arg.proposal_id, arg.voter, arg.stake_pool, arg.num_votes, arg.should_pass)
    }

    static from_bcs_vector(args: {
        proposal_id: u64_import,
        voter: string,
        stake_pool: string,
        num_votes: u64_import,
        should_pass: boolean
    } []): Vote[] {
        return args.map(function(arg) {
            return new Vote(arg.proposal_id, arg.voter, arg.stake_pool, arg.num_votes, arg.should_pass)
        })
    }

    static get bcs() {
        return bcs_import.struct("Vote", {
            proposal_id: bcs_import.u64(),
            voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            stake_pool: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            num_votes: bcs_import.u64(),
            should_pass: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Vote(val.proposal_id, val.voter, val.stake_pool, val.num_votes, val.should_pass),
        });
    };
}

/* ============================== VoteEvent =============================== */

export class VoteEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VoteEvent`;

    proposal_id: u64_import;
    voter: string;
    stake_pool: string;
    num_votes: u64_import;
    should_pass: boolean;

    constructor(proposal_id: u64_import, voter: string, stake_pool: string, num_votes: u64_import, should_pass: boolean) {
        this.proposal_id = proposal_id;
        this.voter = voter;
        this.stake_pool = stake_pool;
        this.num_votes = num_votes;
        this.should_pass = should_pass;
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
        return VoteEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return VoteEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return VoteEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::VoteEvent`
    }

    from(arg: VoteEvent) {
        this.proposal_id = arg.proposal_id;
        this.voter = arg.voter;
        this.stake_pool = arg.stake_pool;
        this.num_votes = arg.num_votes;
        this.should_pass = arg.should_pass;
    }

    static from_bcs(arg: {
        proposal_id: u64_import,
        voter: string,
        stake_pool: string,
        num_votes: u64_import,
        should_pass: boolean
    }): VoteEvent {
        return new VoteEvent(arg.proposal_id, arg.voter, arg.stake_pool, arg.num_votes, arg.should_pass)
    }

    static from_bcs_vector(args: {
        proposal_id: u64_import,
        voter: string,
        stake_pool: string,
        num_votes: u64_import,
        should_pass: boolean
    } []): VoteEvent[] {
        return args.map(function(arg) {
            return new VoteEvent(arg.proposal_id, arg.voter, arg.stake_pool, arg.num_votes, arg.should_pass)
        })
    }

    static get bcs() {
        return bcs_import.struct("VoteEvent", {
            proposal_id: bcs_import.u64(),
            voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            stake_pool: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            num_votes: bcs_import.u64(),
            should_pass: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new VoteEvent(val.proposal_id, val.voter, val.stake_pool, val.num_votes, val.should_pass),
        });
    };
}

/* ============================== ApprovedExecutionHashes =============================== */

export class ApprovedExecutionHashes implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ApprovedExecutionHashes`;

    hashes: SimpleMap < u64_import,
    number[] > ;

    constructor(hashes ? : SimpleMap < u64_import, number[] > ) {
        this.hashes = hashes;
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
        return ApprovedExecutionHashes.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ApprovedExecutionHashes.from_bcs_vector(args)
    }

    get_bcs() {
        return ApprovedExecutionHashes.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ApprovedExecutionHashes`
    }

    from(arg: ApprovedExecutionHashes) {
        this.hashes = arg.hashes;
    }

    static from_bcs(arg: {
        hashes: SimpleMap < u64_import,
        number[] >
    }): ApprovedExecutionHashes {
        return new ApprovedExecutionHashes(arg.hashes)
    }

    static from_bcs_vector(args: {
        hashes: SimpleMap < u64_import,
        number[] >
    } []): ApprovedExecutionHashes[] {
        return args.map(function(arg) {
            return new ApprovedExecutionHashes(arg.hashes)
        })
    }

    static get bcs() {
        return bcs_import.struct("ApprovedExecutionHashes", {
            hashes: SimpleMap.bcs(bcs_import.u64(), bcs_import.vector(bcs_import.u8())),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ApprovedExecutionHashes(val.hashes),
        });
    };
}

/* ============================== GovernanceConfig =============================== */

export class GovernanceConfig implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::GovernanceConfig`;

    min_voting_threshold: u64_import;
    required_proposer_stake: u64_import;
    voting_duration_secs: u64_import;

    constructor(min_voting_threshold ? : u64_import, required_proposer_stake ? : u64_import, voting_duration_secs ? : u64_import) {
        this.min_voting_threshold = min_voting_threshold;
        this.required_proposer_stake = required_proposer_stake;
        this.voting_duration_secs = voting_duration_secs;
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
        return GovernanceConfig.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return GovernanceConfig.from_bcs_vector(args)
    }

    get_bcs() {
        return GovernanceConfig.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::GovernanceConfig`
    }

    from(arg: GovernanceConfig) {
        this.min_voting_threshold = arg.min_voting_threshold;
        this.required_proposer_stake = arg.required_proposer_stake;
        this.voting_duration_secs = arg.voting_duration_secs;
    }

    static from_bcs(arg: {
        min_voting_threshold: u64_import,
        required_proposer_stake: u64_import,
        voting_duration_secs: u64_import
    }): GovernanceConfig {
        return new GovernanceConfig(arg.min_voting_threshold, arg.required_proposer_stake, arg.voting_duration_secs)
    }

    static from_bcs_vector(args: {
        min_voting_threshold: u64_import,
        required_proposer_stake: u64_import,
        voting_duration_secs: u64_import
    } []): GovernanceConfig[] {
        return args.map(function(arg) {
            return new GovernanceConfig(arg.min_voting_threshold, arg.required_proposer_stake, arg.voting_duration_secs)
        })
    }

    static get bcs() {
        return bcs_import.struct("GovernanceConfig", {
            min_voting_threshold: bcs_import.u128(),
            required_proposer_stake: bcs_import.u64(),
            voting_duration_secs: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new GovernanceConfig(val.min_voting_threshold, val.required_proposer_stake, val.voting_duration_secs),
        });
    };
}

/* ============================== GovernanceEvents =============================== */

export class GovernanceEvents implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::GovernanceEvents`;

    create_proposal_events: EventHandle;
    update_config_events: EventHandle;
    vote_events: EventHandle;

    constructor(create_proposal_events ? : EventHandle, update_config_events ? : EventHandle, vote_events ? : EventHandle) {
        this.create_proposal_events = create_proposal_events;
        this.update_config_events = update_config_events;
        this.vote_events = vote_events;
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
        return GovernanceEvents.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return GovernanceEvents.from_bcs_vector(args)
    }

    get_bcs() {
        return GovernanceEvents.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::GovernanceEvents`
    }

    from(arg: GovernanceEvents) {
        this.create_proposal_events = arg.create_proposal_events;
        this.update_config_events = arg.update_config_events;
        this.vote_events = arg.vote_events;
    }

    static from_bcs(arg: {
        create_proposal_events: EventHandle,
        update_config_events: EventHandle,
        vote_events: EventHandle
    }): GovernanceEvents {
        return new GovernanceEvents(arg.create_proposal_events, arg.update_config_events, arg.vote_events)
    }

    static from_bcs_vector(args: {
        create_proposal_events: EventHandle,
        update_config_events: EventHandle,
        vote_events: EventHandle
    } []): GovernanceEvents[] {
        return args.map(function(arg) {
            return new GovernanceEvents(arg.create_proposal_events, arg.update_config_events, arg.vote_events)
        })
    }

    static get bcs() {
        return bcs_import.struct("GovernanceEvents", {
            create_proposal_events: EventHandle.bcs,
            update_config_events: EventHandle.bcs,
            vote_events: EventHandle.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new GovernanceEvents(val.create_proposal_events, val.update_config_events, val.vote_events),
        });
    };
}

/* ============================== GovernanceResponsbility =============================== */

export class GovernanceResponsbility implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::GovernanceResponsbility`;

    signer_caps: SimpleMap < string,
    SignerCapability > ;

    constructor(signer_caps ? : SimpleMap < string, SignerCapability > ) {
        this.signer_caps = signer_caps;
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
        return GovernanceResponsbility.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return GovernanceResponsbility.from_bcs_vector(args)
    }

    get_bcs() {
        return GovernanceResponsbility.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::GovernanceResponsbility`
    }

    from(arg: GovernanceResponsbility) {
        this.signer_caps = arg.signer_caps;
    }

    static from_bcs(arg: {
        signer_caps: SimpleMap < string,
        SignerCapability >
    }): GovernanceResponsbility {
        return new GovernanceResponsbility(arg.signer_caps)
    }

    static from_bcs_vector(args: {
        signer_caps: SimpleMap < string,
        SignerCapability >
    } []): GovernanceResponsbility[] {
        return args.map(function(arg) {
            return new GovernanceResponsbility(arg.signer_caps)
        })
    }

    static get bcs() {
        return bcs_import.struct("GovernanceResponsbility", {
            signer_caps: SimpleMap.bcs(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }), SignerCapability.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new GovernanceResponsbility(val.signer_caps),
        });
    };
}

/* ============================== RecordKey =============================== */

export class RecordKey implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RecordKey`;

    stake_pool: string;
    proposal_id: u64_import;

    constructor(stake_pool: string, proposal_id: u64_import) {
        this.stake_pool = stake_pool;
        this.proposal_id = proposal_id;
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
        return RecordKey.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RecordKey.from_bcs_vector(args)
    }

    get_bcs() {
        return RecordKey.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RecordKey`
    }

    from(arg: RecordKey) {
        this.stake_pool = arg.stake_pool;
        this.proposal_id = arg.proposal_id;
    }

    static from_bcs(arg: {
        stake_pool: string,
        proposal_id: u64_import
    }): RecordKey {
        return new RecordKey(arg.stake_pool, arg.proposal_id)
    }

    static from_bcs_vector(args: {
        stake_pool: string,
        proposal_id: u64_import
    } []): RecordKey[] {
        return args.map(function(arg) {
            return new RecordKey(arg.stake_pool, arg.proposal_id)
        })
    }

    static get bcs() {
        return bcs_import.struct("RecordKey", {
            stake_pool: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            proposal_id: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RecordKey(val.stake_pool, val.proposal_id),
        });
    };
}

/* ============================== UpdateConfig =============================== */

export class UpdateConfig implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpdateConfig`;

    min_voting_threshold: u64_import;
    required_proposer_stake: u64_import;
    voting_duration_secs: u64_import;

    constructor(min_voting_threshold: u64_import, required_proposer_stake: u64_import, voting_duration_secs: u64_import) {
        this.min_voting_threshold = min_voting_threshold;
        this.required_proposer_stake = required_proposer_stake;
        this.voting_duration_secs = voting_duration_secs;
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
        return UpdateConfig.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UpdateConfig.from_bcs_vector(args)
    }

    get_bcs() {
        return UpdateConfig.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UpdateConfig`
    }

    from(arg: UpdateConfig) {
        this.min_voting_threshold = arg.min_voting_threshold;
        this.required_proposer_stake = arg.required_proposer_stake;
        this.voting_duration_secs = arg.voting_duration_secs;
    }

    static from_bcs(arg: {
        min_voting_threshold: u64_import,
        required_proposer_stake: u64_import,
        voting_duration_secs: u64_import
    }): UpdateConfig {
        return new UpdateConfig(arg.min_voting_threshold, arg.required_proposer_stake, arg.voting_duration_secs)
    }

    static from_bcs_vector(args: {
        min_voting_threshold: u64_import,
        required_proposer_stake: u64_import,
        voting_duration_secs: u64_import
    } []): UpdateConfig[] {
        return args.map(function(arg) {
            return new UpdateConfig(arg.min_voting_threshold, arg.required_proposer_stake, arg.voting_duration_secs)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpdateConfig", {
            min_voting_threshold: bcs_import.u128(),
            required_proposer_stake: bcs_import.u64(),
            voting_duration_secs: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UpdateConfig(val.min_voting_threshold, val.required_proposer_stake, val.voting_duration_secs),
        });
    };
}

/* ============================== UpdateConfigEvent =============================== */

export class UpdateConfigEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpdateConfigEvent`;

    min_voting_threshold: u64_import;
    required_proposer_stake: u64_import;
    voting_duration_secs: u64_import;

    constructor(min_voting_threshold: u64_import, required_proposer_stake: u64_import, voting_duration_secs: u64_import) {
        this.min_voting_threshold = min_voting_threshold;
        this.required_proposer_stake = required_proposer_stake;
        this.voting_duration_secs = voting_duration_secs;
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
        return UpdateConfigEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UpdateConfigEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return UpdateConfigEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UpdateConfigEvent`
    }

    from(arg: UpdateConfigEvent) {
        this.min_voting_threshold = arg.min_voting_threshold;
        this.required_proposer_stake = arg.required_proposer_stake;
        this.voting_duration_secs = arg.voting_duration_secs;
    }

    static from_bcs(arg: {
        min_voting_threshold: u64_import,
        required_proposer_stake: u64_import,
        voting_duration_secs: u64_import
    }): UpdateConfigEvent {
        return new UpdateConfigEvent(arg.min_voting_threshold, arg.required_proposer_stake, arg.voting_duration_secs)
    }

    static from_bcs_vector(args: {
        min_voting_threshold: u64_import,
        required_proposer_stake: u64_import,
        voting_duration_secs: u64_import
    } []): UpdateConfigEvent[] {
        return args.map(function(arg) {
            return new UpdateConfigEvent(arg.min_voting_threshold, arg.required_proposer_stake, arg.voting_duration_secs)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpdateConfigEvent", {
            min_voting_threshold: bcs_import.u128(),
            required_proposer_stake: bcs_import.u64(),
            voting_duration_secs: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UpdateConfigEvent(val.min_voting_threshold, val.required_proposer_stake, val.voting_duration_secs),
        });
    };
}

/* ============================== VotingRecords =============================== */

export class VotingRecords implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VotingRecords`;

    votes: Table;

    constructor(votes ? : Table) {
        this.votes = votes;
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
        return VotingRecords.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return VotingRecords.from_bcs_vector(args)
    }

    get_bcs() {
        return VotingRecords.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::VotingRecords`
    }

    from(arg: VotingRecords) {
        this.votes = arg.votes;
    }

    static from_bcs(arg: {
        votes: Table
    }): VotingRecords {
        return new VotingRecords(arg.votes)
    }

    static from_bcs_vector(args: {
        votes: Table
    } []): VotingRecords[] {
        return args.map(function(arg) {
            return new VotingRecords(arg.votes)
        })
    }

    static get bcs() {
        return bcs_import.struct("VotingRecords", {
            votes: Table.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new VotingRecords(val.votes),
        });
    };
}

/* ============================== VotingRecordsV2 =============================== */

export class VotingRecordsV2 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VotingRecordsV2`;

    votes: SmartTable < RecordKey,
    u64_import > ;

    constructor(votes ? : SmartTable < RecordKey, u64_import > ) {
        this.votes = votes;
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
        return VotingRecordsV2.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return VotingRecordsV2.from_bcs_vector(args)
    }

    get_bcs() {
        return VotingRecordsV2.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::VotingRecordsV2`
    }

    from(arg: VotingRecordsV2) {
        this.votes = arg.votes;
    }

    static from_bcs(arg: {
        votes: SmartTable < RecordKey,
        u64_import >
    }): VotingRecordsV2 {
        return new VotingRecordsV2(arg.votes)
    }

    static from_bcs_vector(args: {
        votes: SmartTable < RecordKey,
        u64_import >
    } []): VotingRecordsV2[] {
        return args.map(function(arg) {
            return new VotingRecordsV2(arg.votes)
        })
    }

    static get bcs() {
        return bcs_import.struct("VotingRecordsV2", {
            votes: SmartTable.bcs(RecordKey.bcs, bcs_import.u64()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new VotingRecordsV2(val.votes),
        });
    };
}

function initialize(arg0: string, arg1: u64_import, arg2: u64_import, arg3: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize", [], args);

}

function create_proposal(arg0: string, arg1: string, arg2: number[], arg3: number[], arg4: number[]) {
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
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg4).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_proposal", [], args);

}

function create_proposal_v2(arg0: string, arg1: string, arg2: number[], arg3: number[], arg4: number[], arg5: boolean) {
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
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg5).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_proposal_v2", [], args);

}

function resolve(arg0: u64_import, arg1: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "resolve", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function vote(arg0: string, arg1: string, arg2: u64_import, arg3: boolean) {
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
        wasm.new_bytes(bcs_import.bool().serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "vote", [], args);

}

function get_voting_power(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_voting_power", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function reconfigure(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "reconfigure", [], args);

}

function add_approved_script_hash(arg0: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_approved_script_hash", [], args);

}

function add_approved_script_hash_script(arg0: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_approved_script_hash_script", [], args);

}

function assert_voting_initialization() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_voting_initialization", [], args);

}

function batch_partial_vote(arg0: string, arg1: string[], arg2: u64_import, arg3: u64_import, arg4: boolean) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg4).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "batch_partial_vote", [], args);

}

function batch_vote(arg0: string, arg1: string[], arg2: u64_import, arg3: boolean) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "batch_vote", [], args);

}

function create_proposal_metadata(arg0: number[], arg1: number[]): [SimpleMap < string, number[] > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_proposal_metadata", [], args);

    return [
        SimpleMap.from_bcs(SimpleMap.bcs(bcs_import.string(), bcs_import.vector(bcs_import.u8())).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create_proposal_v2_impl(arg0: string, arg1: string, arg2: number[], arg3: number[], arg4: number[], arg5: boolean): [u64_import] {
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
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg5).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_proposal_v2_impl", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function force_end_epoch(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "force_end_epoch", [], args);

}

function force_end_epoch_test_only(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "force_end_epoch_test_only", [], args);

}

function get_min_voting_threshold(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_min_voting_threshold", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_remaining_voting_power(arg0: string, arg1: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_remaining_voting_power", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_required_proposer_stake(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_required_proposer_stake", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_signer(arg0: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_signer", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_signer_testnet_only(arg0: string, arg1: string): [string] {
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

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_signer_testnet_only", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_voting_duration_secs(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_voting_duration_secs", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function has_entirely_voted(arg0: string, arg1: u64_import): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "has_entirely_voted", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function initialize_partial_voting(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_partial_voting", [], args);

}

function partial_vote(arg0: string, arg1: string, arg2: u64_import, arg3: u64_import, arg4: boolean) {
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
        wasm.new_bytes(bcs_import.bool().serialize(arg4).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "partial_vote", [], args);

}

function remove_approved_hash(arg0: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_approved_hash", [], args);

}

function resolve_multi_step_proposal(arg0: u64_import, arg1: string, arg2: number[]): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "resolve_multi_step_proposal", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function store_signer_cap(arg0: string, arg1: string, arg2: SignerCapability) {
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
        wasm.new_bytes(SignerCapability.bcs.serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "store_signer_cap", [], args);

}

function toggle_features(arg0: string, arg1: u64_import[], arg2: u64_import[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u64()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u64()).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "toggle_features", [], args);

}

function update_governance_config(arg0: string, arg1: u64_import, arg2: u64_import, arg3: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_governance_config", [], args);

}

function vote_internal(arg0: string, arg1: string, arg2: u64_import, arg3: u64_import, arg4: boolean) {
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
        wasm.new_bytes(bcs_import.bool().serialize(arg4).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "vote_internal", [], args);

}

export const aptos_governance = {
    CreateProposal,
    CreateProposalEvent,
    Vote,
    VoteEvent,
    ApprovedExecutionHashes,
    GovernanceConfig,
    GovernanceEvents,
    GovernanceResponsbility,
    RecordKey,
    UpdateConfig,
    UpdateConfigEvent,
    VotingRecords,
    VotingRecordsV2,
    initialize,
    create_proposal,
    create_proposal_v2,
    resolve,
    vote,
    get_voting_power,
    reconfigure,
    add_approved_script_hash,
    add_approved_script_hash_script,
    assert_voting_initialization,
    batch_partial_vote,
    batch_vote,
    create_proposal_metadata,
    create_proposal_v2_impl,
    force_end_epoch,
    force_end_epoch_test_only,
    get_min_voting_threshold,
    get_remaining_voting_power,
    get_required_proposer_stake,
    get_signer,
    get_signer_testnet_only,
    get_voting_duration_secs,
    has_entirely_voted,
    initialize_partial_voting,
    partial_vote,
    remove_approved_hash,
    resolve_multi_step_proposal,
    store_signer_cap,
    toggle_features,
    update_governance_config,
    vote_internal
}