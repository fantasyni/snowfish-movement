import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    Aggregator
} from "./aggregator_v2";
import {
    EventHandle
} from "./event";
import {
    FunctionInfo
} from "./function_info";
import {
    ConstructorRef,
    DeleteRef,
    ExtendRef,
    Object_
} from "./object";
import {
    Option
} from "./option";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "fungible_asset";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== TransferRef =============================== */

export class TransferRef implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TransferRef`;

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
        return TransferRef.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TransferRef.from_bcs_vector(args)
    }

    get_bcs() {
        return TransferRef.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TransferRef`
    }

    from(arg: TransferRef) {
        this.metadata = arg.metadata;
    }

    static from_bcs(arg: {
        metadata: Object_
    }): TransferRef {
        return new TransferRef(arg.metadata)
    }

    static from_bcs_vector(args: {
        metadata: Object_
    } []): TransferRef[] {
        return args.map(function(arg) {
            return new TransferRef(arg.metadata)
        })
    }

    static get bcs() {
        return bcs_import.struct("TransferRef", {
            metadata: Object_.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TransferRef(val.metadata),
        });
    };
}

/* ============================== Untransferable =============================== */

export class Untransferable implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Untransferable`;

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
        return Untransferable.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Untransferable.from_bcs_vector(args)
    }

    get_bcs() {
        return Untransferable.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Untransferable`
    }

    from(arg: Untransferable) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): Untransferable {
        return new Untransferable(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): Untransferable[] {
        return args.map(function(arg) {
            return new Untransferable(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("Untransferable", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Untransferable(val.dummy_field),
        });
    };
}

/* ============================== BurnRef =============================== */

export class BurnRef implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BurnRef`;

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
        return BurnRef.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BurnRef.from_bcs_vector(args)
    }

    get_bcs() {
        return BurnRef.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BurnRef`
    }

    from(arg: BurnRef) {
        this.metadata = arg.metadata;
    }

    static from_bcs(arg: {
        metadata: Object_
    }): BurnRef {
        return new BurnRef(arg.metadata)
    }

    static from_bcs_vector(args: {
        metadata: Object_
    } []): BurnRef[] {
        return args.map(function(arg) {
            return new BurnRef(arg.metadata)
        })
    }

    static get bcs() {
        return bcs_import.struct("BurnRef", {
            metadata: Object_.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BurnRef(val.metadata),
        });
    };
}

/* ============================== ConcurrentFungibleBalance =============================== */

export class ConcurrentFungibleBalance implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ConcurrentFungibleBalance`;

    balance: Aggregator < u64_import > ;

    constructor(balance ? : Aggregator < u64_import > ) {
        this.balance = balance;
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
        return ConcurrentFungibleBalance.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ConcurrentFungibleBalance.from_bcs_vector(args)
    }

    get_bcs() {
        return ConcurrentFungibleBalance.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ConcurrentFungibleBalance`
    }

    from(arg: ConcurrentFungibleBalance) {
        this.balance = arg.balance;
    }

    static from_bcs(arg: {
        balance: Aggregator < u64_import >
    }): ConcurrentFungibleBalance {
        return new ConcurrentFungibleBalance(arg.balance)
    }

    static from_bcs_vector(args: {
        balance: Aggregator < u64_import >
    } []): ConcurrentFungibleBalance[] {
        return args.map(function(arg) {
            return new ConcurrentFungibleBalance(arg.balance)
        })
    }

    static get bcs() {
        return bcs_import.struct("ConcurrentFungibleBalance", {
            balance: Aggregator.bcs(bcs_import.u64()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ConcurrentFungibleBalance(val.balance),
        });
    };
}

/* ============================== ConcurrentSupply =============================== */

