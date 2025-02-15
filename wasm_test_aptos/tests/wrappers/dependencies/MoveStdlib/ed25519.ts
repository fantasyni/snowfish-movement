import {
    StructClass,
    TypeArgument,
    get_package_address,
    get_wasm,
    to_arr_value
} from "../../sui_wasm";
import {
    Option
} from "./option";
import {
    TypeInfo
} from "./type_info";
import {
    BcsType,
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "ed25519";

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

/* ============================== SignedMessage =============================== */

export class SignedMessage < T0 extends TypeArgument > implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SignedMessage`;

    type_info: TypeInfo;
    inner: T0;

    T0_bcs: any;

    constructor(type_info: TypeInfo, inner: T0) {
        this.type_info = type_info;
        this.inner = inner;
    }

    into_value() {
        return {
            type_info: (this.type_info as unknown as StructClass).into_value ? (this.type_info as unknown as StructClass).into_value() : this.type_info,
            inner: (this.inner as StructClass).into_value ? (this.inner as StructClass).into_value() : this.inner
        }
    }

    from_bcs_vector_t(bytes: Uint8Array) {
        let args = this.from_bcs_vector(bcs_import.vector(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.inner) as StructClass).return_bcs()
        )).parse(bytes));
        var self = this;
        return args.map(function(arg) {
            arg.$type = self.$type;
            return arg;
        })
    }

    from_bcs_t(bytes: Uint8Array) {
        let result = this.from_bcs(this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.inner) as StructClass).return_bcs()
        ).parse(bytes));
        result.$type = this.$type;
        return result;
    }

    serialize(arg: any) {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.inner) as StructClass).return_bcs()
        ).serialize(arg);
    }

    serialize_bcs() {
        return this.get_bcs()(
            this.T0_bcs ? this.T0_bcs : (to_arr_value(this.inner) as StructClass).return_bcs()
        )
    }

    return_bcs() {
        return this.get_bcs()((to_arr_value(this.inner) as StructClass).get_bcs())
    }

    from_bcs(arg: any) {
        return SignedMessage.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SignedMessage.from_bcs_vector(args)
    }

    get_bcs() {
        return SignedMessage.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SignedMessage`
    }

    from(arg: SignedMessage < T0 > ) {
        this.type_info = arg.type_info;
        this.inner = arg.inner;
    }

    static from_bcs < T0 extends TypeArgument > (arg: {
        type_info: TypeInfo,
        inner: T0
    }): SignedMessage < T0 > {
        return new SignedMessage(arg.type_info, arg.inner)
    }

    static from_bcs_vector < T0 extends TypeArgument > (args: {
        type_info: TypeInfo,
        inner: T0
    } []): SignedMessage < T0 > [] {
        return args.map(function(arg) {
            return new SignedMessage(arg.type_info, arg.inner)
        })
    }

    static get bcs() {
        return < T0 extends TypeArgument, input0 > (T0: BcsType < T0, input0 > ) =>
            bcs_import.struct(`SignedMessage<${T0.name}>`, {
                type_info: TypeInfo.bcs,
                inner: T0,
            }).transform({
                input: (val: any) => {
                    return val
                },
                output: (val) => new SignedMessage(val.type_info, val.inner),
            });
    };
}

/* ============================== UnvalidatedPublicKey =============================== */

export class UnvalidatedPublicKey implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UnvalidatedPublicKey`;

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
        return UnvalidatedPublicKey.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UnvalidatedPublicKey.from_bcs_vector(args)
    }

    get_bcs() {
        return UnvalidatedPublicKey.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UnvalidatedPublicKey`
    }

    from(arg: UnvalidatedPublicKey) {
        this.bytes = arg.bytes;
    }

    static from_bcs(arg: {
        bytes: number[]
    }): UnvalidatedPublicKey {
        return new UnvalidatedPublicKey(arg.bytes)
    }

    static from_bcs_vector(args: {
        bytes: number[]
    } []): UnvalidatedPublicKey[] {
        return args.map(function(arg) {
            return new UnvalidatedPublicKey(arg.bytes)
        })
    }

    static get bcs() {
        return bcs_import.struct("UnvalidatedPublicKey", {
            bytes: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UnvalidatedPublicKey(val.bytes),
        });
    };
}

/* ============================== ValidatedPublicKey =============================== */

