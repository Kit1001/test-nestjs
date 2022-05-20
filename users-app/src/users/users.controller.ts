import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service'

@Controller()
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get('users')
  getHello(): string {
    return this.service.getHello();
  }
}
