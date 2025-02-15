import {
    StructClass,
    TypeArgument,
    U128,
    U8,
    get_package_address,
    get_wasm,
    has_arr,
    into_arr_bcs_vector,
    into_arr_value,
    to_arr_value,
    String as string_import,
    u64 as u64_import
} from "../../sui_wasm";
import {
    EventHandle
} from "./event";
import {
    Option
} from "./option";
import {
    SimpleMap
} from "./simple_map";
import {
    Table
} from "./table";
import {
    TypeInfo
} from "./type_info";
import {
    BcsType,
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "voting";

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
    early_resolution_vote_threshold: Option < u64_import > ;
    execution_hash: number[];
    expiration_secs: u64_import;
    metadata: SimpleMap < string,
    number[] > ;
    min_vote_threshold: u64_import;

    constructor(proposal_id: u64_import, early_resolution_vote_threshold: Option < u64_import > , execution_hash: number[], expiration_secs: u64_import, metadata: SimpleMap < string, number[] > , min_vote_threshold: u64_import) {
        this.proposal_id = proposal_id;
        this.early_resolution_vote_threshold = early_resolution_vote_threshold;
        this.execution_hash = execution_hash;
        this.expiration_secs = expiration_secs;
        this.metadata = metadata;
        this.min_vote_threshold = min_vote_threshold;
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
        this.early_resolution_vote_threshold = arg.early_resolution_vote_threshold;
        this.execution_hash = arg.execution_hash;
        this.expiration_secs = arg.expiration_secs;
        this.metadata = arg.metadata;
        this.min_vote_threshold = arg.min_vote_threshold;
    }

    static from_bcs(arg: {
        proposal_id: u64_import,
        early_resolution_vote_threshold: Option < u64_import > ,
        execution_hash: number[],
        expiration_secs: u64_import,
        metadata: SimpleMap < string,
        number[] > ,
        min_vote_threshold: u64_import
    }): CreateProposal {
        return new CreateProposal(arg.proposal_id, arg.early_resolution_vote_threshold, arg.execution_hash, arg.expiration_secs, arg.metadata, arg.min_vote_threshold)
    }

    static from_bcs_vector(args: {
        proposal_id: u64_import,
        early_resolution_vote_threshold: Option < u64_import > ,
        execution_hash: number[],
        expiration_secs: u64_import,
        metadata: SimpleMap < string,
        number[] > ,
        min_vote_threshold: u64_import
    } []): CreateProposal[] {
        return args.map(function(arg) {
            return new CreateProposal(arg.proposal_id, arg.early_resolution_vote_threshold, arg.execution_hash, arg.expiration_secs, arg.metadata, arg.min_vote_threshold)
        })
    }

    static get bcs() {
        return bcs_import.struct("CreateProposal", {
            proposal_id: bcs_import.u64(),
            early_resolution_vote_threshold: Option.bcs(bcs_import.u128()),
            execution_hash: bcs_import.vector(bcs_import.u8()),
            expiration_secs: bcs_import.u64(),
            metadata: SimpleMap.bcs(bcs_import.string(), bcs_import.vector(bcs_import.u8())),
            min_vote_threshold: bcs_import.u128(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CreateProposal(val.proposal_id, val.early_resolution_vote_threshold, val.execution_hash, val.expiration_secs, val.metadata, val.min_vote_threshold),
        });
    };
}

/* ============================== CreateProposalEvent =============================== */

export class CreateProposalEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CreateProposalEvent`;

    proposal_id: u64_import;
    early_resolution_vote_threshold: Option < u64_import > ;
    execution_hash: number[];
    expiration_secs: u64_import;
    metadata: SimpleMap < string,
    number[] > ;
    min_vote_threshold: u64_import;

    constructor(proposal_id: u64_import, early_resolution_vote_threshold: Option < u64_import > , execution_hash: number[], expiration_secs: u64_import, metadata: SimpleMap < string, number[] > , min_vote_threshold: u64_import) {
        this.proposal_id = proposal_id;
        this.early_resolution_vote_threshold = early_resolution_vote_threshold;
        this.execution_hash = execution_hash;
        this.expiration_secs = expiration_secs;
        this.metadata = metadata;
        this.min_vote_threshold = min_vote_threshold;
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
        this.early_resolution_vote_threshold = arg.early_resolution_vote_threshold;
        this.execution_hash = arg.execution_hash;
        this.expiration_secs = arg.expiration_secs;
        this.metadata = arg.metadata;
        this.min_vote_threshold = arg.min_vote_threshold;
    }

    static from_bcs(arg: {
        proposal_id: u64_import,
        early_resolution_vote_threshold: Option < u64_import > ,
        execution_hash: number[],
        expiration_secs: u64_import,
        metadata: SimpleMap < string,
        number[] > ,
        min_vote_threshold: u64_import
    }): CreateProposalEvent {
        return new CreateProposalEvent(arg.proposal_id, arg.early_resolution_vote_threshold, arg.execution_hash, arg.expiration_secs, arg.metadata, arg.min_vote_threshold)
    }

    static from_bcs_vector(args: {
        proposal_id: u64_import,
        early_resolution_vote_threshold: Option < u64_import > ,
        execution_hash: number[],
        expiration_secs: u64_import,
        metadata: SimpleMap < string,
        number[] > ,
        min_vote_threshold: u64_import
    } []): CreateProposalEvent[] {
        return args.map(function(arg) {
            return new CreateProposalEvent(arg.proposal_id, arg.early_resolution_vote_threshold, arg.execution_hash, arg.expiration_secs, arg.metadata, arg.min_vote_threshold)
        })
    }

    static get bcs() {
        return bcs_import.struct("CreateProposalEvent", {
            proposal_id: bcs_import.u64(),
            early_resolution_vote_threshold: Option.bcs(bcs_import.u128()),
            execution_hash: bcs_import.vector(bcs_import.u8()),
            expiration_secs: bcs_import.u64(),
            metadata: SimpleMap.bcs(bcs_import.string(), bcs_import.vector(bcs_import.u8())),
            min_vote_threshold: bcs_import.u128(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CreateProposalEvent(val.proposal_id, val.early_resolution_vote_threshold, val.execution_hash, val.expiration_secs, val.metadata, val.min_vote_threshold),
        });
    };
}

/* ============================== Proposal =============================== */

export class Proposal < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Proposal`;

    proposer: string;
    execution_content: Option < T0 > ;
    metadata: SimpleMap < string,
    number[] > ;
    creation_time_secs: u64_import;
    execution_hash: number[];
    min_vote_threshold: u64_import;
    expiration_secs: u64_import;
    early_resolution_vote_threshold: Option < u64_import > ;
    yes_votes: u64_import;
    no_votes: u64_import;
    is_resolved: boolean;
    resolution_time_secs: u64_import;

    T0_bcs: any;

    constructor(proposer: string, execution_content: Option < T0 > , metadata: SimpleMap < string, number[] > , creation_time_secs: u64_import, execution_hash: number[], min_vote_threshold: u64_import, expiration_secs: u64_import, early_resolution_vote_threshold: Option < u64_import > , yes_votes: u64_import, no_votes: u64_import, is_resolved: boolean, resolution_time_secs: u64_import) {
        this.proposer = proposer;
        this.execution_content = execution_content;
        this.metadata = metadata;
        this.creation_time_secs = creation_time_secs;
        this.execution_hash = execution_hash;
        this.min_vote_threshold = min_vote_threshold;
        this.expiration_secs = expiration_secs;
        this.early_resolution_vote_threshold = early_resolution_vote_threshold;
        this.yes_votes = yes_votes;
        this.no_votes = no_votes;
        this.is_resolved = is_resolved;
        this.resolution_time_secs = resolution_time_secs;
    }

    into_value() {
        return {
            proposer: (this.proposer as unknown as StructClass).into_value ? (this.proposer as unknown as StructClass).into_value() : this.proposer,
            execution_content: (this.execution_content as unknown as StructClass).into_value ? (this.execution_content as unknown as StructClass).into_value() : this.execution_content,
            metadata: (this.metadata as unknown as StructClass).into_value ? (this.metadata as unknown as StructClass).into_value() : this.metadata,
            creation_time_secs: (this.creation_time_secs as unknown as StructClass).into_value ? (this.creation_time_secs as unknown as StructClass).into_value() : this.creation_time_secs,
            execution_hash: into_arr_value(this.execution_hash),
            min_vote_threshold: (this.min_vote_threshold as unknown as StructClass).into_value ? (this.min_vote_threshold as unknown as StructClass).into_value() : this.min_vote_threshold,
            expiration_secs: (this.expiration_secs as unknown as StructClass).into_value ? (this.expiration_secs as unknown as StructClass).into_value() : this.expiration_secs,
            early_resolution_vote_threshold: (this.early_resolution_vote_threshold as unknown as StructClass).into_value ? (this.early_resolution_vote_threshold as unknown as StructClass).into_value() : this.early_resolution_vote_threshold,
            yes_votes: (this.yes_votes as unknown as StructClass).into_value ? (this.yes_votes as unknown as StructClass).into_value() : this.yes_votes,
            no_votes: (this.no_votes as unknown as StructClass).into_value ? (this.no_votes as unknown as StructClass).into_value() : this.no_votes,
            is_resolved: (this.is_resolved as unknown as StructClass).into_value ? (this.is_resolved as unknown as StructClass).into_value() : this.is_resolved,
            resolution_time_secs: (this.resolution_time_secs as unknown as StructClass).into_value ? (this.resolution_time_secs as unknown as StructClass).into_value() : this.resolution_time_secs
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.execution_content) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.execution_content) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.execution_content) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.execution_content) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.execution_content) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return Proposal.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Proposal.from_bcs_vector(args)
    }

    get_bcs() {
        return Proposal.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Proposal`
    }

    from(arg: Proposal < T0 > ) {
        this.proposer = arg.proposer;
        this.execution_content = arg.execution_content;
        this.metadata = arg.metadata;
        this.creation_time_secs = arg.creation_time_secs;
        this.execution_hash = arg.execution_hash;
        this.min_vote_threshold = arg.min_vote_threshold;
        this.expiration_secs = arg.expiration_secs;
        this.early_resolution_vote_threshold = arg.early_resolution_vote_threshold;
        this.yes_votes = arg.yes_votes;
        this.no_votes = arg.no_votes;
        this.is_resolved = arg.is_resolved;
        this.resolution_time_secs = arg.resolution_time_secs;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        proposer: string,
        execution_content: Option < T0 > ,
        metadata: SimpleMap < string,
        number[] > ,
        creation_time_secs: u64_import,
        execution_hash: number[],
        min_vote_threshold: u64_import,
        expiration_secs: u64_import,
        early_resolution_vote_threshold: Option < u64_import > ,
        yes_votes: u64_import,
        no_votes: u64_import,
        is_resolved: boolean,
        resolution_time_secs: u64_import
    }): Proposal < T0 > {
        return new Proposal(arg.proposer, arg.execution_content, arg.metadata, arg.creation_time_secs, arg.execution_hash, arg.min_vote_threshold, arg.expiration_secs, arg.early_resolution_vote_threshold, arg.yes_votes, arg.no_votes, arg.is_resolved, arg.resolution_time_secs)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        proposer: string,
        execution_content: Option < T0 > ,
        metadata: SimpleMap < string,
        number[] > ,
        creation_time_secs: u64_import,
        execution_hash: number[],
        min_vote_threshold: u64_import,
        expiration_secs: u64_import,
        early_resolution_vote_threshold: Option < u64_import > ,
        yes_votes: u64_import,
        no_votes: u64_import,
        is_resolved: boolean,
        resolution_time_secs: u64_import
    } []): Proposal < T0 > [] {
        return args.map(function(arg) {
            return new Proposal(arg.proposer, arg.execution_content, arg.metadata, arg.creation_time_secs, arg.execution_hash, arg.min_vote_threshold, arg.expiration_secs, arg.early_resolution_vote_threshold, arg.yes_votes, arg.no_votes, arg.is_resolved, arg.resolution_time_secs)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`Proposal<${T0.name}>`, {
                proposer: bcs_import.bytes(32).transform({
                    input: (val: string) => fromHEX(val),
                    output: (val: Uint8Array) => toHEX(val),
                }),
                execution_content: Option.bcs(T0),
                metadata: SimpleMap.bcs(bcs_import.string(), bcs_import.vector(bcs_import.u8())),
                creation_time_secs: bcs_import.u64(),
                execution_hash: bcs_import.vector(bcs_import.u8()),
                min_vote_threshold: bcs_import.u128(),
                expiration_secs: bcs_import.u64(),
                early_resolution_vote_threshold: Option.bcs(bcs_import.u128()),
                yes_votes: bcs_import.u128(),
                no_votes: bcs_import.u128(),
                is_resolved: bcs_import.bool(),
                resolution_time_secs: bcs_import.u64(),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Proposal(val.proposer, val.execution_content, val.metadata, val.creation_time_secs, val.execution_hash, val.min_vote_threshold, val.expiration_secs, val.early_resolution_vote_threshold, val.yes_votes, val.no_votes, val.is_resolved, val.resolution_time_secs),
            });
    };
}

/* ============================== RegisterForum =============================== */

export class RegisterForum implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RegisterForum`;

    hosting_account: string;
    proposal_type_info: TypeInfo;

    constructor(hosting_account: string, proposal_type_info: TypeInfo) {
        this.hosting_account = hosting_account;
        this.proposal_type_info = proposal_type_info;
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
        return RegisterForum.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RegisterForum.from_bcs_vector(args)
    }

    get_bcs() {
        return RegisterForum.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RegisterForum`
    }

    from(arg: RegisterForum) {
        this.hosting_account = arg.hosting_account;
        this.proposal_type_info = arg.proposal_type_info;
    }

    static from_bcs(arg: {
        hosting_account: string,
        proposal_type_info: TypeInfo
    }): RegisterForum {
        return new RegisterForum(arg.hosting_account, arg.proposal_type_info)
    }

    static from_bcs_vector(args: {
        hosting_account: string,
        proposal_type_info: TypeInfo
    } []): RegisterForum[] {
        return args.map(function(arg) {
            return new RegisterForum(arg.hosting_account, arg.proposal_type_info)
        })
    }

    static get bcs() {
        return bcs_import.struct("RegisterForum", {
            hosting_account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            proposal_type_info: TypeInfo.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RegisterForum(val.hosting_account, val.proposal_type_info),
        });
    };
}

/* ============================== RegisterForumEvent =============================== */

export class RegisterForumEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RegisterForumEvent`;

    hosting_account: string;
    proposal_type_info: TypeInfo;

    constructor(hosting_account: string, proposal_type_info: TypeInfo) {
        this.hosting_account = hosting_account;
        this.proposal_type_info = proposal_type_info;
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
        return RegisterForumEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RegisterForumEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return RegisterForumEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RegisterForumEvent`
    }

    from(arg: RegisterForumEvent) {
        this.hosting_account = arg.hosting_account;
        this.proposal_type_info = arg.proposal_type_info;
    }

    static from_bcs(arg: {
        hosting_account: string,
        proposal_type_info: TypeInfo
    }): RegisterForumEvent {
        return new RegisterForumEvent(arg.hosting_account, arg.proposal_type_info)
    }

    static from_bcs_vector(args: {
        hosting_account: string,
        proposal_type_info: TypeInfo
    } []): RegisterForumEvent[] {
        return args.map(function(arg) {
            return new RegisterForumEvent(arg.hosting_account, arg.proposal_type_info)
        })
    }

    static get bcs() {
        return bcs_import.struct("RegisterForumEvent", {
            hosting_account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            proposal_type_info: TypeInfo.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RegisterForumEvent(val.hosting_account, val.proposal_type_info),
        });
    };
}

/* ============================== ResolveProposal =============================== */

export class ResolveProposal implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ResolveProposal`;

    proposal_id: u64_import;
    yes_votes: u64_import;
    no_votes: u64_import;
    resolved_early: boolean;

    constructor(proposal_id: u64_import, yes_votes: u64_import, no_votes: u64_import, resolved_early: boolean) {
        this.proposal_id = proposal_id;
        this.yes_votes = yes_votes;
        this.no_votes = no_votes;
        this.resolved_early = resolved_early;
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
        return ResolveProposal.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ResolveProposal.from_bcs_vector(args)
    }

    get_bcs() {
        return ResolveProposal.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ResolveProposal`
    }

    from(arg: ResolveProposal) {
        this.proposal_id = arg.proposal_id;
        this.yes_votes = arg.yes_votes;
        this.no_votes = arg.no_votes;
        this.resolved_early = arg.resolved_early;
    }

    static from_bcs(arg: {
        proposal_id: u64_import,
        yes_votes: u64_import,
        no_votes: u64_import,
        resolved_early: boolean
    }): ResolveProposal {
        return new ResolveProposal(arg.proposal_id, arg.yes_votes, arg.no_votes, arg.resolved_early)
    }

    static from_bcs_vector(args: {
        proposal_id: u64_import,
        yes_votes: u64_import,
        no_votes: u64_import,
        resolved_early: boolean
    } []): ResolveProposal[] {
        return args.map(function(arg) {
            return new ResolveProposal(arg.proposal_id, arg.yes_votes, arg.no_votes, arg.resolved_early)
        })
    }

    static get bcs() {
        return bcs_import.struct("ResolveProposal", {
            proposal_id: bcs_import.u64(),
            yes_votes: bcs_import.u128(),
            no_votes: bcs_import.u128(),
            resolved_early: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ResolveProposal(val.proposal_id, val.yes_votes, val.no_votes, val.resolved_early),
        });
    };
}

/* ============================== Vote =============================== */

export class Vote implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Vote`;

    proposal_id: u64_import;
    num_votes: u64_import;

    constructor(proposal_id: u64_import, num_votes: u64_import) {
        this.proposal_id = proposal_id;
        this.num_votes = num_votes;
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
        this.num_votes = arg.num_votes;
    }

    static from_bcs(arg: {
        proposal_id: u64_import,
        num_votes: u64_import
    }): Vote {
        return new Vote(arg.proposal_id, arg.num_votes)
    }

    static from_bcs_vector(args: {
        proposal_id: u64_import,
        num_votes: u64_import
    } []): Vote[] {
        return args.map(function(arg) {
            return new Vote(arg.proposal_id, arg.num_votes)
        })
    }

    static get bcs() {
        return bcs_import.struct("Vote", {
            proposal_id: bcs_import.u64(),
            num_votes: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Vote(val.proposal_id, val.num_votes),
        });
    };
}

/* ============================== VoteEvent =============================== */

export class VoteEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VoteEvent`;

    proposal_id: u64_import;
    num_votes: u64_import;

    constructor(proposal_id: u64_import, num_votes: u64_import) {
        this.proposal_id = proposal_id;
        this.num_votes = num_votes;
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
        this.num_votes = arg.num_votes;
    }

    static from_bcs(arg: {
        proposal_id: u64_import,
        num_votes: u64_import
    }): VoteEvent {
        return new VoteEvent(arg.proposal_id, arg.num_votes)
    }

    static from_bcs_vector(args: {
        proposal_id: u64_import,
        num_votes: u64_import
    } []): VoteEvent[] {
        return args.map(function(arg) {
            return new VoteEvent(arg.proposal_id, arg.num_votes)
        })
    }

    static get bcs() {
        return bcs_import.struct("VoteEvent", {
            proposal_id: bcs_import.u64(),
            num_votes: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new VoteEvent(val.proposal_id, val.num_votes),
        });
    };
}

/* ============================== VotingEvents =============================== */

export class VotingEvents implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VotingEvents`;

    create_proposal_events: EventHandle;
    register_forum_events: EventHandle;
    resolve_proposal_events: EventHandle;
    vote_events: EventHandle;

    constructor(create_proposal_events: EventHandle, register_forum_events: EventHandle, resolve_proposal_events: EventHandle, vote_events: EventHandle) {
        this.create_proposal_events = create_proposal_events;
        this.register_forum_events = register_forum_events;
        this.resolve_proposal_events = resolve_proposal_events;
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
        return VotingEvents.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return VotingEvents.from_bcs_vector(args)
    }

    get_bcs() {
        return VotingEvents.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::VotingEvents`
    }

    from(arg: VotingEvents) {
        this.create_proposal_events = arg.create_proposal_events;
        this.register_forum_events = arg.register_forum_events;
        this.resolve_proposal_events = arg.resolve_proposal_events;
        this.vote_events = arg.vote_events;
    }

    static from_bcs(arg: {
        create_proposal_events: EventHandle,
        register_forum_events: EventHandle,
        resolve_proposal_events: EventHandle,
        vote_events: EventHandle
    }): VotingEvents {
        return new VotingEvents(arg.create_proposal_events, arg.register_forum_events, arg.resolve_proposal_events, arg.vote_events)
    }

    static from_bcs_vector(args: {
        create_proposal_events: EventHandle,
        register_forum_events: EventHandle,
        resolve_proposal_events: EventHandle,
        vote_events: EventHandle
    } []): VotingEvents[] {
        return args.map(function(arg) {
            return new VotingEvents(arg.create_proposal_events, arg.register_forum_events, arg.resolve_proposal_events, arg.vote_events)
        })
    }

    static get bcs() {
        return bcs_import.struct("VotingEvents", {
            create_proposal_events: EventHandle.bcs,
            register_forum_events: EventHandle.bcs,
            resolve_proposal_events: EventHandle.bcs,
            vote_events: EventHandle.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new VotingEvents(val.create_proposal_events, val.register_forum_events, val.resolve_proposal_events, val.vote_events),
        });
    };
}

/* ============================== VotingForum =============================== */

export class VotingForum < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VotingForum`;

    proposals: Table;
    events: VotingEvents;
    next_proposal_id: u64_import;

    T0_bcs: any;

    constructor(proposals ? : Table, events ? : VotingEvents, next_proposal_id ? : u64_import) {
        this.proposals = proposals;
        this.events = events;
        this.next_proposal_id = next_proposal_id;
    }

    into_value() {
        return {
            proposals: (this.proposals as unknown as StructClass).into_value ? (this.proposals as unknown as StructClass).into_value() : this.proposals,
            events: (this.events as unknown as StructClass).into_value ? (this.events as unknown as StructClass).into_value() : this.events,
            next_proposal_id: (this.next_proposal_id as unknown as StructClass).into_value ? (this.next_proposal_id as unknown as StructClass).into_value() : this.next_proposal_id
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.proposals) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.proposals) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.proposals) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.proposals) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.proposals) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return VotingForum.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return VotingForum.from_bcs_vector(args)
    }

    get_bcs() {
        return VotingForum.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::VotingForum`
    }

    from(arg: VotingForum < T0 > ) {
        this.proposals = arg.proposals;
        this.events = arg.events;
        this.next_proposal_id = arg.next_proposal_id;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        proposals: Table,
        events: VotingEvents,
        next_proposal_id: u64_import
    }): VotingForum < T0 > {
        return new VotingForum(arg.proposals, arg.events, arg.next_proposal_id)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        proposals: Table,
        events: VotingEvents,
        next_proposal_id: u64_import
    } []): VotingForum < T0 > [] {
        return args.map(function(arg) {
            return new VotingForum(arg.proposals, arg.events, arg.next_proposal_id)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`VotingForum<${T0.name}>`, {
                proposals: Table.bcs,
                events: VotingEvents.bcs,
                next_proposal_id: bcs_import.u64(),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new VotingForum(val.proposals, val.events, val.next_proposal_id),
            });
    };
}

function register < T0 extends StructClass > (type_args: string[], arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "register", type_args, args);
}

function can_be_resolved_early < T0 extends StructClass > (type_args: string[], arg0: Proposal < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "can_be_resolved_early", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function create_proposal < T0 extends StructClass > (type_args: string[], arg0: string, arg1: string, arg2: T0, arg3: U8[], arg4: u64_import, arg5: u64_import, arg6: Option < U128 > , arg7: SimpleMap < string_import, U8[] > ): [Uint8Array] {
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
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(has_arr(arg3) ? into_arr_bcs_vector(arg3).serialize(into_arr_value(arg3)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg5).toBytes(), ""),
        wasm.new_bytes(arg6.serialize(arg6.into_value()).toBytes(), ""),
        wasm.new_bytes(arg7.serialize(arg7.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_proposal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function create_proposal_v2 < T0 extends StructClass > (type_args: string[], arg0: string, arg1: string, arg2: T0, arg3: U8[], arg4: u64_import, arg5: u64_import, arg6: Option < U128 > , arg7: SimpleMap < string_import, U8[] > , arg8: boolean): [Uint8Array] {
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
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(has_arr(arg3) ? into_arr_bcs_vector(arg3).serialize(into_arr_value(arg3)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg5).toBytes(), ""),
        wasm.new_bytes(arg6.serialize(arg6.into_value()).toBytes(), ""),
        wasm.new_bytes(arg7.serialize(arg7.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg8).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_proposal_v2", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function get_early_resolution_vote_threshold < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_early_resolution_vote_threshold", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function get_execution_hash < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_execution_hash", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function get_min_vote_threshold < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_min_vote_threshold", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function get_proposal_creation_secs < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_proposal_creation_secs", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function get_proposal_expiration_secs < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_proposal_expiration_secs", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function get_proposal_metadata < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_proposal_metadata", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function get_proposal_metadata_value < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import, arg2: string_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_proposal_metadata_value", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function get_proposal_state < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_proposal_state", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function get_proposer < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_proposer", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function get_resolution_time_secs < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_resolution_time_secs", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function get_votes < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_votes", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function is_multi_step_proposal_in_execution < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_multi_step_proposal_in_execution", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function is_proposal_resolvable < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_proposal_resolvable", type_args, args);
}

function is_resolved < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_resolved", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function is_voting_closed < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_voting_closed", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function is_voting_period_over < T0 extends StructClass > (type_args: string[], arg0: Proposal < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_voting_period_over", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function next_proposal_id < T0 extends StructClass > (type_args: string[], arg0: string): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_proposal_id", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function resolve < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "resolve", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function resolve_proposal_v2 < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import, arg2: U8[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(has_arr(arg2) ? into_arr_bcs_vector(arg2).serialize(into_arr_value(arg2)).toBytes() : new Uint8Array([0]), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "resolve_proposal_v2", type_args, args);
}

function vote < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: string, arg2: u64_import, arg3: u64_import, arg4: boolean) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg4).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "vote", type_args, args);
}

export const voting = {
    CreateProposal,
    CreateProposalEvent,
    Proposal,
    RegisterForum,
    RegisterForumEvent,
    ResolveProposal,
    Vote,
    VoteEvent,
    VotingEvents,
    VotingForum,
    register,
    can_be_resolved_early,
    create_proposal,
    create_proposal_v2,
    get_early_resolution_vote_threshold,
    get_execution_hash,
    get_min_vote_threshold,
    get_proposal_creation_secs,
    get_proposal_expiration_secs,
    get_proposal_metadata,
    get_proposal_metadata_value,
    get_proposal_state,
    get_proposer,
    get_resolution_time_secs,
    get_votes,
    is_multi_step_proposal_in_execution,
    is_proposal_resolvable,
    is_resolved,
    is_voting_closed,
    is_voting_period_over,
    next_proposal_id,
    resolve,
    resolve_proposal_v2,
    vote
}