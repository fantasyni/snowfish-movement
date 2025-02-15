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
let MODULE_NAME: string = "keyless_account";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Configuration =============================== */

export class Configuration implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Configuration`;

    override_aud_vals: string[];
    max_signatures_per_txn: number;
    max_exp_horizon_secs: u64_import;
    training_wheels_pubkey: Option < number[] > ;
    max_commited_epk_bytes: number;
    max_iss_val_bytes: number;
    max_extra_field_bytes: number;
    max_jwt_header_b64_bytes: number;

    constructor(override_aud_vals ? : string[], max_signatures_per_txn ? : number, max_exp_horizon_secs ? : u64_import, training_wheels_pubkey ? : Option < number[] > , max_commited_epk_bytes ? : number, max_iss_val_bytes ? : number, max_extra_field_bytes ? : number, max_jwt_header_b64_bytes ? : number) {
        this.override_aud_vals = override_aud_vals;
        this.max_signatures_per_txn = max_signatures_per_txn;
        this.max_exp_horizon_secs = max_exp_horizon_secs;
        this.training_wheels_pubkey = training_wheels_pubkey;
        this.max_commited_epk_bytes = max_commited_epk_bytes;
        this.max_iss_val_bytes = max_iss_val_bytes;
        this.max_extra_field_bytes = max_extra_field_bytes;
        this.max_jwt_header_b64_bytes = max_jwt_header_b64_bytes;
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
        return Configuration.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Configuration.from_bcs_vector(args)
    }

    get_bcs() {
        return Configuration.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Configuration`
    }

    from(arg: Configuration) {
        this.override_aud_vals = arg.override_aud_vals;
        this.max_signatures_per_txn = arg.max_signatures_per_txn;
        this.max_exp_horizon_secs = arg.max_exp_horizon_secs;
        this.training_wheels_pubkey = arg.training_wheels_pubkey;
        this.max_commited_epk_bytes = arg.max_commited_epk_bytes;
        this.max_iss_val_bytes = arg.max_iss_val_bytes;
        this.max_extra_field_bytes = arg.max_extra_field_bytes;
        this.max_jwt_header_b64_bytes = arg.max_jwt_header_b64_bytes;
    }

    static from_bcs(arg: {
        override_aud_vals: string[],
        max_signatures_per_txn: number,
        max_exp_horizon_secs: u64_import,
        training_wheels_pubkey: Option < number[] > ,
        max_commited_epk_bytes: number,
        max_iss_val_bytes: number,
        max_extra_field_bytes: number,
        max_jwt_header_b64_bytes: number
    }): Configuration {
        return new Configuration(arg.override_aud_vals, arg.max_signatures_per_txn, arg.max_exp_horizon_secs, arg.training_wheels_pubkey, arg.max_commited_epk_bytes, arg.max_iss_val_bytes, arg.max_extra_field_bytes, arg.max_jwt_header_b64_bytes)
    }

    static from_bcs_vector(args: {
        override_aud_vals: string[],
        max_signatures_per_txn: number,
        max_exp_horizon_secs: u64_import,
        training_wheels_pubkey: Option < number[] > ,
        max_commited_epk_bytes: number,
        max_iss_val_bytes: number,
        max_extra_field_bytes: number,
        max_jwt_header_b64_bytes: number
    } []): Configuration[] {
        return args.map(function(arg) {
            return new Configuration(arg.override_aud_vals, arg.max_signatures_per_txn, arg.max_exp_horizon_secs, arg.training_wheels_pubkey, arg.max_commited_epk_bytes, arg.max_iss_val_bytes, arg.max_extra_field_bytes, arg.max_jwt_header_b64_bytes)
        })
    }

    static get bcs() {
        return bcs_import.struct("Configuration", {
            override_aud_vals: bcs_import.vector(bcs_import.string()),
            max_signatures_per_txn: bcs_import.u16(),
            max_exp_horizon_secs: bcs_import.u64(),
            training_wheels_pubkey: Option.bcs(bcs_import.vector(bcs_import.u8())),
            max_commited_epk_bytes: bcs_import.u16(),
            max_iss_val_bytes: bcs_import.u16(),
            max_extra_field_bytes: bcs_import.u16(),
            max_jwt_header_b64_bytes: bcs_import.u32(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Configuration(val.override_aud_vals, val.max_signatures_per_txn, val.max_exp_horizon_secs, val.training_wheels_pubkey, val.max_commited_epk_bytes, val.max_iss_val_bytes, val.max_extra_field_bytes, val.max_jwt_header_b64_bytes),
        });
    };
}

/* ============================== Groth16VerificationKey =============================== */

