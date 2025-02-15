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
    Pool
} from "./pool_u64_unbound";
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
let MODULE_NAME: string = "delegation_pool";

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

    proposal_id: u64_import;
    voter: string;
    delegation_pool: string;

    constructor(proposal_id: u64_import, voter: string, delegation_pool: string) {
        this.proposal_id = proposal_id;
        this.voter = voter;
        this.delegation_pool = delegation_pool;
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
        this.proposal_id = arg.proposal_id;
        this.voter = arg.voter;
        this.delegation_pool = arg.delegation_pool;
    }

    static from_bcs(arg: {
        proposal_id: u64_import,
        voter: string,
        delegation_pool: string
    }): CreateProposal {
        return new CreateProposal(arg.proposal_id, arg.voter, arg.delegation_pool)
    }

    static from_bcs_vector(args: {
        proposal_id: u64_import,
        voter: string,
        delegation_pool: string
    } []): CreateProposal[] {
        return args.map(function(arg) {
            return new CreateProposal(arg.proposal_id, arg.voter, arg.delegation_pool)
        })
    }

    static get bcs() {
        return bcs_import.struct("CreateProposal", {
            proposal_id: bcs_import.u64(),
            voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            delegation_pool: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CreateProposal(val.proposal_id, val.voter, val.delegation_pool),
        });
    };
}

/* ============================== CreateProposalEvent =============================== */

export class CreateProposalEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CreateProposalEvent`;

    proposal_id: u64_import;
    voter: string;
    delegation_pool: string;

    constructor(proposal_id: u64_import, voter: string, delegation_pool: string) {
        this.proposal_id = proposal_id;
        this.voter = voter;
        this.delegation_pool = delegation_pool;
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
        this.proposal_id = arg.proposal_id;
        this.voter = arg.voter;
        this.delegation_pool = arg.delegation_pool;
    }

    static from_bcs(arg: {
        proposal_id: u64_import,
        voter: string,
        delegation_pool: string
    }): CreateProposalEvent {
        return new CreateProposalEvent(arg.proposal_id, arg.voter, arg.delegation_pool)
    }

    static from_bcs_vector(args: {
        proposal_id: u64_import,
        voter: string,
        delegation_pool: string
    } []): CreateProposalEvent[] {
        return args.map(function(arg) {
            return new CreateProposalEvent(arg.proposal_id, arg.voter, arg.delegation_pool)
        })
    }

    static get bcs() {
        return bcs_import.struct("CreateProposalEvent", {
            proposal_id: bcs_import.u64(),
            voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            delegation_pool: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CreateProposalEvent(val.proposal_id, val.voter, val.delegation_pool),
        });
    };
}

/* ============================== Vote =============================== */

export class Vote implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Vote`;

    voter: string;
    proposal_id: u64_import;
    delegation_pool: string;
    num_votes: u64_import;
    should_pass: boolean;

    constructor(voter: string, proposal_id: u64_import, delegation_pool: string, num_votes: u64_import, should_pass: boolean) {
        this.voter = voter;
        this.proposal_id = proposal_id;
        this.delegation_pool = delegation_pool;
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
        this.voter = arg.voter;
        this.proposal_id = arg.proposal_id;
        this.delegation_pool = arg.delegation_pool;
        this.num_votes = arg.num_votes;
        this.should_pass = arg.should_pass;
    }

    static from_bcs(arg: {
        voter: string,
        proposal_id: u64_import,
        delegation_pool: string,
        num_votes: u64_import,
        should_pass: boolean
    }): Vote {
        return new Vote(arg.voter, arg.proposal_id, arg.delegation_pool, arg.num_votes, arg.should_pass)
    }

    static from_bcs_vector(args: {
        voter: string,
        proposal_id: u64_import,
        delegation_pool: string,
        num_votes: u64_import,
        should_pass: boolean
    } []): Vote[] {
        return args.map(function(arg) {
            return new Vote(arg.voter, arg.proposal_id, arg.delegation_pool, arg.num_votes, arg.should_pass)
        })
    }

    static get bcs() {
        return bcs_import.struct("Vote", {
            voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            proposal_id: bcs_import.u64(),
            delegation_pool: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            num_votes: bcs_import.u64(),
            should_pass: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Vote(val.voter, val.proposal_id, val.delegation_pool, val.num_votes, val.should_pass),
        });
    };
}

/* ============================== VoteEvent =============================== */

