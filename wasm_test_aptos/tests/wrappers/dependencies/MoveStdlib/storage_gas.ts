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
let MODULE_NAME: string = "storage_gas";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== GasCurve =============================== */

export class GasCurve implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::GasCurve`;

    min_gas: u64_import;
    max_gas: u64_import;
    points: Point[];

    constructor(min_gas: u64_import, max_gas: u64_import, points: Point[]) {
        this.min_gas = min_gas;
        this.max_gas = max_gas;
        this.points = points;
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
        return GasCurve.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return GasCurve.from_bcs_vector(args)
    }

    get_bcs() {
        return GasCurve.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::GasCurve`
    }

    from(arg: GasCurve) {
        this.min_gas = arg.min_gas;
        this.max_gas = arg.max_gas;
        this.points = arg.points;
    }

    static from_bcs(arg: {
        min_gas: u64_import,
        max_gas: u64_import,
        points: Point[]
    }): GasCurve {
        return new GasCurve(arg.min_gas, arg.max_gas, arg.points)
    }

    static from_bcs_vector(args: {
        min_gas: u64_import,
        max_gas: u64_import,
        points: Point[]
    } []): GasCurve[] {
        return args.map(function(arg) {
            return new GasCurve(arg.min_gas, arg.max_gas, arg.points)
        })
    }

    static get bcs() {
        return bcs_import.struct("GasCurve", {
            min_gas: bcs_import.u64(),
            max_gas: bcs_import.u64(),
            points: bcs_import.vector(Point.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new GasCurve(val.min_gas, val.max_gas, val.points),
        });
    };
}

/* ============================== Point =============================== */

export class Point implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Point`;

    x: u64_import;
    y: u64_import;

    constructor(x: u64_import, y: u64_import) {
        this.x = x;
        this.y = y;
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
        return Point.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Point.from_bcs_vector(args)
    }

    get_bcs() {
        return Point.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Point`
    }

    from(arg: Point) {
        this.x = arg.x;
        this.y = arg.y;
    }

    static from_bcs(arg: {
        x: u64_import,
        y: u64_import
    }): Point {
        return new Point(arg.x, arg.y)
    }

    static from_bcs_vector(args: {
        x: u64_import,
        y: u64_import
    } []): Point[] {
        return args.map(function(arg) {
            return new Point(arg.x, arg.y)
        })
    }

    static get bcs() {
        return bcs_import.struct("Point", {
            x: bcs_import.u64(),
            y: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Point(val.x, val.y),
        });
    };
}

/* ============================== StorageGas =============================== */

export class StorageGas implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::StorageGas`;

    per_item_read: u64_import;
    per_item_create: u64_import;
    per_item_write: u64_import;
    per_byte_read: u64_import;
    per_byte_create: u64_import;
    per_byte_write: u64_import;

    constructor(per_item_read ? : u64_import, per_item_create ? : u64_import, per_item_write ? : u64_import, per_byte_read ? : u64_import, per_byte_create ? : u64_import, per_byte_write ? : u64_import) {
        this.per_item_read = per_item_read;
        this.per_item_create = per_item_create;
        this.per_item_write = per_item_write;
        this.per_byte_read = per_byte_read;
        this.per_byte_create = per_byte_create;
        this.per_byte_write = per_byte_write;
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
        return StorageGas.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return StorageGas.from_bcs_vector(args)
    }

    get_bcs() {
        return StorageGas.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::StorageGas`
    }

    from(arg: StorageGas) {
        this.per_item_read = arg.per_item_read;
        this.per_item_create = arg.per_item_create;
        this.per_item_write = arg.per_item_write;
        this.per_byte_read = arg.per_byte_read;
        this.per_byte_create = arg.per_byte_create;
        this.per_byte_write = arg.per_byte_write;
    }

    static from_bcs(arg: {
        per_item_read: u64_import,
        per_item_create: u64_import,
        per_item_write: u64_import,
        per_byte_read: u64_import,
        per_byte_create: u64_import,
        per_byte_write: u64_import
    }): StorageGas {
        return new StorageGas(arg.per_item_read, arg.per_item_create, arg.per_item_write, arg.per_byte_read, arg.per_byte_create, arg.per_byte_write)
    }

    static from_bcs_vector(args: {
        per_item_read: u64_import,
        per_item_create: u64_import,
        per_item_write: u64_import,
        per_byte_read: u64_import,
        per_byte_create: u64_import,
        per_byte_write: u64_import
    } []): StorageGas[] {
        return args.map(function(arg) {
            return new StorageGas(arg.per_item_read, arg.per_item_create, arg.per_item_write, arg.per_byte_read, arg.per_byte_create, arg.per_byte_write)
        })
    }

    static get bcs() {
        return bcs_import.struct("StorageGas", {
            per_item_read: bcs_import.u64(),
            per_item_create: bcs_import.u64(),
            per_item_write: bcs_import.u64(),
            per_byte_read: bcs_import.u64(),
            per_byte_create: bcs_import.u64(),
            per_byte_write: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new StorageGas(val.per_item_read, val.per_item_create, val.per_item_write, val.per_byte_read, val.per_byte_create, val.per_byte_write),
        });
    };
}

/* ============================== StorageGasConfig =============================== */

