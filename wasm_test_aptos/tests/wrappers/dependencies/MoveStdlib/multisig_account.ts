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
    Option
} from "./option";
import {
    SimpleMap
} from "./simple_map";
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
let MODULE_NAME: string = "multisig_account";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Vote =============================== */

export class Vote implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Vote`;

    multisig_account: string;
    owner: string;
    sequence_number: u64_import;
    approved: boolean;

    constructor(multisig_account: string, owner: string, sequence_number: u64_import, approved: boolean) {
        this.multisig_account = multisig_account;
        this.owner = owner;
        this.sequence_number = sequence_number;
        this.approved = approved;
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
        this.multisig_account = arg.multisig_account;
        this.owner = arg.owner;
        this.sequence_number = arg.sequence_number;
        this.approved = arg.approved;
    }

    static from_bcs(arg: {
        multisig_account: string,
        owner: string,
        sequence_number: u64_import,
        approved: boolean
    }): Vote {
        return new Vote(arg.multisig_account, arg.owner, arg.sequence_number, arg.approved)
    }

    static from_bcs_vector(args: {
        multisig_account: string,
        owner: string,
        sequence_number: u64_import,
        approved: boolean
    } []): Vote[] {
        return args.map(function(arg) {
            return new Vote(arg.multisig_account, arg.owner, arg.sequence_number, arg.approved)
        })
    }

    static get bcs() {
        return bcs_import.struct("Vote", {
            multisig_account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            owner: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            sequence_number: bcs_import.u64(),
            approved: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Vote(val.multisig_account, val.owner, val.sequence_number, val.approved),
        });
    };
}

/* ============================== VoteEvent =============================== */

export class VoteEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VoteEvent`;

    owner: string;
    sequence_number: u64_import;
    approved: boolean;

    constructor(owner: string, sequence_number: u64_import, approved: boolean) {
        this.owner = owner;
        this.sequence_number = sequence_number;
        this.approved = approved;
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
        this.owner = arg.owner;
        this.sequence_number = arg.sequence_number;
        this.approved = arg.approved;
    }

    static from_bcs(arg: {
        owner: string,
        sequence_number: u64_import,
        approved: boolean
    }): VoteEvent {
        return new VoteEvent(arg.owner, arg.sequence_number, arg.approved)
    }

    static from_bcs_vector(args: {
        owner: string,
        sequence_number: u64_import,
        approved: boolean
    } []): VoteEvent[] {
        return args.map(function(arg) {
            return new VoteEvent(arg.owner, arg.sequence_number, arg.approved)
        })
    }

    static get bcs() {
        return bcs_import.struct("VoteEvent", {
            owner: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            sequence_number: bcs_import.u64(),
            approved: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new VoteEvent(val.owner, val.sequence_number, val.approved),
        });
    };
}

/* ============================== AddOwners =============================== */

export class AddOwners implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AddOwners`;

    multisig_account: string;
    owners_added: string[];

    constructor(multisig_account: string, owners_added: string[]) {
        this.multisig_account = multisig_account;
        this.owners_added = owners_added;
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
        return AddOwners.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AddOwners.from_bcs_vector(args)
    }

    get_bcs() {
        return AddOwners.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AddOwners`
    }

    from(arg: AddOwners) {
        this.multisig_account = arg.multisig_account;
        this.owners_added = arg.owners_added;
    }

    static from_bcs(arg: {
        multisig_account: string,
        owners_added: string[]
    }): AddOwners {
        return new AddOwners(arg.multisig_account, arg.owners_added)
    }

    static from_bcs_vector(args: {
        multisig_account: string,
        owners_added: string[]
    } []): AddOwners[] {
        return args.map(function(arg) {
            return new AddOwners(arg.multisig_account, arg.owners_added)
        })
    }

    static get bcs() {
        return bcs_import.struct("AddOwners", {
            multisig_account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            owners_added: bcs_import.vector(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            })),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AddOwners(val.multisig_account, val.owners_added),
        });
    };
}

/* ============================== AddOwnersEvent =============================== */

export class AddOwnersEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AddOwnersEvent`;

    owners_added: string[];

    constructor(owners_added: string[]) {
        this.owners_added = owners_added;
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
        return AddOwnersEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AddOwnersEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return AddOwnersEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AddOwnersEvent`
    }

    from(arg: AddOwnersEvent) {
        this.owners_added = arg.owners_added;
    }

    static from_bcs(arg: {
        owners_added: string[]
    }): AddOwnersEvent {
        return new AddOwnersEvent(arg.owners_added)
    }

    static from_bcs_vector(args: {
        owners_added: string[]
    } []): AddOwnersEvent[] {
        return args.map(function(arg) {
            return new AddOwnersEvent(arg.owners_added)
        })
    }

    static get bcs() {
        return bcs_import.struct("AddOwnersEvent", {
            owners_added: bcs_import.vector(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            })),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AddOwnersEvent(val.owners_added),
        });
    };
}

/* ============================== CreateTransaction =============================== */

export class CreateTransaction implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CreateTransaction`;

    multisig_account: string;
    creator: string;
    sequence_number: u64_import;
    transaction: MultisigTransaction;

    constructor(multisig_account: string, creator: string, sequence_number: u64_import, transaction: MultisigTransaction) {
        this.multisig_account = multisig_account;
        this.creator = creator;
        this.sequence_number = sequence_number;
        this.transaction = transaction;
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
        return CreateTransaction.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CreateTransaction.from_bcs_vector(args)
    }

    get_bcs() {
        return CreateTransaction.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CreateTransaction`
    }

    from(arg: CreateTransaction) {
        this.multisig_account = arg.multisig_account;
        this.creator = arg.creator;
        this.sequence_number = arg.sequence_number;
        this.transaction = arg.transaction;
    }

    static from_bcs(arg: {
        multisig_account: string,
        creator: string,
        sequence_number: u64_import,
        transaction: MultisigTransaction
    }): CreateTransaction {
        return new CreateTransaction(arg.multisig_account, arg.creator, arg.sequence_number, arg.transaction)
    }

    static from_bcs_vector(args: {
        multisig_account: string,
        creator: string,
        sequence_number: u64_import,
        transaction: MultisigTransaction
    } []): CreateTransaction[] {
        return args.map(function(arg) {
            return new CreateTransaction(arg.multisig_account, arg.creator, arg.sequence_number, arg.transaction)
        })
    }

    static get bcs() {
        return bcs_import.struct("CreateTransaction", {
            multisig_account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            creator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            sequence_number: bcs_import.u64(),
            transaction: MultisigTransaction.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CreateTransaction(val.multisig_account, val.creator, val.sequence_number, val.transaction),
        });
    };
}

/* ============================== CreateTransactionEvent =============================== */

