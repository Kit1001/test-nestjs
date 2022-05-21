import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from "./users/users.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {UserModel} from "./users/users.model";
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: 'sqlite',
            storage: './database.sqlite3',
            models: [UserModel],
            autoLoadModels: true,
            synchronize:true,
        }),
        UsersModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
