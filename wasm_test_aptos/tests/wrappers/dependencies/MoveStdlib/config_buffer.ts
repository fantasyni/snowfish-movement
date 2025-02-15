import {
    StructClass,
    get_package_address,
    get_wasm
} from "../../sui_wasm";
import {
    Any
} from "./any";
import {
    SimpleMap
} from "./simple_map";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "config_buffer";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== PendingConfigs =============================== */

export class PendingConfigs implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PendingConfigs`;

    configs: SimpleMap < string,
    Any > ;

    constructor(configs ? : SimpleMap < string, Any > ) {
        this.configs = configs;
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
        return PendingConfigs.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PendingConfigs.from_bcs_vector(args)
    }

    get_bcs() {
        return PendingConfigs.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PendingConfigs`
    }

    from(arg: PendingConfigs) {
        this.configs = arg.configs;
    }

    static from_bcs(arg: {
        configs: SimpleMap < string,
        Any >
    }): PendingConfigs {
        return new PendingConfigs(arg.configs)
    }

    static from_bcs_vector(args: {
        configs: SimpleMap < string,
        Any >
    } []): PendingConfigs[] {
        return args.map(function(arg) {
            return new PendingConfigs(arg.configs)
        })
    }

    static get bcs() {
        return bcs_import.struct("PendingConfigs", {
            configs: SimpleMap.bcs(bcs_import.string(), Any.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PendingConfigs(val.configs),
        });
    };
}

function extract < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "extract", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function upsert < T0 extends StructClass > (type_args: string[], arg0: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upsert", type_args, args);
}

function initialize(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize", [], args);

}

function does_exist < T0 extends StructClass > (type_args: string[]): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "does_exist", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

export const config_buffer = {
    PendingConfigs,
    extract,
    upsert,
    initialize,
    does_exist
}