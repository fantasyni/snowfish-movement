import {
    StructClass,
    get_package_address,
    get_wasm
} from "../../sui_wasm";
import {
    Any
} from "./copyable_any";
import {
    FixedPoint64
} from "./fixed_point64";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "randomness_config";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== ConfigOff =============================== */

export class ConfigOff implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ConfigOff`;

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
        return ConfigOff.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ConfigOff.from_bcs_vector(args)
    }

    get_bcs() {
        return ConfigOff.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ConfigOff`
    }

    from(arg: ConfigOff) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): ConfigOff {
        return new ConfigOff(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): ConfigOff[] {
        return args.map(function(arg) {
            return new ConfigOff(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("ConfigOff", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ConfigOff(val.dummy_field),
        });
    };
}

/* ============================== ConfigV1 =============================== */

export class ConfigV1 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ConfigV1`;

    secrecy_threshold: FixedPoint64;
    reconstruction_threshold: FixedPoint64;

    constructor(secrecy_threshold: FixedPoint64, reconstruction_threshold: FixedPoint64) {
        this.secrecy_threshold = secrecy_threshold;
        this.reconstruction_threshold = reconstruction_threshold;
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
        return ConfigV1.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ConfigV1.from_bcs_vector(args)
    }

    get_bcs() {
        return ConfigV1.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ConfigV1`
    }

    from(arg: ConfigV1) {
        this.secrecy_threshold = arg.secrecy_threshold;
        this.reconstruction_threshold = arg.reconstruction_threshold;
    }

    static from_bcs(arg: {
        secrecy_threshold: FixedPoint64,
        reconstruction_threshold: FixedPoint64
    }): ConfigV1 {
        return new ConfigV1(arg.secrecy_threshold, arg.reconstruction_threshold)
    }

    static from_bcs_vector(args: {
        secrecy_threshold: FixedPoint64,
        reconstruction_threshold: FixedPoint64
    } []): ConfigV1[] {
        return args.map(function(arg) {
            return new ConfigV1(arg.secrecy_threshold, arg.reconstruction_threshold)
        })
    }

    static get bcs() {
        return bcs_import.struct("ConfigV1", {
            secrecy_threshold: FixedPoint64.bcs,
            reconstruction_threshold: FixedPoint64.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ConfigV1(val.secrecy_threshold, val.reconstruction_threshold),
        });
    };
}

/* ============================== ConfigV2 =============================== */

export class ConfigV2 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ConfigV2`;

    secrecy_threshold: FixedPoint64;
    reconstruction_threshold: FixedPoint64;
    fast_path_secrecy_threshold: FixedPoint64;

    constructor(secrecy_threshold: FixedPoint64, reconstruction_threshold: FixedPoint64, fast_path_secrecy_threshold: FixedPoint64) {
        this.secrecy_threshold = secrecy_threshold;
        this.reconstruction_threshold = reconstruction_threshold;
        this.fast_path_secrecy_threshold = fast_path_secrecy_threshold;
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
        return ConfigV2.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ConfigV2.from_bcs_vector(args)
    }

    get_bcs() {
        return ConfigV2.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ConfigV2`
    }

    from(arg: ConfigV2) {
        this.secrecy_threshold = arg.secrecy_threshold;
        this.reconstruction_threshold = arg.reconstruction_threshold;
        this.fast_path_secrecy_threshold = arg.fast_path_secrecy_threshold;
    }

    static from_bcs(arg: {
        secrecy_threshold: FixedPoint64,
        reconstruction_threshold: FixedPoint64,
        fast_path_secrecy_threshold: FixedPoint64
    }): ConfigV2 {
        return new ConfigV2(arg.secrecy_threshold, arg.reconstruction_threshold, arg.fast_path_secrecy_threshold)
    }

    static from_bcs_vector(args: {
        secrecy_threshold: FixedPoint64,
        reconstruction_threshold: FixedPoint64,
        fast_path_secrecy_threshold: FixedPoint64
    } []): ConfigV2[] {
        return args.map(function(arg) {
            return new ConfigV2(arg.secrecy_threshold, arg.reconstruction_threshold, arg.fast_path_secrecy_threshold)
        })
    }

    static get bcs() {
        return bcs_import.struct("ConfigV2", {
            secrecy_threshold: FixedPoint64.bcs,
            reconstruction_threshold: FixedPoint64.bcs,
            fast_path_secrecy_threshold: FixedPoint64.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ConfigV2(val.secrecy_threshold, val.reconstruction_threshold, val.fast_path_secrecy_threshold),
        });
    };
}

/* ============================== RandomnessConfig =============================== */

export class RandomnessConfig implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RandomnessConfig`;

    variant: Any;

    constructor(variant ? : Any) {
        this.variant = variant;
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
        return RandomnessConfig.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RandomnessConfig.from_bcs_vector(args)
    }

    get_bcs() {
        return RandomnessConfig.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RandomnessConfig`
    }

    from(arg: RandomnessConfig) {
        this.variant = arg.variant;
    }

    static from_bcs(arg: {
        variant: Any
    }): RandomnessConfig {
        return new RandomnessConfig(arg.variant)
    }

    static from_bcs_vector(args: {
        variant: Any
    } []): RandomnessConfig[] {
        return args.map(function(arg) {
            return new RandomnessConfig(arg.variant)
        })
    }

    static get bcs() {
        return bcs_import.struct("RandomnessConfig", {
            variant: Any.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RandomnessConfig(val.variant),
        });
    };
}

function on_new_epoch(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "on_new_epoch", [], args);

}

function initialize(arg0: string, arg1: RandomnessConfig) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(RandomnessConfig.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize", [], args);

}

function current(): [RandomnessConfig] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "current", [], args);

    return [
        RandomnessConfig.from_bcs(RandomnessConfig.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function set_for_next_epoch(arg0: string, arg1: RandomnessConfig) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(RandomnessConfig.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_for_next_epoch", [], args);

}

function enabled(): [boolean] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "enabled", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function new_off(): [RandomnessConfig] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_off", [], args);

    return [
        RandomnessConfig.from_bcs(RandomnessConfig.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_v1(arg0: FixedPoint64, arg1: FixedPoint64): [RandomnessConfig] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_v1", [], args);

    return [
        RandomnessConfig.from_bcs(RandomnessConfig.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_v2(arg0: FixedPoint64, arg1: FixedPoint64, arg2: FixedPoint64): [RandomnessConfig] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_v2", [], args);

    return [
        RandomnessConfig.from_bcs(RandomnessConfig.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const randomness_config = {
    ConfigOff,
    ConfigV1,
    ConfigV2,
    RandomnessConfig,
    on_new_epoch,
    initialize,
    current,
    set_for_next_epoch,
    enabled,
    new_off,
    new_v1,
    new_v2
}