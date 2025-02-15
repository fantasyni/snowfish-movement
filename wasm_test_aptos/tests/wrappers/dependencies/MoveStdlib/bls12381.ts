import {
    StructClass,
    get_package_address,
    get_wasm
} from "../../sui_wasm";
import {
    Option
} from "./option";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "bls12381";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Signature =============================== */

export class Signature implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Signature`;

    bytes: number[];

    constructor(bytes: number[]) {
        this.bytes = bytes;
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
        return Signature.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Signature.from_bcs_vector(args)
    }

    get_bcs() {
        return Signature.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Signature`
    }

    from(arg: Signature) {
        this.bytes = arg.bytes;
    }

    static from_bcs(arg: {
        bytes: number[]
    }): Signature {
        return new Signature(arg.bytes)
    }

    static from_bcs_vector(args: {
        bytes: number[]
    } []): Signature[] {
        return args.map(function(arg) {
            return new Signature(arg.bytes)
        })
    }

    static get bcs() {
        return bcs_import.struct("Signature", {
            bytes: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Signature(val.bytes),
        });
    };
}

/* ============================== AggrOrMultiSignature =============================== */

export class AggrOrMultiSignature implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AggrOrMultiSignature`;

    bytes: number[];

    constructor(bytes: number[]) {
        this.bytes = bytes;
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
        return AggrOrMultiSignature.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AggrOrMultiSignature.from_bcs_vector(args)
    }

    get_bcs() {
        return AggrOrMultiSignature.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AggrOrMultiSignature`
    }

    from(arg: AggrOrMultiSignature) {
        this.bytes = arg.bytes;
    }

    static from_bcs(arg: {
        bytes: number[]
    }): AggrOrMultiSignature {
        return new AggrOrMultiSignature(arg.bytes)
    }

    static from_bcs_vector(args: {
        bytes: number[]
    } []): AggrOrMultiSignature[] {
        return args.map(function(arg) {
            return new AggrOrMultiSignature(arg.bytes)
        })
    }

    static get bcs() {
        return bcs_import.struct("AggrOrMultiSignature", {
            bytes: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AggrOrMultiSignature(val.bytes),
        });
    };
}

/* ============================== AggrPublicKeysWithPoP =============================== */

export class AggrPublicKeysWithPoP implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AggrPublicKeysWithPoP`;

    bytes: number[];

    constructor(bytes: number[]) {
        this.bytes = bytes;
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
        return AggrPublicKeysWithPoP.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AggrPublicKeysWithPoP.from_bcs_vector(args)
    }

    get_bcs() {
        return AggrPublicKeysWithPoP.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AggrPublicKeysWithPoP`
    }

    from(arg: AggrPublicKeysWithPoP) {
        this.bytes = arg.bytes;
    }

    static from_bcs(arg: {
        bytes: number[]
    }): AggrPublicKeysWithPoP {
        return new AggrPublicKeysWithPoP(arg.bytes)
    }

    static from_bcs_vector(args: {
        bytes: number[]
    } []): AggrPublicKeysWithPoP[] {
        return args.map(function(arg) {
            return new AggrPublicKeysWithPoP(arg.bytes)
        })
    }

    static get bcs() {
        return bcs_import.struct("AggrPublicKeysWithPoP", {
            bytes: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AggrPublicKeysWithPoP(val.bytes),
        });
    };
}

/* ============================== ProofOfPossession =============================== */

export class ProofOfPossession implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ProofOfPossession`;

    bytes: number[];

    constructor(bytes: number[]) {
        this.bytes = bytes;
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
        return ProofOfPossession.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ProofOfPossession.from_bcs_vector(args)
    }

    get_bcs() {
        return ProofOfPossession.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ProofOfPossession`
    }

    from(arg: ProofOfPossession) {
        this.bytes = arg.bytes;
    }

    static from_bcs(arg: {
        bytes: number[]
    }): ProofOfPossession {
        return new ProofOfPossession(arg.bytes)
    }

    static from_bcs_vector(args: {
        bytes: number[]
    } []): ProofOfPossession[] {
        return args.map(function(arg) {
            return new ProofOfPossession(arg.bytes)
        })
    }

    static get bcs() {
        return bcs_import.struct("ProofOfPossession", {
            bytes: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ProofOfPossession(val.bytes),
        });
    };
}

