import {Injectable} from '@nestjs/common';
import {UserModel} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import axios from "axios";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(UserModel)
        private user: typeof UserModel,
    ) {
    }

    async findAll(): Promise<UserModel[]> {
        return await this.user.findAll();
    }

    async create(data) {
        const {username, password, email} = data;
        const headers = {"Content-Type": "application/json"}
        await axios.post('http://localhost:5000/mail', {username, email}, {headers})
        return await this.user.create({username, password, email})
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

    async findByName(username) {
        return await this.user.findOne({where: {username}})
    }
}
