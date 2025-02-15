import { ActionExample, Content, HandlerCallback, IAgentRuntime, Memory, ModelClass, State, composeContext, elizaLogger, generateObject, type Action } from "@elizaos/core";

import { z } from "zod";
import fs from "fs-extra";
import { ModeProvider, modeProvider } from "../providers/mode";

export interface MessageContent extends Content {
    mode: 'local' | 'remote';
    network: 'mainnet' | 'testnet' | 'devnet' | 'localnet';
    package: string;
}

function isContent(content: Content): content is MessageContent {
    return typeof content.mode === "string" && typeof content.network === "string" && typeof content.package === "string";
}

const messageTemplate = `Respond with a JSON markdown block containing only the extracted values. Use null for any values that cannot be determined.

Example response:
\`\`\`json
{
    "mode": "local"
    "network": "mainnet",
    "package": "packageid"
}
\`\`\`

{{recentMessages}}

Given the recent messages, extract the following information about the requested set mode:
- mode
- network
- package id

Respond with a JSON markdown block containing only the extracted values.`;

export default {
    name: "SET_MODE",
    similes: [
        "SET_MODE"
    ],
    validate: async (runtime: IAgentRuntime, message: Memory) => {
        const workspace = runtime.getSetting("SUI_CONTRACTS");
        console.log("Validating SET_MODE from user: ", message.userId, workspace);

        if (workspace && fs.existsSync(workspace)) {
            return true;
        } else {
            return false;
        }
    },
    description: "Set Agent Mode",
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
            mode: z.string(),
            network: z.string(),
            package: z.string()
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
            console.error("Invalid content for SET_MODE action.");
            if (callback) {
                callback({
                    text: "Unable to process set mode request. Invalid content provided.",
                    content: { error: "Invalid module content" },
                });
            }
            return false;
        }

        elizaLogger.log("Starting SET_MODE handler...");

        try {
            const modeInfo = new ModeProvider(runtime.cacheManager);
            await modeInfo.setAgentMode({
                mode: messageContent.mode,
                network: messageContent.network,
                package: messageContent.package
            })

            let text = `The agent is set in ${messageContent.mode} `;
            if (messageContent.network) {
                text += `network is ${messageContent.network} `;
            }
            if (messageContent.package) {
                text += `package is ${messageContent.package}`;
            }

            if (callback) {
                callback({
                    text: text,
                    content: {  },
                });
            }
            return true;
        } catch(error) {
            console.error("Error set agent mode:", error);
            if (callback) {
                callback({
                    text: `Error set agent mode: ${error.message}`,
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
                    text: "help set agent in remote mode, network is mainnet, package is 0x834a86970ae93a73faf4fff16ae40bdb72b91c47be585fff19a2af60a19ddca3",
                },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "Ok, I will set agent mode as you like",
                    action: "SET_MODE",
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
