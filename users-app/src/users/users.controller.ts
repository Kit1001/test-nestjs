import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {UsersService} from './users.service'

@Controller()
export class UsersController {
    constructor(private readonly service: UsersService) {
    }

    @Get('users')
    findAll() {
        return this.service.findAll();
    }

    @Post('users')
    create(@Body() data: Body): Promise<string> {
        return this.service.create(data);
    }

    @Get('users/:id')
    retrieve(@Param() params): {} {
        return this.service.retrieve(params.id);
    }

    @Patch('users/:id')
    update(@Param() params, @Body() body) {
        return this.service.update(params.id, body);
    }

    @Delete('users/:id')
    delete(@Param() params) {
        return this.service.delete(params.id);
    }
}
