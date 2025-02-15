import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    EventHandle
} from "./event";
import {
    GUID
} from "./guid";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "object";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== ConstructorRef =============================== */

export class ConstructorRef implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ConstructorRef`;

    self: string;
    can_delete: boolean;

    constructor(self: string, can_delete: boolean) {
        this.self = self;
        this.can_delete = can_delete;
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
        return ConstructorRef.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ConstructorRef.from_bcs_vector(args)
    }

    get_bcs() {
        return ConstructorRef.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ConstructorRef`
    }

    from(arg: ConstructorRef) {
        this.self = arg.self;
        this.can_delete = arg.can_delete;
    }

    static from_bcs(arg: {
        self: string,
        can_delete: boolean
    }): ConstructorRef {
        return new ConstructorRef(arg.self, arg.can_delete)
    }

    static from_bcs_vector(args: {
        self: string,
        can_delete: boolean
    } []): ConstructorRef[] {
        return args.map(function(arg) {
            return new ConstructorRef(arg.self, arg.can_delete)
        })
    }

    static get bcs() {
        return bcs_import.struct("ConstructorRef", {
            self: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            can_delete: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ConstructorRef(val.self, val.can_delete),
        });
    };
}

/* ============================== DeleteRef =============================== */

export class DeleteRef implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DeleteRef`;

    self: string;

    constructor(self: string) {
        this.self = self;
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
        return DeleteRef.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DeleteRef.from_bcs_vector(args)
    }

    get_bcs() {
        return DeleteRef.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DeleteRef`
    }

    from(arg: DeleteRef) {
        this.self = arg.self;
    }

    static from_bcs(arg: {
        self: string
    }): DeleteRef {
        return new DeleteRef(arg.self)
    }

    static from_bcs_vector(args: {
        self: string
    } []): DeleteRef[] {
        return args.map(function(arg) {
            return new DeleteRef(arg.self)
        })
    }

    static get bcs() {
        return bcs_import.struct("DeleteRef", {
            self: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DeleteRef(val.self),
        });
    };
}

/* ============================== DeriveRef =============================== */

export class DeriveRef implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::DeriveRef`;

    self: string;

    constructor(self: string) {
        this.self = self;
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
        return DeriveRef.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return DeriveRef.from_bcs_vector(args)
    }

    get_bcs() {
        return DeriveRef.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::DeriveRef`
    }

    from(arg: DeriveRef) {
        this.self = arg.self;
    }

    static from_bcs(arg: {
        self: string
    }): DeriveRef {
        return new DeriveRef(arg.self)
    }

    static from_bcs_vector(args: {
        self: string
    } []): DeriveRef[] {
        return args.map(function(arg) {
            return new DeriveRef(arg.self)
        })
    }

    static get bcs() {
        return bcs_import.struct("DeriveRef", {
            self: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new DeriveRef(val.self),
        });
    };
}

/* ============================== ExtendRef =============================== */

export class ExtendRef implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ExtendRef`;

    self: string;

    constructor(self: string) {
        this.self = self;
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
        return ExtendRef.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ExtendRef.from_bcs_vector(args)
    }

    get_bcs() {
        return ExtendRef.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ExtendRef`
    }

    from(arg: ExtendRef) {
        this.self = arg.self;
    }

    static from_bcs(arg: {
        self: string
    }): ExtendRef {
        return new ExtendRef(arg.self)
    }

    static from_bcs_vector(args: {
        self: string
    } []): ExtendRef[] {
        return args.map(function(arg) {
            return new ExtendRef(arg.self)
        })
    }

    static get bcs() {
        return bcs_import.struct("ExtendRef", {
            self: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ExtendRef(val.self),
        });
    };
}

/* ============================== LinearTransferRef =============================== */

