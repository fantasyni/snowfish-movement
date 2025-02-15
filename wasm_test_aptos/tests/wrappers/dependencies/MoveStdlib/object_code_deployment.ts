import {
    StructClass,
    get_package_address,
    get_wasm
} from "../../sui_wasm";
import {
    ExtendRef,
    Object_
} from "./object";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "object_code_deployment";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Freeze =============================== */

export class Freeze implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Freeze`;

    object_address: string;

    constructor(object_address: string) {
        this.object_address = object_address;
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
        return Freeze.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Freeze.from_bcs_vector(args)
    }

    get_bcs() {
        return Freeze.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Freeze`
    }

    from(arg: Freeze) {
        this.object_address = arg.object_address;
    }

    static from_bcs(arg: {
        object_address: string
    }): Freeze {
        return new Freeze(arg.object_address)
    }

    static from_bcs_vector(args: {
        object_address: string
    } []): Freeze[] {
        return args.map(function(arg) {
            return new Freeze(arg.object_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("Freeze", {
            object_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Freeze(val.object_address),
        });
    };
}

/* ============================== ManagingRefs =============================== */

export class ManagingRefs implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ManagingRefs`;

    extend_ref: ExtendRef;

    constructor(extend_ref ? : ExtendRef) {
        this.extend_ref = extend_ref;
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
        return ManagingRefs.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ManagingRefs.from_bcs_vector(args)
    }

    get_bcs() {
        return ManagingRefs.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ManagingRefs`
    }

    from(arg: ManagingRefs) {
        this.extend_ref = arg.extend_ref;
    }

    static from_bcs(arg: {
        extend_ref: ExtendRef
    }): ManagingRefs {
        return new ManagingRefs(arg.extend_ref)
    }

    static from_bcs_vector(args: {
        extend_ref: ExtendRef
    } []): ManagingRefs[] {
        return args.map(function(arg) {
            return new ManagingRefs(arg.extend_ref)
        })
    }

    static get bcs() {
        return bcs_import.struct("ManagingRefs", {
            extend_ref: ExtendRef.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ManagingRefs(val.extend_ref),
        });
    };
}

/* ============================== Publish =============================== */

export class Publish implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Publish`;

    object_address: string;

    constructor(object_address: string) {
        this.object_address = object_address;
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
        return Publish.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Publish.from_bcs_vector(args)
    }

    get_bcs() {
        return Publish.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Publish`
    }

    from(arg: Publish) {
        this.object_address = arg.object_address;
    }

    static from_bcs(arg: {
        object_address: string
    }): Publish {
        return new Publish(arg.object_address)
    }

    static from_bcs_vector(args: {
        object_address: string
    } []): Publish[] {
        return args.map(function(arg) {
            return new Publish(arg.object_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("Publish", {
            object_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Publish(val.object_address),
        });
    };
}

/* ============================== Upgrade =============================== */

export class Upgrade implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Upgrade`;

    object_address: string;

    constructor(object_address: string) {
        this.object_address = object_address;
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
        return Upgrade.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Upgrade.from_bcs_vector(args)
    }

    get_bcs() {
        return Upgrade.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Upgrade`
    }

    from(arg: Upgrade) {
        this.object_address = arg.object_address;
    }

    static from_bcs(arg: {
        object_address: string
    }): Upgrade {
        return new Upgrade(arg.object_address)
    }

    static from_bcs_vector(args: {
        object_address: string
    } []): Upgrade[] {
        return args.map(function(arg) {
            return new Upgrade(arg.object_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("Upgrade", {
            object_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Upgrade(val.object_address),
        });
    };
}

function freeze_code_object(arg0: string, arg1: Object_) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Object_.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "freeze_code_object", [], args);

}

function publish(arg0: string, arg1: number[], arg2: number[][]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "publish", [], args);

}

function upgrade(arg0: string, arg1: number[], arg2: number[][], arg3: Object_) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(Object_.bcs.serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upgrade", [], args);

}

export const object_code_deployment = {
    Freeze,
    ManagingRefs,
    Publish,
    Upgrade,
    freeze_code_object,
    publish,
    upgrade
}