import {
    StructClass,
    U8,
    get_package_address,
    get_wasm,
    has_arr,
    into_arr_bcs_vector,
    into_arr_value,
    u64 as u64_import
} from "../../sui_wasm";
import {
    EventHandle
} from "./event";
import {
    GUID
} from "./guid";
import {
    Option
} from "./option";
import {
    Table
} from "./table";
import {
    TypeInfo
} from "./type_info";
import {
    bcs as bcs_import
} from "@mysten/sui/bcs";
import {
    fromHEX,
    toHEX
} from "@mysten/sui/utils";

let PACKAGE_NAME: string = "MoveStdlib";
let PACKAGE_ADDRESS: string = "0x0000000000000000000000000000000000000000000000000000000000000001";
let MODULE_NAME: string = "account";

function do_get_package_address() {
    let package_address: string = get_package_address(PACKAGE_NAME);
    if (package_address) {
        return package_address;
    } else {
        return PACKAGE_ADDRESS;
    }
}

/* ============================== Account =============================== */

export class Account implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::Account`;

    authentication_key: number[];
    sequence_number: u64_import;
    guid_creation_num: u64_import;
    coin_register_events: EventHandle;
    key_rotation_events: EventHandle;
    rotation_capability_offer: CapabilityOffer;
    signer_capability_offer: CapabilityOffer;

    constructor(authentication_key ? : number[], sequence_number ? : u64_import, guid_creation_num ? : u64_import, coin_register_events ? : EventHandle, key_rotation_events ? : EventHandle, rotation_capability_offer ? : CapabilityOffer, signer_capability_offer ? : CapabilityOffer) {
        this.authentication_key = authentication_key;
        this.sequence_number = sequence_number;
        this.guid_creation_num = guid_creation_num;
        this.coin_register_events = coin_register_events;
        this.key_rotation_events = key_rotation_events;
        this.rotation_capability_offer = rotation_capability_offer;
        this.signer_capability_offer = signer_capability_offer;
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
        return Account.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return Account.from_bcs_vector(args)
    }

    get_bcs() {
        return Account.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::Account`
    }

    from(arg: Account) {
        this.authentication_key = arg.authentication_key;
        this.sequence_number = arg.sequence_number;
        this.guid_creation_num = arg.guid_creation_num;
        this.coin_register_events = arg.coin_register_events;
        this.key_rotation_events = arg.key_rotation_events;
        this.rotation_capability_offer = arg.rotation_capability_offer;
        this.signer_capability_offer = arg.signer_capability_offer;
    }

    static from_bcs(arg: {
        authentication_key: number[],
        sequence_number: u64_import,
        guid_creation_num: u64_import,
        coin_register_events: EventHandle,
        key_rotation_events: EventHandle,
        rotation_capability_offer: CapabilityOffer,
        signer_capability_offer: CapabilityOffer
    }): Account {
        return new Account(arg.authentication_key, arg.sequence_number, arg.guid_creation_num, arg.coin_register_events, arg.key_rotation_events, arg.rotation_capability_offer, arg.signer_capability_offer)
    }

    static from_bcs_vector(args: {
        authentication_key: number[],
        sequence_number: u64_import,
        guid_creation_num: u64_import,
        coin_register_events: EventHandle,
        key_rotation_events: EventHandle,
        rotation_capability_offer: CapabilityOffer,
        signer_capability_offer: CapabilityOffer
    } []): Account[] {
        return args.map(function(arg) {
            return new Account(arg.authentication_key, arg.sequence_number, arg.guid_creation_num, arg.coin_register_events, arg.key_rotation_events, arg.rotation_capability_offer, arg.signer_capability_offer)
        })
    }

    static get bcs() {
        return bcs_import.struct("Account", {
            authentication_key: bcs_import.vector(bcs_import.u8()),
            sequence_number: bcs_import.u64(),
            guid_creation_num: bcs_import.u64(),
            coin_register_events: EventHandle.bcs,
            key_rotation_events: EventHandle.bcs,
            rotation_capability_offer: CapabilityOffer.bcs,
            signer_capability_offer: CapabilityOffer.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new Account(val.authentication_key, val.sequence_number, val.guid_creation_num, val.coin_register_events, val.key_rotation_events, val.rotation_capability_offer, val.signer_capability_offer),
        });
    };
}

