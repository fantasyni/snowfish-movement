import {
    StructClass,
    get_package_address,
    get_wasm
} from "../../sui_wasm";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "governance_proposal";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== GovernanceProposal =============================== */

export class GovernanceProposal implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::GovernanceProposal`;

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
        return GovernanceProposal.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return GovernanceProposal.from_bcs_vector(args)
    }

    get_bcs() {
        return GovernanceProposal.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::GovernanceProposal`
    }

    from(arg: GovernanceProposal) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): GovernanceProposal {
        return new GovernanceProposal(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): GovernanceProposal[] {
        return args.map(function(arg) {
            return new GovernanceProposal(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("GovernanceProposal", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new GovernanceProposal(val.dummy_field),
        });
    };
}

function create_proposal(): [GovernanceProposal] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_proposal", [], args);

    return [
        GovernanceProposal.from_bcs(GovernanceProposal.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create_empty_proposal(): [GovernanceProposal] {
    let wasm = get_wasm();

    let args: any[] = []

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_empty_proposal", [], args);

    return [
        GovernanceProposal.from_bcs(GovernanceProposal.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

export const governance_proposal = {
    GovernanceProposal,
    create_proposal,
    create_empty_proposal
}