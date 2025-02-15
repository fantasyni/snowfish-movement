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
    Coin
} from "./coin";
import {
    EventHandle
} from "./event";
import {
    FixedPoint32
} from "./fixed_point32";
import {
    Pool
} from "./pool_u64";
import {
    SimpleMap
} from "./simple_map";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "vesting";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Distribute =============================== */

export class Distribute implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Distribute`;

    admin: string;
    vesting_contract_address: string;
    amount: u64_import;

    constructor(admin: string, vesting_contract_address: string, amount: u64_import) {
        this.admin = admin;
        this.vesting_contract_address = vesting_contract_address;
        this.amount = amount;
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
        return Distribute.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Distribute.from_bcs_vector(args)
    }

    get_bcs() {
        return Distribute.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Distribute`
    }

    from(arg: Distribute) {
        this.admin = arg.admin;
        this.vesting_contract_address = arg.vesting_contract_address;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        admin: string,
        vesting_contract_address: string,
        amount: u64_import
    }): Distribute {
        return new Distribute(arg.admin, arg.vesting_contract_address, arg.amount)
    }

    static from_bcs_vector(args: {
        admin: string,
        vesting_contract_address: string,
        amount: u64_import
    } []): Distribute[] {
        return args.map(function(arg) {
            return new Distribute(arg.admin, arg.vesting_contract_address, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("Distribute", {
            admin: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Distribute(val.admin, val.vesting_contract_address, val.amount),
        });
    };
}

/* ============================== DistributeEvent =============================== */

export class DistributeEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DistributeEvent`;

    admin: string;
    vesting_contract_address: string;
    amount: u64_import;

    constructor(admin: string, vesting_contract_address: string, amount: u64_import) {
        this.admin = admin;
        this.vesting_contract_address = vesting_contract_address;
        this.amount = amount;
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
        return DistributeEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DistributeEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return DistributeEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DistributeEvent`
    }

    from(arg: DistributeEvent) {
        this.admin = arg.admin;
        this.vesting_contract_address = arg.vesting_contract_address;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        admin: string,
        vesting_contract_address: string,
        amount: u64_import
    }): DistributeEvent {
        return new DistributeEvent(arg.admin, arg.vesting_contract_address, arg.amount)
    }

    static from_bcs_vector(args: {
        admin: string,
        vesting_contract_address: string,
        amount: u64_import
    } []): DistributeEvent[] {
        return args.map(function(arg) {
            return new DistributeEvent(arg.admin, arg.vesting_contract_address, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("DistributeEvent", {
            admin: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DistributeEvent(val.admin, val.vesting_contract_address, val.amount),
        });
    };
}

/* ============================== ResetLockup =============================== */

export class ResetLockup implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ResetLockup`;

    admin: string;
    vesting_contract_address: string;
    staking_pool_address: string;
    new_lockup_expiration_secs: u64_import;

    constructor(admin: string, vesting_contract_address: string, staking_pool_address: string, new_lockup_expiration_secs: u64_import) {
        this.admin = admin;
        this.vesting_contract_address = vesting_contract_address;
        this.staking_pool_address = staking_pool_address;
        this.new_lockup_expiration_secs = new_lockup_expiration_secs;
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
        return ResetLockup.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ResetLockup.from_bcs_vector(args)
    }

    get_bcs() {
        return ResetLockup.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ResetLockup`
    }

    from(arg: ResetLockup) {
        this.admin = arg.admin;
        this.vesting_contract_address = arg.vesting_contract_address;
        this.staking_pool_address = arg.staking_pool_address;
        this.new_lockup_expiration_secs = arg.new_lockup_expiration_secs;
    }

    static from_bcs(arg: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        new_lockup_expiration_secs: u64_import
    }): ResetLockup {
        return new ResetLockup(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.new_lockup_expiration_secs)
    }

    static from_bcs_vector(args: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        new_lockup_expiration_secs: u64_import
    } []): ResetLockup[] {
        return args.map(function(arg) {
            return new ResetLockup(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.new_lockup_expiration_secs)
        })
    }

    static get bcs() {
        return bcs_import.struct("ResetLockup", {
            admin: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            staking_pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            new_lockup_expiration_secs: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ResetLockup(val.admin, val.vesting_contract_address, val.staking_pool_address, val.new_lockup_expiration_secs),
        });
    };
}

/* ============================== ResetLockupEvent =============================== */

export class ResetLockupEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ResetLockupEvent`;

    admin: string;
    vesting_contract_address: string;
    staking_pool_address: string;
    new_lockup_expiration_secs: u64_import;

    constructor(admin: string, vesting_contract_address: string, staking_pool_address: string, new_lockup_expiration_secs: u64_import) {
        this.admin = admin;
        this.vesting_contract_address = vesting_contract_address;
        this.staking_pool_address = staking_pool_address;
        this.new_lockup_expiration_secs = new_lockup_expiration_secs;
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
        return ResetLockupEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ResetLockupEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return ResetLockupEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ResetLockupEvent`
    }

    from(arg: ResetLockupEvent) {
        this.admin = arg.admin;
        this.vesting_contract_address = arg.vesting_contract_address;
        this.staking_pool_address = arg.staking_pool_address;
        this.new_lockup_expiration_secs = arg.new_lockup_expiration_secs;
    }

    static from_bcs(arg: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        new_lockup_expiration_secs: u64_import
    }): ResetLockupEvent {
        return new ResetLockupEvent(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.new_lockup_expiration_secs)
    }

    static from_bcs_vector(args: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        new_lockup_expiration_secs: u64_import
    } []): ResetLockupEvent[] {
        return args.map(function(arg) {
            return new ResetLockupEvent(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.new_lockup_expiration_secs)
        })
    }

    static get bcs() {
        return bcs_import.struct("ResetLockupEvent", {
            admin: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            staking_pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            new_lockup_expiration_secs: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ResetLockupEvent(val.admin, val.vesting_contract_address, val.staking_pool_address, val.new_lockup_expiration_secs),
        });
    };
}

/* ============================== UpdateVoter =============================== */