/* ============================== CapabilityOffer =============================== */

export class CapabilityOffer implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CapabilityOffer`;

    for_: Option < string > ;

    constructor(for_: Option < string > ) {
        this.for_ = for_;
    }

    into_value() {
        return {
            for_: (this.for_ as unknown as StructClass).into_value ? (this.for_ as unknown as StructClass).into_value() : this.for_
        }
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
        return CapabilityOffer.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CapabilityOffer.from_bcs_vector(args)
    }

    get_bcs() {
        return CapabilityOffer.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CapabilityOffer`
    }

    from(arg: CapabilityOffer) {
        this.for_ = arg.for_;
    }

    static from_bcs(arg: {
        for_: Option < string >
    }): CapabilityOffer {
        return new CapabilityOffer(arg.for_)
    }

    static from_bcs_vector(args: {
        for_: Option < string >
    } []): CapabilityOffer[] {
        return args.map(function(arg) {
            return new CapabilityOffer(arg.for_)
        })
    }

    static get bcs() {
        return bcs_import.struct("CapabilityOffer", {
            for_: Option.bcs(bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            })),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CapabilityOffer(val.for_),
        });
    };
}

/* ============================== CoinRegisterEvent =============================== */

export class CoinRegisterEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::CoinRegisterEvent`;

    type_info: TypeInfo;

    constructor(type_info: TypeInfo) {
        this.type_info = type_info;
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
        return CoinRegisterEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return CoinRegisterEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return CoinRegisterEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::CoinRegisterEvent`
    }

    from(arg: CoinRegisterEvent) {
        this.type_info = arg.type_info;
    }

    static from_bcs(arg: {
        type_info: TypeInfo
    }): CoinRegisterEvent {
        return new CoinRegisterEvent(arg.type_info)
    }

    static from_bcs_vector(args: {
        type_info: TypeInfo
    } []): CoinRegisterEvent[] {
        return args.map(function(arg) {
            return new CoinRegisterEvent(arg.type_info)
        })
    }

    static get bcs() {
        return bcs_import.struct("CoinRegisterEvent", {
            type_info: TypeInfo.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new CoinRegisterEvent(val.type_info),
        });
    };
}

/* ============================== KeyRotation =============================== */

export class KeyRotation implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::KeyRotation`;

    account: string;
    old_authentication_key: number[];
    new_authentication_key: number[];

    constructor(account: string, old_authentication_key: number[], new_authentication_key: number[]) {
        this.account = account;
        this.old_authentication_key = old_authentication_key;
        this.new_authentication_key = new_authentication_key;
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
        return KeyRotation.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return KeyRotation.from_bcs_vector(args)
    }

    get_bcs() {
        return KeyRotation.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::KeyRotation`
    }

    from(arg: KeyRotation) {
        this.account = arg.account;
        this.old_authentication_key = arg.old_authentication_key;
        this.new_authentication_key = arg.new_authentication_key;
    }

    static from_bcs(arg: {
        account: string,
        old_authentication_key: number[],
        new_authentication_key: number[]
    }): KeyRotation {
        return new KeyRotation(arg.account, arg.old_authentication_key, arg.new_authentication_key)
    }

    static from_bcs_vector(args: {
        account: string,
        old_authentication_key: number[],
        new_authentication_key: number[]
    } []): KeyRotation[] {
        return args.map(function(arg) {
            return new KeyRotation(arg.account, arg.old_authentication_key, arg.new_authentication_key)
        })
    }

    static get bcs() {
        return bcs_import.struct("KeyRotation", {
            account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            old_authentication_key: bcs_import.vector(bcs_import.u8()),
            new_authentication_key: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new KeyRotation(val.account, val.old_authentication_key, val.new_authentication_key),
        });
    };
}

/* ============================== KeyRotationEvent =============================== */

