import {
    StructClass,
    get_package_address,
    get_wasm,
    String as string_import,
    u64 as u64_import
} from "../../sui_wasm";
import {
    Aggregator
} from "./aggregator";
import {
    EventHandle
} from "./event";
import {
    BurnRef,
    FungibleAsset,
    MintRef,
    TransferRef
} from "./fungible_asset";
import {
    Object_
} from "./object";
import {
    Option
} from "./option";
import {
    OptionalAggregator
} from "./optional_aggregator";
import {
    Table
} from "./table";
import {
    TypeInfo
} from "./type_info";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "coin";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Deposit =============================== */

export class Deposit implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Deposit`;

    account: string;
    amount: u64_import;

    constructor(account: string, amount: u64_import) {
        this.account = account;
        this.amount = amount;
    }

    into_value() {
        return {
            account: (this.account as unknown as StructClass).into_value ? (this.account as unknown as StructClass).into_value() : this.account,
            amount: (this.amount as unknown as StructClass).into_value ? (this.amount as unknown as StructClass).into_value() : this.amount
        }
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
        return Deposit.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Deposit.from_bcs_vector(args)
    }

    get_bcs() {
        return Deposit.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Deposit`
    }

    from(arg: Deposit) {
        this.account = arg.account;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        account: string,
        amount: u64_import
    }): Deposit {
        return new Deposit(arg.account, arg.amount)
    }

    static from_bcs_vector(args: {
        account: string,
        amount: u64_import
    } []): Deposit[] {
        return args.map(function(arg) {
            return new Deposit(arg.account, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("Deposit", {
            account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Deposit(val.account, val.amount),
        });
    };
}

/* ============================== DepositEvent =============================== */

export class DepositEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DepositEvent`;

    amount: u64_import;

    constructor(amount: u64_import) {
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
        return DepositEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DepositEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return DepositEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DepositEvent`
    }

    from(arg: DepositEvent) {
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        amount: u64_import
    }): DepositEvent {
        return new DepositEvent(arg.amount)
    }

    static from_bcs_vector(args: {
        amount: u64_import
    } []): DepositEvent[] {
        return args.map(function(arg) {
            return new DepositEvent(arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("DepositEvent", {
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DepositEvent(val.amount),
        });
    };
}

/* ============================== Withdraw =============================== */

export class Withdraw implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Withdraw`;

    account: string;
    amount: u64_import;

    constructor(account: string, amount: u64_import) {
        this.account = account;
        this.amount = amount;
    }

    into_value() {
        return {
            account: (this.account as unknown as StructClass).into_value ? (this.account as unknown as StructClass).into_value() : this.account,
            amount: (this.amount as unknown as StructClass).into_value ? (this.amount as unknown as StructClass).into_value() : this.amount
        }
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
        return Withdraw.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Withdraw.from_bcs_vector(args)
    }

    get_bcs() {
        return Withdraw.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Withdraw`
    }

    from(arg: Withdraw) {
        this.account = arg.account;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        account: string,
        amount: u64_import
    }): Withdraw {
        return new Withdraw(arg.account, arg.amount)
    }

    static from_bcs_vector(args: {
        account: string,
        amount: u64_import
    } []): Withdraw[] {
        return args.map(function(arg) {
            return new Withdraw(arg.account, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("Withdraw", {
            account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Withdraw(val.account, val.amount),
        });
    };
}

/* ============================== WithdrawEvent =============================== */

export class WithdrawEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::WithdrawEvent`;

    amount: u64_import;

    constructor(amount: u64_import) {
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
        return WithdrawEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return WithdrawEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return WithdrawEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::WithdrawEvent`
    }

    from(arg: WithdrawEvent) {
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        amount: u64_import
    }): WithdrawEvent {
        return new WithdrawEvent(arg.amount)
    }

    static from_bcs_vector(args: {
        amount: u64_import
    } []): WithdrawEvent[] {
        return args.map(function(arg) {
            return new WithdrawEvent(arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("WithdrawEvent", {
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new WithdrawEvent(val.amount),
        });
    };
}

/* ============================== AggregatableCoin =============================== */

export class AggregatableCoin implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AggregatableCoin`;

    value: Aggregator;

    constructor(value: Aggregator) {
        this.value = value;
    }

    into_value() {
        return {
            value: (this.value as unknown as StructClass).into_value ? (this.value as unknown as StructClass).into_value() : this.value
        }
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
        return AggregatableCoin.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AggregatableCoin.from_bcs_vector(args)
    }

    get_bcs() {
        return AggregatableCoin.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AggregatableCoin`
    }

    from(arg: AggregatableCoin) {
        this.value = arg.value;
    }

    static from_bcs(arg: {
        value: Aggregator
    }): AggregatableCoin {
        return new AggregatableCoin(arg.value)
    }

    static from_bcs_vector(args: {
        value: Aggregator
    } []): AggregatableCoin[] {
        return args.map(function(arg) {
            return new AggregatableCoin(arg.value)
        })
    }

    static get bcs() {
        return bcs_import.struct("AggregatableCoin", {
            value: Aggregator.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AggregatableCoin(val.value),
        });
    };
}

