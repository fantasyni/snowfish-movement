import {
    StructClass,
    copy_arr_value,
    get_package_address,
    get_wasm,
    has_arr,
    into_arr_bcs_vector,
    into_arr_value,
    u64 as u64_import
} from "../../sui_wasm";
import {
    Coin,
    MintCapability
} from "./coin";
import {
    EventHandle
} from "./event";
import {
    Option
} from "./option";
import {
    StakingConfig
} from "./staking_config";
import {
    Table
} from "./table";
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
let MODULE_NAME: string = "stake";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== AddStake =============================== */

export class AddStake implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AddStake`;

    pool_address: string;
    amount_added: u64_import;

    constructor(pool_address: string, amount_added: u64_import) {
        this.pool_address = pool_address;
        this.amount_added = amount_added;
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
        this.amount_added = arg.amount_added;
    }

    static from_bcs(arg: {
        pool_address: string,
        amount_added: u64_import
    }): AddStake {
        return new AddStake(arg.pool_address, arg.amount_added)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        amount_added: u64_import
    } []): AddStake[] {
        return args.map(function(arg) {
            return new AddStake(arg.pool_address, arg.amount_added)
        })
    }

    static get bcs() {
        return bcs_import.struct("AddStake", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount_added: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AddStake(val.pool_address, val.amount_added),
        });
    };
}

/* ============================== AddStakeEvent =============================== */

export class AddStakeEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AddStakeEvent`;

    pool_address: string;
    amount_added: u64_import;

    constructor(pool_address: string, amount_added: u64_import) {
        this.pool_address = pool_address;
        this.amount_added = amount_added;
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
        this.amount_added = arg.amount_added;
    }

    static from_bcs(arg: {
        pool_address: string,
        amount_added: u64_import
    }): AddStakeEvent {
        return new AddStakeEvent(arg.pool_address, arg.amount_added)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        amount_added: u64_import
    } []): AddStakeEvent[] {
        return args.map(function(arg) {
            return new AddStakeEvent(arg.pool_address, arg.amount_added)
        })
    }

    static get bcs() {
        return bcs_import.struct("AddStakeEvent", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount_added: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AddStakeEvent(val.pool_address, val.amount_added),
        });
    };
}

/* ============================== AllowedValidators =============================== */

export class AllowedValidators implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AllowedValidators`;

    accounts: string[];

    constructor(accounts ? : string[]) {
        this.accounts = accounts;
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
        return AllowedValidators.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AllowedValidators.from_bcs_vector(args)
    }

    get_bcs() {
        return AllowedValidators.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AllowedValidators`
    }

    from(arg: AllowedValidators) {
        this.accounts = arg.accounts;
    }

    static from_bcs(arg: {
        accounts: string[]
    }): AllowedValidators {
        return new AllowedValidators(arg.accounts)
    }

    static from_bcs_vector(args: {
        accounts: string[]
    } []): AllowedValidators[] {
        return args.map(function(arg) {
            return new AllowedValidators(arg.accounts)
        })
    }

    static get bcs() {
        return bcs_import.struct("AllowedValidators", {
            accounts: bcs_import.vector(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            })),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AllowedValidators(val.accounts),
        });
    };
}

/* ============================== AptosCoinCapabilities =============================== */

export class AptosCoinCapabilities implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AptosCoinCapabilities`;

    mint_cap: MintCapability;

    constructor(mint_cap ? : MintCapability) {
        this.mint_cap = mint_cap;
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
        return AptosCoinCapabilities.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AptosCoinCapabilities.from_bcs_vector(args)
    }

    get_bcs() {
        return AptosCoinCapabilities.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AptosCoinCapabilities`
    }

    from(arg: AptosCoinCapabilities) {
        this.mint_cap = arg.mint_cap;
    }

    static from_bcs(arg: {
        mint_cap: MintCapability
    }): AptosCoinCapabilities {
        return new AptosCoinCapabilities(arg.mint_cap)
    }

    static from_bcs_vector(args: {
        mint_cap: MintCapability
    } []): AptosCoinCapabilities[] {
        return args.map(function(arg) {
            return new AptosCoinCapabilities(arg.mint_cap)
        })
    }

    static get bcs() {
        return bcs_import.struct("AptosCoinCapabilities", {
            mint_cap: MintCapability.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AptosCoinCapabilities(val.mint_cap),
        });
    };
}

/* ============================== DistributeRewards =============================== */

export class DistributeRewards implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DistributeRewards`;

    pool_address: string;
    rewards_amount: u64_import;

    constructor(pool_address: string, rewards_amount: u64_import) {
        this.pool_address = pool_address;
        this.rewards_amount = rewards_amount;
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
        return DistributeRewards.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DistributeRewards.from_bcs_vector(args)
    }

    get_bcs() {
        return DistributeRewards.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DistributeRewards`
    }

    from(arg: DistributeRewards) {
        this.pool_address = arg.pool_address;
        this.rewards_amount = arg.rewards_amount;
    }

    static from_bcs(arg: {
        pool_address: string,
        rewards_amount: u64_import
    }): DistributeRewards {
        return new DistributeRewards(arg.pool_address, arg.rewards_amount)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        rewards_amount: u64_import
    } []): DistributeRewards[] {
        return args.map(function(arg) {
            return new DistributeRewards(arg.pool_address, arg.rewards_amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("DistributeRewards", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            rewards_amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DistributeRewards(val.pool_address, val.rewards_amount),
        });
    };
}

/* ============================== DistributeRewardsEvent =============================== */

export class DistributeRewardsEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DistributeRewardsEvent`;

    pool_address: string;
    rewards_amount: u64_import;

    constructor(pool_address: string, rewards_amount: u64_import) {
        this.pool_address = pool_address;
        this.rewards_amount = rewards_amount;
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
        return DistributeRewardsEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DistributeRewardsEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return DistributeRewardsEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DistributeRewardsEvent`
    }

    from(arg: DistributeRewardsEvent) {
        this.pool_address = arg.pool_address;
        this.rewards_amount = arg.rewards_amount;
    }

    static from_bcs(arg: {
        pool_address: string,
        rewards_amount: u64_import
    }): DistributeRewardsEvent {
        return new DistributeRewardsEvent(arg.pool_address, arg.rewards_amount)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        rewards_amount: u64_import
    } []): DistributeRewardsEvent[] {
        return args.map(function(arg) {
            return new DistributeRewardsEvent(arg.pool_address, arg.rewards_amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("DistributeRewardsEvent", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            rewards_amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DistributeRewardsEvent(val.pool_address, val.rewards_amount),
        });
    };
}

/* ============================== IncreaseLockup =============================== */

export class IncreaseLockup implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::IncreaseLockup`;

    pool_address: string;
    old_locked_until_secs: u64_import;
    new_locked_until_secs: u64_import;

    constructor(pool_address: string, old_locked_until_secs: u64_import, new_locked_until_secs: u64_import) {
        this.pool_address = pool_address;
        this.old_locked_until_secs = old_locked_until_secs;
        this.new_locked_until_secs = new_locked_until_secs;
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
        return IncreaseLockup.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return IncreaseLockup.from_bcs_vector(args)
    }

    get_bcs() {
        return IncreaseLockup.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::IncreaseLockup`
    }

    from(arg: IncreaseLockup) {
        this.pool_address = arg.pool_address;
        this.old_locked_until_secs = arg.old_locked_until_secs;
        this.new_locked_until_secs = arg.new_locked_until_secs;
    }

    static from_bcs(arg: {
        pool_address: string,
        old_locked_until_secs: u64_import,
        new_locked_until_secs: u64_import
    }): IncreaseLockup {
        return new IncreaseLockup(arg.pool_address, arg.old_locked_until_secs, arg.new_locked_until_secs)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        old_locked_until_secs: u64_import,
        new_locked_until_secs: u64_import
    } []): IncreaseLockup[] {
        return args.map(function(arg) {
            return new IncreaseLockup(arg.pool_address, arg.old_locked_until_secs, arg.new_locked_until_secs)
        })
    }

    static get bcs() {
        return bcs_import.struct("IncreaseLockup", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            old_locked_until_secs: bcs_import.u64(),
            new_locked_until_secs: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new IncreaseLockup(val.pool_address, val.old_locked_until_secs, val.new_locked_until_secs),
        });
    };
}

