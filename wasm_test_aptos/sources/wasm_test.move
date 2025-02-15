/// Module: wasm_test
module wasm_test::wasm_test {
    use std::event::{emit};
    use std::signer;
    use std::string::{Self, String};
    use std::vector;

    const EInvalidASCIICharacter: u64 = 0x10086;
    const EInvalidASCIICharacte2r: u64 = 0x100;

    struct MyUrl has store, copy, drop {
        url: String,
    }

    struct MyObject has key {
        name: String,
        num: u16,
    }

    struct MyStruct {
        id: u8,
        name: String,
        urls: vector<MyUrl>
    }

    struct MyStructT<T, phantom T1> {
        id: u8,
        name: String,
        x: Foo<T>,
        y: Foo3<T1>
    }

    struct Foo3<phantom T> has drop {
    }

    struct Foo<T> {
        x: T,
        for: T,
    }

    struct Foo2<T0, T1> {
        num1: u16,
        x: T0,
        num2: u16,
        y: T0,
        z: T0,
        num3: bool,
        v: vector<vector<T1>>
    }

    public fun get(): u8 {
        10
    }

    public fun get_vec(): (address, String, u8, vector<u16>, MyUrl) {
        let v = vector::empty<u16>();
        vector::push_back(&mut v, 10);
        vector::push_back(&mut v, 20);
        (@0x0000000000000000000000000000000089b9f9d1fadc027cf9532d6f99041522, string::utf8(b"JUSTIN_MFT"), 10, v, MyUrl {
            url: string::utf8(b"www.baidu.com")
        })
    }

    public fun get_str(): String {
        string::utf8(b"JUSTIN_NFT")
    }

    public fun set_int(num: u64): u64 {
        num
    }

    public fun get_struct(): MyStruct {
        MyStruct {
            id: 100,
            name: string::utf8(b"get_struct"),
            urls: vector[]
        }
    }

    public fun set_struct(v: MyStruct): vector<MyStruct> {
        let r = vector[];
        vector::push_back(&mut r, v);
        r
    }

    public fun set_struct_t<T>(id: T): vector<T> {
        let v = vector[];
        vector::push_back(&mut v, id);
        v
    }

    public fun set_struct_t2<T>(id: T): T {
        id
    }

    public fun set_foo2<T>(a: Foo<T>): Foo<T> {
        a
    }

    public fun set_foo_str(a: Foo<String>): Foo<String> {
        a
    }

    public fun set_foo(a: Foo<u16>): Foo<u16> {
        a
    }

    public fun set_foo_vector(a: vector<Foo<u16>>): vector<Foo<u16>> {
        a
    }

    public fun set_foo_vector2<T>(a: vector<Foo<T>>): vector<Foo<T>> {
        a
    }

    public fun set_foo_vector3<T>(): vector<Foo<T>> {
        vector[]
    }

    public fun set_foo_vector5<T>(_bytes: &vector<u8>, v: vector<vector<u64>>): (vector<Foo<T>>, vector<vector<u64>>) {
        (vector[], v)
    }

    public fun get_foo(): Foo<u16> {
        Foo<u16> {
            x: 100,
            for: 200
        }
    }

    public fun set_foo3(a: Foo2<u8, u16>): Foo2<u8, u16> {
        a
    }

    public fun set_foo5<T>(a: Foo2<T, u16>): Foo2<T, u16> {
        a
    }

    public fun set_foo6<T>(a: Foo2<Foo2<T, u16>, u8>): Foo2<Foo2<T, u16>, u8> {
        a
    }

    public fun set_myobject(obj: &mut MyObject): u16 {
        obj.num = 100;
        100
    }

    public fun set_mut_string(num: u8, str: &mut String): u8 {
        string::append(str, string::utf8(b"mut string"));
        num
    }

    #[event]
    struct SetStringEvent has drop, store {
        str: String,
    }

    public fun set_string(str: String): String {
        emit(SetStringEvent {
            str
        });
        str
    }

    public fun set_foo7<T0, T1>(a: &mut Foo2<T0, T1>){
        a.num1 = 100
    }

    public fun use_const(): u64 {
        let a = EInvalidASCIICharacter;
        let b: u64 = 100;
        let c = EInvalidASCIICharacte2r;
        // b = a;
        b = b + 1;
        b
    }

    entry fun set_entry() {
        let a = EInvalidASCIICharacter;
        use_const();
    }

    fun set_entry2(): u64 {
        let a = use_const();
        if (a > 0) {
            a + 1
        } else {
            a
        }
    }

    fun loop2() {
        let i: u128 = 1;
        while (true) {
            let a = use_const();
            // let b = a + 1;
            // if (b > 10000) {
            //     return
            // }
            i = i + 1;
            if (i > 100) {
                break;
            } else {
                continue;
            }
        }
    }

    public fun test_signer(account: &signer): address {
        let account_addr = signer::address_of(account);
        account_addr
    }
}