export class KeyRotationEvent implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::KeyRotationEvent`;

    old_authentication_key: number[];
    new_authentication_key: number[];

    constructor(old_authentication_key: number[], new_authentication_key: number[]) {
        this.old_authentication_key = old_authentication_key;
        this.new_authentication_key = new_authentication_key;
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
        return KeyRotationEvent.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return KeyRotationEvent.from_bcs_vector(args)
    }

    get_bcs() {
        return KeyRotationEvent.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::KeyRotationEvent`
    }

    from(arg: KeyRotationEvent) {
        this.old_authentication_key = arg.old_authentication_key;
        this.new_authentication_key = arg.new_authentication_key;
    }

    static from_bcs(arg: {
        old_authentication_key: number[],
        new_authentication_key: number[]
    }): KeyRotationEvent {
        return new KeyRotationEvent(arg.old_authentication_key, arg.new_authentication_key)
    }

    static from_bcs_vector(args: {
        old_authentication_key: number[],
        new_authentication_key: number[]
    } []): KeyRotationEvent[] {
        return args.map(function(arg) {
            return new KeyRotationEvent(arg.old_authentication_key, arg.new_authentication_key)
        })
    }

    static get bcs() {
        return bcs_import.struct("KeyRotationEvent", {
            old_authentication_key: bcs_import.vector(bcs_import.u8()),
            new_authentication_key: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new KeyRotationEvent(val.old_authentication_key, val.new_authentication_key),
        });
    };
}

/* ============================== OriginatingAddress =============================== */

export class OriginatingAddress implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::OriginatingAddress`;

    address_map: Table;

    constructor(address_map ? : Table) {
        this.address_map = address_map;
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
        return OriginatingAddress.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return OriginatingAddress.from_bcs_vector(args)
    }

    get_bcs() {
        return OriginatingAddress.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::OriginatingAddress`
    }

    from(arg: OriginatingAddress) {
        this.address_map = arg.address_map;
    }

    static from_bcs(arg: {
        address_map: Table
    }): OriginatingAddress {
        return new OriginatingAddress(arg.address_map)
    }

    static from_bcs_vector(args: {
        address_map: Table
    } []): OriginatingAddress[] {
        return args.map(function(arg) {
            return new OriginatingAddress(arg.address_map)
        })
    }

    static get bcs() {
        return bcs_import.struct("OriginatingAddress", {
            address_map: Table.bcs,
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new OriginatingAddress(val.address_map),
        });
    };
}

/* ============================== RotationCapability =============================== */

export class RotationCapability implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RotationCapability`;

    account: string;

    constructor(account: string) {
        this.account = account;
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
        return RotationCapability.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RotationCapability.from_bcs_vector(args)
    }

    get_bcs() {
        return RotationCapability.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RotationCapability`
    }

    from(arg: RotationCapability) {
        this.account = arg.account;
    }

    static from_bcs(arg: {
        account: string
    }): RotationCapability {
        return new RotationCapability(arg.account)
    }

    static from_bcs_vector(args: {
        account: string
    } []): RotationCapability[] {
        return args.map(function(arg) {
            return new RotationCapability(arg.account)
        })
    }

    static get bcs() {
        return bcs_import.struct("RotationCapability", {
            account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RotationCapability(val.account),
        });
    };
}

/* ============================== RotationCapabilityOfferProofChallenge =============================== */

