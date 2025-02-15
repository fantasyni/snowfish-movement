import {
    StructClass,
    U64,
    U8,
    get_package_address,
    get_wasm,
    has_arr,
    into_arr_bcs_vector,
    into_arr_value,
    u64 as u64_import
} from "../../sui_wasm";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "crypto_algebra";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Element =============================== */

export class Element implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Element`;

    handle: u64_import;

    constructor(handle: u64_import) {
        this.handle = handle;
    }

    into_value() {
        return {
            handle: (this.handle as unknown as StructClass).into_value ? (this.handle as unknown as StructClass).into_value() : this.handle
        }
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
        return Element.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Element.from_bcs_vector(args)
    }

    get_bcs() {
        return Element.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Element`
    }

    from(arg: Element) {
        this.handle = arg.handle;
    }

    static from_bcs(arg: {
        handle: u64_import
    }): Element {
        return new Element(arg.handle)
    }

    static from_bcs_vector(args: {
        handle: u64_import
    } []): Element[] {
        return args.map(function(arg) {
            return new Element(arg.handle)
        })
    }

    static get bcs() {
        return bcs_import.struct("Element", {
            handle: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Element(val.handle),
        });
    };
}

function add < T0 extends StructClass > (type_args: string[], arg0: Element, arg1: Element): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function sub < T0 extends StructClass > (type_args: string[], arg0: Element, arg1: Element): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sub", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function zero < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "zero", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function abort_unless_cryptography_algebra_natives_enabled() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "abort_unless_cryptography_algebra_natives_enabled", [], args);

}

function add_internal < T0 extends StructClass > (type_args: string[], arg0: u64_import, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function deserialize < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: U8[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deserialize", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function deserialize_internal < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: U8[]): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "deserialize_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function div < T0 extends StructClass > (type_args: string[], arg0: Element, arg1: Element): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "div", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function div_internal < T0 extends StructClass > (type_args: string[], arg0: u64_import, arg1: u64_import): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "div_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function double < T0 extends StructClass > (type_args: string[], arg0: Element): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "double", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function double_internal < T0 extends StructClass > (type_args: string[], arg0: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "double_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function downcast < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Element): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "downcast", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function downcast_internal < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: u64_import): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "downcast_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function eq < T0 extends StructClass > (type_args: string[], arg0: Element, arg1: Element): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "eq", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function eq_internal < T0 extends StructClass > (type_args: string[], arg0: u64_import, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "eq_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function from_u64 < T0 extends StructClass > (type_args: string[], arg0: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_u64", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function from_u64_internal < T0 extends StructClass > (type_args: string[], arg0: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "from_u64_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function handles_from_elements < T0 extends StructClass > (type_args: string[], arg0: Element[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "handles_from_elements", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function hash_to < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: U8[], arg1: U8[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "hash_to", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function hash_to_internal < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: U8[], arg1: U8[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "hash_to_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function inv < T0 extends StructClass > (type_args: string[], arg0: Element): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "inv", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function inv_internal < T0 extends StructClass > (type_args: string[], arg0: u64_import): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "inv_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function mul < T0 extends StructClass > (type_args: string[], arg0: Element, arg1: Element): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mul", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function mul_internal < T0 extends StructClass > (type_args: string[], arg0: u64_import, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "mul_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function multi_pairing < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: Element[], arg1: Element[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "multi_pairing", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function multi_pairing_internal < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: U64[], arg1: U64[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "multi_pairing_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function multi_scalar_mul < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Element[], arg1: Element[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "multi_scalar_mul", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function multi_scalar_mul_internal < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: U64[], arg1: U64[]): [Uint8Array] {
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

function neg < T0 extends StructClass > (type_args: string[], arg0: Element): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "neg", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function neg_internal < T0 extends StructClass > (type_args: string[], arg0: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "neg_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function one < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "one", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function one_internal < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "one_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function order < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "order", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function order_internal < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "order_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function pairing < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: Element, arg1: Element): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pairing", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function pairing_internal < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: u64_import, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pairing_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function scalar_mul < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Element, arg1: Element): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_mul", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function scalar_mul_internal < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: u64_import, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "scalar_mul_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function serialize < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Element): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "serialize", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function serialize_internal < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "serialize_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function sqr < T0 extends StructClass > (type_args: string[], arg0: Element): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sqr", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function sqr_internal < T0 extends StructClass > (type_args: string[], arg0: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sqr_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function sub_internal < T0 extends StructClass > (type_args: string[], arg0: u64_import, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sub_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function upcast < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Element): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upcast", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function upcast_internal < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upcast_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function zero_internal < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "zero_internal", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

export const crypto_algebra = {
    Element,
    add,
    sub,
    zero,
    abort_unless_cryptography_algebra_natives_enabled,
    add_internal,
    deserialize,
    deserialize_internal,
    div,
    div_internal,
    double,
    double_internal,
    downcast,
    downcast_internal,
    eq,
    eq_internal,
    from_u64,
    from_u64_internal,
    handles_from_elements,
    hash_to,
    hash_to_internal,
    inv,
    inv_internal,
    mul,
    mul_internal,
    multi_pairing,
    multi_pairing_internal,
    multi_scalar_mul,
    multi_scalar_mul_internal,
    neg,
    neg_internal,
    one,
    one_internal,
    order,
    order_internal,
    pairing,
    pairing_internal,
    scalar_mul,
    scalar_mul_internal,
    serialize,
    serialize_internal,
    sqr,
    sqr_internal,
    sub_internal,
    upcast,
    upcast_internal,
    zero_internal
}