export class UpdateVoter implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpdateVoter`;

    admin: string;
    vesting_contract_address: string;
    staking_pool_address: string;
    old_voter: string;
    new_voter: string;

    constructor(admin: string, vesting_contract_address: string, staking_pool_address: string, old_voter: string, new_voter: string) {
        this.admin = admin;
        this.vesting_contract_address = vesting_contract_address;
        this.staking_pool_address = staking_pool_address;
        this.old_voter = old_voter;
        this.new_voter = new_voter;
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
        return UpdateVoter.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UpdateVoter.from_bcs_vector(args)
    }

    get_bcs() {
        return UpdateVoter.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UpdateVoter`
    }

    from(arg: UpdateVoter) {
        this.admin = arg.admin;
        this.vesting_contract_address = arg.vesting_contract_address;
        this.staking_pool_address = arg.staking_pool_address;
        this.old_voter = arg.old_voter;
        this.new_voter = arg.new_voter;
    }

    static from_bcs(arg: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        old_voter: string,
        new_voter: string
    }): UpdateVoter {
        return new UpdateVoter(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.old_voter, arg.new_voter)
    }

    static from_bcs_vector(args: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        old_voter: string,
        new_voter: string
    } []): UpdateVoter[] {
        return args.map(function(arg) {
            return new UpdateVoter(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.old_voter, arg.new_voter)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpdateVoter", {
            admin: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            staking_pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            old_voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            new_voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UpdateVoter(val.admin, val.vesting_contract_address, val.staking_pool_address, val.old_voter, val.new_voter),
        });
    };
}

/* ============================== UpdateVoterEvent =============================== */

export class UpdateVoterEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpdateVoterEvent`;

    admin: string;
    vesting_contract_address: string;
    staking_pool_address: string;
    old_voter: string;
    new_voter: string;

    constructor(admin: string, vesting_contract_address: string, staking_pool_address: string, old_voter: string, new_voter: string) {
        this.admin = admin;
        this.vesting_contract_address = vesting_contract_address;
        this.staking_pool_address = staking_pool_address;
        this.old_voter = old_voter;
        this.new_voter = new_voter;
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
        return UpdateVoterEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UpdateVoterEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return UpdateVoterEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UpdateVoterEvent`
    }

    from(arg: UpdateVoterEvent) {
        this.admin = arg.admin;
        this.vesting_contract_address = arg.vesting_contract_address;
        this.staking_pool_address = arg.staking_pool_address;
        this.old_voter = arg.old_voter;
        this.new_voter = arg.new_voter;
    }

    static from_bcs(arg: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        old_voter: string,
        new_voter: string
    }): UpdateVoterEvent {
        return new UpdateVoterEvent(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.old_voter, arg.new_voter)
    }

    static from_bcs_vector(args: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        old_voter: string,
        new_voter: string
    } []): UpdateVoterEvent[] {
        return args.map(function(arg) {
            return new UpdateVoterEvent(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.old_voter, arg.new_voter)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpdateVoterEvent", {
            admin: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            staking_pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            old_voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            new_voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UpdateVoterEvent(val.admin, val.vesting_contract_address, val.staking_pool_address, val.old_voter, val.new_voter),
        });
    };
}

/* ============================== AdminStore =============================== */

export class AdminStore implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AdminStore`;

    vesting_contracts: string[];
    nonce: u64_import;
    create_events: EventHandle;

    constructor(vesting_contracts ? : string[], nonce ? : u64_import, create_events ? : EventHandle) {
        this.vesting_contracts = vesting_contracts;
        this.nonce = nonce;
        this.create_events = create_events;
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
        return AdminStore.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AdminStore.from_bcs_vector(args)
    }

    get_bcs() {
        return AdminStore.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AdminStore`
    }

    from(arg: AdminStore) {
        this.vesting_contracts = arg.vesting_contracts;
        this.nonce = arg.nonce;
        this.create_events = arg.create_events;
    }

    static from_bcs(arg: {
        vesting_contracts: string[],
        nonce: u64_import,
        create_events: EventHandle
    }): AdminStore {
        return new AdminStore(arg.vesting_contracts, arg.nonce, arg.create_events)
    }

    static from_bcs_vector(args: {
        vesting_contracts: string[],
        nonce: u64_import,
        create_events: EventHandle
    } []): AdminStore[] {
        return args.map(function(arg) {
            return new AdminStore(arg.vesting_contracts, arg.nonce, arg.create_events)
        })
    }

    static get bcs() {
        return bcs_import.struct("AdminStore", {
            vesting_contracts: bcs_import.vector(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            })),
            nonce: bcs_import.u64(),
            create_events: EventHandle.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AdminStore(val.vesting_contracts, val.nonce, val.create_events),
        });
    };
}

/* ============================== AdminWithdraw =============================== */

