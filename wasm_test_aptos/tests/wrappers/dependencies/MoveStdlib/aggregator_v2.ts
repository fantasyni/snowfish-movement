import {
    StructClass,
    TypeArgument,
    get_package_address,
    get_wasm,
    to_arr_value,
    String as string_import
} from "../../sui_wasm";
import {
    BcsType,
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "aggregator_v2";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Aggregator =============================== */

export class Aggregator < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Aggregator`;

    value: T0;
    max_value: T0;

    T0_bcs: any;

    constructor(value: T0, max_value: T0) {
        this.value = value;
        this.max_value = max_value;
    }

    into_value() {
        return {
            value: (this.value as StructClass).into_value ? (this.value as StructClass).into_value() : this.value,
            max_value: (this.max_value as StructClass).into_value ? (this.max_value as StructClass).into_value() : this.max_value
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.value) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return Aggregator.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Aggregator.from_bcs_vector(args)
    }

    get_bcs() {
        return Aggregator.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Aggregator`
    }

    from(arg: Aggregator < T0 > ) {
        this.value = arg.value;
        this.max_value = arg.max_value;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        value: T0,
        max_value: T0
    }): Aggregator < T0 > {
        return new Aggregator(arg.value, arg.max_value)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        value: T0,
        max_value: T0
    } []): Aggregator < T0 > [] {
        return args.map(function(arg) {
            return new Aggregator(arg.value, arg.max_value)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`Aggregator<${T0.name}>`, {
                value: T0,
                max_value: T0,
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Aggregator(val.value, val.max_value),
            });
    };
}

/* ============================== AggregatorSnapshot =============================== */

export class AggregatorSnapshot < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AggregatorSnapshot`;

    value: T0;

    T0_bcs: any;

    constructor(value: T0) {
        this.value = value;
    }

    into_value() {
        return {
            value: (this.value as StructClass).into_value ? (this.value as StructClass).into_value() : this.value
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.value) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.value) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return AggregatorSnapshot.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AggregatorSnapshot.from_bcs_vector(args)
    }

    get_bcs() {
        return AggregatorSnapshot.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AggregatorSnapshot`
    }

    from(arg: AggregatorSnapshot < T0 > ) {
        this.value = arg.value;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        value: T0
    }): AggregatorSnapshot < T0 > {
        return new AggregatorSnapshot(arg.value)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        value: T0
    } []): AggregatorSnapshot < T0 > [] {
        return args.map(function(arg) {
            return new AggregatorSnapshot(arg.value)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`AggregatorSnapshot<${T0.name}>`, {
                value: T0,
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new AggregatorSnapshot(val.value),
            });
    };
}

/* ============================== DerivedStringSnapshot =============================== */

export class DerivedStringSnapshot implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DerivedStringSnapshot`;

    value: string;
    padding: number[];

    constructor(value: string, padding: number[]) {
        this.value = value;
        this.padding = padding;
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
        return DerivedStringSnapshot.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DerivedStringSnapshot.from_bcs_vector(args)
    }

    get_bcs() {
        return DerivedStringSnapshot.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DerivedStringSnapshot`
    }

    from(arg: DerivedStringSnapshot) {
        this.value = arg.value;
        this.padding = arg.padding;
    }

    static from_bcs(arg: {
        value: string,
        padding: number[]
    }): DerivedStringSnapshot {
        return new DerivedStringSnapshot(arg.value, arg.padding)
    }

    static from_bcs_vector(args: {
        value: string,
        padding: number[]
    } []): DerivedStringSnapshot[] {
        return args.map(function(arg) {
            return new DerivedStringSnapshot(arg.value, arg.padding)
        })
    }

    static get bcs() {
        return bcs_import.struct("DerivedStringSnapshot", {
            value: bcs_import.string(),
            padding: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DerivedStringSnapshot(val.value, val.padding),
        });
    };
}

function add < T0 extends StructClass > (type_args: string[], arg0: Aggregator < T0 > , arg1: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Aggregator < T0 > );
}

function copy_snapshot < T0 extends StructClass > (type_args: string[], arg0: AggregatorSnapshot < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "copy_snapshot", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function create_aggregator < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_aggregator", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function create_aggregator_with_value < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_aggregator_with_value", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function create_derived_string(arg0: string): [DerivedStringSnapshot] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.string().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_derived_string", [], args);

    return [
        DerivedStringSnapshot.from_bcs(DerivedStringSnapshot.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create_snapshot < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_snapshot", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function create_unbounded_aggregator < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_unbounded_aggregator", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function create_unbounded_aggregator_with_value < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_unbounded_aggregator_with_value", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function derive_string_concat < T0 extends StructClass > (type_args: string[], arg0: string_import, arg1: AggregatorSnapshot < T0 > , arg2: string_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "derive_string_concat", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function is_at_least < T0 extends StructClass > (type_args: string[], arg0: Aggregator < T0 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_at_least", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function is_at_least_impl < T0 extends StructClass > (type_args: string[], arg0: Aggregator < T0 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_at_least_impl", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function max_value < T0 extends StructClass > (type_args: string[], arg0: Aggregator < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "max_value", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function read < T0 extends StructClass > (type_args: string[], arg0: Aggregator < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "read", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function read_derived_string(arg0: DerivedStringSnapshot): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DerivedStringSnapshot.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "read_derived_string", [], args);

    return [
        bcs_import.string().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function read_snapshot < T0 extends StructClass > (type_args: string[], arg0: AggregatorSnapshot < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "read_snapshot", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function snapshot < T0 extends StructClass > (type_args: string[], arg0: Aggregator < T0 > ): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "snapshot", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function string_concat < T0 extends StructClass > (type_args: string[], arg0: string_import, arg1: AggregatorSnapshot < T0 > , arg2: string_import): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "string_concat", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function sub < T0 extends StructClass > (type_args: string[], arg0: Aggregator < T0 > , arg1: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sub", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Aggregator < T0 > );
}

function try_add < T0 extends StructClass > (type_args: string[], arg0: Aggregator < T0 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "try_add", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Aggregator < T0 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function try_sub < T0 extends StructClass > (type_args: string[], arg0: Aggregator < T0 > , arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "try_sub", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Aggregator < T0 > );
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

export const aggregator_v2 = {
    Aggregator,
    AggregatorSnapshot,
    DerivedStringSnapshot,
    add,
    copy_snapshot,
    create_aggregator,
    create_aggregator_with_value,
    create_derived_string,
    create_snapshot,
    create_unbounded_aggregator,
    create_unbounded_aggregator_with_value,
    derive_string_concat,
    is_at_least,
    is_at_least_impl,
    max_value,
    read,
    read_derived_string,
    read_snapshot,
    snapshot,
    string_concat,
    sub,
    try_add,
    try_sub
}