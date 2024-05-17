import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AuthTerms } from './config/constants';

export const swagger = async (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('Nest Js')
    .setDescription(
      'API Documentation \
      \nNOTE: The API with (LOCK) symbol can be used only after providing token in (Authorize).\
      \nParameter with * are required to execute related API.',
    )
    .setVersion('1.0')
    .addServer('/api/v1')
    .addBearerAuth({
      type: 'apiKey',
      name: AuthTerms.accessToken,
      in: 'header',
    })
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    deepScanRoutes: true,
    include: [
      //add module here
    ],
    extraModels: [
      // add extra modules
    ],
  });
  SwaggerModule.setup('swagger', app, document, {
    customSiteTitle: 'Nest Js API',
    explorer: false,
  });
};
