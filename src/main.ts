import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v0');
  app.enableCors();

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Workflow Management System API')
    .setDescription('NestJS + Prisma RESTful API')
    .setVersion('1.0')
    .addBearerAuth() // JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v0/docs', app, document);

  // Start server
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
