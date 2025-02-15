import {
    StructClass,
    TypeArgument,
    get_package_address,
    get_wasm,
    has_arr,
    into_arr_bcs_vector,
    into_arr_value,
    to_arr_value,
    u64 as u64_import
} from "../../sui_wasm";
import {
    BigVector
} from "./big_vector";
import {
    Option
} from "./option";
import {
    BcsType,
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "smart_vector";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== SmartVector =============================== */

export class SmartVector < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SmartVector`;

    inline_vec: T0[];
    big_vec: Option < BigVector < T0 >> ;
    inline_capacity: Option < u64_import > ;
    bucket_size: Option < u64_import > ;

    T0_bcs: any;

    constructor(inline_vec: T0[], big_vec: Option < BigVector < T0 >> , inline_capacity: Option < u64_import > , bucket_size: Option < u64_import > ) {
        this.inline_vec = inline_vec;
        this.big_vec = big_vec;
        this.inline_capacity = inline_capacity;
        this.bucket_size = bucket_size;
    }

    into_value() {
        return {
            inline_vec: into_arr_value(this.inline_vec),
            big_vec: (this.big_vec as unknown as StructClass).into_value ? (this.big_vec as unknown as StructClass).into_value() : this.big_vec,
            inline_capacity: (this.inline_capacity as unknown as StructClass).into_value ? (this.inline_capacity as unknown as StructClass).into_value() : this.inline_capacity,
            bucket_size: (this.bucket_size as unknown as StructClass).into_value ? (this.bucket_size as unknown as StructClass).into_value() : this.bucket_size
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.inline_vec) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.inline_vec) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.inline_vec) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.inline_vec) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.inline_vec) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return SmartVector.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SmartVector.from_bcs_vector(args)
    }

    get_bcs() {
        return SmartVector.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SmartVector`
    }

    from(arg: SmartVector < T0 > ) {
        this.inline_vec = arg.inline_vec;
        this.big_vec = arg.big_vec;
        this.inline_capacity = arg.inline_capacity;
        this.bucket_size = arg.bucket_size;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        inline_vec: T0[],
        big_vec: Option < BigVector < T0 >> ,
        inline_capacity: Option < u64_import > ,
        bucket_size: Option < u64_import >
    }): SmartVector < T0 > {
        return new SmartVector(arg.inline_vec, arg.big_vec, arg.inline_capacity, arg.bucket_size)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        inline_vec: T0[],
        big_vec: Option < BigVector < T0 >> ,
        inline_capacity: Option < u64_import > ,
        bucket_size: Option < u64_import >
    } []): SmartVector < T0 > [] {
        return args.map(function(arg) {
            return new SmartVector(arg.inline_vec, arg.big_vec, arg.inline_capacity, arg.bucket_size)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`SmartVector<${T0.name}>`, {
                inline_vec: bcs_import.vector(T0),
                big_vec: Option.bcs(BigVector.bcs(T0)),
                inline_capacity: Option.bcs(bcs_import.u64()),
                bucket_size: Option.bcs(bcs_import.u64()),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new SmartVector(val.inline_vec, val.big_vec, val.inline_capacity, val.bucket_size),
            });
    };
}

function append < T0 extends StructClass > (type_args: string[], arg0: SmartVector < T0 > , arg1: SmartVector < T0 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "append", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartVector < T0 > );
}

function borrow < T0 extends StructClass > (type_args: string[], arg0: SmartVector < T0 > , arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function borrow_mut < T0 extends StructClass > (type_args: string[], arg0: SmartVector < T0 > , arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_mut", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartVector < T0 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function contains < T0 extends StructClass > (type_args: string[], arg0: SmartVector < T0 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "contains", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function destroy_empty < T0 extends StructClass > (type_args: string[], arg0: SmartVector < T0 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_empty", type_args, args);
}

function empty < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "empty", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function index_of < T0 extends StructClass > (type_args: string[], arg0: SmartVector < T0 > , arg1: T0): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "index_of", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function is_empty < T0 extends StructClass > (type_args: string[], arg0: SmartVector < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_empty", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function length < T0 extends StructClass > (type_args: string[], arg0: SmartVector < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "length", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function pop_back < T0 extends StructClass > (type_args: string[], arg0: SmartVector < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pop_back", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartVector < T0 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function push_back < T0 extends StructClass > (type_args: string[], arg0: SmartVector < T0 > , arg1: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "push_back", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartVector < T0 > );
}

function remove < T0 extends StructClass > (type_args: string[], arg0: SmartVector < T0 > , arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartVector < T0 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function reverse < T0 extends StructClass > (type_args: string[], arg0: SmartVector < T0 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "reverse", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartVector < T0 > );
}

function singleton < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "singleton", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function swap < T0 extends StructClass > (type_args: string[], arg0: SmartVector < T0 > , arg1: u64_import, arg2: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartVector < T0 > );
}

function swap_remove < T0 extends StructClass > (type_args: string[], arg0: SmartVector < T0 > , arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap_remove", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartVector < T0 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function destroy < T0 extends StructClass > (type_args: string[], arg0: SmartVector < T0 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy", type_args, args);
}

function new_ < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function add_all < T0 extends StructClass > (type_args: string[], arg0: SmartVector < T0 > , arg1: T0[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_all", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartVector < T0 > );
}

function clear < T0 extends StructClass > (type_args: string[], arg0: SmartVector < T0 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "clear", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartVector < T0 > );
}

function to_vector < T0 extends StructClass > (type_args: string[], arg0: SmartVector < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_vector", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function empty_with_config < T0 extends StructClass > (type_args: string[], arg0: u64_import, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "empty_with_config", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

export const smart_vector = {
    SmartVector,
    append,
    borrow,
    borrow_mut,
    contains,
    destroy_empty,
    empty,
    index_of,
    is_empty,
    length,
    pop_back,
    push_back,
    remove,
    reverse,
    singleton,
    swap,
    swap_remove,
    destroy,
    new_,
    add_all,
    clear,
    to_vector,
    empty_with_config
}