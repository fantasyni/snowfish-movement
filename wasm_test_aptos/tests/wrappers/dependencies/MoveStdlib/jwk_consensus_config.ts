import {
    StructClass,
    get_package_address,
    get_wasm
} from "../../sui_wasm";
import {
    Any
} from "./copyable_any";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "jwk_consensus_config";

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

    oidc_providers: OIDCProvider[];

    constructor(oidc_providers: OIDCProvider[]) {
        this.oidc_providers = oidc_providers;
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
        this.oidc_providers = arg.oidc_providers;
    }

    static from_bcs(arg: {
        oidc_providers: OIDCProvider[]
    }): ConfigV1 {
        return new ConfigV1(arg.oidc_providers)
    }

    static from_bcs_vector(args: {
        oidc_providers: OIDCProvider[]
    } []): ConfigV1[] {
        return args.map(function(arg) {
            return new ConfigV1(arg.oidc_providers)
        })
    }

    static get bcs() {
        return bcs_import.struct("ConfigV1", {
            oidc_providers: bcs_import.vector(OIDCProvider.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ConfigV1(val.oidc_providers),
        });
    };
}

/* ============================== OIDCProvider =============================== */

export class OIDCProvider implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::OIDCProvider`;

    name: string;
    config_url: string;

    constructor(name: string, config_url: string) {
        this.name = name;
        this.config_url = config_url;
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
        return OIDCProvider.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return OIDCProvider.from_bcs_vector(args)
    }

    get_bcs() {
        return OIDCProvider.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::OIDCProvider`
    }

    from(arg: OIDCProvider) {
        this.name = arg.name;
        this.config_url = arg.config_url;
    }

    static from_bcs(arg: {
        name: string,
        config_url: string
    }): OIDCProvider {
        return new OIDCProvider(arg.name, arg.config_url)
    }

    static from_bcs_vector(args: {
        name: string,
        config_url: string
    } []): OIDCProvider[] {
        return args.map(function(arg) {
            return new OIDCProvider(arg.name, arg.config_url)
        })
    }

    static get bcs() {
        return bcs_import.struct("OIDCProvider", {
            name: bcs_import.string(),
            config_url: bcs_import.string(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new OIDCProvider(val.name, val.config_url),
        });
    };
}

/* ============================== JWKConsensusConfig =============================== */

export class JWKConsensusConfig implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::JWKConsensusConfig`;

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
        return JWKConsensusConfig.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return JWKConsensusConfig.from_bcs_vector(args)
    }

    get_bcs() {
        return JWKConsensusConfig.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::JWKConsensusConfig`
    }

    from(arg: JWKConsensusConfig) {
        this.variant = arg.variant;
    }

    static from_bcs(arg: {
        variant: Any
    }): JWKConsensusConfig {
        return new JWKConsensusConfig(arg.variant)
    }

    static from_bcs_vector(args: {
        variant: Any
    } []): JWKConsensusConfig[] {
        return args.map(function(arg) {
            return new JWKConsensusConfig(arg.variant)
        })
    }

    static get bcs() {
        return bcs_import.struct("JWKConsensusConfig", {
            variant: Any.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new JWKConsensusConfig(val.variant),
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

function initialize(arg0: string, arg1: JWKConsensusConfig) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(JWKConsensusConfig.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize", [], args);

}

function set_for_next_epoch(arg0: string, arg1: JWKConsensusConfig) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(JWKConsensusConfig.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_for_next_epoch", [], args);

}

function new_off(): [JWKConsensusConfig] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_off", [], args);

    return [
        JWKConsensusConfig.from_bcs(JWKConsensusConfig.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_v1(arg0: OIDCProvider[]): [JWKConsensusConfig] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(OIDCProvider.bcs).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_v1", [], args);

    return [
        JWKConsensusConfig.from_bcs(JWKConsensusConfig.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_oidc_provider(arg0: string, arg1: string): [OIDCProvider] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.string().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_oidc_provider", [], args);

    return [
        OIDCProvider.from_bcs(OIDCProvider.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const jwk_consensus_config = {
    ConfigOff,
    ConfigV1,
    OIDCProvider,
    JWKConsensusConfig,
    on_new_epoch,
    initialize,
    set_for_next_epoch,
    new_off,
    new_v1,
    new_oidc_provider
}