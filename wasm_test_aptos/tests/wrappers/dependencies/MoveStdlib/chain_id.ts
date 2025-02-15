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
let MODULE_NAME: string = "chain_id";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== ChainId =============================== */

export class ChainId implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ChainId`;

    id: number;

    constructor(id: number) {
        this.id = id;
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
        return ChainId.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ChainId.from_bcs_vector(args)
    }

    get_bcs() {
        return ChainId.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ChainId`
    }

    from(arg: ChainId) {
        this.id = arg.id;
    }

    static from_bcs(arg: {
        id: number
    }): ChainId {
        return new ChainId(arg.id)
    }

    static from_bcs_vector(args: {
        id: number
    } []): ChainId[] {
        return args.map(function(arg) {
            return new ChainId(arg.id)
        })
    }

    static get bcs() {
        return bcs_import.struct("ChainId", {
            id: bcs_import.u8(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ChainId(val.id),
        });
    };
}

function get(): [number] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get", [], args);

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function initialize(arg0: string, arg1: number) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize", [], args);

}

export const chain_id = {
    ChainId,
    get,
    initialize
}