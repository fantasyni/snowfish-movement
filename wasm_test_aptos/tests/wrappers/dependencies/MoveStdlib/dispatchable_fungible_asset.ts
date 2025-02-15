import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    FunctionInfo
} from "./function_info";
import {
    FungibleAsset,
    TransferRef
} from "./fungible_asset";
import {
    ConstructorRef,
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
let MODULE_NAME: string = "dispatchable_fungible_asset";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== TransferRefStore =============================== */

export class TransferRefStore implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TransferRefStore`;

    transfer_ref: TransferRef;

    constructor(transfer_ref ? : TransferRef) {
        this.transfer_ref = transfer_ref;
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
        return TransferRefStore.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TransferRefStore.from_bcs_vector(args)
    }

    get_bcs() {
        return TransferRefStore.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TransferRefStore`
    }

    from(arg: TransferRefStore) {
        this.transfer_ref = arg.transfer_ref;
    }

    static from_bcs(arg: {
        transfer_ref: TransferRef
    }): TransferRefStore {
        return new TransferRefStore(arg.transfer_ref)
    }

    static from_bcs_vector(args: {
        transfer_ref: TransferRef
    } []): TransferRefStore[] {
        return args.map(function(arg) {
            return new TransferRefStore(arg.transfer_ref)
        })
    }

    static get bcs() {
        return bcs_import.struct("TransferRefStore", {
            transfer_ref: TransferRef.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TransferRefStore(val.transfer_ref),
        });
    };
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

function deposit < T0 extends StructClass > (type_args: string[], arg0: Object_, arg1: FungibleAsset) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deposit", type_args, args);
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

function derived_balance < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "derived_balance", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function dispatchable_deposit < T0 extends StructClass > (type_args: string[], arg0: Object_, arg1: FungibleAsset, arg2: TransferRef, arg3: FunctionInfo) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "dispatchable_deposit", type_args, args);
}

function dispatchable_derived_balance < T0 extends StructClass > (type_args: string[], arg0: Object_, arg1: FunctionInfo): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "dispatchable_derived_balance", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function dispatchable_withdraw < T0 extends StructClass > (type_args: string[], arg0: Object_, arg1: u64_import, arg2: TransferRef, arg3: FunctionInfo): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "dispatchable_withdraw", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function transfer_assert_minimum_deposit < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Object_, arg2: Object_, arg3: u64_import, arg4: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer_assert_minimum_deposit", type_args, args);
}

export const dispatchable_fungible_asset = {
    TransferRefStore,
    transfer,
    deposit,
    register_dispatch_functions,
    withdraw,
    derived_balance,
    dispatchable_deposit,
    dispatchable_derived_balance,
    dispatchable_withdraw,
    transfer_assert_minimum_deposit
}