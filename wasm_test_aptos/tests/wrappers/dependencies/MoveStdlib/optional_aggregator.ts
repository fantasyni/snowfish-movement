import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    Aggregator
} from "./aggregator";
import {
    Option
} from "./option";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "optional_aggregator";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Integer =============================== */

export class Integer implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Integer`;

    value: u64_import;
    limit: u64_import;

    constructor(value: u64_import, limit: u64_import) {
        this.value = value;
        this.limit = limit;
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
        return Integer.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Integer.from_bcs_vector(args)
    }

    get_bcs() {
        return Integer.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Integer`
    }

    from(arg: Integer) {
        this.value = arg.value;
        this.limit = arg.limit;
    }

    static from_bcs(arg: {
        value: u64_import,
        limit: u64_import
    }): Integer {
        return new Integer(arg.value, arg.limit)
    }

    static from_bcs_vector(args: {
        value: u64_import,
        limit: u64_import
    } []): Integer[] {
        return args.map(function(arg) {
            return new Integer(arg.value, arg.limit)
        })
    }

    static get bcs() {
        return bcs_import.struct("Integer", {
            value: bcs_import.u128(),
            limit: bcs_import.u128(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Integer(val.value, val.limit),
        });
    };
}

/* ============================== OptionalAggregator =============================== */

export class OptionalAggregator implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::OptionalAggregator`;

    aggregator: Option < Aggregator > ;
    integer: Option < Integer > ;

    constructor(aggregator: Option < Aggregator > , integer: Option < Integer > ) {
        this.aggregator = aggregator;
        this.integer = integer;
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
        return OptionalAggregator.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return OptionalAggregator.from_bcs_vector(args)
    }

    get_bcs() {
        return OptionalAggregator.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::OptionalAggregator`
    }

    from(arg: OptionalAggregator) {
        this.aggregator = arg.aggregator;
        this.integer = arg.integer;
    }

    static from_bcs(arg: {
        aggregator: Option < Aggregator > ,
        integer: Option < Integer >
    }): OptionalAggregator {
        return new OptionalAggregator(arg.aggregator, arg.integer)
    }

    static from_bcs_vector(args: {
        aggregator: Option < Aggregator > ,
        integer: Option < Integer >
    } []): OptionalAggregator[] {
        return args.map(function(arg) {
            return new OptionalAggregator(arg.aggregator, arg.integer)
        })
    }

    static get bcs() {
        return bcs_import.struct("OptionalAggregator", {
            aggregator: Option.bcs(Aggregator.bcs),
            integer: Option.bcs(Integer.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new OptionalAggregator(val.aggregator, val.integer),
        });
    };
}

function add(arg0: OptionalAggregator, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(OptionalAggregator.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function destroy(arg0: OptionalAggregator) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(OptionalAggregator.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy", [], args);

}

function new_(arg0: u64_import, arg1: boolean): [OptionalAggregator] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u128().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new", [], args);

    return [
        OptionalAggregator.from_bcs(OptionalAggregator.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function read(arg0: OptionalAggregator): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(OptionalAggregator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "read", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function sub(arg0: OptionalAggregator, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(OptionalAggregator.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sub", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function limit(arg0: Integer): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Integer.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "limit", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function add_integer(arg0: Integer, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Integer.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_integer", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function destroy_integer(arg0: Integer) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Integer.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_integer", [], args);

}

function destroy_optional_aggregator(arg0: OptionalAggregator): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(OptionalAggregator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_optional_aggregator", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function destroy_optional_integer(arg0: OptionalAggregator): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(OptionalAggregator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_optional_integer", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function is_parallelizable(arg0: OptionalAggregator): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(OptionalAggregator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_parallelizable", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function new_integer(arg0: u64_import): [Integer] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u128().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_integer", [], args);

    return [
        Integer.from_bcs(Integer.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function read_integer(arg0: Integer): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Integer.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "read_integer", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function sub_integer(arg0: Integer, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Integer.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sub_integer", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function switch_(arg0: OptionalAggregator) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(OptionalAggregator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "switch", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function switch_and_zero_out(arg0: OptionalAggregator) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(OptionalAggregator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "switch_and_zero_out", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function switch_to_aggregator_and_zero_out(arg0: OptionalAggregator): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(OptionalAggregator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "switch_to_aggregator_and_zero_out", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function switch_to_integer_and_zero_out(arg0: OptionalAggregator): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(OptionalAggregator.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "switch_to_integer_and_zero_out", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const optional_aggregator = {
    Integer,
    OptionalAggregator,
    add,
    destroy,
    new_,
    read,
    sub,
    limit,
    add_integer,
    destroy_integer,
    destroy_optional_aggregator,
    destroy_optional_integer,
    is_parallelizable,
    new_integer,
    read_integer,
    sub_integer,
    switch_,
    switch_and_zero_out,
    switch_to_aggregator_and_zero_out,
    switch_to_integer_and_zero_out
}