export class AdminWithdraw implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AdminWithdraw`;

    admin: string;
    vesting_contract_address: string;
    amount: u64_import;

    constructor(admin: string, vesting_contract_address: string, amount: u64_import) {
        this.admin = admin;
        this.vesting_contract_address = vesting_contract_address;
        this.amount = amount;
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
        return AdminWithdraw.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AdminWithdraw.from_bcs_vector(args)
    }

    get_bcs() {
        return AdminWithdraw.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AdminWithdraw`
    }

    from(arg: AdminWithdraw) {
        this.admin = arg.admin;
        this.vesting_contract_address = arg.vesting_contract_address;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        admin: string,
        vesting_contract_address: string,
        amount: u64_import
    }): AdminWithdraw {
        return new AdminWithdraw(arg.admin, arg.vesting_contract_address, arg.amount)
    }

    static from_bcs_vector(args: {
        admin: string,
        vesting_contract_address: string,
        amount: u64_import
    } []): AdminWithdraw[] {
        return args.map(function(arg) {
            return new AdminWithdraw(arg.admin, arg.vesting_contract_address, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("AdminWithdraw", {
            admin: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AdminWithdraw(val.admin, val.vesting_contract_address, val.amount),
        });
    };
}

/* ============================== AdminWithdrawEvent =============================== */

export class AdminWithdrawEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AdminWithdrawEvent`;

    admin: string;
    vesting_contract_address: string;
    amount: u64_import;

    constructor(admin: string, vesting_contract_address: string, amount: u64_import) {
        this.admin = admin;
        this.vesting_contract_address = vesting_contract_address;
        this.amount = amount;
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
        return AdminWithdrawEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AdminWithdrawEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return AdminWithdrawEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AdminWithdrawEvent`
    }

    from(arg: AdminWithdrawEvent) {
        this.admin = arg.admin;
        this.vesting_contract_address = arg.vesting_contract_address;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        admin: string,
        vesting_contract_address: string,
        amount: u64_import
    }): AdminWithdrawEvent {
        return new AdminWithdrawEvent(arg.admin, arg.vesting_contract_address, arg.amount)
    }

    static from_bcs_vector(args: {
        admin: string,
        vesting_contract_address: string,
        amount: u64_import
    } []): AdminWithdrawEvent[] {
        return args.map(function(arg) {
            return new AdminWithdrawEvent(arg.admin, arg.vesting_contract_address, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("AdminWithdrawEvent", {
            admin: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AdminWithdrawEvent(val.admin, val.vesting_contract_address, val.amount),
        });
    };
}

/* ============================== CreateVestingContract =============================== */

export class CreateVestingContract implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CreateVestingContract`;

    operator: string;
    voter: string;
    grant_amount: u64_import;
    withdrawal_address: string;
    vesting_contract_address: string;
    staking_pool_address: string;
    commission_percentage: u64_import;

    constructor(operator: string, voter: string, grant_amount: u64_import, withdrawal_address: string, vesting_contract_address: string, staking_pool_address: string, commission_percentage: u64_import) {
        this.operator = operator;
        this.voter = voter;
        this.grant_amount = grant_amount;
        this.withdrawal_address = withdrawal_address;
        this.vesting_contract_address = vesting_contract_address;
        this.staking_pool_address = staking_pool_address;
        this.commission_percentage = commission_percentage;
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
        return CreateVestingContract.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CreateVestingContract.from_bcs_vector(args)
    }

    get_bcs() {
        return CreateVestingContract.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CreateVestingContract`
    }

    from(arg: CreateVestingContract) {
        this.operator = arg.operator;
        this.voter = arg.voter;
        this.grant_amount = arg.grant_amount;
        this.withdrawal_address = arg.withdrawal_address;
        this.vesting_contract_address = arg.vesting_contract_address;
        this.staking_pool_address = arg.staking_pool_address;
        this.commission_percentage = arg.commission_percentage;
    }

    static from_bcs(arg: {
        operator: string,
        voter: string,
        grant_amount: u64_import,
        withdrawal_address: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        commission_percentage: u64_import
    }): CreateVestingContract {
        return new CreateVestingContract(arg.operator, arg.voter, arg.grant_amount, arg.withdrawal_address, arg.vesting_contract_address, arg.staking_pool_address, arg.commission_percentage)
    }

    static from_bcs_vector(args: {
        operator: string,
        voter: string,
        grant_amount: u64_import,
        withdrawal_address: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        commission_percentage: u64_import
    } []): CreateVestingContract[] {
        return args.map(function(arg) {
            return new CreateVestingContract(arg.operator, arg.voter, arg.grant_amount, arg.withdrawal_address, arg.vesting_contract_address, arg.staking_pool_address, arg.commission_percentage)
        })
    }

    static get bcs() {
        return bcs_import.struct("CreateVestingContract", {
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            grant_amount: bcs_import.u64(),
            withdrawal_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            staking_pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            commission_percentage: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CreateVestingContract(val.operator, val.voter, val.grant_amount, val.withdrawal_address, val.vesting_contract_address, val.staking_pool_address, val.commission_percentage),
        });
    };
}

/* ============================== CreateVestingContractEvent =============================== */

export class CreateVestingContractEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CreateVestingContractEvent`;

    operator: string;
    voter: string;
    grant_amount: u64_import;
    withdrawal_address: string;
    vesting_contract_address: string;
    staking_pool_address: string;
    commission_percentage: u64_import;

    constructor(operator: string, voter: string, grant_amount: u64_import, withdrawal_address: string, vesting_contract_address: string, staking_pool_address: string, commission_percentage: u64_import) {
        this.operator = operator;
        this.voter = voter;
        this.grant_amount = grant_amount;
        this.withdrawal_address = withdrawal_address;
        this.vesting_contract_address = vesting_contract_address;
        this.staking_pool_address = staking_pool_address;
        this.commission_percentage = commission_percentage;
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
        return CreateVestingContractEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CreateVestingContractEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return CreateVestingContractEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CreateVestingContractEvent`
    }

    from(arg: CreateVestingContractEvent) {
        this.operator = arg.operator;
        this.voter = arg.voter;
        this.grant_amount = arg.grant_amount;
        this.withdrawal_address = arg.withdrawal_address;
        this.vesting_contract_address = arg.vesting_contract_address;
        this.staking_pool_address = arg.staking_pool_address;
        this.commission_percentage = arg.commission_percentage;
    }

    static from_bcs(arg: {
        operator: string,
        voter: string,
        grant_amount: u64_import,
        withdrawal_address: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        commission_percentage: u64_import
    }): CreateVestingContractEvent {
        return new CreateVestingContractEvent(arg.operator, arg.voter, arg.grant_amount, arg.withdrawal_address, arg.vesting_contract_address, arg.staking_pool_address, arg.commission_percentage)
    }

    static from_bcs_vector(args: {
        operator: string,
        voter: string,
        grant_amount: u64_import,
        withdrawal_address: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        commission_percentage: u64_import
    } []): CreateVestingContractEvent[] {
        return args.map(function(arg) {
            return new CreateVestingContractEvent(arg.operator, arg.voter, arg.grant_amount, arg.withdrawal_address, arg.vesting_contract_address, arg.staking_pool_address, arg.commission_percentage)
        })
    }

    static get bcs() {
        return bcs_import.struct("CreateVestingContractEvent", {
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            grant_amount: bcs_import.u64(),
            withdrawal_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            staking_pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            commission_percentage: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CreateVestingContractEvent(val.operator, val.voter, val.grant_amount, val.withdrawal_address, val.vesting_contract_address, val.staking_pool_address, val.commission_percentage),
        });
    };
}

/* ============================== SetBeneficiary =============================== */

