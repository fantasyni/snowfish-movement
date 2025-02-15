import {
    StructClass,
    get_package_address,
    get_wasm,
    has_arr,
    into_arr_bcs_vector,
    into_arr_value,
    u64 as u64_import
} from "../../sui_wasm";
import {
    Option
} from "./option";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "ristretto255";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== CompressedRistretto =============================== */

export class CompressedRistretto implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CompressedRistretto`;

    data: number[];

    constructor(data: number[]) {
        this.data = data;
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
        return CompressedRistretto.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CompressedRistretto.from_bcs_vector(args)
    }

    get_bcs() {
        return CompressedRistretto.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CompressedRistretto`
    }

    from(arg: CompressedRistretto) {
        this.data = arg.data;
    }

    static from_bcs(arg: {
        data: number[]
    }): CompressedRistretto {
        return new CompressedRistretto(arg.data)
    }

    static from_bcs_vector(args: {
        data: number[]
    } []): CompressedRistretto[] {
        return args.map(function(arg) {
            return new CompressedRistretto(arg.data)
        })
    }

    static get bcs() {
        return bcs_import.struct("CompressedRistretto", {
            data: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CompressedRistretto(val.data),
        });
    };
}

/* ============================== RistrettoPoint =============================== */

export class RistrettoPoint implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RistrettoPoint`;

    handle: u64_import;

    constructor(handle: u64_import) {
        this.handle = handle;
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
        return RistrettoPoint.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RistrettoPoint.from_bcs_vector(args)
    }

    get_bcs() {
        return RistrettoPoint.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RistrettoPoint`
    }

    from(arg: RistrettoPoint) {
        this.handle = arg.handle;
    }

    static from_bcs(arg: {
        handle: u64_import
    }): RistrettoPoint {
        return new RistrettoPoint(arg.handle)
    }

    static from_bcs_vector(args: {
        handle: u64_import
    } []): RistrettoPoint[] {
        return args.map(function(arg) {
            return new RistrettoPoint(arg.handle)
        })
    }

    static get bcs() {
        return bcs_import.struct("RistrettoPoint", {
            handle: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RistrettoPoint(val.handle),
        });
    };
}

/* ============================== Scalar =============================== */

export class Scalar implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Scalar`;

    data: number[];

    constructor(data: number[]) {
        this.data = data;
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
        return Scalar.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Scalar.from_bcs_vector(args)
    }

    get_bcs() {
        return Scalar.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Scalar`
    }

    from(arg: Scalar) {
        this.data = arg.data;
    }

    static from_bcs(arg: {
        data: number[]
    }): Scalar {
        return new Scalar(arg.data)
    }

    static from_bcs_vector(args: {
        data: number[]
    } []): Scalar[] {
        return args.map(function(arg) {
            return new Scalar(arg.data)
        })
    }

    static get bcs() {
        return bcs_import.struct("Scalar", {
            data: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Scalar(val.data),
        });
    };
}