/* ============================== BurnCapability =============================== */

export class BurnCapability implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BurnCapability`;

    dummy_field: boolean;

    constructor(dummy_field: boolean) {
        this.dummy_field = dummy_field;
    }

    into_value() {
        return {
            dummy_field: (this.dummy_field as unknown as StructClass).into_value ? (this.dummy_field as unknown as StructClass).into_value() : this.dummy_field
        }
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
        return BurnCapability.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BurnCapability.from_bcs_vector(args)
    }

    get_bcs() {
        return BurnCapability.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BurnCapability`
    }

    from(arg: BurnCapability) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): BurnCapability {
        return new BurnCapability(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): BurnCapability[] {
        return args.map(function(arg) {
            return new BurnCapability(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("BurnCapability", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BurnCapability(val.dummy_field),
        });
    };
}

/* ============================== BurnRefReceipt =============================== */

export class BurnRefReceipt implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BurnRefReceipt`;

    metadata: Object_;

    constructor(metadata: Object_) {
        this.metadata = metadata;
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
        return BurnRefReceipt.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BurnRefReceipt.from_bcs_vector(args)
    }

    get_bcs() {
        return BurnRefReceipt.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BurnRefReceipt`
    }

    from(arg: BurnRefReceipt) {
        this.metadata = arg.metadata;
    }

    static from_bcs(arg: {
        metadata: Object_
    }): BurnRefReceipt {
        return new BurnRefReceipt(arg.metadata)
    }

    static from_bcs_vector(args: {
        metadata: Object_
    } []): BurnRefReceipt[] {
        return args.map(function(arg) {
            return new BurnRefReceipt(arg.metadata)
        })
    }

    static get bcs() {
        return bcs_import.struct("BurnRefReceipt", {
            metadata: Object_.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BurnRefReceipt(val.metadata),
        });
    };
}

/* ============================== Coin =============================== */

export class Coin implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Coin`;

    value: u64_import;

    constructor(value: u64_import) {
        this.value = value;
    }

    into_value() {
        return {
            value: (this.value as unknown as StructClass).into_value ? (this.value as unknown as StructClass).into_value() : this.value
        }
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
        return Coin.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Coin.from_bcs_vector(args)
    }

    get_bcs() {
        return Coin.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Coin`
    }

    from(arg: Coin) {
        this.value = arg.value;
    }

    static from_bcs(arg: {
        value: u64_import
    }): Coin {
        return new Coin(arg.value)
    }

    static from_bcs_vector(args: {
        value: u64_import
    } []): Coin[] {
        return args.map(function(arg) {
            return new Coin(arg.value)
        })
    }

    static get bcs() {
        return bcs_import.struct("Coin", {
            value: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Coin(val.value),
        });
    };
}

/* ============================== CoinConversionMap =============================== */

export class CoinConversionMap implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CoinConversionMap`;

    coin_to_fungible_asset_map: Table;

    constructor(coin_to_fungible_asset_map ? : Table) {
        this.coin_to_fungible_asset_map = coin_to_fungible_asset_map;
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
        return CoinConversionMap.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CoinConversionMap.from_bcs_vector(args)
    }

    get_bcs() {
        return CoinConversionMap.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CoinConversionMap`
    }

    from(arg: CoinConversionMap) {
        this.coin_to_fungible_asset_map = arg.coin_to_fungible_asset_map;
    }

    static from_bcs(arg: {
        coin_to_fungible_asset_map: Table
    }): CoinConversionMap {
        return new CoinConversionMap(arg.coin_to_fungible_asset_map)
    }

    static from_bcs_vector(args: {
        coin_to_fungible_asset_map: Table
    } []): CoinConversionMap[] {
        return args.map(function(arg) {
            return new CoinConversionMap(arg.coin_to_fungible_asset_map)
        })
    }

    static get bcs() {
        return bcs_import.struct("CoinConversionMap", {
            coin_to_fungible_asset_map: Table.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CoinConversionMap(val.coin_to_fungible_asset_map),
        });
    };
}

/* ============================== CoinDeposit =============================== */