/* ============================== PublicKey =============================== */

export class PublicKey implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PublicKey`;

    bytes: number[];

    constructor(bytes: number[]) {
        this.bytes = bytes;
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
        return PublicKey.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PublicKey.from_bcs_vector(args)
    }

    get_bcs() {
        return PublicKey.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PublicKey`
    }

    from(arg: PublicKey) {
        this.bytes = arg.bytes;
    }

    static from_bcs(arg: {
        bytes: number[]
    }): PublicKey {
        return new PublicKey(arg.bytes)
    }

    static from_bcs_vector(args: {
        bytes: number[]
    } []): PublicKey[] {
        return args.map(function(arg) {
            return new PublicKey(arg.bytes)
        })
    }

    static get bcs() {
        return bcs_import.struct("PublicKey", {
            bytes: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PublicKey(val.bytes),
        });
    };
}

/* ============================== PublicKeyWithPoP =============================== */

export class PublicKeyWithPoP implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PublicKeyWithPoP`;

    bytes: number[];

    constructor(bytes: number[]) {
        this.bytes = bytes;
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
        return PublicKeyWithPoP.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PublicKeyWithPoP.from_bcs_vector(args)
    }

    get_bcs() {
        return PublicKeyWithPoP.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PublicKeyWithPoP`
    }

    from(arg: PublicKeyWithPoP) {
        this.bytes = arg.bytes;
    }

    static from_bcs(arg: {
        bytes: number[]
    }): PublicKeyWithPoP {
        return new PublicKeyWithPoP(arg.bytes)
    }

    static from_bcs_vector(args: {
        bytes: number[]
    } []): PublicKeyWithPoP[] {
        return args.map(function(arg) {
            return new PublicKeyWithPoP(arg.bytes)
        })
    }

    static get bcs() {
        return bcs_import.struct("PublicKeyWithPoP", {
            bytes: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PublicKeyWithPoP(val.bytes),
        });
    };
}

function signature_to_bytes(arg0: Signature): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Signature.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "signature_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function aggr_or_multi_signature_from_bytes(arg0: number[]): [AggrOrMultiSignature] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "aggr_or_multi_signature_from_bytes", [], args);

    return [
        AggrOrMultiSignature.from_bcs(AggrOrMultiSignature.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function aggr_or_multi_signature_subgroup_check(arg0: AggrOrMultiSignature): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(AggrOrMultiSignature.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "aggr_or_multi_signature_subgroup_check", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function aggr_or_multi_signature_to_bytes(arg0: AggrOrMultiSignature): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(AggrOrMultiSignature.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "aggr_or_multi_signature_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function aggregate_pubkey_to_bytes(arg0: AggrPublicKeysWithPoP): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(AggrPublicKeysWithPoP.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "aggregate_pubkey_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function aggregate_pubkeys(arg0: PublicKeyWithPoP[]): [AggrPublicKeysWithPoP] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(PublicKeyWithPoP.bcs).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "aggregate_pubkeys", [], args);

    return [
        AggrPublicKeysWithPoP.from_bcs(AggrPublicKeysWithPoP.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function aggregate_pubkeys_internal(arg0: PublicKeyWithPoP[]): [number[], boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(PublicKeyWithPoP.bcs).serialize(arg0).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "aggregate_pubkeys_internal", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0])),
        bcs_import.bool().parse(new Uint8Array(r1.Raw[0]))
    ];
}

function aggregate_signatures(arg0: Signature[]): [Option < AggrOrMultiSignature > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(Signature.bcs).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "aggregate_signatures", [], args);

    return [
        Option.from_bcs(Option.bcs(AggrOrMultiSignature.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function aggregate_signatures_internal(arg0: Signature[]): [number[], boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(Signature.bcs).serialize(arg0).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "aggregate_signatures_internal", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0])),
        bcs_import.bool().parse(new Uint8Array(r1.Raw[0]))
    ];
}