function multi_scalar_mul(arg0: RistrettoPoint[], arg1: Scalar[]): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(RistrettoPoint.bcs).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(Scalar.bcs).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "multi_scalar_mul", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function multi_scalar_mul_internal < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: T0[], arg1: T1[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "multi_scalar_mul_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function scalar_mul(arg0: Scalar, arg1: Scalar): [Scalar] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Scalar.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_mul", [], args);

    return [
        Scalar.from_bcs(Scalar.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function scalar_mul_internal(arg0: number[], arg1: number[]): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_mul_internal", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function basepoint(): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "basepoint", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function basepoint_compressed(): [CompressedRistretto] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "basepoint_compressed", [], args);

    return [
        CompressedRistretto.from_bcs(CompressedRistretto.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function basepoint_double_mul(arg0: Scalar, arg1: RistrettoPoint, arg2: Scalar): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(Scalar.bcs.serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "basepoint_double_mul", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function basepoint_double_mul_internal(arg0: number[], arg1: RistrettoPoint, arg2: number[]): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "basepoint_double_mul_internal", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function basepoint_mul(arg0: Scalar): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "basepoint_mul", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function basepoint_mul_internal(arg0: number[]): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "basepoint_mul_internal", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function compressed_point_to_bytes(arg0: CompressedRistretto): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(CompressedRistretto.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "compressed_point_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function double_scalar_mul(arg0: Scalar, arg1: RistrettoPoint, arg2: Scalar, arg3: RistrettoPoint): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(Scalar.bcs.serialize(arg2).toBytes(), ""),
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "double_scalar_mul", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function double_scalar_mul_internal(arg0: u64_import, arg1: u64_import, arg2: number[], arg3: number[]): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "double_scalar_mul_internal", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function hash_to_point_base(): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "hash_to_point_base", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_compressed_point_from_bytes(arg0: number[]): [Option < CompressedRistretto > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_compressed_point_from_bytes", [], args);

    return [
        Option.from_bcs(Option.bcs(CompressedRistretto.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_point_from_64_uniform_bytes(arg0: number[]): [Option < RistrettoPoint > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_point_from_64_uniform_bytes", [], args);

    return [
        Option.from_bcs(Option.bcs(RistrettoPoint.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_point_from_64_uniform_bytes_internal(arg0: number[]): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_point_from_64_uniform_bytes_internal", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function new_point_from_bytes(arg0: number[]): [Option < RistrettoPoint > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_point_from_bytes", [], args);

    return [
        Option.from_bcs(Option.bcs(RistrettoPoint.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_point_from_sha2_512(arg0: number[]): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_point_from_sha2_512", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_point_from_sha512(arg0: number[]): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_point_from_sha512", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_point_from_sha512_internal(arg0: number[]): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_point_from_sha512_internal", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function new_scalar_from_bytes(arg0: number[]): [Option < Scalar > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_scalar_from_bytes", [], args);

    return [
        Option.from_bcs(Option.bcs(Scalar.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_scalar_from_sha2_512(arg0: number[]): [Scalar] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_scalar_from_sha2_512", [], args);

    return [
        Scalar.from_bcs(Scalar.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_scalar_from_sha512(arg0: number[]): [Scalar] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_scalar_from_sha512", [], args);

    return [
        Scalar.from_bcs(Scalar.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_scalar_from_u128(arg0: u64_import): [Scalar] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u128().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_scalar_from_u128", [], args);

    return [
        Scalar.from_bcs(Scalar.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_scalar_from_u32(arg0: number): [Scalar] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u32().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_scalar_from_u32", [], args);

    return [
        Scalar.from_bcs(Scalar.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_scalar_from_u64(arg0: u64_import): [Scalar] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_scalar_from_u64", [], args);

    return [
        Scalar.from_bcs(Scalar.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_scalar_from_u8(arg0: number): [Scalar] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u8().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_scalar_from_u8", [], args);

    return [
        Scalar.from_bcs(Scalar.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_scalar_reduced_from_32_bytes(arg0: number[]): [Option < Scalar > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_scalar_reduced_from_32_bytes", [], args);

    return [
        Option.from_bcs(Option.bcs(Scalar.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_scalar_uniform_from_64_bytes(arg0: number[]): [Option < Scalar > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_scalar_uniform_from_64_bytes", [], args);

    return [
        Option.from_bcs(Option.bcs(Scalar.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function point_add(arg0: RistrettoPoint, arg1: RistrettoPoint): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_add", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function point_add_assign(arg0: RistrettoPoint, arg1: RistrettoPoint): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_add_assign", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function point_add_internal(arg0: RistrettoPoint, arg1: RistrettoPoint, arg2: boolean): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_add_internal", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function point_clone(arg0: RistrettoPoint): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_clone", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function point_clone_internal(arg0: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_clone_internal", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function point_compress(arg0: RistrettoPoint): [CompressedRistretto] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_compress", [], args);

    return [
        CompressedRistretto.from_bcs(CompressedRistretto.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function point_compress_internal(arg0: RistrettoPoint): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_compress_internal", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function point_decompress(arg0: CompressedRistretto): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(CompressedRistretto.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_decompress", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function point_decompress_internal(arg0: number[]): [u64_import, boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_decompress_internal", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0])),
        bcs_import.bool().parse(new Uint8Array(r1.Raw[0]))
    ];
}

function point_equals(arg0: RistrettoPoint, arg1: RistrettoPoint): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_equals", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function point_identity(): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_identity", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function point_identity_compressed(): [CompressedRistretto] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_identity_compressed", [], args);

    return [
        CompressedRistretto.from_bcs(CompressedRistretto.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function point_identity_internal(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_identity_internal", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function point_is_canonical_internal(arg0: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_is_canonical_internal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function point_mul(arg0: RistrettoPoint, arg1: Scalar): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Scalar.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_mul", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function point_mul_assign(arg0: RistrettoPoint, arg1: Scalar): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Scalar.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_mul_assign", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function point_mul_internal(arg0: RistrettoPoint, arg1: number[], arg2: boolean): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_mul_internal", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function point_neg(arg0: RistrettoPoint): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_neg", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function point_neg_assign(arg0: RistrettoPoint): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_neg_assign", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function point_neg_internal(arg0: RistrettoPoint, arg1: boolean): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_neg_internal", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function point_sub(arg0: RistrettoPoint, arg1: RistrettoPoint): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_sub", [], args);

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function point_sub_assign(arg0: RistrettoPoint, arg1: RistrettoPoint): [RistrettoPoint] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_sub_assign", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        RistrettoPoint.from_bcs(RistrettoPoint.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function point_sub_internal(arg0: RistrettoPoint, arg1: RistrettoPoint, arg2: boolean): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(RistrettoPoint.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_sub_internal", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function point_to_bytes(arg0: CompressedRistretto): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(CompressedRistretto.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "point_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function scalar_add(arg0: Scalar, arg1: Scalar): [Scalar] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Scalar.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_add", [], args);

    return [
        Scalar.from_bcs(Scalar.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function scalar_add_assign(arg0: Scalar, arg1: Scalar): [Scalar] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Scalar.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_add_assign", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Scalar.from_bcs(Scalar.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function scalar_add_internal(arg0: number[], arg1: number[]): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_add_internal", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function scalar_equals(arg0: Scalar, arg1: Scalar): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Scalar.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_equals", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function scalar_from_sha512_internal(arg0: number[]): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_from_sha512_internal", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function scalar_from_u128_internal(arg0: u64_import): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u128().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_from_u128_internal", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function scalar_from_u64_internal(arg0: u64_import): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_from_u64_internal", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function scalar_invert(arg0: Scalar): [Option < Scalar > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_invert", [], args);

    return [
        Option.from_bcs(Option.bcs(Scalar.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function scalar_invert_internal(arg0: number[]): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_invert_internal", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function scalar_is_canonical_internal(arg0: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_is_canonical_internal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function scalar_is_one(arg0: Scalar): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_is_one", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function scalar_is_zero(arg0: Scalar): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_is_zero", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function scalar_mul_assign(arg0: Scalar, arg1: Scalar): [Scalar] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Scalar.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_mul_assign", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Scalar.from_bcs(Scalar.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function scalar_neg(arg0: Scalar): [Scalar] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_neg", [], args);

    return [
        Scalar.from_bcs(Scalar.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function scalar_neg_assign(arg0: Scalar): [Scalar] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_neg_assign", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Scalar.from_bcs(Scalar.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function scalar_neg_internal(arg0: number[]): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_neg_internal", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function scalar_one(): [Scalar] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_one", [], args);

    return [
        Scalar.from_bcs(Scalar.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function scalar_reduced_from_32_bytes_internal(arg0: number[]): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_reduced_from_32_bytes_internal", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function scalar_sub(arg0: Scalar, arg1: Scalar): [Scalar] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Scalar.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_sub", [], args);

    return [
        Scalar.from_bcs(Scalar.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function scalar_sub_assign(arg0: Scalar, arg1: Scalar): [Scalar] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Scalar.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_sub_assign", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Scalar.from_bcs(Scalar.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function scalar_sub_internal(arg0: number[], arg1: number[]): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_sub_internal", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function scalar_to_bytes(arg0: Scalar): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Scalar.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function scalar_uniform_from_64_bytes_internal(arg0: number[]): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_uniform_from_64_bytes_internal", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function scalar_zero(): [Scalar] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_zero", [], args);

    return [
        Scalar.from_bcs(Scalar.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const ristretto255 = {
    CompressedRistretto,
    RistrettoPoint,
    Scalar,
    multi_scalar_mul,
    multi_scalar_mul_internal,
    scalar_mul,
    scalar_mul_internal,
    basepoint,
    basepoint_compressed,
    basepoint_double_mul,
    basepoint_double_mul_internal,
    basepoint_mul,
    basepoint_mul_internal,
    compressed_point_to_bytes,
    double_scalar_mul,
    double_scalar_mul_internal,
    hash_to_point_base,
    new_compressed_point_from_bytes,
    new_point_from_64_uniform_bytes,
    new_point_from_64_uniform_bytes_internal,
    new_point_from_bytes,
    new_point_from_sha2_512,
    new_point_from_sha512,
    new_point_from_sha512_internal,
    new_scalar_from_bytes,
    new_scalar_from_sha2_512,
    new_scalar_from_sha512,
    new_scalar_from_u128,
    new_scalar_from_u32,
    new_scalar_from_u64,
    new_scalar_from_u8,
    new_scalar_reduced_from_32_bytes,
    new_scalar_uniform_from_64_bytes,
    point_add,
    point_add_assign,
    point_add_internal,
    point_clone,
    point_clone_internal,
    point_compress,
    point_compress_internal,
    point_decompress,
    point_decompress_internal,
    point_equals,
    point_identity,
    point_identity_compressed,
    point_identity_internal,
    point_is_canonical_internal,
    point_mul,
    point_mul_assign,
    point_mul_internal,
    point_neg,
    point_neg_assign,
    point_neg_internal,
    point_sub,
    point_sub_assign,
    point_sub_internal,
    point_to_bytes,
    scalar_add,
    scalar_add_assign,
    scalar_add_internal,
    scalar_equals,
    scalar_from_sha512_internal,
    scalar_from_u128_internal,
    scalar_from_u64_internal,
    scalar_invert,
    scalar_invert_internal,
    scalar_is_canonical_internal,
    scalar_is_one,
    scalar_is_zero,
    scalar_mul_assign,
    scalar_neg,
    scalar_neg_assign,
    scalar_neg_internal,
    scalar_one,
    scalar_reduced_from_32_bytes_internal,
    scalar_sub,
    scalar_sub_assign,
    scalar_sub_internal,
    scalar_to_bytes,
    scalar_uniform_from_64_bytes_internal,
    scalar_zero
}