export class CoinDeposit implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CoinDeposit`;

    coin_type: string;
    account: string;
    amount: u64_import;

    constructor(coin_type: string, account: string, amount: u64_import) {
        this.coin_type = coin_type;
        this.account = account;
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
        return CoinDeposit.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CoinDeposit.from_bcs_vector(args)
    }

    get_bcs() {
        return CoinDeposit.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CoinDeposit`
    }

    from(arg: CoinDeposit) {
        this.coin_type = arg.coin_type;
        this.account = arg.account;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        coin_type: string,
        account: string,
        amount: u64_import
    }): CoinDeposit {
        return new CoinDeposit(arg.coin_type, arg.account, arg.amount)
    }

    static from_bcs_vector(args: {
        coin_type: string,
        account: string,
        amount: u64_import
    } []): CoinDeposit[] {
        return args.map(function(arg) {
            return new CoinDeposit(arg.coin_type, arg.account, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("CoinDeposit", {
            coin_type: bcs_import.string(),
            account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CoinDeposit(val.coin_type, val.account, val.amount),
        });
    };
}

/* ============================== CoinEventHandleDeletion =============================== */

export class CoinEventHandleDeletion implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CoinEventHandleDeletion`;

    event_handle_creation_address: string;
    deleted_deposit_event_handle_creation_number: u64_import;
    deleted_withdraw_event_handle_creation_number: u64_import;

    constructor(event_handle_creation_address: string, deleted_deposit_event_handle_creation_number: u64_import, deleted_withdraw_event_handle_creation_number: u64_import) {
        this.event_handle_creation_address = event_handle_creation_address;
        this.deleted_deposit_event_handle_creation_number = deleted_deposit_event_handle_creation_number;
        this.deleted_withdraw_event_handle_creation_number = deleted_withdraw_event_handle_creation_number;
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
        return CoinEventHandleDeletion.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CoinEventHandleDeletion.from_bcs_vector(args)
    }

    get_bcs() {
        return CoinEventHandleDeletion.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CoinEventHandleDeletion`
    }

    from(arg: CoinEventHandleDeletion) {
        this.event_handle_creation_address = arg.event_handle_creation_address;
        this.deleted_deposit_event_handle_creation_number = arg.deleted_deposit_event_handle_creation_number;
        this.deleted_withdraw_event_handle_creation_number = arg.deleted_withdraw_event_handle_creation_number;
    }

    static from_bcs(arg: {
        event_handle_creation_address: string,
        deleted_deposit_event_handle_creation_number: u64_import,
        deleted_withdraw_event_handle_creation_number: u64_import
    }): CoinEventHandleDeletion {
        return new CoinEventHandleDeletion(arg.event_handle_creation_address, arg.deleted_deposit_event_handle_creation_number, arg.deleted_withdraw_event_handle_creation_number)
    }

    static from_bcs_vector(args: {
        event_handle_creation_address: string,
        deleted_deposit_event_handle_creation_number: u64_import,
        deleted_withdraw_event_handle_creation_number: u64_import
    } []): CoinEventHandleDeletion[] {
        return args.map(function(arg) {
            return new CoinEventHandleDeletion(arg.event_handle_creation_address, arg.deleted_deposit_event_handle_creation_number, arg.deleted_withdraw_event_handle_creation_number)
        })
    }

    static get bcs() {
        return bcs_import.struct("CoinEventHandleDeletion", {
            event_handle_creation_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            deleted_deposit_event_handle_creation_number: bcs_import.u64(),
            deleted_withdraw_event_handle_creation_number: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CoinEventHandleDeletion(val.event_handle_creation_address, val.deleted_deposit_event_handle_creation_number, val.deleted_withdraw_event_handle_creation_number),
        });
    };
}

/* ============================== CoinInfo =============================== */

export class CoinInfo implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CoinInfo`;

    name: string;
    symbol: string;
    decimals: number;
    supply: Option < OptionalAggregator > ;

    constructor(name ? : string, symbol ? : string, decimals ? : number, supply ? : Option < OptionalAggregator > ) {
        this.name = name;
        this.symbol = symbol;
        this.decimals = decimals;
        this.supply = supply;
    }

    into_value() {
        return {
            name: (this.name as unknown as StructClass).into_value ? (this.name as unknown as StructClass).into_value() : this.name,
            symbol: (this.symbol as unknown as StructClass).into_value ? (this.symbol as unknown as StructClass).into_value() : this.symbol,
            decimals: (this.decimals as unknown as StructClass).into_value ? (this.decimals as unknown as StructClass).into_value() : this.decimals,
            supply: (this.supply as unknown as StructClass).into_value ? (this.supply as unknown as StructClass).into_value() : this.supply
        }
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
        return CoinInfo.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CoinInfo.from_bcs_vector(args)
    }

    get_bcs() {
        return CoinInfo.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CoinInfo`
    }

    from(arg: CoinInfo) {
        this.name = arg.name;
        this.symbol = arg.symbol;
        this.decimals = arg.decimals;
        this.supply = arg.supply;
    }

    static from_bcs(arg: {
        name: string,
        symbol: string,
        decimals: number,
        supply: Option < OptionalAggregator >
    }): CoinInfo {
        return new CoinInfo(arg.name, arg.symbol, arg.decimals, arg.supply)
    }

    static from_bcs_vector(args: {
        name: string,
        symbol: string,
        decimals: number,
        supply: Option < OptionalAggregator >
    } []): CoinInfo[] {
        return args.map(function(arg) {
            return new CoinInfo(arg.name, arg.symbol, arg.decimals, arg.supply)
        })
    }

    static get bcs() {
        return bcs_import.struct("CoinInfo", {
            name: bcs_import.string(),
            symbol: bcs_import.string(),
            decimals: bcs_import.u8(),
            supply: Option.bcs(OptionalAggregator.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CoinInfo(val.name, val.symbol, val.decimals, val.supply),
        });
    };
}

