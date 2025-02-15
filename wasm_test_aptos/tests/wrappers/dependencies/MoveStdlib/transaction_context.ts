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
let MODULE_NAME: string = "transaction_context";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== AUID =============================== */

export class AUID implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::AUID`;

    unique_address: string;

    constructor(unique_address: string) {
        this.unique_address = unique_address;
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
        return AUID.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return AUID.from_bcs_vector(args)
    }

    get_bcs() {
        return AUID.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::AUID`
    }

    from(arg: AUID) {
        this.unique_address = arg.unique_address;
    }

    static from_bcs(arg: {
        unique_address: string
    }): AUID {
        return new AUID(arg.unique_address)
    }

    static from_bcs_vector(args: {
        unique_address: string
    } []): AUID[] {
        return args.map(function(arg) {
            return new AUID(arg.unique_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("AUID", {
            unique_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new AUID(val.unique_address),
        });
    };
}

/* ============================== EntryFunctionPayload =============================== */

export class EntryFunctionPayload implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::EntryFunctionPayload`;

    account_address: string;
    module_name: string;
    function_name: string;
    ty_args_names: string[];
    args: number[][];

    constructor(account_address: string, module_name: string, function_name: string, ty_args_names: string[], args: number[][]) {
        this.account_address = account_address;
        this.module_name = module_name;
        this.function_name = function_name;
        this.ty_args_names = ty_args_names;
        this.args = args;
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
        return EntryFunctionPayload.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return EntryFunctionPayload.from_bcs_vector(args)
    }

    get_bcs() {
        return EntryFunctionPayload.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::EntryFunctionPayload`
    }

    from(arg: EntryFunctionPayload) {
        this.account_address = arg.account_address;
        this.module_name = arg.module_name;
        this.function_name = arg.function_name;
        this.ty_args_names = arg.ty_args_names;
        this.args = arg.args;
    }

    static from_bcs(arg: {
        account_address: string,
        module_name: string,
        function_name: string,
        ty_args_names: string[],
        args: number[][]
    }): EntryFunctionPayload {
        return new EntryFunctionPayload(arg.account_address, arg.module_name, arg.function_name, arg.ty_args_names, arg.args)
    }

    static from_bcs_vector(args: {
        account_address: string,
        module_name: string,
        function_name: string,
        ty_args_names: string[],
        args: number[][]
    } []): EntryFunctionPayload[] {
        return args.map(function(arg) {
            return new EntryFunctionPayload(arg.account_address, arg.module_name, arg.function_name, arg.ty_args_names, arg.args)
        })
    }

    static get bcs() {
        return bcs_import.struct("EntryFunctionPayload", {
            account_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            module_name: bcs_import.string(),
            function_name: bcs_import.string(),
            ty_args_names: bcs_import.vector(bcs_import.string()),
            args: bcs_import.vector(bcs_import.vector(bcs_import.u8())),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new EntryFunctionPayload(val.account_address, val.module_name, val.function_name, val.ty_args_names, val.args),
        });
    };
}

/* ============================== MultisigPayload =============================== */

export class MultisigPayload implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::MultisigPayload`;

    multisig_address: string;
    entry_function_payload: Option < EntryFunctionPayload > ;

    constructor(multisig_address: string, entry_function_payload: Option < EntryFunctionPayload > ) {
        this.multisig_address = multisig_address;
        this.entry_function_payload = entry_function_payload;
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
        return MultisigPayload.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return MultisigPayload.from_bcs_vector(args)
    }

    get_bcs() {
        return MultisigPayload.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::MultisigPayload`
    }

    from(arg: MultisigPayload) {
        this.multisig_address = arg.multisig_address;
        this.entry_function_payload = arg.entry_function_payload;
    }

    static from_bcs(arg: {
        multisig_address: string,
        entry_function_payload: Option < EntryFunctionPayload >
    }): MultisigPayload {
        return new MultisigPayload(arg.multisig_address, arg.entry_function_payload)
    }

    static from_bcs_vector(args: {
        multisig_address: string,
        entry_function_payload: Option < EntryFunctionPayload >
    } []): MultisigPayload[] {
        return args.map(function(arg) {
            return new MultisigPayload(arg.multisig_address, arg.entry_function_payload)
        })
    }

    static get bcs() {
        return bcs_import.struct("MultisigPayload", {
            multisig_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            entry_function_payload: Option.bcs(EntryFunctionPayload.bcs),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new MultisigPayload(val.multisig_address, val.entry_function_payload),
        });
    };
}