export class RotationCapabilityOfferProofChallenge implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RotationCapabilityOfferProofChallenge`;

    sequence_number: u64_import;
    recipient_address: string;

    constructor(sequence_number: u64_import, recipient_address: string) {
        this.sequence_number = sequence_number;
        this.recipient_address = recipient_address;
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
        return RotationCapabilityOfferProofChallenge.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RotationCapabilityOfferProofChallenge.from_bcs_vector(args)
    }

    get_bcs() {
        return RotationCapabilityOfferProofChallenge.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RotationCapabilityOfferProofChallenge`
    }

    from(arg: RotationCapabilityOfferProofChallenge) {
        this.sequence_number = arg.sequence_number;
        this.recipient_address = arg.recipient_address;
    }

    static from_bcs(arg: {
        sequence_number: u64_import,
        recipient_address: string
    }): RotationCapabilityOfferProofChallenge {
        return new RotationCapabilityOfferProofChallenge(arg.sequence_number, arg.recipient_address)
    }

    static from_bcs_vector(args: {
        sequence_number: u64_import,
        recipient_address: string
    } []): RotationCapabilityOfferProofChallenge[] {
        return args.map(function(arg) {
            return new RotationCapabilityOfferProofChallenge(arg.sequence_number, arg.recipient_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("RotationCapabilityOfferProofChallenge", {
            sequence_number: bcs_import.u64(),
            recipient_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RotationCapabilityOfferProofChallenge(val.sequence_number, val.recipient_address),
        });
    };
}

/* ============================== RotationCapabilityOfferProofChallengeV2 =============================== */

export class RotationCapabilityOfferProofChallengeV2 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RotationCapabilityOfferProofChallengeV2`;

    chain_id: number;
    sequence_number: u64_import;
    source_address: string;
    recipient_address: string;

    constructor(chain_id: number, sequence_number: u64_import, source_address: string, recipient_address: string) {
        this.chain_id = chain_id;
        this.sequence_number = sequence_number;
        this.source_address = source_address;
        this.recipient_address = recipient_address;
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
        return RotationCapabilityOfferProofChallengeV2.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RotationCapabilityOfferProofChallengeV2.from_bcs_vector(args)
    }

    get_bcs() {
        return RotationCapabilityOfferProofChallengeV2.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RotationCapabilityOfferProofChallengeV2`
    }

    from(arg: RotationCapabilityOfferProofChallengeV2) {
        this.chain_id = arg.chain_id;
        this.sequence_number = arg.sequence_number;
        this.source_address = arg.source_address;
        this.recipient_address = arg.recipient_address;
    }

    static from_bcs(arg: {
        chain_id: number,
        sequence_number: u64_import,
        source_address: string,
        recipient_address: string
    }): RotationCapabilityOfferProofChallengeV2 {
        return new RotationCapabilityOfferProofChallengeV2(arg.chain_id, arg.sequence_number, arg.source_address, arg.recipient_address)
    }

    static from_bcs_vector(args: {
        chain_id: number,
        sequence_number: u64_import,
        source_address: string,
        recipient_address: string
    } []): RotationCapabilityOfferProofChallengeV2[] {
        return args.map(function(arg) {
            return new RotationCapabilityOfferProofChallengeV2(arg.chain_id, arg.sequence_number, arg.source_address, arg.recipient_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("RotationCapabilityOfferProofChallengeV2", {
            chain_id: bcs_import.u8(),
            sequence_number: bcs_import.u64(),
            source_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            recipient_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RotationCapabilityOfferProofChallengeV2(val.chain_id, val.sequence_number, val.source_address, val.recipient_address),
        });
    };
}

/* ============================== RotationProofChallenge =============================== */

export class RotationProofChallenge implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::RotationProofChallenge`;

    sequence_number: u64_import;
    originator: string;
    current_auth_key: string;
    new_public_key: number[];

    constructor(sequence_number: u64_import, originator: string, current_auth_key: string, new_public_key: number[]) {
        this.sequence_number = sequence_number;
        this.originator = originator;
        this.current_auth_key = current_auth_key;
        this.new_public_key = new_public_key;
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
        return RotationProofChallenge.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return RotationProofChallenge.from_bcs_vector(args)
    }

    get_bcs() {
        return RotationProofChallenge.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::RotationProofChallenge`
    }

    from(arg: RotationProofChallenge) {
        this.sequence_number = arg.sequence_number;
        this.originator = arg.originator;
        this.current_auth_key = arg.current_auth_key;
        this.new_public_key = arg.new_public_key;
    }

    static from_bcs(arg: {
        sequence_number: u64_import,
        originator: string,
        current_auth_key: string,
        new_public_key: number[]
    }): RotationProofChallenge {
        return new RotationProofChallenge(arg.sequence_number, arg.originator, arg.current_auth_key, arg.new_public_key)
    }

    static from_bcs_vector(args: {
        sequence_number: u64_import,
        originator: string,
        current_auth_key: string,
        new_public_key: number[]
    } []): RotationProofChallenge[] {
        return args.map(function(arg) {
            return new RotationProofChallenge(arg.sequence_number, arg.originator, arg.current_auth_key, arg.new_public_key)
        })
    }

    static get bcs() {
        return bcs_import.struct("RotationProofChallenge", {
            sequence_number: bcs_import.u64(),
            originator: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            current_auth_key: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            new_public_key: bcs_import.vector(bcs_import.u8()),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new RotationProofChallenge(val.sequence_number, val.originator, val.current_auth_key, val.new_public_key),
        });
    };
}

/* ============================== SignerCapability =============================== */

export class SignerCapability implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SignerCapability`;

    account: string;

    constructor(account: string) {
        this.account = account;
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
        return SignerCapability.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SignerCapability.from_bcs_vector(args)
    }

    get_bcs() {
        return SignerCapability.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SignerCapability`
    }

    from(arg: SignerCapability) {
        this.account = arg.account;
    }

    static from_bcs(arg: {
        account: string
    }): SignerCapability {
        return new SignerCapability(arg.account)
    }

    static from_bcs_vector(args: {
        account: string
    } []): SignerCapability[] {
        return args.map(function(arg) {
            return new SignerCapability(arg.account)
        })
    }

    static get bcs() {
        return bcs_import.struct("SignerCapability", {
            account: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new SignerCapability(val.account),
        });
    };
}