/* ============================== CoinStore =============================== */

export class CoinStore implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CoinStore`;

    coin: Coin;
    frozen: boolean;
    deposit_events: EventHandle;
    withdraw_events: EventHandle;

    constructor(coin ? : Coin, frozen ? : boolean, deposit_events ? : EventHandle, withdraw_events ? : EventHandle) {
        this.coin = coin;
        this.frozen = frozen;
        this.deposit_events = deposit_events;
        this.withdraw_events = withdraw_events;
    }

    into_value() {
        return {
            coin: (this.coin as unknown as StructClass).into_value ? (this.coin as unknown as StructClass).into_value() : this.coin,
            frozen: (this.frozen as unknown as StructClass).into_value ? (this.frozen as unknown as StructClass).into_value() : this.frozen,
            deposit_events: (this.deposit_events as unknown as StructClass).into_value ? (this.deposit_events as unknown as StructClass).into_value() : this.deposit_events,
            withdraw_events: (this.withdraw_events as unknown as StructClass).into_value ? (this.withdraw_events as unknown as StructClass).into_value() : this.withdraw_events
        }
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
        return CoinStore.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CoinStore.from_bcs_vector(args)
    }

    get_bcs() {
        return CoinStore.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CoinStore`
    }

    from(arg: CoinStore) {
        this.coin = arg.coin;
        this.frozen = arg.frozen;
        this.deposit_events = arg.deposit_events;
        this.withdraw_events = arg.withdraw_events;
    }

    static from_bcs(arg: {
        coin: Coin,
        frozen: boolean,
        deposit_events: EventHandle,
        withdraw_events: EventHandle
    }): CoinStore {
        return new CoinStore(arg.coin, arg.frozen, arg.deposit_events, arg.withdraw_events)
    }

    static from_bcs_vector(args: {
        coin: Coin,
        frozen: boolean,
        deposit_events: EventHandle,
        withdraw_events: EventHandle
    } []): CoinStore[] {
        return args.map(function(arg) {
            return new CoinStore(arg.coin, arg.frozen, arg.deposit_events, arg.withdraw_events)
        })
    }

    static get bcs() {
        return bcs_import.struct("CoinStore", {
            coin: Coin.bcs,
            frozen: bcs_import.bool(),
            deposit_events: EventHandle.bcs,
            withdraw_events: EventHandle.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CoinStore(val.coin, val.frozen, val.deposit_events, val.withdraw_events),
        });
    };
}

/* ============================== CoinWithdraw =============================== */

