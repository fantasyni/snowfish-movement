import {
    StructClass,
    TypeArgument,
    get_package_address,
    get_wasm,
    has_arr,
    into_arr_bcs_vector,
    into_arr_value,
    to_arr_value
} from "../../sui_wasm";
import {
    BcsType,
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "simple_map";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Element =============================== */

export class Element < T0 extends TypeArgument, T1 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Element`;

    key: T0;
    value: T1;

    T0_bcs: any;
    T1_bcs: any;

    constructor(key: T0, value: T1) {
        this.key = key;
        this.value = value;
    }

    into_value() {
        return {
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

    from(arg: Element < T0, T1 > ) {
        this.key = arg.key;
        this.value = arg.value;
    }

    static from_bcs < T0 extends TypeArgument,
    T1 extends TypeArgument > (arg: {
        key: T0,
        value: T1
    }): Element < T0,
    T1 > {
        return new Element(arg.key, arg.value)
    }

    static from_bcs_vector < T0 extends TypeArgument,
    T1 extends TypeArgument > (args: {
        key: T0,
        value: T1
    } []): Element < T0,
    T1 > [] {
        return args.map(function(arg) {
            return new Element(arg.key, arg.value)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0, T1 extends TypeArgument, input1 > (T0: BcsType < T0, input0 > , T1: BcsType < T1, input1 > ) =>
            bcs_import.struct(`Element<${T0.name}, ${T1.name}>`, {
                key: T0,
                value: T1,
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Element(val.key, val.value),
            });
    };
}

/* ============================== SimpleMap =============================== */

export class SimpleMap < T0 extends TypeArgument, T1 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SimpleMap`;

    data: Element < T0,
    T1 > [];

    T0_bcs: any;
    T1_bcs: any;

    constructor(data: Element < T0, T1 > []) {
        this.data = data;
    }

    into_value() {
        return {
            data: into_arr_value(this.data)
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.data) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.data) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.data) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.data) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.data) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.data) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.data) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.data) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.data) as StructClass).get_bcs(), (to_arr_value(this.data) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return SimpleMap.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SimpleMap.from_bcs_vector(args)
    }

    get_bcs() {
        return SimpleMap.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SimpleMap`
    }

    from(arg: SimpleMap < T0, T1 > ) {
        this.data = arg.data;
    }

    static from_bcs < T0 extends TypeArgument,
    T1 extends TypeArgument > (arg: {
        data: Element < T0,
        T1 > []
    }): SimpleMap < T0,
    T1 > {
        return new SimpleMap(arg.data)
    }

    static from_bcs_vector < T0 extends TypeArgument,
    T1 extends TypeArgument > (args: {
        data: Element < T0,
        T1 > []
    } []): SimpleMap < T0,
    T1 > [] {
        return args.map(function(arg) {
            return new SimpleMap(arg.data)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0, T1 extends TypeArgument, input1 > (T0: BcsType < T0, input0 > , T1: BcsType < T1, input1 > ) =>
            bcs_import.struct(`SimpleMap<${T0.name}, ${T1.name}>`, {
                data: bcs_import.vector(Element.bcs(T0, T1)),
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new SimpleMap(val.data),
            });
    };
}

function borrow < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SimpleMap < T0, T1 > , arg1: T0): [Uint8Array] {
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

function borrow_mut < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SimpleMap < T0, T1 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_mut", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SimpleMap < T0, T1 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function destroy_empty < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SimpleMap < T0, T1 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_empty", type_args, args);
}

function length < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SimpleMap < T0, T1 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "length", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function remove < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SimpleMap < T0, T1 > , arg1: T0): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SimpleMap < T0, T1 > );
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function add < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SimpleMap < T0, T1 > , arg1: T0, arg2: T1) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SimpleMap < T0, T1 > );
}

function new_ < T0 extends StructClass, T1 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function upsert < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SimpleMap < T0, T1 > , arg1: T0, arg2: T1): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0, r1, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upsert", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SimpleMap < T0, T1 > );
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function create < T0 extends StructClass, T1 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function add_all < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SimpleMap < T0, T1 > , arg1: T0[], arg2: T1[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg2) ? into_arr_bcs_vector(arg2).serialize(into_arr_value(arg2)).toBytes() : new Uint8Array([0]), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_all", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as SimpleMap < T0, T1 > );
}

function contains_key < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SimpleMap < T0, T1 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "contains_key", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function find < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SimpleMap < T0, T1 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "find", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function keys < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SimpleMap < T0, T1 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "keys", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function new_from < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: T0[], arg1: T1[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg1) ? into_arr_bcs_vector(arg1).serialize(into_arr_value(arg1)).toBytes() : new Uint8Array([0]), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_from", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function to_vec_pair < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SimpleMap < T0, T1 > ): [Uint8Array, Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_vec_pair", type_args, args);
    return [
        new Uint8Array(r0.Raw[0]),
        new Uint8Array(r1.Raw[0])
    ];
}

function values < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: SimpleMap < T0, T1 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "values", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

export const simple_map = {
    Element,
    SimpleMap,
    borrow,
    borrow_mut,
    destroy_empty,
    length,
    remove,
    add,
    new_,
    upsert,
    create,
    add_all,
    contains_key,
    find,
    keys,
    new_from,
    to_vec_pair,
    values
}