/* ============================== IncreaseLockupEvent =============================== */

export class IncreaseLockupEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::IncreaseLockupEvent`;

    pool_address: string;
    old_locked_until_secs: u64_import;
    new_locked_until_secs: u64_import;

    constructor(pool_address: string, old_locked_until_secs: u64_import, new_locked_until_secs: u64_import) {
        this.pool_address = pool_address;
        this.old_locked_until_secs = old_locked_until_secs;
        this.new_locked_until_secs = new_locked_until_secs;
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
        return IncreaseLockupEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return IncreaseLockupEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return IncreaseLockupEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::IncreaseLockupEvent`
    }

    from(arg: IncreaseLockupEvent) {
        this.pool_address = arg.pool_address;
        this.old_locked_until_secs = arg.old_locked_until_secs;
        this.new_locked_until_secs = arg.new_locked_until_secs;
    }

    static from_bcs(arg: {
        pool_address: string,
        old_locked_until_secs: u64_import,
        new_locked_until_secs: u64_import
    }): IncreaseLockupEvent {
        return new IncreaseLockupEvent(arg.pool_address, arg.old_locked_until_secs, arg.new_locked_until_secs)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        old_locked_until_secs: u64_import,
        new_locked_until_secs: u64_import
    } []): IncreaseLockupEvent[] {
        return args.map(function(arg) {
            return new IncreaseLockupEvent(arg.pool_address, arg.old_locked_until_secs, arg.new_locked_until_secs)
        })
    }

    static get bcs() {
        return bcs_import.struct("IncreaseLockupEvent", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            old_locked_until_secs: bcs_import.u64(),
            new_locked_until_secs: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new IncreaseLockupEvent(val.pool_address, val.old_locked_until_secs, val.new_locked_until_secs),
        });
    };
}

/* ============================== IndividualValidatorPerformance =============================== */

export class IndividualValidatorPerformance implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::IndividualValidatorPerformance`;

    successful_proposals: u64_import;
    failed_proposals: u64_import;

    constructor(successful_proposals: u64_import, failed_proposals: u64_import) {
        this.successful_proposals = successful_proposals;
        this.failed_proposals = failed_proposals;
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
        return IndividualValidatorPerformance.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return IndividualValidatorPerformance.from_bcs_vector(args)
    }

    get_bcs() {
        return IndividualValidatorPerformance.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::IndividualValidatorPerformance`
    }

    from(arg: IndividualValidatorPerformance) {
        this.successful_proposals = arg.successful_proposals;
        this.failed_proposals = arg.failed_proposals;
    }

    static from_bcs(arg: {
        successful_proposals: u64_import,
        failed_proposals: u64_import
    }): IndividualValidatorPerformance {
        return new IndividualValidatorPerformance(arg.successful_proposals, arg.failed_proposals)
    }

    static from_bcs_vector(args: {
        successful_proposals: u64_import,
        failed_proposals: u64_import
    } []): IndividualValidatorPerformance[] {
        return args.map(function(arg) {
            return new IndividualValidatorPerformance(arg.successful_proposals, arg.failed_proposals)
        })
    }

    static get bcs() {
        return bcs_import.struct("IndividualValidatorPerformance", {
            successful_proposals: bcs_import.u64(),
            failed_proposals: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new IndividualValidatorPerformance(val.successful_proposals, val.failed_proposals),
        });
    };
}

/* ============================== JoinValidatorSet =============================== */

