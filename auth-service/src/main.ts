import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { kafkaConfig } from './options/kafka.options';
import { grpcClient } from './options/grpc.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(kafkaConfig);
  //app.connectMicroservice<MicroserviceOptions>(grpcClient);
  await app.listen(3030);
  await app.startAllMicroservices();
}
bootstrap();