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
    TableWithLength
} from "./table_with_length";
import {
    BcsType,
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "smart_table";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Entry =============================== */

export class Entry < T0 extends TypeArgument, T1 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Entry`;

    hash: u64_import;
    key: T0;
    value: T1;

    T0_bcs: any;
    T1_bcs: any;

    constructor(hash: u64_import, key: T0, value: T1) {
        this.hash = hash;
        this.key = key;
        this.value = value;
    }

    into_value() {
        return {
            hash: (this.hash as unknown as StructClass).into_value ? (this.hash as unknown as StructClass).into_value() : this.hash,
            key: (this.key as StructClass).into_value ? (this.key as StructClass).into_value() : this.key,
            value: (this.value as StructClass).into_value ? (this.value as StructClass).into_value() : this.value
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.key) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.key) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.key) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.key) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.key) as StructClass).get_bcs(), (to_arr_value(this.value) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return Entry.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Entry.from_bcs_vector(args)
    }

    get_bcs() {
        return Entry.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Entry`
    }

    from(arg: Entry < T0, T1 > ) {
        this.hash = arg.hash;
        this.key = arg.key;
        this.value = arg.value;
    }

    static from_bcs < T0 extends TypeArgument,
    T1 extends TypeArgument > (arg: {
        hash: u64_import,
        key: T0,
        value: T1
    }): Entry < T0,
    T1 > {
        return new Entry(arg.hash, arg.key, arg.value)
    }

    static from_bcs_vector < T0 extends TypeArgument,
    T1 extends TypeArgument > (args: {
        hash: u64_import,
        key: T0,
        value: T1
    } []): Entry < T0,
    T1 > [] {
        return args.map(function(arg) {
            return new Entry(arg.hash, arg.key, arg.value)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0, T1 extends TypeArgument, input1 > (T0: BcsType < T0, input0 > , T1: BcsType < T1, input1 > ) =>
            bcs_import.struct(`Entry<${T0.name}, ${T1.name}>`, {
                hash: bcs_import.u64(),
                key: T0,
                value: T1,
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Entry(val.hash, val.key, val.value),
            });
    };
}

/* ============================== SmartTable =============================== */

export class SmartTable < T0 extends TypeArgument, T1 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SmartTable`;

    buckets: TableWithLength;
    num_buckets: u64_import;
    level: number;
    size: u64_import;
    split_load_threshold: number;
    target_bucket_size: u64_import;

    T0_bcs: any;
    T1_bcs: any;

    constructor(buckets: TableWithLength, num_buckets: u64_import, level: number, size: u64_import, split_load_threshold: number, target_bucket_size: u64_import) {
        this.buckets = buckets;
        this.num_buckets = num_buckets;
        this.level = level;
        this.size = size;
        this.split_load_threshold = split_load_threshold;
        this.target_bucket_size = target_bucket_size;
    }

    into_value() {
        return {
            buckets: (this.buckets as unknown as StructClass).into_value ? (this.buckets as unknown as StructClass).into_value() : this.buckets,
            num_buckets: (this.num_buckets as unknown as StructClass).into_value ? (this.num_buckets as unknown as StructClass).into_value() : this.num_buckets,
            level: (this.level as unknown as StructClass).into_value ? (this.level as unknown as StructClass).into_value() : this.level,
            size: (this.size as unknown as StructClass).into_value ? (this.size as unknown as StructClass).into_value() : this.size,
            split_load_threshold: (this.split_load_threshold as unknown as StructClass).into_value ? (this.split_load_threshold as unknown as StructClass).into_value() : this.split_load_threshold,
            target_bucket_size: (this.target_bucket_size as unknown as StructClass).into_value ? (this.target_bucket_size as unknown as StructClass).into_value() : this.target_bucket_size
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.buckets) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.buckets) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.buckets) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.buckets) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.buckets) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.buckets) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.buckets) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.buckets) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.buckets) as StructClass).get_bcs(), (to_arr_value(this.buckets) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return SmartTable.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SmartTable.from_bcs_vector(args)
    }

    get_bcs() {
        return SmartTable.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SmartTable`
    }

    from(arg: SmartTable < T0, T1 > ) {
        this.buckets = arg.buckets;
        this.num_buckets = arg.num_buckets;
        this.level = arg.level;
        this.size = arg.size;
        this.split_load_threshold = arg.split_load_threshold;
        this.target_bucket_size = arg.target_bucket_size;
    }

    static from_bcs < T0 extends TypeArgument,
    T1 extends TypeArgument > (arg: {
        buckets: TableWithLength,
        num_buckets: u64_import,
        level: number,
        size: u64_import,
        split_load_threshold: number,
        target_bucket_size: u64_import
    }): SmartTable < T0,
    T1 > {
        return new SmartTable(arg.buckets, arg.num_buckets, arg.level, arg.size, arg.split_load_threshold, arg.target_bucket_size)
    }

    static from_bcs_vector < T0 extends TypeArgument,
    T1 extends TypeArgument > (args: {
        buckets: TableWithLength,
        num_buckets: u64_import,
        level: number,
        size: u64_import,
        split_load_threshold: number,
        target_bucket_size: u64_import
    } []): SmartTable < T0,
    T1 > [] {
        return args.map(function(arg) {
            return new SmartTable(arg.buckets, arg.num_buckets, arg.level, arg.size, arg.split_load_threshold, arg.target_bucket_size)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0, T1 extends TypeArgument, input1 > (T0: BcsType < T0, input0 > , T1: BcsType < T1, input1 > ) =>
            bcs_import.struct(`SmartTable<${T0.name}, ${T1.name}>`, {
                buckets: TableWithLength.bcs,
                num_buckets: bcs_import.u64(),
                level: bcs_import.u8(),
                size: bcs_import.u64(),
                split_load_threshold: bcs_import.u8(),
                target_bucket_size: bcs_import.u64(),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new SmartTable(val.buckets, val.num_buckets, val.level, val.size, val.split_load_threshold, val.target_bucket_size),
            });
    };
}

function borrow < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function borrow_mut < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_mut", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartTable < T0, T1 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function contains < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > , arg1: T0): [Uint8Array] {
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

function destroy_empty < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_empty", type_args, args);
}

