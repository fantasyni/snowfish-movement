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
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "reconfiguration_state";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== State =============================== */

export class State implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::State`;

    variant: Any;

    constructor(variant ? : Any) {
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
        return State.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return State.from_bcs_vector(args)
    }

    get_bcs() {
        return State.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::State`
    }

    from(arg: State) {
        this.variant = arg.variant;
    }

    static from_bcs(arg: {
        variant: Any
    }): State {
        return new State(arg.variant)
    }

    static from_bcs_vector(args: {
        variant: Any
    } []): State[] {
        return args.map(function(arg) {
            return new State(arg.variant)
        })
    }

    static get bcs() {
        return bcs_import.struct("State", {
            variant: Any.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new State(val.variant),
        });
    };
}

/* ============================== StateActive =============================== */

export class StateActive implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::StateActive`;

    start_time_secs: u64_import;

    constructor(start_time_secs: u64_import) {
        this.start_time_secs = start_time_secs;
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
        return StateActive.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return StateActive.from_bcs_vector(args)
    }

    get_bcs() {
        return StateActive.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::StateActive`
    }

    from(arg: StateActive) {
        this.start_time_secs = arg.start_time_secs;
    }

    static from_bcs(arg: {
        start_time_secs: u64_import
    }): StateActive {
        return new StateActive(arg.start_time_secs)
    }

    static from_bcs_vector(args: {
        start_time_secs: u64_import
    } []): StateActive[] {
        return args.map(function(arg) {
            return new StateActive(arg.start_time_secs)
        })
    }

    static get bcs() {
        return bcs_import.struct("StateActive", {
            start_time_secs: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new StateActive(val.start_time_secs),
        });
    };
}

/* ============================== StateInactive =============================== */

export class StateInactive implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::StateInactive`;

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
        return StateInactive.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return StateInactive.from_bcs_vector(args)
    }

    get_bcs() {
        return StateInactive.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::StateInactive`
    }

    from(arg: StateInactive) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): StateInactive {
        return new StateInactive(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): StateInactive[] {
        return args.map(function(arg) {
            return new StateInactive(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("StateInactive", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new StateInactive(val.dummy_field),
        });
    };
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

function initialize_for_testing(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_for_testing", [], args);

}

function is_in_progress(): [boolean] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_in_progress", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function is_initialized(): [boolean] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_initialized", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function on_reconfig_finish() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "on_reconfig_finish", [], args);

}

function on_reconfig_start() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "on_reconfig_start", [], args);

}

function start_time_secs(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "start_time_secs", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const reconfiguration_state = {
    State,
    StateActive,
    StateInactive,
    initialize,
    initialize_for_testing,
    is_in_progress,
    is_initialized,
    on_reconfig_finish,
    on_reconfig_start,
    start_time_secs
}