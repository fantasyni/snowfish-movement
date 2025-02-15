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
let MODULE_NAME: string = "aptos_coin";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== AptosCoin =============================== */

export class AptosCoin implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AptosCoin`;

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
        return AptosCoin.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AptosCoin.from_bcs_vector(args)
    }

    get_bcs() {
        return AptosCoin.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AptosCoin`
    }

    from(arg: AptosCoin) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): AptosCoin {
        return new AptosCoin(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): AptosCoin[] {
        return args.map(function(arg) {
            return new AptosCoin(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("AptosCoin", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AptosCoin(val.dummy_field),
        });
    };
}

/* ============================== DelegatedMintCapability =============================== */

export class DelegatedMintCapability implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DelegatedMintCapability`;

    to: string;

    constructor(to: string) {
        this.to = to;
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
        return DelegatedMintCapability.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DelegatedMintCapability.from_bcs_vector(args)
    }

    get_bcs() {
        return DelegatedMintCapability.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DelegatedMintCapability`
    }

    from(arg: DelegatedMintCapability) {
        this.to = arg.to;
    }

    static from_bcs(arg: {
        to: string
    }): DelegatedMintCapability {
        return new DelegatedMintCapability(arg.to)
    }

    static from_bcs_vector(args: {
        to: string
    } []): DelegatedMintCapability[] {
        return args.map(function(arg) {
            return new DelegatedMintCapability(arg.to)
        })
    }

    static get bcs() {
        return bcs_import.struct("DelegatedMintCapability", {
            to: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DelegatedMintCapability(val.to),
        });
    };
}

/* ============================== Delegations =============================== */

export class Delegations implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Delegations`;

    inner: DelegatedMintCapability[];

    constructor(inner ? : DelegatedMintCapability[]) {
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
        return Delegations.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Delegations.from_bcs_vector(args)
    }

    get_bcs() {
        return Delegations.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Delegations`
    }

    from(arg: Delegations) {
        this.inner = arg.inner;
    }

    static from_bcs(arg: {
        inner: DelegatedMintCapability[]
    }): Delegations {
        return new Delegations(arg.inner)
    }

    static from_bcs_vector(args: {
        inner: DelegatedMintCapability[]
    } []): Delegations[] {
        return args.map(function(arg) {
            return new Delegations(arg.inner)
        })
    }

    static get bcs() {
        return bcs_import.struct("Delegations", {
            inner: bcs_import.vector(DelegatedMintCapability.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Delegations(val.inner),
        });
    };
}

/* ============================== MintCapStore =============================== */

export class MintCapStore implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::MintCapStore`;

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
        return MintCapStore.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return MintCapStore.from_bcs_vector(args)
    }

    get_bcs() {
        return MintCapStore.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::MintCapStore`
    }

    from(arg: MintCapStore) {
        this.mint_cap = arg.mint_cap;
    }

    static from_bcs(arg: {
        mint_cap: MintCapability
    }): MintCapStore {
        return new MintCapStore(arg.mint_cap)
    }

    static from_bcs_vector(args: {
        mint_cap: MintCapability
    } []): MintCapStore[] {
        return args.map(function(arg) {
            return new MintCapStore(arg.mint_cap)
        })
    }

    static get bcs() {
        return bcs_import.struct("MintCapStore", {
            mint_cap: MintCapability.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new MintCapStore(val.mint_cap),
        });
    };
}

function initialize(arg0: string): [BurnCapability, MintCapability] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize", [], args);

    return [
        BurnCapability.from_bcs(BurnCapability.bcs.parse(new Uint8Array(r0.Raw[0]))),
        MintCapability.from_bcs(MintCapability.bcs.parse(new Uint8Array(r1.Raw[0])))
    ];
}

function mint(arg0: string, arg1: string, arg2: u64_import) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mint", [], args);

}

function destroy_mint_cap(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_mint_cap", [], args);

}

function claim_mint_capability(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "claim_mint_capability", [], args);

}

function configure_accounts_for_test(arg0: string, arg1: string, arg2: MintCapability) {
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
        wasm.new_bytes(MintCapability.bcs.serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "configure_accounts_for_test", [], args);

}

function delegate_mint_capability(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "delegate_mint_capability", [], args);

}

function find_delegation(arg0: string): [Option < u64_import > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "find_delegation", [], args);

    return [
        Option.from_bcs(Option.bcs(bcs_import.u64()).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function has_mint_capability(arg0: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "has_mint_capability", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const aptos_coin = {
    AptosCoin,
    DelegatedMintCapability,
    Delegations,
    MintCapStore,
    initialize,
    mint,
    destroy_mint_cap,
    claim_mint_capability,
    configure_accounts_for_test,
    delegate_mint_capability,
    find_delegation,
    has_mint_capability
}