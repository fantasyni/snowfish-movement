import {
    Address,
    StructClass,
    U64,
    get_package_address,
    get_wasm,
    has_arr,
    into_arr_bcs_vector,
    into_arr_value,
    u64 as u64_import
} from "../../sui_wasm";
import {
    Coin
} from "./coin";
import {
    EventHandle
} from "./event";
import {
    BurnRef
} from "./fungible_asset";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "aptos_account";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== DirectCoinTransferConfigUpdated =============================== */

export class DirectCoinTransferConfigUpdated implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DirectCoinTransferConfigUpdated`;

    account: string;
    new_allow_direct_transfers: boolean;

    constructor(account: string, new_allow_direct_transfers: boolean) {
        this.account = account;
        this.new_allow_direct_transfers = new_allow_direct_transfers;
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
        return DirectCoinTransferConfigUpdated.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DirectCoinTransferConfigUpdated.from_bcs_vector(args)
    }

    get_bcs() {
        return DirectCoinTransferConfigUpdated.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DirectCoinTransferConfigUpdated`
    }

    from(arg: DirectCoinTransferConfigUpdated) {
        this.account = arg.account;
        this.new_allow_direct_transfers = arg.new_allow_direct_transfers;
    }

    static from_bcs(arg: {
        account: string,
        new_allow_direct_transfers: boolean
    }): DirectCoinTransferConfigUpdated {
        return new DirectCoinTransferConfigUpdated(arg.account, arg.new_allow_direct_transfers)
    }

    static from_bcs_vector(args: {
        account: string,
        new_allow_direct_transfers: boolean
    } []): DirectCoinTransferConfigUpdated[] {
        return args.map(function(arg) {
            return new DirectCoinTransferConfigUpdated(arg.account, arg.new_allow_direct_transfers)
        })
    }

    static get bcs() {
        return bcs_import.struct("DirectCoinTransferConfigUpdated", {
            account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            new_allow_direct_transfers: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DirectCoinTransferConfigUpdated(val.account, val.new_allow_direct_transfers),
        });
    };
}

/* ============================== DirectCoinTransferConfigUpdatedEvent =============================== */

export class DirectCoinTransferConfigUpdatedEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DirectCoinTransferConfigUpdatedEvent`;

    new_allow_direct_transfers: boolean;

    constructor(new_allow_direct_transfers: boolean) {
        this.new_allow_direct_transfers = new_allow_direct_transfers;
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
        return DirectCoinTransferConfigUpdatedEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DirectCoinTransferConfigUpdatedEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return DirectCoinTransferConfigUpdatedEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DirectCoinTransferConfigUpdatedEvent`
    }

    from(arg: DirectCoinTransferConfigUpdatedEvent) {
        this.new_allow_direct_transfers = arg.new_allow_direct_transfers;
    }

    static from_bcs(arg: {
        new_allow_direct_transfers: boolean
    }): DirectCoinTransferConfigUpdatedEvent {
        return new DirectCoinTransferConfigUpdatedEvent(arg.new_allow_direct_transfers)
    }

    static from_bcs_vector(args: {
        new_allow_direct_transfers: boolean
    } []): DirectCoinTransferConfigUpdatedEvent[] {
        return args.map(function(arg) {
            return new DirectCoinTransferConfigUpdatedEvent(arg.new_allow_direct_transfers)
        })
    }

    static get bcs() {
        return bcs_import.struct("DirectCoinTransferConfigUpdatedEvent", {
            new_allow_direct_transfers: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DirectCoinTransferConfigUpdatedEvent(val.new_allow_direct_transfers),
        });
    };
}

/* ============================== DirectTransferConfig =============================== */

export class DirectTransferConfig implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DirectTransferConfig`;

    allow_arbitrary_coin_transfers: boolean;
    update_coin_transfer_events: EventHandle;

    constructor(allow_arbitrary_coin_transfers ? : boolean, update_coin_transfer_events ? : EventHandle) {
        this.allow_arbitrary_coin_transfers = allow_arbitrary_coin_transfers;
        this.update_coin_transfer_events = update_coin_transfer_events;
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
        return DirectTransferConfig.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DirectTransferConfig.from_bcs_vector(args)
    }

    get_bcs() {
        return DirectTransferConfig.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DirectTransferConfig`
    }

    from(arg: DirectTransferConfig) {
        this.allow_arbitrary_coin_transfers = arg.allow_arbitrary_coin_transfers;
        this.update_coin_transfer_events = arg.update_coin_transfer_events;
    }

    static from_bcs(arg: {
        allow_arbitrary_coin_transfers: boolean,
        update_coin_transfer_events: EventHandle
    }): DirectTransferConfig {
        return new DirectTransferConfig(arg.allow_arbitrary_coin_transfers, arg.update_coin_transfer_events)
    }

    static from_bcs_vector(args: {
        allow_arbitrary_coin_transfers: boolean,
        update_coin_transfer_events: EventHandle
    } []): DirectTransferConfig[] {
        return args.map(function(arg) {
            return new DirectTransferConfig(arg.allow_arbitrary_coin_transfers, arg.update_coin_transfer_events)
        })
    }

    static get bcs() {
        return bcs_import.struct("DirectTransferConfig", {
            allow_arbitrary_coin_transfers: bcs_import.bool(),
            update_coin_transfer_events: EventHandle.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DirectTransferConfig(val.allow_arbitrary_coin_transfers, val.update_coin_transfer_events),
        });
    };
}

function create_account(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_account", [], args);

}

function transfer(arg0: string, arg1: string, arg2: u64_import) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer", [], args);

}

function assert_account_exists(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_account_exists", [], args);

}

function assert_account_is_registered_for_apt(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_account_is_registered_for_apt", [], args);

}

function batch_transfer(arg0: string, arg1: string[], arg2: u64_import[]) {
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
        wasm.new_bytes(bcs_import.vector(bcs_import.u64()).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "batch_transfer", [], args);

}

function batch_transfer_coins < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Address[], arg2: U64[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg2) ? into_arr_bcs_vector(arg2).serialize(into_arr_value(arg2)).toBytes() : new Uint8Array([0]), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "batch_transfer_coins", type_args, args);
}

function burn_from_fungible_store(arg0: BurnRef, arg1: string, arg2: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BurnRef.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn_from_fungible_store", [], args);

}

function can_receive_direct_coin_transfers(arg0: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "can_receive_direct_coin_transfers", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function deposit_coins < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Coin) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deposit_coins", type_args, args);
}

function fungible_transfer_only(arg0: string, arg1: string, arg2: u64_import) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "fungible_transfer_only", [], args);

}

function is_fungible_balance_at_least(arg0: string, arg1: u64_import): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_fungible_balance_at_least", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function register_apt(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "register_apt", [], args);

}

function set_allow_direct_coin_transfers(arg0: string, arg1: boolean) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_allow_direct_coin_transfers", [], args);

}

function transfer_coins < T0 extends StructClass > (type_args: string[], arg0: string, arg1: string, arg2: u64_import) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer_coins", type_args, args);
}

export const aptos_account = {
    DirectCoinTransferConfigUpdated,
    DirectCoinTransferConfigUpdatedEvent,
    DirectTransferConfig,
    create_account,
    transfer,
    assert_account_exists,
    assert_account_is_registered_for_apt,
    batch_transfer,
    batch_transfer_coins,
    burn_from_fungible_store,
    can_receive_direct_coin_transfers,
    deposit_coins,
    fungible_transfer_only,
    is_fungible_balance_at_least,
    register_apt,
    set_allow_direct_coin_transfers,
    transfer_coins
}