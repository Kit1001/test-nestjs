import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards} from '@nestjs/common';
import {UsersService} from './users.service'
import {UserModel} from "./users.model";
import {LocalAuthGuard} from "../auth/local-auth.guard";

@Controller()
export class UsersController {
    constructor(private readonly service: UsersService) {
    }

    @UseGuards(LocalAuthGuard)
    @Get('users')
    findAll() {
        return this.service.findAll();
    }

    @Post('users')
    create(@Body() data: Body): Promise<UserModel> {
        return this.service.create(data);
    }

    @Get('users/:id')
    retrieve(@Param() params): {} {
        return this.service.retrieve(params.id);
    }

    @Patch('users/:id')
    update(@Param() params, @Body() body): Promise<[affectedCount:number]> {
        return this.service.update(params.id, body);
    }

    @Delete('users/:id')
    delete(@Param() params): Promise<number> {
        return this.service.delete(params.id);
    }
}