export class CreateTransactionEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CreateTransactionEvent`;

    creator: string;
    sequence_number: u64_import;
    transaction: MultisigTransaction;

    constructor(creator: string, sequence_number: u64_import, transaction: MultisigTransaction) {
        this.creator = creator;
        this.sequence_number = sequence_number;
        this.transaction = transaction;
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
        return CreateTransactionEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CreateTransactionEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return CreateTransactionEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CreateTransactionEvent`
    }

    from(arg: CreateTransactionEvent) {
        this.creator = arg.creator;
        this.sequence_number = arg.sequence_number;
        this.transaction = arg.transaction;
    }

    static from_bcs(arg: {
        creator: string,
        sequence_number: u64_import,
        transaction: MultisigTransaction
    }): CreateTransactionEvent {
        return new CreateTransactionEvent(arg.creator, arg.sequence_number, arg.transaction)
    }

    static from_bcs_vector(args: {
        creator: string,
        sequence_number: u64_import,
        transaction: MultisigTransaction
    } []): CreateTransactionEvent[] {
        return args.map(function(arg) {
            return new CreateTransactionEvent(arg.creator, arg.sequence_number, arg.transaction)
        })
    }

    static get bcs() {
        return bcs_import.struct("CreateTransactionEvent", {
            creator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            sequence_number: bcs_import.u64(),
            transaction: MultisigTransaction.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CreateTransactionEvent(val.creator, val.sequence_number, val.transaction),
        });
    };
}

/* ============================== ExecuteRejectedTransaction =============================== */

export class ExecuteRejectedTransaction implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ExecuteRejectedTransaction`;

    multisig_account: string;
    sequence_number: u64_import;
    num_rejections: u64_import;
    executor: string;

    constructor(multisig_account: string, sequence_number: u64_import, num_rejections: u64_import, executor: string) {
        this.multisig_account = multisig_account;
        this.sequence_number = sequence_number;
        this.num_rejections = num_rejections;
        this.executor = executor;
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
        return ExecuteRejectedTransaction.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ExecuteRejectedTransaction.from_bcs_vector(args)
    }

    get_bcs() {
        return ExecuteRejectedTransaction.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ExecuteRejectedTransaction`
    }

    from(arg: ExecuteRejectedTransaction) {
        this.multisig_account = arg.multisig_account;
        this.sequence_number = arg.sequence_number;
        this.num_rejections = arg.num_rejections;
        this.executor = arg.executor;
    }

    static from_bcs(arg: {
        multisig_account: string,
        sequence_number: u64_import,
        num_rejections: u64_import,
        executor: string
    }): ExecuteRejectedTransaction {
        return new ExecuteRejectedTransaction(arg.multisig_account, arg.sequence_number, arg.num_rejections, arg.executor)
    }

    static from_bcs_vector(args: {
        multisig_account: string,
        sequence_number: u64_import,
        num_rejections: u64_import,
        executor: string
    } []): ExecuteRejectedTransaction[] {
        return args.map(function(arg) {
            return new ExecuteRejectedTransaction(arg.multisig_account, arg.sequence_number, arg.num_rejections, arg.executor)
        })
    }

    static get bcs() {
        return bcs_import.struct("ExecuteRejectedTransaction", {
            multisig_account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            sequence_number: bcs_import.u64(),
            num_rejections: bcs_import.u64(),
            executor: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ExecuteRejectedTransaction(val.multisig_account, val.sequence_number, val.num_rejections, val.executor),
        });
    };
}

/* ============================== ExecuteRejectedTransactionEvent =============================== */

export class ExecuteRejectedTransactionEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ExecuteRejectedTransactionEvent`;

    sequence_number: u64_import;
    num_rejections: u64_import;
    executor: string;

    constructor(sequence_number: u64_import, num_rejections: u64_import, executor: string) {
        this.sequence_number = sequence_number;
        this.num_rejections = num_rejections;
        this.executor = executor;
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
        return ExecuteRejectedTransactionEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ExecuteRejectedTransactionEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return ExecuteRejectedTransactionEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ExecuteRejectedTransactionEvent`
    }

    from(arg: ExecuteRejectedTransactionEvent) {
        this.sequence_number = arg.sequence_number;
        this.num_rejections = arg.num_rejections;
        this.executor = arg.executor;
    }

    static from_bcs(arg: {
        sequence_number: u64_import,
        num_rejections: u64_import,
        executor: string
    }): ExecuteRejectedTransactionEvent {
        return new ExecuteRejectedTransactionEvent(arg.sequence_number, arg.num_rejections, arg.executor)
    }

    static from_bcs_vector(args: {
        sequence_number: u64_import,
        num_rejections: u64_import,
        executor: string
    } []): ExecuteRejectedTransactionEvent[] {
        return args.map(function(arg) {
            return new ExecuteRejectedTransactionEvent(arg.sequence_number, arg.num_rejections, arg.executor)
        })
    }

    static get bcs() {
        return bcs_import.struct("ExecuteRejectedTransactionEvent", {
            sequence_number: bcs_import.u64(),
            num_rejections: bcs_import.u64(),
            executor: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ExecuteRejectedTransactionEvent(val.sequence_number, val.num_rejections, val.executor),
        });
    };
}

/* ============================== ExecutionError =============================== */

export class ExecutionError implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ExecutionError`;

    abort_location: string;
    error_type: string;
    error_code: u64_import;

    constructor(abort_location: string, error_type: string, error_code: u64_import) {
        this.abort_location = abort_location;
        this.error_type = error_type;
        this.error_code = error_code;
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
        return ExecutionError.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ExecutionError.from_bcs_vector(args)
    }

    get_bcs() {
        return ExecutionError.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ExecutionError`
    }

    from(arg: ExecutionError) {
        this.abort_location = arg.abort_location;
        this.error_type = arg.error_type;
        this.error_code = arg.error_code;
    }

    static from_bcs(arg: {
        abort_location: string,
        error_type: string,
        error_code: u64_import
    }): ExecutionError {
        return new ExecutionError(arg.abort_location, arg.error_type, arg.error_code)
    }

    static from_bcs_vector(args: {
        abort_location: string,
        error_type: string,
        error_code: u64_import
    } []): ExecutionError[] {
        return args.map(function(arg) {
            return new ExecutionError(arg.abort_location, arg.error_type, arg.error_code)
        })
    }

    static get bcs() {
        return bcs_import.struct("ExecutionError", {
            abort_location: bcs_import.string(),
            error_type: bcs_import.string(),
            error_code: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ExecutionError(val.abort_location, val.error_type, val.error_code),
        });
    };
}

/* ============================== MetadataUpdated =============================== */

