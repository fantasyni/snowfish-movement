import {
    StructClass,
    get_package_address,
    get_wasm
} from "../../sui_wasm";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "comparator";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Result =============================== */

export class Result implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Result`;

    inner: number;

    constructor(inner: number) {
        this.inner = inner;
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
        return Result.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Result.from_bcs_vector(args)
    }

    get_bcs() {
        return Result.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Result`
    }

    from(arg: Result) {
        this.inner = arg.inner;
    }

    static from_bcs(arg: {
        inner: number
    }): Result {
        return new Result(arg.inner)
    }

    static from_bcs_vector(args: {
        inner: number
    } []): Result[] {
        return args.map(function(arg) {
            return new Result(arg.inner)
        })
    }

    static get bcs() {
        return bcs_import.struct("Result", {
            inner: bcs_import.u8(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Result(val.inner),
        });
    };
}

function compare < T0 extends StructClass > (type_args: string[], arg0: T0, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "compare", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function compare_u8_vector(arg0: number[], arg1: number[]): [Result] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "compare_u8_vector", [], args);

    return [
        Result.from_bcs(Result.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function is_equal(arg0: Result): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Result.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_equal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function is_greater_than(arg0: Result): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Result.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_greater_than", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function is_smaller_than(arg0: Result): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Result.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_smaller_than", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const comparator = {
    Result,
    compare,
    compare_u8_vector,
    is_equal,
    is_greater_than,
    is_smaller_than
}