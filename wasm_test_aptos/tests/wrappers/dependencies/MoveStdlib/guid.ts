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
let MODULE_NAME: string = "guid";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== GUID =============================== */

export class GUID implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::GUID`;

    id: ID;

    constructor(id: ID) {
        this.id = id;
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
        return GUID.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return GUID.from_bcs_vector(args)
    }

    get_bcs() {
        return GUID.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::GUID`
    }

    from(arg: GUID) {
        this.id = arg.id;
    }

    static from_bcs(arg: {
        id: ID
    }): GUID {
        return new GUID(arg.id)
    }

    static from_bcs_vector(args: {
        id: ID
    } []): GUID[] {
        return args.map(function(arg) {
            return new GUID(arg.id)
        })
    }

    static get bcs() {
        return bcs_import.struct("GUID", {
            id: ID.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new GUID(val.id),
        });
    };
}

/* ============================== ID =============================== */

export class ID implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ID`;

    creation_num: u64_import;
    addr: string;

    constructor(creation_num: u64_import, addr: string) {
        this.creation_num = creation_num;
        this.addr = addr;
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
        return ID.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ID.from_bcs_vector(args)
    }

    get_bcs() {
        return ID.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ID`
    }

    from(arg: ID) {
        this.creation_num = arg.creation_num;
        this.addr = arg.addr;
    }

    static from_bcs(arg: {
        creation_num: u64_import,
        addr: string
    }): ID {
        return new ID(arg.creation_num, arg.addr)
    }

    static from_bcs_vector(args: {
        creation_num: u64_import,
        addr: string
    } []): ID[] {
        return args.map(function(arg) {
            return new ID(arg.creation_num, arg.addr)
        })
    }

    static get bcs() {
        return bcs_import.struct("ID", {
            creation_num: bcs_import.u64(),
            addr: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ID(val.creation_num, val.addr),
        });
    };
}

function create(arg0: string, arg1: u64_import): [GUID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create", [], args);

    return [
        GUID.from_bcs(GUID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create_id(arg0: string, arg1: u64_import): [ID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_id", [], args);

    return [
        ID.from_bcs(ID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function creation_num(arg0: GUID): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(GUID.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "creation_num", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function creator_address(arg0: GUID): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(GUID.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "creator_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function eq_id(arg0: GUID, arg1: ID): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(GUID.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(ID.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "eq_id", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function id(arg0: GUID): [ID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(GUID.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "id", [], args);

    return [
        ID.from_bcs(ID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function id_creation_num(arg0: ID): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ID.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "id_creation_num", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function id_creator_address(arg0: ID): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ID.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "id_creator_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const guid = {
    GUID,
    ID,
    create,
    create_id,
    creation_num,
    creator_address,
    eq_id,
    id,
    id_creation_num,
    id_creator_address
}