export class JoinValidatorSet implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::JoinValidatorSet`;

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
        return JoinValidatorSet.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return JoinValidatorSet.from_bcs_vector(args)
    }

    get_bcs() {
        return JoinValidatorSet.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::JoinValidatorSet`
    }

    from(arg: JoinValidatorSet) {
        this.pool_address = arg.pool_address;
    }

    static from_bcs(arg: {
        pool_address: string
    }): JoinValidatorSet {
        return new JoinValidatorSet(arg.pool_address)
    }

    static from_bcs_vector(args: {
        pool_address: string
    } []): JoinValidatorSet[] {
        return args.map(function(arg) {
            return new JoinValidatorSet(arg.pool_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("JoinValidatorSet", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new JoinValidatorSet(val.pool_address),
        });
    };
}

/* ============================== JoinValidatorSetEvent =============================== */

export class JoinValidatorSetEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::JoinValidatorSetEvent`;

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
        return JoinValidatorSetEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return JoinValidatorSetEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return JoinValidatorSetEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::JoinValidatorSetEvent`
    }

    from(arg: JoinValidatorSetEvent) {
        this.pool_address = arg.pool_address;
    }

    static from_bcs(arg: {
        pool_address: string
    }): JoinValidatorSetEvent {
        return new JoinValidatorSetEvent(arg.pool_address)
    }

    static from_bcs_vector(args: {
        pool_address: string
    } []): JoinValidatorSetEvent[] {
        return args.map(function(arg) {
            return new JoinValidatorSetEvent(arg.pool_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("JoinValidatorSetEvent", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new JoinValidatorSetEvent(val.pool_address),
        });
    };
}

/* ============================== LeaveValidatorSet =============================== */

export class LeaveValidatorSet implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::LeaveValidatorSet`;

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
        return LeaveValidatorSet.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return LeaveValidatorSet.from_bcs_vector(args)
    }

    get_bcs() {
        return LeaveValidatorSet.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::LeaveValidatorSet`
    }

    from(arg: LeaveValidatorSet) {
        this.pool_address = arg.pool_address;
    }

    static from_bcs(arg: {
        pool_address: string
    }): LeaveValidatorSet {
        return new LeaveValidatorSet(arg.pool_address)
    }

    static from_bcs_vector(args: {
        pool_address: string
    } []): LeaveValidatorSet[] {
        return args.map(function(arg) {
            return new LeaveValidatorSet(arg.pool_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("LeaveValidatorSet", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new LeaveValidatorSet(val.pool_address),
        });
    };
}

/* ============================== LeaveValidatorSetEvent =============================== */

export class LeaveValidatorSetEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::LeaveValidatorSetEvent`;

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
        return LeaveValidatorSetEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return LeaveValidatorSetEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return LeaveValidatorSetEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::LeaveValidatorSetEvent`
    }

    from(arg: LeaveValidatorSetEvent) {
        this.pool_address = arg.pool_address;
    }

    static from_bcs(arg: {
        pool_address: string
    }): LeaveValidatorSetEvent {
        return new LeaveValidatorSetEvent(arg.pool_address)
    }

    static from_bcs_vector(args: {
        pool_address: string
    } []): LeaveValidatorSetEvent[] {
        return args.map(function(arg) {
            return new LeaveValidatorSetEvent(arg.pool_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("LeaveValidatorSetEvent", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new LeaveValidatorSetEvent(val.pool_address),
        });
    };
}

/* ============================== OwnerCapability =============================== */

export class OwnerCapability implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::OwnerCapability`;

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
        return OwnerCapability.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return OwnerCapability.from_bcs_vector(args)
    }

    get_bcs() {
        return OwnerCapability.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::OwnerCapability`
    }

    from(arg: OwnerCapability) {
        this.pool_address = arg.pool_address;
    }

    static from_bcs(arg: {
        pool_address: string
    }): OwnerCapability {
        return new OwnerCapability(arg.pool_address)
    }

    static from_bcs_vector(args: {
        pool_address: string
    } []): OwnerCapability[] {
        return args.map(function(arg) {
            return new OwnerCapability(arg.pool_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("OwnerCapability", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new OwnerCapability(val.pool_address),
        });
    };
}

/* ============================== ReactivateStake =============================== */

export class ReactivateStake implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ReactivateStake`;

    pool_address: string;
    amount: u64_import;

    constructor(pool_address: string, amount: u64_import) {
        this.pool_address = pool_address;
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
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        pool_address: string,
        amount: u64_import
    }): ReactivateStake {
        return new ReactivateStake(arg.pool_address, arg.amount)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        amount: u64_import
    } []): ReactivateStake[] {
        return args.map(function(arg) {
            return new ReactivateStake(arg.pool_address, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("ReactivateStake", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ReactivateStake(val.pool_address, val.amount),
        });
    };
}

/* ============================== ReactivateStakeEvent =============================== */

export class ReactivateStakeEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ReactivateStakeEvent`;

    pool_address: string;
    amount: u64_import;

    constructor(pool_address: string, amount: u64_import) {
        this.pool_address = pool_address;
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
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        pool_address: string,
        amount: u64_import
    }): ReactivateStakeEvent {
        return new ReactivateStakeEvent(arg.pool_address, arg.amount)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        amount: u64_import
    } []): ReactivateStakeEvent[] {
        return args.map(function(arg) {
            return new ReactivateStakeEvent(arg.pool_address, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("ReactivateStakeEvent", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ReactivateStakeEvent(val.pool_address, val.amount),
        });
    };
}

/* ============================== RegisterValidatorCandidate =============================== */

export class RegisterValidatorCandidate implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RegisterValidatorCandidate`;

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
        return RegisterValidatorCandidate.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RegisterValidatorCandidate.from_bcs_vector(args)
    }

    get_bcs() {
        return RegisterValidatorCandidate.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RegisterValidatorCandidate`
    }

    from(arg: RegisterValidatorCandidate) {
        this.pool_address = arg.pool_address;
    }

    static from_bcs(arg: {
        pool_address: string
    }): RegisterValidatorCandidate {
        return new RegisterValidatorCandidate(arg.pool_address)
    }

    static from_bcs_vector(args: {
        pool_address: string
    } []): RegisterValidatorCandidate[] {
        return args.map(function(arg) {
            return new RegisterValidatorCandidate(arg.pool_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("RegisterValidatorCandidate", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RegisterValidatorCandidate(val.pool_address),
        });
    };
}

/* ============================== RegisterValidatorCandidateEvent =============================== */

export class RegisterValidatorCandidateEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RegisterValidatorCandidateEvent`;

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
        return RegisterValidatorCandidateEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RegisterValidatorCandidateEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return RegisterValidatorCandidateEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RegisterValidatorCandidateEvent`
    }

    from(arg: RegisterValidatorCandidateEvent) {
        this.pool_address = arg.pool_address;
    }

    static from_bcs(arg: {
        pool_address: string
    }): RegisterValidatorCandidateEvent {
        return new RegisterValidatorCandidateEvent(arg.pool_address)
    }

    static from_bcs_vector(args: {
        pool_address: string
    } []): RegisterValidatorCandidateEvent[] {
        return args.map(function(arg) {
            return new RegisterValidatorCandidateEvent(arg.pool_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("RegisterValidatorCandidateEvent", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RegisterValidatorCandidateEvent(val.pool_address),
        });
    };
}

/* ============================== RotateConsensusKey =============================== */

export class RotateConsensusKey implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RotateConsensusKey`;

    pool_address: string;
    old_consensus_pubkey: number[];
    new_consensus_pubkey: number[];

    constructor(pool_address: string, old_consensus_pubkey: number[], new_consensus_pubkey: number[]) {
        this.pool_address = pool_address;
        this.old_consensus_pubkey = old_consensus_pubkey;
        this.new_consensus_pubkey = new_consensus_pubkey;
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
        return RotateConsensusKey.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RotateConsensusKey.from_bcs_vector(args)
    }

    get_bcs() {
        return RotateConsensusKey.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RotateConsensusKey`
    }

    from(arg: RotateConsensusKey) {
        this.pool_address = arg.pool_address;
        this.old_consensus_pubkey = arg.old_consensus_pubkey;
        this.new_consensus_pubkey = arg.new_consensus_pubkey;
    }

    static from_bcs(arg: {
        pool_address: string,
        old_consensus_pubkey: number[],
        new_consensus_pubkey: number[]
    }): RotateConsensusKey {
        return new RotateConsensusKey(arg.pool_address, arg.old_consensus_pubkey, arg.new_consensus_pubkey)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        old_consensus_pubkey: number[],
        new_consensus_pubkey: number[]
    } []): RotateConsensusKey[] {
        return args.map(function(arg) {
            return new RotateConsensusKey(arg.pool_address, arg.old_consensus_pubkey, arg.new_consensus_pubkey)
        })
    }

    static get bcs() {
        return bcs_import.struct("RotateConsensusKey", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            old_consensus_pubkey: bcs_import.vector(bcs_import.u8()),
            new_consensus_pubkey: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RotateConsensusKey(val.pool_address, val.old_consensus_pubkey, val.new_consensus_pubkey),
        });
    };
}

/* ============================== RotateConsensusKeyEvent =============================== */

export class RotateConsensusKeyEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RotateConsensusKeyEvent`;

    pool_address: string;
    old_consensus_pubkey: number[];
    new_consensus_pubkey: number[];

    constructor(pool_address: string, old_consensus_pubkey: number[], new_consensus_pubkey: number[]) {
        this.pool_address = pool_address;
        this.old_consensus_pubkey = old_consensus_pubkey;
        this.new_consensus_pubkey = new_consensus_pubkey;
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
        return RotateConsensusKeyEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RotateConsensusKeyEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return RotateConsensusKeyEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RotateConsensusKeyEvent`
    }

    from(arg: RotateConsensusKeyEvent) {
        this.pool_address = arg.pool_address;
        this.old_consensus_pubkey = arg.old_consensus_pubkey;
        this.new_consensus_pubkey = arg.new_consensus_pubkey;
    }

    static from_bcs(arg: {
        pool_address: string,
        old_consensus_pubkey: number[],
        new_consensus_pubkey: number[]
    }): RotateConsensusKeyEvent {
        return new RotateConsensusKeyEvent(arg.pool_address, arg.old_consensus_pubkey, arg.new_consensus_pubkey)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        old_consensus_pubkey: number[],
        new_consensus_pubkey: number[]
    } []): RotateConsensusKeyEvent[] {
        return args.map(function(arg) {
            return new RotateConsensusKeyEvent(arg.pool_address, arg.old_consensus_pubkey, arg.new_consensus_pubkey)
        })
    }

    static get bcs() {
        return bcs_import.struct("RotateConsensusKeyEvent", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            old_consensus_pubkey: bcs_import.vector(bcs_import.u8()),
            new_consensus_pubkey: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RotateConsensusKeyEvent(val.pool_address, val.old_consensus_pubkey, val.new_consensus_pubkey),
        });
    };
}

/* ============================== SetOperator =============================== */

