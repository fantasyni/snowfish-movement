import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    Aggregator
} from "./aggregator";
import {
    Table
} from "./table";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "aggregator_factory";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== AggregatorFactory =============================== */

export class AggregatorFactory implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AggregatorFactory`;

    phantom_table: Table;

    constructor(phantom_table ? : Table) {
        this.phantom_table = phantom_table;
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
        return AggregatorFactory.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AggregatorFactory.from_bcs_vector(args)
    }

    get_bcs() {
        return AggregatorFactory.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AggregatorFactory`
    }

    from(arg: AggregatorFactory) {
        this.phantom_table = arg.phantom_table;
    }

    static from_bcs(arg: {
        phantom_table: Table
    }): AggregatorFactory {
        return new AggregatorFactory(arg.phantom_table)
    }

    static from_bcs_vector(args: {
        phantom_table: Table
    } []): AggregatorFactory[] {
        return args.map(function(arg) {
            return new AggregatorFactory(arg.phantom_table)
        })
    }

    static get bcs() {
        return bcs_import.struct("AggregatorFactory", {
            phantom_table: Table.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AggregatorFactory(val.phantom_table),
        });
    };
}

function create_aggregator(arg0: string, arg1: u64_import): [Aggregator] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_aggregator", [], args);

    return [
        Aggregator.from_bcs(Aggregator.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create_aggregator_internal(arg0: u64_import): [Aggregator] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u128().serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_aggregator_internal", [], args);

    return [
        Aggregator.from_bcs(Aggregator.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function initialize_aggregator_factory(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_aggregator_factory", [], args);

}

function new_aggregator(arg0: AggregatorFactory, arg1: u64_import): [Aggregator] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(AggregatorFactory.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u128().serialize(arg1).toBytes(), "")
    ]

    let [r0, a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_aggregator", [], args);

    arg0.from(arg0.from_bcs_t(new Uint8Array(a0.Raw[0])));

    return [
        Aggregator.from_bcs(Aggregator.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const aggregator_factory = {
    AggregatorFactory,
    create_aggregator,
    create_aggregator_internal,
    initialize_aggregator_factory,
    new_aggregator
}