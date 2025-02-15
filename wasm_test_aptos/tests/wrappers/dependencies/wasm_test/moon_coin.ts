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

let PACKAGE_NAME: string = "wasm_test";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000000";
let MODULE_NAME: string = "moon_coin";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== MoonCoin =============================== */

export class MoonCoin implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::MoonCoin`;

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
        return MoonCoin.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return MoonCoin.from_bcs_vector(args)
    }

    get_bcs() {
        return MoonCoin.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::MoonCoin`
    }

    from(arg: MoonCoin) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): MoonCoin {
        return new MoonCoin(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): MoonCoin[] {
        return args.map(function(arg) {
            return new MoonCoin(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("MoonCoin", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new MoonCoin(val.dummy_field),
        });
    };
}

function init_module(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "init_module", [], args);

}

export const moon_coin = {
    MoonCoin,
    init_module
}