export class SetBeneficiary implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SetBeneficiary`;

    admin: string;
    vesting_contract_address: string;
    shareholder: string;
    old_beneficiary: string;
    new_beneficiary: string;

    constructor(admin: string, vesting_contract_address: string, shareholder: string, old_beneficiary: string, new_beneficiary: string) {
        this.admin = admin;
        this.vesting_contract_address = vesting_contract_address;
        this.shareholder = shareholder;
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
        return SetBeneficiary.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SetBeneficiary.from_bcs_vector(args)
    }

    get_bcs() {
        return SetBeneficiary.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SetBeneficiary`
    }

    from(arg: SetBeneficiary) {
        this.admin = arg.admin;
        this.vesting_contract_address = arg.vesting_contract_address;
        this.shareholder = arg.shareholder;
        this.old_beneficiary = arg.old_beneficiary;
        this.new_beneficiary = arg.new_beneficiary;
    }

    static from_bcs(arg: {
        admin: string,
        vesting_contract_address: string,
        shareholder: string,
        old_beneficiary: string,
        new_beneficiary: string
    }): SetBeneficiary {
        return new SetBeneficiary(arg.admin, arg.vesting_contract_address, arg.shareholder, arg.old_beneficiary, arg.new_beneficiary)
    }

    static from_bcs_vector(args: {
        admin: string,
        vesting_contract_address: string,
        shareholder: string,
        old_beneficiary: string,
        new_beneficiary: string
    } []): SetBeneficiary[] {
        return args.map(function(arg) {
            return new SetBeneficiary(arg.admin, arg.vesting_contract_address, arg.shareholder, arg.old_beneficiary, arg.new_beneficiary)
        })
    }

    static get bcs() {
        return bcs_import.struct("SetBeneficiary", {
            admin: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            shareholder: bcs_import.bytes(32).transform({
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
            output: (val) => new SetBeneficiary(val.admin, val.vesting_contract_address, val.shareholder, val.old_beneficiary, val.new_beneficiary),
        });
    };
}

/* ============================== SetBeneficiaryEvent =============================== */

export class SetBeneficiaryEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SetBeneficiaryEvent`;

    admin: string;
    vesting_contract_address: string;
    shareholder: string;
    old_beneficiary: string;
    new_beneficiary: string;

    constructor(admin: string, vesting_contract_address: string, shareholder: string, old_beneficiary: string, new_beneficiary: string) {
        this.admin = admin;
        this.vesting_contract_address = vesting_contract_address;
        this.shareholder = shareholder;
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
        return SetBeneficiaryEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SetBeneficiaryEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return SetBeneficiaryEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SetBeneficiaryEvent`
    }

    from(arg: SetBeneficiaryEvent) {
        this.admin = arg.admin;
        this.vesting_contract_address = arg.vesting_contract_address;
        this.shareholder = arg.shareholder;
        this.old_beneficiary = arg.old_beneficiary;
        this.new_beneficiary = arg.new_beneficiary;
    }

    static from_bcs(arg: {
        admin: string,
        vesting_contract_address: string,
        shareholder: string,
        old_beneficiary: string,
        new_beneficiary: string
    }): SetBeneficiaryEvent {
        return new SetBeneficiaryEvent(arg.admin, arg.vesting_contract_address, arg.shareholder, arg.old_beneficiary, arg.new_beneficiary)
    }

    static from_bcs_vector(args: {
        admin: string,
        vesting_contract_address: string,
        shareholder: string,
        old_beneficiary: string,
        new_beneficiary: string
    } []): SetBeneficiaryEvent[] {
        return args.map(function(arg) {
            return new SetBeneficiaryEvent(arg.admin, arg.vesting_contract_address, arg.shareholder, arg.old_beneficiary, arg.new_beneficiary)
        })
    }

    static get bcs() {
        return bcs_import.struct("SetBeneficiaryEvent", {
            admin: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            shareholder: bcs_import.bytes(32).transform({
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
            output: (val) => new SetBeneficiaryEvent(val.admin, val.vesting_contract_address, val.shareholder, val.old_beneficiary, val.new_beneficiary),
        });
    };
}

/* ============================== StakingInfo =============================== */

export class StakingInfo implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::StakingInfo`;

    pool_address: string;
    operator: string;
    voter: string;
    commission_percentage: u64_import;

    constructor(pool_address: string, operator: string, voter: string, commission_percentage: u64_import) {
        this.pool_address = pool_address;
        this.operator = operator;
        this.voter = voter;
        this.commission_percentage = commission_percentage;
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
        return StakingInfo.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return StakingInfo.from_bcs_vector(args)
    }

    get_bcs() {
        return StakingInfo.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::StakingInfo`
    }

    from(arg: StakingInfo) {
        this.pool_address = arg.pool_address;
        this.operator = arg.operator;
        this.voter = arg.voter;
        this.commission_percentage = arg.commission_percentage;
    }

    static from_bcs(arg: {
        pool_address: string,
        operator: string,
        voter: string,
        commission_percentage: u64_import
    }): StakingInfo {
        return new StakingInfo(arg.pool_address, arg.operator, arg.voter, arg.commission_percentage)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        operator: string,
        voter: string,
        commission_percentage: u64_import
    } []): StakingInfo[] {
        return args.map(function(arg) {
            return new StakingInfo(arg.pool_address, arg.operator, arg.voter, arg.commission_percentage)
        })
    }

    static get bcs() {
        return bcs_import.struct("StakingInfo", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            commission_percentage: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new StakingInfo(val.pool_address, val.operator, val.voter, val.commission_percentage),
        });
    };
}

/* ============================== Terminate =============================== */

