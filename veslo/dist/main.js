"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('The VESLO')
        .setDescription('VESLO service API')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('spec', app, document);
    app.use(cookieParser());
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({
        origin: ['http://localhost:3000'],
        credentials: true,
    });
    await app.listen(3003);
}
bootstrap();
//# sourceMappingURL=main.js.map