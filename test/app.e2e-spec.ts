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
                plugins: []
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
