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

import { z } from "zod";
import fs from "fs-extra";
import { gen_chain_move_module, new_move_gen } from "../snowfish/wrappers/sui_wasm";

export interface MessageContent extends Content {
    network: 'mainnet' | 'testnet' | 'devnet' | 'localnet';
    package: string;
    out: string;
}

function isContent(content: Content): content is MessageContent {
    return typeof content.network === "string" && typeof content.package === "string" && typeof content.out === "string";
}

const messageTemplate = `Respond with a JSON markdown block containing only the extracted values. Use null for any values that cannot be determined.

Example response:
\`\`\`json
{
    "network": "mainnet",
    "package": "packageid",
    "out" : "out dir"
}
\`\`\`

{{recentMessages}}

Given the recent messages, extract the following information about the requested generate chain move module:
- network
- package id
- generate output directory

Respond with a JSON markdown block containing only the extracted values.`;

export default {
    name: "GEN_CHAIN_MOVE_MODULE",
    similes: [
        "GEN_CHAIN_MOVE_MODULE"
    ],
    validate: async (runtime: IAgentRuntime, message: Memory) => {
        const workspace = runtime.getSetting("SUI_CONTRACTS");
        console.log("Validating GEN_CHAIN_MOVE_MODULE from user: ", message.userId, workspace);

        if (workspace && fs.existsSync(workspace)) {
            return true;
        } else {
            return false;
        }
    },
    description: "Generate Chain Move Module",
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

        // Define the schema for the expected output
        const messageSchema = z.object({
            network: z.string(),
            package: z.string(),
            out: z.string(),
        });

        // Compose context
        const messageContext = composeContext({
            state,
            template: messageTemplate,
        });

        // Generate content with the schema
        const content = await generateObject({
            runtime,
            context: messageContext,
            schema: messageSchema,
            modelClass: ModelClass.SMALL,
        });

        const messageContent = content.object as MessageContent;

        // Validate content
        if (!isContent(messageContent)) {
            console.error("Invalid content for GEN_CHAIN_MOVE_MODULE action.");
            if (callback) {
                callback({
                    text: "Unable to process generate chain move module request. Invalid content provided.",
                    content: { error: "Invalid module content" },
                });
            }
            return false;
        }

        elizaLogger.log("Starting GEN_CHAIN_MOVE_MODULE handler...");

        let results = "";
        try {
            let move_gen = new_move_gen();
            await gen_chain_move_module(move_gen, messageContent.network, messageContent.package, messageContent.out);
            let text = `Action generate chain move module is done \n`;
            if (callback) {
                callback({
                    text: text,
                    content: {  },
                });
            }
            return true;
        } catch(error) {
            console.error("Error generate chain move module:", error);
            if (callback) {
                callback({
                    text: `Error generate chain move module: ${error.message}`,
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
                    text: "help generate chain move module, network is mainnet, package is 0x834a86970ae93a73faf4fff16ae40bdb72b91c47be585fff19a2af60a19ddca3, output directory is /home/justin/aiagent/wasm_test/deps",
                },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "Ok, I will generate chain move module for you",
                    action: "GEN_CHAIN_MOVE_MODULE",
                },
            }
        ],
    ] as ActionExample[][],
} as Action;
