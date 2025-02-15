import {
    StructClass,
    get_package_address,
    get_wasm,
    u64 as u64_import
} from "../../sui_wasm";
import {
    FixedPoint64
} from "./fixed_point64";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "staking_config";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== StakingConfig =============================== */

export class StakingConfig implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::StakingConfig`;

    minimum_stake: u64_import;
    maximum_stake: u64_import;
    recurring_lockup_duration_secs: u64_import;
    allow_validator_set_change: boolean;
    rewards_rate: u64_import;
    rewards_rate_denominator: u64_import;
    voting_power_increase_limit: u64_import;

    constructor(minimum_stake ? : u64_import, maximum_stake ? : u64_import, recurring_lockup_duration_secs ? : u64_import, allow_validator_set_change ? : boolean, rewards_rate ? : u64_import, rewards_rate_denominator ? : u64_import, voting_power_increase_limit ? : u64_import) {
        this.minimum_stake = minimum_stake;
        this.maximum_stake = maximum_stake;
        this.recurring_lockup_duration_secs = recurring_lockup_duration_secs;
        this.allow_validator_set_change = allow_validator_set_change;
        this.rewards_rate = rewards_rate;
        this.rewards_rate_denominator = rewards_rate_denominator;
        this.voting_power_increase_limit = voting_power_increase_limit;
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
        return StakingConfig.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return StakingConfig.from_bcs_vector(args)
    }

    get_bcs() {
        return StakingConfig.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::StakingConfig`
    }

    from(arg: StakingConfig) {
        this.minimum_stake = arg.minimum_stake;
        this.maximum_stake = arg.maximum_stake;
        this.recurring_lockup_duration_secs = arg.recurring_lockup_duration_secs;
        this.allow_validator_set_change = arg.allow_validator_set_change;
        this.rewards_rate = arg.rewards_rate;
        this.rewards_rate_denominator = arg.rewards_rate_denominator;
        this.voting_power_increase_limit = arg.voting_power_increase_limit;
    }

    static from_bcs(arg: {
        minimum_stake: u64_import,
        maximum_stake: u64_import,
        recurring_lockup_duration_secs: u64_import,
        allow_validator_set_change: boolean,
        rewards_rate: u64_import,
        rewards_rate_denominator: u64_import,
        voting_power_increase_limit: u64_import
    }): StakingConfig {
        return new StakingConfig(arg.minimum_stake, arg.maximum_stake, arg.recurring_lockup_duration_secs, arg.allow_validator_set_change, arg.rewards_rate, arg.rewards_rate_denominator, arg.voting_power_increase_limit)
    }

    static from_bcs_vector(args: {
        minimum_stake: u64_import,
        maximum_stake: u64_import,
        recurring_lockup_duration_secs: u64_import,
        allow_validator_set_change: boolean,
        rewards_rate: u64_import,
        rewards_rate_denominator: u64_import,
        voting_power_increase_limit: u64_import
    } []): StakingConfig[] {
        return args.map(function(arg) {
            return new StakingConfig(arg.minimum_stake, arg.maximum_stake, arg.recurring_lockup_duration_secs, arg.allow_validator_set_change, arg.rewards_rate, arg.rewards_rate_denominator, arg.voting_power_increase_limit)
        })
    }

    static get bcs() {
        return bcs_import.struct("StakingConfig", {
            minimum_stake: bcs_import.u64(),
            maximum_stake: bcs_import.u64(),
            recurring_lockup_duration_secs: bcs_import.u64(),
            allow_validator_set_change: bcs_import.bool(),
            rewards_rate: bcs_import.u64(),
            rewards_rate_denominator: bcs_import.u64(),
            voting_power_increase_limit: bcs_import.u64(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new StakingConfig(val.minimum_stake, val.maximum_stake, val.recurring_lockup_duration_secs, val.allow_validator_set_change, val.rewards_rate, val.rewards_rate_denominator, val.voting_power_increase_limit),
        });
    };
}

/* ============================== StakingRewardsConfig =============================== */

