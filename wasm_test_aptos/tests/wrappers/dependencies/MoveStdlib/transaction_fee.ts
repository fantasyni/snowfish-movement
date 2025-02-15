import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    AggregatableCoin,
    BurnCapability,
    Coin,
    MintCapability
} from "./coin";
import {
    BurnRef
} from "./fungible_asset";
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
let MODULE_NAME: string = "transaction_fee";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== AptosCoinCapabilities =============================== */

export class AptosCoinCapabilities implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AptosCoinCapabilities`;

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
        return AptosCoinCapabilities.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AptosCoinCapabilities.from_bcs_vector(args)
    }

    get_bcs() {
        return AptosCoinCapabilities.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AptosCoinCapabilities`
    }

    from(arg: AptosCoinCapabilities) {
        this.burn_cap = arg.burn_cap;
    }

    static from_bcs(arg: {
        burn_cap: BurnCapability
    }): AptosCoinCapabilities {
        return new AptosCoinCapabilities(arg.burn_cap)
    }

    static from_bcs_vector(args: {
        burn_cap: BurnCapability
    } []): AptosCoinCapabilities[] {
        return args.map(function(arg) {
            return new AptosCoinCapabilities(arg.burn_cap)
        })
    }

    static get bcs() {
        return bcs_import.struct("AptosCoinCapabilities", {
            burn_cap: BurnCapability.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AptosCoinCapabilities(val.burn_cap),
        });
    };
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

/* ============================== CollectedFeesPerBlock =============================== */

export class CollectedFeesPerBlock implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CollectedFeesPerBlock`;

    amount: AggregatableCoin;
    proposer: Option < string > ;
    burn_percentage: number;

    constructor(amount ? : AggregatableCoin, proposer ? : Option < string > , burn_percentage ? : number) {
        this.amount = amount;
        this.proposer = proposer;
        this.burn_percentage = burn_percentage;
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
        return CollectedFeesPerBlock.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CollectedFeesPerBlock.from_bcs_vector(args)
    }

    get_bcs() {
        return CollectedFeesPerBlock.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CollectedFeesPerBlock`
    }

    from(arg: CollectedFeesPerBlock) {
        this.amount = arg.amount;
        this.proposer = arg.proposer;
        this.burn_percentage = arg.burn_percentage;
    }

    static from_bcs(arg: {
        amount: AggregatableCoin,
        proposer: Option < string > ,
        burn_percentage: number
    }): CollectedFeesPerBlock {
        return new CollectedFeesPerBlock(arg.amount, arg.proposer, arg.burn_percentage)
    }

    static from_bcs_vector(args: {
        amount: AggregatableCoin,
        proposer: Option < string > ,
        burn_percentage: number
    } []): CollectedFeesPerBlock[] {
        return args.map(function(arg) {
            return new CollectedFeesPerBlock(arg.amount, arg.proposer, arg.burn_percentage)
        })
    }

    static get bcs() {
        return bcs_import.struct("CollectedFeesPerBlock", {
            amount: AggregatableCoin.bcs,
            proposer: Option.bcs(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            })),
            burn_percentage: bcs_import.u8(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CollectedFeesPerBlock(val.amount, val.proposer, val.burn_percentage),
        });
    };
}

/* ============================== CopyCapabilitiesOneShot =============================== */

