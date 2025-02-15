import {
    StructClass,
    get_package_address
} from "../../sui_wasm";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "bls12381_algebra";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== FormatFq12LscLsb =============================== */

export class FormatFq12LscLsb implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::FormatFq12LscLsb`;

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
        return FormatFq12LscLsb.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return FormatFq12LscLsb.from_bcs_vector(args)
    }

    get_bcs() {
        return FormatFq12LscLsb.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::FormatFq12LscLsb`
    }

    from(arg: FormatFq12LscLsb) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): FormatFq12LscLsb {
        return new FormatFq12LscLsb(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): FormatFq12LscLsb[] {
        return args.map(function(arg) {
            return new FormatFq12LscLsb(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("FormatFq12LscLsb", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new FormatFq12LscLsb(val.dummy_field),
        });
    };
}

/* ============================== FormatFrLsb =============================== */

export class FormatFrLsb implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::FormatFrLsb`;

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
        return FormatFrLsb.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return FormatFrLsb.from_bcs_vector(args)
    }

    get_bcs() {
        return FormatFrLsb.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::FormatFrLsb`
    }

    from(arg: FormatFrLsb) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): FormatFrLsb {
        return new FormatFrLsb(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): FormatFrLsb[] {
        return args.map(function(arg) {
            return new FormatFrLsb(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("FormatFrLsb", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new FormatFrLsb(val.dummy_field),
        });
    };
}

/* ============================== FormatFrMsb =============================== */

export class FormatFrMsb implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::FormatFrMsb`;

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
        return FormatFrMsb.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return FormatFrMsb.from_bcs_vector(args)
    }

    get_bcs() {
        return FormatFrMsb.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::FormatFrMsb`
    }

    from(arg: FormatFrMsb) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): FormatFrMsb {
        return new FormatFrMsb(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): FormatFrMsb[] {
        return args.map(function(arg) {
            return new FormatFrMsb(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("FormatFrMsb", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new FormatFrMsb(val.dummy_field),
        });
    };
}

/* ============================== FormatG1Compr =============================== */

export class FormatG1Compr implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::FormatG1Compr`;

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
        return FormatG1Compr.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return FormatG1Compr.from_bcs_vector(args)
    }

    get_bcs() {
        return FormatG1Compr.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::FormatG1Compr`
    }

    from(arg: FormatG1Compr) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): FormatG1Compr {
        return new FormatG1Compr(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): FormatG1Compr[] {
        return args.map(function(arg) {
            return new FormatG1Compr(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("FormatG1Compr", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new FormatG1Compr(val.dummy_field),
        });
    };
}

/* ============================== FormatG1Uncompr =============================== */

export class FormatG1Uncompr implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::FormatG1Uncompr`;

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
        return FormatG1Uncompr.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return FormatG1Uncompr.from_bcs_vector(args)
    }

    get_bcs() {
        return FormatG1Uncompr.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::FormatG1Uncompr`
    }

    from(arg: FormatG1Uncompr) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): FormatG1Uncompr {
        return new FormatG1Uncompr(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): FormatG1Uncompr[] {
        return args.map(function(arg) {
            return new FormatG1Uncompr(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("FormatG1Uncompr", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new FormatG1Uncompr(val.dummy_field),
        });
    };
}

/* ============================== FormatG2Compr =============================== */

export class FormatG2Compr implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::FormatG2Compr`;

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
        return FormatG2Compr.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return FormatG2Compr.from_bcs_vector(args)
    }

    get_bcs() {
        return FormatG2Compr.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::FormatG2Compr`
    }

    from(arg: FormatG2Compr) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): FormatG2Compr {
        return new FormatG2Compr(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): FormatG2Compr[] {
        return args.map(function(arg) {
            return new FormatG2Compr(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("FormatG2Compr", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new FormatG2Compr(val.dummy_field),
        });
    };
}

/* ============================== FormatG2Uncompr =============================== */

export class FormatG2Uncompr implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::FormatG2Uncompr`;

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
        return FormatG2Uncompr.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return FormatG2Uncompr.from_bcs_vector(args)
    }

    get_bcs() {
        return FormatG2Uncompr.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::FormatG2Uncompr`
    }

    from(arg: FormatG2Uncompr) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): FormatG2Uncompr {
        return new FormatG2Uncompr(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): FormatG2Uncompr[] {
        return args.map(function(arg) {
            return new FormatG2Uncompr(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("FormatG2Uncompr", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new FormatG2Uncompr(val.dummy_field),
        });
    };
}

/* ============================== FormatGt =============================== */

export class FormatGt implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::FormatGt`;

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
        return FormatGt.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return FormatGt.from_bcs_vector(args)
    }

    get_bcs() {
        return FormatGt.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::FormatGt`
    }

    from(arg: FormatGt) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): FormatGt {
        return new FormatGt(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): FormatGt[] {
        return args.map(function(arg) {
            return new FormatGt(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("FormatGt", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new FormatGt(val.dummy_field),
        });
    };
}

/* ============================== Fq12 =============================== */

export class Fq12 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Fq12`;

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
        return Fq12.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Fq12.from_bcs_vector(args)
    }

    get_bcs() {
        return Fq12.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Fq12`
    }

    from(arg: Fq12) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): Fq12 {
        return new Fq12(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): Fq12[] {
        return args.map(function(arg) {
            return new Fq12(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("Fq12", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Fq12(val.dummy_field),
        });
    };
}

/* ============================== Fr =============================== */

export class Fr implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Fr`;

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
        return Fr.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Fr.from_bcs_vector(args)
    }

    get_bcs() {
        return Fr.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Fr`
    }

    from(arg: Fr) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): Fr {
        return new Fr(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): Fr[] {
        return args.map(function(arg) {
            return new Fr(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("Fr", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Fr(val.dummy_field),
        });
    };
}

/* ============================== G1 =============================== */

export class G1 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::G1`;

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
        return G1.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return G1.from_bcs_vector(args)
    }

    get_bcs() {
        return G1.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::G1`
    }

    from(arg: G1) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): G1 {
        return new G1(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): G1[] {
        return args.map(function(arg) {
            return new G1(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("G1", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new G1(val.dummy_field),
        });
    };
}

/* ============================== G2 =============================== */

export class G2 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::G2`;

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
        return G2.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return G2.from_bcs_vector(args)
    }

    get_bcs() {
        return G2.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::G2`
    }

    from(arg: G2) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): G2 {
        return new G2(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): G2[] {
        return args.map(function(arg) {
            return new G2(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("G2", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new G2(val.dummy_field),
        });
    };
}

/* ============================== Gt =============================== */

export class Gt implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Gt`;

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
        return Gt.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Gt.from_bcs_vector(args)
    }

    get_bcs() {
        return Gt.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Gt`
    }

    from(arg: Gt) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): Gt {
        return new Gt(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): Gt[] {
        return args.map(function(arg) {
            return new Gt(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("Gt", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Gt(val.dummy_field),
        });
    };
}

/* ============================== HashG1XmdSha256SswuRo =============================== */

export class HashG1XmdSha256SswuRo implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::HashG1XmdSha256SswuRo`;

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
        return HashG1XmdSha256SswuRo.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return HashG1XmdSha256SswuRo.from_bcs_vector(args)
    }

    get_bcs() {
        return HashG1XmdSha256SswuRo.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::HashG1XmdSha256SswuRo`
    }

    from(arg: HashG1XmdSha256SswuRo) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): HashG1XmdSha256SswuRo {
        return new HashG1XmdSha256SswuRo(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): HashG1XmdSha256SswuRo[] {
        return args.map(function(arg) {
            return new HashG1XmdSha256SswuRo(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("HashG1XmdSha256SswuRo", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new HashG1XmdSha256SswuRo(val.dummy_field),
        });
    };
}

/* ============================== HashG2XmdSha256SswuRo =============================== */

export class HashG2XmdSha256SswuRo implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::HashG2XmdSha256SswuRo`;

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
        return HashG2XmdSha256SswuRo.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return HashG2XmdSha256SswuRo.from_bcs_vector(args)
    }

    get_bcs() {
        return HashG2XmdSha256SswuRo.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::HashG2XmdSha256SswuRo`
    }

    from(arg: HashG2XmdSha256SswuRo) {
        this.dummy_field = arg.dummy_field;
    }

    static from_bcs(arg: {
        dummy_field: boolean
    }): HashG2XmdSha256SswuRo {
        return new HashG2XmdSha256SswuRo(arg.dummy_field)
    }

    static from_bcs_vector(args: {
        dummy_field: boolean
    } []): HashG2XmdSha256SswuRo[] {
        return args.map(function(arg) {
            return new HashG2XmdSha256SswuRo(arg.dummy_field)
        })
    }

    static get bcs() {
        return bcs_import.struct("HashG2XmdSha256SswuRo", {
            dummy_field: bcs_import.bool(),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new HashG2XmdSha256SswuRo(val.dummy_field),
        });
    };
}

export const bls12381_algebra = {
    FormatFq12LscLsb,
    FormatFrLsb,
    FormatFrMsb,
    FormatG1Compr,
    FormatG1Uncompr,
    FormatG2Compr,
    FormatG2Uncompr,
    FormatGt,
    Fq12,
    Fr,
    G1,
    G2,
    Gt,
    HashG1XmdSha256SswuRo,
    HashG2XmdSha256SswuRo
}