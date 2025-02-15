/* tslint:disable */
/* eslint-disable */
export type CallArgument = { Raw: [number[], string] };

export class MoveCodeHelper {
  free(): void;
  /**
   * @returns {MoveCodeHelper}
   */
  static new(): MoveCodeHelper;
  /**
   * @param {string} module
   * @param {Uint8Array} binary
   */
  register_module(module: string, binary: Uint8Array): void;
  build_bytecode_model(): void;
  /**
   * @returns {string}
   */
  get_package_info(): string;
  /**
   * @returns {string}
   */
  get_modules(): string;
  /**
   * @param {string} module_name
   * @returns {string}
   */
  get_functions(module_name: string): string;
  /**
   * @param {string} module_name
   * @returns {string}
   */
  get_structs(module_name: string): string;
  /**
   * @param {string} module_name
   * @returns {string}
   */
  get_dependencies(module_name: string): string;
  /**
   * @param {string} module_name
   * @returns {string}
   */
  get_friends(module_name: string): string;
  /**
   * @param {string} module_name
   * @returns {string}
   */
  get_named_constants(module_name: string): string;
  /**
   * @param {string} module_name
   * @returns {string}
   */
  get_objects(module_name: string): string;
  /**
   * @param {string} module_name
   * @param {boolean} transitive
   * @returns {string}
   */
  get_shared_objects(module_name: string, transitive: boolean): string;
  /**
   * @param {string} module_name
   * @param {boolean} transitive
   * @returns {string}
   */
  get_transferred_objects(module_name: string, transitive: boolean): string;
  /**
   * @param {string} module_name
   * @param {boolean} transitive
   * @returns {string}
   */
  get_frozen_objects(module_name: string, transitive: boolean): string;
  /**
   * @param {string} module_name
   * @param {boolean} transitive
   * @returns {string}
   */
  get_events(module_name: string, transitive: boolean): string;
  /**
   * @param {string} module_name
   * @returns {string}
   */
  disassemble(module_name: string): string;
  /**
   * @param {string} module_name
   * @param {string} func_name
   * @returns {string}
   */
  disassemble_function(module_name: string, func_name: string): string;
  /**
   * @param {string} module_name
   * @param {string} func_name
   * @returns {string}
   */
  disassemble_function_body(module_name: string, func_name: string): string;
  /**
   * @param {string} module_name
   * @param {string} struct_name
   * @returns {string}
   */
  disassemble_struct(module_name: string, struct_name: string): string;
  /**
   * @param {string} module_name
   * @returns {string}
   */
  move_disassemble(module_name: string): string;
  /**
   * @param {string} module_name
   * @returns {string}
   */
  get_otw_structs(module_name: string): string;
  /**
   * @param {string} module_name
   * @returns {string}
   */
  get_tx_context_functions(module_name: string): string;
  /**
   * @param {string} module_name
   * @returns {string}
   */
  get_entry_functions(module_name: string): string;
  /**
   * @param {string} module_name
   * @returns {string}
   */
  get_private_functions(module_name: string): string;
  /**
   * @param {string} module_name
   * @returns {string}
   */
  get_friend_functions(module_name: string): string;
  /**
   * @param {string} module_name
   * @returns {string}
   */
  get_public_functions(module_name: string): string;
  /**
   * @param {string} module_name
   * @returns {string}
   */
  get_phantom_structs(module_name: string): string;
  /**
   * @param {string} module_name
   * @returns {string}
   */
  unused_private_functions(module_name: string): string;
  /**
   * @param {string} module_name
   * @returns {string}
   */
  unused_constant(module_name: string): string;
  /**
   * @param {string} module_name
   * @returns {string}
   */
  unchecked_return(module_name: string): string;
}
export class MoveGen {
  free(): void;
  /**
   * @returns {MoveGen}
   */
  static new(): MoveGen;
  /**
   * @param {string} module
   * @param {Uint8Array} binary
   */
  register_module(module: string, binary: Uint8Array): void;
  build_bytecode_model(): void;
  /**
   * @param {string} out
   */
  run_move_gen(out: string): void;
  /**
   * @param {string} out
   */
  run_move_tx_gen(out: string): void;
  /**
   * @param {string} out
   * @param {string} package_id
   * @param {Uint8Array} binary
   */
  run_module_gen(out: string, package_id: string, binary: Uint8Array): void;
}
export class SuiWasm {
  free(): void;
  /**
   * @param {Uint8Array} bytes
   * @param {string} type_tag
   * @returns {CallArgument}
   */
  new_bytes(bytes: Uint8Array, type_tag: string): CallArgument;
  /**
   * @returns {SuiWasm}
   */
  static new_wasm(): SuiWasm;
  refresh_vm(): void;
  /**
   * @param {Uint8Array} binary
   */
  publish_module(binary: Uint8Array): void;
  setup_storage(): void;
  /**
   * @param {(CallArgument)[]} args
   * @returns {string}
   */
  to_json(args: (CallArgument)[]): string;
  /**
   * @param {string} account_address
   * @param {string} module
   * @param {string} _function
   * @param {(string)[]} ty_args
   * @param {(CallArgument)[]} args
   * @returns {(CallArgument)[]}
   */
  call_return_bcs(account_address: string, module: string, _function: string, ty_args: (string)[], args: (CallArgument)[]): (CallArgument)[];
}
