import {
    StructClass,
    get_package_address,
    get_wasm
} from "../../sui_wasm";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "ethereum";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== EthereumAddress =============================== */

export class EthereumAddress implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::EthereumAddress`;

    inner: number[];

    constructor(inner: number[]) {
        this.inner = inner;
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
        return EthereumAddress.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return EthereumAddress.from_bcs_vector(args)
    }

    get_bcs() {
        return EthereumAddress.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::EthereumAddress`
    }

    from(arg: EthereumAddress) {
        this.inner = arg.inner;
    }

    static from_bcs(arg: {
        inner: number[]
    }): EthereumAddress {
        return new EthereumAddress(arg.inner)
    }

    static from_bcs_vector(args: {
        inner: number[]
    } []): EthereumAddress[] {
        return args.map(function(arg) {
            return new EthereumAddress(arg.inner)
        })
    }

    static get bcs() {
        return bcs_import.struct("EthereumAddress", {
            inner: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new EthereumAddress(val.inner),
        });
    };
}

function assert_40_char_hex(arg0: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_40_char_hex", [], args);

}

function assert_eip55(arg0: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_eip55", [], args);

}

function ethereum_address(arg0: number[]): [EthereumAddress] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ethereum_address", [], args);

    return [
        EthereumAddress.from_bcs(EthereumAddress.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function ethereum_address_20_bytes(arg0: number[]): [EthereumAddress] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ethereum_address_20_bytes", [], args);

    return [
        EthereumAddress.from_bcs(EthereumAddress.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function ethereum_address_no_eip55(arg0: number[]): [EthereumAddress] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ethereum_address_no_eip55", [], args);

    return [
        EthereumAddress.from_bcs(EthereumAddress.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function get_inner(arg0: EthereumAddress): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(EthereumAddress.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_inner", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_inner_ethereum_address(arg0: EthereumAddress): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(EthereumAddress.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_inner_ethereum_address", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function to_eip55_checksumed_address(arg0: number[]): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_eip55_checksumed_address", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function to_lowercase(arg0: number[]): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "to_lowercase", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const ethereum = {
    EthereumAddress,
    assert_40_char_hex,
    assert_eip55,
    ethereum_address,
    ethereum_address_20_bytes,
    ethereum_address_no_eip55,
    get_inner,
    get_inner_ethereum_address,
    to_eip55_checksumed_address,
    to_lowercase
}