export class StorageGasConfig implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::StorageGasConfig`;

    item_config: UsageGasConfig;
    byte_config: UsageGasConfig;

    constructor(item_config ? : UsageGasConfig, byte_config ? : UsageGasConfig) {
        this.item_config = item_config;
        this.byte_config = byte_config;
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
        return StorageGasConfig.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return StorageGasConfig.from_bcs_vector(args)
    }

    get_bcs() {
        return StorageGasConfig.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::StorageGasConfig`
    }

    from(arg: StorageGasConfig) {
        this.item_config = arg.item_config;
        this.byte_config = arg.byte_config;
    }

    static from_bcs(arg: {
        item_config: UsageGasConfig,
        byte_config: UsageGasConfig
    }): StorageGasConfig {
        return new StorageGasConfig(arg.item_config, arg.byte_config)
    }

    static from_bcs_vector(args: {
        item_config: UsageGasConfig,
        byte_config: UsageGasConfig
    } []): StorageGasConfig[] {
        return args.map(function(arg) {
            return new StorageGasConfig(arg.item_config, arg.byte_config)
        })
    }

    static get bcs() {
        return bcs_import.struct("StorageGasConfig", {
            item_config: UsageGasConfig.bcs,
            byte_config: UsageGasConfig.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new StorageGasConfig(val.item_config, val.byte_config),
        });
    };
}

/* ============================== UsageGasConfig =============================== */

export class UsageGasConfig implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UsageGasConfig`;

    target_usage: u64_import;
    read_curve: GasCurve;
    create_curve: GasCurve;
    write_curve: GasCurve;

    constructor(target_usage: u64_import, read_curve: GasCurve, create_curve: GasCurve, write_curve: GasCurve) {
        this.target_usage = target_usage;
        this.read_curve = read_curve;
        this.create_curve = create_curve;
        this.write_curve = write_curve;
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
        return UsageGasConfig.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UsageGasConfig.from_bcs_vector(args)
    }

    get_bcs() {
        return UsageGasConfig.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UsageGasConfig`
    }

    from(arg: UsageGasConfig) {
        this.target_usage = arg.target_usage;
        this.read_curve = arg.read_curve;
        this.create_curve = arg.create_curve;
        this.write_curve = arg.write_curve;
    }

    static from_bcs(arg: {
        target_usage: u64_import,
        read_curve: GasCurve,
        create_curve: GasCurve,
        write_curve: GasCurve
    }): UsageGasConfig {
        return new UsageGasConfig(arg.target_usage, arg.read_curve, arg.create_curve, arg.write_curve)
    }

    static from_bcs_vector(args: {
        target_usage: u64_import,
        read_curve: GasCurve,
        create_curve: GasCurve,
        write_curve: GasCurve
    } []): UsageGasConfig[] {
        return args.map(function(arg) {
            return new UsageGasConfig(arg.target_usage, arg.read_curve, arg.create_curve, arg.write_curve)
        })
    }

    static get bcs() {
        return bcs_import.struct("UsageGasConfig", {
            target_usage: bcs_import.u64(),
            read_curve: GasCurve.bcs,
            create_curve: GasCurve.bcs,
            write_curve: GasCurve.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UsageGasConfig(val.target_usage, val.read_curve, val.create_curve, val.write_curve),
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

function on_reconfig() {
    let wasm = get_wasm();

    let args: any[] = []

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "on_reconfig", [], args);

}

function base_8192_exponential_curve(arg0: u64_import, arg1: u64_import): [GasCurve] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "base_8192_exponential_curve", [], args);

    return [
        GasCurve.from_bcs(GasCurve.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function calculate_create_gas(arg0: UsageGasConfig, arg1: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UsageGasConfig.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "calculate_create_gas", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function calculate_gas(arg0: u64_import, arg1: u64_import, arg2: GasCurve): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(GasCurve.bcs.serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "calculate_gas", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function calculate_read_gas(arg0: UsageGasConfig, arg1: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UsageGasConfig.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "calculate_read_gas", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function calculate_write_gas(arg0: UsageGasConfig, arg1: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UsageGasConfig.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "calculate_write_gas", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function interpolate(arg0: u64_import, arg1: u64_import, arg2: u64_import, arg3: u64_import, arg4: u64_import): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "interpolate", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function new_gas_curve(arg0: u64_import, arg1: u64_import, arg2: Point[]): [GasCurve] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(Point.bcs).serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_gas_curve", [], args);

    return [
        GasCurve.from_bcs(GasCurve.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_point(arg0: u64_import, arg1: u64_import): [Point] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_point", [], args);

    return [
        Point.from_bcs(Point.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_storage_gas_config(arg0: UsageGasConfig, arg1: UsageGasConfig): [StorageGasConfig] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UsageGasConfig.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(UsageGasConfig.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_storage_gas_config", [], args);

    return [
        StorageGasConfig.from_bcs(StorageGasConfig.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_usage_gas_config(arg0: u64_import, arg1: GasCurve, arg2: GasCurve, arg3: GasCurve): [UsageGasConfig] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(GasCurve.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(GasCurve.bcs.serialize(arg2).toBytes(), ""),
        wasm.new_bytes(GasCurve.bcs.serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_usage_gas_config", [], args);

    return [
        UsageGasConfig.from_bcs(UsageGasConfig.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function set_config(arg0: string, arg1: StorageGasConfig) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(StorageGasConfig.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_config", [], args);

}

function validate_points(arg0: Point[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(Point.bcs).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "validate_points", [], args);

}

export const storage_gas = {
    GasCurve,
    Point,
    StorageGas,
    StorageGasConfig,
    UsageGasConfig,
    initialize,
    on_reconfig,
    base_8192_exponential_curve,
    calculate_create_gas,
    calculate_gas,
    calculate_read_gas,
    calculate_write_gas,
    interpolate,
    new_gas_curve,
    new_point,
    new_storage_gas_config,
    new_usage_gas_config,
    set_config,
    validate_points
}