export class CoinWithdraw implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CoinWithdraw`;

    coin_type: string;
    account: string;
    amount: u64_import;

    constructor(coin_type: string, account: string, amount: u64_import) {
        this.coin_type = coin_type;
        this.account = account;
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
        return CoinWithdraw.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CoinWithdraw.from_bcs_vector(args)
    }

    get_bcs() {
        return CoinWithdraw.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CoinWithdraw`
    }

    from(arg: CoinWithdraw) {
        this.coin_type = arg.coin_type;
        this.account = arg.account;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        coin_type: string,
        account: string,
        amount: u64_import
    }): CoinWithdraw {
        return new CoinWithdraw(arg.coin_type, arg.account, arg.amount)
    }

    static from_bcs_vector(args: {
        coin_type: string,
        account: string,
        amount: u64_import
    } []): CoinWithdraw[] {
        return args.map(function(arg) {
            return new CoinWithdraw(arg.coin_type, arg.account, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("CoinWithdraw", {
            coin_type: bcs_import.string(),
            account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CoinWithdraw(val.coin_type, val.account, val.amount),
        });
    };
}

/* ============================== FreezeCapability =============================== */

export class FreezeCapability implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::FreezeCapability`;

    dummy_field: boolean;

    constructor(dummy_field: boolean) {
        this.dummy_field = dummy_field;
    }

    into_value() {
        return {
            dummy_field: (this.dummy_field as unknown as StructClass).into_value ? (this.dummy_field as unknown as StructClass).into_value() : this.dummy_field
        }
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
        return FreezeCapability.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return FreezeCapability.from_bcs_vector(args)
    }

    get_bcs() {
        return FreezeCapability.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::FreezeCapability`
    }

    from(arg: FreezeCapability) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): FreezeCapability {
        return new FreezeCapability(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): FreezeCapability[] {
        return args.map(function(arg) {
            return new FreezeCapability(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("FreezeCapability", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new FreezeCapability(val.dummy_field),
        });
    };
}

/* ============================== MigrationFlag =============================== */

export class MigrationFlag implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::MigrationFlag`;

    dummy_field: boolean;

    constructor(dummy_field ? : boolean) {
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
        return MigrationFlag.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return MigrationFlag.from_bcs_vector(args)
    }

    get_bcs() {
        return MigrationFlag.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::MigrationFlag`
    }

    from(arg: MigrationFlag) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): MigrationFlag {
        return new MigrationFlag(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): MigrationFlag[] {
        return args.map(function(arg) {
            return new MigrationFlag(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("MigrationFlag", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new MigrationFlag(val.dummy_field),
        });
    };
}

/* ============================== MintCapability =============================== */

export class MintCapability implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::MintCapability`;

    dummy_field: boolean;

    constructor(dummy_field: boolean) {
        this.dummy_field = dummy_field;
    }

    into_value() {
        return {
            dummy_field: (this.dummy_field as unknown as StructClass).into_value ? (this.dummy_field as unknown as StructClass).into_value() : this.dummy_field
        }
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
        return MintCapability.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return MintCapability.from_bcs_vector(args)
    }

    get_bcs() {
        return MintCapability.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::MintCapability`
    }

    from(arg: MintCapability) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): MintCapability {
        return new MintCapability(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): MintCapability[] {
        return args.map(function(arg) {
            return new MintCapability(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("MintCapability", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new MintCapability(val.dummy_field),
        });
    };
}

/* ============================== MintRefReceipt =============================== */

export class MintRefReceipt implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::MintRefReceipt`;

    metadata: Object_;

    constructor(metadata: Object_) {
        this.metadata = metadata;
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
        return MintRefReceipt.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return MintRefReceipt.from_bcs_vector(args)
    }

    get_bcs() {
        return MintRefReceipt.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::MintRefReceipt`
    }

    from(arg: MintRefReceipt) {
        this.metadata = arg.metadata;
    }

    static from_bcs(arg: {
        metadata: Object_
    }): MintRefReceipt {
        return new MintRefReceipt(arg.metadata)
    }

    static from_bcs_vector(args: {
        metadata: Object_
    } []): MintRefReceipt[] {
        return args.map(function(arg) {
            return new MintRefReceipt(arg.metadata)
        })
    }

    static get bcs() {
        return bcs_import.struct("MintRefReceipt", {
            metadata: Object_.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new MintRefReceipt(val.metadata),
        });
    };
}

/* ============================== PairCreation =============================== */

export class PairCreation implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PairCreation`;

    coin_type: TypeInfo;
    fungible_asset_metadata_address: string;

    constructor(coin_type: TypeInfo, fungible_asset_metadata_address: string) {
        this.coin_type = coin_type;
        this.fungible_asset_metadata_address = fungible_asset_metadata_address;
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
        return PairCreation.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PairCreation.from_bcs_vector(args)
    }

    get_bcs() {
        return PairCreation.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PairCreation`
    }

    from(arg: PairCreation) {
        this.coin_type = arg.coin_type;
        this.fungible_asset_metadata_address = arg.fungible_asset_metadata_address;
    }

    static from_bcs(arg: {
        coin_type: TypeInfo,
        fungible_asset_metadata_address: string
    }): PairCreation {
        return new PairCreation(arg.coin_type, arg.fungible_asset_metadata_address)
    }

    static from_bcs_vector(args: {
        coin_type: TypeInfo,
        fungible_asset_metadata_address: string
    } []): PairCreation[] {
        return args.map(function(arg) {
            return new PairCreation(arg.coin_type, arg.fungible_asset_metadata_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("PairCreation", {
            coin_type: TypeInfo.bcs,
            fungible_asset_metadata_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PairCreation(val.coin_type, val.fungible_asset_metadata_address),
        });
    };
}

/* ============================== PairedCoinType =============================== */

export class PairedCoinType implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PairedCoinType`;

    type: TypeInfo;

    constructor(type ? : TypeInfo) {
        this.type = type;
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
        return PairedCoinType.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PairedCoinType.from_bcs_vector(args)
    }

    get_bcs() {
        return PairedCoinType.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PairedCoinType`
    }

    from(arg: PairedCoinType) {
        this.type = arg.type;
    }

    static from_bcs(arg: {
        type: TypeInfo
    }): PairedCoinType {
        return new PairedCoinType(arg.type)
    }

    static from_bcs_vector(args: {
        type: TypeInfo
    } []): PairedCoinType[] {
        return args.map(function(arg) {
            return new PairedCoinType(arg.type)
        })
    }

    static get bcs() {
        return bcs_import.struct("PairedCoinType", {
            type: TypeInfo.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PairedCoinType(val.type),
        });
    };
}