export class ValidatedPublicKey implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ValidatedPublicKey`;

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
        return ValidatedPublicKey.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ValidatedPublicKey.from_bcs_vector(args)
    }

    get_bcs() {
        return ValidatedPublicKey.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ValidatedPublicKey`
    }

    from(arg: ValidatedPublicKey) {
        this.bytes = arg.bytes;
    }

    static from_bcs(arg: {
        bytes: number[]
    }): ValidatedPublicKey {
        return new ValidatedPublicKey(arg.bytes)
    }

    static from_bcs_vector(args: {
        bytes: number[]
    } []): ValidatedPublicKey[] {
        return args.map(function(arg) {
            return new ValidatedPublicKey(arg.bytes)
        })
    }

    static get bcs() {
        return bcs_import.struct("ValidatedPublicKey", {
            bytes: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ValidatedPublicKey(val.bytes),
        });
    };
}

function new_signature_from_bytes(arg0: number[]): [Signature] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_signature_from_bytes", [], args);

    return [
        Signature.from_bcs(Signature.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_signed_message < T0 extends StructClass > (type_args: string[], arg0: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_signed_message", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function new_unvalidated_public_key_from_bytes(arg0: number[]): [UnvalidatedPublicKey] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_unvalidated_public_key_from_bytes", [], args);

    return [
        UnvalidatedPublicKey.from_bcs(UnvalidatedPublicKey.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_validated_public_key_from_bytes(arg0: number[]): [Option < ValidatedPublicKey > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_validated_public_key_from_bytes", [], args);

    return [
        Option.from_bcs(Option.bcs(ValidatedPublicKey.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function public_key_bytes_to_authentication_key(arg0: number[]): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "public_key_bytes_to_authentication_key", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function public_key_into_unvalidated(arg0: ValidatedPublicKey): [UnvalidatedPublicKey] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ValidatedPublicKey.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "public_key_into_unvalidated", [], args);

    return [
        UnvalidatedPublicKey.from_bcs(UnvalidatedPublicKey.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function public_key_to_unvalidated(arg0: ValidatedPublicKey): [UnvalidatedPublicKey] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ValidatedPublicKey.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "public_key_to_unvalidated", [], args);

    return [
        UnvalidatedPublicKey.from_bcs(UnvalidatedPublicKey.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function public_key_validate(arg0: UnvalidatedPublicKey): [Option < ValidatedPublicKey > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UnvalidatedPublicKey.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "public_key_validate", [], args);

    return [
        Option.from_bcs(Option.bcs(ValidatedPublicKey.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function public_key_validate_internal(arg0: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "public_key_validate_internal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
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

function signature_verify_strict(arg0: Signature, arg1: UnvalidatedPublicKey, arg2: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Signature.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(UnvalidatedPublicKey.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "signature_verify_strict", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function signature_verify_strict_internal(arg0: number[], arg1: number[], arg2: number[]): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "signature_verify_strict_internal", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function signature_verify_strict_t < T0 extends StructClass > (type_args: string[], arg0: Signature, arg1: UnvalidatedPublicKey, arg2: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "signature_verify_strict_t", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function unvalidated_public_key_to_authentication_key(arg0: UnvalidatedPublicKey): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UnvalidatedPublicKey.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unvalidated_public_key_to_authentication_key", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function unvalidated_public_key_to_bytes(arg0: UnvalidatedPublicKey): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UnvalidatedPublicKey.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unvalidated_public_key_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function validated_public_key_to_authentication_key(arg0: ValidatedPublicKey): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ValidatedPublicKey.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "validated_public_key_to_authentication_key", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function validated_public_key_to_bytes(arg0: ValidatedPublicKey): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ValidatedPublicKey.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "validated_public_key_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const ed25519 = {
    Signature,
    SignedMessage,
    UnvalidatedPublicKey,
    ValidatedPublicKey,
    new_signature_from_bytes,
    new_signed_message,
    new_unvalidated_public_key_from_bytes,
    new_validated_public_key_from_bytes,
    public_key_bytes_to_authentication_key,
    public_key_into_unvalidated,
    public_key_to_unvalidated,
    public_key_validate,
    public_key_validate_internal,
    signature_to_bytes,
    signature_verify_strict,
    signature_verify_strict_internal,
    signature_verify_strict_t,
    unvalidated_public_key_to_authentication_key,
    unvalidated_public_key_to_bytes,
    validated_public_key_to_authentication_key,
    validated_public_key_to_bytes
}