import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "fixed_point64";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== FixedPoint64 =============================== */

export class FixedPoint64 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::FixedPoint64`;

    value: u64_import;

    constructor(value: u64_import) {
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
        return FixedPoint64.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return FixedPoint64.from_bcs_vector(args)
    }

    get_bcs() {
        return FixedPoint64.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::FixedPoint64`
    }

    from(arg: FixedPoint64) {
        this.value = arg.value;
    }

    static from_bcs(arg: {
        value: u64_import
    }): FixedPoint64 {
        return new FixedPoint64(arg.value)
    }

    static from_bcs_vector(args: {
        value: u64_import
    } []): FixedPoint64[] {
        return args.map(function(arg) {
            return new FixedPoint64(arg.value)
        })
    }

    static get bcs() {
        return bcs_import.struct("FixedPoint64", {
            value: bcs_import.u128(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new FixedPoint64(val.value),
        });
    };
}

function add(arg0: FixedPoint64, arg1: FixedPoint64): [FixedPoint64] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add", [], args);

    return [
        FixedPoint64.from_bcs(FixedPoint64.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function sub(arg0: FixedPoint64, arg1: FixedPoint64): [FixedPoint64] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sub", [], args);

    return [
        FixedPoint64.from_bcs(FixedPoint64.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function almost_equal(arg0: FixedPoint64, arg1: FixedPoint64, arg2: FixedPoint64): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "almost_equal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function ceil(arg0: FixedPoint64): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ceil", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create_from_rational(arg0: u64_import, arg1: u64_import): [FixedPoint64] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u128().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_from_rational", [], args);

    return [
        FixedPoint64.from_bcs(FixedPoint64.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create_from_raw_value(arg0: u64_import): [FixedPoint64] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u128().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_from_raw_value", [], args);

    return [
        FixedPoint64.from_bcs(FixedPoint64.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create_from_u128(arg0: u64_import): [FixedPoint64] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u128().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_from_u128", [], args);

    return [
        FixedPoint64.from_bcs(FixedPoint64.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function divide_u128(arg0: u64_import, arg1: FixedPoint64): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u128().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "divide_u128", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function equal(arg0: FixedPoint64, arg1: FixedPoint64): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "equal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function floor(arg0: FixedPoint64): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "floor", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_raw_value(arg0: FixedPoint64): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_raw_value", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function greater(arg0: FixedPoint64, arg1: FixedPoint64): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "greater", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function greater_or_equal(arg0: FixedPoint64, arg1: FixedPoint64): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "greater_or_equal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function is_zero(arg0: FixedPoint64): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_zero", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function less(arg0: FixedPoint64, arg1: FixedPoint64): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "less", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function less_or_equal(arg0: FixedPoint64, arg1: FixedPoint64): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "less_or_equal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function max(arg0: FixedPoint64, arg1: FixedPoint64): [FixedPoint64] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "max", [], args);

    return [
        FixedPoint64.from_bcs(FixedPoint64.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function min(arg0: FixedPoint64, arg1: FixedPoint64): [FixedPoint64] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "min", [], args);

    return [
        FixedPoint64.from_bcs(FixedPoint64.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function multiply_u128(arg0: u64_import, arg1: FixedPoint64): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u128().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "multiply_u128", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function round(arg0: FixedPoint64): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "round", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const fixed_point64 = {
    FixedPoint64,
    add,
    sub,
    almost_equal,
    ceil,
    create_from_rational,
    create_from_raw_value,
    create_from_u128,
    divide_u128,
    equal,
    floor,
    get_raw_value,
    greater,
    greater_or_equal,
    is_zero,
    less,
    less_or_equal,
    max,
    min,
    multiply_u128,
    round
}