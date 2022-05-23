import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {MailService} from "./mail/mail.service";

@Controller()
export class AppController {
    constructor(
        private readonly appService: MailService,
    ) {
    }

    @Get()
    getHello() {
        return this.appService.sendMail('eitelkeit999@gmail.com', 'eitelkeit');
    }
}
