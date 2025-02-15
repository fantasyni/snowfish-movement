import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    Option
} from "./option";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "randomness";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== PerBlockRandomness =============================== */

export class PerBlockRandomness implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PerBlockRandomness`;

    epoch: u64_import;
    round: u64_import;
    seed: Option < number[] > ;

    constructor(epoch ? : u64_import, round ? : u64_import, seed ? : Option < number[] > ) {
        this.epoch = epoch;
        this.round = round;
        this.seed = seed;
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
        return PerBlockRandomness.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PerBlockRandomness.from_bcs_vector(args)
    }

    get_bcs() {
        return PerBlockRandomness.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PerBlockRandomness`
    }

    from(arg: PerBlockRandomness) {
        this.epoch = arg.epoch;
        this.round = arg.round;
        this.seed = arg.seed;
    }

    static from_bcs(arg: {
        epoch: u64_import,
        round: u64_import,
        seed: Option < number[] >
    }): PerBlockRandomness {
        return new PerBlockRandomness(arg.epoch, arg.round, arg.seed)
    }

    static from_bcs_vector(args: {
        epoch: u64_import,
        round: u64_import,
        seed: Option < number[] >
    } []): PerBlockRandomness[] {
        return args.map(function(arg) {
            return new PerBlockRandomness(arg.epoch, arg.round, arg.seed)
        })
    }

    static get bcs() {
        return bcs_import.struct("PerBlockRandomness", {
            epoch: bcs_import.u64(),
            round: bcs_import.u64(),
            seed: Option.bcs(bcs_import.vector(bcs_import.u8())),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PerBlockRandomness(val.epoch, val.round, val.seed),
        });
    };
}

/* ============================== RandomnessGeneratedEvent =============================== */

export class RandomnessGeneratedEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RandomnessGeneratedEvent`;

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
        return RandomnessGeneratedEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RandomnessGeneratedEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return RandomnessGeneratedEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RandomnessGeneratedEvent`
    }

    from(arg: RandomnessGeneratedEvent) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): RandomnessGeneratedEvent {
        return new RandomnessGeneratedEvent(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): RandomnessGeneratedEvent[] {
        return args.map(function(arg) {
            return new RandomnessGeneratedEvent(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("RandomnessGeneratedEvent", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RandomnessGeneratedEvent(val.dummy_field),
        });
    };
}

function bytes(arg0: u64_import): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
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

function on_new_block(arg0: string, arg1: u64_import, arg2: u64_import, arg3: Option < number[] > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(Option.bcs(bcs_import.vector(bcs_import.u8())).serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "on_new_block", [], args);

}

function fetch_and_increment_txn_counter(): [number[]] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "fetch_and_increment_txn_counter", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function is_unbiasable(): [boolean] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_unbiasable", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function next_32_bytes(): [number[]] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "next_32_bytes", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function permutation(arg0: u64_import): [u64_import[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "permutation", [], args);

    return [
        bcs_import.vector(bcs_import.u64()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function u128_integer(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "u128_integer", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function u128_range(arg0: u64_import, arg1: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u128().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "u128_range", [], args);

    return [
        bcs_import.u128().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function u16_integer(): [number] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "u16_integer", [], args);

    return [
        bcs_import.u16().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function u16_range(arg0: number, arg1: number): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u16().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u16().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "u16_range", [], args);

    return [
        bcs_import.u16().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function u256_integer(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "u256_integer", [], args);

    return [
        bcs_import.u256().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function u256_integer_internal(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "u256_integer_internal", [], args);

    return [
        bcs_import.u256().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function u256_range(arg0: u64_import, arg1: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u256().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u256().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "u256_range", [], args);

    return [
        bcs_import.u256().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function u32_integer(): [number] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "u32_integer", [], args);

    return [
        bcs_import.u32().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function u32_range(arg0: number, arg1: number): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u32().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u32().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "u32_range", [], args);

    return [
        bcs_import.u32().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function u64_integer(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "u64_integer", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function u64_range(arg0: u64_import, arg1: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "u64_range", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function u64_range_internal(arg0: u64_import, arg1: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "u64_range_internal", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function u8_integer(): [number] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "u8_integer", [], args);

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function u8_range(arg0: number, arg1: number): [number] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u8().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "u8_range", [], args);

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

export const randomness = {
    PerBlockRandomness,
    RandomnessGeneratedEvent,
    bytes,
    initialize,
    on_new_block,
    fetch_and_increment_txn_counter,
    is_unbiasable,
    next_32_bytes,
    permutation,
    u128_integer,
    u128_range,
    u16_integer,
    u16_range,
    u256_integer,
    u256_integer_internal,
    u256_range,
    u32_integer,
    u32_range,
    u64_integer,
    u64_range,
    u64_range_internal,
    u8_integer,
    u8_range
}