export class SetOperator implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SetOperator`;

    pool_address: string;
    old_operator: string;
    new_operator: string;

    constructor(pool_address: string, old_operator: string, new_operator: string) {
        this.pool_address = pool_address;
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
        return SetOperator.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SetOperator.from_bcs_vector(args)
    }

    get_bcs() {
        return SetOperator.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SetOperator`
    }

    from(arg: SetOperator) {
        this.pool_address = arg.pool_address;
        this.old_operator = arg.old_operator;
        this.new_operator = arg.new_operator;
    }

    static from_bcs(arg: {
        pool_address: string,
        old_operator: string,
        new_operator: string
    }): SetOperator {
        return new SetOperator(arg.pool_address, arg.old_operator, arg.new_operator)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        old_operator: string,
        new_operator: string
    } []): SetOperator[] {
        return args.map(function(arg) {
            return new SetOperator(arg.pool_address, arg.old_operator, arg.new_operator)
        })
    }

    static get bcs() {
        return bcs_import.struct("SetOperator", {
            pool_address: bcs_import.bytes(32).transform({
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
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new SetOperator(val.pool_address, val.old_operator, val.new_operator),
        });
    };
}

/* ============================== SetOperatorEvent =============================== */

export class SetOperatorEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SetOperatorEvent`;

    pool_address: string;
    old_operator: string;
    new_operator: string;

    constructor(pool_address: string, old_operator: string, new_operator: string) {
        this.pool_address = pool_address;
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
        return SetOperatorEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SetOperatorEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return SetOperatorEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SetOperatorEvent`
    }

    from(arg: SetOperatorEvent) {
        this.pool_address = arg.pool_address;
        this.old_operator = arg.old_operator;
        this.new_operator = arg.new_operator;
    }

    static from_bcs(arg: {
        pool_address: string,
        old_operator: string,
        new_operator: string
    }): SetOperatorEvent {
        return new SetOperatorEvent(arg.pool_address, arg.old_operator, arg.new_operator)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        old_operator: string,
        new_operator: string
    } []): SetOperatorEvent[] {
        return args.map(function(arg) {
            return new SetOperatorEvent(arg.pool_address, arg.old_operator, arg.new_operator)
        })
    }

    static get bcs() {
        return bcs_import.struct("SetOperatorEvent", {
            pool_address: bcs_import.bytes(32).transform({
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
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new SetOperatorEvent(val.pool_address, val.old_operator, val.new_operator),
        });
    };
}

/* ============================== StakePool =============================== */

export class StakePool implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::StakePool`;

    active: Coin;
    inactive: Coin;
    pending_active: Coin;
    pending_inactive: Coin;
    locked_until_secs: u64_import;
    operator_address: string;
    delegated_voter: string;
    initialize_validator_events: EventHandle;
    set_operator_events: EventHandle;
    add_stake_events: EventHandle;
    reactivate_stake_events: EventHandle;
    rotate_consensus_key_events: EventHandle;
    update_network_and_fullnode_addresses_events: EventHandle;
    increase_lockup_events: EventHandle;
    join_validator_set_events: EventHandle;
    distribute_rewards_events: EventHandle;
    unlock_stake_events: EventHandle;
    withdraw_stake_events: EventHandle;
    leave_validator_set_events: EventHandle;

    constructor(active ? : Coin, inactive ? : Coin, pending_active ? : Coin, pending_inactive ? : Coin, locked_until_secs ? : u64_import, operator_address ? : string, delegated_voter ? : string, initialize_validator_events ? : EventHandle, set_operator_events ? : EventHandle, add_stake_events ? : EventHandle, reactivate_stake_events ? : EventHandle, rotate_consensus_key_events ? : EventHandle, update_network_and_fullnode_addresses_events ? : EventHandle, increase_lockup_events ? : EventHandle, join_validator_set_events ? : EventHandle, distribute_rewards_events ? : EventHandle, unlock_stake_events ? : EventHandle, withdraw_stake_events ? : EventHandle, leave_validator_set_events ? : EventHandle) {
        this.active = active;
        this.inactive = inactive;
        this.pending_active = pending_active;
        this.pending_inactive = pending_inactive;
        this.locked_until_secs = locked_until_secs;
        this.operator_address = operator_address;
        this.delegated_voter = delegated_voter;
        this.initialize_validator_events = initialize_validator_events;
        this.set_operator_events = set_operator_events;
        this.add_stake_events = add_stake_events;
        this.reactivate_stake_events = reactivate_stake_events;
        this.rotate_consensus_key_events = rotate_consensus_key_events;
        this.update_network_and_fullnode_addresses_events = update_network_and_fullnode_addresses_events;
        this.increase_lockup_events = increase_lockup_events;
        this.join_validator_set_events = join_validator_set_events;
        this.distribute_rewards_events = distribute_rewards_events;
        this.unlock_stake_events = unlock_stake_events;
        this.withdraw_stake_events = withdraw_stake_events;
        this.leave_validator_set_events = leave_validator_set_events;
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
        return StakePool.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return StakePool.from_bcs_vector(args)
    }

    get_bcs() {
        return StakePool.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::StakePool`
    }

    from(arg: StakePool) {
        this.active = arg.active;
        this.inactive = arg.inactive;
        this.pending_active = arg.pending_active;
        this.pending_inactive = arg.pending_inactive;
        this.locked_until_secs = arg.locked_until_secs;
        this.operator_address = arg.operator_address;
        this.delegated_voter = arg.delegated_voter;
        this.initialize_validator_events = arg.initialize_validator_events;
        this.set_operator_events = arg.set_operator_events;
        this.add_stake_events = arg.add_stake_events;
        this.reactivate_stake_events = arg.reactivate_stake_events;
        this.rotate_consensus_key_events = arg.rotate_consensus_key_events;
        this.update_network_and_fullnode_addresses_events = arg.update_network_and_fullnode_addresses_events;
        this.increase_lockup_events = arg.increase_lockup_events;
        this.join_validator_set_events = arg.join_validator_set_events;
        this.distribute_rewards_events = arg.distribute_rewards_events;
        this.unlock_stake_events = arg.unlock_stake_events;
        this.withdraw_stake_events = arg.withdraw_stake_events;
        this.leave_validator_set_events = arg.leave_validator_set_events;
    }

    static from_bcs(arg: {
        active: Coin,
        inactive: Coin,
        pending_active: Coin,
        pending_inactive: Coin,
        locked_until_secs: u64_import,
        operator_address: string,
        delegated_voter: string,
        initialize_validator_events: EventHandle,
        set_operator_events: EventHandle,
        add_stake_events: EventHandle,
        reactivate_stake_events: EventHandle,
        rotate_consensus_key_events: EventHandle,
        update_network_and_fullnode_addresses_events: EventHandle,
        increase_lockup_events: EventHandle,
        join_validator_set_events: EventHandle,
        distribute_rewards_events: EventHandle,
        unlock_stake_events: EventHandle,
        withdraw_stake_events: EventHandle,
        leave_validator_set_events: EventHandle
    }): StakePool {
        return new StakePool(arg.active, arg.inactive, arg.pending_active, arg.pending_inactive, arg.locked_until_secs, arg.operator_address, arg.delegated_voter, arg.initialize_validator_events, arg.set_operator_events, arg.add_stake_events, arg.reactivate_stake_events, arg.rotate_consensus_key_events, arg.update_network_and_fullnode_addresses_events, arg.increase_lockup_events, arg.join_validator_set_events, arg.distribute_rewards_events, arg.unlock_stake_events, arg.withdraw_stake_events, arg.leave_validator_set_events)
    }

    static from_bcs_vector(args: {
        active: Coin,
        inactive: Coin,
        pending_active: Coin,
        pending_inactive: Coin,
        locked_until_secs: u64_import,
        operator_address: string,
        delegated_voter: string,
        initialize_validator_events: EventHandle,
        set_operator_events: EventHandle,
        add_stake_events: EventHandle,
        reactivate_stake_events: EventHandle,
        rotate_consensus_key_events: EventHandle,
        update_network_and_fullnode_addresses_events: EventHandle,
        increase_lockup_events: EventHandle,
        join_validator_set_events: EventHandle,
        distribute_rewards_events: EventHandle,
        unlock_stake_events: EventHandle,
        withdraw_stake_events: EventHandle,
        leave_validator_set_events: EventHandle
    } []): StakePool[] {
        return args.map(function(arg) {
            return new StakePool(arg.active, arg.inactive, arg.pending_active, arg.pending_inactive, arg.locked_until_secs, arg.operator_address, arg.delegated_voter, arg.initialize_validator_events, arg.set_operator_events, arg.add_stake_events, arg.reactivate_stake_events, arg.rotate_consensus_key_events, arg.update_network_and_fullnode_addresses_events, arg.increase_lockup_events, arg.join_validator_set_events, arg.distribute_rewards_events, arg.unlock_stake_events, arg.withdraw_stake_events, arg.leave_validator_set_events)
        })
    }

    static get bcs() {
        return bcs_import.struct("StakePool", {
            active: Coin.bcs,
            inactive: Coin.bcs,
            pending_active: Coin.bcs,
            pending_inactive: Coin.bcs,
            locked_until_secs: bcs_import.u64(),
            operator_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            delegated_voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            initialize_validator_events: EventHandle.bcs,
            set_operator_events: EventHandle.bcs,
            add_stake_events: EventHandle.bcs,
            reactivate_stake_events: EventHandle.bcs,
            rotate_consensus_key_events: EventHandle.bcs,
            update_network_and_fullnode_addresses_events: EventHandle.bcs,
            increase_lockup_events: EventHandle.bcs,
            join_validator_set_events: EventHandle.bcs,
            distribute_rewards_events: EventHandle.bcs,
            unlock_stake_events: EventHandle.bcs,
            withdraw_stake_events: EventHandle.bcs,
            leave_validator_set_events: EventHandle.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new StakePool(val.active, val.inactive, val.pending_active, val.pending_inactive, val.locked_until_secs, val.operator_address, val.delegated_voter, val.initialize_validator_events, val.set_operator_events, val.add_stake_events, val.reactivate_stake_events, val.rotate_consensus_key_events, val.update_network_and_fullnode_addresses_events, val.increase_lockup_events, val.join_validator_set_events, val.distribute_rewards_events, val.unlock_stake_events, val.withdraw_stake_events, val.leave_validator_set_events),
        });
    };
}

