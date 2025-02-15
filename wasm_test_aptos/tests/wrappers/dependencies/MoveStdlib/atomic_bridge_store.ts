import {
    StructClass,
    TypeArgument,
    U8,
    get_package_address,
    get_wasm,
    has_arr,
    into_arr_bcs_vector,
    into_arr_value,
    to_arr_value,
    u64 as u64_import
} from "../../sui_wasm";
import {
    EthereumAddress
} from "./ethereum";
import {
    SmartTable
} from "./smart_table";
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
let MODULE_NAME: string = "atomic_bridge_store";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== AddressPair =============================== */

export class AddressPair < T0 extends TypeArgument, T1 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AddressPair`;

    initiator: T0;
    recipient: T1;

    T0_bcs: any;
    T1_bcs: any;

    constructor(initiator: T0, recipient: T1) {
        this.initiator = initiator;
        this.recipient = recipient;
    }

    into_value() {
        return {
            initiator: (this.initiator as StructClass).into_value ? (this.initiator as StructClass).into_value() : this.initiator,
            recipient: (this.recipient as StructClass).into_value ? (this.recipient as StructClass).into_value() : this.recipient
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.initiator) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.recipient) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.initiator) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.recipient) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.initiator) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.recipient) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.initiator) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.recipient) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.initiator) as StructClass).get_bcs(), (to_arr_value(this.recipient) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return AddressPair.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AddressPair.from_bcs_vector(args)
    }

    get_bcs() {
        return AddressPair.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AddressPair`
    }

    from(arg: AddressPair < T0, T1 > ) {
        this.initiator = arg.initiator;
        this.recipient = arg.recipient;
    }

    static from_bcs < T0 extends TypeArgument,
    T1 extends TypeArgument > (arg: {
        initiator: T0,
        recipient: T1
    }): AddressPair < T0,
    T1 > {
        return new AddressPair(arg.initiator, arg.recipient)
    }

    static from_bcs_vector < T0 extends TypeArgument,
    T1 extends TypeArgument > (args: {
        initiator: T0,
        recipient: T1
    } []): AddressPair < T0,
    T1 > [] {
        return args.map(function(arg) {
            return new AddressPair(arg.initiator, arg.recipient)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0, T1 extends TypeArgument, input1 > (T0: BcsType < T0, input0 > , T1: BcsType < T1, input1 > ) =>
            bcs_import.struct(`AddressPair<${T0.name}, ${T1.name}>`, {
                initiator: T0,
                recipient: T1,
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new AddressPair(val.initiator, val.recipient),
            });
    };
}

/* ============================== BridgeTransferDetails =============================== */

export class BridgeTransferDetails < T0 extends TypeArgument, T1 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BridgeTransferDetails`;

    addresses: AddressPair < T0,
    T1 > ;
    amount: u64_import;
    hash_lock: number[];
    time_lock: u64_import;
    state: number;

    T0_bcs: any;
    T1_bcs: any;

    constructor(addresses: AddressPair < T0, T1 > , amount: u64_import, hash_lock: number[], time_lock: u64_import, state: number) {
        this.addresses = addresses;
        this.amount = amount;
        this.hash_lock = hash_lock;
        this.time_lock = time_lock;
        this.state = state;
    }

    into_value() {
        return {
            addresses: (this.addresses as unknown as StructClass).into_value ? (this.addresses as unknown as StructClass).into_value() : this.addresses,
            amount: (this.amount as unknown as StructClass).into_value ? (this.amount as unknown as StructClass).into_value() : this.amount,
            hash_lock: into_arr_value(this.hash_lock),
            time_lock: (this.time_lock as unknown as StructClass).into_value ? (this.time_lock as unknown as StructClass).into_value() : this.time_lock,
            state: (this.state as unknown as StructClass).into_value ? (this.state as unknown as StructClass).into_value() : this.state
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.addresses) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.addresses) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.addresses) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.addresses) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.addresses) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.addresses) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.addresses) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.addresses) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.addresses) as StructClass).get_bcs(), (to_arr_value(this.addresses) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return BridgeTransferDetails.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BridgeTransferDetails.from_bcs_vector(args)
    }

    get_bcs() {
        return BridgeTransferDetails.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BridgeTransferDetails`
    }

    from(arg: BridgeTransferDetails < T0, T1 > ) {
        this.addresses = arg.addresses;
        this.amount = arg.amount;
        this.hash_lock = arg.hash_lock;
        this.time_lock = arg.time_lock;
        this.state = arg.state;
    }

    static from_bcs < T0 extends TypeArgument,
    T1 extends TypeArgument > (arg: {
        addresses: AddressPair < T0,
        T1 > ,
        amount: u64_import,
        hash_lock: number[],
        time_lock: u64_import,
        state: number
    }): BridgeTransferDetails < T0,
    T1 > {
        return new BridgeTransferDetails(arg.addresses, arg.amount, arg.hash_lock, arg.time_lock, arg.state)
    }

    static from_bcs_vector < T0 extends TypeArgument,
    T1 extends TypeArgument > (args: {
        addresses: AddressPair < T0,
        T1 > ,
        amount: u64_import,
        hash_lock: number[],
        time_lock: u64_import,
        state: number
    } []): BridgeTransferDetails < T0,
    T1 > [] {
        return args.map(function(arg) {
            return new BridgeTransferDetails(arg.addresses, arg.amount, arg.hash_lock, arg.time_lock, arg.state)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0, T1 extends TypeArgument, input1 > (T0: BcsType < T0, input0 > , T1: BcsType < T1, input1 > ) =>
            bcs_import.struct(`BridgeTransferDetails<${T0.name}, ${T1.name}>`, {
                addresses: AddressPair.bcs(T0, T1),
                amount: bcs_import.u64(),
                hash_lock: bcs_import.vector(bcs_import.u8()),
                time_lock: bcs_import.u64(),
                state: bcs_import.u8(),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new BridgeTransferDetails(val.addresses, val.amount, val.hash_lock, val.time_lock, val.state),
            });
    };
}

/* ============================== Nonce =============================== */

export class Nonce implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Nonce`;

    inner: u64_import;

    constructor(inner ? : u64_import) {
        this.inner = inner;
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
        return Nonce.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Nonce.from_bcs_vector(args)
    }

    get_bcs() {
        return Nonce.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Nonce`
    }

    from(arg: Nonce) {
        this.inner = arg.inner;
    }

    static from_bcs(arg: {
        inner: u64_import
    }): Nonce {
        return new Nonce(arg.inner)
    }

    static from_bcs_vector(args: {
        inner: u64_import
    } []): Nonce[] {
        return args.map(function(arg) {
            return new Nonce(arg.inner)
        })
    }

    static get bcs() {
        return bcs_import.struct("Nonce", {
            inner: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Nonce(val.inner),
        });
    };
}