export class MetadataUpdated implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::MetadataUpdated`;

    multisig_account: string;
    old_metadata: SimpleMap < string,
    number[] > ;
    new_metadata: SimpleMap < string,
    number[] > ;

    constructor(multisig_account: string, old_metadata: SimpleMap < string, number[] > , new_metadata: SimpleMap < string, number[] > ) {
        this.multisig_account = multisig_account;
        this.old_metadata = old_metadata;
        this.new_metadata = new_metadata;
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
        return MetadataUpdated.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return MetadataUpdated.from_bcs_vector(args)
    }

    get_bcs() {
        return MetadataUpdated.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::MetadataUpdated`
    }

    from(arg: MetadataUpdated) {
        this.multisig_account = arg.multisig_account;
        this.old_metadata = arg.old_metadata;
        this.new_metadata = arg.new_metadata;
    }

    static from_bcs(arg: {
        multisig_account: string,
        old_metadata: SimpleMap < string,
        number[] > ,
        new_metadata: SimpleMap < string,
        number[] >
    }): MetadataUpdated {
        return new MetadataUpdated(arg.multisig_account, arg.old_metadata, arg.new_metadata)
    }

    static from_bcs_vector(args: {
        multisig_account: string,
        old_metadata: SimpleMap < string,
        number[] > ,
        new_metadata: SimpleMap < string,
        number[] >
    } []): MetadataUpdated[] {
        return args.map(function(arg) {
            return new MetadataUpdated(arg.multisig_account, arg.old_metadata, arg.new_metadata)
        })
    }

    static get bcs() {
        return bcs_import.struct("MetadataUpdated", {
            multisig_account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            old_metadata: SimpleMap.bcs(bcs_import.string(), bcs_import.vector(bcs_import.u8())),
            new_metadata: SimpleMap.bcs(bcs_import.string(), bcs_import.vector(bcs_import.u8())),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new MetadataUpdated(val.multisig_account, val.old_metadata, val.new_metadata),
        });
    };
}

/* ============================== MetadataUpdatedEvent =============================== */

export class MetadataUpdatedEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::MetadataUpdatedEvent`;

    old_metadata: SimpleMap < string,
    number[] > ;
    new_metadata: SimpleMap < string,
    number[] > ;

    constructor(old_metadata: SimpleMap < string, number[] > , new_metadata: SimpleMap < string, number[] > ) {
        this.old_metadata = old_metadata;
        this.new_metadata = new_metadata;
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
        return MetadataUpdatedEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return MetadataUpdatedEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return MetadataUpdatedEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::MetadataUpdatedEvent`
    }

    from(arg: MetadataUpdatedEvent) {
        this.old_metadata = arg.old_metadata;
        this.new_metadata = arg.new_metadata;
    }

    static from_bcs(arg: {
        old_metadata: SimpleMap < string,
        number[] > ,
        new_metadata: SimpleMap < string,
        number[] >
    }): MetadataUpdatedEvent {
        return new MetadataUpdatedEvent(arg.old_metadata, arg.new_metadata)
    }

    static from_bcs_vector(args: {
        old_metadata: SimpleMap < string,
        number[] > ,
        new_metadata: SimpleMap < string,
        number[] >
    } []): MetadataUpdatedEvent[] {
        return args.map(function(arg) {
            return new MetadataUpdatedEvent(arg.old_metadata, arg.new_metadata)
        })
    }

    static get bcs() {
        return bcs_import.struct("MetadataUpdatedEvent", {
            old_metadata: SimpleMap.bcs(bcs_import.string(), bcs_import.vector(bcs_import.u8())),
            new_metadata: SimpleMap.bcs(bcs_import.string(), bcs_import.vector(bcs_import.u8())),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new MetadataUpdatedEvent(val.old_metadata, val.new_metadata),
        });
    };
}

/* ============================== MultisigAccount =============================== */

export class MultisigAccount implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::MultisigAccount`;

    owners: string[];
    num_signatures_required: u64_import;
    transactions: Table;
    last_executed_sequence_number: u64_import;
    next_sequence_number: u64_import;
    signer_cap: Option < SignerCapability > ;
    metadata: SimpleMap < string,
    number[] > ;
    add_owners_events: EventHandle;
    remove_owners_events: EventHandle;
    update_signature_required_events: EventHandle;
    create_transaction_events: EventHandle;
    vote_events: EventHandle;
    execute_rejected_transaction_events: EventHandle;
    execute_transaction_events: EventHandle;
    transaction_execution_failed_events: EventHandle;
    metadata_updated_events: EventHandle;

    constructor(owners ? : string[], num_signatures_required ? : u64_import, transactions ? : Table, last_executed_sequence_number ? : u64_import, next_sequence_number ? : u64_import, signer_cap ? : Option < SignerCapability > , metadata ? : SimpleMap < string, number[] > , add_owners_events ? : EventHandle, remove_owners_events ? : EventHandle, update_signature_required_events ? : EventHandle, create_transaction_events ? : EventHandle, vote_events ? : EventHandle, execute_rejected_transaction_events ? : EventHandle, execute_transaction_events ? : EventHandle, transaction_execution_failed_events ? : EventHandle, metadata_updated_events ? : EventHandle) {
        this.owners = owners;
        this.num_signatures_required = num_signatures_required;
        this.transactions = transactions;
        this.last_executed_sequence_number = last_executed_sequence_number;
        this.next_sequence_number = next_sequence_number;
        this.signer_cap = signer_cap;
        this.metadata = metadata;
        this.add_owners_events = add_owners_events;
        this.remove_owners_events = remove_owners_events;
        this.update_signature_required_events = update_signature_required_events;
        this.create_transaction_events = create_transaction_events;
        this.vote_events = vote_events;
        this.execute_rejected_transaction_events = execute_rejected_transaction_events;
        this.execute_transaction_events = execute_transaction_events;
        this.transaction_execution_failed_events = transaction_execution_failed_events;
        this.metadata_updated_events = metadata_updated_events;
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
        return MultisigAccount.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return MultisigAccount.from_bcs_vector(args)
    }

    get_bcs() {
        return MultisigAccount.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::MultisigAccount`
    }

    from(arg: MultisigAccount) {
        this.owners = arg.owners;
        this.num_signatures_required = arg.num_signatures_required;
        this.transactions = arg.transactions;
        this.last_executed_sequence_number = arg.last_executed_sequence_number;
        this.next_sequence_number = arg.next_sequence_number;
        this.signer_cap = arg.signer_cap;
        this.metadata = arg.metadata;
        this.add_owners_events = arg.add_owners_events;
        this.remove_owners_events = arg.remove_owners_events;
        this.update_signature_required_events = arg.update_signature_required_events;
        this.create_transaction_events = arg.create_transaction_events;
        this.vote_events = arg.vote_events;
        this.execute_rejected_transaction_events = arg.execute_rejected_transaction_events;
        this.execute_transaction_events = arg.execute_transaction_events;
        this.transaction_execution_failed_events = arg.transaction_execution_failed_events;
        this.metadata_updated_events = arg.metadata_updated_events;
    }

    static from_bcs(arg: {
        owners: string[],
        num_signatures_required: u64_import,
        transactions: Table,
        last_executed_sequence_number: u64_import,
        next_sequence_number: u64_import,
        signer_cap: Option < SignerCapability > ,
        metadata: SimpleMap < string,
        number[] > ,
        add_owners_events: EventHandle,
        remove_owners_events: EventHandle,
        update_signature_required_events: EventHandle,
        create_transaction_events: EventHandle,
        vote_events: EventHandle,
        execute_rejected_transaction_events: EventHandle,
        execute_transaction_events: EventHandle,
        transaction_execution_failed_events: EventHandle,
        metadata_updated_events: EventHandle
    }): MultisigAccount {
        return new MultisigAccount(arg.owners, arg.num_signatures_required, arg.transactions, arg.last_executed_sequence_number, arg.next_sequence_number, arg.signer_cap, arg.metadata, arg.add_owners_events, arg.remove_owners_events, arg.update_signature_required_events, arg.create_transaction_events, arg.vote_events, arg.execute_rejected_transaction_events, arg.execute_transaction_events, arg.transaction_execution_failed_events, arg.metadata_updated_events)
    }

    static from_bcs_vector(args: {
        owners: string[],
        num_signatures_required: u64_import,
        transactions: Table,
        last_executed_sequence_number: u64_import,
        next_sequence_number: u64_import,
        signer_cap: Option < SignerCapability > ,
        metadata: SimpleMap < string,
        number[] > ,
        add_owners_events: EventHandle,
        remove_owners_events: EventHandle,
        update_signature_required_events: EventHandle,
        create_transaction_events: EventHandle,
        vote_events: EventHandle,
        execute_rejected_transaction_events: EventHandle,
        execute_transaction_events: EventHandle,
        transaction_execution_failed_events: EventHandle,
        metadata_updated_events: EventHandle
    } []): MultisigAccount[] {
        return args.map(function(arg) {
            return new MultisigAccount(arg.owners, arg.num_signatures_required, arg.transactions, arg.last_executed_sequence_number, arg.next_sequence_number, arg.signer_cap, arg.metadata, arg.add_owners_events, arg.remove_owners_events, arg.update_signature_required_events, arg.create_transaction_events, arg.vote_events, arg.execute_rejected_transaction_events, arg.execute_transaction_events, arg.transaction_execution_failed_events, arg.metadata_updated_events)
        })
    }

    static get bcs() {
        return bcs_import.struct("MultisigAccount", {
            owners: bcs_import.vector(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            })),
            num_signatures_required: bcs_import.u64(),
            transactions: Table.bcs,
            last_executed_sequence_number: bcs_import.u64(),
            next_sequence_number: bcs_import.u64(),
            signer_cap: Option.bcs(SignerCapability.bcs),
            metadata: SimpleMap.bcs(bcs_import.string(), bcs_import.vector(bcs_import.u8())),
            add_owners_events: EventHandle.bcs,
            remove_owners_events: EventHandle.bcs,
            update_signature_required_events: EventHandle.bcs,
            create_transaction_events: EventHandle.bcs,
            vote_events: EventHandle.bcs,
            execute_rejected_transaction_events: EventHandle.bcs,
            execute_transaction_events: EventHandle.bcs,
            transaction_execution_failed_events: EventHandle.bcs,
            metadata_updated_events: EventHandle.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new MultisigAccount(val.owners, val.num_signatures_required, val.transactions, val.last_executed_sequence_number, val.next_sequence_number, val.signer_cap, val.metadata, val.add_owners_events, val.remove_owners_events, val.update_signature_required_events, val.create_transaction_events, val.vote_events, val.execute_rejected_transaction_events, val.execute_transaction_events, val.transaction_execution_failed_events, val.metadata_updated_events),
        });
    };
}

