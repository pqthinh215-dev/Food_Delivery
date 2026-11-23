import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const port = Number(process.env.PORT);

  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  app.enableShutdownHooks();
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));

  const config = new DocumentBuilder()
    .setTitle('Food Delivery API')
    .setDescription('Tài liệu API dự án NestJS + Prisma + MySQL')
    .setVersion('1.0')
    .addBearerAuth() 
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); 

  await app.listen(port ?? 3000);
  Logger.log(`Application is running on port http://localhost:${port}`);
}
await bootstrap();
