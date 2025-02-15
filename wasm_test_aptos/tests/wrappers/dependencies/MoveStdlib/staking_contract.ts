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
    Pool
} from "./pool_u64";
import {
    SimpleMap
} from "./simple_map";
import {
    OwnerCapability
} from "./stake";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "staking_contract";

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

    operator: string;
    pool_address: string;
    amount: u64_import;

    constructor(operator: string, pool_address: string, amount: u64_import) {
        this.operator = operator;
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
        this.operator = arg.operator;
        this.pool_address = arg.pool_address;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        operator: string,
        pool_address: string,
        amount: u64_import
    }): AddStake {
        return new AddStake(arg.operator, arg.pool_address, arg.amount)
    }

    static from_bcs_vector(args: {
        operator: string,
        pool_address: string,
        amount: u64_import
    } []): AddStake[] {
        return args.map(function(arg) {
            return new AddStake(arg.operator, arg.pool_address, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("AddStake", {
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AddStake(val.operator, val.pool_address, val.amount),
        });
    };
}

/* ============================== AddStakeEvent =============================== */

export class AddStakeEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AddStakeEvent`;

    operator: string;
    pool_address: string;
    amount: u64_import;

    constructor(operator: string, pool_address: string, amount: u64_import) {
        this.operator = operator;
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
        this.operator = arg.operator;
        this.pool_address = arg.pool_address;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        operator: string,
        pool_address: string,
        amount: u64_import
    }): AddStakeEvent {
        return new AddStakeEvent(arg.operator, arg.pool_address, arg.amount)
    }

    static from_bcs_vector(args: {
        operator: string,
        pool_address: string,
        amount: u64_import
    } []): AddStakeEvent[] {
        return args.map(function(arg) {
            return new AddStakeEvent(arg.operator, arg.pool_address, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("AddStakeEvent", {
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AddStakeEvent(val.operator, val.pool_address, val.amount),
        });
    };
}

/* ============================== UnlockStake =============================== */

export class UnlockStake implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UnlockStake`;

    operator: string;
    pool_address: string;
    amount: u64_import;
    commission_paid: u64_import;

    constructor(operator: string, pool_address: string, amount: u64_import, commission_paid: u64_import) {
        this.operator = operator;
        this.pool_address = pool_address;
        this.amount = amount;
        this.commission_paid = commission_paid;
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
        this.operator = arg.operator;
        this.pool_address = arg.pool_address;
        this.amount = arg.amount;
        this.commission_paid = arg.commission_paid;
    }

    static from_bcs(arg: {
        operator: string,
        pool_address: string,
        amount: u64_import,
        commission_paid: u64_import
    }): UnlockStake {
        return new UnlockStake(arg.operator, arg.pool_address, arg.amount, arg.commission_paid)
    }

    static from_bcs_vector(args: {
        operator: string,
        pool_address: string,
        amount: u64_import,
        commission_paid: u64_import
    } []): UnlockStake[] {
        return args.map(function(arg) {
            return new UnlockStake(arg.operator, arg.pool_address, arg.amount, arg.commission_paid)
        })
    }

    static get bcs() {
        return bcs_import.struct("UnlockStake", {
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
            commission_paid: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UnlockStake(val.operator, val.pool_address, val.amount, val.commission_paid),
        });
    };
}

/* ============================== UnlockStakeEvent =============================== */

export class UnlockStakeEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UnlockStakeEvent`;

    operator: string;
    pool_address: string;
    amount: u64_import;
    commission_paid: u64_import;

    constructor(operator: string, pool_address: string, amount: u64_import, commission_paid: u64_import) {
        this.operator = operator;
        this.pool_address = pool_address;
        this.amount = amount;
        this.commission_paid = commission_paid;
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
        this.operator = arg.operator;
        this.pool_address = arg.pool_address;
        this.amount = arg.amount;
        this.commission_paid = arg.commission_paid;
    }

    static from_bcs(arg: {
        operator: string,
        pool_address: string,
        amount: u64_import,
        commission_paid: u64_import
    }): UnlockStakeEvent {
        return new UnlockStakeEvent(arg.operator, arg.pool_address, arg.amount, arg.commission_paid)
    }

    static from_bcs_vector(args: {
        operator: string,
        pool_address: string,
        amount: u64_import,
        commission_paid: u64_import
    } []): UnlockStakeEvent[] {
        return args.map(function(arg) {
            return new UnlockStakeEvent(arg.operator, arg.pool_address, arg.amount, arg.commission_paid)
        })
    }

    static get bcs() {
        return bcs_import.struct("UnlockStakeEvent", {
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
            commission_paid: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UnlockStakeEvent(val.operator, val.pool_address, val.amount, val.commission_paid),
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

/* ============================== AddDistribution =============================== */

export class AddDistribution implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AddDistribution`;

    operator: string;
    pool_address: string;
    amount: u64_import;

    constructor(operator: string, pool_address: string, amount: u64_import) {
        this.operator = operator;
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
        return AddDistribution.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AddDistribution.from_bcs_vector(args)
    }

    get_bcs() {
        return AddDistribution.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AddDistribution`
    }

    from(arg: AddDistribution) {
        this.operator = arg.operator;
        this.pool_address = arg.pool_address;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        operator: string,
        pool_address: string,
        amount: u64_import
    }): AddDistribution {
        return new AddDistribution(arg.operator, arg.pool_address, arg.amount)
    }

    static from_bcs_vector(args: {
        operator: string,
        pool_address: string,
        amount: u64_import
    } []): AddDistribution[] {
        return args.map(function(arg) {
            return new AddDistribution(arg.operator, arg.pool_address, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("AddDistribution", {
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AddDistribution(val.operator, val.pool_address, val.amount),
        });
    };
}

/* ============================== AddDistributionEvent =============================== */

export class AddDistributionEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AddDistributionEvent`;

    operator: string;
    pool_address: string;
    amount: u64_import;

    constructor(operator: string, pool_address: string, amount: u64_import) {
        this.operator = operator;
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
        return AddDistributionEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AddDistributionEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return AddDistributionEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AddDistributionEvent`
    }

    from(arg: AddDistributionEvent) {
        this.operator = arg.operator;
        this.pool_address = arg.pool_address;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        operator: string,
        pool_address: string,
        amount: u64_import
    }): AddDistributionEvent {
        return new AddDistributionEvent(arg.operator, arg.pool_address, arg.amount)
    }

    static from_bcs_vector(args: {
        operator: string,
        pool_address: string,
        amount: u64_import
    } []): AddDistributionEvent[] {
        return args.map(function(arg) {
            return new AddDistributionEvent(arg.operator, arg.pool_address, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("AddDistributionEvent", {
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AddDistributionEvent(val.operator, val.pool_address, val.amount),
        });
    };
}

/* ============================== CreateStakingContract =============================== */

export class CreateStakingContract implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CreateStakingContract`;

    operator: string;
    voter: string;
    pool_address: string;
    principal: u64_import;
    commission_percentage: u64_import;

    constructor(operator: string, voter: string, pool_address: string, principal: u64_import, commission_percentage: u64_import) {
        this.operator = operator;
        this.voter = voter;
        this.pool_address = pool_address;
        this.principal = principal;
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
        return CreateStakingContract.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CreateStakingContract.from_bcs_vector(args)
    }

    get_bcs() {
        return CreateStakingContract.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CreateStakingContract`
    }

    from(arg: CreateStakingContract) {
        this.operator = arg.operator;
        this.voter = arg.voter;
        this.pool_address = arg.pool_address;
        this.principal = arg.principal;
        this.commission_percentage = arg.commission_percentage;
    }

    static from_bcs(arg: {
        operator: string,
        voter: string,
        pool_address: string,
        principal: u64_import,
        commission_percentage: u64_import
    }): CreateStakingContract {
        return new CreateStakingContract(arg.operator, arg.voter, arg.pool_address, arg.principal, arg.commission_percentage)
    }

    static from_bcs_vector(args: {
        operator: string,
        voter: string,
        pool_address: string,
        principal: u64_import,
        commission_percentage: u64_import
    } []): CreateStakingContract[] {
        return args.map(function(arg) {
            return new CreateStakingContract(arg.operator, arg.voter, arg.pool_address, arg.principal, arg.commission_percentage)
        })
    }

    static get bcs() {
        return bcs_import.struct("CreateStakingContract", {
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            principal: bcs_import.u64(),
            commission_percentage: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CreateStakingContract(val.operator, val.voter, val.pool_address, val.principal, val.commission_percentage),
        });
    };
}

/* ============================== CreateStakingContractEvent =============================== */

export class CreateStakingContractEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CreateStakingContractEvent`;

    operator: string;
    voter: string;
    pool_address: string;
    principal: u64_import;
    commission_percentage: u64_import;

    constructor(operator: string, voter: string, pool_address: string, principal: u64_import, commission_percentage: u64_import) {
        this.operator = operator;
        this.voter = voter;
        this.pool_address = pool_address;
        this.principal = principal;
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
        return CreateStakingContractEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CreateStakingContractEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return CreateStakingContractEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CreateStakingContractEvent`
    }

    from(arg: CreateStakingContractEvent) {
        this.operator = arg.operator;
        this.voter = arg.voter;
        this.pool_address = arg.pool_address;
        this.principal = arg.principal;
        this.commission_percentage = arg.commission_percentage;
    }

    static from_bcs(arg: {
        operator: string,
        voter: string,
        pool_address: string,
        principal: u64_import,
        commission_percentage: u64_import
    }): CreateStakingContractEvent {
        return new CreateStakingContractEvent(arg.operator, arg.voter, arg.pool_address, arg.principal, arg.commission_percentage)
    }

    static from_bcs_vector(args: {
        operator: string,
        voter: string,
        pool_address: string,
        principal: u64_import,
        commission_percentage: u64_import
    } []): CreateStakingContractEvent[] {
        return args.map(function(arg) {
            return new CreateStakingContractEvent(arg.operator, arg.voter, arg.pool_address, arg.principal, arg.commission_percentage)
        })
    }

    static get bcs() {
        return bcs_import.struct("CreateStakingContractEvent", {
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            voter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            principal: bcs_import.u64(),
            commission_percentage: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CreateStakingContractEvent(val.operator, val.voter, val.pool_address, val.principal, val.commission_percentage),
        });
    };
}

/* ============================== Distribute =============================== */

export class Distribute implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Distribute`;

    operator: string;
    pool_address: string;
    recipient: string;
    amount: u64_import;

    constructor(operator: string, pool_address: string, recipient: string, amount: u64_import) {
        this.operator = operator;
        this.pool_address = pool_address;
        this.recipient = recipient;
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
        this.operator = arg.operator;
        this.pool_address = arg.pool_address;
        this.recipient = arg.recipient;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        operator: string,
        pool_address: string,
        recipient: string,
        amount: u64_import
    }): Distribute {
        return new Distribute(arg.operator, arg.pool_address, arg.recipient, arg.amount)
    }

    static from_bcs_vector(args: {
        operator: string,
        pool_address: string,
        recipient: string,
        amount: u64_import
    } []): Distribute[] {
        return args.map(function(arg) {
            return new Distribute(arg.operator, arg.pool_address, arg.recipient, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("Distribute", {
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            recipient: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Distribute(val.operator, val.pool_address, val.recipient, val.amount),
        });
    };
}

/* ============================== DistributeEvent =============================== */

export class DistributeEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DistributeEvent`;

    operator: string;
    pool_address: string;
    recipient: string;
    amount: u64_import;

    constructor(operator: string, pool_address: string, recipient: string, amount: u64_import) {
        this.operator = operator;
        this.pool_address = pool_address;
        this.recipient = recipient;
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
        this.operator = arg.operator;
        this.pool_address = arg.pool_address;
        this.recipient = arg.recipient;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        operator: string,
        pool_address: string,
        recipient: string,
        amount: u64_import
    }): DistributeEvent {
        return new DistributeEvent(arg.operator, arg.pool_address, arg.recipient, arg.amount)
    }

    static from_bcs_vector(args: {
        operator: string,
        pool_address: string,
        recipient: string,
        amount: u64_import
    } []): DistributeEvent[] {
        return args.map(function(arg) {
            return new DistributeEvent(arg.operator, arg.pool_address, arg.recipient, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("DistributeEvent", {
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            recipient: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DistributeEvent(val.operator, val.pool_address, val.recipient, val.amount),
        });
    };
}

/* ============================== RequestCommission =============================== */

export class RequestCommission implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RequestCommission`;

    operator: string;
    pool_address: string;
    accumulated_rewards: u64_import;
    commission_amount: u64_import;

    constructor(operator: string, pool_address: string, accumulated_rewards: u64_import, commission_amount: u64_import) {
        this.operator = operator;
        this.pool_address = pool_address;
        this.accumulated_rewards = accumulated_rewards;
        this.commission_amount = commission_amount;
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
        return RequestCommission.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RequestCommission.from_bcs_vector(args)
    }

    get_bcs() {
        return RequestCommission.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RequestCommission`
    }

    from(arg: RequestCommission) {
        this.operator = arg.operator;
        this.pool_address = arg.pool_address;
        this.accumulated_rewards = arg.accumulated_rewards;
        this.commission_amount = arg.commission_amount;
    }

    static from_bcs(arg: {
        operator: string,
        pool_address: string,
        accumulated_rewards: u64_import,
        commission_amount: u64_import
    }): RequestCommission {
        return new RequestCommission(arg.operator, arg.pool_address, arg.accumulated_rewards, arg.commission_amount)
    }

    static from_bcs_vector(args: {
        operator: string,
        pool_address: string,
        accumulated_rewards: u64_import,
        commission_amount: u64_import
    } []): RequestCommission[] {
        return args.map(function(arg) {
            return new RequestCommission(arg.operator, arg.pool_address, arg.accumulated_rewards, arg.commission_amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("RequestCommission", {
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            accumulated_rewards: bcs_import.u64(),
            commission_amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RequestCommission(val.operator, val.pool_address, val.accumulated_rewards, val.commission_amount),
        });
    };
}

/* ============================== RequestCommissionEvent =============================== */

export class RequestCommissionEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RequestCommissionEvent`;

    operator: string;
    pool_address: string;
    accumulated_rewards: u64_import;
    commission_amount: u64_import;

    constructor(operator: string, pool_address: string, accumulated_rewards: u64_import, commission_amount: u64_import) {
        this.operator = operator;
        this.pool_address = pool_address;
        this.accumulated_rewards = accumulated_rewards;
        this.commission_amount = commission_amount;
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
        return RequestCommissionEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RequestCommissionEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return RequestCommissionEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RequestCommissionEvent`
    }

    from(arg: RequestCommissionEvent) {
        this.operator = arg.operator;
        this.pool_address = arg.pool_address;
        this.accumulated_rewards = arg.accumulated_rewards;
        this.commission_amount = arg.commission_amount;
    }

    static from_bcs(arg: {
        operator: string,
        pool_address: string,
        accumulated_rewards: u64_import,
        commission_amount: u64_import
    }): RequestCommissionEvent {
        return new RequestCommissionEvent(arg.operator, arg.pool_address, arg.accumulated_rewards, arg.commission_amount)
    }

    static from_bcs_vector(args: {
        operator: string,
        pool_address: string,
        accumulated_rewards: u64_import,
        commission_amount: u64_import
    } []): RequestCommissionEvent[] {
        return args.map(function(arg) {
            return new RequestCommissionEvent(arg.operator, arg.pool_address, arg.accumulated_rewards, arg.commission_amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("RequestCommissionEvent", {
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            accumulated_rewards: bcs_import.u64(),
            commission_amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RequestCommissionEvent(val.operator, val.pool_address, val.accumulated_rewards, val.commission_amount),
        });
    };
}

/* ============================== ResetLockup =============================== */

export class ResetLockup implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ResetLockup`;

    operator: string;
    pool_address: string;

    constructor(operator: string, pool_address: string) {
        this.operator = operator;
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
        this.operator = arg.operator;
        this.pool_address = arg.pool_address;
    }

    static from_bcs(arg: {
        operator: string,
        pool_address: string
    }): ResetLockup {
        return new ResetLockup(arg.operator, arg.pool_address)
    }

    static from_bcs_vector(args: {
        operator: string,
        pool_address: string
    } []): ResetLockup[] {
        return args.map(function(arg) {
            return new ResetLockup(arg.operator, arg.pool_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("ResetLockup", {
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ResetLockup(val.operator, val.pool_address),
        });
    };
}

/* ============================== ResetLockupEvent =============================== */

export class ResetLockupEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ResetLockupEvent`;

    operator: string;
    pool_address: string;

    constructor(operator: string, pool_address: string) {
        this.operator = operator;
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
        this.operator = arg.operator;
        this.pool_address = arg.pool_address;
    }

    static from_bcs(arg: {
        operator: string,
        pool_address: string
    }): ResetLockupEvent {
        return new ResetLockupEvent(arg.operator, arg.pool_address)
    }

    static from_bcs_vector(args: {
        operator: string,
        pool_address: string
    } []): ResetLockupEvent[] {
        return args.map(function(arg) {
            return new ResetLockupEvent(arg.operator, arg.pool_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("ResetLockupEvent", {
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ResetLockupEvent(val.operator, val.pool_address),
        });
    };
}

/* ============================== StakingContract =============================== */

export class StakingContract implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::StakingContract`;

    principal: u64_import;
    pool_address: string;
    owner_cap: OwnerCapability;
    commission_percentage: u64_import;
    distribution_pool: Pool;
    signer_cap: SignerCapability;

    constructor(principal: u64_import, pool_address: string, owner_cap: OwnerCapability, commission_percentage: u64_import, distribution_pool: Pool, signer_cap: SignerCapability) {
        this.principal = principal;
        this.pool_address = pool_address;
        this.owner_cap = owner_cap;
        this.commission_percentage = commission_percentage;
        this.distribution_pool = distribution_pool;
        this.signer_cap = signer_cap;
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
        return StakingContract.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return StakingContract.from_bcs_vector(args)
    }

    get_bcs() {
        return StakingContract.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::StakingContract`
    }

    from(arg: StakingContract) {
        this.principal = arg.principal;
        this.pool_address = arg.pool_address;
        this.owner_cap = arg.owner_cap;
        this.commission_percentage = arg.commission_percentage;
        this.distribution_pool = arg.distribution_pool;
        this.signer_cap = arg.signer_cap;
    }

    static from_bcs(arg: {
        principal: u64_import,
        pool_address: string,
        owner_cap: OwnerCapability,
        commission_percentage: u64_import,
        distribution_pool: Pool,
        signer_cap: SignerCapability
    }): StakingContract {
        return new StakingContract(arg.principal, arg.pool_address, arg.owner_cap, arg.commission_percentage, arg.distribution_pool, arg.signer_cap)
    }

    static from_bcs_vector(args: {
        principal: u64_import,
        pool_address: string,
        owner_cap: OwnerCapability,
        commission_percentage: u64_import,
        distribution_pool: Pool,
        signer_cap: SignerCapability
    } []): StakingContract[] {
        return args.map(function(arg) {
            return new StakingContract(arg.principal, arg.pool_address, arg.owner_cap, arg.commission_percentage, arg.distribution_pool, arg.signer_cap)
        })
    }

    static get bcs() {
        return bcs_import.struct("StakingContract", {
            principal: bcs_import.u64(),
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            owner_cap: OwnerCapability.bcs,
            commission_percentage: bcs_import.u64(),
            distribution_pool: Pool.bcs,
            signer_cap: SignerCapability.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new StakingContract(val.principal, val.pool_address, val.owner_cap, val.commission_percentage, val.distribution_pool, val.signer_cap),
        });
    };
}

/* ============================== StakingGroupContainer =============================== */

export class StakingGroupContainer implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::StakingGroupContainer`;

    dummy_field: boolean;

    constructor(dummy_field: boolean) {
        this.dummy_field = dummy_field;
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
        return StakingGroupContainer.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return StakingGroupContainer.from_bcs_vector(args)
    }

    get_bcs() {
        return StakingGroupContainer.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::StakingGroupContainer`
    }

    from(arg: StakingGroupContainer) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): StakingGroupContainer {
        return new StakingGroupContainer(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): StakingGroupContainer[] {
        return args.map(function(arg) {
            return new StakingGroupContainer(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("StakingGroupContainer", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new StakingGroupContainer(val.dummy_field),
        });
    };
}

/* ============================== StakingGroupUpdateCommissionEvent =============================== */

export class StakingGroupUpdateCommissionEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::StakingGroupUpdateCommissionEvent`;

    update_commission_events: EventHandle;

    constructor(update_commission_events ? : EventHandle) {
        this.update_commission_events = update_commission_events;
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
        return StakingGroupUpdateCommissionEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return StakingGroupUpdateCommissionEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return StakingGroupUpdateCommissionEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::StakingGroupUpdateCommissionEvent`
    }

    from(arg: StakingGroupUpdateCommissionEvent) {
        this.update_commission_events = arg.update_commission_events;
    }

    static from_bcs(arg: {
        update_commission_events: EventHandle
    }): StakingGroupUpdateCommissionEvent {
        return new StakingGroupUpdateCommissionEvent(arg.update_commission_events)
    }

    static from_bcs_vector(args: {
        update_commission_events: EventHandle
    } []): StakingGroupUpdateCommissionEvent[] {
        return args.map(function(arg) {
            return new StakingGroupUpdateCommissionEvent(arg.update_commission_events)
        })
    }

    static get bcs() {
        return bcs_import.struct("StakingGroupUpdateCommissionEvent", {
            update_commission_events: EventHandle.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new StakingGroupUpdateCommissionEvent(val.update_commission_events),
        });
    };
}

/* ============================== Store =============================== */

export class Store implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Store`;

    staking_contracts: SimpleMap < string,
    StakingContract > ;
    create_staking_contract_events: EventHandle;
    update_voter_events: EventHandle;
    reset_lockup_events: EventHandle;
    add_stake_events: EventHandle;
    request_commission_events: EventHandle;
    unlock_stake_events: EventHandle;
    switch_operator_events: EventHandle;
    add_distribution_events: EventHandle;
    distribute_events: EventHandle;

    constructor(staking_contracts ? : SimpleMap < string, StakingContract > , create_staking_contract_events ? : EventHandle, update_voter_events ? : EventHandle, reset_lockup_events ? : EventHandle, add_stake_events ? : EventHandle, request_commission_events ? : EventHandle, unlock_stake_events ? : EventHandle, switch_operator_events ? : EventHandle, add_distribution_events ? : EventHandle, distribute_events ? : EventHandle) {
        this.staking_contracts = staking_contracts;
        this.create_staking_contract_events = create_staking_contract_events;
        this.update_voter_events = update_voter_events;
        this.reset_lockup_events = reset_lockup_events;
        this.add_stake_events = add_stake_events;
        this.request_commission_events = request_commission_events;
        this.unlock_stake_events = unlock_stake_events;
        this.switch_operator_events = switch_operator_events;
        this.add_distribution_events = add_distribution_events;
        this.distribute_events = distribute_events;
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
        return Store.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Store.from_bcs_vector(args)
    }

    get_bcs() {
        return Store.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Store`
    }

    from(arg: Store) {
        this.staking_contracts = arg.staking_contracts;
        this.create_staking_contract_events = arg.create_staking_contract_events;
        this.update_voter_events = arg.update_voter_events;
        this.reset_lockup_events = arg.reset_lockup_events;
        this.add_stake_events = arg.add_stake_events;
        this.request_commission_events = arg.request_commission_events;
        this.unlock_stake_events = arg.unlock_stake_events;
        this.switch_operator_events = arg.switch_operator_events;
        this.add_distribution_events = arg.add_distribution_events;
        this.distribute_events = arg.distribute_events;
    }

    static from_bcs(arg: {
        staking_contracts: SimpleMap < string,
        StakingContract > ,
        create_staking_contract_events: EventHandle,
        update_voter_events: EventHandle,
        reset_lockup_events: EventHandle,
        add_stake_events: EventHandle,
        request_commission_events: EventHandle,
        unlock_stake_events: EventHandle,
        switch_operator_events: EventHandle,
        add_distribution_events: EventHandle,
        distribute_events: EventHandle
    }): Store {
        return new Store(arg.staking_contracts, arg.create_staking_contract_events, arg.update_voter_events, arg.reset_lockup_events, arg.add_stake_events, arg.request_commission_events, arg.unlock_stake_events, arg.switch_operator_events, arg.add_distribution_events, arg.distribute_events)
    }

    static from_bcs_vector(args: {
        staking_contracts: SimpleMap < string,
        StakingContract > ,
        create_staking_contract_events: EventHandle,
        update_voter_events: EventHandle,
        reset_lockup_events: EventHandle,
        add_stake_events: EventHandle,
        request_commission_events: EventHandle,
        unlock_stake_events: EventHandle,
        switch_operator_events: EventHandle,
        add_distribution_events: EventHandle,
        distribute_events: EventHandle
    } []): Store[] {
        return args.map(function(arg) {
            return new Store(arg.staking_contracts, arg.create_staking_contract_events, arg.update_voter_events, arg.reset_lockup_events, arg.add_stake_events, arg.request_commission_events, arg.unlock_stake_events, arg.switch_operator_events, arg.add_distribution_events, arg.distribute_events)
        })
    }

    static get bcs() {
        return bcs_import.struct("Store", {
            staking_contracts: SimpleMap.bcs(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }), StakingContract.bcs),
            create_staking_contract_events: EventHandle.bcs,
            update_voter_events: EventHandle.bcs,
            reset_lockup_events: EventHandle.bcs,
            add_stake_events: EventHandle.bcs,
            request_commission_events: EventHandle.bcs,
            unlock_stake_events: EventHandle.bcs,
            switch_operator_events: EventHandle.bcs,
            add_distribution_events: EventHandle.bcs,
            distribute_events: EventHandle.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Store(val.staking_contracts, val.create_staking_contract_events, val.update_voter_events, val.reset_lockup_events, val.add_stake_events, val.request_commission_events, val.unlock_stake_events, val.switch_operator_events, val.add_distribution_events, val.distribute_events),
        });
    };
}

/* ============================== SwitchOperator =============================== */

export class SwitchOperator implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SwitchOperator`;

    old_operator: string;
    new_operator: string;
    pool_address: string;

    constructor(old_operator: string, new_operator: string, pool_address: string) {
        this.old_operator = old_operator;
        this.new_operator = new_operator;
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
        return SwitchOperator.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SwitchOperator.from_bcs_vector(args)
    }

    get_bcs() {
        return SwitchOperator.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SwitchOperator`
    }

    from(arg: SwitchOperator) {
        this.old_operator = arg.old_operator;
        this.new_operator = arg.new_operator;
        this.pool_address = arg.pool_address;
    }

    static from_bcs(arg: {
        old_operator: string,
        new_operator: string,
        pool_address: string
    }): SwitchOperator {
        return new SwitchOperator(arg.old_operator, arg.new_operator, arg.pool_address)
    }

    static from_bcs_vector(args: {
        old_operator: string,
        new_operator: string,
        pool_address: string
    } []): SwitchOperator[] {
        return args.map(function(arg) {
            return new SwitchOperator(arg.old_operator, arg.new_operator, arg.pool_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("SwitchOperator", {
            old_operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            new_operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new SwitchOperator(val.old_operator, val.new_operator, val.pool_address),
        });
    };
}

/* ============================== SwitchOperatorEvent =============================== */

export class SwitchOperatorEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SwitchOperatorEvent`;

    old_operator: string;
    new_operator: string;
    pool_address: string;

    constructor(old_operator: string, new_operator: string, pool_address: string) {
        this.old_operator = old_operator;
        this.new_operator = new_operator;
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
        return SwitchOperatorEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SwitchOperatorEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return SwitchOperatorEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SwitchOperatorEvent`
    }

    from(arg: SwitchOperatorEvent) {
        this.old_operator = arg.old_operator;
        this.new_operator = arg.new_operator;
        this.pool_address = arg.pool_address;
    }

    static from_bcs(arg: {
        old_operator: string,
        new_operator: string,
        pool_address: string
    }): SwitchOperatorEvent {
        return new SwitchOperatorEvent(arg.old_operator, arg.new_operator, arg.pool_address)
    }

    static from_bcs_vector(args: {
        old_operator: string,
        new_operator: string,
        pool_address: string
    } []): SwitchOperatorEvent[] {
        return args.map(function(arg) {
            return new SwitchOperatorEvent(arg.old_operator, arg.new_operator, arg.pool_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("SwitchOperatorEvent", {
            old_operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            new_operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pool_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new SwitchOperatorEvent(val.old_operator, val.new_operator, val.pool_address),
        });
    };
}

/* ============================== UpdateCommission =============================== */

export class UpdateCommission implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpdateCommission`;

    staker: string;
    operator: string;
    old_commission_percentage: u64_import;
    new_commission_percentage: u64_import;

    constructor(staker: string, operator: string, old_commission_percentage: u64_import, new_commission_percentage: u64_import) {
        this.staker = staker;
        this.operator = operator;
        this.old_commission_percentage = old_commission_percentage;
        this.new_commission_percentage = new_commission_percentage;
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
        return UpdateCommission.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UpdateCommission.from_bcs_vector(args)
    }

    get_bcs() {
        return UpdateCommission.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UpdateCommission`
    }

    from(arg: UpdateCommission) {
        this.staker = arg.staker;
        this.operator = arg.operator;
        this.old_commission_percentage = arg.old_commission_percentage;
        this.new_commission_percentage = arg.new_commission_percentage;
    }

    static from_bcs(arg: {
        staker: string,
        operator: string,
        old_commission_percentage: u64_import,
        new_commission_percentage: u64_import
    }): UpdateCommission {
        return new UpdateCommission(arg.staker, arg.operator, arg.old_commission_percentage, arg.new_commission_percentage)
    }

    static from_bcs_vector(args: {
        staker: string,
        operator: string,
        old_commission_percentage: u64_import,
        new_commission_percentage: u64_import
    } []): UpdateCommission[] {
        return args.map(function(arg) {
            return new UpdateCommission(arg.staker, arg.operator, arg.old_commission_percentage, arg.new_commission_percentage)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpdateCommission", {
            staker: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            old_commission_percentage: bcs_import.u64(),
            new_commission_percentage: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UpdateCommission(val.staker, val.operator, val.old_commission_percentage, val.new_commission_percentage),
        });
    };
}

/* ============================== UpdateCommissionEvent =============================== */

export class UpdateCommissionEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpdateCommissionEvent`;

    staker: string;
    operator: string;
    old_commission_percentage: u64_import;
    new_commission_percentage: u64_import;

    constructor(staker: string, operator: string, old_commission_percentage: u64_import, new_commission_percentage: u64_import) {
        this.staker = staker;
        this.operator = operator;
        this.old_commission_percentage = old_commission_percentage;
        this.new_commission_percentage = new_commission_percentage;
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
        return UpdateCommissionEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UpdateCommissionEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return UpdateCommissionEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UpdateCommissionEvent`
    }

    from(arg: UpdateCommissionEvent) {
        this.staker = arg.staker;
        this.operator = arg.operator;
        this.old_commission_percentage = arg.old_commission_percentage;
        this.new_commission_percentage = arg.new_commission_percentage;
    }

    static from_bcs(arg: {
        staker: string,
        operator: string,
        old_commission_percentage: u64_import,
        new_commission_percentage: u64_import
    }): UpdateCommissionEvent {
        return new UpdateCommissionEvent(arg.staker, arg.operator, arg.old_commission_percentage, arg.new_commission_percentage)
    }

    static from_bcs_vector(args: {
        staker: string,
        operator: string,
        old_commission_percentage: u64_import,
        new_commission_percentage: u64_import
    } []): UpdateCommissionEvent[] {
        return args.map(function(arg) {
            return new UpdateCommissionEvent(arg.staker, arg.operator, arg.old_commission_percentage, arg.new_commission_percentage)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpdateCommissionEvent", {
            staker: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            old_commission_percentage: bcs_import.u64(),
            new_commission_percentage: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UpdateCommissionEvent(val.staker, val.operator, val.old_commission_percentage, val.new_commission_percentage),
        });
    };
}

/* ============================== UpdateVoter =============================== */

export class UpdateVoter implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpdateVoter`;

    operator: string;
    pool_address: string;
    old_voter: string;
    new_voter: string;

    constructor(operator: string, pool_address: string, old_voter: string, new_voter: string) {
        this.operator = operator;
        this.pool_address = pool_address;
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
        this.operator = arg.operator;
        this.pool_address = arg.pool_address;
        this.old_voter = arg.old_voter;
        this.new_voter = arg.new_voter;
    }

    static from_bcs(arg: {
        operator: string,
        pool_address: string,
        old_voter: string,
        new_voter: string
    }): UpdateVoter {
        return new UpdateVoter(arg.operator, arg.pool_address, arg.old_voter, arg.new_voter)
    }

    static from_bcs_vector(args: {
        operator: string,
        pool_address: string,
        old_voter: string,
        new_voter: string
    } []): UpdateVoter[] {
        return args.map(function(arg) {
            return new UpdateVoter(arg.operator, arg.pool_address, arg.old_voter, arg.new_voter)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpdateVoter", {
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pool_address: bcs_import.bytes(32).transform({
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
            output: (val) => new UpdateVoter(val.operator, val.pool_address, val.old_voter, val.new_voter),
        });
    };
}

/* ============================== UpdateVoterEvent =============================== */

export class UpdateVoterEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpdateVoterEvent`;

    operator: string;
    pool_address: string;
    old_voter: string;
    new_voter: string;

    constructor(operator: string, pool_address: string, old_voter: string, new_voter: string) {
        this.operator = operator;
        this.pool_address = pool_address;
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
        this.operator = arg.operator;
        this.pool_address = arg.pool_address;
        this.old_voter = arg.old_voter;
        this.new_voter = arg.new_voter;
    }

    static from_bcs(arg: {
        operator: string,
        pool_address: string,
        old_voter: string,
        new_voter: string
    }): UpdateVoterEvent {
        return new UpdateVoterEvent(arg.operator, arg.pool_address, arg.old_voter, arg.new_voter)
    }

    static from_bcs_vector(args: {
        operator: string,
        pool_address: string,
        old_voter: string,
        new_voter: string
    } []): UpdateVoterEvent[] {
        return args.map(function(arg) {
            return new UpdateVoterEvent(arg.operator, arg.pool_address, arg.old_voter, arg.new_voter)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpdateVoterEvent", {
            operator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pool_address: bcs_import.bytes(32).transform({
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
            output: (val) => new UpdateVoterEvent(val.operator, val.pool_address, val.old_voter, val.new_voter),
        });
    };
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

function create_resource_account_seed(arg0: string, arg1: string, arg2: number[]): [number[]] {
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

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_resource_account_seed", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_expected_stake_pool_address(arg0: string, arg1: string, arg2: number[]): [string] {
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

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_expected_stake_pool_address", [], args);

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

function add_distribution(arg0: string, arg1: StakingContract, arg2: string, arg3: u64_import, arg4: EventHandle) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(StakingContract.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(EventHandle.bcs.serialize(arg4).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_distribution", [], args);

    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])));
    arg4.from(arg4.from_bcs_t(new Uint8Array(a1.Raw[0])));
}

function assert_staking_contract_exists(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_staking_contract_exists", [], args);

}

function commission_percentage(arg0: string, arg1: string): [u64_import] {
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

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "commission_percentage", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create_stake_pool(arg0: string, arg1: string, arg2: string, arg3: number[]): [string, SignerCapability, OwnerCapability] {
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
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), "")
    ]

    let [r0, r1, r2] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_stake_pool", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0])),
        SignerCapability.from_bcs(SignerCapability.bcs.parse(new Uint8Array(r1.Raw[0]))),
        OwnerCapability.from_bcs(OwnerCapability.bcs.parse(new Uint8Array(r2.Raw[0])))
    ];
}

function create_staking_contract(arg0: string, arg1: string, arg2: string, arg3: u64_import, arg4: u64_import, arg5: number[]) {
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
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg5).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_staking_contract", [], args);

}

function create_staking_contract_with_coins(arg0: string, arg1: string, arg2: string, arg3: Coin, arg4: u64_import, arg5: number[]): [string] {
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
        wasm.new_bytes(Coin.bcs.serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg5).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_staking_contract_with_coins", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function distribute(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "distribute", [], args);

}

function distribute_internal(arg0: string, arg1: string, arg2: StakingContract, arg3: EventHandle) {
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
        wasm.new_bytes(StakingContract.bcs.serialize(arg2).toBytes(), ""),
        wasm.new_bytes(EventHandle.bcs.serialize(arg3).toBytes(), "")
    ]

    let [a0, a1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "distribute_internal", [], args);

    arg2.from(arg2.from_bcs_t(new Uint8Array(a0.Raw[0])));
    arg3.from(arg3.from_bcs_t(new Uint8Array(a1.Raw[0])));
}

function get_staking_contract_amounts_internal(arg0: StakingContract): [u64_import, u64_import, u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(StakingContract.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, r1, r2] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_staking_contract_amounts_internal", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r1.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r2.Raw[0]))
    ];
}

function last_recorded_principal(arg0: string, arg1: string): [u64_import] {
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

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "last_recorded_principal", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function new_staking_contracts_holder(arg0: string): [Store] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_staking_contracts_holder", [], args);

    return [
        Store.from_bcs(Store.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function pending_distribution_counts(arg0: string, arg1: string): [u64_import] {
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

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pending_distribution_counts", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function request_commission(arg0: string, arg1: string, arg2: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "request_commission", [], args);

}

function request_commission_internal(arg0: string, arg1: StakingContract, arg2: EventHandle, arg3: EventHandle): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(StakingContract.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(EventHandle.bcs.serialize(arg2).toBytes(), ""),
        wasm.new_bytes(EventHandle.bcs.serialize(arg3).toBytes(), "")
    ]

    let [r0, a0, a1, a2] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "request_commission_internal", [], args);

    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])));
    arg2.from(arg2.from_bcs_t(new Uint8Array(a1.Raw[0])));
    arg3.from(arg3.from_bcs_t(new Uint8Array(a2.Raw[0])));

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
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

function stake_pool_address(arg0: string, arg1: string): [string] {
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

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "stake_pool_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function staking_contract_amounts(arg0: string, arg1: string): [u64_import, u64_import, u64_import] {
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

    let [r0, r1, r2] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "staking_contract_amounts", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r1.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r2.Raw[0]))
    ];
}

function staking_contract_exists(arg0: string, arg1: string): [boolean] {
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

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "staking_contract_exists", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function switch_operator(arg0: string, arg1: string, arg2: string, arg3: u64_import) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "switch_operator", [], args);

}

function switch_operator_with_same_commission(arg0: string, arg1: string, arg2: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "switch_operator_with_same_commission", [], args);

}

function unlock_rewards(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unlock_rewards", [], args);

}

function unlock_stake(arg0: string, arg1: string, arg2: u64_import) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unlock_stake", [], args);

}

function update_commision(arg0: string, arg1: string, arg2: u64_import) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_commision", [], args);

}

function update_distribution_pool(arg0: Pool, arg1: u64_import, arg2: string, arg3: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_distribution_pool", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
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

export const staking_contract = {
    AddStake,
    AddStakeEvent,
    UnlockStake,
    UnlockStakeEvent,
    BeneficiaryForOperator,
    SetBeneficiaryForOperator,
    AddDistribution,
    AddDistributionEvent,
    CreateStakingContract,
    CreateStakingContractEvent,
    Distribute,
    DistributeEvent,
    RequestCommission,
    RequestCommissionEvent,
    ResetLockup,
    ResetLockupEvent,
    StakingContract,
    StakingGroupContainer,
    StakingGroupUpdateCommissionEvent,
    Store,
    SwitchOperator,
    SwitchOperatorEvent,
    UpdateCommission,
    UpdateCommissionEvent,
    UpdateVoter,
    UpdateVoterEvent,
    add_stake,
    beneficiary_for_operator,
    create_resource_account_seed,
    get_expected_stake_pool_address,
    set_beneficiary_for_operator,
    add_distribution,
    assert_staking_contract_exists,
    commission_percentage,
    create_stake_pool,
    create_staking_contract,
    create_staking_contract_with_coins,
    distribute,
    distribute_internal,
    get_staking_contract_amounts_internal,
    last_recorded_principal,
    new_staking_contracts_holder,
    pending_distribution_counts,
    request_commission,
    request_commission_internal,
    reset_lockup,
    stake_pool_address,
    staking_contract_amounts,
    staking_contract_exists,
    switch_operator,
    switch_operator_with_same_commission,
    unlock_rewards,
    unlock_stake,
    update_commision,
    update_distribution_pool,
    update_voter
}