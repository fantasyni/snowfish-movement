import {
    StructClass,
    get_package_address,
    get_wasm
} from "../../sui_wasm";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "acl";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== ACL =============================== */

export class ACL implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ACL`;

    list: string[];

    constructor(list: string[]) {
        this.list = list;
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
        return ACL.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ACL.from_bcs_vector(args)
    }

    get_bcs() {
        return ACL.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ACL`
    }

    from(arg: ACL) {
        this.list = arg.list;
    }

    static from_bcs(arg: {
        list: string[]
    }): ACL {
        return new ACL(arg.list)
    }

    static from_bcs_vector(args: {
        list: string[]
    } []): ACL[] {
        return args.map(function(arg) {
            return new ACL(arg.list)
        })
    }

    static get bcs() {
        return bcs_import.struct("ACL", {
            list: bcs_import.vector(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            })),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ACL(val.list),
        });
    };
}

function contains(arg0: ACL, arg1: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ACL.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "contains", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function empty(): [ACL] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "empty", [], args);

    return [
        ACL.from_bcs(ACL.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function remove(arg0: ACL, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ACL.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function add(arg0: ACL, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ACL.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function assert_contains(arg0: ACL, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ACL.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_contains", [], args);

}

export const acl = {
    ACL,
    contains,
    empty,
    remove,
    add,
    assert_contains
}