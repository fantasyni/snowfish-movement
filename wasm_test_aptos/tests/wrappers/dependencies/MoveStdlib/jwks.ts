import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    Any
} from "./copyable_any";
import {
    Option
} from "./option";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "jwks";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== AllProvidersJWKs =============================== */

export class AllProvidersJWKs implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AllProvidersJWKs`;

    entries: ProviderJWKs[];

    constructor(entries: ProviderJWKs[]) {
        this.entries = entries;
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
        return AllProvidersJWKs.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AllProvidersJWKs.from_bcs_vector(args)
    }

    get_bcs() {
        return AllProvidersJWKs.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AllProvidersJWKs`
    }

    from(arg: AllProvidersJWKs) {
        this.entries = arg.entries;
    }

    static from_bcs(arg: {
        entries: ProviderJWKs[]
    }): AllProvidersJWKs {
        return new AllProvidersJWKs(arg.entries)
    }

    static from_bcs_vector(args: {
        entries: ProviderJWKs[]
    } []): AllProvidersJWKs[] {
        return args.map(function(arg) {
            return new AllProvidersJWKs(arg.entries)
        })
    }

    static get bcs() {
        return bcs_import.struct("AllProvidersJWKs", {
            entries: bcs_import.vector(ProviderJWKs.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AllProvidersJWKs(val.entries),
        });
    };
}

/* ============================== JWK =============================== */

export class JWK implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::JWK`;

    variant: Any;

    constructor(variant: Any) {
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
        return JWK.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return JWK.from_bcs_vector(args)
    }

    get_bcs() {
        return JWK.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::JWK`
    }

    from(arg: JWK) {
        this.variant = arg.variant;
    }

    static from_bcs(arg: {
        variant: Any
    }): JWK {
        return new JWK(arg.variant)
    }

    static from_bcs_vector(args: {
        variant: Any
    } []): JWK[] {
        return args.map(function(arg) {
            return new JWK(arg.variant)
        })
    }

    static get bcs() {
        return bcs_import.struct("JWK", {
            variant: Any.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new JWK(val.variant),
        });
    };
}

/* ============================== OIDCProvider =============================== */