/* ============================== SmartTableWrapper =============================== */

export class SmartTableWrapper < T0 extends TypeArgument, T1 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SmartTableWrapper`;

    inner: SmartTable < T0,
    T1 > ;

    T0_bcs: any;
    T1_bcs: any;

    constructor(inner ? : SmartTable < T0, T1 > ) {
        this.inner = inner;
    }

    into_value() {
        return {
            inner: (this.inner as unknown as StructClass).into_value ? (this.inner as unknown as StructClass).into_value() : this.inner
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.inner) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.inner) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.inner) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.inner) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.inner) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.inner) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.inner) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.inner) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.inner) as StructClass).get_bcs(), (to_arr_value(this.inner) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return SmartTableWrapper.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SmartTableWrapper.from_bcs_vector(args)
    }

    get_bcs() {
        return SmartTableWrapper.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SmartTableWrapper`
    }

    from(arg: SmartTableWrapper < T0, T1 > ) {
        this.inner = arg.inner;
    }

    static from_bcs < T0 extends TypeArgument,
    T1 extends TypeArgument > (arg: {
        inner: SmartTable < T0,
        T1 >
    }): SmartTableWrapper < T0,
    T1 > {
        return new SmartTableWrapper(arg.inner)
    }

    static from_bcs_vector < T0 extends TypeArgument,
    T1 extends TypeArgument > (args: {
        inner: SmartTable < T0,
        T1 >
    } []): SmartTableWrapper < T0,
    T1 > [] {
        return args.map(function(arg) {
            return new SmartTableWrapper(arg.inner)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0, T1 extends TypeArgument, input1 > (T0: BcsType < T0, input0 > , T1: BcsType < T1, input1 > ) =>
            bcs_import.struct(`SmartTableWrapper<${T0.name}, ${T1.name}>`, {
                inner: SmartTable.bcs(T0, T1),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new SmartTableWrapper(val.inner),
            });
    };
}

function add < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: U8[], arg1: BridgeTransferDetails < T0, T1 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add", type_args, args);
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

function assert_correct_hash_lock < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: BridgeTransferDetails < T0, T1 > , arg1: U8[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_correct_hash_lock", type_args, args);
}

function assert_min_time_lock(arg0: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_min_time_lock", [], args);

}

function assert_pending < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: BridgeTransferDetails < T0, T1 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_pending", type_args, args);
}