/* ============================== MultisigAccountCreationMessage =============================== */

export class MultisigAccountCreationMessage implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::MultisigAccountCreationMessage`;

    chain_id: number;
    account_address: string;
    sequence_number: u64_import;
    owners: string[];
    num_signatures_required: u64_import;

    constructor(chain_id: number, account_address: string, sequence_number: u64_import, owners: string[], num_signatures_required: u64_import) {
        this.chain_id = chain_id;
        this.account_address = account_address;
        this.sequence_number = sequence_number;
        this.owners = owners;
        this.num_signatures_required = num_signatures_required;
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
        return MultisigAccountCreationMessage.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return MultisigAccountCreationMessage.from_bcs_vector(args)
    }

    get_bcs() {
        return MultisigAccountCreationMessage.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::MultisigAccountCreationMessage`
    }

    from(arg: MultisigAccountCreationMessage) {
        this.chain_id = arg.chain_id;
        this.account_address = arg.account_address;
        this.sequence_number = arg.sequence_number;
        this.owners = arg.owners;
        this.num_signatures_required = arg.num_signatures_required;
    }

    static from_bcs(arg: {
        chain_id: number,
        account_address: string,
        sequence_number: u64_import,
        owners: string[],
        num_signatures_required: u64_import
    }): MultisigAccountCreationMessage {
        return new MultisigAccountCreationMessage(arg.chain_id, arg.account_address, arg.sequence_number, arg.owners, arg.num_signatures_required)
    }

    static from_bcs_vector(args: {
        chain_id: number,
        account_address: string,
        sequence_number: u64_import,
        owners: string[],
        num_signatures_required: u64_import
    } []): MultisigAccountCreationMessage[] {
        return args.map(function(arg) {
            return new MultisigAccountCreationMessage(arg.chain_id, arg.account_address, arg.sequence_number, arg.owners, arg.num_signatures_required)
        })
    }

    static get bcs() {
        return bcs_import.struct("MultisigAccountCreationMessage", {
            chain_id: bcs_import.u8(),
            account_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            sequence_number: bcs_import.u64(),
            owners: bcs_import.vector(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            })),
            num_signatures_required: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new MultisigAccountCreationMessage(val.chain_id, val.account_address, val.sequence_number, val.owners, val.num_signatures_required),
        });
    };
}

/* ============================== MultisigAccountCreationWithAuthKeyRevocationMessage =============================== */

export class MultisigAccountCreationWithAuthKeyRevocationMessage implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::MultisigAccountCreationWithAuthKeyRevocationMessage`;

    chain_id: number;
    account_address: string;
    sequence_number: u64_import;
    owners: string[];
    num_signatures_required: u64_import;

    constructor(chain_id: number, account_address: string, sequence_number: u64_import, owners: string[], num_signatures_required: u64_import) {
        this.chain_id = chain_id;
        this.account_address = account_address;
        this.sequence_number = sequence_number;
        this.owners = owners;
        this.num_signatures_required = num_signatures_required;
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
        return MultisigAccountCreationWithAuthKeyRevocationMessage.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return MultisigAccountCreationWithAuthKeyRevocationMessage.from_bcs_vector(args)
    }

    get_bcs() {
        return MultisigAccountCreationWithAuthKeyRevocationMessage.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::MultisigAccountCreationWithAuthKeyRevocationMessage`
    }

    from(arg: MultisigAccountCreationWithAuthKeyRevocationMessage) {
        this.chain_id = arg.chain_id;
        this.account_address = arg.account_address;
        this.sequence_number = arg.sequence_number;
        this.owners = arg.owners;
        this.num_signatures_required = arg.num_signatures_required;
    }

    static from_bcs(arg: {
        chain_id: number,
        account_address: string,
        sequence_number: u64_import,
        owners: string[],
        num_signatures_required: u64_import
    }): MultisigAccountCreationWithAuthKeyRevocationMessage {
        return new MultisigAccountCreationWithAuthKeyRevocationMessage(arg.chain_id, arg.account_address, arg.sequence_number, arg.owners, arg.num_signatures_required)
    }

    static from_bcs_vector(args: {
        chain_id: number,
        account_address: string,
        sequence_number: u64_import,
        owners: string[],
        num_signatures_required: u64_import
    } []): MultisigAccountCreationWithAuthKeyRevocationMessage[] {
        return args.map(function(arg) {
            return new MultisigAccountCreationWithAuthKeyRevocationMessage(arg.chain_id, arg.account_address, arg.sequence_number, arg.owners, arg.num_signatures_required)
        })
    }

    static get bcs() {
        return bcs_import.struct("MultisigAccountCreationWithAuthKeyRevocationMessage", {
            chain_id: bcs_import.u8(),
            account_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            sequence_number: bcs_import.u64(),
            owners: bcs_import.vector(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            })),
            num_signatures_required: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new MultisigAccountCreationWithAuthKeyRevocationMessage(val.chain_id, val.account_address, val.sequence_number, val.owners, val.num_signatures_required),
        });
    };
}

