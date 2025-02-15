import {
    ActionExample,
    Content,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    ModelClass,
    State,
    composeContext,
    elizaLogger,
    generateObject,
    type Action,
} from "@elizaos/core";

import fs from "fs-extra";
import { setup_move_code_helper, new_move_code_helper, setup_chain_move_code_helper } from "../snowfish/wrappers/sui_wasm";
import { ModeProvider } from "../providers/mode";

export default {
    name: "GET_MODULES",
    similes: [
        "QUERY_MODULES"
    ],
    validate: async (runtime: IAgentRuntime, message: Memory) => {
        const workspace = runtime.getSetting("SUI_CONTRACTS");
        console.log("Validating GET_MODULES from user: ", message.userId, workspace);

        if (workspace && fs.existsSync(workspace)) {
            return true;
        } else {
            return false;
        }
    },
    description: "Query Move Modules",
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: { [key: string]: unknown },
        callback?: HandlerCallback
    ): Promise<boolean> => {
        const modeEnv = new ModeProvider(runtime.cacheManager);
        let move_code_helper = new_move_code_helper();
        const modeInfo = await modeEnv.getAgentMode();
        if (modeInfo && modeInfo.mode == "remote") {
            await setup_chain_move_code_helper(move_code_helper, modeInfo.network, modeInfo.package);
        } else {
            setup_move_code_helper(move_code_helper, runtime.getSetting("SUI_CONTRACTS"), true);
        }
        let modules = move_code_helper.get_modules();
        elizaLogger.log("Starting GET_MODULES handler...");

        let results = "";
        try {
            results = JSON.parse(modules).join("\n");
            let text = `Current Move Modules are \n ${results}`;
            if (callback) {
                callback({
                    text: text,
                    content: {  },
                });
            }
            return true;
        } catch(error) {
            console.error("Error get modules:", error);
            if (callback) {
                callback({
                    text: `Error get modules: ${error.message}`,
                    content: { error: error.message },
                });
            }
            return false;
        }
    },

    examples: [
        [
            {
                user: "{{user1}}",
                content: {
                    text: "get current move modules",
                },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "Ok, I will show you current move modules",
                    action: "GET_MODULES",
                },
            }
        ],
    ] as ActionExample[][],
} as Action;
