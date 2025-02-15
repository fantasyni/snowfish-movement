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
    Object_
} from "./object";
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
let MODULE_NAME: string = "code";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== AllowedDep =============================== */

export class AllowedDep implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AllowedDep`;

    account: string;
    module_name: string;

    constructor(account: string, module_name: string) {
        this.account = account;
        this.module_name = module_name;
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
        return AllowedDep.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AllowedDep.from_bcs_vector(args)
    }

    get_bcs() {
        return AllowedDep.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AllowedDep`
    }

    from(arg: AllowedDep) {
        this.account = arg.account;
        this.module_name = arg.module_name;
    }

    static from_bcs(arg: {
        account: string,
        module_name: string
    }): AllowedDep {
        return new AllowedDep(arg.account, arg.module_name)
    }

    static from_bcs_vector(args: {
        account: string,
        module_name: string
    } []): AllowedDep[] {
        return args.map(function(arg) {
            return new AllowedDep(arg.account, arg.module_name)
        })
    }

    static get bcs() {
        return bcs_import.struct("AllowedDep", {
            account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            module_name: bcs_import.string(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AllowedDep(val.account, val.module_name),
        });
    };
}

/* ============================== ModuleMetadata =============================== */

export class ModuleMetadata implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ModuleMetadata`;

    name: string;
    source: number[];
    source_map: number[];
    extension: Option < Any > ;

    constructor(name: string, source: number[], source_map: number[], extension: Option < Any > ) {
        this.name = name;
        this.source = source;
        this.source_map = source_map;
        this.extension = extension;
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
        return ModuleMetadata.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ModuleMetadata.from_bcs_vector(args)
    }

    get_bcs() {
        return ModuleMetadata.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ModuleMetadata`
    }

    from(arg: ModuleMetadata) {
        this.name = arg.name;
        this.source = arg.source;
        this.source_map = arg.source_map;
        this.extension = arg.extension;
    }

    static from_bcs(arg: {
        name: string,
        source: number[],
        source_map: number[],
        extension: Option < Any >
    }): ModuleMetadata {
        return new ModuleMetadata(arg.name, arg.source, arg.source_map, arg.extension)
    }

    static from_bcs_vector(args: {
        name: string,
        source: number[],
        source_map: number[],
        extension: Option < Any >
    } []): ModuleMetadata[] {
        return args.map(function(arg) {
            return new ModuleMetadata(arg.name, arg.source, arg.source_map, arg.extension)
        })
    }

    static get bcs() {
        return bcs_import.struct("ModuleMetadata", {
            name: bcs_import.string(),
            source: bcs_import.vector(bcs_import.u8()),
            source_map: bcs_import.vector(bcs_import.u8()),
            extension: Option.bcs(Any.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ModuleMetadata(val.name, val.source, val.source_map, val.extension),
        });
    };
}

/* ============================== PackageDep =============================== */

export class PackageDep implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PackageDep`;

    account: string;
    package_name: string;

    constructor(account: string, package_name: string) {
        this.account = account;
        this.package_name = package_name;
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
        return PackageDep.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PackageDep.from_bcs_vector(args)
    }

    get_bcs() {
        return PackageDep.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PackageDep`
    }

    from(arg: PackageDep) {
        this.account = arg.account;
        this.package_name = arg.package_name;
    }

    static from_bcs(arg: {
        account: string,
        package_name: string
    }): PackageDep {
        return new PackageDep(arg.account, arg.package_name)
    }

    static from_bcs_vector(args: {
        account: string,
        package_name: string
    } []): PackageDep[] {
        return args.map(function(arg) {
            return new PackageDep(arg.account, arg.package_name)
        })
    }

    static get bcs() {
        return bcs_import.struct("PackageDep", {
            account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            package_name: bcs_import.string(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PackageDep(val.account, val.package_name),
        });
    };
}

/* ============================== PackageMetadata =============================== */

