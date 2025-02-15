import {
    StructClass,
    U8,
    get_package_address,
    get_wasm,
    has_arr,
    into_arr_bcs_vector,
    into_arr_value,
    u64 as u64_import
} from "../../sui_wasm";
import {
    BurnCapability,
    FreezeCapability,
    MintCapability
} from "./coin";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "managed_coin";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Capabilities =============================== */

export class Capabilities implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Capabilities`;

    burn_cap: BurnCapability;
    freeze_cap: FreezeCapability;
    mint_cap: MintCapability;

    constructor(burn_cap ? : BurnCapability, freeze_cap ? : FreezeCapability, mint_cap ? : MintCapability) {
        this.burn_cap = burn_cap;
        this.freeze_cap = freeze_cap;
        this.mint_cap = mint_cap;
    }

    into_value() {
        return {
            burn_cap: (this.burn_cap as unknown as StructClass).into_value ? (this.burn_cap as unknown as StructClass).into_value() : this.burn_cap,
            freeze_cap: (this.freeze_cap as unknown as StructClass).into_value ? (this.freeze_cap as unknown as StructClass).into_value() : this.freeze_cap,
            mint_cap: (this.mint_cap as unknown as StructClass).into_value ? (this.mint_cap as unknown as StructClass).into_value() : this.mint_cap
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
        return Capabilities.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Capabilities.from_bcs_vector(args)
    }

    get_bcs() {
        return Capabilities.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Capabilities`
    }

    from(arg: Capabilities) {
        this.burn_cap = arg.burn_cap;
        this.freeze_cap = arg.freeze_cap;
        this.mint_cap = arg.mint_cap;
    }

    static from_bcs(arg: {
        burn_cap: BurnCapability,
        freeze_cap: FreezeCapability,
        mint_cap: MintCapability
    }): Capabilities {
        return new Capabilities(arg.burn_cap, arg.freeze_cap, arg.mint_cap)
    }

    static from_bcs_vector(args: {
        burn_cap: BurnCapability,
        freeze_cap: FreezeCapability,
        mint_cap: MintCapability
    } []): Capabilities[] {
        return args.map(function(arg) {
            return new Capabilities(arg.burn_cap, arg.freeze_cap, arg.mint_cap)
        })
    }

    static get bcs() {
        return bcs_import.struct("Capabilities", {
            burn_cap: BurnCapability.bcs,
            freeze_cap: FreezeCapability.bcs,
            mint_cap: MintCapability.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Capabilities(val.burn_cap, val.freeze_cap, val.mint_cap),
        });
    };
}

function initialize < T0 extends StructClass > (type_args: string[], arg0: string, arg1: U8[], arg2: U8[], arg3: number, arg4: boolean) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg2) ? into_arr_bcs_vector(arg2).serialize(into_arr_value(arg2)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg4).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize", type_args, args);
}

function burn < T0 extends StructClass > (type_args: string[], arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn", type_args, args);
}

function mint < T0 extends StructClass > (type_args: string[], arg0: string, arg1: string, arg2: u64_import) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mint", type_args, args);
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

export const managed_coin = {
    Capabilities,
    initialize,
    burn,
    mint,
    register
}