export class VoteEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VoteEvent`;

    voter: string;
    proposal_id: u64_import;
    delegation_pool: string;
    num_votes: u64_import;
    should_pass: boolean;

    constructor(voter: string, proposal_id: u64_import, delegation_pool: string, num_votes: u64_import, should_pass: boolean) {
        this.voter = voter;
        this.proposal_id = proposal_id;
        this.delegation_pool = delegation_pool;
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
        this.voter = arg.voter;
        this.proposal_id = arg.proposal_id;
        this.delegation_pool = arg.delegation_pool;
        this.num_votes = arg.num_votes;
        this.should_pass = arg.should_pass;
    }

    static from_bcs(arg: {
        voter: string,
        proposal_id: u64_import,
        delegation_pool: string,
        num_votes: u64_import,
        should_pass: boolean
    }): VoteEvent {
        return new VoteEvent(arg.voter, arg.proposal_id, arg.delegation_pool, arg.num_votes, arg.should_pass)
    }

    static from_bcs_vector(args: {
        voter: string,
        proposal_id: u64_import,
        delegation_pool: string,
        num_votes: u64_import,
        should_pass: boolean
    } []): VoteEvent[] {
        return args.map(function(arg) {
            return new VoteEvent(arg.voter, arg.proposal_id, arg.delegation_pool, arg.num_votes, arg.should_pass)
        })
    }

    static get bcs() {
        return bcs_import.struct("VoteEvent", {
            voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            proposal_id: bcs_import.u64(),
            delegation_pool: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            num_votes: bcs_import.u64(),
            should_pass: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new VoteEvent(val.voter, val.proposal_id, val.delegation_pool, val.num_votes, val.should_pass),
        });
    };
}

/* ============================== AddStake =============================== */

export class AddStake implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AddStake`;

    pool_address: string;
    delegator_address: string;
    amount_added: u64_import;
    add_stake_fee: u64_import;

    constructor(pool_address: string, delegator_address: string, amount_added: u64_import, add_stake_fee: u64_import) {
        this.pool_address = pool_address;
        this.delegator_address = delegator_address;
        this.amount_added = amount_added;
        this.add_stake_fee = add_stake_fee;
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
        return AddStake.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AddStake.from_bcs_vector(args)
    }

    get_bcs() {
        return AddStake.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AddStake`
    }

    from(arg: AddStake) {
        this.pool_address = arg.pool_address;
        this.delegator_address = arg.delegator_address;
        this.amount_added = arg.amount_added;
        this.add_stake_fee = arg.add_stake_fee;
    }

    static from_bcs(arg: {
        pool_address: string,
        delegator_address: string,
        amount_added: u64_import,
        add_stake_fee: u64_import
    }): AddStake {
        return new AddStake(arg.pool_address, arg.delegator_address, arg.amount_added, arg.add_stake_fee)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        delegator_address: string,
        amount_added: u64_import,
        add_stake_fee: u64_import
    } []): AddStake[] {
        return args.map(function(arg) {
            return new AddStake(arg.pool_address, arg.delegator_address, arg.amount_added, arg.add_stake_fee)
        })
    }

    static get bcs() {
        return bcs_import.struct("AddStake", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            delegator_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount_added: bcs_import.u64(),
            add_stake_fee: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AddStake(val.pool_address, val.delegator_address, val.amount_added, val.add_stake_fee),
        });
    };
}

/* ============================== AddStakeEvent =============================== */

export class AddStakeEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AddStakeEvent`;

    pool_address: string;
    delegator_address: string;
    amount_added: u64_import;
    add_stake_fee: u64_import;

    constructor(pool_address: string, delegator_address: string, amount_added: u64_import, add_stake_fee: u64_import) {
        this.pool_address = pool_address;
        this.delegator_address = delegator_address;
        this.amount_added = amount_added;
        this.add_stake_fee = add_stake_fee;
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
        return AddStakeEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AddStakeEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return AddStakeEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AddStakeEvent`
    }

    from(arg: AddStakeEvent) {
        this.pool_address = arg.pool_address;
        this.delegator_address = arg.delegator_address;
        this.amount_added = arg.amount_added;
        this.add_stake_fee = arg.add_stake_fee;
    }

    static from_bcs(arg: {
        pool_address: string,
        delegator_address: string,
        amount_added: u64_import,
        add_stake_fee: u64_import
    }): AddStakeEvent {
        return new AddStakeEvent(arg.pool_address, arg.delegator_address, arg.amount_added, arg.add_stake_fee)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        delegator_address: string,
        amount_added: u64_import,
        add_stake_fee: u64_import
    } []): AddStakeEvent[] {
        return args.map(function(arg) {
            return new AddStakeEvent(arg.pool_address, arg.delegator_address, arg.amount_added, arg.add_stake_fee)
        })
    }

    static get bcs() {
        return bcs_import.struct("AddStakeEvent", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            delegator_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount_added: bcs_import.u64(),
            add_stake_fee: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AddStakeEvent(val.pool_address, val.delegator_address, val.amount_added, val.add_stake_fee),
        });
    };
}

/* ============================== ReactivateStake =============================== */

export class ReactivateStake implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ReactivateStake`;

    pool_address: string;
    delegator_address: string;
    amount_reactivated: u64_import;

    constructor(pool_address: string, delegator_address: string, amount_reactivated: u64_import) {
        this.pool_address = pool_address;
        this.delegator_address = delegator_address;
        this.amount_reactivated = amount_reactivated;
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
        return ReactivateStake.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ReactivateStake.from_bcs_vector(args)
    }

    get_bcs() {
        return ReactivateStake.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ReactivateStake`
    }

    from(arg: ReactivateStake) {
        this.pool_address = arg.pool_address;
        this.delegator_address = arg.delegator_address;
        this.amount_reactivated = arg.amount_reactivated;
    }

    static from_bcs(arg: {
        pool_address: string,
        delegator_address: string,
        amount_reactivated: u64_import
    }): ReactivateStake {
        return new ReactivateStake(arg.pool_address, arg.delegator_address, arg.amount_reactivated)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        delegator_address: string,
        amount_reactivated: u64_import
    } []): ReactivateStake[] {
        return args.map(function(arg) {
            return new ReactivateStake(arg.pool_address, arg.delegator_address, arg.amount_reactivated)
        })
    }

    static get bcs() {
        return bcs_import.struct("ReactivateStake", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            delegator_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount_reactivated: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ReactivateStake(val.pool_address, val.delegator_address, val.amount_reactivated),
        });
    };
}

/* ============================== ReactivateStakeEvent =============================== */

export class ReactivateStakeEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ReactivateStakeEvent`;

    pool_address: string;
    delegator_address: string;
    amount_reactivated: u64_import;

    constructor(pool_address: string, delegator_address: string, amount_reactivated: u64_import) {
        this.pool_address = pool_address;
        this.delegator_address = delegator_address;
        this.amount_reactivated = amount_reactivated;
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
        return ReactivateStakeEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ReactivateStakeEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return ReactivateStakeEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ReactivateStakeEvent`
    }

    from(arg: ReactivateStakeEvent) {
        this.pool_address = arg.pool_address;
        this.delegator_address = arg.delegator_address;
        this.amount_reactivated = arg.amount_reactivated;
    }

    static from_bcs(arg: {
        pool_address: string,
        delegator_address: string,
        amount_reactivated: u64_import
    }): ReactivateStakeEvent {
        return new ReactivateStakeEvent(arg.pool_address, arg.delegator_address, arg.amount_reactivated)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        delegator_address: string,
        amount_reactivated: u64_import
    } []): ReactivateStakeEvent[] {
        return args.map(function(arg) {
            return new ReactivateStakeEvent(arg.pool_address, arg.delegator_address, arg.amount_reactivated)
        })
    }

    static get bcs() {
        return bcs_import.struct("ReactivateStakeEvent", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            delegator_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount_reactivated: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ReactivateStakeEvent(val.pool_address, val.delegator_address, val.amount_reactivated),
        });
    };
}

/* ============================== UnlockStake =============================== */

export class UnlockStake implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UnlockStake`;

    pool_address: string;
    delegator_address: string;
    amount_unlocked: u64_import;

    constructor(pool_address: string, delegator_address: string, amount_unlocked: u64_import) {
        this.pool_address = pool_address;
        this.delegator_address = delegator_address;
        this.amount_unlocked = amount_unlocked;
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
        return UnlockStake.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UnlockStake.from_bcs_vector(args)
    }

    get_bcs() {
        return UnlockStake.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UnlockStake`
    }

    from(arg: UnlockStake) {
        this.pool_address = arg.pool_address;
        this.delegator_address = arg.delegator_address;
        this.amount_unlocked = arg.amount_unlocked;
    }

    static from_bcs(arg: {
        pool_address: string,
        delegator_address: string,
        amount_unlocked: u64_import
    }): UnlockStake {
        return new UnlockStake(arg.pool_address, arg.delegator_address, arg.amount_unlocked)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        delegator_address: string,
        amount_unlocked: u64_import
    } []): UnlockStake[] {
        return args.map(function(arg) {
            return new UnlockStake(arg.pool_address, arg.delegator_address, arg.amount_unlocked)
        })
    }

    static get bcs() {
        return bcs_import.struct("UnlockStake", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            delegator_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount_unlocked: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UnlockStake(val.pool_address, val.delegator_address, val.amount_unlocked),
        });
    };
}

/* ============================== UnlockStakeEvent =============================== */

export class UnlockStakeEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UnlockStakeEvent`;

    pool_address: string;
    delegator_address: string;
    amount_unlocked: u64_import;

    constructor(pool_address: string, delegator_address: string, amount_unlocked: u64_import) {
        this.pool_address = pool_address;
        this.delegator_address = delegator_address;
        this.amount_unlocked = amount_unlocked;
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
        return UnlockStakeEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UnlockStakeEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return UnlockStakeEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UnlockStakeEvent`
    }

    from(arg: UnlockStakeEvent) {
        this.pool_address = arg.pool_address;
        this.delegator_address = arg.delegator_address;
        this.amount_unlocked = arg.amount_unlocked;
    }

    static from_bcs(arg: {
        pool_address: string,
        delegator_address: string,
        amount_unlocked: u64_import
    }): UnlockStakeEvent {
        return new UnlockStakeEvent(arg.pool_address, arg.delegator_address, arg.amount_unlocked)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        delegator_address: string,
        amount_unlocked: u64_import
    } []): UnlockStakeEvent[] {
        return args.map(function(arg) {
            return new UnlockStakeEvent(arg.pool_address, arg.delegator_address, arg.amount_unlocked)
        })
    }

    static get bcs() {
        return bcs_import.struct("UnlockStakeEvent", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            delegator_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount_unlocked: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UnlockStakeEvent(val.pool_address, val.delegator_address, val.amount_unlocked),
        });
    };
}

/* ============================== WithdrawStake =============================== */

export class WithdrawStake implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::WithdrawStake`;

    pool_address: string;
    delegator_address: string;
    amount_withdrawn: u64_import;

    constructor(pool_address: string, delegator_address: string, amount_withdrawn: u64_import) {
        this.pool_address = pool_address;
        this.delegator_address = delegator_address;
        this.amount_withdrawn = amount_withdrawn;
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
        return WithdrawStake.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return WithdrawStake.from_bcs_vector(args)
    }

    get_bcs() {
        return WithdrawStake.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::WithdrawStake`
    }

    from(arg: WithdrawStake) {
        this.pool_address = arg.pool_address;
        this.delegator_address = arg.delegator_address;
        this.amount_withdrawn = arg.amount_withdrawn;
    }

    static from_bcs(arg: {
        pool_address: string,
        delegator_address: string,
        amount_withdrawn: u64_import
    }): WithdrawStake {
        return new WithdrawStake(arg.pool_address, arg.delegator_address, arg.amount_withdrawn)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        delegator_address: string,
        amount_withdrawn: u64_import
    } []): WithdrawStake[] {
        return args.map(function(arg) {
            return new WithdrawStake(arg.pool_address, arg.delegator_address, arg.amount_withdrawn)
        })
    }

    static get bcs() {
        return bcs_import.struct("WithdrawStake", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            delegator_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount_withdrawn: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new WithdrawStake(val.pool_address, val.delegator_address, val.amount_withdrawn),
        });
    };
}

/* ============================== WithdrawStakeEvent =============================== */

export class WithdrawStakeEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::WithdrawStakeEvent`;

    pool_address: string;
    delegator_address: string;
    amount_withdrawn: u64_import;

    constructor(pool_address: string, delegator_address: string, amount_withdrawn: u64_import) {
        this.pool_address = pool_address;
        this.delegator_address = delegator_address;
        this.amount_withdrawn = amount_withdrawn;
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
        return WithdrawStakeEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return WithdrawStakeEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return WithdrawStakeEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::WithdrawStakeEvent`
    }

    from(arg: WithdrawStakeEvent) {
        this.pool_address = arg.pool_address;
        this.delegator_address = arg.delegator_address;
        this.amount_withdrawn = arg.amount_withdrawn;
    }

    static from_bcs(arg: {
        pool_address: string,
        delegator_address: string,
        amount_withdrawn: u64_import
    }): WithdrawStakeEvent {
        return new WithdrawStakeEvent(arg.pool_address, arg.delegator_address, arg.amount_withdrawn)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        delegator_address: string,
        amount_withdrawn: u64_import
    } []): WithdrawStakeEvent[] {
        return args.map(function(arg) {
            return new WithdrawStakeEvent(arg.pool_address, arg.delegator_address, arg.amount_withdrawn)
        })
    }

    static get bcs() {
        return bcs_import.struct("WithdrawStakeEvent", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            delegator_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount_withdrawn: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new WithdrawStakeEvent(val.pool_address, val.delegator_address, val.amount_withdrawn),
        });
    };
}

/* ============================== AllowlistDelegator =============================== */

export class AllowlistDelegator implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AllowlistDelegator`;

    pool_address: string;
    delegator_address: string;

    constructor(pool_address: string, delegator_address: string) {
        this.pool_address = pool_address;
        this.delegator_address = delegator_address;
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
        return AllowlistDelegator.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AllowlistDelegator.from_bcs_vector(args)
    }

    get_bcs() {
        return AllowlistDelegator.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AllowlistDelegator`
    }

    from(arg: AllowlistDelegator) {
        this.pool_address = arg.pool_address;
        this.delegator_address = arg.delegator_address;
    }

    static from_bcs(arg: {
        pool_address: string,
        delegator_address: string
    }): AllowlistDelegator {
        return new AllowlistDelegator(arg.pool_address, arg.delegator_address)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        delegator_address: string
    } []): AllowlistDelegator[] {
        return args.map(function(arg) {
            return new AllowlistDelegator(arg.pool_address, arg.delegator_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("AllowlistDelegator", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            delegator_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AllowlistDelegator(val.pool_address, val.delegator_address),
        });
    };
}

/* ============================== BeneficiaryForOperator =============================== */

export class BeneficiaryForOperator implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BeneficiaryForOperator`;

    beneficiary_for_operator: string;

    constructor(beneficiary_for_operator ? : string) {
        this.beneficiary_for_operator = beneficiary_for_operator;
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
        return BeneficiaryForOperator.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BeneficiaryForOperator.from_bcs_vector(args)
    }

    get_bcs() {
        return BeneficiaryForOperator.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BeneficiaryForOperator`
    }

    from(arg: BeneficiaryForOperator) {
        this.beneficiary_for_operator = arg.beneficiary_for_operator;
    }

    static from_bcs(arg: {
        beneficiary_for_operator: string
    }): BeneficiaryForOperator {
        return new BeneficiaryForOperator(arg.beneficiary_for_operator)
    }

    static from_bcs_vector(args: {
        beneficiary_for_operator: string
    } []): BeneficiaryForOperator[] {
        return args.map(function(arg) {
            return new BeneficiaryForOperator(arg.beneficiary_for_operator)
        })
    }

    static get bcs() {
        return bcs_import.struct("BeneficiaryForOperator", {
            beneficiary_for_operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BeneficiaryForOperator(val.beneficiary_for_operator),
        });
    };
}

/* ============================== CommissionPercentageChange =============================== */

export class CommissionPercentageChange implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CommissionPercentageChange`;

    pool_address: string;
    owner: string;
    commission_percentage_next_lockup_cycle: u64_import;

    constructor(pool_address: string, owner: string, commission_percentage_next_lockup_cycle: u64_import) {
        this.pool_address = pool_address;
        this.owner = owner;
        this.commission_percentage_next_lockup_cycle = commission_percentage_next_lockup_cycle;
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
        return CommissionPercentageChange.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CommissionPercentageChange.from_bcs_vector(args)
    }

    get_bcs() {
        return CommissionPercentageChange.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CommissionPercentageChange`
    }

    from(arg: CommissionPercentageChange) {
        this.pool_address = arg.pool_address;
        this.owner = arg.owner;
        this.commission_percentage_next_lockup_cycle = arg.commission_percentage_next_lockup_cycle;
    }

    static from_bcs(arg: {
        pool_address: string,
        owner: string,
        commission_percentage_next_lockup_cycle: u64_import
    }): CommissionPercentageChange {
        return new CommissionPercentageChange(arg.pool_address, arg.owner, arg.commission_percentage_next_lockup_cycle)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        owner: string,
        commission_percentage_next_lockup_cycle: u64_import
    } []): CommissionPercentageChange[] {
        return args.map(function(arg) {
            return new CommissionPercentageChange(arg.pool_address, arg.owner, arg.commission_percentage_next_lockup_cycle)
        })
    }

    static get bcs() {
        return bcs_import.struct("CommissionPercentageChange", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            owner: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            commission_percentage_next_lockup_cycle: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CommissionPercentageChange(val.pool_address, val.owner, val.commission_percentage_next_lockup_cycle),
        });
    };
}

/* ============================== DelegateVotingPower =============================== */

export class DelegateVotingPower implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DelegateVotingPower`;

    pool_address: string;
    delegator: string;
    voter: string;

    constructor(pool_address: string, delegator: string, voter: string) {
        this.pool_address = pool_address;
        this.delegator = delegator;
        this.voter = voter;
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
        return DelegateVotingPower.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DelegateVotingPower.from_bcs_vector(args)
    }

    get_bcs() {
        return DelegateVotingPower.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DelegateVotingPower`
    }

    from(arg: DelegateVotingPower) {
        this.pool_address = arg.pool_address;
        this.delegator = arg.delegator;
        this.voter = arg.voter;
    }

    static from_bcs(arg: {
        pool_address: string,
        delegator: string,
        voter: string
    }): DelegateVotingPower {
        return new DelegateVotingPower(arg.pool_address, arg.delegator, arg.voter)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        delegator: string,
        voter: string
    } []): DelegateVotingPower[] {
        return args.map(function(arg) {
            return new DelegateVotingPower(arg.pool_address, arg.delegator, arg.voter)
        })
    }

    static get bcs() {
        return bcs_import.struct("DelegateVotingPower", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            delegator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DelegateVotingPower(val.pool_address, val.delegator, val.voter),
        });
    };
}

/* ============================== DelegateVotingPowerEvent =============================== */

export class DelegateVotingPowerEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DelegateVotingPowerEvent`;

    pool_address: string;
    delegator: string;
    voter: string;

    constructor(pool_address: string, delegator: string, voter: string) {
        this.pool_address = pool_address;
        this.delegator = delegator;
        this.voter = voter;
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
        return DelegateVotingPowerEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DelegateVotingPowerEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return DelegateVotingPowerEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DelegateVotingPowerEvent`
    }

    from(arg: DelegateVotingPowerEvent) {
        this.pool_address = arg.pool_address;
        this.delegator = arg.delegator;
        this.voter = arg.voter;
    }

    static from_bcs(arg: {
        pool_address: string,
        delegator: string,
        voter: string
    }): DelegateVotingPowerEvent {
        return new DelegateVotingPowerEvent(arg.pool_address, arg.delegator, arg.voter)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        delegator: string,
        voter: string
    } []): DelegateVotingPowerEvent[] {
        return args.map(function(arg) {
            return new DelegateVotingPowerEvent(arg.pool_address, arg.delegator, arg.voter)
        })
    }

    static get bcs() {
        return bcs_import.struct("DelegateVotingPowerEvent", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            delegator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DelegateVotingPowerEvent(val.pool_address, val.delegator, val.voter),
        });
    };
}

/* ============================== DelegatedVotes =============================== */

export class DelegatedVotes implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DelegatedVotes`;

    active_shares: u64_import;
    pending_inactive_shares: u64_import;
    active_shares_next_lockup: u64_import;
    last_locked_until_secs: u64_import;

    constructor(active_shares: u64_import, pending_inactive_shares: u64_import, active_shares_next_lockup: u64_import, last_locked_until_secs: u64_import) {
        this.active_shares = active_shares;
        this.pending_inactive_shares = pending_inactive_shares;
        this.active_shares_next_lockup = active_shares_next_lockup;
        this.last_locked_until_secs = last_locked_until_secs;
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
        return DelegatedVotes.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DelegatedVotes.from_bcs_vector(args)
    }

    get_bcs() {
        return DelegatedVotes.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DelegatedVotes`
    }

    from(arg: DelegatedVotes) {
        this.active_shares = arg.active_shares;
        this.pending_inactive_shares = arg.pending_inactive_shares;
        this.active_shares_next_lockup = arg.active_shares_next_lockup;
        this.last_locked_until_secs = arg.last_locked_until_secs;
    }

    static from_bcs(arg: {
        active_shares: u64_import,
        pending_inactive_shares: u64_import,
        active_shares_next_lockup: u64_import,
        last_locked_until_secs: u64_import
    }): DelegatedVotes {
        return new DelegatedVotes(arg.active_shares, arg.pending_inactive_shares, arg.active_shares_next_lockup, arg.last_locked_until_secs)
    }

    static from_bcs_vector(args: {
        active_shares: u64_import,
        pending_inactive_shares: u64_import,
        active_shares_next_lockup: u64_import,
        last_locked_until_secs: u64_import
    } []): DelegatedVotes[] {
        return args.map(function(arg) {
            return new DelegatedVotes(arg.active_shares, arg.pending_inactive_shares, arg.active_shares_next_lockup, arg.last_locked_until_secs)
        })
    }

    static get bcs() {
        return bcs_import.struct("DelegatedVotes", {
            active_shares: bcs_import.u128(),
            pending_inactive_shares: bcs_import.u128(),
            active_shares_next_lockup: bcs_import.u128(),
            last_locked_until_secs: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DelegatedVotes(val.active_shares, val.pending_inactive_shares, val.active_shares_next_lockup, val.last_locked_until_secs),
        });
    };
}

/* ============================== DelegationPool =============================== */

export class DelegationPool implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DelegationPool`;

    active_shares: Pool;
    observed_lockup_cycle: ObservedLockupCycle;
    inactive_shares: Table;
    pending_withdrawals: Table;
    stake_pool_signer_cap: SignerCapability;
    total_coins_inactive: u64_import;
    operator_commission_percentage: u64_import;
    add_stake_events: EventHandle;
    reactivate_stake_events: EventHandle;
    unlock_stake_events: EventHandle;
    withdraw_stake_events: EventHandle;
    distribute_commission_events: EventHandle;

    constructor(active_shares ? : Pool, observed_lockup_cycle ? : ObservedLockupCycle, inactive_shares ? : Table, pending_withdrawals ? : Table, stake_pool_signer_cap ? : SignerCapability, total_coins_inactive ? : u64_import, operator_commission_percentage ? : u64_import, add_stake_events ? : EventHandle, reactivate_stake_events ? : EventHandle, unlock_stake_events ? : EventHandle, withdraw_stake_events ? : EventHandle, distribute_commission_events ? : EventHandle) {
        this.active_shares = active_shares;
        this.observed_lockup_cycle = observed_lockup_cycle;
        this.inactive_shares = inactive_shares;
        this.pending_withdrawals = pending_withdrawals;
        this.stake_pool_signer_cap = stake_pool_signer_cap;
        this.total_coins_inactive = total_coins_inactive;
        this.operator_commission_percentage = operator_commission_percentage;
        this.add_stake_events = add_stake_events;
        this.reactivate_stake_events = reactivate_stake_events;
        this.unlock_stake_events = unlock_stake_events;
        this.withdraw_stake_events = withdraw_stake_events;
        this.distribute_commission_events = distribute_commission_events;
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
        return DelegationPool.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DelegationPool.from_bcs_vector(args)
    }

    get_bcs() {
        return DelegationPool.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DelegationPool`
    }

    from(arg: DelegationPool) {
        this.active_shares = arg.active_shares;
        this.observed_lockup_cycle = arg.observed_lockup_cycle;
        this.inactive_shares = arg.inactive_shares;
        this.pending_withdrawals = arg.pending_withdrawals;
        this.stake_pool_signer_cap = arg.stake_pool_signer_cap;
        this.total_coins_inactive = arg.total_coins_inactive;
        this.operator_commission_percentage = arg.operator_commission_percentage;
        this.add_stake_events = arg.add_stake_events;
        this.reactivate_stake_events = arg.reactivate_stake_events;
        this.unlock_stake_events = arg.unlock_stake_events;
        this.withdraw_stake_events = arg.withdraw_stake_events;
        this.distribute_commission_events = arg.distribute_commission_events;
    }

    static from_bcs(arg: {
        active_shares: Pool,
        observed_lockup_cycle: ObservedLockupCycle,
        inactive_shares: Table,
        pending_withdrawals: Table,
        stake_pool_signer_cap: SignerCapability,
        total_coins_inactive: u64_import,
        operator_commission_percentage: u64_import,
        add_stake_events: EventHandle,
        reactivate_stake_events: EventHandle,
        unlock_stake_events: EventHandle,
        withdraw_stake_events: EventHandle,
        distribute_commission_events: EventHandle
    }): DelegationPool {
        return new DelegationPool(arg.active_shares, arg.observed_lockup_cycle, arg.inactive_shares, arg.pending_withdrawals, arg.stake_pool_signer_cap, arg.total_coins_inactive, arg.operator_commission_percentage, arg.add_stake_events, arg.reactivate_stake_events, arg.unlock_stake_events, arg.withdraw_stake_events, arg.distribute_commission_events)
    }

    static from_bcs_vector(args: {
        active_shares: Pool,
        observed_lockup_cycle: ObservedLockupCycle,
        inactive_shares: Table,
        pending_withdrawals: Table,
        stake_pool_signer_cap: SignerCapability,
        total_coins_inactive: u64_import,
        operator_commission_percentage: u64_import,
        add_stake_events: EventHandle,
        reactivate_stake_events: EventHandle,
        unlock_stake_events: EventHandle,
        withdraw_stake_events: EventHandle,
        distribute_commission_events: EventHandle
    } []): DelegationPool[] {
        return args.map(function(arg) {
            return new DelegationPool(arg.active_shares, arg.observed_lockup_cycle, arg.inactive_shares, arg.pending_withdrawals, arg.stake_pool_signer_cap, arg.total_coins_inactive, arg.operator_commission_percentage, arg.add_stake_events, arg.reactivate_stake_events, arg.unlock_stake_events, arg.withdraw_stake_events, arg.distribute_commission_events)
        })
    }

    static get bcs() {
        return bcs_import.struct("DelegationPool", {
            active_shares: Pool.bcs,
            observed_lockup_cycle: ObservedLockupCycle.bcs,
            inactive_shares: Table.bcs,
            pending_withdrawals: Table.bcs,
            stake_pool_signer_cap: SignerCapability.bcs,
            total_coins_inactive: bcs_import.u64(),
            operator_commission_percentage: bcs_import.u64(),
            add_stake_events: EventHandle.bcs,
            reactivate_stake_events: EventHandle.bcs,
            unlock_stake_events: EventHandle.bcs,
            withdraw_stake_events: EventHandle.bcs,
            distribute_commission_events: EventHandle.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DelegationPool(val.active_shares, val.observed_lockup_cycle, val.inactive_shares, val.pending_withdrawals, val.stake_pool_signer_cap, val.total_coins_inactive, val.operator_commission_percentage, val.add_stake_events, val.reactivate_stake_events, val.unlock_stake_events, val.withdraw_stake_events, val.distribute_commission_events),
        });
    };
}

/* ============================== DelegationPoolAllowlisting =============================== */

export class DelegationPoolAllowlisting implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DelegationPoolAllowlisting`;

    allowlist: SmartTable < string,
    boolean > ;

    constructor(allowlist ? : SmartTable < string, boolean > ) {
        this.allowlist = allowlist;
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
        return DelegationPoolAllowlisting.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DelegationPoolAllowlisting.from_bcs_vector(args)
    }

    get_bcs() {
        return DelegationPoolAllowlisting.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DelegationPoolAllowlisting`
    }

    from(arg: DelegationPoolAllowlisting) {
        this.allowlist = arg.allowlist;
    }

    static from_bcs(arg: {
        allowlist: SmartTable < string,
        boolean >
    }): DelegationPoolAllowlisting {
        return new DelegationPoolAllowlisting(arg.allowlist)
    }

    static from_bcs_vector(args: {
        allowlist: SmartTable < string,
        boolean >
    } []): DelegationPoolAllowlisting[] {
        return args.map(function(arg) {
            return new DelegationPoolAllowlisting(arg.allowlist)
        })
    }

    static get bcs() {
        return bcs_import.struct("DelegationPoolAllowlisting", {
            allowlist: SmartTable.bcs(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }), bcs_import.bool()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DelegationPoolAllowlisting(val.allowlist),
        });
    };
}

/* ============================== DelegationPoolOwnership =============================== */

export class DelegationPoolOwnership implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DelegationPoolOwnership`;

    pool_address: string;

    constructor(pool_address ? : string) {
        this.pool_address = pool_address;
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
        return DelegationPoolOwnership.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DelegationPoolOwnership.from_bcs_vector(args)
    }

    get_bcs() {
        return DelegationPoolOwnership.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DelegationPoolOwnership`
    }

    from(arg: DelegationPoolOwnership) {
        this.pool_address = arg.pool_address;
    }

    static from_bcs(arg: {
        pool_address: string
    }): DelegationPoolOwnership {
        return new DelegationPoolOwnership(arg.pool_address)
    }

    static from_bcs_vector(args: {
        pool_address: string
    } []): DelegationPoolOwnership[] {
        return args.map(function(arg) {
            return new DelegationPoolOwnership(arg.pool_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("DelegationPoolOwnership", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DelegationPoolOwnership(val.pool_address),
        });
    };
}

/* ============================== DisableDelegatorsAllowlisting =============================== */

export class DisableDelegatorsAllowlisting implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DisableDelegatorsAllowlisting`;

    pool_address: string;

    constructor(pool_address: string) {
        this.pool_address = pool_address;
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
        return DisableDelegatorsAllowlisting.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DisableDelegatorsAllowlisting.from_bcs_vector(args)
    }

    get_bcs() {
        return DisableDelegatorsAllowlisting.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DisableDelegatorsAllowlisting`
    }

    from(arg: DisableDelegatorsAllowlisting) {
        this.pool_address = arg.pool_address;
    }

    static from_bcs(arg: {
        pool_address: string
    }): DisableDelegatorsAllowlisting {
        return new DisableDelegatorsAllowlisting(arg.pool_address)
    }

    static from_bcs_vector(args: {
        pool_address: string
    } []): DisableDelegatorsAllowlisting[] {
        return args.map(function(arg) {
            return new DisableDelegatorsAllowlisting(arg.pool_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("DisableDelegatorsAllowlisting", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DisableDelegatorsAllowlisting(val.pool_address),
        });
    };
}

/* ============================== DistributeCommission =============================== */

export class DistributeCommission implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DistributeCommission`;

    pool_address: string;
    operator: string;
    beneficiary: string;
    commission_active: u64_import;
    commission_pending_inactive: u64_import;

    constructor(pool_address: string, operator: string, beneficiary: string, commission_active: u64_import, commission_pending_inactive: u64_import) {
        this.pool_address = pool_address;
        this.operator = operator;
        this.beneficiary = beneficiary;
        this.commission_active = commission_active;
        this.commission_pending_inactive = commission_pending_inactive;
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
        return DistributeCommission.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DistributeCommission.from_bcs_vector(args)
    }

    get_bcs() {
        return DistributeCommission.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DistributeCommission`
    }

    from(arg: DistributeCommission) {
        this.pool_address = arg.pool_address;
        this.operator = arg.operator;
        this.beneficiary = arg.beneficiary;
        this.commission_active = arg.commission_active;
        this.commission_pending_inactive = arg.commission_pending_inactive;
    }

    static from_bcs(arg: {
        pool_address: string,
        operator: string,
        beneficiary: string,
        commission_active: u64_import,
        commission_pending_inactive: u64_import
    }): DistributeCommission {
        return new DistributeCommission(arg.pool_address, arg.operator, arg.beneficiary, arg.commission_active, arg.commission_pending_inactive)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        operator: string,
        beneficiary: string,
        commission_active: u64_import,
        commission_pending_inactive: u64_import
    } []): DistributeCommission[] {
        return args.map(function(arg) {
            return new DistributeCommission(arg.pool_address, arg.operator, arg.beneficiary, arg.commission_active, arg.commission_pending_inactive)
        })
    }

    static get bcs() {
        return bcs_import.struct("DistributeCommission", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            beneficiary: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            commission_active: bcs_import.u64(),
            commission_pending_inactive: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DistributeCommission(val.pool_address, val.operator, val.beneficiary, val.commission_active, val.commission_pending_inactive),
        });
    };
}

/* ============================== DistributeCommissionEvent =============================== */

export class DistributeCommissionEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DistributeCommissionEvent`;

    pool_address: string;
    operator: string;
    commission_active: u64_import;
    commission_pending_inactive: u64_import;

    constructor(pool_address: string, operator: string, commission_active: u64_import, commission_pending_inactive: u64_import) {
        this.pool_address = pool_address;
        this.operator = operator;
        this.commission_active = commission_active;
        this.commission_pending_inactive = commission_pending_inactive;
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
        return DistributeCommissionEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DistributeCommissionEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return DistributeCommissionEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DistributeCommissionEvent`
    }

    from(arg: DistributeCommissionEvent) {
        this.pool_address = arg.pool_address;
        this.operator = arg.operator;
        this.commission_active = arg.commission_active;
        this.commission_pending_inactive = arg.commission_pending_inactive;
    }

    static from_bcs(arg: {
        pool_address: string,
        operator: string,
        commission_active: u64_import,
        commission_pending_inactive: u64_import
    }): DistributeCommissionEvent {
        return new DistributeCommissionEvent(arg.pool_address, arg.operator, arg.commission_active, arg.commission_pending_inactive)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        operator: string,
        commission_active: u64_import,
        commission_pending_inactive: u64_import
    } []): DistributeCommissionEvent[] {
        return args.map(function(arg) {
            return new DistributeCommissionEvent(arg.pool_address, arg.operator, arg.commission_active, arg.commission_pending_inactive)
        })
    }

    static get bcs() {
        return bcs_import.struct("DistributeCommissionEvent", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            commission_active: bcs_import.u64(),
            commission_pending_inactive: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DistributeCommissionEvent(val.pool_address, val.operator, val.commission_active, val.commission_pending_inactive),
        });
    };
}

/* ============================== EnableDelegatorsAllowlisting =============================== */

export class EnableDelegatorsAllowlisting implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::EnableDelegatorsAllowlisting`;

    pool_address: string;

    constructor(pool_address: string) {
        this.pool_address = pool_address;
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
        return EnableDelegatorsAllowlisting.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return EnableDelegatorsAllowlisting.from_bcs_vector(args)
    }

    get_bcs() {
        return EnableDelegatorsAllowlisting.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::EnableDelegatorsAllowlisting`
    }

    from(arg: EnableDelegatorsAllowlisting) {
        this.pool_address = arg.pool_address;
    }

    static from_bcs(arg: {
        pool_address: string
    }): EnableDelegatorsAllowlisting {
        return new EnableDelegatorsAllowlisting(arg.pool_address)
    }

    static from_bcs_vector(args: {
        pool_address: string
    } []): EnableDelegatorsAllowlisting[] {
        return args.map(function(arg) {
            return new EnableDelegatorsAllowlisting(arg.pool_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("EnableDelegatorsAllowlisting", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new EnableDelegatorsAllowlisting(val.pool_address),
        });
    };
}

/* ============================== EvictDelegator =============================== */

export class EvictDelegator implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::EvictDelegator`;

    pool_address: string;
    delegator_address: string;

    constructor(pool_address: string, delegator_address: string) {
        this.pool_address = pool_address;
        this.delegator_address = delegator_address;
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
        return EvictDelegator.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return EvictDelegator.from_bcs_vector(args)
    }

    get_bcs() {
        return EvictDelegator.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::EvictDelegator`
    }

    from(arg: EvictDelegator) {
        this.pool_address = arg.pool_address;
        this.delegator_address = arg.delegator_address;
    }

    static from_bcs(arg: {
        pool_address: string,
        delegator_address: string
    }): EvictDelegator {
        return new EvictDelegator(arg.pool_address, arg.delegator_address)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        delegator_address: string
    } []): EvictDelegator[] {
        return args.map(function(arg) {
            return new EvictDelegator(arg.pool_address, arg.delegator_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("EvictDelegator", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            delegator_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new EvictDelegator(val.pool_address, val.delegator_address),
        });
    };
}

/* ============================== GovernanceRecords =============================== */

export class GovernanceRecords implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::GovernanceRecords`;

    votes: SmartTable < VotingRecordKey,
    u64_import > ;
    votes_per_proposal: SmartTable < u64_import,
    u64_import > ;
    vote_delegation: SmartTable < string,
    VoteDelegation > ;
    delegated_votes: SmartTable < string,
    DelegatedVotes > ;
    vote_events: EventHandle;
    create_proposal_events: EventHandle;
    delegate_voting_power_events: EventHandle;

    constructor(votes ? : SmartTable < VotingRecordKey, u64_import > , votes_per_proposal ? : SmartTable < u64_import, u64_import > , vote_delegation ? : SmartTable < string, VoteDelegation > , delegated_votes ? : SmartTable < string, DelegatedVotes > , vote_events ? : EventHandle, create_proposal_events ? : EventHandle, delegate_voting_power_events ? : EventHandle) {
        this.votes = votes;
        this.votes_per_proposal = votes_per_proposal;
        this.vote_delegation = vote_delegation;
        this.delegated_votes = delegated_votes;
        this.vote_events = vote_events;
        this.create_proposal_events = create_proposal_events;
        this.delegate_voting_power_events = delegate_voting_power_events;
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
        return GovernanceRecords.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return GovernanceRecords.from_bcs_vector(args)
    }

    get_bcs() {
        return GovernanceRecords.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::GovernanceRecords`
    }

    from(arg: GovernanceRecords) {
        this.votes = arg.votes;
        this.votes_per_proposal = arg.votes_per_proposal;
        this.vote_delegation = arg.vote_delegation;
        this.delegated_votes = arg.delegated_votes;
        this.vote_events = arg.vote_events;
        this.create_proposal_events = arg.create_proposal_events;
        this.delegate_voting_power_events = arg.delegate_voting_power_events;
    }

    static from_bcs(arg: {
        votes: SmartTable < VotingRecordKey,
        u64_import > ,
        votes_per_proposal: SmartTable < u64_import,
        u64_import > ,
        vote_delegation: SmartTable < string,
        VoteDelegation > ,
        delegated_votes: SmartTable < string,
        DelegatedVotes > ,
        vote_events: EventHandle,
        create_proposal_events: EventHandle,
        delegate_voting_power_events: EventHandle
    }): GovernanceRecords {
        return new GovernanceRecords(arg.votes, arg.votes_per_proposal, arg.vote_delegation, arg.delegated_votes, arg.vote_events, arg.create_proposal_events, arg.delegate_voting_power_events)
    }

    static from_bcs_vector(args: {
        votes: SmartTable < VotingRecordKey,
        u64_import > ,
        votes_per_proposal: SmartTable < u64_import,
        u64_import > ,
        vote_delegation: SmartTable < string,
        VoteDelegation > ,
        delegated_votes: SmartTable < string,
        DelegatedVotes > ,
        vote_events: EventHandle,
        create_proposal_events: EventHandle,
        delegate_voting_power_events: EventHandle
    } []): GovernanceRecords[] {
        return args.map(function(arg) {
            return new GovernanceRecords(arg.votes, arg.votes_per_proposal, arg.vote_delegation, arg.delegated_votes, arg.vote_events, arg.create_proposal_events, arg.delegate_voting_power_events)
        })
    }

    static get bcs() {
        return bcs_import.struct("GovernanceRecords", {
            votes: SmartTable.bcs(VotingRecordKey.bcs, bcs_import.u64()),
            votes_per_proposal: SmartTable.bcs(bcs_import.u64(), bcs_import.u64()),
            vote_delegation: SmartTable.bcs(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }), VoteDelegation.bcs),
            delegated_votes: SmartTable.bcs(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }), DelegatedVotes.bcs),
            vote_events: EventHandle.bcs,
            create_proposal_events: EventHandle.bcs,
            delegate_voting_power_events: EventHandle.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new GovernanceRecords(val.votes, val.votes_per_proposal, val.vote_delegation, val.delegated_votes, val.vote_events, val.create_proposal_events, val.delegate_voting_power_events),
        });
    };
}

/* ============================== NextCommissionPercentage =============================== */

export class NextCommissionPercentage implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::NextCommissionPercentage`;

    commission_percentage_next_lockup_cycle: u64_import;
    effective_after_secs: u64_import;

    constructor(commission_percentage_next_lockup_cycle ? : u64_import, effective_after_secs ? : u64_import) {
        this.commission_percentage_next_lockup_cycle = commission_percentage_next_lockup_cycle;
        this.effective_after_secs = effective_after_secs;
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
        return NextCommissionPercentage.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return NextCommissionPercentage.from_bcs_vector(args)
    }

    get_bcs() {
        return NextCommissionPercentage.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::NextCommissionPercentage`
    }

    from(arg: NextCommissionPercentage) {
        this.commission_percentage_next_lockup_cycle = arg.commission_percentage_next_lockup_cycle;
        this.effective_after_secs = arg.effective_after_secs;
    }

    static from_bcs(arg: {
        commission_percentage_next_lockup_cycle: u64_import,
        effective_after_secs: u64_import
    }): NextCommissionPercentage {
        return new NextCommissionPercentage(arg.commission_percentage_next_lockup_cycle, arg.effective_after_secs)
    }

    static from_bcs_vector(args: {
        commission_percentage_next_lockup_cycle: u64_import,
        effective_after_secs: u64_import
    } []): NextCommissionPercentage[] {
        return args.map(function(arg) {
            return new NextCommissionPercentage(arg.commission_percentage_next_lockup_cycle, arg.effective_after_secs)
        })
    }

    static get bcs() {
        return bcs_import.struct("NextCommissionPercentage", {
            commission_percentage_next_lockup_cycle: bcs_import.u64(),
            effective_after_secs: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new NextCommissionPercentage(val.commission_percentage_next_lockup_cycle, val.effective_after_secs),
        });
    };
}

/* ============================== ObservedLockupCycle =============================== */

export class ObservedLockupCycle implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ObservedLockupCycle`;

    index: u64_import;

    constructor(index: u64_import) {
        this.index = index;
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
        return ObservedLockupCycle.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ObservedLockupCycle.from_bcs_vector(args)
    }

    get_bcs() {
        return ObservedLockupCycle.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ObservedLockupCycle`
    }

    from(arg: ObservedLockupCycle) {
        this.index = arg.index;
    }

    static from_bcs(arg: {
        index: u64_import
    }): ObservedLockupCycle {
        return new ObservedLockupCycle(arg.index)
    }

    static from_bcs_vector(args: {
        index: u64_import
    } []): ObservedLockupCycle[] {
        return args.map(function(arg) {
            return new ObservedLockupCycle(arg.index)
        })
    }

    static get bcs() {
        return bcs_import.struct("ObservedLockupCycle", {
            index: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ObservedLockupCycle(val.index),
        });
    };
}

/* ============================== RemoveDelegatorFromAllowlist =============================== */

export class RemoveDelegatorFromAllowlist implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RemoveDelegatorFromAllowlist`;

    pool_address: string;
    delegator_address: string;

    constructor(pool_address: string, delegator_address: string) {
        this.pool_address = pool_address;
        this.delegator_address = delegator_address;
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
        return RemoveDelegatorFromAllowlist.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RemoveDelegatorFromAllowlist.from_bcs_vector(args)
    }

    get_bcs() {
        return RemoveDelegatorFromAllowlist.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RemoveDelegatorFromAllowlist`
    }

    from(arg: RemoveDelegatorFromAllowlist) {
        this.pool_address = arg.pool_address;
        this.delegator_address = arg.delegator_address;
    }

    static from_bcs(arg: {
        pool_address: string,
        delegator_address: string
    }): RemoveDelegatorFromAllowlist {
        return new RemoveDelegatorFromAllowlist(arg.pool_address, arg.delegator_address)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        delegator_address: string
    } []): RemoveDelegatorFromAllowlist[] {
        return args.map(function(arg) {
            return new RemoveDelegatorFromAllowlist(arg.pool_address, arg.delegator_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("RemoveDelegatorFromAllowlist", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            delegator_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RemoveDelegatorFromAllowlist(val.pool_address, val.delegator_address),
        });
    };
}

/* ============================== SetBeneficiaryForOperator =============================== */

export class SetBeneficiaryForOperator implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SetBeneficiaryForOperator`;

    operator: string;
    old_beneficiary: string;
    new_beneficiary: string;

    constructor(operator: string, old_beneficiary: string, new_beneficiary: string) {
        this.operator = operator;
        this.old_beneficiary = old_beneficiary;
        this.new_beneficiary = new_beneficiary;
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
        return SetBeneficiaryForOperator.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SetBeneficiaryForOperator.from_bcs_vector(args)
    }

    get_bcs() {
        return SetBeneficiaryForOperator.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SetBeneficiaryForOperator`
    }

    from(arg: SetBeneficiaryForOperator) {
        this.operator = arg.operator;
        this.old_beneficiary = arg.old_beneficiary;
        this.new_beneficiary = arg.new_beneficiary;
    }

    static from_bcs(arg: {
        operator: string,
        old_beneficiary: string,
        new_beneficiary: string
    }): SetBeneficiaryForOperator {
        return new SetBeneficiaryForOperator(arg.operator, arg.old_beneficiary, arg.new_beneficiary)
    }

    static from_bcs_vector(args: {
        operator: string,
        old_beneficiary: string,
        new_beneficiary: string
    } []): SetBeneficiaryForOperator[] {
        return args.map(function(arg) {
            return new SetBeneficiaryForOperator(arg.operator, arg.old_beneficiary, arg.new_beneficiary)
        })
    }

    static get bcs() {
        return bcs_import.struct("SetBeneficiaryForOperator", {
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            old_beneficiary: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            new_beneficiary: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new SetBeneficiaryForOperator(val.operator, val.old_beneficiary, val.new_beneficiary),
        });
    };
}

/* ============================== VoteDelegation =============================== */

export class VoteDelegation implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VoteDelegation`;

    voter: string;
    pending_voter: string;
    last_locked_until_secs: u64_import;

    constructor(voter: string, pending_voter: string, last_locked_until_secs: u64_import) {
        this.voter = voter;
        this.pending_voter = pending_voter;
        this.last_locked_until_secs = last_locked_until_secs;
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
        return VoteDelegation.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return VoteDelegation.from_bcs_vector(args)
    }

    get_bcs() {
        return VoteDelegation.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::VoteDelegation`
    }

    from(arg: VoteDelegation) {
        this.voter = arg.voter;
        this.pending_voter = arg.pending_voter;
        this.last_locked_until_secs = arg.last_locked_until_secs;
    }

    static from_bcs(arg: {
        voter: string,
        pending_voter: string,
        last_locked_until_secs: u64_import
    }): VoteDelegation {
        return new VoteDelegation(arg.voter, arg.pending_voter, arg.last_locked_until_secs)
    }

    static from_bcs_vector(args: {
        voter: string,
        pending_voter: string,
        last_locked_until_secs: u64_import
    } []): VoteDelegation[] {
        return args.map(function(arg) {
            return new VoteDelegation(arg.voter, arg.pending_voter, arg.last_locked_until_secs)
        })
    }

    static get bcs() {
        return bcs_import.struct("VoteDelegation", {
            voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pending_voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            last_locked_until_secs: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new VoteDelegation(val.voter, val.pending_voter, val.last_locked_until_secs),
        });
    };
}

/* ============================== VotingRecordKey =============================== */

export class VotingRecordKey implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VotingRecordKey`;

    voter: string;
    proposal_id: u64_import;

    constructor(voter: string, proposal_id: u64_import) {
        this.voter = voter;
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
        return VotingRecordKey.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return VotingRecordKey.from_bcs_vector(args)
    }

    get_bcs() {
        return VotingRecordKey.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::VotingRecordKey`
    }

    from(arg: VotingRecordKey) {
        this.voter = arg.voter;
        this.proposal_id = arg.proposal_id;
    }

    static from_bcs(arg: {
        voter: string,
        proposal_id: u64_import
    }): VotingRecordKey {
        return new VotingRecordKey(arg.voter, arg.proposal_id)
    }

    static from_bcs_vector(args: {
        voter: string,
        proposal_id: u64_import
    } []): VotingRecordKey[] {
        return args.map(function(arg) {
            return new VotingRecordKey(arg.voter, arg.proposal_id)
        })
    }

    static get bcs() {
        return bcs_import.struct("VotingRecordKey", {
            voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            proposal_id: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new VotingRecordKey(val.voter, val.proposal_id),
        });
    };
}

function partial_governance_voting_enabled(arg0: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "partial_governance_voting_enabled", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function withdraw(arg0: string, arg1: string, arg2: u64_import) {
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
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "withdraw", [], args);

}

function withdraw_internal(arg0: DelegationPool, arg1: string, arg2: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "withdraw_internal", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function create_proposal(arg0: string, arg1: string, arg2: number[], arg3: number[], arg4: number[], arg5: boolean) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_proposal", [], args);

}

function vote(arg0: string, arg1: string, arg2: u64_import, arg3: u64_import, arg4: boolean) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "vote", [], args);

}

function add_stake(arg0: string, arg1: string, arg2: u64_import) {
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
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_stake", [], args);

}

function assert_owner_cap_exists(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_owner_cap_exists", [], args);

}

function get_owned_pool_address(arg0: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_owned_pool_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_stake(arg0: string, arg1: string): [u64_import, u64_import, u64_import] {
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

    let [r0, r1, r2] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_stake", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r1.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r2.Raw[0]))
    ];
}

function reactivate_stake(arg0: string, arg1: string, arg2: u64_import) {
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
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "reactivate_stake", [], args);

}

function set_delegated_voter(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_delegated_voter", [], args);

}

function set_operator(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_operator", [], args);

}

function unlock(arg0: string, arg1: string, arg2: u64_import) {
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
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unlock", [], args);

}

function multiply_then_divide(arg0: u64_import, arg1: u64_import, arg2: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "multiply_then_divide", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function allowlist_delegator(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "allowlist_delegator", [], args);

}

function allowlisting_enabled(arg0: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "allowlisting_enabled", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function amount_to_shares_to_redeem(arg0: Pool, arg1: string, arg2: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "amount_to_shares_to_redeem", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function assert_allowlisting_enabled(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_allowlisting_enabled", [], args);

}

function assert_delegation_pool_exists(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_delegation_pool_exists", [], args);

}

function assert_delegator_allowlisted(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_delegator_allowlisted", [], args);

}

function assert_min_active_balance(arg0: DelegationPool, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_min_active_balance", [], args);

}

function assert_min_pending_inactive_balance(arg0: DelegationPool, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_min_pending_inactive_balance", [], args);

}

function assert_partial_governance_voting_enabled(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_partial_governance_voting_enabled", [], args);

}

function beneficiary_for_operator(arg0: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "beneficiary_for_operator", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function buy_in_active_shares(arg0: DelegationPool, arg1: string, arg2: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "buy_in_active_shares", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function buy_in_pending_inactive_shares(arg0: DelegationPool, arg1: string, arg2: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "buy_in_pending_inactive_shares", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function calculate_and_update_delegated_votes(arg0: DelegationPool, arg1: GovernanceRecords, arg2: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(GovernanceRecords.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "calculate_and_update_delegated_votes", [], args);

    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function calculate_and_update_delegator_voter(arg0: string, arg1: string): [string] {
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

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "calculate_and_update_delegator_voter", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function calculate_and_update_delegator_voter_internal(arg0: DelegationPool, arg1: GovernanceRecords, arg2: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(GovernanceRecords.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "calculate_and_update_delegator_voter_internal", [], args);

    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function calculate_and_update_remaining_voting_power(arg0: string, arg1: string, arg2: u64_import): [u64_import] {
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
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "calculate_and_update_remaining_voting_power", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function calculate_and_update_voter_total_voting_power(arg0: string, arg1: string): [u64_import] {
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

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "calculate_and_update_voter_total_voting_power", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function calculate_and_update_voting_delegation(arg0: string, arg1: string): [string, string, u64_import] {
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

    let [r0, r1, r2] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "calculate_and_update_voting_delegation", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0])),
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r1.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r2.Raw[0]))
    ];
}

function calculate_stake_pool_drift(arg0: DelegationPool): [boolean, u64_import, u64_import, u64_import, u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, r1, r2, r3, r4] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "calculate_stake_pool_drift", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r1.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r2.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r3.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r4.Raw[0]))
    ];
}

function calculate_total_voting_power(arg0: DelegationPool, arg1: DelegatedVotes): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(DelegatedVotes.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "calculate_total_voting_power", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function can_withdraw_pending_inactive(arg0: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "can_withdraw_pending_inactive", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function coins_to_redeem_to_ensure_min_stake(arg0: Pool, arg1: string, arg2: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "coins_to_redeem_to_ensure_min_stake", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function coins_to_transfer_to_ensure_min_stake(arg0: Pool, arg1: Pool, arg2: string, arg3: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Pool.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "coins_to_transfer_to_ensure_min_stake", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create_resource_account_seed(arg0: number[]): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_resource_account_seed", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function delegate_voting_power(arg0: string, arg1: string, arg2: string) {
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
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "delegate_voting_power", [], args);

}

function delegation_pool_exists(arg0: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "delegation_pool_exists", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function delegator_allowlisted(arg0: string, arg1: string): [boolean] {
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

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "delegator_allowlisted", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function disable_delegators_allowlisting(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "disable_delegators_allowlisting", [], args);

}

function enable_delegators_allowlisting(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "enable_delegators_allowlisting", [], args);

}

function enable_partial_governance_voting(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "enable_partial_governance_voting", [], args);

}

function evict_delegator(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "evict_delegator", [], args);

}

function execute_pending_withdrawal(arg0: DelegationPool, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "execute_pending_withdrawal", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function get_add_stake_fee(arg0: string, arg1: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_add_stake_fee", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_delegation_pool_stake(arg0: string): [u64_import, u64_import, u64_import, u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0, r1, r2, r3] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_delegation_pool_stake", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r1.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r2.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r3.Raw[0]))
    ];
}

function get_delegator_active_shares(arg0: DelegationPool, arg1: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_delegator_active_shares", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_delegator_pending_inactive_shares(arg0: DelegationPool, arg1: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_delegator_pending_inactive_shares", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_delegators_allowlist(arg0: string): [string[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_delegators_allowlist", [], args);

    return [
        bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_expected_stake_pool_address(arg0: string, arg1: number[]): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_expected_stake_pool_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_pending_withdrawal(arg0: string, arg1: string): [boolean, u64_import] {
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

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_pending_withdrawal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r1.Raw[0]))
    ];
}

function get_pool_address(arg0: DelegationPool): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_pool_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_used_voting_power(arg0: GovernanceRecords, arg1: string, arg2: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(GovernanceRecords.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_used_voting_power", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function initialize_delegation_pool(arg0: string, arg1: u64_import, arg2: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_delegation_pool", [], args);

}

function is_next_commission_percentage_effective(arg0: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_next_commission_percentage_effective", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function min_remaining_secs_for_commission_change(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "min_remaining_secs_for_commission_change", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function observed_lockup_cycle(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "observed_lockup_cycle", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function olc_with_index(arg0: u64_import): [ObservedLockupCycle] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "olc_with_index", [], args);

    return [
        ObservedLockupCycle.from_bcs(ObservedLockupCycle.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function operator_commission_percentage(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "operator_commission_percentage", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function operator_commission_percentage_next_lockup_cycle(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "operator_commission_percentage_next_lockup_cycle", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function owner_cap_exists(arg0: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "owner_cap_exists", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function pending_inactive_shares_pool(arg0: DelegationPool): [Pool] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pending_inactive_shares_pool", [], args);

    return [
        Pool.from_bcs(Pool.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function pending_inactive_shares_pool_mut(arg0: DelegationPool): [Pool] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pending_inactive_shares_pool_mut", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Pool.from_bcs(Pool.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function pending_withdrawal_exists(arg0: DelegationPool, arg1: string): [boolean, ObservedLockupCycle] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pending_withdrawal_exists", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0])),
        ObservedLockupCycle.from_bcs(ObservedLockupCycle.bcs.parse(new Uint8Array(r1.Raw[0])))
    ];
}

function redeem_active_shares(arg0: DelegationPool, arg1: string, arg2: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "redeem_active_shares", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function redeem_inactive_shares(arg0: DelegationPool, arg1: string, arg2: u64_import, arg3: ObservedLockupCycle): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(ObservedLockupCycle.bcs.serialize(arg3).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "redeem_inactive_shares", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function remove_delegator_from_allowlist(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_delegator_from_allowlist", [], args);

}

function retrieve_stake_pool_owner(arg0: DelegationPool): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "retrieve_stake_pool_owner", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function set_beneficiary_for_operator(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_beneficiary_for_operator", [], args);

}

function shareholders_count_active_pool(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "shareholders_count_active_pool", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function synchronize_delegation_pool(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "synchronize_delegation_pool", [], args);

}

function unlock_internal(arg0: string, arg1: string, arg2: u64_import) {
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
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unlock_internal", [], args);

}

function update_and_borrow_mut_delegated_votes(arg0: DelegationPool, arg1: GovernanceRecords, arg2: string): [DelegatedVotes] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(GovernanceRecords.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_and_borrow_mut_delegated_votes", [], args);

    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        DelegatedVotes.from_bcs(DelegatedVotes.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function update_and_borrow_mut_delegator_vote_delegation(arg0: DelegationPool, arg1: GovernanceRecords, arg2: string): [VoteDelegation] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(GovernanceRecords.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_and_borrow_mut_delegator_vote_delegation", [], args);

    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        VoteDelegation.from_bcs(VoteDelegation.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function update_commission_percentage(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_commission_percentage", [], args);

}

function update_governanace_records_for_redeem_active_shares(arg0: DelegationPool, arg1: string, arg2: u64_import, arg3: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_governanace_records_for_redeem_active_shares", [], args);

}

function update_governanace_records_for_redeem_pending_inactive_shares(arg0: DelegationPool, arg1: string, arg2: u64_import, arg3: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_governanace_records_for_redeem_pending_inactive_shares", [], args);

}

function update_governance_records_for_buy_in_active_shares(arg0: DelegationPool, arg1: string, arg2: u64_import, arg3: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_governance_records_for_buy_in_active_shares", [], args);

}

function update_governance_records_for_buy_in_pending_inactive_shares(arg0: DelegationPool, arg1: string, arg2: u64_import, arg3: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DelegationPool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_governance_records_for_buy_in_pending_inactive_shares", [], args);

}

export const delegation_pool = {
    CreateProposal,
    CreateProposalEvent,
    Vote,
    VoteEvent,
    AddStake,
    AddStakeEvent,
    ReactivateStake,
    ReactivateStakeEvent,
    UnlockStake,
    UnlockStakeEvent,
    WithdrawStake,
    WithdrawStakeEvent,
    AllowlistDelegator,
    BeneficiaryForOperator,
    CommissionPercentageChange,
    DelegateVotingPower,
    DelegateVotingPowerEvent,
    DelegatedVotes,
    DelegationPool,
    DelegationPoolAllowlisting,
    DelegationPoolOwnership,
    DisableDelegatorsAllowlisting,
    DistributeCommission,
    DistributeCommissionEvent,
    EnableDelegatorsAllowlisting,
    EvictDelegator,
    GovernanceRecords,
    NextCommissionPercentage,
    ObservedLockupCycle,
    RemoveDelegatorFromAllowlist,
    SetBeneficiaryForOperator,
    VoteDelegation,
    VotingRecordKey,
    partial_governance_voting_enabled,
    withdraw,
    withdraw_internal,
    create_proposal,
    vote,
    add_stake,
    assert_owner_cap_exists,
    get_owned_pool_address,
    get_stake,
    reactivate_stake,
    set_delegated_voter,
    set_operator,
    unlock,
    multiply_then_divide,
    allowlist_delegator,
    allowlisting_enabled,
    amount_to_shares_to_redeem,
    assert_allowlisting_enabled,
    assert_delegation_pool_exists,
    assert_delegator_allowlisted,
    assert_min_active_balance,
    assert_min_pending_inactive_balance,
    assert_partial_governance_voting_enabled,
    beneficiary_for_operator,
    buy_in_active_shares,
    buy_in_pending_inactive_shares,
    calculate_and_update_delegated_votes,
    calculate_and_update_delegator_voter,
    calculate_and_update_delegator_voter_internal,
    calculate_and_update_remaining_voting_power,
    calculate_and_update_voter_total_voting_power,
    calculate_and_update_voting_delegation,
    calculate_stake_pool_drift,
    calculate_total_voting_power,
    can_withdraw_pending_inactive,
    coins_to_redeem_to_ensure_min_stake,
    coins_to_transfer_to_ensure_min_stake,
    create_resource_account_seed,
    delegate_voting_power,
    delegation_pool_exists,
    delegator_allowlisted,
    disable_delegators_allowlisting,
    enable_delegators_allowlisting,
    enable_partial_governance_voting,
    evict_delegator,
    execute_pending_withdrawal,
    get_add_stake_fee,
    get_delegation_pool_stake,
    get_delegator_active_shares,
    get_delegator_pending_inactive_shares,
    get_delegators_allowlist,
    get_expected_stake_pool_address,
    get_pending_withdrawal,
    get_pool_address,
    get_used_voting_power,
    initialize_delegation_pool,
    is_next_commission_percentage_effective,
    min_remaining_secs_for_commission_change,
    observed_lockup_cycle,
    olc_with_index,
    operator_commission_percentage,
    operator_commission_percentage_next_lockup_cycle,
    owner_cap_exists,
    pending_inactive_shares_pool,
    pending_inactive_shares_pool_mut,
    pending_withdrawal_exists,
    redeem_active_shares,
    redeem_inactive_shares,
    remove_delegator_from_allowlist,
    retrieve_stake_pool_owner,
    set_beneficiary_for_operator,
    shareholders_count_active_pool,
    synchronize_delegation_pool,
    unlock_internal,
    update_and_borrow_mut_delegated_votes,
    update_and_borrow_mut_delegator_vote_delegation,
    update_commission_percentage,
    update_governanace_records_for_redeem_active_shares,
    update_governanace_records_for_redeem_pending_inactive_shares,
    update_governance_records_for_buy_in_active_shares,
    update_governance_records_for_buy_in_pending_inactive_shares
}