export class LinearTransferRef implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::LinearTransferRef`;

    self: string;
    owner: string;

    constructor(self: string, owner: string) {
        this.self = self;
        this.owner = owner;
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
        return LinearTransferRef.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return LinearTransferRef.from_bcs_vector(args)
    }

    get_bcs() {
        return LinearTransferRef.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::LinearTransferRef`
    }

    from(arg: LinearTransferRef) {
        this.self = arg.self;
        this.owner = arg.owner;
    }

    static from_bcs(arg: {
        self: string,
        owner: string
    }): LinearTransferRef {
        return new LinearTransferRef(arg.self, arg.owner)
    }

    static from_bcs_vector(args: {
        self: string,
        owner: string
    } []): LinearTransferRef[] {
        return args.map(function(arg) {
            return new LinearTransferRef(arg.self, arg.owner)
        })
    }

    static get bcs() {
        return bcs_import.struct("LinearTransferRef", {
            self: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            owner: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new LinearTransferRef(val.self, val.owner),
        });
    };
}

/* ============================== Object =============================== */

export class Object_ implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Object`;

    inner: string;

    constructor(inner: string) {
        this.inner = inner;
    }

    into_value() {
        return {
            inner: (this.inner as unknown as StructClass).into_value ? (this.inner as unknown as StructClass).into_value() : this.inner
        }
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
        return Object_.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Object_.from_bcs_vector(args)
    }

    get_bcs() {
        return Object_.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Object`
    }

    from(arg: Object_) {
        this.inner = arg.inner;
    }

    static from_bcs(arg: {
        inner: string
    }): Object_ {
        return new Object_(arg.inner)
    }

    static from_bcs_vector(args: {
        inner: string
    } []): Object_[] {
        return args.map(function(arg) {
            return new Object_(arg.inner)
        })
    }

    static get bcs() {
        return bcs_import.struct("Object_", {
            inner: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Object_(val.inner),
        });
    };
}

/* ============================== ObjectCore =============================== */

export class ObjectCore implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ObjectCore`;

    guid_creation_num: u64_import;
    owner: string;
    allow_ungated_transfer: boolean;
    transfer_events: EventHandle;

    constructor(guid_creation_num ? : u64_import, owner ? : string, allow_ungated_transfer ? : boolean, transfer_events ? : EventHandle) {
        this.guid_creation_num = guid_creation_num;
        this.owner = owner;
        this.allow_ungated_transfer = allow_ungated_transfer;
        this.transfer_events = transfer_events;
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
        return ObjectCore.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ObjectCore.from_bcs_vector(args)
    }

    get_bcs() {
        return ObjectCore.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ObjectCore`
    }

    from(arg: ObjectCore) {
        this.guid_creation_num = arg.guid_creation_num;
        this.owner = arg.owner;
        this.allow_ungated_transfer = arg.allow_ungated_transfer;
        this.transfer_events = arg.transfer_events;
    }

    static from_bcs(arg: {
        guid_creation_num: u64_import,
        owner: string,
        allow_ungated_transfer: boolean,
        transfer_events: EventHandle
    }): ObjectCore {
        return new ObjectCore(arg.guid_creation_num, arg.owner, arg.allow_ungated_transfer, arg.transfer_events)
    }

    static from_bcs_vector(args: {
        guid_creation_num: u64_import,
        owner: string,
        allow_ungated_transfer: boolean,
        transfer_events: EventHandle
    } []): ObjectCore[] {
        return args.map(function(arg) {
            return new ObjectCore(arg.guid_creation_num, arg.owner, arg.allow_ungated_transfer, arg.transfer_events)
        })
    }

    static get bcs() {
        return bcs_import.struct("ObjectCore", {
            guid_creation_num: bcs_import.u64(),
            owner: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            allow_ungated_transfer: bcs_import.bool(),
            transfer_events: EventHandle.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ObjectCore(val.guid_creation_num, val.owner, val.allow_ungated_transfer, val.transfer_events),
        });
    };
}

/* ============================== ObjectGroup =============================== */

