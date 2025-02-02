import type { Plugin } from "@elizaos/core";
import { aiAgentsMarketOverviewAction } from "./actions/ai-agents-market";
import { aiAgentAnalyzeAction } from "./actions/ai-agent-analyze";

export const coockiePlugin: Plugin = {
    name: "coockie",
    description: "Coockie AI agents market plugin",
    providers: [],
    evaluators: [],
    services: [],
    actions: [
        aiAgentsMarketOverviewAction,
        aiAgentAnalyzeAction
    ],
};

export default coockiePlugin;
