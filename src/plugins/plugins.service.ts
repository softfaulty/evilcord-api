import { Injectable } from "@nestjs/common";
import type {
    PluginRegistryResponseDto,
    RemotePluginManifestDto
} from "@evilcord/types";

const EXAMPLE_PLUGIN_SOURCE = `export default {
    start() {
        console.log("[ExamplePlugin] started");
    },

    stop() {
        console.log("[ExamplePlugin] stopped");
    }
};
`;

const EXAMPLE_PLUGIN_MANIFEST: RemotePluginManifestDto = {
    id: "example-plugin",
    name: "Example Plugin",
    description: "Tiny test plugin.",
    author: "softfault",
    version: "1.0.0",
    downloadUrl:
        "http://localhost:3000/api/plugins/example-plugin/1.0.0/download",
    hash: "sha256-placeholder",
    tags: ["test"],
    pluginApiVersion: "1",
    loadType: "lazy"
};

@Injectable()
export class PluginsService {
    getPluginRegistry(): PluginRegistryResponseDto {
        return {
            plugins: [EXAMPLE_PLUGIN_MANIFEST]
        };
    }

    getExamplePluginSource(): string {
        return EXAMPLE_PLUGIN_SOURCE;
    }
}
