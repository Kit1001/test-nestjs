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

    async create(data) {
        const {username, password} = data;
        await this.user.create(
            {username, password}
        )
        return 'success';
    }

    async retrieve(id) {
        return await this.user.findOne({where: {id}})
    }

    async update(id, data) {
        return await this.user.update(data, {where: {id}})
    }

    async delete(id) {
        return await this.user.destroy({where: {id}})
    }
}
