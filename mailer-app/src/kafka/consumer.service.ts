import {Injectable, OnApplicationShutdown, OnModuleInit} from "@nestjs/common";
import {Kafka, Consumer, ConsumerSubscribeTopics, ConsumerRunConfig} from "kafkajs";

@Injectable()
export class ConsumerService implements OnApplicationShutdown{
    private readonly kafka = new Kafka({
        brokers:['localhost:9092'],
    });
    private readonly consumers : Consumer[] = [];

    async consume(topic: ConsumerSubscribeTopics, config: ConsumerRunConfig) {
        const consumer = this.kafka.consumer({groupId: 'nestjs-mailer'});
        await consumer.connect();
        await consumer.subscribe(topic);
        await consumer.run(config);
        this.consumers.push(consumer);
    }

    async onApplicationShutdown(){
        for (const consumer of this.consumers){
            await consumer.disconnect();
        }
    }
}