function proof_of_possession_from_bytes(arg0: number[]): [ProofOfPossession] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "proof_of_possession_from_bytes", [], args);

    return [
        ProofOfPossession.from_bcs(ProofOfPossession.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function proof_of_possession_to_bytes(arg0: ProofOfPossession): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ProofOfPossession.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "proof_of_possession_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function public_key_from_bytes(arg0: number[]): [Option < PublicKey > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "public_key_from_bytes", [], args);

    return [
        Option.from_bcs(Option.bcs(PublicKey.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function public_key_from_bytes_with_pop(arg0: number[], arg1: ProofOfPossession): [Option < PublicKeyWithPoP > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(ProofOfPossession.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "public_key_from_bytes_with_pop", [], args);

    return [
        Option.from_bcs(Option.bcs(PublicKeyWithPoP.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function public_key_to_bytes(arg0: PublicKey): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(PublicKey.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "public_key_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function public_key_with_pop_to_bytes(arg0: PublicKeyWithPoP): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(PublicKeyWithPoP.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "public_key_with_pop_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function public_key_with_pop_to_normal(arg0: PublicKeyWithPoP): [PublicKey] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(PublicKeyWithPoP.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "public_key_with_pop_to_normal", [], args);

    return [
        PublicKey.from_bcs(PublicKey.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function signature_from_bytes(arg0: number[]): [Signature] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "signature_from_bytes", [], args);

    return [
        Signature.from_bcs(Signature.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function signature_subgroup_check(arg0: Signature): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Signature.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "signature_subgroup_check", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function signature_subgroup_check_internal(arg0: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "signature_subgroup_check_internal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function validate_pubkey_internal(arg0: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "validate_pubkey_internal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function verify_aggregate_signature(arg0: AggrOrMultiSignature, arg1: PublicKeyWithPoP[], arg2: number[][]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(AggrOrMultiSignature.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(PublicKeyWithPoP.bcs).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_aggregate_signature", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function verify_aggregate_signature_internal(arg0: number[], arg1: PublicKeyWithPoP[], arg2: number[][]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(PublicKeyWithPoP.bcs).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_aggregate_signature_internal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function verify_multisignature(arg0: AggrOrMultiSignature, arg1: AggrPublicKeysWithPoP, arg2: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(AggrOrMultiSignature.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(AggrPublicKeysWithPoP.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_multisignature", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function verify_multisignature_internal(arg0: number[], arg1: number[], arg2: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_multisignature_internal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function verify_normal_signature(arg0: Signature, arg1: PublicKey, arg2: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Signature.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(PublicKey.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_normal_signature", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function verify_normal_signature_internal(arg0: number[], arg1: number[], arg2: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_normal_signature_internal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function verify_proof_of_possession_internal(arg0: number[], arg1: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_proof_of_possession_internal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function verify_signature_share(arg0: Signature, arg1: PublicKeyWithPoP, arg2: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Signature.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(PublicKeyWithPoP.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_signature_share", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function verify_signature_share_internal(arg0: number[], arg1: number[], arg2: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_signature_share_internal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const bls12381 = {
    Signature,
    AggrOrMultiSignature,
    AggrPublicKeysWithPoP,
    ProofOfPossession,
    PublicKey,
    PublicKeyWithPoP,
    signature_to_bytes,
    aggr_or_multi_signature_from_bytes,
    aggr_or_multi_signature_subgroup_check,
    aggr_or_multi_signature_to_bytes,
    aggregate_pubkey_to_bytes,
    aggregate_pubkeys,
    aggregate_pubkeys_internal,
    aggregate_signatures,
    aggregate_signatures_internal,
    proof_of_possession_from_bytes,
    proof_of_possession_to_bytes,
    public_key_from_bytes,
    public_key_from_bytes_with_pop,
    public_key_to_bytes,
    public_key_with_pop_to_bytes,
    public_key_with_pop_to_normal,
    signature_from_bytes,
    signature_subgroup_check,
    signature_subgroup_check_internal,
    validate_pubkey_internal,
    verify_aggregate_signature,
    verify_aggregate_signature_internal,
    verify_multisignature,
    verify_multisignature_internal,
    verify_normal_signature,
    verify_normal_signature_internal,
    verify_proof_of_possession_internal,
    verify_signature_share,
    verify_signature_share_internal
}