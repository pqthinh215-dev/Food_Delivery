import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const port = Number(process.env.PORT);

  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  app.enableShutdownHooks();
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));
  await app.listen(port ?? 3000);
  Logger.log(`Application is running on port http://localhost:${port}`);
}
await bootstrap();
