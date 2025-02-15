import {
    StructClass,
    copy_arr_value,
    get_package_address,
    get_wasm,
    has_arr,
    into_arr_bcs_vector,
    into_arr_value
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
let MODULE_NAME: string = "capability";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Cap =============================== */

export class Cap implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Cap`;

    root: string;

    constructor(root: string) {
        this.root = root;
    }

    into_value() {
        return {
            root: (this.root as unknown as StructClass).into_value ? (this.root as unknown as StructClass).into_value() : this.root
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
        return Cap.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Cap.from_bcs_vector(args)
    }

    get_bcs() {
        return Cap.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Cap`
    }

    from(arg: Cap) {
        this.root = arg.root;
    }

    static from_bcs(arg: {
        root: string
    }): Cap {
        return new Cap(arg.root)
    }

    static from_bcs_vector(args: {
        root: string
    } []): Cap[] {
        return args.map(function(arg) {
            return new Cap(arg.root)
        })
    }

    static get bcs() {
        return bcs_import.struct("Cap", {
            root: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Cap(val.root),
        });
    };
}

/* ============================== CapDelegateState =============================== */

export class CapDelegateState implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CapDelegateState`;

    root: string;

    constructor(root ? : string) {
        this.root = root;
    }

    into_value() {
        return {
            root: (this.root as unknown as StructClass).into_value ? (this.root as unknown as StructClass).into_value() : this.root
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
        return CapDelegateState.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CapDelegateState.from_bcs_vector(args)
    }

    get_bcs() {
        return CapDelegateState.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CapDelegateState`
    }

    from(arg: CapDelegateState) {
        this.root = arg.root;
    }

    static from_bcs(arg: {
        root: string
    }): CapDelegateState {
        return new CapDelegateState(arg.root)
    }

    static from_bcs_vector(args: {
        root: string
    } []): CapDelegateState[] {
        return args.map(function(arg) {
            return new CapDelegateState(arg.root)
        })
    }

    static get bcs() {
        return bcs_import.struct("CapDelegateState", {
            root: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CapDelegateState(val.root),
        });
    };
}

/* ============================== CapState =============================== */

export class CapState implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CapState`;

    delegates: string[];

    constructor(delegates ? : string[]) {
        this.delegates = delegates;
    }

    into_value() {
        return {
            delegates: into_arr_value(this.delegates)
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
        return CapState.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CapState.from_bcs_vector(args)
    }

    get_bcs() {
        return CapState.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CapState`
    }

    from(arg: CapState) {
        this.delegates = arg.delegates;
    }

    static from_bcs(arg: {
        delegates: string[]
    }): CapState {
        return new CapState(arg.delegates)
    }

    static from_bcs_vector(args: {
        delegates: string[]
    } []): CapState[] {
        return args.map(function(arg) {
            return new CapState(arg.delegates)
        })
    }

    static get bcs() {
        return bcs_import.struct("CapState", {
            delegates: bcs_import.vector(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            })),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CapState(val.delegates),
        });
    };
}

/* ============================== LinearCap =============================== */

export class LinearCap implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::LinearCap`;

    root: string;

    constructor(root: string) {
        this.root = root;
    }

    into_value() {
        return {
            root: (this.root as unknown as StructClass).into_value ? (this.root as unknown as StructClass).into_value() : this.root
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
        return LinearCap.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return LinearCap.from_bcs_vector(args)
    }

    get_bcs() {
        return LinearCap.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::LinearCap`
    }

    from(arg: LinearCap) {
        this.root = arg.root;
    }

    static from_bcs(arg: {
        root: string
    }): LinearCap {
        return new LinearCap(arg.root)
    }

    static from_bcs_vector(args: {
        root: string
    } []): LinearCap[] {
        return args.map(function(arg) {
            return new LinearCap(arg.root)
        })
    }

    static get bcs() {
        return bcs_import.struct("LinearCap", {
            root: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new LinearCap(val.root),
        });
    };
}

function create < T0 extends StructClass > (type_args: string[], arg0: string, arg1: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create", type_args, args);
}

function acquire < T0 extends StructClass > (type_args: string[], arg0: string, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "acquire", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function acquire_linear < T0 extends StructClass > (type_args: string[], arg0: string, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "acquire_linear", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function add_element < T0 extends StructClass > (type_args: string[], arg0: T0[], arg1: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_element", type_args, args);
    copy_arr_value(into_arr_bcs_vector(arg0).parse(new Uint8Array(a0.Raw[0])), arg0);
}

function delegate < T0 extends StructClass > (type_args: string[], arg0: Cap, arg1: T0, arg2: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "delegate", type_args, args);
}

function linear_root_addr < T0 extends StructClass > (type_args: string[], arg0: LinearCap, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "linear_root_addr", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function remove_element < T0 extends StructClass > (type_args: string[], arg0: T0[], arg1: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_element", type_args, args);
    copy_arr_value(into_arr_bcs_vector(arg0).parse(new Uint8Array(a0.Raw[0])), arg0);
}

function revoke < T0 extends StructClass > (type_args: string[], arg0: Cap, arg1: T0, arg2: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "revoke", type_args, args);
}

function root_addr < T0 extends StructClass > (type_args: string[], arg0: Cap, arg1: T0): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "root_addr", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function validate_acquire < T0 extends StructClass > (type_args: string[], arg0: string): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "validate_acquire", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

export const capability = {
    Cap,
    CapDelegateState,
    CapState,
    LinearCap,
    create,
    acquire,
    acquire_linear,
    add_element,
    delegate,
    linear_root_addr,
    remove_element,
    revoke,
    root_addr,
    validate_acquire
}