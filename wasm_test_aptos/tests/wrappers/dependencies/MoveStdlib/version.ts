import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
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
let MODULE_NAME: string = "version";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== SetVersionCapability =============================== */

export class SetVersionCapability implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SetVersionCapability`;

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
        return SetVersionCapability.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SetVersionCapability.from_bcs_vector(args)
    }

    get_bcs() {
        return SetVersionCapability.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SetVersionCapability`
    }

    from(arg: SetVersionCapability) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): SetVersionCapability {
        return new SetVersionCapability(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): SetVersionCapability[] {
        return args.map(function(arg) {
            return new SetVersionCapability(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("SetVersionCapability", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new SetVersionCapability(val.dummy_field),
        });
    };
}

/* ============================== Version =============================== */

export class Version implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Version`;

    major: u64_import;

    constructor(major ? : u64_import) {
        this.major = major;
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
        return Version.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Version.from_bcs_vector(args)
    }

    get_bcs() {
        return Version.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Version`
    }

    from(arg: Version) {
        this.major = arg.major;
    }

    static from_bcs(arg: {
        major: u64_import
    }): Version {
        return new Version(arg.major)
    }

    static from_bcs_vector(args: {
        major: u64_import
    } []): Version[] {
        return args.map(function(arg) {
            return new Version(arg.major)
        })
    }

    static get bcs() {
        return bcs_import.struct("Version", {
            major: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Version(val.major),
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

function initialize(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize", [], args);

}

function initialize_for_test(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_for_test", [], args);

}

function set_for_next_epoch(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_for_next_epoch", [], args);

}

function set_version(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_version", [], args);

}

export const version = {
    SetVersionCapability,
    Version,
    on_new_epoch,
    initialize,
    initialize_for_test,
    set_for_next_epoch,
    set_version
}