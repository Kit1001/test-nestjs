import {Body, Controller, Post} from "@nestjs/common";
import {MailService} from "./mail.service";

@Controller('mail')
export class MailController {

    constructor(
        private readonly service: MailService
    ) {
    }

    @Post()
    addToQueue(@Body('email') email, @Body('username') username){
        return this.service.acceptMail(username, email);
    }
}