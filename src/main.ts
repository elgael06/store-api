import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/domains/app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('STORE API')
    .setDescription(
      'Esta es la documentacion del api donde podremos utilizar la logica de negicio mediante una autenticacion y roles de usuarios.',
    )
    .setVersion('1.0')
    .addTag('users')
    .addTag('auth')
    .addBearerAuth()
    .addTag('user')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);

  await app.listen(PORT, () => {
    console.log('listening in port', PORT);
  });
}
bootstrap();