export class ObjectGroup implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ObjectGroup`;

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
        return ObjectGroup.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ObjectGroup.from_bcs_vector(args)
    }

    get_bcs() {
        return ObjectGroup.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ObjectGroup`
    }

    from(arg: ObjectGroup) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): ObjectGroup {
        return new ObjectGroup(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): ObjectGroup[] {
        return args.map(function(arg) {
            return new ObjectGroup(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("ObjectGroup", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ObjectGroup(val.dummy_field),
        });
    };
}

/* ============================== TombStone =============================== */

export class TombStone implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TombStone`;

    original_owner: string;

    constructor(original_owner ? : string) {
        this.original_owner = original_owner;
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
        return TombStone.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TombStone.from_bcs_vector(args)
    }

    get_bcs() {
        return TombStone.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TombStone`
    }

    from(arg: TombStone) {
        this.original_owner = arg.original_owner;
    }

    static from_bcs(arg: {
        original_owner: string
    }): TombStone {
        return new TombStone(arg.original_owner)
    }

    static from_bcs_vector(args: {
        original_owner: string
    } []): TombStone[] {
        return args.map(function(arg) {
            return new TombStone(arg.original_owner)
        })
    }

    static get bcs() {
        return bcs_import.struct("TombStone", {
            original_owner: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TombStone(val.original_owner),
        });
    };
}

/* ============================== Transfer =============================== */

export class Transfer implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Transfer`;

    object: string;
    from: string;
    to: string;

    constructor(object: string, from: string, to: string) {
        this.object = object;
        this.from = from;
        this.to = to;
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
        return Transfer.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Transfer.from_bcs_vector(args)
    }

    get_bcs() {
        return Transfer.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Transfer`
    }

    from(arg: Transfer) {
        this.object = arg.object;
        this.from = arg.from;
        this.to = arg.to;
    }

    static from_bcs(arg: {
        object: string,
        from: string,
        to: string
    }): Transfer {
        return new Transfer(arg.object, arg.from, arg.to)
    }

    static from_bcs_vector(args: {
        object: string,
        from: string,
        to: string
    } []): Transfer[] {
        return args.map(function(arg) {
            return new Transfer(arg.object, arg.from, arg.to)
        })
    }

    static get bcs() {
        return bcs_import.struct("Transfer", {
            object: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            from: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            to: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Transfer(val.object, val.from, val.to),
        });
    };
}

/* ============================== TransferEvent =============================== */

export class TransferEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TransferEvent`;

    object: string;
    from: string;
    to: string;

    constructor(object: string, from: string, to: string) {
        this.object = object;
        this.from = from;
        this.to = to;
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
        return TransferEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TransferEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return TransferEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TransferEvent`
    }

    from(arg: TransferEvent) {
        this.object = arg.object;
        this.from = arg.from;
        this.to = arg.to;
    }

    static from_bcs(arg: {
        object: string,
        from: string,
        to: string
    }): TransferEvent {
        return new TransferEvent(arg.object, arg.from, arg.to)
    }

    static from_bcs_vector(args: {
        object: string,
        from: string,
        to: string
    } []): TransferEvent[] {
        return args.map(function(arg) {
            return new TransferEvent(arg.object, arg.from, arg.to)
        })
    }

    static get bcs() {
        return bcs_import.struct("TransferEvent", {
            object: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            from: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            to: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TransferEvent(val.object, val.from, val.to),
        });
    };
}

/* ============================== TransferRef =============================== */

export class TransferRef implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TransferRef`;

    self: string;

    constructor(self: string) {
        this.self = self;
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
        return TransferRef.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TransferRef.from_bcs_vector(args)
    }

    get_bcs() {
        return TransferRef.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TransferRef`
    }

    from(arg: TransferRef) {
        this.self = arg.self;
    }

    static from_bcs(arg: {
        self: string
    }): TransferRef {
        return new TransferRef(arg.self)
    }

    static from_bcs_vector(args: {
        self: string
    } []): TransferRef[] {
        return args.map(function(arg) {
            return new TransferRef(arg.self)
        })
    }

    static get bcs() {
        return bcs_import.struct("TransferRef", {
            self: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TransferRef(val.self),
        });
    };
}

/* ============================== Untransferable =============================== */

