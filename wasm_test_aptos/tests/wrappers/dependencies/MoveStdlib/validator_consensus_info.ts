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
let MODULE_NAME: string = "validator_consensus_info";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== ValidatorConsensusInfo =============================== */

export class ValidatorConsensusInfo implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ValidatorConsensusInfo`;

    addr: string;
    pk_bytes: number[];
    voting_power: u64_import;

    constructor(addr: string, pk_bytes: number[], voting_power: u64_import) {
        this.addr = addr;
        this.pk_bytes = pk_bytes;
        this.voting_power = voting_power;
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
        return ValidatorConsensusInfo.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ValidatorConsensusInfo.from_bcs_vector(args)
    }

    get_bcs() {
        return ValidatorConsensusInfo.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ValidatorConsensusInfo`
    }

    from(arg: ValidatorConsensusInfo) {
        this.addr = arg.addr;
        this.pk_bytes = arg.pk_bytes;
        this.voting_power = arg.voting_power;
    }

    static from_bcs(arg: {
        addr: string,
        pk_bytes: number[],
        voting_power: u64_import
    }): ValidatorConsensusInfo {
        return new ValidatorConsensusInfo(arg.addr, arg.pk_bytes, arg.voting_power)
    }

    static from_bcs_vector(args: {
        addr: string,
        pk_bytes: number[],
        voting_power: u64_import
    } []): ValidatorConsensusInfo[] {
        return args.map(function(arg) {
            return new ValidatorConsensusInfo(arg.addr, arg.pk_bytes, arg.voting_power)
        })
    }

    static get bcs() {
        return bcs_import.struct("ValidatorConsensusInfo", {
            addr: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            pk_bytes: bcs_import.vector(bcs_import.u8()),
            voting_power: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ValidatorConsensusInfo(val.addr, val.pk_bytes, val.voting_power),
        });
    };
}

function new_(arg0: string, arg1: number[], arg2: u64_import): [ValidatorConsensusInfo] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new", [], args);

    return [
        ValidatorConsensusInfo.from_bcs(ValidatorConsensusInfo.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function default_(): [ValidatorConsensusInfo] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "default", [], args);

    return [
        ValidatorConsensusInfo.from_bcs(ValidatorConsensusInfo.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function get_addr(arg0: ValidatorConsensusInfo): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ValidatorConsensusInfo.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_addr", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_pk_bytes(arg0: ValidatorConsensusInfo): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ValidatorConsensusInfo.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_pk_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_voting_power(arg0: ValidatorConsensusInfo): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ValidatorConsensusInfo.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_voting_power", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const validator_consensus_info = {
    ValidatorConsensusInfo,
    new_,
    default_,
    get_addr,
    get_pk_bytes,
    get_voting_power
}