export class Terminate implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Terminate`;

    admin: string;
    vesting_contract_address: string;

    constructor(admin: string, vesting_contract_address: string) {
        this.admin = admin;
        this.vesting_contract_address = vesting_contract_address;
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
        return Terminate.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Terminate.from_bcs_vector(args)
    }

    get_bcs() {
        return Terminate.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Terminate`
    }

    from(arg: Terminate) {
        this.admin = arg.admin;
        this.vesting_contract_address = arg.vesting_contract_address;
    }

    static from_bcs(arg: {
        admin: string,
        vesting_contract_address: string
    }): Terminate {
        return new Terminate(arg.admin, arg.vesting_contract_address)
    }

    static from_bcs_vector(args: {
        admin: string,
        vesting_contract_address: string
    } []): Terminate[] {
        return args.map(function(arg) {
            return new Terminate(arg.admin, arg.vesting_contract_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("Terminate", {
            admin: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Terminate(val.admin, val.vesting_contract_address),
        });
    };
}

/* ============================== TerminateEvent =============================== */

export class TerminateEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TerminateEvent`;

    admin: string;
    vesting_contract_address: string;

    constructor(admin: string, vesting_contract_address: string) {
        this.admin = admin;
        this.vesting_contract_address = vesting_contract_address;
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
        return TerminateEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TerminateEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return TerminateEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TerminateEvent`
    }

    from(arg: TerminateEvent) {
        this.admin = arg.admin;
        this.vesting_contract_address = arg.vesting_contract_address;
    }

    static from_bcs(arg: {
        admin: string,
        vesting_contract_address: string
    }): TerminateEvent {
        return new TerminateEvent(arg.admin, arg.vesting_contract_address)
    }

    static from_bcs_vector(args: {
        admin: string,
        vesting_contract_address: string
    } []): TerminateEvent[] {
        return args.map(function(arg) {
            return new TerminateEvent(arg.admin, arg.vesting_contract_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("TerminateEvent", {
            admin: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TerminateEvent(val.admin, val.vesting_contract_address),
        });
    };
}

/* ============================== UnlockRewards =============================== */

export class UnlockRewards implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UnlockRewards`;

    admin: string;
    vesting_contract_address: string;
    staking_pool_address: string;
    amount: u64_import;

    constructor(admin: string, vesting_contract_address: string, staking_pool_address: string, amount: u64_import) {
        this.admin = admin;
        this.vesting_contract_address = vesting_contract_address;
        this.staking_pool_address = staking_pool_address;
        this.amount = amount;
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
        return UnlockRewards.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UnlockRewards.from_bcs_vector(args)
    }

    get_bcs() {
        return UnlockRewards.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UnlockRewards`
    }

    from(arg: UnlockRewards) {
        this.admin = arg.admin;
        this.vesting_contract_address = arg.vesting_contract_address;
        this.staking_pool_address = arg.staking_pool_address;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        amount: u64_import
    }): UnlockRewards {
        return new UnlockRewards(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.amount)
    }

    static from_bcs_vector(args: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        amount: u64_import
    } []): UnlockRewards[] {
        return args.map(function(arg) {
            return new UnlockRewards(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("UnlockRewards", {
            admin: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            staking_pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UnlockRewards(val.admin, val.vesting_contract_address, val.staking_pool_address, val.amount),
        });
    };
}

/* ============================== UnlockRewardsEvent =============================== */

export class UnlockRewardsEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UnlockRewardsEvent`;

    admin: string;
    vesting_contract_address: string;
    staking_pool_address: string;
    amount: u64_import;

    constructor(admin: string, vesting_contract_address: string, staking_pool_address: string, amount: u64_import) {
        this.admin = admin;
        this.vesting_contract_address = vesting_contract_address;
        this.staking_pool_address = staking_pool_address;
        this.amount = amount;
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
        return UnlockRewardsEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UnlockRewardsEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return UnlockRewardsEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UnlockRewardsEvent`
    }

    from(arg: UnlockRewardsEvent) {
        this.admin = arg.admin;
        this.vesting_contract_address = arg.vesting_contract_address;
        this.staking_pool_address = arg.staking_pool_address;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        amount: u64_import
    }): UnlockRewardsEvent {
        return new UnlockRewardsEvent(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.amount)
    }

    static from_bcs_vector(args: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        amount: u64_import
    } []): UnlockRewardsEvent[] {
        return args.map(function(arg) {
            return new UnlockRewardsEvent(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("UnlockRewardsEvent", {
            admin: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            staking_pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UnlockRewardsEvent(val.admin, val.vesting_contract_address, val.staking_pool_address, val.amount),
        });
    };
}

/* ============================== UpdateOperator =============================== */

export class UpdateOperator implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpdateOperator`;

    admin: string;
    vesting_contract_address: string;
    staking_pool_address: string;
    old_operator: string;
    new_operator: string;
    commission_percentage: u64_import;

    constructor(admin: string, vesting_contract_address: string, staking_pool_address: string, old_operator: string, new_operator: string, commission_percentage: u64_import) {
        this.admin = admin;
        this.vesting_contract_address = vesting_contract_address;
        this.staking_pool_address = staking_pool_address;
        this.old_operator = old_operator;
        this.new_operator = new_operator;
        this.commission_percentage = commission_percentage;
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
        return UpdateOperator.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UpdateOperator.from_bcs_vector(args)
    }

    get_bcs() {
        return UpdateOperator.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UpdateOperator`
    }

    from(arg: UpdateOperator) {
        this.admin = arg.admin;
        this.vesting_contract_address = arg.vesting_contract_address;
        this.staking_pool_address = arg.staking_pool_address;
        this.old_operator = arg.old_operator;
        this.new_operator = arg.new_operator;
        this.commission_percentage = arg.commission_percentage;
    }

    static from_bcs(arg: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        old_operator: string,
        new_operator: string,
        commission_percentage: u64_import
    }): UpdateOperator {
        return new UpdateOperator(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.old_operator, arg.new_operator, arg.commission_percentage)
    }

    static from_bcs_vector(args: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        old_operator: string,
        new_operator: string,
        commission_percentage: u64_import
    } []): UpdateOperator[] {
        return args.map(function(arg) {
            return new UpdateOperator(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.old_operator, arg.new_operator, arg.commission_percentage)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpdateOperator", {
            admin: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            staking_pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            old_operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            new_operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            commission_percentage: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UpdateOperator(val.admin, val.vesting_contract_address, val.staking_pool_address, val.old_operator, val.new_operator, val.commission_percentage),
        });
    };
}

/* ============================== UpdateOperatorEvent =============================== */

export class UpdateOperatorEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpdateOperatorEvent`;

    admin: string;
    vesting_contract_address: string;
    staking_pool_address: string;
    old_operator: string;
    new_operator: string;
    commission_percentage: u64_import;

    constructor(admin: string, vesting_contract_address: string, staking_pool_address: string, old_operator: string, new_operator: string, commission_percentage: u64_import) {
        this.admin = admin;
        this.vesting_contract_address = vesting_contract_address;
        this.staking_pool_address = staking_pool_address;
        this.old_operator = old_operator;
        this.new_operator = new_operator;
        this.commission_percentage = commission_percentage;
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
        return UpdateOperatorEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UpdateOperatorEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return UpdateOperatorEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UpdateOperatorEvent`
    }

    from(arg: UpdateOperatorEvent) {
        this.admin = arg.admin;
        this.vesting_contract_address = arg.vesting_contract_address;
        this.staking_pool_address = arg.staking_pool_address;
        this.old_operator = arg.old_operator;
        this.new_operator = arg.new_operator;
        this.commission_percentage = arg.commission_percentage;
    }

    static from_bcs(arg: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        old_operator: string,
        new_operator: string,
        commission_percentage: u64_import
    }): UpdateOperatorEvent {
        return new UpdateOperatorEvent(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.old_operator, arg.new_operator, arg.commission_percentage)
    }

    static from_bcs_vector(args: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        old_operator: string,
        new_operator: string,
        commission_percentage: u64_import
    } []): UpdateOperatorEvent[] {
        return args.map(function(arg) {
            return new UpdateOperatorEvent(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.old_operator, arg.new_operator, arg.commission_percentage)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpdateOperatorEvent", {
            admin: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            staking_pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            old_operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            new_operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            commission_percentage: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UpdateOperatorEvent(val.admin, val.vesting_contract_address, val.staking_pool_address, val.old_operator, val.new_operator, val.commission_percentage),
        });
    };
}

