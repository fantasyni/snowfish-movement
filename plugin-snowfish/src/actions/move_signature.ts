import { ActionExample, Content, HandlerCallback, IAgentRuntime, Memory, ModelClass, State, composeContext, elizaLogger, generateObject, type Action } from "@elizaos/core";

import { z } from "zod";
import fs from "fs-extra";
import { setup_move_code_helper, new_move_code_helper, setup_chain_move_code_helper } from "../snowfish/wrappers/sui_wasm";
import { ModeProvider } from "../providers/mode";

export interface MessageContent extends Content {
    module: string;
}

function isContent(content: Content): content is MessageContent {
    return typeof content.module === "string";
}

const messageTemplate = `Respond with a JSON markdown block containing only the extracted values. Use null for any values that cannot be determined.

Example response:
\`\`\`json
{
    "module": "justin_coin_6"
}
\`\`\`

{{recentMessages}}

Given the recent messages, extract the following information about the requested get module disassembled signature move code:
- module name

Respond with a JSON markdown block containing only the extracted values.`;

export default {
    name: "MOVE_SIGNATURE",
    similes: [
        "MOVE_SIGNATURE"
    ],
    validate: async (runtime: IAgentRuntime, message: Memory) => {
        const workspace = runtime.getSetting("SUI_CONTRACTS");
        console.log("Validating DISASSEMBLE from user: ", message.userId, workspace);

        if (workspace && fs.existsSync(workspace)) {
            return true;
        } else {
            return false;
        }
    },
    description: "Get Move Disassembled Signature Code",
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
            module: z.string(),
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
            console.error("Invalid content for MOVE_SIGNATURE action.");
            if (callback) {
                callback({
                    text: "Unable to process get move disassembled signature code request. Invalid content provided.",
                    content: { error: "Invalid module content" },
                });
            }
            return false;
        }

        let module = messageContent.module;
        const modeEnv = new ModeProvider(runtime.cacheManager);

        let move_code_helper = new_move_code_helper();
        const modeInfo = await modeEnv.getAgentMode();
        if (modeInfo && modeInfo.mode == "remote") {
            await setup_chain_move_code_helper(move_code_helper, modeInfo.network, modeInfo.package);
        } else {
            setup_move_code_helper(move_code_helper, runtime.getSetting("SUI_CONTRACTS"), true);
        }

        let f_results = move_code_helper.disassemble(module);
        elizaLogger.log("Starting MOVE_SIGNATURE handler...");

        try {
            let text = `The ${module} Move Module has the following move disassembled signature code \n ${f_results}`;
            if (callback) {
                callback({
                    text: text,
                    content: {  },
                });
            }
            return true;
        } catch(error) {
            console.error("Error get move disassembled signature code:", error);
            if (callback) {
                callback({
                    text: `Error get move disassembled signature code: ${error.message}`,
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
                    text: "get move disassembled signature code for move module",
                },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "Ok, I will show you move disassembled code for this move module",
                    action: "MOVE_SIGNATURE",
                },
            }
        ]
    ] as ActionExample[][],
} as Action;
