import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {NotesService} from "./notes.service";

@Controller('notes')
export class NotesController {

    constructor(
        private readonly service: NotesService
    ) {
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Post()
    create(@Body() data) {
        return this.service.create(data);
    }

    @Get(":id")
    retrieve(@Param() id): {} {
        return this.service.retrieve(id);
    }

    @Patch(':id')
    update(@Param() params, @Body() body): Promise<[affectedCount:number]> {
        return this.service.update(params.id, body);
    }

    @Delete(':id')
    delete(@Param() params): Promise<number> {
        return this.service.delete(params.id);
    }
}