/* ============================== PairedFungibleAssetRefs =============================== */

export class PairedFungibleAssetRefs implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PairedFungibleAssetRefs`;

    mint_ref_opt: Option < MintRef > ;
    transfer_ref_opt: Option < TransferRef > ;
    burn_ref_opt: Option < BurnRef > ;

    constructor(mint_ref_opt ? : Option < MintRef > , transfer_ref_opt ? : Option < TransferRef > , burn_ref_opt ? : Option < BurnRef > ) {
        this.mint_ref_opt = mint_ref_opt;
        this.transfer_ref_opt = transfer_ref_opt;
        this.burn_ref_opt = burn_ref_opt;
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
        return PairedFungibleAssetRefs.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PairedFungibleAssetRefs.from_bcs_vector(args)
    }

    get_bcs() {
        return PairedFungibleAssetRefs.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PairedFungibleAssetRefs`
    }

    from(arg: PairedFungibleAssetRefs) {
        this.mint_ref_opt = arg.mint_ref_opt;
        this.transfer_ref_opt = arg.transfer_ref_opt;
        this.burn_ref_opt = arg.burn_ref_opt;
    }

    static from_bcs(arg: {
        mint_ref_opt: Option < MintRef > ,
        transfer_ref_opt: Option < TransferRef > ,
        burn_ref_opt: Option < BurnRef >
    }): PairedFungibleAssetRefs {
        return new PairedFungibleAssetRefs(arg.mint_ref_opt, arg.transfer_ref_opt, arg.burn_ref_opt)
    }

    static from_bcs_vector(args: {
        mint_ref_opt: Option < MintRef > ,
        transfer_ref_opt: Option < TransferRef > ,
        burn_ref_opt: Option < BurnRef >
    } []): PairedFungibleAssetRefs[] {
        return args.map(function(arg) {
            return new PairedFungibleAssetRefs(arg.mint_ref_opt, arg.transfer_ref_opt, arg.burn_ref_opt)
        })
    }

    static get bcs() {
        return bcs_import.struct("PairedFungibleAssetRefs", {
            mint_ref_opt: Option.bcs(MintRef.bcs),
            transfer_ref_opt: Option.bcs(TransferRef.bcs),
            burn_ref_opt: Option.bcs(BurnRef.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PairedFungibleAssetRefs(val.mint_ref_opt, val.transfer_ref_opt, val.burn_ref_opt),
        });
    };
}

/* ============================== SupplyConfig =============================== */

export class SupplyConfig implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SupplyConfig`;

    allow_upgrades: boolean;

    constructor(allow_upgrades ? : boolean) {
        this.allow_upgrades = allow_upgrades;
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
        return SupplyConfig.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SupplyConfig.from_bcs_vector(args)
    }

    get_bcs() {
        return SupplyConfig.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SupplyConfig`
    }

    from(arg: SupplyConfig) {
        this.allow_upgrades = arg.allow_upgrades;
    }

    static from_bcs(arg: {
        allow_upgrades: boolean
    }): SupplyConfig {
        return new SupplyConfig(arg.allow_upgrades)
    }

    static from_bcs_vector(args: {
        allow_upgrades: boolean
    } []): SupplyConfig[] {
        return args.map(function(arg) {
            return new SupplyConfig(arg.allow_upgrades)
        })
    }

    static get bcs() {
        return bcs_import.struct("SupplyConfig", {
            allow_upgrades: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new SupplyConfig(val.allow_upgrades),
        });
    };
}

/* ============================== TransferRefReceipt =============================== */

export class TransferRefReceipt implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TransferRefReceipt`;

    metadata: Object_;

    constructor(metadata: Object_) {
        this.metadata = metadata;
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
        return TransferRefReceipt.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TransferRefReceipt.from_bcs_vector(args)
    }

    get_bcs() {
        return TransferRefReceipt.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TransferRefReceipt`
    }

    from(arg: TransferRefReceipt) {
        this.metadata = arg.metadata;
    }

    static from_bcs(arg: {
        metadata: Object_
    }): TransferRefReceipt {
        return new TransferRefReceipt(arg.metadata)
    }

    static from_bcs_vector(args: {
        metadata: Object_
    } []): TransferRefReceipt[] {
        return args.map(function(arg) {
            return new TransferRefReceipt(arg.metadata)
        })
    }

    static get bcs() {
        return bcs_import.struct("TransferRefReceipt", {
            metadata: Object_.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TransferRefReceipt(val.metadata),
        });
    };
}