/* ============================== SignerCapabilityOfferProofChallenge =============================== */

export class SignerCapabilityOfferProofChallenge implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SignerCapabilityOfferProofChallenge`;

    sequence_number: u64_import;
    recipient_address: string;

    constructor(sequence_number: u64_import, recipient_address: string) {
        this.sequence_number = sequence_number;
        this.recipient_address = recipient_address;
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
        return SignerCapabilityOfferProofChallenge.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SignerCapabilityOfferProofChallenge.from_bcs_vector(args)
    }

    get_bcs() {
        return SignerCapabilityOfferProofChallenge.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SignerCapabilityOfferProofChallenge`
    }

    from(arg: SignerCapabilityOfferProofChallenge) {
        this.sequence_number = arg.sequence_number;
        this.recipient_address = arg.recipient_address;
    }

    static from_bcs(arg: {
        sequence_number: u64_import,
        recipient_address: string
    }): SignerCapabilityOfferProofChallenge {
        return new SignerCapabilityOfferProofChallenge(arg.sequence_number, arg.recipient_address)
    }

    static from_bcs_vector(args: {
        sequence_number: u64_import,
        recipient_address: string
    } []): SignerCapabilityOfferProofChallenge[] {
        return args.map(function(arg) {
            return new SignerCapabilityOfferProofChallenge(arg.sequence_number, arg.recipient_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("SignerCapabilityOfferProofChallenge", {
            sequence_number: bcs_import.u64(),
            recipient_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new SignerCapabilityOfferProofChallenge(val.sequence_number, val.recipient_address),
        });
    };
}

/* ============================== SignerCapabilityOfferProofChallengeV2 =============================== */

export class SignerCapabilityOfferProofChallengeV2 implements StructClass {
    $type: string = `${do_get_package_address()}::${MODULE_NAME}::SignerCapabilityOfferProofChallengeV2`;

    sequence_number: u64_import;
    source_address: string;
    recipient_address: string;

    constructor(sequence_number: u64_import, source_address: string, recipient_address: string) {
        this.sequence_number = sequence_number;
        this.source_address = source_address;
        this.recipient_address = recipient_address;
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
        return SignerCapabilityOfferProofChallengeV2.from_bcs(arg)
    }

    from_bcs_vector(args: any) {
        return SignerCapabilityOfferProofChallengeV2.from_bcs_vector(args)
    }

    get_bcs() {
        return SignerCapabilityOfferProofChallengeV2.bcs
    }

    get_value() {
        return this
    }

    static $type() {
        return `${do_get_package_address()}::${MODULE_NAME}::SignerCapabilityOfferProofChallengeV2`
    }

    from(arg: SignerCapabilityOfferProofChallengeV2) {
        this.sequence_number = arg.sequence_number;
        this.source_address = arg.source_address;
        this.recipient_address = arg.recipient_address;
    }

    static from_bcs(arg: {
        sequence_number: u64_import,
        source_address: string,
        recipient_address: string
    }): SignerCapabilityOfferProofChallengeV2 {
        return new SignerCapabilityOfferProofChallengeV2(arg.sequence_number, arg.source_address, arg.recipient_address)
    }

    static from_bcs_vector(args: {
        sequence_number: u64_import,
        source_address: string,
        recipient_address: string
    } []): SignerCapabilityOfferProofChallengeV2[] {
        return args.map(function(arg) {
            return new SignerCapabilityOfferProofChallengeV2(arg.sequence_number, arg.source_address, arg.recipient_address)
        })
    }

    static get bcs() {
        return bcs_import.struct("SignerCapabilityOfferProofChallengeV2", {
            sequence_number: bcs_import.u64(),
            source_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            recipient_address: bcs_import.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
        }).transform({
            input: (val: any) => {
                return val
            },
            output: (val) => new SignerCapabilityOfferProofChallengeV2(val.sequence_number, val.source_address, val.recipient_address),
        });
    };
}

function new_event_handle < T0 extends StructClass > (type_args: string[], arg0: string): [Uint8Array] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "new_event_handle", type_args, args);
    return [
        new Uint8Array(r0.Raw[0])
    ];
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

function assert_valid_rotation_proof_signature_and_get_auth_key(arg0: number, arg1: number[], arg2: number[], arg3: RotationProofChallenge): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.u8().serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(RotationProofChallenge.bcs.serialize(arg3).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "assert_valid_rotation_proof_signature_and_get_auth_key", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create_account(arg0: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_account", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create_account_if_does_not_exist(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_account_if_does_not_exist", [], args);

}

function create_account_unchecked(arg0: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_account_unchecked", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create_authorized_signer(arg0: string, arg1: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_authorized_signer", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create_framework_reserved_account(arg0: string): [string, SignerCapability] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_framework_reserved_account", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0])),
        SignerCapability.from_bcs(SignerCapability.bcs.parse(new Uint8Array(r1.Raw[0])))
    ];
}

