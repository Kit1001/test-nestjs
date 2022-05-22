import { Controller, Get, Headers } from '@nestjs/common';
import { AppService } from './app.service';
import {NotesService} from "./notes/notes.service";

@Controller()
export class AppController {
  constructor(private readonly NotesService: NotesService) {}

  @Get()
  getHello(@Headers() headers): any {
    return this.NotesService.myFunc(headers);
  }
}
