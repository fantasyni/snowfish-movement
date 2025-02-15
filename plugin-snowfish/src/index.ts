import { Plugin } from "@elizaos/core";
import get_modules from "./actions/get_modules.ts";
import get_functions from "./actions/get_functions";
import get_structs from "./actions/get_structs.ts";
import get_dependencies from "./actions/get_dependencies.ts";
import get_friends from "./actions/get_friends.ts";
import get_objects from "./actions/get_objects.ts";
import get_shared_objects from "./actions/get_shared_objects.ts";
import get_transferred_objects from "./actions/get_transferred_objects.ts";
import get_frozen_objects from "./actions/get_frozen_objects.ts";
import get_events from "./actions/get_events.ts";
import move_signature from "./actions/move_signature.ts";
import move_disassemble from "./actions/move_disassemble.ts";
import get_function_signature from "./actions/get_function_signature.ts";
import get_struct_definition from "./actions/get_struct_definition.ts";
import get_otw_structs from "./actions/get_otw_structs.ts";
import get_tx_context_functions from "./actions/get_tx_context_functions.ts";
import get_phantom_structs from "./actions/get_phantom_structs.ts";
import get_entry_functions from "./actions/get_entry_functions.ts";
import get_private_functions from "./actions/get_private_functions.ts";
import get_friend_functions from "./actions/get_friend_functions.ts";
import get_public_functions from "./actions/get_public_functions.ts";
import set_mode from "./actions/set_mode.ts";
import get_mode from "./actions/get_mode.ts";
import unchecked_return from "./actions/unchecked_return.ts";
import unused_constant from "./actions/unused_constant.ts";
import unused_private_functions from "./actions/unused_private_functions.ts";
import gen_move_test_scripts from "./actions/gen_move_test_scripts.ts";
import gen_chain_move_module from "./actions/gen_chain_move_module.ts";
import security_scan from "./actions/security_scan.ts";

import { modeProvider } from "./providers/mode.ts";

export const snowfishPlugin: Plugin = {
    name: "snowfish",
    description: "snowfish Plugin for Eliza",
    actions: [
        get_modules, get_functions, get_structs, get_dependencies, get_friends,
        get_objects, get_shared_objects, get_transferred_objects, get_frozen_objects, get_events,
        move_signature, move_disassemble, get_function_signature, get_struct_definition, get_otw_structs,
        get_tx_context_functions, get_phantom_structs, get_entry_functions, get_private_functions,
        get_friend_functions, get_public_functions, set_mode, get_mode,
        unchecked_return, unused_constant, unused_private_functions,
        gen_move_test_scripts, gen_chain_move_module, security_scan
    ],
    evaluators: [],
    providers: [modeProvider],
};

export default snowfishPlugin;
