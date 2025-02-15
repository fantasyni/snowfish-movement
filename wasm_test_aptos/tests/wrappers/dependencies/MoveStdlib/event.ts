import {
    StructClass,
    U8,
    get_package_address,
    get_wasm,
    has_arr,
    into_arr_bcs_vector,
    into_arr_value,
    u64 as u64_import
} from "../../sui_wasm";
import {
    GUID
} from "./guid";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "event";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== EventHandle =============================== */

export class EventHandle implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::EventHandle`;

    counter: u64_import;
    guid: GUID;

    constructor(counter: u64_import, guid: GUID) {
        this.counter = counter;
        this.guid = guid;
    }

    into_value() {
        return {
            counter: (this.counter as unknown as StructClass).into_value ? (this.counter as unknown as StructClass).into_value() : this.counter,
            guid: (this.guid as unknown as StructClass).into_value ? (this.guid as unknown as StructClass).into_value() : this.guid
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
        return EventHandle.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return EventHandle.from_bcs_vector(args)
    }

    get_bcs() {
        return EventHandle.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::EventHandle`
    }

    from(arg: EventHandle) {
        this.counter = arg.counter;
        this.guid = arg.guid;
    }

    static from_bcs(arg: {
        counter: u64_import,
        guid: GUID
    }): EventHandle {
        return new EventHandle(arg.counter, arg.guid)
    }

    static from_bcs_vector(args: {
        counter: u64_import,
        guid: GUID
    } []): EventHandle[] {
        return args.map(function(arg) {
            return new EventHandle(arg.counter, arg.guid)
        })
    }

    static get bcs() {
        return bcs_import.struct("EventHandle", {
            counter: bcs_import.u64(),
            guid: GUID.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new EventHandle(val.counter, val.guid),
        });
    };
}

function guid < T0 extends StructClass > (type_args: string[], arg0: EventHandle): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "guid", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function counter < T0 extends StructClass > (type_args: string[], arg0: EventHandle): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "counter", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function destroy_handle < T0 extends StructClass > (type_args: string[], arg0: EventHandle) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "destroy_handle", type_args, args);
}

function emit < T0 extends StructClass > (type_args: string[], arg0: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "emit", type_args, args);
}

function emit_event < T0 extends StructClass > (type_args: string[], arg0: EventHandle, arg1: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), ""),
        wasm.new_bytes(arg1.serialize(arg1.into_value()).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "emit_event", type_args, args);
    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])) as EventHandle);
}

function new_event_handle < T0 extends StructClass > (type_args: string[], arg0: GUID): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_event_handle", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
}

function write_module_event_to_store < T0 extends StructClass > (type_args: string[], arg0: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(arg0.serialize(arg0.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "write_module_event_to_store", type_args, args);
}

function write_to_event_store < T0 extends StructClass > (type_args: string[], arg0: U8[], arg1: u64_import, arg2: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(has_arr(arg0) ? into_arr_bcs_vector(arg0).serialize(into_arr_value(arg0)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(arg2.serialize(arg2.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "write_to_event_store", type_args, args);
}

export const event = {
    EventHandle,
    guid,
    counter,
    destroy_handle,
    emit,
    emit_event,
    new_event_handle,
    write_module_event_to_store,
    write_to_event_store
}