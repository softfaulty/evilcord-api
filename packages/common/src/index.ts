import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

const PLUGIN_HASH_ALGORITHM = "sha256";

export function hashPluginBytes(bytes: Buffer | Uint8Array): string {
    const digest = createHash(PLUGIN_HASH_ALGORITHM)
        .update(bytes)
        .digest("hex");

    return `${PLUGIN_HASH_ALGORITHM}-${digest}`;
}

export async function hashFile(filePath: string): Promise<string> {
    return hashPluginBytes(await readFile(filePath));
}
