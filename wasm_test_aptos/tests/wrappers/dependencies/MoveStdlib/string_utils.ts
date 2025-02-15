import {
    StructClass,
    TypeArgument,
    U8,
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
let MODULE_NAME: string = "string_utils";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Cons =============================== */

export class Cons < T0 extends TypeArgument, T1 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Cons`;

    car: T0;
    cdr: T1;

    T0_bcs: any;
    T1_bcs: any;

    constructor(car: T0, cdr: T1) {
        this.car = car;
        this.cdr = cdr;
    }

    into_value() {
        return {
            car: (this.car as StructClass).into_value ? (this.car as StructClass).into_value() : this.car,
            cdr: (this.cdr as StructClass).into_value ? (this.cdr as StructClass).into_value() : this.cdr
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.car) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.cdr) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.car) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.cdr) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.car) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.cdr) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.car) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.cdr) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.car) as StructClass).get_bcs(), (to_arr_value(this.cdr) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return Cons.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Cons.from_bcs_vector(args)
    }

    get_bcs() {
        return Cons.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Cons`
    }

    from(arg: Cons < T0, T1 > ) {
        this.car = arg.car;
        this.cdr = arg.cdr;
    }

    static from_bcs < T0 extends TypeArgument,
    T1 extends TypeArgument > (arg: {
        car: T0,
        cdr: T1
    }): Cons < T0,
    T1 > {
        return new Cons(arg.car, arg.cdr)
    }

    static from_bcs_vector < T0 extends TypeArgument,
    T1 extends TypeArgument > (args: {
        car: T0,
        cdr: T1
    } []): Cons < T0,
    T1 > [] {
        return args.map(function(arg) {
            return new Cons(arg.car, arg.cdr)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0, T1 extends TypeArgument, input1 > (T0: BcsType < T0, input0 > , T1: BcsType < T1, input1 > ) =>
            bcs_import.struct(`Cons<${T0.name}, ${T1.name}>`, {
                car: T0,
                cdr: T1,
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Cons(val.car, val.cdr),
            });
    };
}

/* ============================== FakeCons =============================== */

export class FakeCons < T0 extends TypeArgument, T1 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::FakeCons`;

    car: T0;
    cdr: T1;

    T0_bcs: any;
    T1_bcs: any;

    constructor(car: T0, cdr: T1) {
        this.car = car;
        this.cdr = cdr;
    }

    into_value() {
        return {
            car: (this.car as StructClass).into_value ? (this.car as StructClass).into_value() : this.car,
            cdr: (this.cdr as StructClass).into_value ? (this.cdr as StructClass).into_value() : this.cdr
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.car) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.cdr) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.car) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.cdr) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.car) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.cdr) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.car) as StructClass).return_bcs(),
            this.T1_bcs ? this.T1_bcs : (to_arr_value(this.cdr) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.car) as StructClass).get_bcs(), (to_arr_value(this.cdr) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return FakeCons.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return FakeCons.from_bcs_vector(args)
    }

    get_bcs() {
        return FakeCons.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::FakeCons`
    }

    from(arg: FakeCons < T0, T1 > ) {
        this.car = arg.car;
        this.cdr = arg.cdr;
    }

    static from_bcs < T0 extends TypeArgument,
    T1 extends TypeArgument > (arg: {
        car: T0,
        cdr: T1
    }): FakeCons < T0,
    T1 > {
        return new FakeCons(arg.car, arg.cdr)
    }

    static from_bcs_vector < T0 extends TypeArgument,
    T1 extends TypeArgument > (args: {
        car: T0,
        cdr: T1
    } []): FakeCons < T0,
    T1 > [] {
        return args.map(function(arg) {
            return new FakeCons(arg.car, arg.cdr)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0, T1 extends TypeArgument, input1 > (T0: BcsType < T0, input0 > , T1: BcsType < T1, input1 > ) =>
            bcs_import.struct(`FakeCons<${T0.name}, ${T1.name}>`, {
                car: T0,
                cdr: T1,
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new FakeCons(val.car, val.cdr),
            });
    };
}

/* ============================== NIL =============================== */

export class NIL implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::NIL`;

    dummy_field: boolean;

    constructor(dummy_field: boolean) {
        this.dummy_field = dummy_field;
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
        return NIL.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return NIL.from_bcs_vector(args)
    }

    get_bcs() {
        return NIL.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::NIL`
    }

    from(arg: NIL) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): NIL {
        return new NIL(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): NIL[] {
        return args.map(function(arg) {
            return new NIL(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("NIL", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new NIL(val.dummy_field),
        });
    };
}

function to_string < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_string", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function cons < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: T0, arg1: T1): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "cons", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function debug_string < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "debug_string", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function format1 < T0 extends StructClass > (type_args: string[], arg0: U8[], arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "format1", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function format2 < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: U8[], arg1: T0, arg2: T1): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "format2", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function format3 < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: U8[], arg1: T0, arg2: T1, arg3: T2): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "format3", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function format4 < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass, T3 extends StructClass > (type_args: string[], arg0: U8[], arg1: T0, arg2: T1, arg3: T2, arg4: T3): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), ""),
        wasm.new_bytes(arg3.serialize(arg3.into_value()).toBytes(), ""),
        wasm.new_bytes(arg4.serialize(arg4.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "format4", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function native_format < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg4).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "native_format", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function native_format_list < T0 extends StructClass > (type_args: string[], arg0: U8[], arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "native_format_list", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function nil(): [NIL] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "nil", [], args);

    return [
        NIL.from_bcs(NIL.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function to_string_with_canonical_addresses < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_string_with_canonical_addresses", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function to_string_with_integer_types < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_string_with_integer_types", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

export const string_utils = {
    Cons,
    FakeCons,
    NIL,
    to_string,
    cons,
    debug_string,
    format1,
    format2,
    format3,
    format4,
    native_format,
    native_format_list,
    nil,
    to_string_with_canonical_addresses,
    to_string_with_integer_types
}