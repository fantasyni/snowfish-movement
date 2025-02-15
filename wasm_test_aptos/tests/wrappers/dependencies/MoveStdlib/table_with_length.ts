import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    Table
} from "./table";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "table_with_length";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== TableWithLength =============================== */

export class TableWithLength implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TableWithLength`;

    inner: Table;
    length: u64_import;

    constructor(inner: Table, length: u64_import) {
        this.inner = inner;
        this.length = length;
    }

    into_value() {
        return {
            inner: (this.inner as unknown as StructClass).into_value ? (this.inner as unknown as StructClass).into_value() : this.inner,
            length: (this.length as unknown as StructClass).into_value ? (this.length as unknown as StructClass).into_value() : this.length
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
        return TableWithLength.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TableWithLength.from_bcs_vector(args)
    }

    get_bcs() {
        return TableWithLength.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TableWithLength`
    }

    from(arg: TableWithLength) {
        this.inner = arg.inner;
        this.length = arg.length;
    }

    static from_bcs(arg: {
        inner: Table,
        length: u64_import
    }): TableWithLength {
        return new TableWithLength(arg.inner, arg.length)
    }

    static from_bcs_vector(args: {
        inner: Table,
        length: u64_import
    } []): TableWithLength[] {
        return args.map(function(arg) {
            return new TableWithLength(arg.inner, arg.length)
        })
    }

    static get bcs() {
        return bcs_import.struct("TableWithLength", {
            inner: Table.bcs,
            length: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TableWithLength(val.inner, val.length),
        });
    };
}

function borrow < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: TableWithLength, arg1: T0): [Uint8Array] {
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

function borrow_mut < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: TableWithLength, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_mut", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TableWithLength);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function contains < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: TableWithLength, arg1: T0): [Uint8Array] {
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

function destroy_empty < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: TableWithLength) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_empty", type_args, args);
}

function empty < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: TableWithLength): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "empty", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function length < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: TableWithLength): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "length", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function remove < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: TableWithLength, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TableWithLength);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function add < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: TableWithLength, arg1: T0, arg2: T1) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TableWithLength);
}

function borrow_mut_with_default < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: TableWithLength, arg1: T0, arg2: T1): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "borrow_mut_with_default", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TableWithLength);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function new_ < T0 extends StructClass, T1 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function upsert < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: TableWithLength, arg1: T0, arg2: T1) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upsert", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as TableWithLength);
}

export const table_with_length = {
    TableWithLength,
    borrow,
    borrow_mut,
    contains,
    destroy_empty,
    empty,
    length,
    remove,
    add,
    borrow_mut_with_default,
    new_,
    upsert
}