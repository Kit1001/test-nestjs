import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import {NoteModel} from "./notes.model";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
  imports: [SequelizeModule.forFeature([NoteModel])],
  controllers: [NotesController],
  providers: [NotesService],
  exports:[NotesService]
})
export class NotesModule {}
