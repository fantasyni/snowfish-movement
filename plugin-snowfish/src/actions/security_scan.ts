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

Given the recent messages, extract the following information about the requested security code analysis:
- module name

Respond with a JSON markdown block containing only the extracted values.`;

export default {
    name: "SECURITY_SCAN",
    similes: [
        "SECURITY_SCAN"
    ],
    validate: async (runtime: IAgentRuntime, message: Memory) => {
        const workspace = runtime.getSetting("SUI_CONTRACTS");
        console.log("Validating SECURITY_SCAN from user: ", message.userId, workspace);

        if (workspace && fs.existsSync(workspace)) {
            return true;
        } else {
            return false;
        }
    },
    description: "security code analysis",
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
            console.error("Invalid content for SECURITY_SCAN action.");
            if (callback) {
                callback({
                    text: "Unable to process run security code analysis request. Invalid content provided.",
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

        let f_results0 = move_code_helper.unused_private_functions(module);
        let f_results1 = move_code_helper.unused_constant(module);
        let f_results2 = move_code_helper.unchecked_return(module);
        let d_structs = move_code_helper.get_structs(module);
        let d_functions = move_code_helper.get_functions(module);
        elizaLogger.log("Starting SECURITY_SCAN handler...");

        try {
            let results0 = JSON.parse(f_results0);
            let results1 = JSON.parse(f_results1);
            let results2 = JSON.parse(f_results2);
            let functions = JSON.parse(d_functions);
            let structs = JSON.parse(d_structs);

            let text = `Running security code analysis for ${module} Move Module \n`;
            text += `It defines ${structs.length} structs and ${functions.length} functions \n\n`;
            if (results0.length || results1.length || results2.length) {
                text += `It founds the following security concerns \n\n`;
            }
            if (results0.length) {
                text += `[warning] unused private functions \n ${results0.join("\n")} \n\n`;
            }
            if (results1.length) {
                text += `[warning] unused constant \n`;
                for(var i = 0;i<results1.length;i+=2) {
                    let func_name = results1[i];
                    let constant_name = results1[i+1];
                    text += (`function: ${func_name} \n      ${JSON.parse(constant_name).join(", ")}\n`)
                }
                text += `\n`
            }
            if (results2.length) {
                text += `[warning] unchecked function result calls \n`;
                for(var i = 0;i<results2.length;i+=2) {
                    let func_name = results2[i];
                    let call_name = results2[i+1];
                    text += (`function: ${func_name} \n      ${JSON.parse(call_name).join(", ")}\n`)
                }
                text += `\n`
            }
            if (callback) {
                callback({
                    text: text,
                    content: {  },
                });
            }
            return true;
        } catch(error) {
            console.error("Error run security code analysis:", error);
            if (callback) {
                callback({
                    text: `Error run security code analysis: ${error.message}`,
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
                    text: "run security scan for move module",
                },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "Ok, I will begin security code analysis for this move module",
                    action: "SECURITY_SCAN",
                },
            }
        ]
    ] as ActionExample[][],
} as Action;