export class ConcurrentSupply implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ConcurrentSupply`;

    current: Aggregator < u64_import > ;

    constructor(current ? : Aggregator < u64_import > ) {
        this.current = current;
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
        return ConcurrentSupply.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ConcurrentSupply.from_bcs_vector(args)
    }

    get_bcs() {
        return ConcurrentSupply.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ConcurrentSupply`
    }

    from(arg: ConcurrentSupply) {
        this.current = arg.current;
    }

    static from_bcs(arg: {
        current: Aggregator < u64_import >
    }): ConcurrentSupply {
        return new ConcurrentSupply(arg.current)
    }

    static from_bcs_vector(args: {
        current: Aggregator < u64_import >
    } []): ConcurrentSupply[] {
        return args.map(function(arg) {
            return new ConcurrentSupply(arg.current)
        })
    }

    static get bcs() {
        return bcs_import.struct("ConcurrentSupply", {
            current: Aggregator.bcs(bcs_import.u128()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ConcurrentSupply(val.current),
        });
    };
}

/* ============================== Deposit =============================== */

export class Deposit implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Deposit`;

    store: string;
    amount: u64_import;

    constructor(store: string, amount: u64_import) {
        this.store = store;
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
        this.store = arg.store;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        store: string,
        amount: u64_import
    }): Deposit {
        return new Deposit(arg.store, arg.amount)
    }

    static from_bcs_vector(args: {
        store: string,
        amount: u64_import
    } []): Deposit[] {
        return args.map(function(arg) {
            return new Deposit(arg.store, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("Deposit", {
            store: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Deposit(val.store, val.amount),
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

/* ============================== DispatchFunctionStore =============================== */

export class DispatchFunctionStore implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DispatchFunctionStore`;

    withdraw_function: Option < FunctionInfo > ;
    deposit_function: Option < FunctionInfo > ;
    derived_balance_function: Option < FunctionInfo > ;

    constructor(withdraw_function ? : Option < FunctionInfo > , deposit_function ? : Option < FunctionInfo > , derived_balance_function ? : Option < FunctionInfo > ) {
        this.withdraw_function = withdraw_function;
        this.deposit_function = deposit_function;
        this.derived_balance_function = derived_balance_function;
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
        return DispatchFunctionStore.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DispatchFunctionStore.from_bcs_vector(args)
    }

    get_bcs() {
        return DispatchFunctionStore.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DispatchFunctionStore`
    }

    from(arg: DispatchFunctionStore) {
        this.withdraw_function = arg.withdraw_function;
        this.deposit_function = arg.deposit_function;
        this.derived_balance_function = arg.derived_balance_function;
    }

    static from_bcs(arg: {
        withdraw_function: Option < FunctionInfo > ,
        deposit_function: Option < FunctionInfo > ,
        derived_balance_function: Option < FunctionInfo >
    }): DispatchFunctionStore {
        return new DispatchFunctionStore(arg.withdraw_function, arg.deposit_function, arg.derived_balance_function)
    }

    static from_bcs_vector(args: {
        withdraw_function: Option < FunctionInfo > ,
        deposit_function: Option < FunctionInfo > ,
        derived_balance_function: Option < FunctionInfo >
    } []): DispatchFunctionStore[] {
        return args.map(function(arg) {
            return new DispatchFunctionStore(arg.withdraw_function, arg.deposit_function, arg.derived_balance_function)
        })
    }

    static get bcs() {
        return bcs_import.struct("DispatchFunctionStore", {
            withdraw_function: Option.bcs(FunctionInfo.bcs),
            deposit_function: Option.bcs(FunctionInfo.bcs),
            derived_balance_function: Option.bcs(FunctionInfo.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DispatchFunctionStore(val.withdraw_function, val.deposit_function, val.derived_balance_function),
        });
    };
}

/* ============================== Frozen =============================== */

export class Frozen implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Frozen`;

    store: string;
    frozen: boolean;

    constructor(store: string, frozen: boolean) {
        this.store = store;
        this.frozen = frozen;
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
        return Frozen.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Frozen.from_bcs_vector(args)
    }

    get_bcs() {
        return Frozen.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Frozen`
    }

    from(arg: Frozen) {
        this.store = arg.store;
        this.frozen = arg.frozen;
    }

    static from_bcs(arg: {
        store: string,
        frozen: boolean
    }): Frozen {
        return new Frozen(arg.store, arg.frozen)
    }

    static from_bcs_vector(args: {
        store: string,
        frozen: boolean
    } []): Frozen[] {
        return args.map(function(arg) {
            return new Frozen(arg.store, arg.frozen)
        })
    }

    static get bcs() {
        return bcs_import.struct("Frozen", {
            store: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            frozen: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Frozen(val.store, val.frozen),
        });
    };
}

/* ============================== FrozenEvent =============================== */

export class FrozenEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::FrozenEvent`;

    frozen: boolean;

    constructor(frozen: boolean) {
        this.frozen = frozen;
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
        return FrozenEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return FrozenEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return FrozenEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::FrozenEvent`
    }

    from(arg: FrozenEvent) {
        this.frozen = arg.frozen;
    }

    static from_bcs(arg: {
        frozen: boolean
    }): FrozenEvent {
        return new FrozenEvent(arg.frozen)
    }

    static from_bcs_vector(args: {
        frozen: boolean
    } []): FrozenEvent[] {
        return args.map(function(arg) {
            return new FrozenEvent(arg.frozen)
        })
    }

    static get bcs() {
        return bcs_import.struct("FrozenEvent", {
            frozen: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new FrozenEvent(val.frozen),
        });
    };
}

/* ============================== FungibleAsset =============================== */

export class FungibleAsset implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::FungibleAsset`;

    metadata: Object_;
    amount: u64_import;

    constructor(metadata: Object_, amount: u64_import) {
        this.metadata = metadata;
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
        return FungibleAsset.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return FungibleAsset.from_bcs_vector(args)
    }

    get_bcs() {
        return FungibleAsset.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::FungibleAsset`
    }

    from(arg: FungibleAsset) {
        this.metadata = arg.metadata;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        metadata: Object_,
        amount: u64_import
    }): FungibleAsset {
        return new FungibleAsset(arg.metadata, arg.amount)
    }

    static from_bcs_vector(args: {
        metadata: Object_,
        amount: u64_import
    } []): FungibleAsset[] {
        return args.map(function(arg) {
            return new FungibleAsset(arg.metadata, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("FungibleAsset", {
            metadata: Object_.bcs,
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new FungibleAsset(val.metadata, val.amount),
        });
    };
}

/* ============================== FungibleAssetEvents =============================== */

export class FungibleAssetEvents implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::FungibleAssetEvents`;

    deposit_events: EventHandle;
    withdraw_events: EventHandle;
    frozen_events: EventHandle;

    constructor(deposit_events ? : EventHandle, withdraw_events ? : EventHandle, frozen_events ? : EventHandle) {
        this.deposit_events = deposit_events;
        this.withdraw_events = withdraw_events;
        this.frozen_events = frozen_events;
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
        return FungibleAssetEvents.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return FungibleAssetEvents.from_bcs_vector(args)
    }

    get_bcs() {
        return FungibleAssetEvents.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::FungibleAssetEvents`
    }

    from(arg: FungibleAssetEvents) {
        this.deposit_events = arg.deposit_events;
        this.withdraw_events = arg.withdraw_events;
        this.frozen_events = arg.frozen_events;
    }

    static from_bcs(arg: {
        deposit_events: EventHandle,
        withdraw_events: EventHandle,
        frozen_events: EventHandle
    }): FungibleAssetEvents {
        return new FungibleAssetEvents(arg.deposit_events, arg.withdraw_events, arg.frozen_events)
    }

    static from_bcs_vector(args: {
        deposit_events: EventHandle,
        withdraw_events: EventHandle,
        frozen_events: EventHandle
    } []): FungibleAssetEvents[] {
        return args.map(function(arg) {
            return new FungibleAssetEvents(arg.deposit_events, arg.withdraw_events, arg.frozen_events)
        })
    }

    static get bcs() {
        return bcs_import.struct("FungibleAssetEvents", {
            deposit_events: EventHandle.bcs,
            withdraw_events: EventHandle.bcs,
            frozen_events: EventHandle.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new FungibleAssetEvents(val.deposit_events, val.withdraw_events, val.frozen_events),
        });
    };
}

/* ============================== FungibleStore =============================== */

export class FungibleStore implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::FungibleStore`;

    metadata: Object_;
    balance: u64_import;
    frozen: boolean;

    constructor(metadata ? : Object_, balance ? : u64_import, frozen ? : boolean) {
        this.metadata = metadata;
        this.balance = balance;
        this.frozen = frozen;
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
        return FungibleStore.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return FungibleStore.from_bcs_vector(args)
    }

    get_bcs() {
        return FungibleStore.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::FungibleStore`
    }

    from(arg: FungibleStore) {
        this.metadata = arg.metadata;
        this.balance = arg.balance;
        this.frozen = arg.frozen;
    }

    static from_bcs(arg: {
        metadata: Object_,
        balance: u64_import,
        frozen: boolean
    }): FungibleStore {
        return new FungibleStore(arg.metadata, arg.balance, arg.frozen)
    }

    static from_bcs_vector(args: {
        metadata: Object_,
        balance: u64_import,
        frozen: boolean
    } []): FungibleStore[] {
        return args.map(function(arg) {
            return new FungibleStore(arg.metadata, arg.balance, arg.frozen)
        })
    }

    static get bcs() {
        return bcs_import.struct("FungibleStore", {
            metadata: Object_.bcs,
            balance: bcs_import.u64(),
            frozen: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new FungibleStore(val.metadata, val.balance, val.frozen),
        });
    };
}

/* ============================== Metadata =============================== */

export class Metadata implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Metadata`;

    name: string;
    symbol: string;
    decimals: number;
    icon_uri: string;
    project_uri: string;

    constructor(name ? : string, symbol ? : string, decimals ? : number, icon_uri ? : string, project_uri ? : string) {
        this.name = name;
        this.symbol = symbol;
        this.decimals = decimals;
        this.icon_uri = icon_uri;
        this.project_uri = project_uri;
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
        return Metadata.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Metadata.from_bcs_vector(args)
    }

    get_bcs() {
        return Metadata.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Metadata`
    }

    from(arg: Metadata) {
        this.name = arg.name;
        this.symbol = arg.symbol;
        this.decimals = arg.decimals;
        this.icon_uri = arg.icon_uri;
        this.project_uri = arg.project_uri;
    }

    static from_bcs(arg: {
        name: string,
        symbol: string,
        decimals: number,
        icon_uri: string,
        project_uri: string
    }): Metadata {
        return new Metadata(arg.name, arg.symbol, arg.decimals, arg.icon_uri, arg.project_uri)
    }

    static from_bcs_vector(args: {
        name: string,
        symbol: string,
        decimals: number,
        icon_uri: string,
        project_uri: string
    } []): Metadata[] {
        return args.map(function(arg) {
            return new Metadata(arg.name, arg.symbol, arg.decimals, arg.icon_uri, arg.project_uri)
        })
    }

    static get bcs() {
        return bcs_import.struct("Metadata", {
            name: bcs_import.string(),
            symbol: bcs_import.string(),
            decimals: bcs_import.u8(),
            icon_uri: bcs_import.string(),
            project_uri: bcs_import.string(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Metadata(val.name, val.symbol, val.decimals, val.icon_uri, val.project_uri),
        });
    };
}

/* ============================== MintRef =============================== */

export class MintRef implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::MintRef`;

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
        return MintRef.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return MintRef.from_bcs_vector(args)
    }

    get_bcs() {
        return MintRef.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::MintRef`
    }

    from(arg: MintRef) {
        this.metadata = arg.metadata;
    }

    static from_bcs(arg: {
        metadata: Object_
    }): MintRef {
        return new MintRef(arg.metadata)
    }

    static from_bcs_vector(args: {
        metadata: Object_
    } []): MintRef[] {
        return args.map(function(arg) {
            return new MintRef(arg.metadata)
        })
    }

    static get bcs() {
        return bcs_import.struct("MintRef", {
            metadata: Object_.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new MintRef(val.metadata),
        });
    };
}

/* ============================== MutateMetadataRef =============================== */

export class MutateMetadataRef implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::MutateMetadataRef`;

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
        return MutateMetadataRef.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return MutateMetadataRef.from_bcs_vector(args)
    }

    get_bcs() {
        return MutateMetadataRef.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::MutateMetadataRef`
    }

    from(arg: MutateMetadataRef) {
        this.metadata = arg.metadata;
    }

    static from_bcs(arg: {
        metadata: Object_
    }): MutateMetadataRef {
        return new MutateMetadataRef(arg.metadata)
    }

    static from_bcs_vector(args: {
        metadata: Object_
    } []): MutateMetadataRef[] {
        return args.map(function(arg) {
            return new MutateMetadataRef(arg.metadata)
        })
    }

    static get bcs() {
        return bcs_import.struct("MutateMetadataRef", {
            metadata: Object_.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new MutateMetadataRef(val.metadata),
        });
    };
}

/* ============================== Supply =============================== */

export class Supply implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Supply`;

    current: u64_import;
    maximum: Option < u64_import > ;

    constructor(current ? : u64_import, maximum ? : Option < u64_import > ) {
        this.current = current;
        this.maximum = maximum;
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
        return Supply.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Supply.from_bcs_vector(args)
    }

    get_bcs() {
        return Supply.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Supply`
    }

    from(arg: Supply) {
        this.current = arg.current;
        this.maximum = arg.maximum;
    }

    static from_bcs(arg: {
        current: u64_import,
        maximum: Option < u64_import >
    }): Supply {
        return new Supply(arg.current, arg.maximum)
    }

    static from_bcs_vector(args: {
        current: u64_import,
        maximum: Option < u64_import >
    } []): Supply[] {
        return args.map(function(arg) {
            return new Supply(arg.current, arg.maximum)
        })
    }

    static get bcs() {
        return bcs_import.struct("Supply", {
            current: bcs_import.u128(),
            maximum: Option.bcs(bcs_import.u128()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Supply(val.current, val.maximum),
        });
    };
}

/* ============================== Withdraw =============================== */

export class Withdraw implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Withdraw`;

    store: string;
    amount: u64_import;

    constructor(store: string, amount: u64_import) {
        this.store = store;
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
        this.store = arg.store;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        store: string,
        amount: u64_import
    }): Withdraw {
        return new Withdraw(arg.store, arg.amount)
    }

    static from_bcs_vector(args: {
        store: string,
        amount: u64_import
    } []): Withdraw[] {
        return args.map(function(arg) {
            return new Withdraw(arg.store, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("Withdraw", {
            store: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Withdraw(val.store, val.amount),
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

function extract(arg0: FungibleAsset, arg1: u64_import): [FungibleAsset] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FungibleAsset.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "extract", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        FungibleAsset.from_bcs(FungibleAsset.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function burn(arg0: BurnRef, arg1: FungibleAsset) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BurnRef.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FungibleAsset.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn", [], args);

}

function generate_transfer_ref(arg0: ConstructorRef): [TransferRef] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ConstructorRef.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_transfer_ref", [], args);

    return [
        TransferRef.from_bcs(TransferRef.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function is_untransferable < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_untransferable", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function set_untransferable(arg0: ConstructorRef) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ConstructorRef.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_untransferable", [], args);

}

function transfer < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Object_, arg2: Object_, arg3: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer", type_args, args);
}

function transfer_with_ref < T0 extends StructClass > (type_args: string[], arg0: TransferRef, arg1: Object_, arg2: Object_, arg3: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer_with_ref", type_args, args);
}

function add_fungibility(arg0: ConstructorRef, arg1: Option < u64_import > , arg2: string, arg3: string, arg4: number, arg5: string, arg6: string): [Object_] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ConstructorRef.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Option.bcs(bcs_import.u128()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg5).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg6).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_fungibility", [], args);

    return [
        Object_.from_bcs(Object_.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function address_burn_from(arg0: BurnRef, arg1: string, arg2: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BurnRef.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "address_burn_from", [], args);

}

function amount(arg0: FungibleAsset): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FungibleAsset.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "amount", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function asset_metadata(arg0: FungibleAsset): [Object_] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FungibleAsset.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "asset_metadata", [], args);

    return [
        Object_.from_bcs(Object_.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function balance < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "balance", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function burn_from < T0 extends StructClass > (type_args: string[], arg0: BurnRef, arg1: Object_, arg2: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn_from", type_args, args);
}

function burn_internal(arg0: FungibleAsset): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FungibleAsset.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn_internal", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function burn_ref_metadata(arg0: BurnRef): [Object_] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BurnRef.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn_ref_metadata", [], args);

    return [
        Object_.from_bcs(Object_.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create_store < T0 extends StructClass > (type_args: string[], arg0: ConstructorRef, arg1: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_store", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function decimals < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "decimals", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function decrease_supply < T0 extends StructClass > (type_args: string[], arg0: Object_, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "decrease_supply", type_args, args);
}

function deposit < T0 extends StructClass > (type_args: string[], arg0: Object_, arg1: FungibleAsset) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deposit", type_args, args);
}

function deposit_dispatch_function < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deposit_dispatch_function", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function deposit_internal(arg0: string, arg1: FungibleAsset) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FungibleAsset.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deposit_internal", [], args);

}

function deposit_sanity_check < T0 extends StructClass > (type_args: string[], arg0: Object_, arg1: boolean) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deposit_sanity_check", type_args, args);
}

function deposit_with_ref < T0 extends StructClass > (type_args: string[], arg0: TransferRef, arg1: Object_, arg2: FungibleAsset) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deposit_with_ref", type_args, args);
}

function derived_balance_dispatch_function < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "derived_balance_dispatch_function", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function destroy_zero(arg0: FungibleAsset) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FungibleAsset.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_zero", [], args);

}

function ensure_store_upgraded_to_concurrent_internal(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ensure_store_upgraded_to_concurrent_internal", [], args);

}

function generate_burn_ref(arg0: ConstructorRef): [BurnRef] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ConstructorRef.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_burn_ref", [], args);

    return [
        BurnRef.from_bcs(BurnRef.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function generate_mint_ref(arg0: ConstructorRef): [MintRef] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ConstructorRef.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_mint_ref", [], args);

    return [
        MintRef.from_bcs(MintRef.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function generate_mutate_metadata_ref(arg0: ConstructorRef): [MutateMetadataRef] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ConstructorRef.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_mutate_metadata_ref", [], args);

    return [
        MutateMetadataRef.from_bcs(MutateMetadataRef.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function has_deposit_dispatch_function(arg0: Object_): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Object_.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "has_deposit_dispatch_function", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function has_withdraw_dispatch_function(arg0: Object_): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Object_.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "has_withdraw_dispatch_function", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function icon_uri < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "icon_uri", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function increase_supply < T0 extends StructClass > (type_args: string[], arg0: Object_, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "increase_supply", type_args, args);
}

function is_address_balance_at_least(arg0: string, arg1: u64_import): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_address_balance_at_least", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function is_balance_at_least < T0 extends StructClass > (type_args: string[], arg0: Object_, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_balance_at_least", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function is_frozen < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_frozen", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function is_store_dispatchable < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_store_dispatchable", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function maximum < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "maximum", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function merge(arg0: FungibleAsset, arg1: FungibleAsset) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FungibleAsset.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FungibleAsset.bcs.serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "merge", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function metadata < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "metadata", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function metadata_from_asset(arg0: FungibleAsset): [Object_] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FungibleAsset.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "metadata_from_asset", [], args);

    return [
        Object_.from_bcs(Object_.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function mint(arg0: MintRef, arg1: u64_import): [FungibleAsset] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(MintRef.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mint", [], args);

    return [
        FungibleAsset.from_bcs(FungibleAsset.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function mint_internal(arg0: Object_, arg1: u64_import): [FungibleAsset] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Object_.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mint_internal", [], args);

    return [
        FungibleAsset.from_bcs(FungibleAsset.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function mint_ref_metadata(arg0: MintRef): [Object_] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(MintRef.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mint_ref_metadata", [], args);

    return [
        Object_.from_bcs(Object_.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function mint_to < T0 extends StructClass > (type_args: string[], arg0: MintRef, arg1: Object_, arg2: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mint_to", type_args, args);
}

function mutate_metadata(arg0: MutateMetadataRef, arg1: Option < string > , arg2: Option < string > , arg3: Option < number > , arg4: Option < string > , arg5: Option < string > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(MutateMetadataRef.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Option.bcs(bcs_import.string()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(Option.bcs(bcs_import.string()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(Option.bcs(bcs_import.u8()).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(Option.bcs(bcs_import.string()).serialize(arg4).toBytes(), ""),
        wasm.new_bytes(Option.bcs(bcs_import.string()).serialize(arg5).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mutate_metadata", [], args);

}

function name < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "name", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function object_from_metadata_ref(arg0: MutateMetadataRef): [Object_] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(MutateMetadataRef.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "object_from_metadata_ref", [], args);

    return [
        Object_.from_bcs(Object_.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function project_uri < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "project_uri", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function register_dispatch_functions(arg0: ConstructorRef, arg1: Option < FunctionInfo > , arg2: Option < FunctionInfo > , arg3: Option < FunctionInfo > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ConstructorRef.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Option.bcs(FunctionInfo.bcs).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(Option.bcs(FunctionInfo.bcs).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(Option.bcs(FunctionInfo.bcs).serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "register_dispatch_functions", [], args);

}

function remove_store(arg0: DeleteRef) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DeleteRef.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_store", [], args);

}

function set_frozen_flag < T0 extends StructClass > (type_args: string[], arg0: TransferRef, arg1: Object_, arg2: boolean) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_frozen_flag", type_args, args);
}

function set_frozen_flag_internal < T0 extends StructClass > (type_args: string[], arg0: Object_, arg1: boolean) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_frozen_flag_internal", type_args, args);
}

function store_exists(arg0: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "store_exists", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function store_metadata < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "store_metadata", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function supply < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "supply", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function symbol < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "symbol", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function transfer_ref_metadata(arg0: TransferRef): [Object_] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TransferRef.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer_ref_metadata", [], args);

    return [
        Object_.from_bcs(Object_.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function upgrade_store_to_concurrent < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Object_) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upgrade_store_to_concurrent", type_args, args);
}

function upgrade_to_concurrent(arg0: ExtendRef) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ExtendRef.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upgrade_to_concurrent", [], args);

}

function withdraw < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Object_, arg2: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "withdraw", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function withdraw_dispatch_function < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "withdraw_dispatch_function", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function withdraw_internal(arg0: string, arg1: u64_import): [FungibleAsset] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "withdraw_internal", [], args);

    return [
        FungibleAsset.from_bcs(FungibleAsset.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function withdraw_sanity_check < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Object_, arg2: boolean) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "withdraw_sanity_check", type_args, args);
}

function withdraw_with_ref < T0 extends StructClass > (type_args: string[], arg0: TransferRef, arg1: Object_, arg2: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "withdraw_with_ref", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function zero < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "zero", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

export const fungible_asset = {
    TransferRef,
    Untransferable,
    BurnRef,
    ConcurrentFungibleBalance,
    ConcurrentSupply,
    Deposit,
    DepositEvent,
    DispatchFunctionStore,
    Frozen,
    FrozenEvent,
    FungibleAsset,
    FungibleAssetEvents,
    FungibleStore,
    Metadata,
    MintRef,
    MutateMetadataRef,
    Supply,
    Withdraw,
    WithdrawEvent,
    extract,
    burn,
    generate_transfer_ref,
    is_untransferable,
    set_untransferable,
    transfer,
    transfer_with_ref,
    add_fungibility,
    address_burn_from,
    amount,
    asset_metadata,
    balance,
    burn_from,
    burn_internal,
    burn_ref_metadata,
    create_store,
    decimals,
    decrease_supply,
    deposit,
    deposit_dispatch_function,
    deposit_internal,
    deposit_sanity_check,
    deposit_with_ref,
    derived_balance_dispatch_function,
    destroy_zero,
    ensure_store_upgraded_to_concurrent_internal,
    generate_burn_ref,
    generate_mint_ref,
    generate_mutate_metadata_ref,
    has_deposit_dispatch_function,
    has_withdraw_dispatch_function,
    icon_uri,
    increase_supply,
    is_address_balance_at_least,
    is_balance_at_least,
    is_frozen,
    is_store_dispatchable,
    maximum,
    merge,
    metadata,
    metadata_from_asset,
    mint,
    mint_internal,
    mint_ref_metadata,
    mint_to,
    mutate_metadata,
    name,
    object_from_metadata_ref,
    project_uri,
    register_dispatch_functions,
    remove_store,
    set_frozen_flag,
    set_frozen_flag_internal,
    store_exists,
    store_metadata,
    supply,
    symbol,
    transfer_ref_metadata,
    upgrade_store_to_concurrent,
    upgrade_to_concurrent,
    withdraw,
    withdraw_dispatch_function,
    withdraw_internal,
    withdraw_sanity_check,
    withdraw_with_ref,
    zero
}