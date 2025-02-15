import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    RistrettoPoint
} from "./ristretto255";
import {
    Commitment
} from "./ristretto255_pedersen";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "ristretto255_bulletproofs";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== RangeProof =============================== */

export class RangeProof implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RangeProof`;

    bytes: number[];

    constructor(bytes: number[]) {
        this.bytes = bytes;
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
        return RangeProof.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RangeProof.from_bcs_vector(args)
    }

    get_bcs() {
        return RangeProof.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RangeProof`
    }

    from(arg: RangeProof) {
        this.bytes = arg.bytes;
    }

    static from_bcs(arg: {
        bytes: number[]
    }): RangeProof {
        return new RangeProof(arg.bytes)
    }

    static from_bcs_vector(args: {
        bytes: number[]
    } []): RangeProof[] {
        return args.map(function(arg) {
            return new RangeProof(arg.bytes)
        })
    }

    static get bcs() {
        return bcs_import.struct("RangeProof", {
            bytes: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RangeProof(val.bytes),
        });
    };
}

function get_max_range_bits(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_max_range_bits", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function range_proof_from_bytes(arg0: number[]): [RangeProof] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "range_proof_from_bytes", [], args);

    return [
        RangeProof.from_bcs(RangeProof.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function range_proof_to_bytes(arg0: RangeProof): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RangeProof.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "range_proof_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function verify_range_proof(arg0: RistrettoPoint, arg1: RistrettoPoint, arg2: RistrettoPoint, arg3: RangeProof, arg4: u64_import, arg5: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg2).toBytes(), ""),
        wasm.new_bytes(RangeProof.bcs.serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg5).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_range_proof", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function verify_range_proof_internal(arg0: number[], arg1: RistrettoPoint, arg2: RistrettoPoint, arg3: number[], arg4: u64_import, arg5: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg5).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_range_proof_internal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function verify_range_proof_pedersen(arg0: Commitment, arg1: RangeProof, arg2: u64_import, arg3: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Commitment.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(RangeProof.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_range_proof_pedersen", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const ristretto255_bulletproofs = {
    RangeProof,
    get_max_range_bits,
    range_proof_from_bytes,
    range_proof_to_bytes,
    verify_range_proof,
    verify_range_proof_internal,
    verify_range_proof_pedersen
}