import { NestFactory } from '@nestjs/core';
import { ExpressAdapter, NestExpressApplication } from "@nestjs/platform-express";
import { MainModule } from '@infra/modules/main.module';

export async function createNestApp() {
  const expressAdapter = new ExpressAdapter();
  const app = await NestFactory.create<NestExpressApplication>(MainModule, expressAdapter, {
    cors: true
  });

  return app;
}