export class Groth16VerificationKey implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Groth16VerificationKey`;

    alpha_g1: number[];
    beta_g2: number[];
    gamma_g2: number[];
    delta_g2: number[];
    gamma_abc_g1: number[][];

    constructor(alpha_g1 ? : number[], beta_g2 ? : number[], gamma_g2 ? : number[], delta_g2 ? : number[], gamma_abc_g1 ? : number[][]) {
        this.alpha_g1 = alpha_g1;
        this.beta_g2 = beta_g2;
        this.gamma_g2 = gamma_g2;
        this.delta_g2 = delta_g2;
        this.gamma_abc_g1 = gamma_abc_g1;
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
        return Groth16VerificationKey.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Groth16VerificationKey.from_bcs_vector(args)
    }

    get_bcs() {
        return Groth16VerificationKey.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Groth16VerificationKey`
    }

    from(arg: Groth16VerificationKey) {
        this.alpha_g1 = arg.alpha_g1;
        this.beta_g2 = arg.beta_g2;
        this.gamma_g2 = arg.gamma_g2;
        this.delta_g2 = arg.delta_g2;
        this.gamma_abc_g1 = arg.gamma_abc_g1;
    }

    static from_bcs(arg: {
        alpha_g1: number[],
        beta_g2: number[],
        gamma_g2: number[],
        delta_g2: number[],
        gamma_abc_g1: number[][]
    }): Groth16VerificationKey {
        return new Groth16VerificationKey(arg.alpha_g1, arg.beta_g2, arg.gamma_g2, arg.delta_g2, arg.gamma_abc_g1)
    }

    static from_bcs_vector(args: {
        alpha_g1: number[],
        beta_g2: number[],
        gamma_g2: number[],
        delta_g2: number[],
        gamma_abc_g1: number[][]
    } []): Groth16VerificationKey[] {
        return args.map(function(arg) {
            return new Groth16VerificationKey(arg.alpha_g1, arg.beta_g2, arg.gamma_g2, arg.delta_g2, arg.gamma_abc_g1)
        })
    }

    static get bcs() {
        return bcs_import.struct("Groth16VerificationKey", {
            alpha_g1: bcs_import.vector(bcs_import.u8()),
            beta_g2: bcs_import.vector(bcs_import.u8()),
            gamma_g2: bcs_import.vector(bcs_import.u8()),
            delta_g2: bcs_import.vector(bcs_import.u8()),
            gamma_abc_g1: bcs_import.vector(bcs_import.vector(bcs_import.u8())),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Groth16VerificationKey(val.alpha_g1, val.beta_g2, val.gamma_g2, val.delta_g2, val.gamma_abc_g1),
        });
    };
}

/* ============================== Group =============================== */

export class Group implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Group`;

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
        return Group.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Group.from_bcs_vector(args)
    }

    get_bcs() {
        return Group.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Group`
    }

    from(arg: Group) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): Group {
        return new Group(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): Group[] {
        return args.map(function(arg) {
            return new Group(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("Group", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Group(val.dummy_field),
        });
    };
}

function on_new_epoch(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "on_new_epoch", [], args);

}

function add_override_aud(arg0: string, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_override_aud", [], args);

}

function add_override_aud_for_next_epoch(arg0: string, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.string().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "add_override_aud_for_next_epoch", [], args);

}

function new_configuration(arg0: string[], arg1: number, arg2: u64_import, arg3: Option < number[] > , arg4: number, arg5: number, arg6: number, arg7: number): [Configuration] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.string()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u16().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(Option.bcs(bcs_import.vector(bcs_import.u8())).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u16().serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.u16().serialize(arg5).toBytes(), ""),
        wasm.new_bytes(bcs_import.u16().serialize(arg6).toBytes(), ""),
        wasm.new_bytes(bcs_import.u32().serialize(arg7).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_configuration", [], args);

    return [
        Configuration.from_bcs(Configuration.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function new_groth16_verification_key(arg0: number[], arg1: number[], arg2: number[], arg3: number[], arg4: number[][]): [Groth16VerificationKey] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg4).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_groth16_verification_key", [], args);

    return [
        Groth16VerificationKey.from_bcs(Groth16VerificationKey.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function remove_all_override_auds(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_all_override_auds", [], args);

}

function remove_all_override_auds_for_next_epoch(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "remove_all_override_auds_for_next_epoch", [], args);

}

function set_configuration_for_next_epoch(arg0: string, arg1: Configuration) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Configuration.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_configuration_for_next_epoch", [], args);

}

function set_groth16_verification_key_for_next_epoch(arg0: string, arg1: Groth16VerificationKey) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Groth16VerificationKey.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_groth16_verification_key_for_next_epoch", [], args);

}

function update_configuration(arg0: string, arg1: Configuration) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Configuration.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_configuration", [], args);

}

function update_groth16_verification_key(arg0: string, arg1: Groth16VerificationKey) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Groth16VerificationKey.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_groth16_verification_key", [], args);

}

function update_max_exp_horizon(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_max_exp_horizon", [], args);

}

function update_max_exp_horizon_for_next_epoch(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_max_exp_horizon_for_next_epoch", [], args);

}

function update_training_wheels(arg0: string, arg1: Option < number[] > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Option.bcs(bcs_import.vector(bcs_import.u8())).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_training_wheels", [], args);

}

function update_training_wheels_for_next_epoch(arg0: string, arg1: Option < number[] > ) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Option.bcs(bcs_import.vector(bcs_import.u8())).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_training_wheels_for_next_epoch", [], args);

}

function validate_groth16_vk(arg0: Groth16VerificationKey) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(Groth16VerificationKey.bcs.serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "validate_groth16_vk", [], args);

}

export const keyless_account = {
    Configuration,
    Groth16VerificationKey,
    Group,
    on_new_epoch,
    add_override_aud,
    add_override_aud_for_next_epoch,
    new_configuration,
    new_groth16_verification_key,
    remove_all_override_auds,
    remove_all_override_auds_for_next_epoch,
    set_configuration_for_next_epoch,
    set_groth16_verification_key_for_next_epoch,
    update_configuration,
    update_groth16_verification_key,
    update_max_exp_horizon,
    update_max_exp_horizon_for_next_epoch,
    update_training_wheels,
    update_training_wheels_for_next_epoch,
    validate_groth16_vk
}