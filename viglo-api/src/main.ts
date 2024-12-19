import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { I18nValidationPipe } from 'nestjs-i18n';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  app.use(cookieParser());
  app.enableCors({
    origin: ['http://localhost:3000'],

    credentials: true,
    methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH',
  });

  await app.listen(process.env.PORT);
}
bootstrap();
