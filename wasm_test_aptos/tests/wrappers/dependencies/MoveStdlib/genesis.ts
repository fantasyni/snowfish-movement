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
let MODULE_NAME: string = "genesis";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== AccountMap =============================== */

export class AccountMap implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AccountMap`;

    account_address: string;
    balance: u64_import;

    constructor(account_address: string, balance: u64_import) {
        this.account_address = account_address;
        this.balance = balance;
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
        return AccountMap.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AccountMap.from_bcs_vector(args)
    }

    get_bcs() {
        return AccountMap.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AccountMap`
    }

    from(arg: AccountMap) {
        this.account_address = arg.account_address;
        this.balance = arg.balance;
    }

    static from_bcs(arg: {
        account_address: string,
        balance: u64_import
    }): AccountMap {
        return new AccountMap(arg.account_address, arg.balance)
    }

    static from_bcs_vector(args: {
        account_address: string,
        balance: u64_import
    } []): AccountMap[] {
        return args.map(function(arg) {
            return new AccountMap(arg.account_address, arg.balance)
        })
    }

    static get bcs() {
        return bcs_import.struct("AccountMap", {
            account_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            balance: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AccountMap(val.account_address, val.balance),
        });
    };
}

/* ============================== EmployeeAccountMap =============================== */

export class EmployeeAccountMap implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::EmployeeAccountMap`;

    accounts: string[];
    validator: ValidatorConfigurationWithCommission;
    vesting_schedule_numerator: u64_import[];
    vesting_schedule_denominator: u64_import;
    beneficiary_resetter: string;

    constructor(accounts: string[], validator: ValidatorConfigurationWithCommission, vesting_schedule_numerator: u64_import[], vesting_schedule_denominator: u64_import, beneficiary_resetter: string) {
        this.accounts = accounts;
        this.validator = validator;
        this.vesting_schedule_numerator = vesting_schedule_numerator;
        this.vesting_schedule_denominator = vesting_schedule_denominator;
        this.beneficiary_resetter = beneficiary_resetter;
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
        return EmployeeAccountMap.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return EmployeeAccountMap.from_bcs_vector(args)
    }

    get_bcs() {
        return EmployeeAccountMap.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::EmployeeAccountMap`
    }

    from(arg: EmployeeAccountMap) {
        this.accounts = arg.accounts;
        this.validator = arg.validator;
        this.vesting_schedule_numerator = arg.vesting_schedule_numerator;
        this.vesting_schedule_denominator = arg.vesting_schedule_denominator;
        this.beneficiary_resetter = arg.beneficiary_resetter;
    }

    static from_bcs(arg: {
        accounts: string[],
        validator: ValidatorConfigurationWithCommission,
        vesting_schedule_numerator: u64_import[],
        vesting_schedule_denominator: u64_import,
        beneficiary_resetter: string
    }): EmployeeAccountMap {
        return new EmployeeAccountMap(arg.accounts, arg.validator, arg.vesting_schedule_numerator, arg.vesting_schedule_denominator, arg.beneficiary_resetter)
    }

    static from_bcs_vector(args: {
        accounts: string[],
        validator: ValidatorConfigurationWithCommission,
        vesting_schedule_numerator: u64_import[],
        vesting_schedule_denominator: u64_import,
        beneficiary_resetter: string
    } []): EmployeeAccountMap[] {
        return args.map(function(arg) {
            return new EmployeeAccountMap(arg.accounts, arg.validator, arg.vesting_schedule_numerator, arg.vesting_schedule_denominator, arg.beneficiary_resetter)
        })
    }

    static get bcs() {
        return bcs_import.struct("EmployeeAccountMap", {
            accounts: bcs_import.vector(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            })),
            validator: ValidatorConfigurationWithCommission.bcs,
            vesting_schedule_numerator: bcs_import.vector(bcs_import.u64()),
            vesting_schedule_denominator: bcs_import.u64(),
            beneficiary_resetter: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new EmployeeAccountMap(val.accounts, val.validator, val.vesting_schedule_numerator, val.vesting_schedule_denominator, val.beneficiary_resetter),
        });
    };
}

