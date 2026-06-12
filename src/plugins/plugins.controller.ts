import { Controller, Get, Header } from "@nestjs/common";
import type { PluginRegistryResponseDto } from "@evilcord/types";

import { PluginsService } from "./plugins.service";

@Controller("api/plugins")
export class PluginsController {
    constructor(private readonly pluginsService: PluginsService) {}

    @Get()
    getPluginRegistry(): PluginRegistryResponseDto {
        return this.pluginsService.getPluginRegistry();
    }

    @Get("example-plugin/1.0.0/download")
    @Header("Content-Type", "application/javascript; charset=utf-8")
    downloadExamplePlugin(): string {
        return this.pluginsService.getExamplePluginSource();
    }
}