export class PackageMetadata implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PackageMetadata`;

    name: string;
    upgrade_policy: UpgradePolicy;
    upgrade_number: u64_import;
    source_digest: string;
    manifest: number[];
    modules: ModuleMetadata[];
    deps: PackageDep[];
    extension: Option < Any > ;

    constructor(name: string, upgrade_policy: UpgradePolicy, upgrade_number: u64_import, source_digest: string, manifest: number[], modules: ModuleMetadata[], deps: PackageDep[], extension: Option < Any > ) {
        this.name = name;
        this.upgrade_policy = upgrade_policy;
        this.upgrade_number = upgrade_number;
        this.source_digest = source_digest;
        this.manifest = manifest;
        this.modules = modules;
        this.deps = deps;
        this.extension = extension;
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
        return PackageMetadata.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PackageMetadata.from_bcs_vector(args)
    }

    get_bcs() {
        return PackageMetadata.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PackageMetadata`
    }

    from(arg: PackageMetadata) {
        this.name = arg.name;
        this.upgrade_policy = arg.upgrade_policy;
        this.upgrade_number = arg.upgrade_number;
        this.source_digest = arg.source_digest;
        this.manifest = arg.manifest;
        this.modules = arg.modules;
        this.deps = arg.deps;
        this.extension = arg.extension;
    }

    static from_bcs(arg: {
        name: string,
        upgrade_policy: UpgradePolicy,
        upgrade_number: u64_import,
        source_digest: string,
        manifest: number[],
        modules: ModuleMetadata[],
        deps: PackageDep[],
        extension: Option < Any >
    }): PackageMetadata {
        return new PackageMetadata(arg.name, arg.upgrade_policy, arg.upgrade_number, arg.source_digest, arg.manifest, arg.modules, arg.deps, arg.extension)
    }

    static from_bcs_vector(args: {
        name: string,
        upgrade_policy: UpgradePolicy,
        upgrade_number: u64_import,
        source_digest: string,
        manifest: number[],
        modules: ModuleMetadata[],
        deps: PackageDep[],
        extension: Option < Any >
    } []): PackageMetadata[] {
        return args.map(function(arg) {
            return new PackageMetadata(arg.name, arg.upgrade_policy, arg.upgrade_number, arg.source_digest, arg.manifest, arg.modules, arg.deps, arg.extension)
        })
    }

    static get bcs() {
        return bcs_import.struct("PackageMetadata", {
            name: bcs_import.string(),
            upgrade_policy: UpgradePolicy.bcs,
            upgrade_number: bcs_import.u64(),
            source_digest: bcs_import.string(),
            manifest: bcs_import.vector(bcs_import.u8()),
            modules: bcs_import.vector(ModuleMetadata.bcs),
            deps: bcs_import.vector(PackageDep.bcs),
            extension: Option.bcs(Any.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PackageMetadata(val.name, val.upgrade_policy, val.upgrade_number, val.source_digest, val.manifest, val.modules, val.deps, val.extension),
        });
    };
}

/* ============================== PackageRegistry =============================== */

export class PackageRegistry implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PackageRegistry`;

    packages: PackageMetadata[];

    constructor(packages ? : PackageMetadata[]) {
        this.packages = packages;
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
        return PackageRegistry.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PackageRegistry.from_bcs_vector(args)
    }

    get_bcs() {
        return PackageRegistry.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PackageRegistry`
    }

    from(arg: PackageRegistry) {
        this.packages = arg.packages;
    }

    static from_bcs(arg: {
        packages: PackageMetadata[]
    }): PackageRegistry {
        return new PackageRegistry(arg.packages)
    }

    static from_bcs_vector(args: {
        packages: PackageMetadata[]
    } []): PackageRegistry[] {
        return args.map(function(arg) {
            return new PackageRegistry(arg.packages)
        })
    }

    static get bcs() {
        return bcs_import.struct("PackageRegistry", {
            packages: bcs_import.vector(PackageMetadata.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PackageRegistry(val.packages),
        });
    };
}

/* ============================== PublishPackage =============================== */

export class PublishPackage implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::PublishPackage`;

    code_address: string;
    is_upgrade: boolean;

    constructor(code_address: string, is_upgrade: boolean) {
        this.code_address = code_address;
        this.is_upgrade = is_upgrade;
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
        return PublishPackage.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return PublishPackage.from_bcs_vector(args)
    }

    get_bcs() {
        return PublishPackage.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::PublishPackage`
    }

    from(arg: PublishPackage) {
        this.code_address = arg.code_address;
        this.is_upgrade = arg.is_upgrade;
    }

    static from_bcs(arg: {
        code_address: string,
        is_upgrade: boolean
    }): PublishPackage {
        return new PublishPackage(arg.code_address, arg.is_upgrade)
    }

    static from_bcs_vector(args: {
        code_address: string,
        is_upgrade: boolean
    } []): PublishPackage[] {
        return args.map(function(arg) {
            return new PublishPackage(arg.code_address, arg.is_upgrade)
        })
    }

    static get bcs() {
        return bcs_import.struct("PublishPackage", {
            code_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            is_upgrade: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new PublishPackage(val.code_address, val.is_upgrade),
        });
    };
}