/* ============================== Vest =============================== */

export class Vest implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Vest`;

    admin: string;
    vesting_contract_address: string;
    staking_pool_address: string;
    period_vested: u64_import;
    amount: u64_import;

    constructor(admin: string, vesting_contract_address: string, staking_pool_address: string, period_vested: u64_import, amount: u64_import) {
        this.admin = admin;
        this.vesting_contract_address = vesting_contract_address;
        this.staking_pool_address = staking_pool_address;
        this.period_vested = period_vested;
        this.amount = amount;
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
        return Vest.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Vest.from_bcs_vector(args)
    }

    get_bcs() {
        return Vest.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Vest`
    }

    from(arg: Vest) {
        this.admin = arg.admin;
        this.vesting_contract_address = arg.vesting_contract_address;
        this.staking_pool_address = arg.staking_pool_address;
        this.period_vested = arg.period_vested;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        period_vested: u64_import,
        amount: u64_import
    }): Vest {
        return new Vest(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.period_vested, arg.amount)
    }

    static from_bcs_vector(args: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        period_vested: u64_import,
        amount: u64_import
    } []): Vest[] {
        return args.map(function(arg) {
            return new Vest(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.period_vested, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("Vest", {
            admin: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            staking_pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            period_vested: bcs_import.u64(),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Vest(val.admin, val.vesting_contract_address, val.staking_pool_address, val.period_vested, val.amount),
        });
    };
}

/* ============================== VestEvent =============================== */

export class VestEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VestEvent`;

    admin: string;
    vesting_contract_address: string;
    staking_pool_address: string;
    period_vested: u64_import;
    amount: u64_import;

    constructor(admin: string, vesting_contract_address: string, staking_pool_address: string, period_vested: u64_import, amount: u64_import) {
        this.admin = admin;
        this.vesting_contract_address = vesting_contract_address;
        this.staking_pool_address = staking_pool_address;
        this.period_vested = period_vested;
        this.amount = amount;
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
        return VestEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return VestEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return VestEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::VestEvent`
    }

    from(arg: VestEvent) {
        this.admin = arg.admin;
        this.vesting_contract_address = arg.vesting_contract_address;
        this.staking_pool_address = arg.staking_pool_address;
        this.period_vested = arg.period_vested;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        period_vested: u64_import,
        amount: u64_import
    }): VestEvent {
        return new VestEvent(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.period_vested, arg.amount)
    }

    static from_bcs_vector(args: {
        admin: string,
        vesting_contract_address: string,
        staking_pool_address: string,
        period_vested: u64_import,
        amount: u64_import
    } []): VestEvent[] {
        return args.map(function(arg) {
            return new VestEvent(arg.admin, arg.vesting_contract_address, arg.staking_pool_address, arg.period_vested, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("VestEvent", {
            admin: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            vesting_contract_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            staking_pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            period_vested: bcs_import.u64(),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new VestEvent(val.admin, val.vesting_contract_address, val.staking_pool_address, val.period_vested, val.amount),
        });
    };
}

/* ============================== VestingAccountManagement =============================== */

export class VestingAccountManagement implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VestingAccountManagement`;

    roles: SimpleMap < string,
    string > ;

    constructor(roles ? : SimpleMap < string, string > ) {
        this.roles = roles;
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
        return VestingAccountManagement.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return VestingAccountManagement.from_bcs_vector(args)
    }

    get_bcs() {
        return VestingAccountManagement.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::VestingAccountManagement`
    }

    from(arg: VestingAccountManagement) {
        this.roles = arg.roles;
    }

    static from_bcs(arg: {
        roles: SimpleMap < string,
        string >
    }): VestingAccountManagement {
        return new VestingAccountManagement(arg.roles)
    }

    static from_bcs_vector(args: {
        roles: SimpleMap < string,
        string >
    } []): VestingAccountManagement[] {
        return args.map(function(arg) {
            return new VestingAccountManagement(arg.roles)
        })
    }

    static get bcs() {
        return bcs_import.struct("VestingAccountManagement", {
            roles: SimpleMap.bcs(bcs_import.string(), bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            })),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new VestingAccountManagement(val.roles),
        });
    };
}

/* ============================== VestingContract =============================== */

