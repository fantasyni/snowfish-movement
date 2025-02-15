import { ActionExample, Content, HandlerCallback, IAgentRuntime, Memory, ModelClass, State, composeContext, elizaLogger, generateObject, type Action } from "@elizaos/core";

import { z } from "zod";
import fs from "fs-extra";
import { modeProvider } from "../providers/mode";

export default {
    name: "GET_MODE",
    similes: [
        "GET_MODE"
    ],
    validate: async (runtime: IAgentRuntime, message: Memory) => {
        const workspace = runtime.getSetting("SUI_CONTRACTS");
        console.log("Validating GET_MODE from user: ", message.userId, workspace);

        if (workspace && fs.existsSync(workspace)) {
            return true;
        } else {
            return false;
        }
    },
    description: "Get Agent Mode",
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: { [key: string]: unknown },
        callback?: HandlerCallback
    ): Promise<boolean> => {
        // Initialize or update state
        if (!state) {
            state = (await runtime.composeState(message)) as State;
        } else {
            state = await runtime.updateRecentMessageState(state);
        }

        elizaLogger.log("Starting GET_MODE handler...");

        try {
            let text = await modeProvider.get(runtime, message, state);

            if (callback) {
                callback({
                    text: text,
                    content: {  },
                });
            }
            return true;
        } catch(error) {
            console.error("Error get agent mode:", error);
            if (callback) {
                callback({
                    text: `Error get agent mode: ${error.message}`,
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
                    text: "help get current agent mode",
                },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "Ok, I will set agent mode as you like",
                    action: "GET_MODE",
                },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "The agent is set in remote mode, network is mainnet, package is 0x834a86970ae93a73faf4fff16ae40bdb72b91c47be585fff19a2af60a19ddca3",
                },
            }
        ]
    ] as ActionExample[][],
} as Action;
