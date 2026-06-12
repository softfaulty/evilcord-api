import { Controller, Get } from "@nestjs/common";
import type { PluginRegistryResponseDto } from "@evilcord/types";

import { PluginsService } from "./plugins.service";

@Controller("api/plugins")
export class PluginsController {
    constructor(private readonly pluginsService: PluginsService) {}

    @Get()
    getPluginRegistry(): PluginRegistryResponseDto {
        return this.pluginsService.getPluginRegistry();
    }
}
