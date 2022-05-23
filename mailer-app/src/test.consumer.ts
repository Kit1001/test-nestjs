import {Injectable, OnModuleInit} from "@nestjs/common";
import {ConsumerService} from "./kafka/consumer.service";

@Injectable()
export class TestConsumer implements OnModuleInit{

    constructor(
        private readonly consumerService: ConsumerService) {
    }

    async onModuleInit() {
        await this.consumerService.consume(
            {topics: ['test']},
            {
                eachMessage: async ({topic, partition, message}) => {
                    console.log({
                        topic: topic.toString(),
                        partition: partition.toString(),
                        message: message.value.toString(),
                    });
                }
            })
    }
}