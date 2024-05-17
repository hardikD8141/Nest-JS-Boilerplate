import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import helmet from 'helmet';
import { Logger } from '@nestjs/common';
import { AllExceptionsFilter } from './dispatchers/all-exceptions.filter';
import { swagger } from './swagger';
import { urlencoded, json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3001;

  app.enableCors();
  app.use(compression());
  app.use(helmet());
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  swagger(app);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.setGlobalPrefix('api/v1');

  await app.listen(port);
  Logger.log(`App is listening on port ${port}`);
}
bootstrap();
