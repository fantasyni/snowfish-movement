export * from "./sui_wasm_bg.js";
import { __wbg_set_wasm } from "./sui_wasm_bg.js";
import * as bg from "./sui_wasm_bg.js"

import fs from "fs";
import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let bytes = fs.readFileSync(__dirname + "/sui_wasm_bg.wasm")
const wasmModule = new WebAssembly.Module(bytes);
let funcs = []

for (var k in bg) {
    funcs.push(k);
}

const importObject = {
    "./sui_wasm_bg.js": {}
};

import { set_env } from "./env.js";
set_env(importObject);

for (var i = 0; i < funcs.length; i++) {
    importObject["./sui_wasm_bg.js"][funcs[i]] = bg[funcs[i]];
}

const wasmInstance = new WebAssembly.Instance(wasmModule, importObject);
__wbg_set_wasm(wasmInstance.exports);
export { wasmInstance };