export class VestingContract implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VestingContract`;

    state: u64_import;
    admin: string;
    grant_pool: Pool;
    beneficiaries: SimpleMap < string,
    string > ;
    vesting_schedule: VestingSchedule;
    withdrawal_address: string;
    staking: StakingInfo;
    remaining_grant: u64_import;
    signer_cap: SignerCapability;
    update_operator_events: EventHandle;
    update_voter_events: EventHandle;
    reset_lockup_events: EventHandle;
    set_beneficiary_events: EventHandle;
    unlock_rewards_events: EventHandle;
    vest_events: EventHandle;
    distribute_events: EventHandle;
    terminate_events: EventHandle;
    admin_withdraw_events: EventHandle;

    constructor(state ? : u64_import, admin ? : string, grant_pool ? : Pool, beneficiaries ? : SimpleMap < string, string > , vesting_schedule ? : VestingSchedule, withdrawal_address ? : string, staking ? : StakingInfo, remaining_grant ? : u64_import, signer_cap ? : SignerCapability, update_operator_events ? : EventHandle, update_voter_events ? : EventHandle, reset_lockup_events ? : EventHandle, set_beneficiary_events ? : EventHandle, unlock_rewards_events ? : EventHandle, vest_events ? : EventHandle, distribute_events ? : EventHandle, terminate_events ? : EventHandle, admin_withdraw_events ? : EventHandle) {
        this.state = state;
        this.admin = admin;
        this.grant_pool = grant_pool;
        this.beneficiaries = beneficiaries;
        this.vesting_schedule = vesting_schedule;
        this.withdrawal_address = withdrawal_address;
        this.staking = staking;
        this.remaining_grant = remaining_grant;
        this.signer_cap = signer_cap;
        this.update_operator_events = update_operator_events;
        this.update_voter_events = update_voter_events;
        this.reset_lockup_events = reset_lockup_events;
        this.set_beneficiary_events = set_beneficiary_events;
        this.unlock_rewards_events = unlock_rewards_events;
        this.vest_events = vest_events;
        this.distribute_events = distribute_events;
        this.terminate_events = terminate_events;
        this.admin_withdraw_events = admin_withdraw_events;
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
        return VestingContract.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return VestingContract.from_bcs_vector(args)
    }

    get_bcs() {
        return VestingContract.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::VestingContract`
    }

    from(arg: VestingContract) {
        this.state = arg.state;
        this.admin = arg.admin;
        this.grant_pool = arg.grant_pool;
        this.beneficiaries = arg.beneficiaries;
        this.vesting_schedule = arg.vesting_schedule;
        this.withdrawal_address = arg.withdrawal_address;
        this.staking = arg.staking;
        this.remaining_grant = arg.remaining_grant;
        this.signer_cap = arg.signer_cap;
        this.update_operator_events = arg.update_operator_events;
        this.update_voter_events = arg.update_voter_events;
        this.reset_lockup_events = arg.reset_lockup_events;
        this.set_beneficiary_events = arg.set_beneficiary_events;
        this.unlock_rewards_events = arg.unlock_rewards_events;
        this.vest_events = arg.vest_events;
        this.distribute_events = arg.distribute_events;
        this.terminate_events = arg.terminate_events;
        this.admin_withdraw_events = arg.admin_withdraw_events;
    }

    static from_bcs(arg: {
        state: u64_import,
        admin: string,
        grant_pool: Pool,
        beneficiaries: SimpleMap < string,
        string > ,
        vesting_schedule: VestingSchedule,
        withdrawal_address: string,
        staking: StakingInfo,
        remaining_grant: u64_import,
        signer_cap: SignerCapability,
        update_operator_events: EventHandle,
        update_voter_events: EventHandle,
        reset_lockup_events: EventHandle,
        set_beneficiary_events: EventHandle,
        unlock_rewards_events: EventHandle,
        vest_events: EventHandle,
        distribute_events: EventHandle,
        terminate_events: EventHandle,
        admin_withdraw_events: EventHandle
    }): VestingContract {
        return new VestingContract(arg.state, arg.admin, arg.grant_pool, arg.beneficiaries, arg.vesting_schedule, arg.withdrawal_address, arg.staking, arg.remaining_grant, arg.signer_cap, arg.update_operator_events, arg.update_voter_events, arg.reset_lockup_events, arg.set_beneficiary_events, arg.unlock_rewards_events, arg.vest_events, arg.distribute_events, arg.terminate_events, arg.admin_withdraw_events)
    }

    static from_bcs_vector(args: {
        state: u64_import,
        admin: string,
        grant_pool: Pool,
        beneficiaries: SimpleMap < string,
        string > ,
        vesting_schedule: VestingSchedule,
        withdrawal_address: string,
        staking: StakingInfo,
        remaining_grant: u64_import,
        signer_cap: SignerCapability,
        update_operator_events: EventHandle,
        update_voter_events: EventHandle,
        reset_lockup_events: EventHandle,
        set_beneficiary_events: EventHandle,
        unlock_rewards_events: EventHandle,
        vest_events: EventHandle,
        distribute_events: EventHandle,
        terminate_events: EventHandle,
        admin_withdraw_events: EventHandle
    } []): VestingContract[] {
        return args.map(function(arg) {
            return new VestingContract(arg.state, arg.admin, arg.grant_pool, arg.beneficiaries, arg.vesting_schedule, arg.withdrawal_address, arg.staking, arg.remaining_grant, arg.signer_cap, arg.update_operator_events, arg.update_voter_events, arg.reset_lockup_events, arg.set_beneficiary_events, arg.unlock_rewards_events, arg.vest_events, arg.distribute_events, arg.terminate_events, arg.admin_withdraw_events)
        })
    }

    static get bcs() {
        return bcs_import.struct("VestingContract", {
            state: bcs_import.u64(),
            admin: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            grant_pool: Pool.bcs,
            beneficiaries: SimpleMap.bcs(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }), bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            })),
            vesting_schedule: VestingSchedule.bcs,
            withdrawal_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            staking: StakingInfo.bcs,
            remaining_grant: bcs_import.u64(),
            signer_cap: SignerCapability.bcs,
            update_operator_events: EventHandle.bcs,
            update_voter_events: EventHandle.bcs,
            reset_lockup_events: EventHandle.bcs,
            set_beneficiary_events: EventHandle.bcs,
            unlock_rewards_events: EventHandle.bcs,
            vest_events: EventHandle.bcs,
            distribute_events: EventHandle.bcs,
            terminate_events: EventHandle.bcs,
            admin_withdraw_events: EventHandle.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new VestingContract(val.state, val.admin, val.grant_pool, val.beneficiaries, val.vesting_schedule, val.withdrawal_address, val.staking, val.remaining_grant, val.signer_cap, val.update_operator_events, val.update_voter_events, val.reset_lockup_events, val.set_beneficiary_events, val.unlock_rewards_events, val.vest_events, val.distribute_events, val.terminate_events, val.admin_withdraw_events),
        });
    };
}

/* ============================== VestingSchedule =============================== */

export class VestingSchedule implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::VestingSchedule`;

    schedule: FixedPoint32[];
    start_timestamp_secs: u64_import;
    period_duration: u64_import;
    last_vested_period: u64_import;

    constructor(schedule: FixedPoint32[], start_timestamp_secs: u64_import, period_duration: u64_import, last_vested_period: u64_import) {
        this.schedule = schedule;
        this.start_timestamp_secs = start_timestamp_secs;
        this.period_duration = period_duration;
        this.last_vested_period = last_vested_period;
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
        return VestingSchedule.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return VestingSchedule.from_bcs_vector(args)
    }

    get_bcs() {
        return VestingSchedule.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::VestingSchedule`
    }

    from(arg: VestingSchedule) {
        this.schedule = arg.schedule;
        this.start_timestamp_secs = arg.start_timestamp_secs;
        this.period_duration = arg.period_duration;
        this.last_vested_period = arg.last_vested_period;
    }

    static from_bcs(arg: {
        schedule: FixedPoint32[],
        start_timestamp_secs: u64_import,
        period_duration: u64_import,
        last_vested_period: u64_import
    }): VestingSchedule {
        return new VestingSchedule(arg.schedule, arg.start_timestamp_secs, arg.period_duration, arg.last_vested_period)
    }

    static from_bcs_vector(args: {
        schedule: FixedPoint32[],
        start_timestamp_secs: u64_import,
        period_duration: u64_import,
        last_vested_period: u64_import
    } []): VestingSchedule[] {
        return args.map(function(arg) {
            return new VestingSchedule(arg.schedule, arg.start_timestamp_secs, arg.period_duration, arg.last_vested_period)
        })
    }

    static get bcs() {
        return bcs_import.struct("VestingSchedule", {
            schedule: bcs_import.vector(FixedPoint32.bcs),
            start_timestamp_secs: bcs_import.u64(),
            period_duration: bcs_import.u64(),
            last_vested_period: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new VestingSchedule(val.schedule, val.start_timestamp_secs, val.period_duration, val.last_vested_period),
        });
    };
}