/* ============================== UnlockStake =============================== */

export class UnlockStake implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UnlockStake`;

    pool_address: string;
    amount_unlocked: u64_import;

    constructor(pool_address: string, amount_unlocked: u64_import) {
        this.pool_address = pool_address;
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
        this.amount_unlocked = arg.amount_unlocked;
    }

    static from_bcs(arg: {
        pool_address: string,
        amount_unlocked: u64_import
    }): UnlockStake {
        return new UnlockStake(arg.pool_address, arg.amount_unlocked)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        amount_unlocked: u64_import
    } []): UnlockStake[] {
        return args.map(function(arg) {
            return new UnlockStake(arg.pool_address, arg.amount_unlocked)
        })
    }

    static get bcs() {
        return bcs_import.struct("UnlockStake", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount_unlocked: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UnlockStake(val.pool_address, val.amount_unlocked),
        });
    };
}

/* ============================== UnlockStakeEvent =============================== */

export class UnlockStakeEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UnlockStakeEvent`;

    pool_address: string;
    amount_unlocked: u64_import;

    constructor(pool_address: string, amount_unlocked: u64_import) {
        this.pool_address = pool_address;
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
        this.amount_unlocked = arg.amount_unlocked;
    }

    static from_bcs(arg: {
        pool_address: string,
        amount_unlocked: u64_import
    }): UnlockStakeEvent {
        return new UnlockStakeEvent(arg.pool_address, arg.amount_unlocked)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        amount_unlocked: u64_import
    } []): UnlockStakeEvent[] {
        return args.map(function(arg) {
            return new UnlockStakeEvent(arg.pool_address, arg.amount_unlocked)
        })
    }

    static get bcs() {
        return bcs_import.struct("UnlockStakeEvent", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount_unlocked: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UnlockStakeEvent(val.pool_address, val.amount_unlocked),
        });
    };
}

/* ============================== UpdateNetworkAndFullnodeAddresses =============================== */

export class UpdateNetworkAndFullnodeAddresses implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpdateNetworkAndFullnodeAddresses`;

    pool_address: string;
    old_network_addresses: number[];
    new_network_addresses: number[];
    old_fullnode_addresses: number[];
    new_fullnode_addresses: number[];

    constructor(pool_address: string, old_network_addresses: number[], new_network_addresses: number[], old_fullnode_addresses: number[], new_fullnode_addresses: number[]) {
        this.pool_address = pool_address;
        this.old_network_addresses = old_network_addresses;
        this.new_network_addresses = new_network_addresses;
        this.old_fullnode_addresses = old_fullnode_addresses;
        this.new_fullnode_addresses = new_fullnode_addresses;
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
        return UpdateNetworkAndFullnodeAddresses.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UpdateNetworkAndFullnodeAddresses.from_bcs_vector(args)
    }

    get_bcs() {
        return UpdateNetworkAndFullnodeAddresses.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UpdateNetworkAndFullnodeAddresses`
    }

    from(arg: UpdateNetworkAndFullnodeAddresses) {
        this.pool_address = arg.pool_address;
        this.old_network_addresses = arg.old_network_addresses;
        this.new_network_addresses = arg.new_network_addresses;
        this.old_fullnode_addresses = arg.old_fullnode_addresses;
        this.new_fullnode_addresses = arg.new_fullnode_addresses;
    }

    static from_bcs(arg: {
        pool_address: string,
        old_network_addresses: number[],
        new_network_addresses: number[],
        old_fullnode_addresses: number[],
        new_fullnode_addresses: number[]
    }): UpdateNetworkAndFullnodeAddresses {
        return new UpdateNetworkAndFullnodeAddresses(arg.pool_address, arg.old_network_addresses, arg.new_network_addresses, arg.old_fullnode_addresses, arg.new_fullnode_addresses)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        old_network_addresses: number[],
        new_network_addresses: number[],
        old_fullnode_addresses: number[],
        new_fullnode_addresses: number[]
    } []): UpdateNetworkAndFullnodeAddresses[] {
        return args.map(function(arg) {
            return new UpdateNetworkAndFullnodeAddresses(arg.pool_address, arg.old_network_addresses, arg.new_network_addresses, arg.old_fullnode_addresses, arg.new_fullnode_addresses)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpdateNetworkAndFullnodeAddresses", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            old_network_addresses: bcs_import.vector(bcs_import.u8()),
            new_network_addresses: bcs_import.vector(bcs_import.u8()),
            old_fullnode_addresses: bcs_import.vector(bcs_import.u8()),
            new_fullnode_addresses: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UpdateNetworkAndFullnodeAddresses(val.pool_address, val.old_network_addresses, val.new_network_addresses, val.old_fullnode_addresses, val.new_fullnode_addresses),
        });
    };
}

/* ============================== UpdateNetworkAndFullnodeAddressesEvent =============================== */

export class UpdateNetworkAndFullnodeAddressesEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpdateNetworkAndFullnodeAddressesEvent`;

    pool_address: string;
    old_network_addresses: number[];
    new_network_addresses: number[];
    old_fullnode_addresses: number[];
    new_fullnode_addresses: number[];

    constructor(pool_address: string, old_network_addresses: number[], new_network_addresses: number[], old_fullnode_addresses: number[], new_fullnode_addresses: number[]) {
        this.pool_address = pool_address;
        this.old_network_addresses = old_network_addresses;
        this.new_network_addresses = new_network_addresses;
        this.old_fullnode_addresses = old_fullnode_addresses;
        this.new_fullnode_addresses = new_fullnode_addresses;
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
        return UpdateNetworkAndFullnodeAddressesEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UpdateNetworkAndFullnodeAddressesEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return UpdateNetworkAndFullnodeAddressesEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UpdateNetworkAndFullnodeAddressesEvent`
    }

    from(arg: UpdateNetworkAndFullnodeAddressesEvent) {
        this.pool_address = arg.pool_address;
        this.old_network_addresses = arg.old_network_addresses;
        this.new_network_addresses = arg.new_network_addresses;
        this.old_fullnode_addresses = arg.old_fullnode_addresses;
        this.new_fullnode_addresses = arg.new_fullnode_addresses;
    }

    static from_bcs(arg: {
        pool_address: string,
        old_network_addresses: number[],
        new_network_addresses: number[],
        old_fullnode_addresses: number[],
        new_fullnode_addresses: number[]
    }): UpdateNetworkAndFullnodeAddressesEvent {
        return new UpdateNetworkAndFullnodeAddressesEvent(arg.pool_address, arg.old_network_addresses, arg.new_network_addresses, arg.old_fullnode_addresses, arg.new_fullnode_addresses)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        old_network_addresses: number[],
        new_network_addresses: number[],
        old_fullnode_addresses: number[],
        new_fullnode_addresses: number[]
    } []): UpdateNetworkAndFullnodeAddressesEvent[] {
        return args.map(function(arg) {
            return new UpdateNetworkAndFullnodeAddressesEvent(arg.pool_address, arg.old_network_addresses, arg.new_network_addresses, arg.old_fullnode_addresses, arg.new_fullnode_addresses)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpdateNetworkAndFullnodeAddressesEvent", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            old_network_addresses: bcs_import.vector(bcs_import.u8()),
            new_network_addresses: bcs_import.vector(bcs_import.u8()),
            old_fullnode_addresses: bcs_import.vector(bcs_import.u8()),
            new_fullnode_addresses: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UpdateNetworkAndFullnodeAddressesEvent(val.pool_address, val.old_network_addresses, val.new_network_addresses, val.old_fullnode_addresses, val.new_fullnode_addresses),
        });
    };
}

/* ============================== ValidatorConfig =============================== */

export class ValidatorConfig implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ValidatorConfig`;

    consensus_pubkey: number[];
    network_addresses: number[];
    fullnode_addresses: number[];
    validator_index: u64_import;

    constructor(consensus_pubkey ? : number[], network_addresses ? : number[], fullnode_addresses ? : number[], validator_index ? : u64_import) {
        this.consensus_pubkey = consensus_pubkey;
        this.network_addresses = network_addresses;
        this.fullnode_addresses = fullnode_addresses;
        this.validator_index = validator_index;
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
        return ValidatorConfig.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ValidatorConfig.from_bcs_vector(args)
    }

    get_bcs() {
        return ValidatorConfig.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ValidatorConfig`
    }

    from(arg: ValidatorConfig) {
        this.consensus_pubkey = arg.consensus_pubkey;
        this.network_addresses = arg.network_addresses;
        this.fullnode_addresses = arg.fullnode_addresses;
        this.validator_index = arg.validator_index;
    }

    static from_bcs(arg: {
        consensus_pubkey: number[],
        network_addresses: number[],
        fullnode_addresses: number[],
        validator_index: u64_import
    }): ValidatorConfig {
        return new ValidatorConfig(arg.consensus_pubkey, arg.network_addresses, arg.fullnode_addresses, arg.validator_index)
    }

    static from_bcs_vector(args: {
        consensus_pubkey: number[],
        network_addresses: number[],
        fullnode_addresses: number[],
        validator_index: u64_import
    } []): ValidatorConfig[] {
        return args.map(function(arg) {
            return new ValidatorConfig(arg.consensus_pubkey, arg.network_addresses, arg.fullnode_addresses, arg.validator_index)
        })
    }

    static get bcs() {
        return bcs_import.struct("ValidatorConfig", {
            consensus_pubkey: bcs_import.vector(bcs_import.u8()),
            network_addresses: bcs_import.vector(bcs_import.u8()),
            fullnode_addresses: bcs_import.vector(bcs_import.u8()),
            validator_index: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ValidatorConfig(val.consensus_pubkey, val.network_addresses, val.fullnode_addresses, val.validator_index),
        });
    };
}

/* ============================== ValidatorFees =============================== */

export class ValidatorFees implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ValidatorFees`;

    fees_table: Table;

    constructor(fees_table ? : Table) {
        this.fees_table = fees_table;
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
        return ValidatorFees.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ValidatorFees.from_bcs_vector(args)
    }

    get_bcs() {
        return ValidatorFees.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ValidatorFees`
    }

    from(arg: ValidatorFees) {
        this.fees_table = arg.fees_table;
    }

    static from_bcs(arg: {
        fees_table: Table
    }): ValidatorFees {
        return new ValidatorFees(arg.fees_table)
    }

    static from_bcs_vector(args: {
        fees_table: Table
    } []): ValidatorFees[] {
        return args.map(function(arg) {
            return new ValidatorFees(arg.fees_table)
        })
    }

    static get bcs() {
        return bcs_import.struct("ValidatorFees", {
            fees_table: Table.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ValidatorFees(val.fees_table),
        });
    };
}

/* ============================== ValidatorInfo =============================== */

export class ValidatorInfo implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ValidatorInfo`;

    addr: string;
    voting_power: u64_import;
    config: ValidatorConfig;

    constructor(addr: string, voting_power: u64_import, config: ValidatorConfig) {
        this.addr = addr;
        this.voting_power = voting_power;
        this.config = config;
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
        return ValidatorInfo.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ValidatorInfo.from_bcs_vector(args)
    }

    get_bcs() {
        return ValidatorInfo.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ValidatorInfo`
    }

    from(arg: ValidatorInfo) {
        this.addr = arg.addr;
        this.voting_power = arg.voting_power;
        this.config = arg.config;
    }

    static from_bcs(arg: {
        addr: string,
        voting_power: u64_import,
        config: ValidatorConfig
    }): ValidatorInfo {
        return new ValidatorInfo(arg.addr, arg.voting_power, arg.config)
    }

    static from_bcs_vector(args: {
        addr: string,
        voting_power: u64_import,
        config: ValidatorConfig
    } []): ValidatorInfo[] {
        return args.map(function(arg) {
            return new ValidatorInfo(arg.addr, arg.voting_power, arg.config)
        })
    }

    static get bcs() {
        return bcs_import.struct("ValidatorInfo", {
            addr: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            voting_power: bcs_import.u64(),
            config: ValidatorConfig.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ValidatorInfo(val.addr, val.voting_power, val.config),
        });
    };
}

/* ============================== ValidatorPerformance =============================== */

export class ValidatorPerformance implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ValidatorPerformance`;

    validators: IndividualValidatorPerformance[];

    constructor(validators ? : IndividualValidatorPerformance[]) {
        this.validators = validators;
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
        return ValidatorPerformance.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ValidatorPerformance.from_bcs_vector(args)
    }

    get_bcs() {
        return ValidatorPerformance.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ValidatorPerformance`
    }

    from(arg: ValidatorPerformance) {
        this.validators = arg.validators;
    }

    static from_bcs(arg: {
        validators: IndividualValidatorPerformance[]
    }): ValidatorPerformance {
        return new ValidatorPerformance(arg.validators)
    }

    static from_bcs_vector(args: {
        validators: IndividualValidatorPerformance[]
    } []): ValidatorPerformance[] {
        return args.map(function(arg) {
            return new ValidatorPerformance(arg.validators)
        })
    }

    static get bcs() {
        return bcs_import.struct("ValidatorPerformance", {
            validators: bcs_import.vector(IndividualValidatorPerformance.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ValidatorPerformance(val.validators),
        });
    };
}

