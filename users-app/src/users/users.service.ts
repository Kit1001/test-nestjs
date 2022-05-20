import {Injectable} from '@nestjs/common';
import {UserModel} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(UserModel)
        private user: typeof UserModel,
    ) {
    }

    async findAll(): Promise<UserModel[]> {
        return this.user.findAll();
    }

    async create() {
        await this.user.create(
            {username: 'test', password: '123'}
        )
    }
}
