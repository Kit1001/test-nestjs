import {Injectable, OnModuleInit} from "@nestjs/common";
import {ConsumerService} from "./consumer.service";
import {MailService} from "../mail/mail.service";

@Injectable()
export class MailConsumer implements OnModuleInit {

    constructor(
        private readonly consumerService: ConsumerService,
        private readonly mailService: MailService
    ) {
    }

    async onModuleInit() {
        await this.consumerService.consume(
            {topics: ['greetings']},
            {
                eachMessage: async ({message}) => {
                    const data = JSON.parse(JSON.stringify(`{${message.value}}`));
                    await this.mailService.sendMail(data['email'], data['username']);
                }
            }
        )
    }
}