/* ============================== ValidatorSet =============================== */

export class ValidatorSet implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ValidatorSet`;

    consensus_scheme: number;
    active_validators: ValidatorInfo[];
    pending_inactive: ValidatorInfo[];
    pending_active: ValidatorInfo[];
    total_voting_power: u64_import;
    total_joining_power: u64_import;

    constructor(consensus_scheme ? : number, active_validators ? : ValidatorInfo[], pending_inactive ? : ValidatorInfo[], pending_active ? : ValidatorInfo[], total_voting_power ? : u64_import, total_joining_power ? : u64_import) {
        this.consensus_scheme = consensus_scheme;
        this.active_validators = active_validators;
        this.pending_inactive = pending_inactive;
        this.pending_active = pending_active;
        this.total_voting_power = total_voting_power;
        this.total_joining_power = total_joining_power;
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
        return ValidatorSet.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ValidatorSet.from_bcs_vector(args)
    }

    get_bcs() {
        return ValidatorSet.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ValidatorSet`
    }

    from(arg: ValidatorSet) {
        this.consensus_scheme = arg.consensus_scheme;
        this.active_validators = arg.active_validators;
        this.pending_inactive = arg.pending_inactive;
        this.pending_active = arg.pending_active;
        this.total_voting_power = arg.total_voting_power;
        this.total_joining_power = arg.total_joining_power;
    }

    static from_bcs(arg: {
        consensus_scheme: number,
        active_validators: ValidatorInfo[],
        pending_inactive: ValidatorInfo[],
        pending_active: ValidatorInfo[],
        total_voting_power: u64_import,
        total_joining_power: u64_import
    }): ValidatorSet {
        return new ValidatorSet(arg.consensus_scheme, arg.active_validators, arg.pending_inactive, arg.pending_active, arg.total_voting_power, arg.total_joining_power)
    }

    static from_bcs_vector(args: {
        consensus_scheme: number,
        active_validators: ValidatorInfo[],
        pending_inactive: ValidatorInfo[],
        pending_active: ValidatorInfo[],
        total_voting_power: u64_import,
        total_joining_power: u64_import
    } []): ValidatorSet[] {
        return args.map(function(arg) {
            return new ValidatorSet(arg.consensus_scheme, arg.active_validators, arg.pending_inactive, arg.pending_active, arg.total_voting_power, arg.total_joining_power)
        })
    }

    static get bcs() {
        return bcs_import.struct("ValidatorSet", {
            consensus_scheme: bcs_import.u8(),
            active_validators: bcs_import.vector(ValidatorInfo.bcs),
            pending_inactive: bcs_import.vector(ValidatorInfo.bcs),
            pending_active: bcs_import.vector(ValidatorInfo.bcs),
            total_voting_power: bcs_import.u128(),
            total_joining_power: bcs_import.u128(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ValidatorSet(val.consensus_scheme, val.active_validators, val.pending_inactive, val.pending_active, val.total_voting_power, val.total_joining_power),
        });
    };
}

/* ============================== WithdrawStake =============================== */

export class WithdrawStake implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::WithdrawStake`;

    pool_address: string;
    amount_withdrawn: u64_import;

    constructor(pool_address: string, amount_withdrawn: u64_import) {
        this.pool_address = pool_address;
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
        this.amount_withdrawn = arg.amount_withdrawn;
    }

    static from_bcs(arg: {
        pool_address: string,
        amount_withdrawn: u64_import
    }): WithdrawStake {
        return new WithdrawStake(arg.pool_address, arg.amount_withdrawn)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        amount_withdrawn: u64_import
    } []): WithdrawStake[] {
        return args.map(function(arg) {
            return new WithdrawStake(arg.pool_address, arg.amount_withdrawn)
        })
    }

    static get bcs() {
        return bcs_import.struct("WithdrawStake", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount_withdrawn: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new WithdrawStake(val.pool_address, val.amount_withdrawn),
        });
    };
}

/* ============================== WithdrawStakeEvent =============================== */

export class WithdrawStakeEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::WithdrawStakeEvent`;

    pool_address: string;
    amount_withdrawn: u64_import;

    constructor(pool_address: string, amount_withdrawn: u64_import) {
        this.pool_address = pool_address;
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
        this.amount_withdrawn = arg.amount_withdrawn;
    }

    static from_bcs(arg: {
        pool_address: string,
        amount_withdrawn: u64_import
    }): WithdrawStakeEvent {
        return new WithdrawStakeEvent(arg.pool_address, arg.amount_withdrawn)
    }

    static from_bcs_vector(args: {
        pool_address: string,
        amount_withdrawn: u64_import
    } []): WithdrawStakeEvent[] {
        return args.map(function(arg) {
            return new WithdrawStakeEvent(arg.pool_address, arg.amount_withdrawn)
        })
    }

    static get bcs() {
        return bcs_import.struct("WithdrawStakeEvent", {
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount_withdrawn: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new WithdrawStakeEvent(val.pool_address, val.amount_withdrawn),
        });
    };
}

function append < T0 extends StructClass > (type_args: string[], arg0: T0[], arg1: T0[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "append", type_args, args);
    copy_arr_value(into_arr_bcs_vector(arg0).parse(new Uint8Array(a0.Raw[0])), arg0);
    copy_arr_value(into_arr_bcs_vector(arg1).parse(new Uint8Array(a1.Raw[0])), arg1);
}

function on_new_epoch() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "on_new_epoch", [], args);

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

function withdraw(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "withdraw", [], args);

}

function add_stake(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_stake", [], args);

}

function add_stake_with_cap(arg0: OwnerCapability, arg1: Coin) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(OwnerCapability.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Coin.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_stake_with_cap", [], args);

}

function add_transaction_fee(arg0: string, arg1: Coin) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Coin.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_transaction_fee", [], args);

}

function addresses_from_validator_infos(arg0: ValidatorInfo[]): [string[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(ValidatorInfo.bcs).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "addresses_from_validator_infos", [], args);

    return [
        bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).parse(new Uint8Array(r0.Raw[0]))
    ];
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

function assert_reconfig_not_in_progress() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_reconfig_not_in_progress", [], args);

}

function assert_stake_pool_exists(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_stake_pool_exists", [], args);

}

function calculate_rewards_amount(arg0: u64_import, arg1: u64_import, arg2: u64_import, arg3: u64_import, arg4: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "calculate_rewards_amount", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function configure_allowed_validators(arg0: string, arg1: string[]) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "configure_allowed_validators", [], args);

}

