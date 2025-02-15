import {
    StructClass,
    TypeArgument,
    get_package_address,
    get_wasm,
    to_arr_value,
    u64 as u64_import
} from "../../sui_wasm";
import {
    BurnCapability,
    MintCapability
} from "./coin";
import {
    EthereumAddress
} from "./ethereum";
import {
    EventHandle
} from "./event";
import {
    BurnRef,
    MintRef
} from "./fungible_asset";
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
let MODULE_NAME: string = "native_bridge";

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

/* ============================== Nonce =============================== */

export class Nonce implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Nonce`;

    value: u64_import;

    constructor(value ? : u64_import) {
        this.value = value;
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
        this.value = arg.value;
    }

    static from_bcs(arg: {
        value: u64_import
    }): Nonce {
        return new Nonce(arg.value)
    }

    static from_bcs_vector(args: {
        value: u64_import
    } []): Nonce[] {
        return args.map(function(arg) {
            return new Nonce(arg.value)
        })
    }

    static get bcs() {
        return bcs_import.struct("Nonce", {
            value: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Nonce(val.value),
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

/* ============================== BridgeConfig =============================== */

export class BridgeConfig implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BridgeConfig`;

    bridge_relayer: string;
    insurance_fund: string;
    insurance_budget_divider: u64_import;
    bridge_fee: u64_import;

    constructor(bridge_relayer ? : string, insurance_fund ? : string, insurance_budget_divider ? : u64_import, bridge_fee ? : u64_import) {
        this.bridge_relayer = bridge_relayer;
        this.insurance_fund = insurance_fund;
        this.insurance_budget_divider = insurance_budget_divider;
        this.bridge_fee = bridge_fee;
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
        return BridgeConfig.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BridgeConfig.from_bcs_vector(args)
    }

    get_bcs() {
        return BridgeConfig.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BridgeConfig`
    }

    from(arg: BridgeConfig) {
        this.bridge_relayer = arg.bridge_relayer;
        this.insurance_fund = arg.insurance_fund;
        this.insurance_budget_divider = arg.insurance_budget_divider;
        this.bridge_fee = arg.bridge_fee;
    }

    static from_bcs(arg: {
        bridge_relayer: string,
        insurance_fund: string,
        insurance_budget_divider: u64_import,
        bridge_fee: u64_import
    }): BridgeConfig {
        return new BridgeConfig(arg.bridge_relayer, arg.insurance_fund, arg.insurance_budget_divider, arg.bridge_fee)
    }

    static from_bcs_vector(args: {
        bridge_relayer: string,
        insurance_fund: string,
        insurance_budget_divider: u64_import,
        bridge_fee: u64_import
    } []): BridgeConfig[] {
        return args.map(function(arg) {
            return new BridgeConfig(arg.bridge_relayer, arg.insurance_fund, arg.insurance_budget_divider, arg.bridge_fee)
        })
    }

    static get bcs() {
        return bcs_import.struct("BridgeConfig", {
            bridge_relayer: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            insurance_fund: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            insurance_budget_divider: bcs_import.u64(),
            bridge_fee: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BridgeConfig(val.bridge_relayer, val.insurance_fund, val.insurance_budget_divider, val.bridge_fee),
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

/* ============================== BridgeTransferCompletedEvent =============================== */

export class BridgeTransferCompletedEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BridgeTransferCompletedEvent`;

    bridge_transfer_id: number[];
    initiator: number[];
    recipient: string;
    amount: u64_import;
    nonce: u64_import;

    constructor(bridge_transfer_id: number[], initiator: number[], recipient: string, amount: u64_import, nonce: u64_import) {
        this.bridge_transfer_id = bridge_transfer_id;
        this.initiator = initiator;
        this.recipient = recipient;
        this.amount = amount;
        this.nonce = nonce;
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
        return BridgeTransferCompletedEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BridgeTransferCompletedEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return BridgeTransferCompletedEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BridgeTransferCompletedEvent`
    }

    from(arg: BridgeTransferCompletedEvent) {
        this.bridge_transfer_id = arg.bridge_transfer_id;
        this.initiator = arg.initiator;
        this.recipient = arg.recipient;
        this.amount = arg.amount;
        this.nonce = arg.nonce;
    }

    static from_bcs(arg: {
        bridge_transfer_id: number[],
        initiator: number[],
        recipient: string,
        amount: u64_import,
        nonce: u64_import
    }): BridgeTransferCompletedEvent {
        return new BridgeTransferCompletedEvent(arg.bridge_transfer_id, arg.initiator, arg.recipient, arg.amount, arg.nonce)
    }

    static from_bcs_vector(args: {
        bridge_transfer_id: number[],
        initiator: number[],
        recipient: string,
        amount: u64_import,
        nonce: u64_import
    } []): BridgeTransferCompletedEvent[] {
        return args.map(function(arg) {
            return new BridgeTransferCompletedEvent(arg.bridge_transfer_id, arg.initiator, arg.recipient, arg.amount, arg.nonce)
        })
    }

    static get bcs() {
        return bcs_import.struct("BridgeTransferCompletedEvent", {
            bridge_transfer_id: bcs_import.vector(bcs_import.u8()),
            initiator: bcs_import.vector(bcs_import.u8()),
            recipient: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            amount: bcs_import.u64(),
            nonce: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BridgeTransferCompletedEvent(val.bridge_transfer_id, val.initiator, val.recipient, val.amount, val.nonce),
        });
    };
}

/* ============================== BridgeTransferInitiatedEvent =============================== */

export class BridgeTransferInitiatedEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BridgeTransferInitiatedEvent`;

    bridge_transfer_id: number[];
    initiator: string;
    recipient: number[];
    amount: u64_import;
    nonce: u64_import;

    constructor(bridge_transfer_id: number[], initiator: string, recipient: number[], amount: u64_import, nonce: u64_import) {
        this.bridge_transfer_id = bridge_transfer_id;
        this.initiator = initiator;
        this.recipient = recipient;
        this.amount = amount;
        this.nonce = nonce;
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
        return BridgeTransferInitiatedEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BridgeTransferInitiatedEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return BridgeTransferInitiatedEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BridgeTransferInitiatedEvent`
    }

    from(arg: BridgeTransferInitiatedEvent) {
        this.bridge_transfer_id = arg.bridge_transfer_id;
        this.initiator = arg.initiator;
        this.recipient = arg.recipient;
        this.amount = arg.amount;
        this.nonce = arg.nonce;
    }

    static from_bcs(arg: {
        bridge_transfer_id: number[],
        initiator: string,
        recipient: number[],
        amount: u64_import,
        nonce: u64_import
    }): BridgeTransferInitiatedEvent {
        return new BridgeTransferInitiatedEvent(arg.bridge_transfer_id, arg.initiator, arg.recipient, arg.amount, arg.nonce)
    }

    static from_bcs_vector(args: {
        bridge_transfer_id: number[],
        initiator: string,
        recipient: number[],
        amount: u64_import,
        nonce: u64_import
    } []): BridgeTransferInitiatedEvent[] {
        return args.map(function(arg) {
            return new BridgeTransferInitiatedEvent(arg.bridge_transfer_id, arg.initiator, arg.recipient, arg.amount, arg.nonce)
        })
    }

    static get bcs() {
        return bcs_import.struct("BridgeTransferInitiatedEvent", {
            bridge_transfer_id: bcs_import.vector(bcs_import.u8()),
            initiator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            recipient: bcs_import.vector(bcs_import.u8()),
            amount: bcs_import.u64(),
            nonce: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BridgeTransferInitiatedEvent(val.bridge_transfer_id, val.initiator, val.recipient, val.amount, val.nonce),
        });
    };
}

/* ============================== BridgeConfigRelayerUpdated =============================== */

export class BridgeConfigRelayerUpdated implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BridgeConfigRelayerUpdated`;

    old_relayer: string;
    new_relayer: string;

    constructor(old_relayer: string, new_relayer: string) {
        this.old_relayer = old_relayer;
        this.new_relayer = new_relayer;
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
        return BridgeConfigRelayerUpdated.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BridgeConfigRelayerUpdated.from_bcs_vector(args)
    }

    get_bcs() {
        return BridgeConfigRelayerUpdated.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BridgeConfigRelayerUpdated`
    }

    from(arg: BridgeConfigRelayerUpdated) {
        this.old_relayer = arg.old_relayer;
        this.new_relayer = arg.new_relayer;
    }

    static from_bcs(arg: {
        old_relayer: string,
        new_relayer: string
    }): BridgeConfigRelayerUpdated {
        return new BridgeConfigRelayerUpdated(arg.old_relayer, arg.new_relayer)
    }

    static from_bcs_vector(args: {
        old_relayer: string,
        new_relayer: string
    } []): BridgeConfigRelayerUpdated[] {
        return args.map(function(arg) {
            return new BridgeConfigRelayerUpdated(arg.old_relayer, arg.new_relayer)
        })
    }

    static get bcs() {
        return bcs_import.struct("BridgeConfigRelayerUpdated", {
            old_relayer: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            new_relayer: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BridgeConfigRelayerUpdated(val.old_relayer, val.new_relayer),
        });
    };
}

/* ============================== BridgeEvents =============================== */

export class BridgeEvents implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BridgeEvents`;

    bridge_transfer_initiated_events: EventHandle;
    bridge_transfer_completed_events: EventHandle;

    constructor(bridge_transfer_initiated_events ? : EventHandle, bridge_transfer_completed_events ? : EventHandle) {
        this.bridge_transfer_initiated_events = bridge_transfer_initiated_events;
        this.bridge_transfer_completed_events = bridge_transfer_completed_events;
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
        return BridgeEvents.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BridgeEvents.from_bcs_vector(args)
    }

    get_bcs() {
        return BridgeEvents.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BridgeEvents`
    }

    from(arg: BridgeEvents) {
        this.bridge_transfer_initiated_events = arg.bridge_transfer_initiated_events;
        this.bridge_transfer_completed_events = arg.bridge_transfer_completed_events;
    }

    static from_bcs(arg: {
        bridge_transfer_initiated_events: EventHandle,
        bridge_transfer_completed_events: EventHandle
    }): BridgeEvents {
        return new BridgeEvents(arg.bridge_transfer_initiated_events, arg.bridge_transfer_completed_events)
    }

    static from_bcs_vector(args: {
        bridge_transfer_initiated_events: EventHandle,
        bridge_transfer_completed_events: EventHandle
    } []): BridgeEvents[] {
        return args.map(function(arg) {
            return new BridgeEvents(arg.bridge_transfer_initiated_events, arg.bridge_transfer_completed_events)
        })
    }

    static get bcs() {
        return bcs_import.struct("BridgeEvents", {
            bridge_transfer_initiated_events: EventHandle.bcs,
            bridge_transfer_completed_events: EventHandle.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BridgeEvents(val.bridge_transfer_initiated_events, val.bridge_transfer_completed_events),
        });
    };
}

/* ============================== BridgeFeeChangedEvent =============================== */

export class BridgeFeeChangedEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BridgeFeeChangedEvent`;

    old_bridge_fee: u64_import;
    new_bridge_fee: u64_import;

    constructor(old_bridge_fee: u64_import, new_bridge_fee: u64_import) {
        this.old_bridge_fee = old_bridge_fee;
        this.new_bridge_fee = new_bridge_fee;
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
        return BridgeFeeChangedEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BridgeFeeChangedEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return BridgeFeeChangedEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BridgeFeeChangedEvent`
    }

    from(arg: BridgeFeeChangedEvent) {
        this.old_bridge_fee = arg.old_bridge_fee;
        this.new_bridge_fee = arg.new_bridge_fee;
    }

    static from_bcs(arg: {
        old_bridge_fee: u64_import,
        new_bridge_fee: u64_import
    }): BridgeFeeChangedEvent {
        return new BridgeFeeChangedEvent(arg.old_bridge_fee, arg.new_bridge_fee)
    }

    static from_bcs_vector(args: {
        old_bridge_fee: u64_import,
        new_bridge_fee: u64_import
    } []): BridgeFeeChangedEvent[] {
        return args.map(function(arg) {
            return new BridgeFeeChangedEvent(arg.old_bridge_fee, arg.new_bridge_fee)
        })
    }

    static get bcs() {
        return bcs_import.struct("BridgeFeeChangedEvent", {
            old_bridge_fee: bcs_import.u64(),
            new_bridge_fee: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BridgeFeeChangedEvent(val.old_bridge_fee, val.new_bridge_fee),
        });
    };
}

/* ============================== BridgeInsuranceBudgetDividerChangedEvent =============================== */

export class BridgeInsuranceBudgetDividerChangedEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BridgeInsuranceBudgetDividerChangedEvent`;

    old_insurance_budget_divider: u64_import;
    new_insurance_budget_divider: u64_import;

    constructor(old_insurance_budget_divider: u64_import, new_insurance_budget_divider: u64_import) {
        this.old_insurance_budget_divider = old_insurance_budget_divider;
        this.new_insurance_budget_divider = new_insurance_budget_divider;
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
        return BridgeInsuranceBudgetDividerChangedEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BridgeInsuranceBudgetDividerChangedEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return BridgeInsuranceBudgetDividerChangedEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BridgeInsuranceBudgetDividerChangedEvent`
    }

    from(arg: BridgeInsuranceBudgetDividerChangedEvent) {
        this.old_insurance_budget_divider = arg.old_insurance_budget_divider;
        this.new_insurance_budget_divider = arg.new_insurance_budget_divider;
    }

    static from_bcs(arg: {
        old_insurance_budget_divider: u64_import,
        new_insurance_budget_divider: u64_import
    }): BridgeInsuranceBudgetDividerChangedEvent {
        return new BridgeInsuranceBudgetDividerChangedEvent(arg.old_insurance_budget_divider, arg.new_insurance_budget_divider)
    }

    static from_bcs_vector(args: {
        old_insurance_budget_divider: u64_import,
        new_insurance_budget_divider: u64_import
    } []): BridgeInsuranceBudgetDividerChangedEvent[] {
        return args.map(function(arg) {
            return new BridgeInsuranceBudgetDividerChangedEvent(arg.old_insurance_budget_divider, arg.new_insurance_budget_divider)
        })
    }

    static get bcs() {
        return bcs_import.struct("BridgeInsuranceBudgetDividerChangedEvent", {
            old_insurance_budget_divider: bcs_import.u64(),
            new_insurance_budget_divider: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BridgeInsuranceBudgetDividerChangedEvent(val.old_insurance_budget_divider, val.new_insurance_budget_divider),
        });
    };
}

/* ============================== BridgeInsuranceFundChangedEvent =============================== */

export class BridgeInsuranceFundChangedEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BridgeInsuranceFundChangedEvent`;

    old_insurance_fund: string;
    new_insurance_fund: string;

    constructor(old_insurance_fund: string, new_insurance_fund: string) {
        this.old_insurance_fund = old_insurance_fund;
        this.new_insurance_fund = new_insurance_fund;
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
        return BridgeInsuranceFundChangedEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BridgeInsuranceFundChangedEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return BridgeInsuranceFundChangedEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BridgeInsuranceFundChangedEvent`
    }

    from(arg: BridgeInsuranceFundChangedEvent) {
        this.old_insurance_fund = arg.old_insurance_fund;
        this.new_insurance_fund = arg.new_insurance_fund;
    }

    static from_bcs(arg: {
        old_insurance_fund: string,
        new_insurance_fund: string
    }): BridgeInsuranceFundChangedEvent {
        return new BridgeInsuranceFundChangedEvent(arg.old_insurance_fund, arg.new_insurance_fund)
    }

    static from_bcs_vector(args: {
        old_insurance_fund: string,
        new_insurance_fund: string
    } []): BridgeInsuranceFundChangedEvent[] {
        return args.map(function(arg) {
            return new BridgeInsuranceFundChangedEvent(arg.old_insurance_fund, arg.new_insurance_fund)
        })
    }

    static get bcs() {
        return bcs_import.struct("BridgeInsuranceFundChangedEvent", {
            old_insurance_fund: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            new_insurance_fund: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new BridgeInsuranceFundChangedEvent(val.old_insurance_fund, val.new_insurance_fund),
        });
    };
}

/* ============================== InboundRateLimitBudget =============================== */

export class InboundRateLimitBudget implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::InboundRateLimitBudget`;

    day: SmartTable < u64_import,
    u64_import > ;

    constructor(day ? : SmartTable < u64_import, u64_import > ) {
        this.day = day;
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
        return InboundRateLimitBudget.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return InboundRateLimitBudget.from_bcs_vector(args)
    }

    get_bcs() {
        return InboundRateLimitBudget.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::InboundRateLimitBudget`
    }

    from(arg: InboundRateLimitBudget) {
        this.day = arg.day;
    }

    static from_bcs(arg: {
        day: SmartTable < u64_import,
        u64_import >
    }): InboundRateLimitBudget {
        return new InboundRateLimitBudget(arg.day)
    }

    static from_bcs_vector(args: {
        day: SmartTable < u64_import,
        u64_import >
    } []): InboundRateLimitBudget[] {
        return args.map(function(arg) {
            return new InboundRateLimitBudget(arg.day)
        })
    }

    static get bcs() {
        return bcs_import.struct("InboundRateLimitBudget", {
            day: SmartTable.bcs(bcs_import.u64(), bcs_import.u64()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new InboundRateLimitBudget(val.day),
        });
    };
}

/* ============================== OutboundRateLimitBudget =============================== */

export class OutboundRateLimitBudget implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::OutboundRateLimitBudget`;

    day: SmartTable < u64_import,
    u64_import > ;

    constructor(day ? : SmartTable < u64_import, u64_import > ) {
        this.day = day;
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
        return OutboundRateLimitBudget.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return OutboundRateLimitBudget.from_bcs_vector(args)
    }

    get_bcs() {
        return OutboundRateLimitBudget.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::OutboundRateLimitBudget`
    }

    from(arg: OutboundRateLimitBudget) {
        this.day = arg.day;
    }

    static from_bcs(arg: {
        day: SmartTable < u64_import,
        u64_import >
    }): OutboundRateLimitBudget {
        return new OutboundRateLimitBudget(arg.day)
    }

    static from_bcs_vector(args: {
        day: SmartTable < u64_import,
        u64_import >
    } []): OutboundRateLimitBudget[] {
        return args.map(function(arg) {
            return new OutboundRateLimitBudget(arg.day)
        })
    }

    static get bcs() {
        return bcs_import.struct("OutboundRateLimitBudget", {
            day: SmartTable.bcs(bcs_import.u64(), bcs_import.u64()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new OutboundRateLimitBudget(val.day),
        });
    };
}

/* ============================== OutboundTransfer =============================== */

export class OutboundTransfer implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::OutboundTransfer`;

    bridge_transfer_id: number[];
    initiator: string;
    recipient: EthereumAddress;
    amount: u64_import;

    constructor(bridge_transfer_id: number[], initiator: string, recipient: EthereumAddress, amount: u64_import) {
        this.bridge_transfer_id = bridge_transfer_id;
        this.initiator = initiator;
        this.recipient = recipient;
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
        return OutboundTransfer.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return OutboundTransfer.from_bcs_vector(args)
    }

    get_bcs() {
        return OutboundTransfer.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::OutboundTransfer`
    }

    from(arg: OutboundTransfer) {
        this.bridge_transfer_id = arg.bridge_transfer_id;
        this.initiator = arg.initiator;
        this.recipient = arg.recipient;
        this.amount = arg.amount;
    }

    static from_bcs(arg: {
        bridge_transfer_id: number[],
        initiator: string,
        recipient: EthereumAddress,
        amount: u64_import
    }): OutboundTransfer {
        return new OutboundTransfer(arg.bridge_transfer_id, arg.initiator, arg.recipient, arg.amount)
    }

    static from_bcs_vector(args: {
        bridge_transfer_id: number[],
        initiator: string,
        recipient: EthereumAddress,
        amount: u64_import
    } []): OutboundTransfer[] {
        return args.map(function(arg) {
            return new OutboundTransfer(arg.bridge_transfer_id, arg.initiator, arg.recipient, arg.amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("OutboundTransfer", {
            bridge_transfer_id: bcs_import.vector(bcs_import.u8()),
            initiator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            recipient: EthereumAddress.bcs,
            amount: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new OutboundTransfer(val.bridge_transfer_id, val.initiator, val.recipient, val.amount),
        });
    };
}

function add(arg0: u64_import, arg1: OutboundTransfer) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(OutboundTransfer.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add", [], args);

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

function burn_from(arg0: string, arg1: string, arg2: u64_import) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn_from", [], args);

}

function burn_internal(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn_internal", [], args);

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

function mint_internal(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mint_internal", [], args);

}

function mint_to(arg0: string, arg1: string, arg2: u64_import) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mint_to", [], args);

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

function assert_valid_bridge_transfer_id(arg0: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_valid_bridge_transfer_id", [], args);

}

function bridge_transfer_id(arg0: string, arg1: EthereumAddress, arg2: u64_import, arg3: u64_import): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(EthereumAddress.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bridge_transfer_id", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create_details(arg0: string, arg1: EthereumAddress, arg2: u64_import, arg3: u64_import): [OutboundTransfer] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(EthereumAddress.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_details", [], args);

    return [
        OutboundTransfer.from_bcs(OutboundTransfer.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function complete_bridge_transfer(arg0: string, arg1: number[], arg2: number[], arg3: string, arg4: u64_import, arg5: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg5).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "complete_bridge_transfer", [], args);

}

function initiate_bridge_transfer(arg0: string, arg1: number[], arg2: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initiate_bridge_transfer", [], args);

}

function assert_inbound_rate_limit_budget_not_exceeded(arg0: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_inbound_rate_limit_budget_not_exceeded", [], args);

}

function assert_is_caller_relayer(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_is_caller_relayer", [], args);

}

function assert_outbound_rate_limit_budget_not_exceeded(arg0: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_outbound_rate_limit_budget_not_exceeded", [], args);

}

function bridge_fee(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bridge_fee", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function bridge_relayer(): [string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bridge_relayer", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function charge_bridge_fee(arg0: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "charge_bridge_fee", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_bridge_transfer_details_from_nonce(arg0: u64_import): [OutboundTransfer] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_bridge_transfer_details_from_nonce", [], args);

    return [
        OutboundTransfer.from_bcs(OutboundTransfer.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function get_inbound_nonce_from_bridge_transfer_id(arg0: number[]): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_inbound_nonce_from_bridge_transfer_id", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function increment_and_get_nonce(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "increment_and_get_nonce", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function insurance_budget_divider(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "insurance_budget_divider", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function insurance_fund(): [string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "insurance_fund", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function is_inbound_nonce_set(arg0: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_inbound_nonce_set", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function normalize_u64_to_32_bytes(arg0: u64_import): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "normalize_u64_to_32_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function set_bridge_transfer_id_to_inbound_nonce(arg0: number[], arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_bridge_transfer_id_to_inbound_nonce", [], args);

}

function test_normalize_u64_to_32_bytes_helper(arg0: u64_import, arg1: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "test_normalize_u64_to_32_bytes_helper", [], args);

}

function update_bridge_fee(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_bridge_fee", [], args);

}

function update_bridge_relayer(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_bridge_relayer", [], args);

}

function update_insurance_budget_divider(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_insurance_budget_divider", [], args);

}

function update_insurance_fund(arg0: string, arg1: string) {
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

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_insurance_fund", [], args);

}

export const native_bridge = {
    AptosCoinMintCapability,
    AptosFABurnCapabilities,
    Nonce,
    SmartTableWrapper,
    BridgeConfig,
    AptosCoinBurnCapability,
    AptosFAMintCapabilities,
    BridgeTransferCompletedEvent,
    BridgeTransferInitiatedEvent,
    BridgeConfigRelayerUpdated,
    BridgeEvents,
    BridgeFeeChangedEvent,
    BridgeInsuranceBudgetDividerChangedEvent,
    BridgeInsuranceFundChangedEvent,
    InboundRateLimitBudget,
    OutboundRateLimitBudget,
    OutboundTransfer,
    add,
    initialize,
    burn,
    burn_from,
    burn_internal,
    mint,
    mint_internal,
    mint_to,
    store_aptos_coin_mint_cap,
    store_aptos_coin_burn_cap,
    assert_valid_bridge_transfer_id,
    bridge_transfer_id,
    create_details,
    complete_bridge_transfer,
    initiate_bridge_transfer,
    assert_inbound_rate_limit_budget_not_exceeded,
    assert_is_caller_relayer,
    assert_outbound_rate_limit_budget_not_exceeded,
    bridge_fee,
    bridge_relayer,
    charge_bridge_fee,
    get_bridge_transfer_details_from_nonce,
    get_inbound_nonce_from_bridge_transfer_id,
    increment_and_get_nonce,
    insurance_budget_divider,
    insurance_fund,
    is_inbound_nonce_set,
    normalize_u64_to_32_bytes,
    set_bridge_transfer_id_to_inbound_nonce,
    test_normalize_u64_to_32_bytes_helper,
    update_bridge_fee,
    update_bridge_relayer,
    update_insurance_budget_divider,
    update_insurance_fund
}