export class Untransferable implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Untransferable`;

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
        return Untransferable.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Untransferable.from_bcs_vector(args)
    }

    get_bcs() {
        return Untransferable.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Untransferable`
    }

    from(arg: Untransferable) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): Untransferable {
        return new Untransferable(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): Untransferable[] {
        return args.map(function(arg) {
            return new Untransferable(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("Untransferable", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Untransferable(val.dummy_field),
        });
    };
}

function new_event_handle < T0 extends StructClass > (type_args: string[], arg0: string): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_event_handle", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function create_guid(arg0: string): [GUID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_guid", [], args);

    return [
        GUID.from_bcs(GUID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function exists_at < T0 extends StructClass > (type_args: string[], arg0: string): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "exists_at", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function address_from_constructor_ref(arg0: ConstructorRef): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ConstructorRef.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "address_from_constructor_ref", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function address_from_delete_ref(arg0: DeleteRef): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DeleteRef.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "address_from_delete_ref", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function address_from_extend_ref(arg0: ExtendRef): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ExtendRef.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "address_from_extend_ref", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function address_to_object < T0 extends StructClass > (type_args: string[], arg0: string): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "address_to_object", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function burn < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Object_) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "burn", type_args, args);
}

function can_generate_delete_ref(arg0: ConstructorRef): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ConstructorRef.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "can_generate_delete_ref", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function convert < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "convert", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function create_guid_object_address(arg0: string, arg1: u64_import): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_guid_object_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create_named_object(arg0: string, arg1: number[]): [ConstructorRef] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_named_object", [], args);

    return [
        ConstructorRef.from_bcs(ConstructorRef.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create_object(arg0: string): [ConstructorRef] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_object", [], args);

    return [
        ConstructorRef.from_bcs(ConstructorRef.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create_object_address(arg0: string, arg1: number[]): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_object_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create_object_from_account(arg0: string): [ConstructorRef] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_object_from_account", [], args);

    return [
        ConstructorRef.from_bcs(ConstructorRef.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create_object_from_guid(arg0: string, arg1: GUID): [ConstructorRef] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(GUID.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_object_from_guid", [], args);

    return [
        ConstructorRef.from_bcs(ConstructorRef.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create_object_from_object(arg0: string): [ConstructorRef] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_object_from_object", [], args);

    return [
        ConstructorRef.from_bcs(ConstructorRef.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create_object_internal(arg0: string, arg1: string, arg2: boolean): [ConstructorRef] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_object_internal", [], args);

    return [
        ConstructorRef.from_bcs(ConstructorRef.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create_sticky_object(arg0: string): [ConstructorRef] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_sticky_object", [], args);

    return [
        ConstructorRef.from_bcs(ConstructorRef.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create_sticky_object_at_address(arg0: string, arg1: string): [ConstructorRef] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_sticky_object_at_address", [], args);

    return [
        ConstructorRef.from_bcs(ConstructorRef.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create_user_derived_object(arg0: string, arg1: DeriveRef): [ConstructorRef] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(DeriveRef.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_user_derived_object", [], args);

    return [
        ConstructorRef.from_bcs(ConstructorRef.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create_user_derived_object_address(arg0: string, arg1: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_user_derived_object_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create_user_derived_object_address_impl(arg0: string, arg1: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_user_derived_object_address_impl", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function delete_(arg0: DeleteRef) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(DeleteRef.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "delete", [], args);

}

function disable_ungated_transfer(arg0: TransferRef) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TransferRef.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "disable_ungated_transfer", [], args);

}

function enable_ungated_transfer(arg0: TransferRef) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TransferRef.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "enable_ungated_transfer", [], args);

}

function generate_delete_ref(arg0: ConstructorRef): [DeleteRef] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ConstructorRef.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_delete_ref", [], args);

    return [
        DeleteRef.from_bcs(DeleteRef.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function generate_derive_ref(arg0: ConstructorRef): [DeriveRef] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ConstructorRef.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_derive_ref", [], args);

    return [
        DeriveRef.from_bcs(DeriveRef.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function generate_extend_ref(arg0: ConstructorRef): [ExtendRef] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ConstructorRef.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_extend_ref", [], args);

    return [
        ExtendRef.from_bcs(ExtendRef.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function generate_linear_transfer_ref(arg0: TransferRef): [LinearTransferRef] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(TransferRef.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_linear_transfer_ref", [], args);

    return [
        LinearTransferRef.from_bcs(LinearTransferRef.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function generate_signer(arg0: ConstructorRef): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ConstructorRef.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_signer", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function generate_signer_for_extending(arg0: ExtendRef): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ExtendRef.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_signer_for_extending", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function generate_transfer_ref(arg0: ConstructorRef): [TransferRef] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ConstructorRef.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_transfer_ref", [], args);

    return [
        TransferRef.from_bcs(TransferRef.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function is_burnt < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_burnt", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function is_object(arg0: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_object", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function is_owner < T0 extends StructClass > (type_args: string[], arg0: Object_, arg1: string): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_owner", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function is_untransferable < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_untransferable", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function object_address < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "object_address", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function object_exists < T0 extends StructClass > (type_args: string[], arg0: string): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "object_exists", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function object_from_constructor_ref < T0 extends StructClass > (type_args: string[], arg0: ConstructorRef): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "object_from_constructor_ref", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function object_from_delete_ref < T0 extends StructClass > (type_args: string[], arg0: DeleteRef): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "object_from_delete_ref", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function owner < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "owner", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function owns < T0 extends StructClass > (type_args: string[], arg0: Object_, arg1: string): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "owns", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function root_owner < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "root_owner", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function set_untransferable(arg0: ConstructorRef) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(ConstructorRef.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_untransferable", [], args);

}

function transfer < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Object_, arg2: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer", type_args, args);
}

function transfer_call(arg0: string, arg1: string, arg2: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer_call", [], args);

}

function transfer_raw(arg0: string, arg1: string, arg2: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer_raw", [], args);

}

function transfer_to_object < T0 extends StructClass, T1 extends StructClass > (type_args: string[], arg0: string, arg1: Object_, arg2: Object_) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer_to_object", type_args, args);
}

function transfer_with_ref(arg0: LinearTransferRef, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(LinearTransferRef.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "transfer_with_ref", [], args);

}

function unburn < T0 extends StructClass > (type_args: string[], arg0: string, arg1: Object_) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "unburn", type_args, args);
}

function ungated_transfer_allowed < T0 extends StructClass > (type_args: string[], arg0: Object_): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "ungated_transfer_allowed", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function verify_ungated_and_descendant(arg0: string, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_ungated_and_descendant", [], args);

}

export const object = {
    ConstructorRef,
    DeleteRef,
    DeriveRef,
    ExtendRef,
    LinearTransferRef,
    Object_,
    ObjectCore,
    ObjectGroup,
    TombStone,
    Transfer,
    TransferEvent,
    TransferRef,
    Untransferable,
    new_event_handle,
    create_guid,
    exists_at,
    address_from_constructor_ref,
    address_from_delete_ref,
    address_from_extend_ref,
    address_to_object,
    burn,
    can_generate_delete_ref,
    convert,
    create_guid_object_address,
    create_named_object,
    create_object,
    create_object_address,
    create_object_from_account,
    create_object_from_guid,
    create_object_from_object,
    create_object_internal,
    create_sticky_object,
    create_sticky_object_at_address,
    create_user_derived_object,
    create_user_derived_object_address,
    create_user_derived_object_address_impl,
    delete_,
    disable_ungated_transfer,
    enable_ungated_transfer,
    generate_delete_ref,
    generate_derive_ref,
    generate_extend_ref,
    generate_linear_transfer_ref,
    generate_signer,
    generate_signer_for_extending,
    generate_transfer_ref,
    is_burnt,
    is_object,
    is_owner,
    is_untransferable,
    object_address,
    object_exists,
    object_from_constructor_ref,
    object_from_delete_ref,
    owner,
    owns,
    root_owner,
    set_untransferable,
    transfer,
    transfer_call,
    transfer_raw,
    transfer_to_object,
    transfer_with_ref,
    unburn,
    ungated_transfer_allowed,
    verify_ungated_and_descendant
}