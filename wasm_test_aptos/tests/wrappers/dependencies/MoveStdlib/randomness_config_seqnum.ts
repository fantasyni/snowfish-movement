import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "randomness_config_seqnum";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== RandomnessConfigSeqNum =============================== */

export class RandomnessConfigSeqNum implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RandomnessConfigSeqNum`;

    seq_num: u64_import;

    constructor(seq_num ? : u64_import) {
        this.seq_num = seq_num;
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
        return RandomnessConfigSeqNum.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RandomnessConfigSeqNum.from_bcs_vector(args)
    }

    get_bcs() {
        return RandomnessConfigSeqNum.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RandomnessConfigSeqNum`
    }

    from(arg: RandomnessConfigSeqNum) {
        this.seq_num = arg.seq_num;
    }

    static from_bcs(arg: {
        seq_num: u64_import
    }): RandomnessConfigSeqNum {
        return new RandomnessConfigSeqNum(arg.seq_num)
    }

    static from_bcs_vector(args: {
        seq_num: u64_import
    } []): RandomnessConfigSeqNum[] {
        return args.map(function(arg) {
            return new RandomnessConfigSeqNum(arg.seq_num)
        })
    }

    static get bcs() {
        return bcs_import.struct("RandomnessConfigSeqNum", {
            seq_num: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RandomnessConfigSeqNum(val.seq_num),
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

function set_for_next_epoch(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_for_next_epoch", [], args);

}

export const randomness_config_seqnum = {
    RandomnessConfigSeqNum,
    on_new_epoch,
    initialize,
    set_for_next_epoch
}