import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {KafkaModule} from "./kafka/kafka.module";
import {MailModule} from "./mail/mail.module";
import {MailConsumer} from "./kafka/mail.consumer";

@Module({
  imports: [KafkaModule, MailModule],
  controllers: [AppController],
  providers: [AppService, MailConsumer],
})
export class AppModule {}
