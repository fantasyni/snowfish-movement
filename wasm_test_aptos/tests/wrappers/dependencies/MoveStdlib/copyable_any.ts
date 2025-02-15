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
let MODULE_NAME: string = "copyable_any";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Any =============================== */

export class Any implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Any`;

    type_name: string;
    data: number[];

    constructor(type_name: string, data: number[]) {
        this.type_name = type_name;
        this.data = data;
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
        return Any.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Any.from_bcs_vector(args)
    }

    get_bcs() {
        return Any.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Any`
    }

    from(arg: Any) {
        this.type_name = arg.type_name;
        this.data = arg.data;
    }

    static from_bcs(arg: {
        type_name: string,
        data: number[]
    }): Any {
        return new Any(arg.type_name, arg.data)
    }

    static from_bcs_vector(args: {
        type_name: string,
        data: number[]
    } []): Any[] {
        return args.map(function(arg) {
            return new Any(arg.type_name, arg.data)
        })
    }

    static get bcs() {
        return bcs_import.struct("Any", {
            type_name: bcs_import.string(),
            data: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Any(val.type_name, val.data),
        });
    };
}

function type_name(arg0: Any): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Any.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "type_name", [], args);

    return [
        bcs_import.string().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function pack < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "pack", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function unpack < T0 extends StructClass > (type_args: string[], arg0: Any): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unpack", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

export const copyable_any = {
    Any,
    type_name,
    pack,
    unpack
}