import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    BurnCapability,
    MintCapability
} from "./coin";
import {
    BurnRef,
    MintRef
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
let MODULE_NAME: string = "atomic_bridge";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== AptosCoinMintCapability =============================== */

export class AptosCoinMintCapability implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AptosCoinMintCapability`;

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
        return AptosCoinMintCapability.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AptosCoinMintCapability.from_bcs_vector(args)
    }

    get_bcs() {
        return AptosCoinMintCapability.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AptosCoinMintCapability`
    }

    from(arg: AptosCoinMintCapability) {
        this.mint_cap = arg.mint_cap;
    }

    static from_bcs(arg: {
        mint_cap: MintCapability
    }): AptosCoinMintCapability {
        return new AptosCoinMintCapability(arg.mint_cap)
    }

    static from_bcs_vector(args: {
        mint_cap: MintCapability
    } []): AptosCoinMintCapability[] {
        return args.map(function(arg) {
            return new AptosCoinMintCapability(arg.mint_cap)
        })
    }

    static get bcs() {
        return bcs_import.struct("AptosCoinMintCapability", {
            mint_cap: MintCapability.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AptosCoinMintCapability(val.mint_cap),
        });
    };
}

/* ============================== AptosFABurnCapabilities =============================== */

export class AptosFABurnCapabilities implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AptosFABurnCapabilities`;

    burn_ref: BurnRef;

    constructor(burn_ref ? : BurnRef) {
        this.burn_ref = burn_ref;
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
        return AptosFABurnCapabilities.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AptosFABurnCapabilities.from_bcs_vector(args)
    }

    get_bcs() {
        return AptosFABurnCapabilities.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AptosFABurnCapabilities`
    }

    from(arg: AptosFABurnCapabilities) {
        this.burn_ref = arg.burn_ref;
    }

    static from_bcs(arg: {
        burn_ref: BurnRef
    }): AptosFABurnCapabilities {
        return new AptosFABurnCapabilities(arg.burn_ref)
    }

    static from_bcs_vector(args: {
        burn_ref: BurnRef
    } []): AptosFABurnCapabilities[] {
        return args.map(function(arg) {
            return new AptosFABurnCapabilities(arg.burn_ref)
        })
    }

    static get bcs() {
        return bcs_import.struct("AptosFABurnCapabilities", {
            burn_ref: BurnRef.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AptosFABurnCapabilities(val.burn_ref),
        });
    };
}

/* ============================== AptosCoinBurnCapability =============================== */

export class AptosCoinBurnCapability implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AptosCoinBurnCapability`;

    burn_cap: BurnCapability;

    constructor(burn_cap ? : BurnCapability) {
        this.burn_cap = burn_cap;
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
        return AptosCoinBurnCapability.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AptosCoinBurnCapability.from_bcs_vector(args)
    }

    get_bcs() {
        return AptosCoinBurnCapability.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AptosCoinBurnCapability`
    }

    from(arg: AptosCoinBurnCapability) {
        this.burn_cap = arg.burn_cap;
    }

    static from_bcs(arg: {
        burn_cap: BurnCapability
    }): AptosCoinBurnCapability {
        return new AptosCoinBurnCapability(arg.burn_cap)
    }

    static from_bcs_vector(args: {
        burn_cap: BurnCapability
    } []): AptosCoinBurnCapability[] {
        return args.map(function(arg) {
            return new AptosCoinBurnCapability(arg.burn_cap)
        })
    }

    static get bcs() {
        return bcs_import.struct("AptosCoinBurnCapability", {
            burn_cap: BurnCapability.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AptosCoinBurnCapability(val.burn_cap),
        });
    };
}

/* ============================== AptosFAMintCapabilities =============================== */

export class AptosFAMintCapabilities implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AptosFAMintCapabilities`;

    burn_ref: MintRef;

    constructor(burn_ref ? : MintRef) {
        this.burn_ref = burn_ref;
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
        return AptosFAMintCapabilities.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AptosFAMintCapabilities.from_bcs_vector(args)
    }

    get_bcs() {
        return AptosFAMintCapabilities.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AptosFAMintCapabilities`
    }

    from(arg: AptosFAMintCapabilities) {
        this.burn_ref = arg.burn_ref;
    }

    static from_bcs(arg: {
        burn_ref: MintRef
    }): AptosFAMintCapabilities {
        return new AptosFAMintCapabilities(arg.burn_ref)
    }

    static from_bcs_vector(args: {
        burn_ref: MintRef
    } []): AptosFAMintCapabilities[] {
        return args.map(function(arg) {
            return new AptosFAMintCapabilities(arg.burn_ref)
        })
    }

    static get bcs() {
        return bcs_import.struct("AptosFAMintCapabilities", {
            burn_ref: MintRef.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AptosFAMintCapabilities(val.burn_ref),
        });
    };
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

function burn(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn", [], args);

}

function mint(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mint", [], args);

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

function store_aptos_coin_burn_cap(arg0: string, arg1: BurnCapability) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(BurnCapability.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "store_aptos_coin_burn_cap", [], args);

}

export const atomic_bridge = {
    AptosCoinMintCapability,
    AptosFABurnCapabilities,
    AptosCoinBurnCapability,
    AptosFAMintCapabilities,
    initialize,
    burn,
    mint,
    store_aptos_coin_mint_cap,
    store_aptos_coin_burn_cap
}