function create_guid(arg0: string): [GUID] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_guid", [], args);

    return [
        GUID.from_bcs(GUID.bcs.parse(new Uint8Array(r0.Raw[0])))
    ];
}

function create_resource_account(arg0: string, arg1: number[]): [string, SignerCapability] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0, r1] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_resource_account", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0])),
        SignerCapability.from_bcs(SignerCapability.bcs.parse(new Uint8Array(r1.Raw[0])))
    ];
}

function create_resource_address(arg0: string, arg1: number[]): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_resource_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function create_signer_with_capability(arg0: SignerCapability): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(SignerCapability.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "create_signer_with_capability", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function exists_at(arg0: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "exists_at", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_authentication_key(arg0: string): [number[]] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_authentication_key", [], args);

    return [
        bcs_import.vector(bcs_import.u8()).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_guid_next_creation_num(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_guid_next_creation_num", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_rotation_capability_offer_for(arg0: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_rotation_capability_offer_for", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_sequence_number(arg0: string): [u64_import] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_sequence_number", [], args);

    return [
        bcs_import.u64().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_signer_capability_address(arg0: SignerCapability): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(SignerCapability.bcs.serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_signer_capability_address", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function get_signer_capability_offer_for(arg0: string): [string] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "get_signer_capability_offer_for", [], args);

    return [
        bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).parse(new Uint8Array(r0.Raw[0]))
    ];
}

function increment_sequence_number(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "increment_sequence_number", [], args);

}

function is_rotation_capability_offered(arg0: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_rotation_capability_offered", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function is_signer_capability_offered(arg0: string): [boolean] {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    let [r0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "is_signer_capability_offered", [], args);

    return [
        bcs_import.bool().parse(new Uint8Array(r0.Raw[0]))
    ];
}

function offer_rotation_capability(arg0: string, arg1: number[], arg2: number, arg3: number[], arg4: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg4).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "offer_rotation_capability", [], args);

}

function offer_signer_capability(arg0: string, arg1: number[], arg2: number, arg3: number[], arg4: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg4).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "offer_signer_capability", [], args);

}

function register_coin < T0 extends StructClass > (type_args: string[], arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "register_coin", type_args, args);
}

function revoke_any_rotation_capability(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "revoke_any_rotation_capability", [], args);

}

