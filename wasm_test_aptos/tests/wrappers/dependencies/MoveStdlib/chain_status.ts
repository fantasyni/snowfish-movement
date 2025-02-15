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
let MODULE_NAME: string = "chain_status";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== GenesisEndMarker =============================== */

export class GenesisEndMarker implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::GenesisEndMarker`;

    dummy_field: boolean;

    constructor(dummy_field ? : boolean) {
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
        return GenesisEndMarker.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return GenesisEndMarker.from_bcs_vector(args)
    }

    get_bcs() {
        return GenesisEndMarker.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::GenesisEndMarker`
    }

    from(arg: GenesisEndMarker) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): GenesisEndMarker {
        return new GenesisEndMarker(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): GenesisEndMarker[] {
        return args.map(function(arg) {
            return new GenesisEndMarker(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("GenesisEndMarker", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new GenesisEndMarker(val.dummy_field),
        });
    };
}

function assert_genesis() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_genesis", [], args);

}

function assert_operating() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_operating", [], args);

}

function is_genesis(): [boolean] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_genesis", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function is_operating(): [boolean] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_operating", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function set_genesis_end(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_genesis_end", [], args);

}

export const chain_status = {
    GenesisEndMarker,
    assert_genesis,
    assert_operating,
    is_genesis,
    is_operating,
    set_genesis_end
}