export class CopyCapabilitiesOneShot implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CopyCapabilitiesOneShot`;

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
        return CopyCapabilitiesOneShot.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CopyCapabilitiesOneShot.from_bcs_vector(args)
    }

    get_bcs() {
        return CopyCapabilitiesOneShot.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CopyCapabilitiesOneShot`
    }

    from(arg: CopyCapabilitiesOneShot) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): CopyCapabilitiesOneShot {
        return new CopyCapabilitiesOneShot(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): CopyCapabilitiesOneShot[] {
        return args.map(function(arg) {
            return new CopyCapabilitiesOneShot(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("CopyCapabilitiesOneShot", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CopyCapabilitiesOneShot(val.dummy_field),
        });
    };
}

/* ============================== FeeStatement =============================== */

export class FeeStatement implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::FeeStatement`;

    total_charge_gas_units: u64_import;
    execution_gas_units: u64_import;
    io_gas_units: u64_import;
    storage_fee_octas: u64_import;
    storage_fee_refund_octas: u64_import;

    constructor(total_charge_gas_units: u64_import, execution_gas_units: u64_import, io_gas_units: u64_import, storage_fee_octas: u64_import, storage_fee_refund_octas: u64_import) {
        this.total_charge_gas_units = total_charge_gas_units;
        this.execution_gas_units = execution_gas_units;
        this.io_gas_units = io_gas_units;
        this.storage_fee_octas = storage_fee_octas;
        this.storage_fee_refund_octas = storage_fee_refund_octas;
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
        return FeeStatement.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return FeeStatement.from_bcs_vector(args)
    }

    get_bcs() {
        return FeeStatement.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::FeeStatement`
    }

    from(arg: FeeStatement) {
        this.total_charge_gas_units = arg.total_charge_gas_units;
        this.execution_gas_units = arg.execution_gas_units;
        this.io_gas_units = arg.io_gas_units;
        this.storage_fee_octas = arg.storage_fee_octas;
        this.storage_fee_refund_octas = arg.storage_fee_refund_octas;
    }

    static from_bcs(arg: {
        total_charge_gas_units: u64_import,
        execution_gas_units: u64_import,
        io_gas_units: u64_import,
        storage_fee_octas: u64_import,
        storage_fee_refund_octas: u64_import
    }): FeeStatement {
        return new FeeStatement(arg.total_charge_gas_units, arg.execution_gas_units, arg.io_gas_units, arg.storage_fee_octas, arg.storage_fee_refund_octas)
    }

    static from_bcs_vector(args: {
        total_charge_gas_units: u64_import,
        execution_gas_units: u64_import,
        io_gas_units: u64_import,
        storage_fee_octas: u64_import,
        storage_fee_refund_octas: u64_import
    } []): FeeStatement[] {
        return args.map(function(arg) {
            return new FeeStatement(arg.total_charge_gas_units, arg.execution_gas_units, arg.io_gas_units, arg.storage_fee_octas, arg.storage_fee_refund_octas)
        })
    }

    static get bcs() {
        return bcs_import.struct("FeeStatement", {
            total_charge_gas_units: bcs_import.u64(),
            execution_gas_units: bcs_import.u64(),
            io_gas_units: bcs_import.u64(),
            storage_fee_octas: bcs_import.u64(),
            storage_fee_refund_octas: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new FeeStatement(val.total_charge_gas_units, val.execution_gas_units, val.io_gas_units, val.storage_fee_octas, val.storage_fee_refund_octas),
        });
    };
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

function burn_coin_fraction(arg0: Coin, arg1: number) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Coin.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn_coin_fraction", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function burn_fee(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn_fee", [], args);

}

function collect_fee(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "collect_fee", [], args);

}

function convert_to_aptos_fa_burn_ref(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "convert_to_aptos_fa_burn_ref", [], args);

}

function copy_capabilities_for_bridge(arg0: string): [MintCapability, BurnCapability] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "copy_capabilities_for_bridge", [], args);

    return [
        MintCapability.from_bcs(MintCapability.bcs.parse(new Uint8Array(r0.Raw[0]))),
        BurnCapability.from_bcs(BurnCapability.bcs.parse(new Uint8Array(r1.Raw[0])))
    ];
}

function copy_capabilities_for_native_bridge(arg0: string): [MintCapability, BurnCapability] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "copy_capabilities_for_native_bridge", [], args);

    return [
        MintCapability.from_bcs(MintCapability.bcs.parse(new Uint8Array(r0.Raw[0]))),
        BurnCapability.from_bcs(BurnCapability.bcs.parse(new Uint8Array(r1.Raw[0])))
    ];
}

function emit_fee_statement(arg0: FeeStatement) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FeeStatement.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "emit_fee_statement", [], args);

}

function initialize_fee_collection_and_distribution(arg0: string, arg1: number) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_fee_collection_and_distribution", [], args);

}

function initialize_storage_refund(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_storage_refund", [], args);

}

function is_fees_collection_enabled(): [boolean] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_fees_collection_enabled", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function mint_and_refund(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mint_and_refund", [], args);

}

function process_collected_fees() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "process_collected_fees", [], args);

}

function register_proposer_for_fee_collection(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "register_proposer_for_fee_collection", [], args);

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

function upgrade_burn_percentage(arg0: string, arg1: number) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upgrade_burn_percentage", [], args);

}

export const transaction_fee = {
    AptosCoinCapabilities,
    AptosCoinMintCapability,
    AptosFABurnCapabilities,
    CollectedFeesPerBlock,
    CopyCapabilitiesOneShot,
    FeeStatement,
    store_aptos_coin_mint_cap,
    burn_coin_fraction,
    burn_fee,
    collect_fee,
    convert_to_aptos_fa_burn_ref,
    copy_capabilities_for_bridge,
    copy_capabilities_for_native_bridge,
    emit_fee_statement,
    initialize_fee_collection_and_distribution,
    initialize_storage_refund,
    is_fees_collection_enabled,
    mint_and_refund,
    process_collected_fees,
    register_proposer_for_fee_collection,
    store_aptos_coin_burn_cap,
    upgrade_burn_percentage
}