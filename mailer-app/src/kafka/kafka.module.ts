import {Module} from "@nestjs/common";
import {ProducerService} from "./producer.service";
import {ConsumerService} from "./consumer.service";
import {MailConsumer} from "./mail.consumer";


@Module({
    providers: [ProducerService, ConsumerService],
    exports: [ProducerService, ConsumerService]
})
export class KafkaModule {}