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
let MODULE_NAME: string = "ristretto255_elgamal";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Ciphertext =============================== */

export class Ciphertext implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Ciphertext`;

    left: RistrettoPoint;
    right: RistrettoPoint;

    constructor(left: RistrettoPoint, right: RistrettoPoint) {
        this.left = left;
        this.right = right;
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
        return Ciphertext.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Ciphertext.from_bcs_vector(args)
    }

    get_bcs() {
        return Ciphertext.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Ciphertext`
    }

    from(arg: Ciphertext) {
        this.left = arg.left;
        this.right = arg.right;
    }

    static from_bcs(arg: {
        left: RistrettoPoint,
        right: RistrettoPoint
    }): Ciphertext {
        return new Ciphertext(arg.left, arg.right)
    }

    static from_bcs_vector(args: {
        left: RistrettoPoint,
        right: RistrettoPoint
    } []): Ciphertext[] {
        return args.map(function(arg) {
            return new Ciphertext(arg.left, arg.right)
        })
    }

    static get bcs() {
        return bcs_import.struct("Ciphertext", {
            left: RistrettoPoint.bcs,
            right: RistrettoPoint.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Ciphertext(val.left, val.right),
        });
    };
}

/* ============================== CompressedCiphertext =============================== */

export class CompressedCiphertext implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CompressedCiphertext`;

    left: CompressedRistretto;
    right: CompressedRistretto;

    constructor(left: CompressedRistretto, right: CompressedRistretto) {
        this.left = left;
        this.right = right;
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
        return CompressedCiphertext.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CompressedCiphertext.from_bcs_vector(args)
    }

    get_bcs() {
        return CompressedCiphertext.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CompressedCiphertext`
    }

    from(arg: CompressedCiphertext) {
        this.left = arg.left;
        this.right = arg.right;
    }

    static from_bcs(arg: {
        left: CompressedRistretto,
        right: CompressedRistretto
    }): CompressedCiphertext {
        return new CompressedCiphertext(arg.left, arg.right)
    }

    static from_bcs_vector(args: {
        left: CompressedRistretto,
        right: CompressedRistretto
    } []): CompressedCiphertext[] {
        return args.map(function(arg) {
            return new CompressedCiphertext(arg.left, arg.right)
        })
    }

    static get bcs() {
        return bcs_import.struct("CompressedCiphertext", {
            left: CompressedRistretto.bcs,
            right: CompressedRistretto.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CompressedCiphertext(val.left, val.right),
        });
    };
}

/* ============================== CompressedPubkey =============================== */

export class CompressedPubkey implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CompressedPubkey`;

    point: CompressedRistretto;

    constructor(point: CompressedRistretto) {
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
        return CompressedPubkey.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CompressedPubkey.from_bcs_vector(args)
    }

    get_bcs() {
        return CompressedPubkey.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CompressedPubkey`
    }

    from(arg: CompressedPubkey) {
        this.point = arg.point;
    }

    static from_bcs(arg: {
        point: CompressedRistretto
    }): CompressedPubkey {
        return new CompressedPubkey(arg.point)
    }

    static from_bcs_vector(args: {
        point: CompressedRistretto
    } []): CompressedPubkey[] {
        return args.map(function(arg) {
            return new CompressedPubkey(arg.point)
        })
    }

    static get bcs() {
        return bcs_import.struct("CompressedPubkey", {
            point: CompressedRistretto.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CompressedPubkey(val.point),
        });
    };
}

function ciphertext_add(arg0: Ciphertext, arg1: Ciphertext): [Ciphertext] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Ciphertext.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Ciphertext.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ciphertext_add", [], args);

    return [
        Ciphertext.from_bcs(Ciphertext.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function ciphertext_add_assign(arg0: Ciphertext, arg1: Ciphertext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Ciphertext.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Ciphertext.bcs.serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ciphertext_add_assign", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function ciphertext_as_points(arg0: Ciphertext): [RistrettoPoint, RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Ciphertext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ciphertext_as_points", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0]))),
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r1.Raw[0])))
    ];
}

