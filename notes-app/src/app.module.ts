import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {NoteModel} from "./notes/notes.model";

@Module({
  imports: [NotesModule,
  SequelizeModule.forRoot({
            dialect: 'sqlite',
            storage: './database.sqlite3',
            models: [NoteModel],
            autoLoadModels: true,
            synchronize: true,
        }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