function voter(arg0: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "voter", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
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

function update_commission_percentage(arg0: string, arg1: string, arg2: u64_import) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_commission_percentage", [], args);

}

function operator(arg0: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "operator", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function beneficiary(arg0: string, arg1: string): [string] {
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

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "beneficiary", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function shareholders(arg0: string): [string[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "shareholders", [], args);

    return [
        bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function distribute(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "distribute", [], args);

}

function reset_lockup(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "reset_lockup", [], args);

}

function stake_pool_address(arg0: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "stake_pool_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function unlock_rewards(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unlock_rewards", [], args);

}

function unlock_stake(arg0: VestingContract, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(VestingContract.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unlock_stake", [], args);

}

function update_voter(arg0: string, arg1: string, arg2: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_voter", [], args);

}

function accumulated_rewards(arg0: string, arg1: string): [u64_import] {
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

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "accumulated_rewards", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function admin_withdraw(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "admin_withdraw", [], args);

}

function assert_active_vesting_contract(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_active_vesting_contract", [], args);

}

function assert_vesting_contract_exists(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_vesting_contract_exists", [], args);

}

function create_vesting_contract(arg0: string, arg1: string[], arg2: SimpleMap < string, Coin > , arg3: VestingSchedule, arg4: string, arg5: string, arg6: string, arg7: u64_import, arg8: number[]): [string] {
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
        wasm.new_bytes(SimpleMap.bcs(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }), Coin.bcs).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(VestingSchedule.bcs.serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg5).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg6).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg7).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg8).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_vesting_contract", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create_vesting_contract_account(arg0: string, arg1: number[]): [string, SignerCapability] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_vesting_contract_account", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0])),
        SignerCapability.from_bcs(SignerCapability.bcs.parse(new Uint8Array(r1.Raw[0])))
    ];
}

function create_vesting_schedule(arg0: FixedPoint32[], arg1: u64_import, arg2: u64_import): [VestingSchedule] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(FixedPoint32.bcs).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_vesting_schedule", [], args);

    return [
        VestingSchedule.from_bcs(VestingSchedule.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function distribute_many(arg0: string[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "distribute_many", [], args);

}

function get_beneficiary(arg0: VestingContract, arg1: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(VestingContract.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_beneficiary", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_role_holder(arg0: string, arg1: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_role_holder", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_vesting_account_signer(arg0: string, arg1: string): [string] {
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

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_vesting_account_signer", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_vesting_account_signer_internal(arg0: VestingContract): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(VestingContract.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_vesting_account_signer_internal", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function period_duration_secs(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "period_duration_secs", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function remaining_grant(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remaining_grant", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function reset_beneficiary(arg0: string, arg1: string, arg2: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "reset_beneficiary", [], args);

}

function set_beneficiary(arg0: string, arg1: string, arg2: string, arg3: string) {
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
        }).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_beneficiary", [], args);

}

function set_beneficiary_resetter(arg0: string, arg1: string, arg2: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_beneficiary_resetter", [], args);

}

function set_management_role(arg0: string, arg1: string, arg2: string, arg3: string) {
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
        wasm.new_bytes(bcs_import.string().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_management_role", [], args);

}

function shareholder(arg0: string, arg1: string): [string] {
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

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "shareholder", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function terminate_vesting_contract(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "terminate_vesting_contract", [], args);

}

function total_accumulated_rewards(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "total_accumulated_rewards", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function unlock_rewards_many(arg0: string[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unlock_rewards_many", [], args);

}

function update_operator(arg0: string, arg1: string, arg2: string, arg3: u64_import) {
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
        }).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_operator", [], args);

}

function update_operator_with_same_commission(arg0: string, arg1: string, arg2: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_operator_with_same_commission", [], args);

}

function verify_admin(arg0: string, arg1: VestingContract) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(VestingContract.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_admin", [], args);

}

function vest(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "vest", [], args);

}

function vest_many(arg0: string[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "vest_many", [], args);

}

function vesting_contracts(arg0: string): [string[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "vesting_contracts", [], args);

    return [
        bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function vesting_schedule(arg0: string): [VestingSchedule] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "vesting_schedule", [], args);

    return [
        VestingSchedule.from_bcs(VestingSchedule.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function vesting_start_secs(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "vesting_start_secs", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function withdraw_stake(arg0: VestingContract, arg1: string): [Coin] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(VestingContract.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "withdraw_stake", [], args);

    return [
        Coin.from_bcs(Coin.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const vesting = {
    Distribute,
    DistributeEvent,
    ResetLockup,
    ResetLockupEvent,
    UpdateVoter,
    UpdateVoterEvent,
    AdminStore,
    AdminWithdraw,
    AdminWithdrawEvent,
    CreateVestingContract,
    CreateVestingContractEvent,
    SetBeneficiary,
    SetBeneficiaryEvent,
    StakingInfo,
    Terminate,
    TerminateEvent,
    UnlockRewards,
    UnlockRewardsEvent,
    UpdateOperator,
    UpdateOperatorEvent,
    Vest,
    VestEvent,
    VestingAccountManagement,
    VestingContract,
    VestingSchedule,
    voter,
    operator_commission_percentage,
    set_beneficiary_for_operator,
    update_commission_percentage,
    operator,
    beneficiary,
    shareholders,
    distribute,
    reset_lockup,
    stake_pool_address,
    unlock_rewards,
    unlock_stake,
    update_voter,
    accumulated_rewards,
    admin_withdraw,
    assert_active_vesting_contract,
    assert_vesting_contract_exists,
    create_vesting_contract,
    create_vesting_contract_account,
    create_vesting_schedule,
    distribute_many,
    get_beneficiary,
    get_role_holder,
    get_vesting_account_signer,
    get_vesting_account_signer_internal,
    period_duration_secs,
    remaining_grant,
    reset_beneficiary,
    set_beneficiary,
    set_beneficiary_resetter,
    set_management_role,
    shareholder,
    terminate_vesting_contract,
    total_accumulated_rewards,
    unlock_rewards_many,
    update_operator,
    update_operator_with_same_commission,
    verify_admin,
    vest,
    vest_many,
    vesting_contracts,
    vesting_schedule,
    vesting_start_secs,
    withdraw_stake
}