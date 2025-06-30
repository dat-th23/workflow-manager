import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('Workflow Management System API')
    .setDescription('NestJS + Prisma REST API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v0/swagger-ui.html', app, document); 

  // http://localhost:3000/api/v0/swagger-ui.html

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
