import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import {SequelizeModule} from "@nestjs/sequelize";
import { AuthModule } from './auth/auth.module';
import {APP_GUARD} from "@nestjs/core";
import {CustomAuthGuard} from "./auth/custom.guard";

@Module({
  imports: [NotesModule,
  SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'root',
            password: 'root',
            database: 'notes',
            autoLoadModels: true,
            synchronize: true
        }),
  AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService,   {
    provide: APP_GUARD,
    useClass: CustomAuthGuard,
  },],
})
export class AppModule {}
