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
let MODULE_NAME: string = "secp256k1";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== ECDSARawPublicKey =============================== */

export class ECDSARawPublicKey implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ECDSARawPublicKey`;

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
        return ECDSARawPublicKey.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ECDSARawPublicKey.from_bcs_vector(args)
    }

    get_bcs() {
        return ECDSARawPublicKey.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ECDSARawPublicKey`
    }

    from(arg: ECDSARawPublicKey) {
        this.bytes = arg.bytes;
    }

    static from_bcs(arg: {
        bytes: number[]
    }): ECDSARawPublicKey {
        return new ECDSARawPublicKey(arg.bytes)
    }

    static from_bcs_vector(args: {
        bytes: number[]
    } []): ECDSARawPublicKey[] {
        return args.map(function(arg) {
            return new ECDSARawPublicKey(arg.bytes)
        })
    }

    static get bcs() {
        return bcs_import.struct("ECDSARawPublicKey", {
            bytes: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ECDSARawPublicKey(val.bytes),
        });
    };
}

/* ============================== ECDSASignature =============================== */

export class ECDSASignature implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ECDSASignature`;

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
        return ECDSASignature.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ECDSASignature.from_bcs_vector(args)
    }

    get_bcs() {
        return ECDSASignature.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ECDSASignature`
    }

    from(arg: ECDSASignature) {
        this.bytes = arg.bytes;
    }

    static from_bcs(arg: {
        bytes: number[]
    }): ECDSASignature {
        return new ECDSASignature(arg.bytes)
    }

    static from_bcs_vector(args: {
        bytes: number[]
    } []): ECDSASignature[] {
        return args.map(function(arg) {
            return new ECDSASignature(arg.bytes)
        })
    }

    static get bcs() {
        return bcs_import.struct("ECDSASignature", {
            bytes: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ECDSASignature(val.bytes),
        });
    };
}

function ecdsa_raw_public_key_from_64_bytes(arg0: number[]): [ECDSARawPublicKey] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ecdsa_raw_public_key_from_64_bytes", [], args);

    return [
        ECDSARawPublicKey.from_bcs(ECDSARawPublicKey.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function ecdsa_raw_public_key_to_bytes(arg0: ECDSARawPublicKey): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ECDSARawPublicKey.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ecdsa_raw_public_key_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function ecdsa_recover(arg0: number[], arg1: number, arg2: ECDSASignature): [Option < ECDSARawPublicKey > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(ECDSASignature.bcs.serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ecdsa_recover", [], args);

    return [
        Option.from_bcs(Option.bcs(ECDSARawPublicKey.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function ecdsa_recover_internal(arg0: number[], arg1: number, arg2: number[]): [number[], boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ecdsa_recover_internal", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0])),
        bcs_import.bool().parse(new Uint8Array(r1.Raw[0]))
    ];
}

function ecdsa_signature_from_bytes(arg0: number[]): [ECDSASignature] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ecdsa_signature_from_bytes", [], args);

    return [
        ECDSASignature.from_bcs(ECDSASignature.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function ecdsa_signature_to_bytes(arg0: ECDSASignature): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ECDSASignature.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ecdsa_signature_to_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const secp256k1 = {
    ECDSARawPublicKey,
    ECDSASignature,
    ecdsa_raw_public_key_from_64_bytes,
    ecdsa_raw_public_key_to_bytes,
    ecdsa_recover,
    ecdsa_recover_internal,
    ecdsa_signature_from_bytes,
    ecdsa_signature_to_bytes
}