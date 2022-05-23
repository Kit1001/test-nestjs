import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {TestConsumer} from "./test.consumer";

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly consumer: TestConsumer
    ) {
    }

    @Get()
    getHello() {
        return this.appService.getHello();
    }
}