/* ============================== MultisigTransaction =============================== */

export class MultisigTransaction implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::MultisigTransaction`;

    payload: Option < number[] > ;
    payload_hash: Option < number[] > ;
    votes: SimpleMap < string,
    boolean > ;
    creator: string;
    creation_time_secs: u64_import;

    constructor(payload: Option < number[] > , payload_hash: Option < number[] > , votes: SimpleMap < string, boolean > , creator: string, creation_time_secs: u64_import) {
        this.payload = payload;
        this.payload_hash = payload_hash;
        this.votes = votes;
        this.creator = creator;
        this.creation_time_secs = creation_time_secs;
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
        return MultisigTransaction.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return MultisigTransaction.from_bcs_vector(args)
    }

    get_bcs() {
        return MultisigTransaction.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::MultisigTransaction`
    }

    from(arg: MultisigTransaction) {
        this.payload = arg.payload;
        this.payload_hash = arg.payload_hash;
        this.votes = arg.votes;
        this.creator = arg.creator;
        this.creation_time_secs = arg.creation_time_secs;
    }

    static from_bcs(arg: {
        payload: Option < number[] > ,
        payload_hash: Option < number[] > ,
        votes: SimpleMap < string,
        boolean > ,
        creator: string,
        creation_time_secs: u64_import
    }): MultisigTransaction {
        return new MultisigTransaction(arg.payload, arg.payload_hash, arg.votes, arg.creator, arg.creation_time_secs)
    }

    static from_bcs_vector(args: {
        payload: Option < number[] > ,
        payload_hash: Option < number[] > ,
        votes: SimpleMap < string,
        boolean > ,
        creator: string,
        creation_time_secs: u64_import
    } []): MultisigTransaction[] {
        return args.map(function(arg) {
            return new MultisigTransaction(arg.payload, arg.payload_hash, arg.votes, arg.creator, arg.creation_time_secs)
        })
    }

    static get bcs() {
        return bcs_import.struct("MultisigTransaction", {
            payload: Option.bcs(bcs_import.vector(bcs_import.u8())),
            payload_hash: Option.bcs(bcs_import.vector(bcs_import.u8())),
            votes: SimpleMap.bcs(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }), bcs_import.bool()),
            creator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            creation_time_secs: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new MultisigTransaction(val.payload, val.payload_hash, val.votes, val.creator, val.creation_time_secs),
        });
    };
}

/* ============================== RemoveOwners =============================== */

export class RemoveOwners implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RemoveOwners`;

    multisig_account: string;
    owners_removed: string[];

    constructor(multisig_account: string, owners_removed: string[]) {
        this.multisig_account = multisig_account;
        this.owners_removed = owners_removed;
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
        return RemoveOwners.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RemoveOwners.from_bcs_vector(args)
    }

    get_bcs() {
        return RemoveOwners.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RemoveOwners`
    }

    from(arg: RemoveOwners) {
        this.multisig_account = arg.multisig_account;
        this.owners_removed = arg.owners_removed;
    }

    static from_bcs(arg: {
        multisig_account: string,
        owners_removed: string[]
    }): RemoveOwners {
        return new RemoveOwners(arg.multisig_account, arg.owners_removed)
    }

    static from_bcs_vector(args: {
        multisig_account: string,
        owners_removed: string[]
    } []): RemoveOwners[] {
        return args.map(function(arg) {
            return new RemoveOwners(arg.multisig_account, arg.owners_removed)
        })
    }

    static get bcs() {
        return bcs_import.struct("RemoveOwners", {
            multisig_account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            owners_removed: bcs_import.vector(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            })),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RemoveOwners(val.multisig_account, val.owners_removed),
        });
    };
}

/* ============================== RemoveOwnersEvent =============================== */

export class RemoveOwnersEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RemoveOwnersEvent`;

    owners_removed: string[];

    constructor(owners_removed: string[]) {
        this.owners_removed = owners_removed;
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
        return RemoveOwnersEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RemoveOwnersEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return RemoveOwnersEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RemoveOwnersEvent`
    }

    from(arg: RemoveOwnersEvent) {
        this.owners_removed = arg.owners_removed;
    }

    static from_bcs(arg: {
        owners_removed: string[]
    }): RemoveOwnersEvent {
        return new RemoveOwnersEvent(arg.owners_removed)
    }

    static from_bcs_vector(args: {
        owners_removed: string[]
    } []): RemoveOwnersEvent[] {
        return args.map(function(arg) {
            return new RemoveOwnersEvent(arg.owners_removed)
        })
    }

    static get bcs() {
        return bcs_import.struct("RemoveOwnersEvent", {
            owners_removed: bcs_import.vector(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            })),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RemoveOwnersEvent(val.owners_removed),
        });
    };
}

/* ============================== TransactionExecutionFailed =============================== */

