import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import request from "supertest";
import { App } from "supertest/types";

import { AppModule } from "../src/app.module";

describe("PluginsController (e2e)", () => {
    let app: INestApplication<App>;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule]
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it("/api/plugins (GET)", () => {
        return request(app.getHttpServer())
            .get("/api/plugins")
            .expect(200)
            .expect({
                plugins: [
                    {
                        id: "example-plugin",
                        name: "Example Plugin",
                        description: "Tiny test plugin.",
                        author: "softfault",
                        version: "1.0.0",
                        downloadUrl:
                            "http://localhost:3000/api/plugins/example-plugin/1.0.0/download",
                        hash: "sha256-e5b0f66442ead2ba2fda5fcd2abb9c850b4e3163473a64f0f88482f1b9d61784",
                        tags: ["test"],
                        pluginApiVersion: "1",
                        loadType: "lazy"
                    }
                ]
            });
    });

    it("/api/plugins/example-plugin/1.0.0/download (GET)", () => {
        return request(app.getHttpServer())
            .get("/api/plugins/example-plugin/1.0.0/download")
            .expect("Content-Type", /javascript/)
            .expect(200)
            .expect((res) => {
                expect(res.text).toContain("export default");
                expect(res.text).toContain("[ExamplePlugin] started");
                expect(res.text).toContain("[ExamplePlugin] stopped");
            });
    });

    afterEach(async () => {
        await app.close();
    });
});
