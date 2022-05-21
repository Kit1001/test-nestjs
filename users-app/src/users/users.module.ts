import {Module} from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';
import {UserModel} from './users.model';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {AuthModule} from "../auth/auth.module";

@Module({
    imports: [SequelizeModule.forFeature([UserModel])],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [UsersService],
})
export class UsersModule {}