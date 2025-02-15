import {
    StructClass,
    get_package_address,
    get_wasm
} from "../../sui_wasm";
import {
    Option
} from "./option";
import {
    CompressedRistretto,
    RistrettoPoint,
    Scalar
} from "./ristretto255";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "ristretto255_pedersen";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Commitment =============================== */

export class Commitment implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Commitment`;

    point: RistrettoPoint;

    constructor(point: RistrettoPoint) {
        this.point = point;
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
        return Commitment.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Commitment.from_bcs_vector(args)
    }

    get_bcs() {
        return Commitment.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Commitment`
    }

    from(arg: Commitment) {
        this.point = arg.point;
    }

    static from_bcs(arg: {
        point: RistrettoPoint
    }): Commitment {
        return new Commitment(arg.point)
    }

    static from_bcs_vector(args: {
        point: RistrettoPoint
    } []): Commitment[] {
        return args.map(function(arg) {
            return new Commitment(arg.point)
        })
    }

    static get bcs() {
        return bcs_import.struct("Commitment", {
            point: RistrettoPoint.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Commitment(val.point),
        });
    };
}

function commitment_add(arg0: Commitment, arg1: Commitment): [Commitment] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Commitment.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Commitment.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "commitment_add", [], args);

    return [
        Commitment.from_bcs(Commitment.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function commitment_add_assign(arg0: Commitment, arg1: Commitment) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Commitment.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Commitment.bcs.serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "commitment_add_assign", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function commitment_as_compressed_point(arg0: Commitment): [CompressedRistretto] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Commitment.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "commitment_as_compressed_point", [], args);

    return [
        CompressedRistretto.from_bcs(CompressedRistretto.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function commitment_as_point(arg0: Commitment): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Commitment.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "commitment_as_point", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function commitment_clone(arg0: Commitment): [Commitment] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Commitment.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "commitment_clone", [], args);

    return [
        Commitment.from_bcs(Commitment.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function commitment_equals(arg0: Commitment, arg1: Commitment): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Commitment.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Commitment.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "commitment_equals", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function commitment_from_compressed(arg0: CompressedRistretto): [Commitment] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(CompressedRistretto.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "commitment_from_compressed", [], args);

    return [
        Commitment.from_bcs(Commitment.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function commitment_from_point(arg0: RistrettoPoint): [Commitment] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "commitment_from_point", [], args);

    return [
        Commitment.from_bcs(Commitment.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function commitment_into_compressed_point(arg0: Commitment): [CompressedRistretto] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Commitment.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "commitment_into_compressed_point", [], args);

    return [
        CompressedRistretto.from_bcs(CompressedRistretto.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function commitment_into_point(arg0: Commitment): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Commitment.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "commitment_into_point", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function commitment_sub(arg0: Commitment, arg1: Commitment): [Commitment] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Commitment.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Commitment.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "commitment_sub", [], args);

    return [
        Commitment.from_bcs(Commitment.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function commitment_sub_assign(arg0: Commitment, arg1: Commitment) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Commitment.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Commitment.bcs.serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "commitment_sub_assign", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function commitment_to_bytes(arg0: Commitment): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Commitment.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "commitment_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function new_commitment(arg0: Scalar, arg1: RistrettoPoint, arg2: Scalar, arg3: RistrettoPoint): [Commitment] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(Scalar.bcs.serialize(arg2).toBytes(), ""),
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_commitment", [], args);

    return [
        Commitment.from_bcs(Commitment.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_commitment_for_bulletproof(arg0: Scalar, arg1: Scalar): [Commitment] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Scalar.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_commitment_for_bulletproof", [], args);

    return [
        Commitment.from_bcs(Commitment.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_commitment_from_bytes(arg0: number[]): [Option < Commitment > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_commitment_from_bytes", [], args);

    return [
        Option.from_bcs(Option.bcs(Commitment.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_commitment_with_basepoint(arg0: Scalar, arg1: Scalar, arg2: RistrettoPoint): [Commitment] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Scalar.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_commitment_with_basepoint", [], args);

    return [
        Commitment.from_bcs(Commitment.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function randomness_base_for_bulletproof(): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "randomness_base_for_bulletproof", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const ristretto255_pedersen = {
    Commitment,
    commitment_add,
    commitment_add_assign,
    commitment_as_compressed_point,
    commitment_as_point,
    commitment_clone,
    commitment_equals,
    commitment_from_compressed,
    commitment_from_point,
    commitment_into_compressed_point,
    commitment_into_point,
    commitment_sub,
    commitment_sub_assign,
    commitment_to_bytes,
    new_commitment,
    new_commitment_for_bulletproof,
    new_commitment_from_bytes,
    new_commitment_with_basepoint,
    randomness_base_for_bulletproof
}