export class TransactionExecutionFailed implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TransactionExecutionFailed`;

    multisig_account: string;
    executor: string;
    sequence_number: u64_import;
    transaction_payload: number[];
    num_approvals: u64_import;
    execution_error: ExecutionError;

    constructor(multisig_account: string, executor: string, sequence_number: u64_import, transaction_payload: number[], num_approvals: u64_import, execution_error: ExecutionError) {
        this.multisig_account = multisig_account;
        this.executor = executor;
        this.sequence_number = sequence_number;
        this.transaction_payload = transaction_payload;
        this.num_approvals = num_approvals;
        this.execution_error = execution_error;
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
        return TransactionExecutionFailed.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TransactionExecutionFailed.from_bcs_vector(args)
    }

    get_bcs() {
        return TransactionExecutionFailed.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TransactionExecutionFailed`
    }

    from(arg: TransactionExecutionFailed) {
        this.multisig_account = arg.multisig_account;
        this.executor = arg.executor;
        this.sequence_number = arg.sequence_number;
        this.transaction_payload = arg.transaction_payload;
        this.num_approvals = arg.num_approvals;
        this.execution_error = arg.execution_error;
    }

    static from_bcs(arg: {
        multisig_account: string,
        executor: string,
        sequence_number: u64_import,
        transaction_payload: number[],
        num_approvals: u64_import,
        execution_error: ExecutionError
    }): TransactionExecutionFailed {
        return new TransactionExecutionFailed(arg.multisig_account, arg.executor, arg.sequence_number, arg.transaction_payload, arg.num_approvals, arg.execution_error)
    }

    static from_bcs_vector(args: {
        multisig_account: string,
        executor: string,
        sequence_number: u64_import,
        transaction_payload: number[],
        num_approvals: u64_import,
        execution_error: ExecutionError
    } []): TransactionExecutionFailed[] {
        return args.map(function(arg) {
            return new TransactionExecutionFailed(arg.multisig_account, arg.executor, arg.sequence_number, arg.transaction_payload, arg.num_approvals, arg.execution_error)
        })
    }

    static get bcs() {
        return bcs_import.struct("TransactionExecutionFailed", {
            multisig_account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            executor: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            sequence_number: bcs_import.u64(),
            transaction_payload: bcs_import.vector(bcs_import.u8()),
            num_approvals: bcs_import.u64(),
            execution_error: ExecutionError.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TransactionExecutionFailed(val.multisig_account, val.executor, val.sequence_number, val.transaction_payload, val.num_approvals, val.execution_error),
        });
    };
}

/* ============================== TransactionExecutionFailedEvent =============================== */

export class TransactionExecutionFailedEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TransactionExecutionFailedEvent`;

    executor: string;
    sequence_number: u64_import;
    transaction_payload: number[];
    num_approvals: u64_import;
    execution_error: ExecutionError;

    constructor(executor: string, sequence_number: u64_import, transaction_payload: number[], num_approvals: u64_import, execution_error: ExecutionError) {
        this.executor = executor;
        this.sequence_number = sequence_number;
        this.transaction_payload = transaction_payload;
        this.num_approvals = num_approvals;
        this.execution_error = execution_error;
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
        return TransactionExecutionFailedEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TransactionExecutionFailedEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return TransactionExecutionFailedEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TransactionExecutionFailedEvent`
    }

    from(arg: TransactionExecutionFailedEvent) {
        this.executor = arg.executor;
        this.sequence_number = arg.sequence_number;
        this.transaction_payload = arg.transaction_payload;
        this.num_approvals = arg.num_approvals;
        this.execution_error = arg.execution_error;
    }

    static from_bcs(arg: {
        executor: string,
        sequence_number: u64_import,
        transaction_payload: number[],
        num_approvals: u64_import,
        execution_error: ExecutionError
    }): TransactionExecutionFailedEvent {
        return new TransactionExecutionFailedEvent(arg.executor, arg.sequence_number, arg.transaction_payload, arg.num_approvals, arg.execution_error)
    }

    static from_bcs_vector(args: {
        executor: string,
        sequence_number: u64_import,
        transaction_payload: number[],
        num_approvals: u64_import,
        execution_error: ExecutionError
    } []): TransactionExecutionFailedEvent[] {
        return args.map(function(arg) {
            return new TransactionExecutionFailedEvent(arg.executor, arg.sequence_number, arg.transaction_payload, arg.num_approvals, arg.execution_error)
        })
    }

    static get bcs() {
        return bcs_import.struct("TransactionExecutionFailedEvent", {
            executor: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            sequence_number: bcs_import.u64(),
            transaction_payload: bcs_import.vector(bcs_import.u8()),
            num_approvals: bcs_import.u64(),
            execution_error: ExecutionError.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TransactionExecutionFailedEvent(val.executor, val.sequence_number, val.transaction_payload, val.num_approvals, val.execution_error),
        });
    };
}

/* ============================== TransactionExecutionSucceeded =============================== */

export class TransactionExecutionSucceeded implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TransactionExecutionSucceeded`;

    multisig_account: string;
    executor: string;
    sequence_number: u64_import;
    transaction_payload: number[];
    num_approvals: u64_import;

    constructor(multisig_account: string, executor: string, sequence_number: u64_import, transaction_payload: number[], num_approvals: u64_import) {
        this.multisig_account = multisig_account;
        this.executor = executor;
        this.sequence_number = sequence_number;
        this.transaction_payload = transaction_payload;
        this.num_approvals = num_approvals;
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
        return TransactionExecutionSucceeded.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TransactionExecutionSucceeded.from_bcs_vector(args)
    }

    get_bcs() {
        return TransactionExecutionSucceeded.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TransactionExecutionSucceeded`
    }

    from(arg: TransactionExecutionSucceeded) {
        this.multisig_account = arg.multisig_account;
        this.executor = arg.executor;
        this.sequence_number = arg.sequence_number;
        this.transaction_payload = arg.transaction_payload;
        this.num_approvals = arg.num_approvals;
    }

    static from_bcs(arg: {
        multisig_account: string,
        executor: string,
        sequence_number: u64_import,
        transaction_payload: number[],
        num_approvals: u64_import
    }): TransactionExecutionSucceeded {
        return new TransactionExecutionSucceeded(arg.multisig_account, arg.executor, arg.sequence_number, arg.transaction_payload, arg.num_approvals)
    }

    static from_bcs_vector(args: {
        multisig_account: string,
        executor: string,
        sequence_number: u64_import,
        transaction_payload: number[],
        num_approvals: u64_import
    } []): TransactionExecutionSucceeded[] {
        return args.map(function(arg) {
            return new TransactionExecutionSucceeded(arg.multisig_account, arg.executor, arg.sequence_number, arg.transaction_payload, arg.num_approvals)
        })
    }

    static get bcs() {
        return bcs_import.struct("TransactionExecutionSucceeded", {
            multisig_account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            executor: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            sequence_number: bcs_import.u64(),
            transaction_payload: bcs_import.vector(bcs_import.u8()),
            num_approvals: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TransactionExecutionSucceeded(val.multisig_account, val.executor, val.sequence_number, val.transaction_payload, val.num_approvals),
        });
    };
}

/* ============================== TransactionExecutionSucceededEvent =============================== */

export class TransactionExecutionSucceededEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TransactionExecutionSucceededEvent`;

    executor: string;
    sequence_number: u64_import;
    transaction_payload: number[];
    num_approvals: u64_import;

    constructor(executor: string, sequence_number: u64_import, transaction_payload: number[], num_approvals: u64_import) {
        this.executor = executor;
        this.sequence_number = sequence_number;
        this.transaction_payload = transaction_payload;
        this.num_approvals = num_approvals;
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
        return TransactionExecutionSucceededEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TransactionExecutionSucceededEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return TransactionExecutionSucceededEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TransactionExecutionSucceededEvent`
    }

    from(arg: TransactionExecutionSucceededEvent) {
        this.executor = arg.executor;
        this.sequence_number = arg.sequence_number;
        this.transaction_payload = arg.transaction_payload;
        this.num_approvals = arg.num_approvals;
    }

    static from_bcs(arg: {
        executor: string,
        sequence_number: u64_import,
        transaction_payload: number[],
        num_approvals: u64_import
    }): TransactionExecutionSucceededEvent {
        return new TransactionExecutionSucceededEvent(arg.executor, arg.sequence_number, arg.transaction_payload, arg.num_approvals)
    }

    static from_bcs_vector(args: {
        executor: string,
        sequence_number: u64_import,
        transaction_payload: number[],
        num_approvals: u64_import
    } []): TransactionExecutionSucceededEvent[] {
        return args.map(function(arg) {
            return new TransactionExecutionSucceededEvent(arg.executor, arg.sequence_number, arg.transaction_payload, arg.num_approvals)
        })
    }

    static get bcs() {
        return bcs_import.struct("TransactionExecutionSucceededEvent", {
            executor: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            sequence_number: bcs_import.u64(),
            transaction_payload: bcs_import.vector(bcs_import.u8()),
            num_approvals: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TransactionExecutionSucceededEvent(val.executor, val.sequence_number, val.transaction_payload, val.num_approvals),
        });
    };
}

/* ============================== UpdateSignaturesRequired =============================== */

export class UpdateSignaturesRequired implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpdateSignaturesRequired`;

    multisig_account: string;
    old_num_signatures_required: u64_import;
    new_num_signatures_required: u64_import;

    constructor(multisig_account: string, old_num_signatures_required: u64_import, new_num_signatures_required: u64_import) {
        this.multisig_account = multisig_account;
        this.old_num_signatures_required = old_num_signatures_required;
        this.new_num_signatures_required = new_num_signatures_required;
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
        return UpdateSignaturesRequired.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UpdateSignaturesRequired.from_bcs_vector(args)
    }

    get_bcs() {
        return UpdateSignaturesRequired.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UpdateSignaturesRequired`
    }

    from(arg: UpdateSignaturesRequired) {
        this.multisig_account = arg.multisig_account;
        this.old_num_signatures_required = arg.old_num_signatures_required;
        this.new_num_signatures_required = arg.new_num_signatures_required;
    }

    static from_bcs(arg: {
        multisig_account: string,
        old_num_signatures_required: u64_import,
        new_num_signatures_required: u64_import
    }): UpdateSignaturesRequired {
        return new UpdateSignaturesRequired(arg.multisig_account, arg.old_num_signatures_required, arg.new_num_signatures_required)
    }

    static from_bcs_vector(args: {
        multisig_account: string,
        old_num_signatures_required: u64_import,
        new_num_signatures_required: u64_import
    } []): UpdateSignaturesRequired[] {
        return args.map(function(arg) {
            return new UpdateSignaturesRequired(arg.multisig_account, arg.old_num_signatures_required, arg.new_num_signatures_required)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpdateSignaturesRequired", {
            multisig_account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            old_num_signatures_required: bcs_import.u64(),
            new_num_signatures_required: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UpdateSignaturesRequired(val.multisig_account, val.old_num_signatures_required, val.new_num_signatures_required),
        });
    };
}

/* ============================== UpdateSignaturesRequiredEvent =============================== */

export class UpdateSignaturesRequiredEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpdateSignaturesRequiredEvent`;

    old_num_signatures_required: u64_import;
    new_num_signatures_required: u64_import;

    constructor(old_num_signatures_required: u64_import, new_num_signatures_required: u64_import) {
        this.old_num_signatures_required = old_num_signatures_required;
        this.new_num_signatures_required = new_num_signatures_required;
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
        return UpdateSignaturesRequiredEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UpdateSignaturesRequiredEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return UpdateSignaturesRequiredEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UpdateSignaturesRequiredEvent`
    }

    from(arg: UpdateSignaturesRequiredEvent) {
        this.old_num_signatures_required = arg.old_num_signatures_required;
        this.new_num_signatures_required = arg.new_num_signatures_required;
    }

    static from_bcs(arg: {
        old_num_signatures_required: u64_import,
        new_num_signatures_required: u64_import
    }): UpdateSignaturesRequiredEvent {
        return new UpdateSignaturesRequiredEvent(arg.old_num_signatures_required, arg.new_num_signatures_required)
    }

    static from_bcs_vector(args: {
        old_num_signatures_required: u64_import,
        new_num_signatures_required: u64_import
    } []): UpdateSignaturesRequiredEvent[] {
        return args.map(function(arg) {
            return new UpdateSignaturesRequiredEvent(arg.old_num_signatures_required, arg.new_num_signatures_required)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpdateSignaturesRequiredEvent", {
            old_num_signatures_required: bcs_import.u64(),
            new_num_signatures_required: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UpdateSignaturesRequiredEvent(val.old_num_signatures_required, val.new_num_signatures_required),
        });
    };
}

function create(arg0: string, arg1: u64_import, arg2: string[], arg3: number[][]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.string()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create", [], args);

}

function is_owner(arg0: string, arg1: string): [boolean] {
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

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_owner", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function metadata(arg0: string): [SimpleMap < string, number[] > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "metadata", [], args);

    return [
        SimpleMap.from_bcs(SimpleMap.bcs(bcs_import.string(), bcs_import.vector(bcs_import.u8())).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function vote(arg0: string, arg1: u64_import, arg2: string): [boolean, boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "vote", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0])),
        bcs_import.bool().parse(new Uint8Array(r1.Raw[0]))
    ];
}

function add_owner(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_owner", [], args);

}

function add_owners(arg0: string, arg1: string[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_owners", [], args);

}

function add_owners_and_update_signatures_required(arg0: string, arg1: string[], arg2: u64_import) {
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
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_owners_and_update_signatures_required", [], args);

}

function approve_transaction(arg0: string, arg1: string, arg2: u64_import) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "approve_transaction", [], args);

}

function available_transaction_queue_capacity(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "available_transaction_queue_capacity", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function can_be_executed(arg0: string, arg1: u64_import): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "can_be_executed", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function can_be_rejected(arg0: string, arg1: u64_import): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "can_be_rejected", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function can_execute(arg0: string, arg1: string, arg2: u64_import): [boolean] {
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

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "can_execute", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function can_reject(arg0: string, arg1: string, arg2: u64_import): [boolean] {
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

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "can_reject", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create_multisig_account(arg0: string): [string, SignerCapability] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_multisig_account", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0])),
        SignerCapability.from_bcs(SignerCapability.bcs.parse(new Uint8Array(r1.Raw[0])))
    ];
}

function create_multisig_account_seed(arg0: number[]): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_multisig_account_seed", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create_transaction(arg0: string, arg1: string, arg2: number[]) {
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
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_transaction", [], args);

}

function create_transaction_with_hash(arg0: string, arg1: string, arg2: number[]) {
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
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_transaction_with_hash", [], args);

}