function extract < T0 extends StructClass > (type_args: string[], arg0: Coin, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "extract", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Coin);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function initialize < T0 extends StructClass > (type_args: string[], arg0: string, arg1: string_import, arg2: string_import, arg3: number, arg4: boolean): [Uint8Array, Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg4).toBytes(), "")
    ]

    let [r0, r1, r2] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0]),
        new Uint8Array(r2.Raw[0])
    ];
}

function burn < T0 extends StructClass > (type_args: string[], arg0: Coin, arg1: BurnCapability) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn", type_args, args);
}

function transfer < T0 extends StructClass > (type_args: string[], arg0: string, arg1: string, arg2: u64_import) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer", type_args, args);
}

function value < T0 extends StructClass > (type_args: string[], arg0: Coin): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "value", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function balance < T0 extends StructClass > (type_args: string[], arg0: string): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "balance", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function burn_from < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import, arg2: BurnCapability) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn_from", type_args, args);
}

function burn_internal < T0 extends StructClass > (type_args: string[], arg0: Coin): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function decimals < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "decimals", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function deposit < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Coin) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deposit", type_args, args);
}

function destroy_zero < T0 extends StructClass > (type_args: string[], arg0: Coin) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_zero", type_args, args);
}

function is_balance_at_least < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_balance_at_least", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function merge < T0 extends StructClass > (type_args: string[], arg0: Coin, arg1: Coin) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "merge", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Coin);
}

function mint < T0 extends StructClass > (type_args: string[], arg0: u64_import, arg1: MintCapability): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mint", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function mint_internal < T0 extends StructClass > (type_args: string[], arg0: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mint_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function name < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "name", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function supply < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "supply", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function symbol < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "symbol", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function withdraw < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "withdraw", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function zero < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "zero", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function force_deposit < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Coin) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "force_deposit", type_args, args);
}

function allow_supply_upgrades(arg0: string, arg1: boolean) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "allow_supply_upgrades", [], args);

}

function coin_address < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "coin_address", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function coin_supply < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "coin_supply", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function coin_to_fungible_asset < T0 extends StructClass > (type_args: string[], arg0: Coin): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "coin_to_fungible_asset", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function collect_into_aggregatable_coin < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import, arg2: AggregatableCoin) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "collect_into_aggregatable_coin", type_args, args);
    arg2.from(arg2.from_bcs_t(new Uint8Array(a0.Raw[0])) as AggregatableCoin);
}

function convert_and_take_paired_burn_ref < T0 extends StructClass > (type_args: string[], arg0: BurnCapability): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "convert_and_take_paired_burn_ref", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function create_coin_conversion_map(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_coin_conversion_map", [], args);

}

function create_pairing < T0 extends StructClass > (type_args: string[], arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_pairing", type_args, args);
}

function destroy_burn_cap < T0 extends StructClass > (type_args: string[], arg0: BurnCapability) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_burn_cap", type_args, args);
}

function destroy_freeze_cap < T0 extends StructClass > (type_args: string[], arg0: FreezeCapability) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_freeze_cap", type_args, args);
}

function destroy_mint_cap < T0 extends StructClass > (type_args: string[], arg0: MintCapability) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_mint_cap", type_args, args);
}

function drain_aggregatable_coin < T0 extends StructClass > (type_args: string[], arg0: AggregatableCoin): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "drain_aggregatable_coin", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as AggregatableCoin);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function ensure_paired_metadata < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ensure_paired_metadata", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function extract_all < T0 extends StructClass > (type_args: string[], arg0: Coin): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "extract_all", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Coin);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function freeze_coin_store < T0 extends StructClass > (type_args: string[], arg0: string, arg1: FreezeCapability) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "freeze_coin_store", type_args, args);
}

function fungible_asset_to_coin < T0 extends StructClass > (type_args: string[], arg0: FungibleAsset): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "fungible_asset_to_coin", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function get_paired_burn_ref < T0 extends StructClass > (type_args: string[], arg0: BurnCapability): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_paired_burn_ref", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function get_paired_mint_ref < T0 extends StructClass > (type_args: string[], arg0: MintCapability): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_paired_mint_ref", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function get_paired_transfer_ref < T0 extends StructClass > (type_args: string[], arg0: FreezeCapability): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_paired_transfer_ref", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function initialize_aggregatable_coin < T0 extends StructClass > (type_args: string[], arg0: string): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_aggregatable_coin", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function initialize_internal < T0 extends StructClass > (type_args: string[], arg0: string, arg1: string_import, arg2: string_import, arg3: number, arg4: boolean, arg5: boolean): [Uint8Array, Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg5).toBytes(), "")
    ]

    let [r0, r1, r2] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0]),
        new Uint8Array(r2.Raw[0])
    ];
}

function initialize_supply_config(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_supply_config", [], args);

}

