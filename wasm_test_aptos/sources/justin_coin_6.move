module wasm_test::justin_coin_6 {
    struct JustinCoin6 {}

    fun init_module(sender: &signer) {
        aptos_framework::managed_coin::initialize<JustinCoin6>(
            sender,
            b"Justin Coin",
            b"JST",
            6,
            false,
        );
    }
}
