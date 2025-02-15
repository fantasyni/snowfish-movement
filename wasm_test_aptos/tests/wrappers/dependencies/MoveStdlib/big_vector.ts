import {
    StructClass,
    TypeArgument,
    get_package_address,
    get_wasm,
    to_arr_value,
    u64 as u64_import
} from "../../sui_wasm";
import {
    TableWithLength
} from "./table_with_length";
import {
    BcsType,
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "big_vector";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== BigVector =============================== */

export class BigVector < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::BigVector`;

    buckets: TableWithLength;
    end_index: u64_import;
    bucket_size: u64_import;

    T0_bcs: any;

    constructor(buckets: TableWithLength, end_index: u64_import, bucket_size: u64_import) {
        this.buckets = buckets;
        this.end_index = end_index;
        this.bucket_size = bucket_size;
    }

    into_value() {
        return {
            buckets: (this.buckets as unknown as StructClass).into_value ? (this.buckets as unknown as StructClass).into_value() : this.buckets,
            end_index: (this.end_index as unknown as StructClass).into_value ? (this.end_index as unknown as StructClass).into_value() : this.end_index,
            bucket_size: (this.bucket_size as unknown as StructClass).into_value ? (this.bucket_size as unknown as StructClass).into_value() : this.bucket_size
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.buckets) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.buckets) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.buckets) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.buckets) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.buckets) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return BigVector.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return BigVector.from_bcs_vector(args)
    }

    get_bcs() {
        return BigVector.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::BigVector`
    }

    from(arg: BigVector < T0 > ) {
        this.buckets = arg.buckets;
        this.end_index = arg.end_index;
        this.bucket_size = arg.bucket_size;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        buckets: TableWithLength,
        end_index: u64_import,
        bucket_size: u64_import
    }): BigVector < T0 > {
        return new BigVector(arg.buckets, arg.end_index, arg.bucket_size)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        buckets: TableWithLength,
        end_index: u64_import,
        bucket_size: u64_import
    } []): BigVector < T0 > [] {
        return args.map(function(arg) {
            return new BigVector(arg.buckets, arg.end_index, arg.bucket_size)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`BigVector<${T0.name}>`, {
                buckets: TableWithLength.bcs,
                end_index: bcs_import.u64(),
                bucket_size: bcs_import.u64(),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new BigVector(val.buckets, val.end_index, val.bucket_size),
            });
    };
}

function append < T0 extends StructClass > (type_args: string[], arg0: BigVector < T0 > , arg1: BigVector < T0 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "append", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as BigVector < T0 > );
}

function borrow < T0 extends StructClass > (type_args: string[], arg0: BigVector < T0 > , arg1: u64_import): [Uint8Array] {
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

function borrow_mut < T0 extends StructClass > (type_args: string[], arg0: BigVector < T0 > , arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_mut", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as BigVector < T0 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function contains < T0 extends StructClass > (type_args: string[], arg0: BigVector < T0 > , arg1: T0): [Uint8Array] {
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

function destroy_empty < T0 extends StructClass > (type_args: string[], arg0: BigVector < T0 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_empty", type_args, args);
}

function empty < T0 extends StructClass > (type_args: string[], arg0: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "empty", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function index_of < T0 extends StructClass > (type_args: string[], arg0: BigVector < T0 > , arg1: T0): [Uint8Array, Uint8Array] {
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

function is_empty < T0 extends StructClass > (type_args: string[], arg0: BigVector < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_empty", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function length < T0 extends StructClass > (type_args: string[], arg0: BigVector < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "length", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function pop_back < T0 extends StructClass > (type_args: string[], arg0: BigVector < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pop_back", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as BigVector < T0 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function push_back < T0 extends StructClass > (type_args: string[], arg0: BigVector < T0 > , arg1: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "push_back", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as BigVector < T0 > );
}

function remove < T0 extends StructClass > (type_args: string[], arg0: BigVector < T0 > , arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as BigVector < T0 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function reverse < T0 extends StructClass > (type_args: string[], arg0: BigVector < T0 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "reverse", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as BigVector < T0 > );
}

function singleton < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "singleton", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function swap < T0 extends StructClass > (type_args: string[], arg0: BigVector < T0 > , arg1: u64_import, arg2: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as BigVector < T0 > );
}

function swap_remove < T0 extends StructClass > (type_args: string[], arg0: BigVector < T0 > , arg1: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "swap_remove", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as BigVector < T0 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function destroy < T0 extends StructClass > (type_args: string[], arg0: BigVector < T0 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy", type_args, args);
}

function to_vector < T0 extends StructClass > (type_args: string[], arg0: BigVector < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_vector", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

export const big_vector = {
    BigVector,
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
    to_vector
}