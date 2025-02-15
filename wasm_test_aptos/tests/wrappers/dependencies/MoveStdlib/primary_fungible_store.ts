import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    BurnRef,
    FungibleAsset,
    MintRef,
    TransferRef
} from "./fungible_asset";
import {
    ConstructorRef,
    DeriveRef,
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
let MODULE_NAME: string = "primary_fungible_store";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== DeriveRefPod =============================== */

export class DeriveRefPod implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DeriveRefPod`;

    metadata_derive_ref: DeriveRef;

    constructor(metadata_derive_ref ? : DeriveRef) {
        this.metadata_derive_ref = metadata_derive_ref;
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
        return DeriveRefPod.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DeriveRefPod.from_bcs_vector(args)
    }

    get_bcs() {
        return DeriveRefPod.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DeriveRefPod`
    }

    from(arg: DeriveRefPod) {
        this.metadata_derive_ref = arg.metadata_derive_ref;
    }

    static from_bcs(arg: {
        metadata_derive_ref: DeriveRef
    }): DeriveRefPod {
        return new DeriveRefPod(arg.metadata_derive_ref)
    }

    static from_bcs_vector(args: {
        metadata_derive_ref: DeriveRef
    } []): DeriveRefPod[] {
        return args.map(function(arg) {
            return new DeriveRefPod(arg.metadata_derive_ref)
        })
    }

    static get bcs() {
        return bcs_import.struct("DeriveRefPod", {
            metadata_derive_ref: DeriveRef.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DeriveRefPod(val.metadata_derive_ref),
        });
    };
}

function burn(arg0: BurnRef, arg1: string, arg2: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(BurnRef.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn", [], args);

}

function transfer < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Object_, arg2: string, arg3: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer", type_args, args);
}

function transfer_with_ref(arg0: TransferRef, arg1: string, arg2: string, arg3: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TransferRef.bcs.serialize(arg0).toBytes(), ""),
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer_with_ref", [], args);

}

function balance < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "balance", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function deposit(arg0: string, arg1: FungibleAsset) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FungibleAsset.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deposit", [], args);

}

function deposit_with_ref(arg0: TransferRef, arg1: string, arg2: FungibleAsset) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TransferRef.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(FungibleAsset.bcs.serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deposit_with_ref", [], args);

}

function is_balance_at_least < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Object_, arg2: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_balance_at_least", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function is_frozen < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_frozen", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function mint(arg0: MintRef, arg1: string, arg2: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(MintRef.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mint", [], args);

}

function set_frozen_flag(arg0: TransferRef, arg1: string, arg2: boolean) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TransferRef.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_frozen_flag", [], args);

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

function withdraw_with_ref(arg0: TransferRef, arg1: string, arg2: u64_import): [FungibleAsset] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TransferRef.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "withdraw_with_ref", [], args);

    return [
        FungibleAsset.from_bcs(FungibleAsset.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function transfer_assert_minimum_deposit < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Object_, arg2: string, arg3: u64_import, arg4: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer_assert_minimum_deposit", type_args, args);
}

function create_primary_store < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_primary_store", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function create_primary_store_enabled_fungible_asset(arg0: ConstructorRef, arg1: Option < u64_import > , arg2: string, arg3: string, arg4: number, arg5: string, arg6: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_primary_store_enabled_fungible_asset", [], args);

}

function ensure_primary_store_exists < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ensure_primary_store_exists", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function force_deposit(arg0: string, arg1: FungibleAsset) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FungibleAsset.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "force_deposit", [], args);

}

function may_be_unburn(arg0: string, arg1: Object_) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Object_.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "may_be_unburn", [], args);

}

function primary_store < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "primary_store", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function primary_store_address < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "primary_store_address", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function primary_store_exists < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "primary_store_exists", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

export const primary_fungible_store = {
    DeriveRefPod,
    burn,
    transfer,
    transfer_with_ref,
    balance,
    deposit,
    deposit_with_ref,
    is_balance_at_least,
    is_frozen,
    mint,
    set_frozen_flag,
    withdraw,
    withdraw_with_ref,
    transfer_assert_minimum_deposit,
    create_primary_store,
    create_primary_store_enabled_fungible_asset,
    ensure_primary_store_exists,
    force_deposit,
    may_be_unburn,
    primary_store,
    primary_store_address,
    primary_store_exists
}