function account_address(arg0: EntryFunctionPayload): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(EntryFunctionPayload.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "account_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function chain_id(): [number] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "chain_id", [], args);

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function chain_id_internal(): [number] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "chain_id_internal", [], args);

    return [
        bcs_import.u8().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function module_name(arg0: EntryFunctionPayload): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(EntryFunctionPayload.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "module_name", [], args);

    return [
        bcs_import.string().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function args(arg0: EntryFunctionPayload): [number[][]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(EntryFunctionPayload.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "args", [], args);

    return [
        bcs_import.vector(bcs_import.vector(bcs_import.u8())).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function auid_address(arg0: AUID): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(AUID.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "auid_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function entry_function_payload(): [Option < EntryFunctionPayload > ] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "entry_function_payload", [], args);

    return [
        Option.from_bcs(Option.bcs(EntryFunctionPayload.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function entry_function_payload_internal(): [Option < EntryFunctionPayload > ] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "entry_function_payload_internal", [], args);

    return [
        Option.from_bcs(Option.bcs(EntryFunctionPayload.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function function_name(arg0: EntryFunctionPayload): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(EntryFunctionPayload.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "function_name", [], args);

    return [
        bcs_import.string().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function gas_payer(): [string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "gas_payer", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function gas_payer_internal(): [string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "gas_payer_internal", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function gas_unit_price(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "gas_unit_price", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function gas_unit_price_internal(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "gas_unit_price_internal", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function generate_auid(): [AUID] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_auid", [], args);

    return [
        AUID.from_bcs(AUID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function generate_auid_address(): [string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_auid_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function generate_unique_address(): [string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "generate_unique_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_script_hash(): [number[]] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_script_hash", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_transaction_hash(): [number[]] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_transaction_hash", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_txn_hash(): [number[]] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_txn_hash", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function inner_entry_function_payload(arg0: MultisigPayload): [Option < EntryFunctionPayload > ] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(MultisigPayload.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "inner_entry_function_payload", [], args);

    return [
        Option.from_bcs(Option.bcs(EntryFunctionPayload.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function max_gas_amount(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "max_gas_amount", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function max_gas_amount_internal(): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "max_gas_amount_internal", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function multisig_address(arg0: MultisigPayload): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(MultisigPayload.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "multisig_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function multisig_payload(): [Option < MultisigPayload > ] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "multisig_payload", [], args);

    return [
        Option.from_bcs(Option.bcs(MultisigPayload.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function multisig_payload_internal(): [Option < MultisigPayload > ] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "multisig_payload_internal", [], args);

    return [
        Option.from_bcs(Option.bcs(MultisigPayload.bcs).parse(new Uint8Array(r0.Raw[0])))
    ];
}

function secondary_signers(): [string[]] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "secondary_signers", [], args);

    return [
        bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function secondary_signers_internal(): [string[]] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "secondary_signers_internal", [], args);

    return [
        bcs_import.vector(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        })).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function sender(): [string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sender", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function sender_internal(): [string] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "sender_internal", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function type_arg_names(arg0: EntryFunctionPayload): [string[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(EntryFunctionPayload.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "type_arg_names", [], args);

    return [
        bcs_import.string()(bcs_import.vector(bcs_import.string()).parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const transaction_context = {
    AUID,
    EntryFunctionPayload,
    MultisigPayload,
    account_address,
    chain_id,
    chain_id_internal,
    module_name,
    args,
    auid_address,
    entry_function_payload,
    entry_function_payload_internal,
    function_name,
    gas_payer,
    gas_payer_internal,
    gas_unit_price,
    gas_unit_price_internal,
    generate_auid,
    generate_auid_address,
    generate_unique_address,
    get_script_hash,
    get_transaction_hash,
    get_txn_hash,
    inner_entry_function_payload,
    max_gas_amount,
    max_gas_amount_internal,
    multisig_address,
    multisig_payload,
    multisig_payload_internal,
    secondary_signers,
    secondary_signers_internal,
    sender,
    sender_internal,
    type_arg_names
}