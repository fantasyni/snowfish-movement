import {
    IAgentRuntime,
    ICacheManager,
    Memory,
    Provider,
    State,
} from "@elizaos/core";

import BigNumber from "bignumber.js";
import NodeCache from "node-cache";
import * as path from "path";

interface ModeEnv {
    mode: 'local' | 'remote';
    network?: 'mainnet' | 'testnet' | 'devnet' | 'localnet';
    package?: string;
}

const ModeCacheKey = `agent-mode`;

export class ModeProvider {
    private cache: NodeCache;
    private cacheKey: string = "agent/mode";

    constructor(
        private cacheManager: ICacheManager
    ) {
        this.cache = new NodeCache({ stdTTL: 300 }); // Cache TTL set to 5 minutes
    }

    private async readFromCache<T>(key: string): Promise<T | null> {
        const cached = await this.cacheManager.get<T>(
            path.join(this.cacheKey, key)
        );
        return cached;
    }

    private async writeToCache<T>(key: string, data: T): Promise<void> {
        await this.cacheManager.set(path.join(this.cacheKey, key), data, {
            expires: Date.now() + 60 * 60 * 1000 * 24 * 30,
        });
    }

    private async getCachedData<T>(key: string): Promise<T | null> {
        // Check in-memory cache first
        const cachedData = this.cache.get<T>(key);
        if (cachedData) {
            return cachedData;
        }

        // Check file-based cache
        const fileCachedData = await this.readFromCache<T>(key);
        if (fileCachedData) {
            // Populate in-memory cache
            this.cache.set(key, fileCachedData);
            return fileCachedData;
        }

        return null;
    }

    private async setCachedData<T>(cacheKey: string, data: T): Promise<void> {
        // Set in-memory cache
        this.cache.set(cacheKey, data);

        // Write to file-based cache
        await this.writeToCache(cacheKey, data);
    }

    formatPortfolio(runtime, portfolio: ModeEnv): string {
        let output = `agent is in ${portfolio.mode} mode `
        if (portfolio.network) {
            output += `network is ${portfolio.network} `;
        }
        if (portfolio.package) {
            output += `package is ${portfolio.package}`;
        }

        return output;
    }

    async setAgentMode(mode: ModeEnv): Promise<void> {
        return this.setCachedData<ModeEnv>(ModeCacheKey, mode);
    }

    async getAgentMode(): Promise<ModeEnv|null> {
        const cachedValue = await this.getCachedData<ModeEnv>(ModeCacheKey);
        return cachedValue;
    }

    async getFormattedPortfolio(runtime): Promise<string> {
        try {
            let mode = await this.getAgentMode();

            if (mode) {
                return this.formatPortfolio(runtime, mode);
            } else {
                return this.formatPortfolio(runtime, {
                    mode: "local"
                });
            }
        } catch (error) {
            console.error("Error generating portfolio report:", error);
            return "Unable to fetch wallet information. Please try again later.";
        }
    }
}

const modeProvider: Provider = {
    get: async (
        runtime: IAgentRuntime,
        _message: Memory,
        _state?: State
    ): Promise<string | null> => {
        try {
            const provider = new ModeProvider(
                runtime.cacheManager
            );
            return await provider.getFormattedPortfolio(runtime);
        } catch (error) {
            console.error("Error in mode provider:", error);
            return null;
        }
    },
};

// Module exports
export { modeProvider };
