import { Injectable } from "@nestjs/common";
import type { PluginRegistryResponseDto } from "@evilcord/types";

const EXAMPLE_PLUGIN_SOURCE = `export default {
    start() {
        console.log("[ExamplePlugin] started");
    },

    stop() {
        console.log("[ExamplePlugin] stopped");
    }
};
`;

@Injectable()
export class PluginsService {
    getPluginRegistry(): PluginRegistryResponseDto {
        return {
            plugins: []
        };
    }

    getExamplePluginSource(): string {
        return EXAMPLE_PLUGIN_SOURCE;
    }
}