function ciphertext_clone(arg0: Ciphertext): [Ciphertext] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Ciphertext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ciphertext_clone", [], args);

    return [
        Ciphertext.from_bcs(Ciphertext.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function ciphertext_equals(arg0: Ciphertext, arg1: Ciphertext): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Ciphertext.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Ciphertext.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ciphertext_equals", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function ciphertext_from_compressed_points(arg0: CompressedRistretto, arg1: CompressedRistretto): [CompressedCiphertext] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(CompressedRistretto.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(CompressedRistretto.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ciphertext_from_compressed_points", [], args);

    return [
        CompressedCiphertext.from_bcs(CompressedCiphertext.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function ciphertext_from_points(arg0: RistrettoPoint, arg1: RistrettoPoint): [Ciphertext] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ciphertext_from_points", [], args);

    return [
        Ciphertext.from_bcs(Ciphertext.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function ciphertext_into_points(arg0: Ciphertext): [RistrettoPoint, RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Ciphertext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ciphertext_into_points", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0]))),
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r1.Raw[0])))
    ];
}

function ciphertext_sub(arg0: Ciphertext, arg1: Ciphertext): [Ciphertext] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Ciphertext.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Ciphertext.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ciphertext_sub", [], args);

    return [
        Ciphertext.from_bcs(Ciphertext.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function ciphertext_sub_assign(arg0: Ciphertext, arg1: Ciphertext) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Ciphertext.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Ciphertext.bcs.serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ciphertext_sub_assign", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function ciphertext_to_bytes(arg0: Ciphertext): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Ciphertext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ciphertext_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function compress_ciphertext(arg0: Ciphertext): [CompressedCiphertext] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Ciphertext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "compress_ciphertext", [], args);

    return [
        CompressedCiphertext.from_bcs(CompressedCiphertext.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function decompress_ciphertext(arg0: CompressedCiphertext): [Ciphertext] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(CompressedCiphertext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "decompress_ciphertext", [], args);

    return [
        Ciphertext.from_bcs(Ciphertext.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function get_value_component(arg0: Ciphertext): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Ciphertext.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_value_component", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_ciphertext_from_bytes(arg0: number[]): [Option < Ciphertext > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_ciphertext_from_bytes", [], args);

    return [
        Option.from_bcs(Option.bcs(Ciphertext.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_ciphertext_no_randomness(arg0: Scalar): [Ciphertext] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_ciphertext_no_randomness", [], args);

    return [
        Ciphertext.from_bcs(Ciphertext.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_pubkey_from_bytes(arg0: number[]): [Option < CompressedPubkey > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_pubkey_from_bytes", [], args);

    return [
        Option.from_bcs(Option.bcs(CompressedPubkey.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function pubkey_to_bytes(arg0: CompressedPubkey): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(CompressedPubkey.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pubkey_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function pubkey_to_compressed_point(arg0: CompressedPubkey): [CompressedRistretto] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(CompressedPubkey.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pubkey_to_compressed_point", [], args);

    return [
        CompressedRistretto.from_bcs(CompressedRistretto.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function pubkey_to_point(arg0: CompressedPubkey): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(CompressedPubkey.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pubkey_to_point", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const ristretto255_elgamal = {
    Ciphertext,
    CompressedCiphertext,
    CompressedPubkey,
    ciphertext_add,
    ciphertext_add_assign,
    ciphertext_as_points,
    ciphertext_clone,
    ciphertext_equals,
    ciphertext_from_compressed_points,
    ciphertext_from_points,
    ciphertext_into_points,
    ciphertext_sub,
    ciphertext_sub_assign,
    ciphertext_to_bytes,
    compress_ciphertext,
    decompress_ciphertext,
    get_value_component,
    new_ciphertext_from_bytes,
    new_ciphertext_no_randomness,
    new_pubkey_from_bytes,
    pubkey_to_bytes,
    pubkey_to_compressed_point,
    pubkey_to_point
}