/* ============================== UpgradePolicy =============================== */

export class UpgradePolicy implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::UpgradePolicy`;

    policy: number;

    constructor(policy: number) {
        this.policy = policy;
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
        return UpgradePolicy.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return UpgradePolicy.from_bcs_vector(args)
    }

    get_bcs() {
        return UpgradePolicy.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::UpgradePolicy`
    }

    from(arg: UpgradePolicy) {
        this.policy = arg.policy;
    }

    static from_bcs(arg: {
        policy: number
    }): UpgradePolicy {
        return new UpgradePolicy(arg.policy)
    }

    static from_bcs_vector(args: {
        policy: number
    } []): UpgradePolicy[] {
        return args.map(function(arg) {
            return new UpgradePolicy(arg.policy)
        })
    }

    static get bcs() {
        return bcs_import.struct("UpgradePolicy", {
            policy: bcs_import.u8(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new UpgradePolicy(val.policy),
        });
    };
}

function initialize(arg0: string, arg1: string, arg2: PackageMetadata) {
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
        wasm.new_bytes(PackageMetadata.bcs.serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize", [], args);

}

function can_change_upgrade_policy_to(arg0: UpgradePolicy, arg1: UpgradePolicy): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(UpgradePolicy.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(UpgradePolicy.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "can_change_upgrade_policy_to", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function check_coexistence(arg0: PackageMetadata, arg1: string[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(PackageMetadata.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.string()).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "check_coexistence", [], args);

}

function check_dependencies(arg0: string, arg1: PackageMetadata): [AllowedDep[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(PackageMetadata.bcs.serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "check_dependencies", [], args);

    return [
        AllowedDep.from_bcs_vector(bcs_import.vector(AllowedDep.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function check_upgradability(arg0: PackageMetadata, arg1: PackageMetadata, arg2: string[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(PackageMetadata.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(PackageMetadata.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.string()).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "check_upgradability", [], args);

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

function get_module_names(arg0: PackageMetadata): [string[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(PackageMetadata.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_module_names", [], args);

    return [
        bcs_import.string()(bcs_import.vector(bcs_import.string()).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function is_policy_exempted_address(arg0: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_policy_exempted_address", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function publish_package(arg0: string, arg1: PackageMetadata, arg2: number[][]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(PackageMetadata.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "publish_package", [], args);

}

function publish_package_txn(arg0: string, arg1: number[], arg2: number[][]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "publish_package_txn", [], args);

}

function request_publish(arg0: string, arg1: string[], arg2: number[][], arg3: number) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.string()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "request_publish", [], args);

}

function request_publish_with_allowed_deps(arg0: string, arg1: string[], arg2: AllowedDep[], arg3: number[][], arg4: number) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.string()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(AllowedDep.bcs).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg4).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "request_publish_with_allowed_deps", [], args);

}

function upgrade_policy_arbitrary(): [UpgradePolicy] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upgrade_policy_arbitrary", [], args);

    return [
        UpgradePolicy.from_bcs(UpgradePolicy.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function upgrade_policy_compat(): [UpgradePolicy] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upgrade_policy_compat", [], args);

    return [
        UpgradePolicy.from_bcs(UpgradePolicy.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function upgrade_policy_immutable(): [UpgradePolicy] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "upgrade_policy_immutable", [], args);

    return [
        UpgradePolicy.from_bcs(UpgradePolicy.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const code = {
    AllowedDep,
    ModuleMetadata,
    PackageDep,
    PackageMetadata,
    PackageRegistry,
    PublishPackage,
    UpgradePolicy,
    initialize,
    can_change_upgrade_policy_to,
    check_coexistence,
    check_dependencies,
    check_upgradability,
    freeze_code_object,
    get_module_names,
    is_policy_exempted_address,
    publish_package,
    publish_package_txn,
    request_publish,
    request_publish_with_allowed_deps,
    upgrade_policy_arbitrary,
    upgrade_policy_compat,
    upgrade_policy_immutable
}