export class OIDCProvider implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::OIDCProvider`;

    name: number[];
    config_url: number[];

    constructor(name: number[], config_url: number[]) {
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
        name: number[],
        config_url: number[]
    }): OIDCProvider {
        return new OIDCProvider(arg.name, arg.config_url)
    }

    static from_bcs_vector(args: {
        name: number[],
        config_url: number[]
    } []): OIDCProvider[] {
        return args.map(function(arg) {
            return new OIDCProvider(arg.name, arg.config_url)
        })
    }

    static get bcs() {
        return bcs_import.struct("OIDCProvider", {
            name: bcs_import.vector(bcs_import.u8()),
            config_url: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new OIDCProvider(val.name, val.config_url),
        });
    };
}

/* ============================== ObservedJWKs =============================== */

export class ObservedJWKs implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ObservedJWKs`;

    jwks: AllProvidersJWKs;

    constructor(jwks ? : AllProvidersJWKs) {
        this.jwks = jwks;
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
        return ObservedJWKs.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ObservedJWKs.from_bcs_vector(args)
    }

    get_bcs() {
        return ObservedJWKs.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ObservedJWKs`
    }

    from(arg: ObservedJWKs) {
        this.jwks = arg.jwks;
    }

    static from_bcs(arg: {
        jwks: AllProvidersJWKs
    }): ObservedJWKs {
        return new ObservedJWKs(arg.jwks)
    }

    static from_bcs_vector(args: {
        jwks: AllProvidersJWKs
    } []): ObservedJWKs[] {
        return args.map(function(arg) {
            return new ObservedJWKs(arg.jwks)
        })
    }

    static get bcs() {
        return bcs_import.struct("ObservedJWKs", {
            jwks: AllProvidersJWKs.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ObservedJWKs(val.jwks),
        });
    };
}

/* ============================== ObservedJWKsUpdated =============================== */

export class ObservedJWKsUpdated implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ObservedJWKsUpdated`;

    epoch: u64_import;
    jwks: AllProvidersJWKs;

    constructor(epoch: u64_import, jwks: AllProvidersJWKs) {
        this.epoch = epoch;
        this.jwks = jwks;
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
        return ObservedJWKsUpdated.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ObservedJWKsUpdated.from_bcs_vector(args)
    }

    get_bcs() {
        return ObservedJWKsUpdated.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ObservedJWKsUpdated`
    }

    from(arg: ObservedJWKsUpdated) {
        this.epoch = arg.epoch;
        this.jwks = arg.jwks;
    }

    static from_bcs(arg: {
        epoch: u64_import,
        jwks: AllProvidersJWKs
    }): ObservedJWKsUpdated {
        return new ObservedJWKsUpdated(arg.epoch, arg.jwks)
    }

    static from_bcs_vector(args: {
        epoch: u64_import,
        jwks: AllProvidersJWKs
    } []): ObservedJWKsUpdated[] {
        return args.map(function(arg) {
            return new ObservedJWKsUpdated(arg.epoch, arg.jwks)
        })
    }

    static get bcs() {
        return bcs_import.struct("ObservedJWKsUpdated", {
            epoch: bcs_import.u64(),
            jwks: AllProvidersJWKs.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ObservedJWKsUpdated(val.epoch, val.jwks),
        });
    };
}

/* ============================== Patch =============================== */

export class Patch implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Patch`;

    variant: Any;

    constructor(variant: Any) {
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
        return Patch.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Patch.from_bcs_vector(args)
    }

    get_bcs() {
        return Patch.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Patch`
    }

    from(arg: Patch) {
        this.variant = arg.variant;
    }

    static from_bcs(arg: {
        variant: Any
    }): Patch {
        return new Patch(arg.variant)
    }

    static from_bcs_vector(args: {
        variant: Any
    } []): Patch[] {
        return args.map(function(arg) {
            return new Patch(arg.variant)
        })
    }

    static get bcs() {
        return bcs_import.struct("Patch", {
            variant: Any.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Patch(val.variant),
        });
    };
}

/* ============================== PatchRemoveAll =============================== */

export class PatchRemoveAll implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PatchRemoveAll`;

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
        return PatchRemoveAll.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PatchRemoveAll.from_bcs_vector(args)
    }

    get_bcs() {
        return PatchRemoveAll.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PatchRemoveAll`
    }

    from(arg: PatchRemoveAll) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): PatchRemoveAll {
        return new PatchRemoveAll(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): PatchRemoveAll[] {
        return args.map(function(arg) {
            return new PatchRemoveAll(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("PatchRemoveAll", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PatchRemoveAll(val.dummy_field),
        });
    };
}

/* ============================== PatchRemoveIssuer =============================== */

export class PatchRemoveIssuer implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PatchRemoveIssuer`;

    issuer: number[];

    constructor(issuer: number[]) {
        this.issuer = issuer;
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
        return PatchRemoveIssuer.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PatchRemoveIssuer.from_bcs_vector(args)
    }

    get_bcs() {
        return PatchRemoveIssuer.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PatchRemoveIssuer`
    }

    from(arg: PatchRemoveIssuer) {
        this.issuer = arg.issuer;
    }

    static from_bcs(arg: {
        issuer: number[]
    }): PatchRemoveIssuer {
        return new PatchRemoveIssuer(arg.issuer)
    }

    static from_bcs_vector(args: {
        issuer: number[]
    } []): PatchRemoveIssuer[] {
        return args.map(function(arg) {
            return new PatchRemoveIssuer(arg.issuer)
        })
    }

    static get bcs() {
        return bcs_import.struct("PatchRemoveIssuer", {
            issuer: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PatchRemoveIssuer(val.issuer),
        });
    };
}

/* ============================== PatchRemoveJWK =============================== */

export class PatchRemoveJWK implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PatchRemoveJWK`;

    issuer: number[];
    jwk_id: number[];

    constructor(issuer: number[], jwk_id: number[]) {
        this.issuer = issuer;
        this.jwk_id = jwk_id;
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
        return PatchRemoveJWK.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PatchRemoveJWK.from_bcs_vector(args)
    }

    get_bcs() {
        return PatchRemoveJWK.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PatchRemoveJWK`
    }

    from(arg: PatchRemoveJWK) {
        this.issuer = arg.issuer;
        this.jwk_id = arg.jwk_id;
    }

    static from_bcs(arg: {
        issuer: number[],
        jwk_id: number[]
    }): PatchRemoveJWK {
        return new PatchRemoveJWK(arg.issuer, arg.jwk_id)
    }

    static from_bcs_vector(args: {
        issuer: number[],
        jwk_id: number[]
    } []): PatchRemoveJWK[] {
        return args.map(function(arg) {
            return new PatchRemoveJWK(arg.issuer, arg.jwk_id)
        })
    }

    static get bcs() {
        return bcs_import.struct("PatchRemoveJWK", {
            issuer: bcs_import.vector(bcs_import.u8()),
            jwk_id: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PatchRemoveJWK(val.issuer, val.jwk_id),
        });
    };
}

/* ============================== PatchUpsertJWK =============================== */

export class PatchUpsertJWK implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PatchUpsertJWK`;

    issuer: number[];
    jwk: JWK;

    constructor(issuer: number[], jwk: JWK) {
        this.issuer = issuer;
        this.jwk = jwk;
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
        return PatchUpsertJWK.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PatchUpsertJWK.from_bcs_vector(args)
    }

    get_bcs() {
        return PatchUpsertJWK.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PatchUpsertJWK`
    }

    from(arg: PatchUpsertJWK) {
        this.issuer = arg.issuer;
        this.jwk = arg.jwk;
    }

    static from_bcs(arg: {
        issuer: number[],
        jwk: JWK
    }): PatchUpsertJWK {
        return new PatchUpsertJWK(arg.issuer, arg.jwk)
    }

    static from_bcs_vector(args: {
        issuer: number[],
        jwk: JWK
    } []): PatchUpsertJWK[] {
        return args.map(function(arg) {
            return new PatchUpsertJWK(arg.issuer, arg.jwk)
        })
    }

    static get bcs() {
        return bcs_import.struct("PatchUpsertJWK", {
            issuer: bcs_import.vector(bcs_import.u8()),
            jwk: JWK.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PatchUpsertJWK(val.issuer, val.jwk),
        });
    };
}

/* ============================== PatchedJWKs =============================== */

export class PatchedJWKs implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PatchedJWKs`;

    jwks: AllProvidersJWKs;

    constructor(jwks ? : AllProvidersJWKs) {
        this.jwks = jwks;
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
        return PatchedJWKs.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PatchedJWKs.from_bcs_vector(args)
    }

    get_bcs() {
        return PatchedJWKs.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PatchedJWKs`
    }

    from(arg: PatchedJWKs) {
        this.jwks = arg.jwks;
    }

    static from_bcs(arg: {
        jwks: AllProvidersJWKs
    }): PatchedJWKs {
        return new PatchedJWKs(arg.jwks)
    }

    static from_bcs_vector(args: {
        jwks: AllProvidersJWKs
    } []): PatchedJWKs[] {
        return args.map(function(arg) {
            return new PatchedJWKs(arg.jwks)
        })
    }

    static get bcs() {
        return bcs_import.struct("PatchedJWKs", {
            jwks: AllProvidersJWKs.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PatchedJWKs(val.jwks),
        });
    };
}

/* ============================== Patches =============================== */

export class Patches implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Patches`;

    patches: Patch[];

    constructor(patches ? : Patch[]) {
        this.patches = patches;
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
        return Patches.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Patches.from_bcs_vector(args)
    }

    get_bcs() {
        return Patches.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Patches`
    }

    from(arg: Patches) {
        this.patches = arg.patches;
    }

    static from_bcs(arg: {
        patches: Patch[]
    }): Patches {
        return new Patches(arg.patches)
    }

    static from_bcs_vector(args: {
        patches: Patch[]
    } []): Patches[] {
        return args.map(function(arg) {
            return new Patches(arg.patches)
        })
    }

    static get bcs() {
        return bcs_import.struct("Patches", {
            patches: bcs_import.vector(Patch.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Patches(val.patches),
        });
    };
}

/* ============================== ProviderJWKs =============================== */

export class ProviderJWKs implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ProviderJWKs`;

    issuer: number[];
    version: u64_import;
    jwks: JWK[];

    constructor(issuer: number[], version: u64_import, jwks: JWK[]) {
        this.issuer = issuer;
        this.version = version;
        this.jwks = jwks;
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
        return ProviderJWKs.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ProviderJWKs.from_bcs_vector(args)
    }

    get_bcs() {
        return ProviderJWKs.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ProviderJWKs`
    }

    from(arg: ProviderJWKs) {
        this.issuer = arg.issuer;
        this.version = arg.version;
        this.jwks = arg.jwks;
    }

    static from_bcs(arg: {
        issuer: number[],
        version: u64_import,
        jwks: JWK[]
    }): ProviderJWKs {
        return new ProviderJWKs(arg.issuer, arg.version, arg.jwks)
    }

    static from_bcs_vector(args: {
        issuer: number[],
        version: u64_import,
        jwks: JWK[]
    } []): ProviderJWKs[] {
        return args.map(function(arg) {
            return new ProviderJWKs(arg.issuer, arg.version, arg.jwks)
        })
    }

    static get bcs() {
        return bcs_import.struct("ProviderJWKs", {
            issuer: bcs_import.vector(bcs_import.u8()),
            version: bcs_import.u64(),
            jwks: bcs_import.vector(JWK.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ProviderJWKs(val.issuer, val.version, val.jwks),
        });
    };
}

/* ============================== RSA_JWK =============================== */

export class RSA_JWK implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RSA_JWK`;

    kid: string;
    kty: string;
    alg: string;
    e: string;
    n: string;

    constructor(kid: string, kty: string, alg: string, e: string, n: string) {
        this.kid = kid;
        this.kty = kty;
        this.alg = alg;
        this.e = e;
        this.n = n;
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
        return RSA_JWK.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RSA_JWK.from_bcs_vector(args)
    }

    get_bcs() {
        return RSA_JWK.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RSA_JWK`
    }

    from(arg: RSA_JWK) {
        this.kid = arg.kid;
        this.kty = arg.kty;
        this.alg = arg.alg;
        this.e = arg.e;
        this.n = arg.n;
    }

    static from_bcs(arg: {
        kid: string,
        kty: string,
        alg: string,
        e: string,
        n: string
    }): RSA_JWK {
        return new RSA_JWK(arg.kid, arg.kty, arg.alg, arg.e, arg.n)
    }

    static from_bcs_vector(args: {
        kid: string,
        kty: string,
        alg: string,
        e: string,
        n: string
    } []): RSA_JWK[] {
        return args.map(function(arg) {
            return new RSA_JWK(arg.kid, arg.kty, arg.alg, arg.e, arg.n)
        })
    }

    static get bcs() {
        return bcs_import.struct("RSA_JWK", {
            kid: bcs_import.string(),
            kty: bcs_import.string(),
            alg: bcs_import.string(),
            e: bcs_import.string(),
            n: bcs_import.string(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RSA_JWK(val.kid, val.kty, val.alg, val.e, val.n),
        });
    };
}

/* ============================== SupportedOIDCProviders =============================== */

export class SupportedOIDCProviders implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SupportedOIDCProviders`;

    providers: OIDCProvider[];

    constructor(providers ? : OIDCProvider[]) {
        this.providers = providers;
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
        return SupportedOIDCProviders.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SupportedOIDCProviders.from_bcs_vector(args)
    }

    get_bcs() {
        return SupportedOIDCProviders.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SupportedOIDCProviders`
    }

    from(arg: SupportedOIDCProviders) {
        this.providers = arg.providers;
    }

    static from_bcs(arg: {
        providers: OIDCProvider[]
    }): SupportedOIDCProviders {
        return new SupportedOIDCProviders(arg.providers)
    }

    static from_bcs_vector(args: {
        providers: OIDCProvider[]
    } []): SupportedOIDCProviders[] {
        return args.map(function(arg) {
            return new SupportedOIDCProviders(arg.providers)
        })
    }

    static get bcs() {
        return bcs_import.struct("SupportedOIDCProviders", {
            providers: bcs_import.vector(OIDCProvider.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new SupportedOIDCProviders(val.providers),
        });
    };
}

/* ============================== UnsupportedJWK =============================== */

export class UnsupportedJWK implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UnsupportedJWK`;

    id: number[];
    payload: number[];

    constructor(id: number[], payload: number[]) {
        this.id = id;
        this.payload = payload;
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
        return UnsupportedJWK.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UnsupportedJWK.from_bcs_vector(args)
    }

    get_bcs() {
        return UnsupportedJWK.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UnsupportedJWK`
    }

    from(arg: UnsupportedJWK) {
        this.id = arg.id;
        this.payload = arg.payload;
    }

    static from_bcs(arg: {
        id: number[],
        payload: number[]
    }): UnsupportedJWK {
        return new UnsupportedJWK(arg.id, arg.payload)
    }

    static from_bcs_vector(args: {
        id: number[],
        payload: number[]
    } []): UnsupportedJWK[] {
        return args.map(function(arg) {
            return new UnsupportedJWK(arg.id, arg.payload)
        })
    }

    static get bcs() {
        return bcs_import.struct("UnsupportedJWK", {
            id: bcs_import.vector(bcs_import.u8()),
            payload: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UnsupportedJWK(val.id, val.payload),
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

function apply_patch(arg0: AllProvidersJWKs, arg1: Patch) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(AllProvidersJWKs.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Patch.bcs.serialize(arg1).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "apply_patch", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function get_jwk_id(arg0: JWK): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(JWK.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_jwk_id", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_patched_jwk(arg0: number[], arg1: number[]): [JWK] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_patched_jwk", [], args);

    return [
        JWK.from_bcs(JWK.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_patch_remove_all(): [Patch] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_patch_remove_all", [], args);

    return [
        Patch.from_bcs(Patch.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_patch_remove_issuer(arg0: number[]): [Patch] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_patch_remove_issuer", [], args);

    return [
        Patch.from_bcs(Patch.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_patch_remove_jwk(arg0: number[], arg1: number[]): [Patch] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_patch_remove_jwk", [], args);

    return [
        Patch.from_bcs(Patch.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_patch_upsert_jwk(arg0: number[], arg1: JWK): [Patch] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(JWK.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_patch_upsert_jwk", [], args);

    return [
        Patch.from_bcs(Patch.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_rsa_jwk(arg0: string, arg1: string, arg2: string, arg3: string): [JWK] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.string().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_rsa_jwk", [], args);

    return [
        JWK.from_bcs(JWK.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_unsupported_jwk(arg0: number[], arg1: number[]): [JWK] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_unsupported_jwk", [], args);

    return [
        JWK.from_bcs(JWK.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function regenerate_patched_jwks() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "regenerate_patched_jwks", [], args);

}

function remove_issuer(arg0: AllProvidersJWKs, arg1: number[]): [Option < ProviderJWKs > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(AllProvidersJWKs.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_issuer", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Option.from_bcs(Option.bcs(ProviderJWKs.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function remove_issuer_from_observed_jwks(arg0: string, arg1: number[]): [Option < ProviderJWKs > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_issuer_from_observed_jwks", [], args);

    return [
        Option.from_bcs(Option.bcs(ProviderJWKs.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function remove_jwk(arg0: ProviderJWKs, arg1: number[]): [Option < JWK > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ProviderJWKs.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_jwk", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Option.from_bcs(Option.bcs(JWK.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function remove_oidc_provider(arg0: string, arg1: number[]): [Option < number[] > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_oidc_provider", [], args);

    return [
        Option.from_bcs(Option.bcs(bcs_import.vector(bcs_import.u8())).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function remove_oidc_provider_for_next_epoch(arg0: string, arg1: number[]): [Option < number[] > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_oidc_provider_for_next_epoch", [], args);

    return [
        Option.from_bcs(Option.bcs(bcs_import.vector(bcs_import.u8())).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function remove_oidc_provider_internal(arg0: SupportedOIDCProviders, arg1: number[]): [Option < number[] > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(SupportedOIDCProviders.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_oidc_provider_internal", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Option.from_bcs(Option.bcs(bcs_import.vector(bcs_import.u8())).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function set_patches(arg0: string, arg1: Patch[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(Patch.bcs).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_patches", [], args);

}

function try_get_jwk_by_id(arg0: ProviderJWKs, arg1: number[]): [Option < JWK > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ProviderJWKs.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "try_get_jwk_by_id", [], args);

    return [
        Option.from_bcs(Option.bcs(JWK.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function try_get_jwk_by_issuer(arg0: AllProvidersJWKs, arg1: number[], arg2: number[]): [Option < JWK > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(AllProvidersJWKs.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "try_get_jwk_by_issuer", [], args);

    return [
        Option.from_bcs(Option.bcs(JWK.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function try_get_patched_jwk(arg0: number[], arg1: number[]): [Option < JWK > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "try_get_patched_jwk", [], args);

    return [
        Option.from_bcs(Option.bcs(JWK.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function upsert_into_observed_jwks(arg0: string, arg1: ProviderJWKs[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(ProviderJWKs.bcs).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upsert_into_observed_jwks", [], args);

}

function upsert_jwk(arg0: ProviderJWKs, arg1: JWK): [Option < JWK > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ProviderJWKs.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(JWK.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upsert_jwk", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Option.from_bcs(Option.bcs(JWK.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function upsert_oidc_provider(arg0: string, arg1: number[], arg2: number[]): [Option < number[] > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upsert_oidc_provider", [], args);

    return [
        Option.from_bcs(Option.bcs(bcs_import.vector(bcs_import.u8())).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function upsert_oidc_provider_for_next_epoch(arg0: string, arg1: number[], arg2: number[]): [Option < number[] > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upsert_oidc_provider_for_next_epoch", [], args);

    return [
        Option.from_bcs(Option.bcs(bcs_import.vector(bcs_import.u8())).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function upsert_provider_jwks(arg0: AllProvidersJWKs, arg1: ProviderJWKs): [Option < ProviderJWKs > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(AllProvidersJWKs.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(ProviderJWKs.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upsert_provider_jwks", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Option.from_bcs(Option.bcs(ProviderJWKs.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const jwks = {
    AllProvidersJWKs,
    JWK,
    OIDCProvider,
    ObservedJWKs,
    ObservedJWKsUpdated,
    Patch,
    PatchRemoveAll,
    PatchRemoveIssuer,
    PatchRemoveJWK,
    PatchUpsertJWK,
    PatchedJWKs,
    Patches,
    ProviderJWKs,
    RSA_JWK,
    SupportedOIDCProviders,
    UnsupportedJWK,
    on_new_epoch,
    initialize,
    apply_patch,
    get_jwk_id,
    get_patched_jwk,
    new_patch_remove_all,
    new_patch_remove_issuer,
    new_patch_remove_jwk,
    new_patch_upsert_jwk,
    new_rsa_jwk,
    new_unsupported_jwk,
    regenerate_patched_jwks,
    remove_issuer,
    remove_issuer_from_observed_jwks,
    remove_jwk,
    remove_oidc_provider,
    remove_oidc_provider_for_next_epoch,
    remove_oidc_provider_internal,
    set_patches,
    try_get_jwk_by_id,
    try_get_jwk_by_issuer,
    try_get_patched_jwk,
    upsert_into_observed_jwks,
    upsert_jwk,
    upsert_oidc_provider,
    upsert_oidc_provider_for_next_epoch,
    upsert_provider_jwks
}