function revoke_any_signer_capability(arg0: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "revoke_any_signer_capability", [], args);

}

function revoke_rotation_capability(arg0: string, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "revoke_rotation_capability", [], args);

}

function revoke_signer_capability(arg0: string, arg1: string) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "revoke_signer_capability", [], args);

}

function rotate_authentication_key(arg0: string, arg1: number, arg2: number[], arg3: number, arg4: number[], arg5: number[], arg6: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg4).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg5).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg6).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "rotate_authentication_key", [], args);

}

function rotate_authentication_key_call(arg0: string, arg1: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "rotate_authentication_key_call", [], args);

}

function rotate_authentication_key_internal(arg0: string, arg1: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg1).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "rotate_authentication_key_internal", [], args);

}

function rotate_authentication_key_with_rotation_capability(arg0: string, arg1: string, arg2: number, arg3: number[], arg4: number[]) {
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
        wasm.new_bytes(bcs_import.u8().serialize(arg2).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg3).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg4).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "rotate_authentication_key_with_rotation_capability", [], args);

}

function update_auth_key_and_originating_address_table(arg0: string, arg1: Account, arg2: number[]) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(Account.bcs.serialize(arg1).toBytes(), ""),
        wasm.new_bytes(bcs_import.vector(bcs_import.u8()).serialize(arg2).toBytes(), "")
    ]

    let [a0] = wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "update_auth_key_and_originating_address_table", [], args);

    arg1.from(arg1.from_bcs_t(new Uint8Array(a0.Raw[0])));
}

function verify_signed_message < T0 extends StructClass > (type_args: string[], arg0: string, arg1: number, arg2: U8[], arg3: U8[], arg4: T0) {
    let wasm = get_wasm();

    let args: any[] = [
        wasm.new_bytes(bcs_import.bytes(32).transform({
            input: (val: string) => fromHEX(val),
            output: (val: Uint8Array) => toHEX(val),
        }).serialize(arg0).toBytes(), ""),
        wasm.new_bytes(bcs_import.u8().serialize(arg1).toBytes(), ""),
        wasm.new_bytes(has_arr(arg2) ? into_arr_bcs_vector(arg2).serialize(into_arr_value(arg2)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(has_arr(arg3) ? into_arr_bcs_vector(arg3).serialize(into_arr_value(arg3)).toBytes() : new Uint8Array([0]), ""),
        wasm.new_bytes(arg4.serialize(arg4.into_value()).toBytes(), "")
    ]

    wasm.call_return_bcs(PACKAGE_ADDRESS, MODULE_NAME, "verify_signed_message", type_args, args);
}

export const account = {
    Account,
    CapabilityOffer,
    CoinRegisterEvent,
    KeyRotation,
    KeyRotationEvent,
    OriginatingAddress,
    RotationCapability,
    RotationCapabilityOfferProofChallenge,
    RotationCapabilityOfferProofChallengeV2,
    RotationProofChallenge,
    SignerCapability,
    SignerCapabilityOfferProofChallenge,
    SignerCapabilityOfferProofChallengeV2,
    new_event_handle,
    initialize,
    assert_valid_rotation_proof_signature_and_get_auth_key,
    create_account,
    create_account_if_does_not_exist,
    create_account_unchecked,
    create_authorized_signer,
    create_framework_reserved_account,
    create_guid,
    create_resource_account,
    create_resource_address,
    create_signer_with_capability,
    exists_at,
    get_authentication_key,
    get_guid_next_creation_num,
    get_rotation_capability_offer_for,
    get_sequence_number,
    get_signer_capability_address,
    get_signer_capability_offer_for,
    increment_sequence_number,
    is_rotation_capability_offered,
    is_signer_capability_offered,
    offer_rotation_capability,
    offer_signer_capability,
    register_coin,
    revoke_any_rotation_capability,
    revoke_any_signer_capability,
    revoke_rotation_capability,
    revoke_signer_capability,
    rotate_authentication_key,
    rotate_authentication_key_call,
    rotate_authentication_key_internal,
    rotate_authentication_key_with_rotation_capability,
    update_auth_key_and_originating_address_table,
    verify_signed_message
}