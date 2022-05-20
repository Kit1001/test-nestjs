import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service'

@Controller()
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get('users')
  findAll() {
    return this.service.findAll();
  }

  @Get('users/1')
  create() {
    return this.service.create();
  }

}