export class StakingRewardsConfig implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::StakingRewardsConfig`;

    rewards_rate: FixedPoint64;
    min_rewards_rate: FixedPoint64;
    rewards_rate_period_in_secs: u64_import;
    last_rewards_rate_period_start_in_secs: u64_import;
    rewards_rate_decrease_rate: FixedPoint64;

    constructor(rewards_rate ? : FixedPoint64, min_rewards_rate ? : FixedPoint64, rewards_rate_period_in_secs ? : u64_import, last_rewards_rate_period_start_in_secs ? : u64_import, rewards_rate_decrease_rate ? : FixedPoint64) {
        this.rewards_rate = rewards_rate;
        this.min_rewards_rate = min_rewards_rate;
        this.rewards_rate_period_in_secs = rewards_rate_period_in_secs;
        this.last_rewards_rate_period_start_in_secs = last_rewards_rate_period_start_in_secs;
        this.rewards_rate_decrease_rate = rewards_rate_decrease_rate;
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
        return StakingRewardsConfig.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return StakingRewardsConfig.from_bcs_vector(args)
    }

    get_bcs() {
        return StakingRewardsConfig.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::StakingRewardsConfig`
    }

    from(arg: StakingRewardsConfig) {
        this.rewards_rate = arg.rewards_rate;
        this.min_rewards_rate = arg.min_rewards_rate;
        this.rewards_rate_period_in_secs = arg.rewards_rate_period_in_secs;
        this.last_rewards_rate_period_start_in_secs = arg.last_rewards_rate_period_start_in_secs;
        this.rewards_rate_decrease_rate = arg.rewards_rate_decrease_rate;
    }

    static from_bcs(arg: {
        rewards_rate: FixedPoint64,
        min_rewards_rate: FixedPoint64,
        rewards_rate_period_in_secs: u64_import,
        last_rewards_rate_period_start_in_secs: u64_import,
        rewards_rate_decrease_rate: FixedPoint64
    }): StakingRewardsConfig {
        return new StakingRewardsConfig(arg.rewards_rate, arg.min_rewards_rate, arg.rewards_rate_period_in_secs, arg.last_rewards_rate_period_start_in_secs, arg.rewards_rate_decrease_rate)
    }

    static from_bcs_vector(args: {
        rewards_rate: FixedPoint64,
        min_rewards_rate: FixedPoint64,
        rewards_rate_period_in_secs: u64_import,
        last_rewards_rate_period_start_in_secs: u64_import,
        rewards_rate_decrease_rate: FixedPoint64
    } []): StakingRewardsConfig[] {
        return args.map(function(arg) {
            return new StakingRewardsConfig(arg.rewards_rate, arg.min_rewards_rate, arg.rewards_rate_period_in_secs, arg.last_rewards_rate_period_start_in_secs, arg.rewards_rate_decrease_rate)
        })
    }

    static get bcs() {
        return bcs_import.struct("StakingRewardsConfig", {
            rewards_rate: FixedPoint64.bcs,
            min_rewards_rate: FixedPoint64.bcs,
            rewards_rate_period_in_secs: bcs_import.u64(),
            last_rewards_rate_period_start_in_secs: bcs_import.u64(),
            rewards_rate_decrease_rate: FixedPoint64.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new StakingRewardsConfig(val.rewards_rate, val.min_rewards_rate, val.rewards_rate_period_in_secs, val.last_rewards_rate_period_start_in_secs, val.rewards_rate_decrease_rate),
        });
    };
}

function get(): [StakingConfig] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get", [], args);

    return [
        StakingConfig.from_bcs(StakingConfig.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function initialize(arg0: string, arg1: u64_import, arg2: u64_import, arg3: u64_import, arg4: boolean, arg5: u64_import, arg6: u64_import, arg7: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.bool().serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg5).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg6).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg7).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize", [], args);

}

function calculate_and_save_latest_epoch_rewards_rate(): [FixedPoint64] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "calculate_and_save_latest_epoch_rewards_rate", [], args);

    return [
        FixedPoint64.from_bcs(FixedPoint64.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function calculate_and_save_latest_rewards_config(): [StakingRewardsConfig] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "calculate_and_save_latest_rewards_config", [], args);

    return [
        StakingRewardsConfig.from_bcs(StakingRewardsConfig.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function get_allow_validator_set_change(arg0: StakingConfig): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(StakingConfig.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_allow_validator_set_change", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_recurring_lockup_duration(arg0: StakingConfig): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(StakingConfig.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_recurring_lockup_duration", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_required_stake(arg0: StakingConfig): [u64_import, u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(StakingConfig.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_required_stake", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r1.Raw[0]))
    ];
}

function get_reward_rate(arg0: StakingConfig): [u64_import, u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(StakingConfig.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_reward_rate", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r1.Raw[0]))
    ];
}

function get_voting_power_increase_limit(arg0: StakingConfig): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(StakingConfig.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_voting_power_increase_limit", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function initialize_rewards(arg0: string, arg1: FixedPoint64, arg2: FixedPoint64, arg3: u64_import, arg4: u64_import, arg5: FixedPoint64) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg5).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize_rewards", [], args);

}

function reward_rate(): [u64_import, u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "reward_rate", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0])),
        bcs_import.u64().parse(new Uint8Array(r1.Raw[0]))
    ];
}

function update_recurring_lockup_duration_secs(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_recurring_lockup_duration_secs", [], args);

}

function update_required_stake(arg0: string, arg1: u64_import, arg2: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_required_stake", [], args);

}

function update_rewards_config(arg0: string, arg1: FixedPoint64, arg2: FixedPoint64, arg3: u64_import, arg4: FixedPoint64) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg4).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_rewards_config", [], args);

}

function update_rewards_rate(arg0: string, arg1: u64_import, arg2: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_rewards_rate", [], args);

}

function update_voting_power_increase_limit(arg0: string, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_voting_power_increase_limit", [], args);

}

function validate_required_stake(arg0: u64_import, arg1: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u64().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "validate_required_stake", [], args);

}

function validate_rewards_config(arg0: FixedPoint64, arg1: FixedPoint64, arg2: u64_import, arg3: FixedPoint64) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg0).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(FixedPoint64.bcs.serialize(arg3).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "validate_rewards_config", [], args);

}

export const staking_config = {
    StakingConfig,
    StakingRewardsConfig,
    get,
    initialize,
    calculate_and_save_latest_epoch_rewards_rate,
    calculate_and_save_latest_rewards_config,
    get_allow_validator_set_change,
    get_recurring_lockup_duration,
    get_required_stake,
    get_reward_rate,
    get_voting_power_increase_limit,
    initialize_rewards,
    reward_rate,
    update_recurring_lockup_duration_secs,
    update_required_stake,
    update_rewards_config,
    update_rewards_rate,
    update_voting_power_increase_limit,
    validate_required_stake,
    validate_rewards_config
}