function create_with_existing_account(arg0: string, arg1: string[], arg2: u64_import, arg3: number, arg4: number[], arg5: number[], arg6: string[], arg7: number[][]) {
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
        wasm.new_bytes(bcs_import.u8().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg5).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.string()).serialize(arg6).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg7).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_with_existing_account", [], args);

}

function create_with_existing_account_and_revoke_auth_key(arg0: string, arg1: string[], arg2: u64_import, arg3: number, arg4: number[], arg5: number[], arg6: string[], arg7: number[][]) {
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
        wasm.new_bytes(bcs_import.u8().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg5).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.string()).serialize(arg6).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg7).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_with_existing_account_and_revoke_auth_key", [], args);

}

function create_with_owners(arg0: string, arg1: string[], arg2: u64_import, arg3: string[], arg4: number[][]) {
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
        wasm.new_bytes(bcs_import.vector(bcs_import.string()).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg4).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_with_owners", [], args);

}

function create_with_owners_internal(arg0: string, arg1: string[], arg2: u64_import, arg3: Option < SignerCapability > , arg4: string[], arg5: number[][]) {
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
        wasm.new_bytes(Option.bcs(SignerCapability.bcs).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.string()).serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg5).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_with_owners_internal", [], args);

}

function create_with_owners_then_remove_bootstrapper(arg0: string, arg1: string[], arg2: u64_import, arg3: string[], arg4: number[][]) {
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
        wasm.new_bytes(bcs_import.vector(bcs_import.string()).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg4).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_with_owners_then_remove_bootstrapper", [], args);

}

function execute_rejected_transaction(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "execute_rejected_transaction", [], args);

}

function execute_rejected_transactions(arg0: string, arg1: string, arg2: u64_import) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "execute_rejected_transactions", [], args);

}

function failed_transaction_execution_cleanup(arg0: string, arg1: string, arg2: number[], arg3: ExecutionError) {
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
        wasm.new_bytes(ExecutionError.bcs.serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "failed_transaction_execution_cleanup", [], args);

}

function get_next_multisig_account_address(arg0: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_next_multisig_account_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_next_transaction_payload(arg0: string, arg1: number[]): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_next_transaction_payload", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_pending_transactions(arg0: string): [MultisigTransaction[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_pending_transactions", [], args);

    return [
        MultisigTransaction.from_bcs_vector(bcs_import.vector(MultisigTransaction.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function get_transaction(arg0: string, arg1: u64_import): [MultisigTransaction] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_transaction", [], args);

    return [
        MultisigTransaction.from_bcs(MultisigTransaction.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function last_resolved_sequence_number(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "last_resolved_sequence_number", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function next_sequence_number(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_sequence_number", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function num_signatures_required(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "num_signatures_required", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function owners(arg0: string): [string[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "owners", [], args);

    return [
        bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function reject_transaction(arg0: string, arg1: string, arg2: u64_import) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "reject_transaction", [], args);

}

function remove_executed_transaction(arg0: MultisigAccount): [u64_import, u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(MultisigAccount.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_executed_transaction", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r1.Raw[0]))
    ];
}

function remove_owner(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_owner", [], args);

}

function remove_owners(arg0: string, arg1: string[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_owners", [], args);

}

function successful_transaction_execution_cleanup(arg0: string, arg1: string, arg2: number[]) {
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
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "successful_transaction_execution_cleanup", [], args);

}

function swap_owner(arg0: string, arg1: string, arg2: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap_owner", [], args);

}

function swap_owners(arg0: string, arg1: string[], arg2: string[]) {
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
        wasm.new_bytes(bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap_owners", [], args);

}

function swap_owners_and_update_signatures_required(arg0: string, arg1: string[], arg2: string[], arg3: u64_import) {
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
        wasm.new_bytes(bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap_owners_and_update_signatures_required", [], args);

}

function update_metadata(arg0: string, arg1: string[], arg2: number[][]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.string()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_metadata", [], args);

}

function update_metadata_internal(arg0: string, arg1: string[], arg2: number[][], arg3: boolean) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.string()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_metadata_internal", [], args);

}

function update_owner_schema(arg0: string, arg1: string[], arg2: string[], arg3: Option < u64_import > ) {
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
        wasm.new_bytes(bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(Option.bcs(bcs_import.u64()).serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_owner_schema", [], args);

}

function update_signatures_required(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_signatures_required", [], args);

}

function validate_multisig_transaction(arg0: string, arg1: string, arg2: number[]) {
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
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "validate_multisig_transaction", [], args);

}

function validate_owners(arg0: string[], arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "validate_owners", [], args);

}

function vote_transaction(arg0: string, arg1: string, arg2: u64_import, arg3: boolean) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "vote_transaction", [], args);

}

function vote_transactions(arg0: string, arg1: string, arg2: u64_import, arg3: u64_import, arg4: boolean) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "vote_transactions", [], args);

}

function vote_transanction(arg0: string, arg1: string, arg2: u64_import, arg3: boolean) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "vote_transanction", [], args);

}

export const multisig_account = {
    Vote,
    VoteEvent,
    AddOwners,
    AddOwnersEvent,
    CreateTransaction,
    CreateTransactionEvent,
    ExecuteRejectedTransaction,
    ExecuteRejectedTransactionEvent,
    ExecutionError,
    MetadataUpdated,
    MetadataUpdatedEvent,
    MultisigAccount,
    MultisigAccountCreationMessage,
    MultisigAccountCreationWithAuthKeyRevocationMessage,
    MultisigTransaction,
    RemoveOwners,
    RemoveOwnersEvent,
    TransactionExecutionFailed,
    TransactionExecutionFailedEvent,
    TransactionExecutionSucceeded,
    TransactionExecutionSucceededEvent,
    UpdateSignaturesRequired,
    UpdateSignaturesRequiredEvent,
    create,
    is_owner,
    metadata,
    vote,
    add_owner,
    add_owners,
    add_owners_and_update_signatures_required,
    approve_transaction,
    available_transaction_queue_capacity,
    can_be_executed,
    can_be_rejected,
    can_execute,
    can_reject,
    create_multisig_account,
    create_multisig_account_seed,
    create_transaction,
    create_transaction_with_hash,
    create_with_existing_account,
    create_with_existing_account_and_revoke_auth_key,
    create_with_owners,
    create_with_owners_internal,
    create_with_owners_then_remove_bootstrapper,
    execute_rejected_transaction,
    execute_rejected_transactions,
    failed_transaction_execution_cleanup,
    get_next_multisig_account_address,
    get_next_transaction_payload,
    get_pending_transactions,
    get_transaction,
    last_resolved_sequence_number,
    next_sequence_number,
    num_signatures_required,
    owners,
    reject_transaction,
    remove_executed_transaction,
    remove_owner,
    remove_owners,
    successful_transaction_execution_cleanup,
    swap_owner,
    swap_owners,
    swap_owners_and_update_signatures_required,
    update_metadata,
    update_metadata_internal,
    update_owner_schema,
    update_signatures_required,
    validate_multisig_transaction,
    validate_owners,
    vote_transaction,
    vote_transactions,
    vote_transanction
}