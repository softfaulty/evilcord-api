export type RemotePluginLoadType = "boot" | "lazy";

export type RemotePluginManifestDto = {
    id: string;
    name: string;
    description: string;
    author: string;
    version: string;
    downloadUrl: string;
    hash: string;
    tags: string[];
    pluginApiVersion?: string;
    minClientVersion?: string;
    maxClientVersion?: string;
    discordBuild?: string;
    changelog?: string;
    loadType?: RemotePluginLoadType;
};

export type PluginRegistryResponseDto = {
    plugins: RemotePluginManifestDto[];
};
