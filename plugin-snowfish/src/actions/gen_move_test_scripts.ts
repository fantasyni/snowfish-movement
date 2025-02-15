import {
    ActionExample,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    State,
    elizaLogger,
    type Action,
} from "@elizaos/core";

import fs from "fs-extra";
import { gen_move_test_scripts, new_move_gen } from "../snowfish/wrappers/sui_wasm";

// GEN_MOVE_TEST_SCRIPTS

export default {
    name: "GEN_MOVE_TEST_SCRIPTS",
    similes: [
        "GEN_MOVE_TEST_SCRIPTS"
    ],
    validate: async (runtime: IAgentRuntime, message: Memory) => {
        const workspace = runtime.getSetting("SUI_CONTRACTS");
        console.log("Validating GEN_MOVE_TEST_SCRIPTS from user: ", message.userId, workspace);

        if (workspace && fs.existsSync(workspace)) {
            return true;
        } else {
            return false;
        }
    },
    description: "Generate Move Test Scripts",
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: { [key: string]: unknown },
        callback?: HandlerCallback
    ): Promise<boolean> => {

        elizaLogger.log("Starting GEN_MOVE_TEST_SCRIPTS handler...");

        let results = "";
        try {
            let move_gen = new_move_gen();
            gen_move_test_scripts(move_gen, runtime.getSetting("SUI_CONTRACTS"), runtime.getSetting("SUI_WORKSPACE"));
            let text = `Action generate move test scripts is done \n`;
            if (callback) {
                callback({
                    text: text,
                    content: {  },
                });
            }
            return true;
        } catch(error) {
            console.error("Error generate move test scripts:", error);
            if (callback) {
                callback({
                    text: `Error generate move test scripts: ${error.message}`,
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
                    text: "help generate move test scripts",
                },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "Ok, I will generate move test scripts for you",
                    action: "GEN_MOVE_TEST_SCRIPTS",
                },
            }
        ],
    ] as ActionExample[][],
} as Action;
