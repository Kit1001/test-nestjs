import {Controller, Get, Headers, Request} from '@nestjs/common';
import {NotesService} from "./notes/notes.service";

@Controller()
export class AppController {
  constructor(private readonly NotesService: NotesService) {}

  @Get()
  getHello(@Headers() headers, @Request() request): any {
    return `Hello world ${request.user.id}`;
  }
}