function assert_timed_out_lock < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: BridgeTransferDetails < T0, T1 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_timed_out_lock", type_args, args);
}

function assert_valid_bridge_transfer_id(arg0: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_valid_bridge_transfer_id", [], args);

}

function assert_valid_hash_lock(arg0: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_valid_hash_lock", [], args);

}

function assert_within_timelock < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: BridgeTransferDetails < T0, T1 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_within_timelock", type_args, args);
}

function bridge_transfer_id < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: BridgeTransferDetails < T0, T1 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bridge_transfer_id", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function cancel < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: BridgeTransferDetails < T0, T1 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "cancel", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as BridgeTransferDetails < T0, T1 > );
}

function cancel_details < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: BridgeTransferDetails < T0, T1 > ): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "cancel_details", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as BridgeTransferDetails < T0, T1 > );
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function cancel_transfer < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: U8[]): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "cancel_transfer", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function complete < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: BridgeTransferDetails < T0, T1 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "complete", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as BridgeTransferDetails < T0, T1 > );
}

function complete_details < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: U8[], arg1: BridgeTransferDetails < T0, T1 > ): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "complete_details", type_args, args);
    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])) as BridgeTransferDetails < T0, T1 > );
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function complete_transfer < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: U8[], arg1: U8[]): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "complete_transfer", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function create_details < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: T0, arg1: T1, arg2: u64_import, arg3: U8[], arg4: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(has_arr(arg3) ? into_arr_bcs_vector(arg3).serialize(into_arr_value(arg3)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_details", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function create_hashlock(arg0: number[]): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_hashlock", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create_time_lock(arg0: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_time_lock", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_bridge_transfer_details < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: U8[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_bridge_transfer_details", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function get_bridge_transfer_details_counterparty(arg0: number[]): [BridgeTransferDetails < EthereumAddress, string > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_bridge_transfer_details_counterparty", [], args);

    return [
        BridgeTransferDetails.from_bcs(BridgeTransferDetails.bcs(EthereumAddress.bcs, bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function get_bridge_transfer_details_initiator(arg0: number[]): [BridgeTransferDetails < string, EthereumAddress > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_bridge_transfer_details_initiator", [], args);

    return [
        BridgeTransferDetails.from_bcs(BridgeTransferDetails.bcs(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }), EthereumAddress.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function now(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "now", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const atomic_bridge_store = {
    AddressPair,
    BridgeTransferDetails,
    Nonce,
    SmartTableWrapper,
    add,
    initialize,
    assert_correct_hash_lock,
    assert_min_time_lock,
    assert_pending,
    assert_timed_out_lock,
    assert_valid_bridge_transfer_id,
    assert_valid_hash_lock,
    assert_within_timelock,
    bridge_transfer_id,
    cancel,
    cancel_details,
    cancel_transfer,
    complete,
    complete_details,
    complete_transfer,
    create_details,
    create_hashlock,
    create_time_lock,
    get_bridge_transfer_details,
    get_bridge_transfer_details_counterparty,
    get_bridge_transfer_details_initiator,
    now
}