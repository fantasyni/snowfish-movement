import {
    StructClass,
    TypeArgument,
    get_package_address,
    get_wasm,
    to_arr_value
} from "../../sui_wasm";
import {
    BcsType,
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "table";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Box =============================== */

export class Box < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Box`;

    val: T0;

    T0_bcs: any;

    constructor(val ? : T0) {
        this.val = val;
    }

    into_value() {
        return {
            val: (this.val as StructClass).into_value ? (this.val as StructClass).into_value() : this.val
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.val) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.val) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.val) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.val) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.val) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return Box.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Box.from_bcs_vector(args)
    }

    get_bcs() {
        return Box.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Box`
    }

    from(arg: Box < T0 > ) {
        this.val = arg.val;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        val: T0
    }): Box < T0 > {
        return new Box(arg.val)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        val: T0
    } []): Box < T0 > [] {
        return args.map(function(arg) {
            return new Box(arg.val)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`Box<${T0.name}>`, {
                val: T0,
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new Box(val.val),
            });
    };
}

/* ============================== Table =============================== */

export class Table implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Table`;

    handle: string;

    constructor(handle: string) {
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
        return Table.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Table.from_bcs_vector(args)
    }

    get_bcs() {
        return Table.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Table`
    }

    from(arg: Table) {
        this.handle = arg.handle;
    }

    static from_bcs(arg: {
        handle: string
    }): Table {
        return new Table(arg.handle)
    }

    static from_bcs_vector(args: {
        handle: string
    } []): Table[] {
        return args.map(function(arg) {
            return new Table(arg.handle)
        })
    }

    static get bcs() {
        return bcs_import.struct("Table", {
            handle: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Table(val.handle),
        });
    };
}

function borrow < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Table, arg1: T0): [Uint8Array] {
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

function borrow_mut < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Table, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_mut", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Table);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function contains < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Table, arg1: T0): [Uint8Array] {
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

function remove < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Table, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Table);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function borrow_with_default < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Table, arg1: T0, arg2: T1): [Uint8Array] {
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

function add < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Table, arg1: T0, arg2: T1) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Table);
}

function add_box < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: Table, arg1: T0, arg2: Box < T1 > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_box", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Table);
}

function borrow_box < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: Table, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_box", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function borrow_box_mut < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: Table, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_box_mut", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Table);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function borrow_mut_with_default < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Table, arg1: T0, arg2: T1): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_mut_with_default", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Table);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function contains_box < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: Table, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "contains_box", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function destroy < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Table) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy", type_args, args);
}

function destroy_empty_box < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: Table) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_empty_box", type_args, args);
}

function drop_unchecked_box < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: Table) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "drop_unchecked_box", type_args, args);
}

function new_ < T0 extends StructClass, T1 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function new_table_handle < T0 extends StructClass, T1 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_table_handle", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function remove_box < T0 extends StructClass, T1 extends StructClass, T2 extends StructClass > (type_args: string[], arg0: Table, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_box", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Table);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function upsert < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Table, arg1: T0, arg2: T1) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upsert", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as Table);
}

export const table = {
    Box,
    Table,
    borrow,
    borrow_mut,
    contains,
    remove,
    borrow_with_default,
    add,
    add_box,
    borrow_box,
    borrow_box_mut,
    borrow_mut_with_default,
    contains_box,
    destroy,
    destroy_empty_box,
    drop_unchecked_box,
    new_,
    new_table_handle,
    remove_box,
    upsert
}