function length < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "length", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function remove < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartTable < T0, T1 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function borrow_with_default < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > , arg1: T0, arg2: T1): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_with_default", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function add < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > , arg1: T0, arg2: T1) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartTable < T0, T1 > );
}

function borrow_mut_with_default < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > , arg1: T0, arg2: T1): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_mut_with_default", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartTable < T0, T1 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function destroy < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy", type_args, args);
}

function new_ < T0 extends StructClass, T1 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function upsert < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > , arg1: T0, arg2: T1) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upsert", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartTable < T0, T1 > );
}

function add_all < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > , arg1: T0[], arg2: T1[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg2) ? into_arr_bcs_vector(arg2).serialize(into_arr_value(arg2)).toBytes() : new Uint8Array([0]), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_all", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartTable < T0, T1 > );
}

function keys < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "keys", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function borrow_buckets < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_buckets", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function borrow_buckets_mut < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_buckets_mut", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartTable < T0, T1 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function borrow_kv < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Entry < T0, T1 > ): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_kv", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function borrow_kv_mut < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Entry < T0, T1 > ): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_kv_mut", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Entry < T0, T1 > );
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function bucket_index(arg0: number, arg1: u64_import, arg2: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u8().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bucket_index", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function clear < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "clear", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartTable < T0, T1 > );
}

function keys_paginated < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > , arg1: u64_import, arg2: u64_import, arg3: u64_import): [Uint8Array, Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), "")
    ]

    let [r0, r1, r2] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "keys_paginated", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0]),
        new Uint8Array(r2.Raw[0])
    ];
}

function load_factor < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "load_factor", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function new_with_config < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: u64_import, arg1: number, arg2: u64_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_with_config", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function num_buckets < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "num_buckets", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function split_one_bucket < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "split_one_bucket", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartTable < T0, T1 > );
}

function to_simple_map < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_simple_map", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function update_split_load_threshold < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > , arg1: number) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_split_load_threshold", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartTable < T0, T1 > );
}

function update_target_bucket_size < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SmartTable < T0, T1 > , arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_target_bucket_size", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SmartTable < T0, T1 > );
}

export const smart_table = {
    Entry,
    SmartTable,
    borrow,
    borrow_mut,
    contains,
    destroy_empty,
    length,
    remove,
    borrow_with_default,
    add,
    borrow_mut_with_default,
    destroy,
    new_,
    upsert,
    add_all,
    keys,
    borrow_buckets,
    borrow_buckets_mut,
    borrow_kv,
    borrow_kv_mut,
    bucket_index,
    clear,
    keys_paginated,
    load_factor,
    new_with_config,
    num_buckets,
    split_one_bucket,
    to_simple_map,
    update_split_load_threshold,
    update_target_bucket_size
}