/* ============================== ValidatorConfiguration =============================== */

export class ValidatorConfiguration implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ValidatorConfiguration`;

    owner_address: string;
    operator_address: string;
    voter_address: string;
    stake_amount: u64_import;
    consensus_pubkey: number[];
    proof_of_possession: number[];
    network_addresses: number[];
    full_node_network_addresses: number[];

    constructor(owner_address: string, operator_address: string, voter_address: string, stake_amount: u64_import, consensus_pubkey: number[], proof_of_possession: number[], network_addresses: number[], full_node_network_addresses: number[]) {
        this.owner_address = owner_address;
        this.operator_address = operator_address;
        this.voter_address = voter_address;
        this.stake_amount = stake_amount;
        this.consensus_pubkey = consensus_pubkey;
        this.proof_of_possession = proof_of_possession;
        this.network_addresses = network_addresses;
        this.full_node_network_addresses = full_node_network_addresses;
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
        return ValidatorConfiguration.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ValidatorConfiguration.from_bcs_vector(args)
    }

    get_bcs() {
        return ValidatorConfiguration.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ValidatorConfiguration`
    }

    from(arg: ValidatorConfiguration) {
        this.owner_address = arg.owner_address;
        this.operator_address = arg.operator_address;
        this.voter_address = arg.voter_address;
        this.stake_amount = arg.stake_amount;
        this.consensus_pubkey = arg.consensus_pubkey;
        this.proof_of_possession = arg.proof_of_possession;
        this.network_addresses = arg.network_addresses;
        this.full_node_network_addresses = arg.full_node_network_addresses;
    }

    static from_bcs(arg: {
        owner_address: string,
        operator_address: string,
        voter_address: string,
        stake_amount: u64_import,
        consensus_pubkey: number[],
        proof_of_possession: number[],
        network_addresses: number[],
        full_node_network_addresses: number[]
    }): ValidatorConfiguration {
        return new ValidatorConfiguration(arg.owner_address, arg.operator_address, arg.voter_address, arg.stake_amount, arg.consensus_pubkey, arg.proof_of_possession, arg.network_addresses, arg.full_node_network_addresses)
    }

    static from_bcs_vector(args: {
        owner_address: string,
        operator_address: string,
        voter_address: string,
        stake_amount: u64_import,
        consensus_pubkey: number[],
        proof_of_possession: number[],
        network_addresses: number[],
        full_node_network_addresses: number[]
    } []): ValidatorConfiguration[] {
        return args.map(function(arg) {
            return new ValidatorConfiguration(arg.owner_address, arg.operator_address, arg.voter_address, arg.stake_amount, arg.consensus_pubkey, arg.proof_of_possession, arg.network_addresses, arg.full_node_network_addresses)
        })
    }

    static get bcs() {
        return bcs_import.struct("ValidatorConfiguration", {
            owner_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            operator_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            voter_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            stake_amount: bcs_import.u64(),
            consensus_pubkey: bcs_import.vector(bcs_import.u8()),
            proof_of_possession: bcs_import.vector(bcs_import.u8()),
            network_addresses: bcs_import.vector(bcs_import.u8()),
            full_node_network_addresses: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ValidatorConfiguration(val.owner_address, val.operator_address, val.voter_address, val.stake_amount, val.consensus_pubkey, val.proof_of_possession, val.network_addresses, val.full_node_network_addresses),
        });
    };
}

/* ============================== ValidatorConfigurationWithCommission =============================== */

