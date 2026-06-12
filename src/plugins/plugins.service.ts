import { Injectable } from "@nestjs/common";
import type { PluginRegistryResponseDto } from "@evilcord/types";

@Injectable()
export class PluginsService {
    getPluginRegistry(): PluginRegistryResponseDto {
        return {
            plugins: []
        };
    }
}