function initialize_with_parallelizable_supply < T0 extends StructClass > (type_args: string[], arg0: string, arg1: string_import, arg2: string_import, arg3: number, arg4: boolean): [Uint8Array, Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg4).toBytes(), "")
    ]

    let [r0, r1, r2] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_with_parallelizable_supply", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0]),
        new Uint8Array(r2.Raw[0])
    ];
}

function is_account_registered < T0 extends StructClass > (type_args: string[], arg0: string): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_account_registered", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function is_aggregatable_coin_zero < T0 extends StructClass > (type_args: string[], arg0: AggregatableCoin): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_aggregatable_coin_zero", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function is_coin_initialized < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_coin_initialized", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function is_coin_store_frozen < T0 extends StructClass > (type_args: string[], arg0: string): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_coin_store_frozen", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function maybe_convert_to_fungible_store < T0 extends StructClass > (type_args: string[], arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "maybe_convert_to_fungible_store", type_args, args);
}

function merge_aggregatable_coin < T0 extends StructClass > (type_args: string[], arg0: AggregatableCoin, arg1: Coin) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "merge_aggregatable_coin", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as AggregatableCoin);
}

function migrate_to_fungible_store < T0 extends StructClass > (type_args: string[], arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "migrate_to_fungible_store", type_args, args);
}

function paired_burn_ref_exists < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "paired_burn_ref_exists", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function paired_coin(arg0: Object_): [Option < TypeInfo > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Object_.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "paired_coin", [], args);

    return [
        Option.from_bcs(Option.bcs(TypeInfo.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function paired_metadata < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "paired_metadata", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function paired_mint_ref_exists < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "paired_mint_ref_exists", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function paired_transfer_ref_exists < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "paired_transfer_ref_exists", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
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

function return_paired_burn_ref(arg0: BurnRef, arg1: BurnRefReceipt) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BurnRef.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(BurnRefReceipt.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "return_paired_burn_ref", [], args);

}

function return_paired_mint_ref(arg0: MintRef, arg1: MintRefReceipt) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(MintRef.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(MintRefReceipt.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "return_paired_mint_ref", [], args);

}

function return_paired_transfer_ref(arg0: TransferRef, arg1: TransferRefReceipt) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TransferRef.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(TransferRefReceipt.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "return_paired_transfer_ref", [], args);

}

function unfreeze_coin_store < T0 extends StructClass > (type_args: string[], arg0: string, arg1: FreezeCapability) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unfreeze_coin_store", type_args, args);
}

function upgrade_supply < T0 extends StructClass > (type_args: string[], arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upgrade_supply", type_args, args);
}

function withdraw_from < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "withdraw_from", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

export const coin = {
    Deposit,
    DepositEvent,
    Withdraw,
    WithdrawEvent,
    AggregatableCoin,
    BurnCapability,
    BurnRefReceipt,
    Coin,
    CoinConversionMap,
    CoinDeposit,
    CoinEventHandleDeletion,
    CoinInfo,
    CoinStore,
    CoinWithdraw,
    FreezeCapability,
    MigrationFlag,
    MintCapability,
    MintRefReceipt,
    PairCreation,
    PairedCoinType,
    PairedFungibleAssetRefs,
    SupplyConfig,
    TransferRefReceipt,
    extract,
    initialize,
    burn,
    transfer,
    value,
    balance,
    burn_from,
    burn_internal,
    decimals,
    deposit,
    destroy_zero,
    is_balance_at_least,
    merge,
    mint,
    mint_internal,
    name,
    supply,
    symbol,
    withdraw,
    zero,
    force_deposit,
    allow_supply_upgrades,
    coin_address,
    coin_supply,
    coin_to_fungible_asset,
    collect_into_aggregatable_coin,
    convert_and_take_paired_burn_ref,
    create_coin_conversion_map,
    create_pairing,
    destroy_burn_cap,
    destroy_freeze_cap,
    destroy_mint_cap,
    drain_aggregatable_coin,
    ensure_paired_metadata,
    extract_all,
    freeze_coin_store,
    fungible_asset_to_coin,
    get_paired_burn_ref,
    get_paired_mint_ref,
    get_paired_transfer_ref,
    initialize_aggregatable_coin,
    initialize_internal,
    initialize_supply_config,
    initialize_with_parallelizable_supply,
    is_account_registered,
    is_aggregatable_coin_zero,
    is_coin_initialized,
    is_coin_store_frozen,
    maybe_convert_to_fungible_store,
    merge_aggregatable_coin,
    migrate_to_fungible_store,
    paired_burn_ref_exists,
    paired_coin,
    paired_metadata,
    paired_mint_ref_exists,
    paired_transfer_ref_exists,
    register,
    return_paired_burn_ref,
    return_paired_mint_ref,
    return_paired_transfer_ref,
    unfreeze_coin_store,
    upgrade_supply,
    withdraw_from
}