function cur_validator_consensus_infos(): [ValidatorConsensusInfo[]] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "cur_validator_consensus_infos", [], args);

    return [
        ValidatorConsensusInfo.from_bcs_vector(bcs_import.vector(ValidatorConsensusInfo.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function deposit_owner_cap(arg0: string, arg1: OwnerCapability) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(OwnerCapability.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deposit_owner_cap", [], args);

}

function destroy_owner_cap(arg0: OwnerCapability) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(OwnerCapability.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_owner_cap", [], args);

}

function distribute_rewards(arg0: Coin, arg1: u64_import, arg2: u64_import, arg3: u64_import, arg4: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Coin.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "distribute_rewards", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function extract_owner_cap(arg0: string): [OwnerCapability] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "extract_owner_cap", [], args);

    return [
        OwnerCapability.from_bcs(OwnerCapability.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function find_validator(arg0: ValidatorInfo[], arg1: string): [Option < u64_import > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(ValidatorInfo.bcs).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "find_validator", [], args);

    return [
        Option.from_bcs(Option.bcs(bcs_import.u64()).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function generate_validator_info(arg0: string, arg1: StakePool, arg2: ValidatorConfig): [ValidatorInfo] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(StakePool.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(ValidatorConfig.bcs.serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_validator_info", [], args);

    return [
        ValidatorInfo.from_bcs(ValidatorInfo.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function get_current_epoch_proposal_counts(arg0: u64_import): [u64_import, u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_current_epoch_proposal_counts", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r1.Raw[0]))
    ];
}

function get_current_epoch_voting_power(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_current_epoch_voting_power", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_delegated_voter(arg0: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_delegated_voter", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_lockup_secs(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_lockup_secs", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_next_epoch_voting_power(arg0: StakePool): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(StakePool.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_next_epoch_voting_power", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_operator(arg0: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_operator", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_owned_pool_address(arg0: OwnerCapability): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(OwnerCapability.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_owned_pool_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_reconfig_start_time_secs(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_reconfig_start_time_secs", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_remaining_lockup_secs(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_remaining_lockup_secs", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_stake(arg0: string): [u64_import, u64_import, u64_import, u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0, r1, r2, r3] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_stake", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r1.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r2.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r3.Raw[0]))
    ];
}

function get_validator_config(arg0: string): [number[], number[], number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0, r1, r2] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_validator_config", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0])),
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r1.Raw[0])),
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r2.Raw[0]))
    ];
}

function get_validator_index(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_validator_index", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_validator_state(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_validator_state", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function increase_lockup(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "increase_lockup", [], args);

}

function increase_lockup_with_cap(arg0: OwnerCapability) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(OwnerCapability.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "increase_lockup_with_cap", [], args);

}

function initialize_owner(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_owner", [], args);

}

function initialize_stake_owner(arg0: string, arg1: u64_import, arg2: string, arg3: string) {
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
        }).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_stake_owner", [], args);

}

function initialize_validator(arg0: string, arg1: number[], arg2: number[], arg3: number[], arg4: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg4).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_validator", [], args);

}

function initialize_validator_fees(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_validator_fees", [], args);

}

function is_allowed(arg0: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_allowed", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function is_current_epoch_validator(arg0: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_current_epoch_validator", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function join_validator_set(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "join_validator_set", [], args);

}

function join_validator_set_internal(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "join_validator_set_internal", [], args);

}

function leave_validator_set(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "leave_validator_set", [], args);

}

function next_validator_consensus_infos(): [ValidatorConsensusInfo[]] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_validator_consensus_infos", [], args);

    return [
        ValidatorConsensusInfo.from_bcs_vector(bcs_import.vector(ValidatorConsensusInfo.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function reactivate_stake(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "reactivate_stake", [], args);

}

function reactivate_stake_with_cap(arg0: OwnerCapability, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(OwnerCapability.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "reactivate_stake_with_cap", [], args);

}

function remove_validators(arg0: string, arg1: string[]) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_validators", [], args);

}

function rotate_consensus_key(arg0: string, arg1: string, arg2: number[], arg3: number[]) {
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
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "rotate_consensus_key", [], args);

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

function set_delegated_voter_with_cap(arg0: OwnerCapability, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(OwnerCapability.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_delegated_voter_with_cap", [], args);

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

function set_operator_with_cap(arg0: OwnerCapability, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(OwnerCapability.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_operator_with_cap", [], args);

}

function stake_pool_exists(arg0: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "stake_pool_exists", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function store_aptos_coin_mint_cap(arg0: string, arg1: MintCapability) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(MintCapability.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "store_aptos_coin_mint_cap", [], args);

}

function unlock(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unlock", [], args);

}

function unlock_with_cap(arg0: u64_import, arg1: OwnerCapability) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(OwnerCapability.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unlock_with_cap", [], args);

}

function update_network_and_fullnode_addresses(arg0: string, arg1: string, arg2: number[], arg3: number[]) {
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
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_network_and_fullnode_addresses", [], args);

}

function update_performance_statistics(arg0: Option < u64_import > , arg1: u64_import[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Option.bcs(bcs_import.u64()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u64()).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_performance_statistics", [], args);

}

function update_stake_pool(arg0: ValidatorPerformance, arg1: string, arg2: StakingConfig) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ValidatorPerformance.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(StakingConfig.bcs.serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_stake_pool", [], args);

}

function update_voting_power_increase(arg0: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_voting_power_increase", [], args);

}

function validator_consensus_infos_from_validator_set(arg0: ValidatorSet): [ValidatorConsensusInfo[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ValidatorSet.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "validator_consensus_infos_from_validator_set", [], args);

    return [
        ValidatorConsensusInfo.from_bcs_vector(bcs_import.vector(ValidatorConsensusInfo.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function withdraw_with_cap(arg0: OwnerCapability, arg1: u64_import): [Coin] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(OwnerCapability.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "withdraw_with_cap", [], args);

    return [
        Coin.from_bcs(Coin.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const stake = {
    AddStake,
    AddStakeEvent,
    AllowedValidators,
    AptosCoinCapabilities,
    DistributeRewards,
    DistributeRewardsEvent,
    IncreaseLockup,
    IncreaseLockupEvent,
    IndividualValidatorPerformance,
    JoinValidatorSet,
    JoinValidatorSetEvent,
    LeaveValidatorSet,
    LeaveValidatorSetEvent,
    OwnerCapability,
    ReactivateStake,
    ReactivateStakeEvent,
    RegisterValidatorCandidate,
    RegisterValidatorCandidateEvent,
    RotateConsensusKey,
    RotateConsensusKeyEvent,
    SetOperator,
    SetOperatorEvent,
    StakePool,
    UnlockStake,
    UnlockStakeEvent,
    UpdateNetworkAndFullnodeAddresses,
    UpdateNetworkAndFullnodeAddressesEvent,
    ValidatorConfig,
    ValidatorFees,
    ValidatorInfo,
    ValidatorPerformance,
    ValidatorSet,
    WithdrawStake,
    WithdrawStakeEvent,
    append,
    on_new_epoch,
    initialize,
    withdraw,
    add_stake,
    add_stake_with_cap,
    add_transaction_fee,
    addresses_from_validator_infos,
    assert_owner_cap_exists,
    assert_reconfig_not_in_progress,
    assert_stake_pool_exists,
    calculate_rewards_amount,
    configure_allowed_validators,
    cur_validator_consensus_infos,
    deposit_owner_cap,
    destroy_owner_cap,
    distribute_rewards,
    extract_owner_cap,
    find_validator,
    generate_validator_info,
    get_current_epoch_proposal_counts,
    get_current_epoch_voting_power,
    get_delegated_voter,
    get_lockup_secs,
    get_next_epoch_voting_power,
    get_operator,
    get_owned_pool_address,
    get_reconfig_start_time_secs,
    get_remaining_lockup_secs,
    get_stake,
    get_validator_config,
    get_validator_index,
    get_validator_state,
    increase_lockup,
    increase_lockup_with_cap,
    initialize_owner,
    initialize_stake_owner,
    initialize_validator,
    initialize_validator_fees,
    is_allowed,
    is_current_epoch_validator,
    join_validator_set,
    join_validator_set_internal,
    leave_validator_set,
    next_validator_consensus_infos,
    reactivate_stake,
    reactivate_stake_with_cap,
    remove_validators,
    rotate_consensus_key,
    set_delegated_voter,
    set_delegated_voter_with_cap,
    set_operator,
    set_operator_with_cap,
    stake_pool_exists,
    store_aptos_coin_mint_cap,
    unlock,
    unlock_with_cap,
    update_network_and_fullnode_addresses,
    update_performance_statistics,
    update_stake_pool,
    update_voting_power_increase,
    validator_consensus_infos_from_validator_set,
    withdraw_with_cap
}