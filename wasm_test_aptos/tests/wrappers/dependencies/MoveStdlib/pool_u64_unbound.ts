import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    TableWithLength
} from "./table_with_length";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "pool_u64_unbound";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Pool =============================== */

export class Pool implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Pool`;

    total_coins: u64_import;
    total_shares: u64_import;
    shares: TableWithLength;
    scaling_factor: u64_import;

    constructor(total_coins: u64_import, total_shares: u64_import, shares: TableWithLength, scaling_factor: u64_import) {
        this.total_coins = total_coins;
        this.total_shares = total_shares;
        this.shares = shares;
        this.scaling_factor = scaling_factor;
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
        return Pool.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Pool.from_bcs_vector(args)
    }

    get_bcs() {
        return Pool.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Pool`
    }

    from(arg: Pool) {
        this.total_coins = arg.total_coins;
        this.total_shares = arg.total_shares;
        this.shares = arg.shares;
        this.scaling_factor = arg.scaling_factor;
    }

    static from_bcs(arg: {
        total_coins: u64_import,
        total_shares: u64_import,
        shares: TableWithLength,
        scaling_factor: u64_import
    }): Pool {
        return new Pool(arg.total_coins, arg.total_shares, arg.shares, arg.scaling_factor)
    }

    static from_bcs_vector(args: {
        total_coins: u64_import,
        total_shares: u64_import,
        shares: TableWithLength,
        scaling_factor: u64_import
    } []): Pool[] {
        return args.map(function(arg) {
            return new Pool(arg.total_coins, arg.total_shares, arg.shares, arg.scaling_factor)
        })
    }

    static get bcs() {
        return bcs_import.struct("Pool", {
            total_coins: bcs_import.u64(),
            total_shares: bcs_import.u128(),
            shares: TableWithLength.bcs,
            scaling_factor: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Pool(val.total_coins, val.total_shares, val.shares, val.scaling_factor),
        });
    };
}

function contains(arg0: Pool, arg1: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "contains", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function destroy_empty(arg0: Pool) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_empty", [], args);

}

function new_(): [Pool] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new", [], args);

    return [
        Pool.from_bcs(Pool.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create(): [Pool] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create", [], args);

    return [
        Pool.from_bcs(Pool.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function to_u128(arg0: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_u128", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function to_u256(arg0: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u128().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_u256", [], args);

    return [
        bcs_import.u256().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function balance(arg0: Pool, arg1: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "balance", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function add_shares(arg0: Pool, arg1: string, arg2: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_shares", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function amount_to_shares(arg0: Pool, arg1: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "amount_to_shares", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function amount_to_shares_with_total_coins(arg0: Pool, arg1: u64_import, arg2: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "amount_to_shares_with_total_coins", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function buy_in(arg0: Pool, arg1: string, arg2: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "buy_in", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create_with_scaling_factor(arg0: u64_import): [Pool] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_with_scaling_factor", [], args);

    return [
        Pool.from_bcs(Pool.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function deduct_shares(arg0: Pool, arg1: string, arg2: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deduct_shares", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function multiply_then_divide(arg0: Pool, arg1: u64_import, arg2: u64_import, arg3: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "multiply_then_divide", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function redeem_shares(arg0: Pool, arg1: string, arg2: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg2).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "redeem_shares", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function shareholders_count(arg0: Pool): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "shareholders_count", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function shares(arg0: Pool, arg1: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "shares", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function shares_to_amount(arg0: Pool, arg1: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "shares_to_amount", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function shares_to_amount_with_total_coins(arg0: Pool, arg1: u64_import, arg2: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "shares_to_amount_with_total_coins", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function shares_to_amount_with_total_stats(arg0: Pool, arg1: u64_import, arg2: u64_import, arg3: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "shares_to_amount_with_total_stats", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function total_coins(arg0: Pool): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "total_coins", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function total_shares(arg0: Pool): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "total_shares", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function transfer_shares(arg0: Pool, arg1: string, arg2: string, arg3: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg3).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer_shares", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function update_total_coins(arg0: Pool, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Pool.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_total_coins", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

export const pool_u64_unbound = {
    Pool,
    contains,
    destroy_empty,
    new_,
    create,
    to_u128,
    to_u256,
    balance,
    add_shares,
    amount_to_shares,
    amount_to_shares_with_total_coins,
    buy_in,
    create_with_scaling_factor,
    deduct_shares,
    multiply_then_divide,
    redeem_shares,
    shareholders_count,
    shares,
    shares_to_amount,
    shares_to_amount_with_total_coins,
    shares_to_amount_with_total_stats,
    total_coins,
    total_shares,
    transfer_shares,
    update_total_coins
}