export class ValidatorConfigurationWithCommission implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::ValidatorConfigurationWithCommission`;

    validator_config: ValidatorConfiguration;
    commission_percentage: u64_import;
    join_during_genesis: boolean;

    constructor(validator_config: ValidatorConfiguration, commission_percentage: u64_import, join_during_genesis: boolean) {
        this.validator_config = validator_config;
        this.commission_percentage = commission_percentage;
        this.join_during_genesis = join_during_genesis;
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
        return ValidatorConfigurationWithCommission.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return ValidatorConfigurationWithCommission.from_bcs_vector(args)
    }

    get_bcs() {
        return ValidatorConfigurationWithCommission.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::ValidatorConfigurationWithCommission`
    }

    from(arg: ValidatorConfigurationWithCommission) {
        this.validator_config = arg.validator_config;
        this.commission_percentage = arg.commission_percentage;
        this.join_during_genesis = arg.join_during_genesis;
    }

    static from_bcs(arg: {
        validator_config: ValidatorConfiguration,
        commission_percentage: u64_import,
        join_during_genesis: boolean
    }): ValidatorConfigurationWithCommission {
        return new ValidatorConfigurationWithCommission(arg.validator_config, arg.commission_percentage, arg.join_during_genesis)
    }

    static from_bcs_vector(args: {
        validator_config: ValidatorConfiguration,
        commission_percentage: u64_import,
        join_during_genesis: boolean
    } []): ValidatorConfigurationWithCommission[] {
        return args.map(function(arg) {
            return new ValidatorConfigurationWithCommission(arg.validator_config, arg.commission_percentage, arg.join_during_genesis)
        })
    }

    static get bcs() {
        return bcs_import.struct("ValidatorConfigurationWithCommission", {
            validator_config: ValidatorConfiguration.bcs,
            commission_percentage: bcs_import.u64(),
            join_during_genesis: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new ValidatorConfigurationWithCommission(val.validator_config, val.commission_percentage, val.join_during_genesis),
        });
    };
}

function initialize(arg0: number[], arg1: number, arg2: u64_import, arg3: number[], arg4: number[], arg5: u64_import, arg6: u64_import, arg7: u64_import, arg8: u64_import, arg9: boolean, arg10: u64_import, arg11: u64_import, arg12: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg5).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg6).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg7).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg8).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg9).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg10).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg11).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg12).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize", [], args);

}

function create_account(arg0: string, arg1: string, arg2: u64_import): [string] {
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
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_account", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function set_genesis_end(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "set_genesis_end", [], args);

}

function initialize_validator(arg0: string, arg1: ValidatorConfiguration) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(ValidatorConfiguration.bcs.serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_validator", [], args);

}

function create_accounts(arg0: string, arg1: AccountMap[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(AccountMap.bcs).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_accounts", [], args);

}

function create_employee_validators(arg0: u64_import, arg1: u64_import, arg2: EmployeeAccountMap[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(EmployeeAccountMap.bcs).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_employee_validators", [], args);

}

function create_initialize_validator(arg0: string, arg1: ValidatorConfigurationWithCommission, arg2: boolean) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(ValidatorConfigurationWithCommission.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_initialize_validator", [], args);

}

function create_initialize_validators(arg0: string, arg1: ValidatorConfiguration[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(ValidatorConfiguration.bcs).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_initialize_validators", [], args);

}

function create_initialize_validators_with_commission(arg0: string, arg1: boolean, arg2: ValidatorConfigurationWithCommission[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(ValidatorConfigurationWithCommission.bcs).serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_initialize_validators_with_commission", [], args);

}

function initialize_aptos_coin(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_aptos_coin", [], args);

}

function initialize_core_resources_and_aptos_coin(arg0: string, arg1: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_core_resources_and_aptos_coin", [], args);

}

function initialize_governed_gas_pool(arg0: string, arg1: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_governed_gas_pool", [], args);

}

export const genesis = {
    AccountMap,
    EmployeeAccountMap,
    ValidatorConfiguration,
    ValidatorConfigurationWithCommission,
    initialize,
    create_account,
    set_genesis_end,
    initialize_validator,
    create_accounts,
    create_employee_validators,
    create_initialize_validator,
    create_initialize_validators,
    create_initialize_validators_with_commission,
    initialize_aptos_coin,
    initialize_core_resources_and_aptos_coin,
    initialize_governed_gas_pool
}