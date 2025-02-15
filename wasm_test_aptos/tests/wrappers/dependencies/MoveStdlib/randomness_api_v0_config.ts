import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
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
let MODULE_NAME: string = "randomness_api_v0_config";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== AllowCustomMaxGasFlag =============================== */

export class AllowCustomMaxGasFlag implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AllowCustomMaxGasFlag`;

    value: boolean;

    constructor(value ? : boolean) {
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
        return AllowCustomMaxGasFlag.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AllowCustomMaxGasFlag.from_bcs_vector(args)
    }

    get_bcs() {
        return AllowCustomMaxGasFlag.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AllowCustomMaxGasFlag`
    }

    from(arg: AllowCustomMaxGasFlag) {
        this.value = arg.value;
    }

    static from_bcs(arg: {
        value: boolean
    }): AllowCustomMaxGasFlag {
        return new AllowCustomMaxGasFlag(arg.value)
    }

    static from_bcs_vector(args: {
        value: boolean
    } []): AllowCustomMaxGasFlag[] {
        return args.map(function(arg) {
            return new AllowCustomMaxGasFlag(arg.value)
        })
    }

    static get bcs() {
        return bcs_import.struct("AllowCustomMaxGasFlag", {
            value: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AllowCustomMaxGasFlag(val.value),
        });
    };
}

/* ============================== RequiredGasDeposit =============================== */

export class RequiredGasDeposit implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RequiredGasDeposit`;

    gas_amount: Option < u64_import > ;

    constructor(gas_amount ? : Option < u64_import > ) {
        this.gas_amount = gas_amount;
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
        return RequiredGasDeposit.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RequiredGasDeposit.from_bcs_vector(args)
    }

    get_bcs() {
        return RequiredGasDeposit.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RequiredGasDeposit`
    }

    from(arg: RequiredGasDeposit) {
        this.gas_amount = arg.gas_amount;
    }

    static from_bcs(arg: {
        gas_amount: Option < u64_import >
    }): RequiredGasDeposit {
        return new RequiredGasDeposit(arg.gas_amount)
    }

    static from_bcs_vector(args: {
        gas_amount: Option < u64_import >
    } []): RequiredGasDeposit[] {
        return args.map(function(arg) {
            return new RequiredGasDeposit(arg.gas_amount)
        })
    }

    static get bcs() {
        return bcs_import.struct("RequiredGasDeposit", {
            gas_amount: Option.bcs(bcs_import.u64()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RequiredGasDeposit(val.gas_amount),
        });
    };
}

function on_new_epoch(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "on_new_epoch", [], args);

}

function initialize(arg0: string, arg1: RequiredGasDeposit, arg2: AllowCustomMaxGasFlag) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(RequiredGasDeposit.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(AllowCustomMaxGasFlag.bcs.serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize", [], args);

}

function set_for_next_epoch(arg0: string, arg1: Option < u64_import > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Option.bcs(bcs_import.u64()).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_for_next_epoch", [], args);

}

function set_allow_max_gas_flag_for_next_epoch(arg0: string, arg1: boolean) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_allow_max_gas_flag_for_next_epoch", [], args);

}

export const randomness_api_v0_config = {
    AllowCustomMaxGasFlag,
    RequiredGasDeposit,
    on_new_epoch,
    initialize,
    set_for_next_epoch,
    set_allow_max_gas_flag_for_next_epoch
}