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
let MODULE_NAME: string = "transaction_validation";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== TransactionValidation =============================== */

export class TransactionValidation implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::TransactionValidation`;

    module_addr: string;
    module_name: number[];
    script_prologue_name: number[];
    module_prologue_name: number[];
    multi_agent_prologue_name: number[];
    user_epilogue_name: number[];

    constructor(module_addr ? : string, module_name ? : number[], script_prologue_name ? : number[], module_prologue_name ? : number[], multi_agent_prologue_name ? : number[], user_epilogue_name ? : number[]) {
        this.module_addr = module_addr;
        this.module_name = module_name;
        this.script_prologue_name = script_prologue_name;
        this.module_prologue_name = module_prologue_name;
        this.multi_agent_prologue_name = multi_agent_prologue_name;
        this.user_epilogue_name = user_epilogue_name;
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
        return TransactionValidation.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return TransactionValidation.from_bcs_vector(args)
    }

    get_bcs() {
        return TransactionValidation.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::TransactionValidation`
    }

    from(arg: TransactionValidation) {
        this.module_addr = arg.module_addr;
        this.module_name = arg.module_name;
        this.script_prologue_name = arg.script_prologue_name;
        this.module_prologue_name = arg.module_prologue_name;
        this.multi_agent_prologue_name = arg.multi_agent_prologue_name;
        this.user_epilogue_name = arg.user_epilogue_name;
    }

    static from_bcs(arg: {
        module_addr: string,
        module_name: number[],
        script_prologue_name: number[],
        module_prologue_name: number[],
        multi_agent_prologue_name: number[],
        user_epilogue_name: number[]
    }): TransactionValidation {
        return new TransactionValidation(arg.module_addr, arg.module_name, arg.script_prologue_name, arg.module_prologue_name, arg.multi_agent_prologue_name, arg.user_epilogue_name)
    }

    static from_bcs_vector(args: {
        module_addr: string,
        module_name: number[],
        script_prologue_name: number[],
        module_prologue_name: number[],
        multi_agent_prologue_name: number[],
        user_epilogue_name: number[]
    } []): TransactionValidation[] {
        return args.map(function(arg) {
            return new TransactionValidation(arg.module_addr, arg.module_name, arg.script_prologue_name, arg.module_prologue_name, arg.multi_agent_prologue_name, arg.user_epilogue_name)
        })
    }

    static get bcs() {
        return bcs_import.struct("TransactionValidation", {
            module_addr: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            module_name: bcs_import.vector(bcs_import.u8()),
            script_prologue_name: bcs_import.vector(bcs_import.u8()),
            module_prologue_name: bcs_import.vector(bcs_import.u8()),
            multi_agent_prologue_name: bcs_import.vector(bcs_import.u8()),
            user_epilogue_name: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new TransactionValidation(val.module_addr, val.module_name, val.script_prologue_name, val.module_prologue_name, val.multi_agent_prologue_name, val.user_epilogue_name),
        });
    };
}

function initialize(arg0: string, arg1: number[], arg2: number[], arg3: number[], arg4: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg4).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "initialize", [], args);

}

function epilogue(arg0: string, arg1: u64_import, arg2: u64_import, arg3: u64_import, arg4: u64_import) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "epilogue", [], args);

}

function epilogue_gas_payer(arg0: string, arg1: string, arg2: u64_import, arg3: u64_import, arg4: u64_import, arg5: u64_import) {
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
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg5).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "epilogue_gas_payer", [], args);

}

function fee_payer_script_prologue(arg0: string, arg1: u64_import, arg2: number[], arg3: string[], arg4: number[][], arg5: string, arg6: number[], arg7: u64_import, arg8: u64_import, arg9: u64_import, arg10: number) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg5).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg6).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg7).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg8).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg9).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg10).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "fee_payer_script_prologue", [], args);

}

function multi_agent_common_prologue(arg0: string[], arg1: number[][]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "multi_agent_common_prologue", [], args);

}

function multi_agent_script_prologue(arg0: string, arg1: u64_import, arg2: number[], arg3: string[], arg4: number[][], arg5: u64_import, arg6: u64_import, arg7: u64_import, arg8: number) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.vector(bcs_import.u8())).serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg5).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg6).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg7).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg8).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "multi_agent_script_prologue", [], args);

}

function prologue_common(arg0: string, arg1: string, arg2: u64_import, arg3: number[], arg4: u64_import, arg5: u64_import, arg6: u64_import, arg7: number) {
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
        wasm.new_bytes(bcs_import.u64().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg5).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg6).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg7).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "prologue_common", [], args);

}

function script_prologue(arg0: string, arg1: u64_import, arg2: number[], arg3: u64_import, arg4: u64_import, arg5: u64_import, arg6: number, arg7: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.u64().serialize(arg5).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg6).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg7).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "script_prologue", [], args);

}

export const transaction_validation = {
    TransactionValidation,
    initialize,
    epilogue,
    epilogue_gas_payer,
    fee_payer_script_prologue,
    multi_agent_common_prologue,
    multi_agent_script_prologue,
    prologue_common,
    script_prologue
}