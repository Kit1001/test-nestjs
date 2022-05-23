import {MailerService} from "@nestjs-modules/mailer";
import {Injectable} from "@nestjs/common";
import {ProducerService} from "../kafka/producer.service";

@Injectable()
export class MailService {
    constructor(
        private mailerService: MailerService,
        private readonly producer: ProducerService
    ) {
    }

    async sendMail(email: string, username: string) {
        console.log(email)
        await this.mailerService.sendMail({
            to: email,
            subject: 'Greeting from NestJS NodeMailer',
            template: '/email',
            context: {
                name: username
            }
        })
    }

    async acceptMail(username, email) {
        await this.producer.produce({
            topic: 'greetings',
            messages: [
                {value: `username: ${username}, email: ${email}`}
            ],
        });
        return 'success';
    }
}