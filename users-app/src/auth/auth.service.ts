import {Injectable} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService) {
    }

    async validateUser(username: string, pass: string): Promise<any> {
        // console.log('validate user')
        const user = await this.usersService.findByName(username);
        if (user && user.password === pass) {
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = {username: user.dataValues.username, sub: user.dataValues.id};
        // console.log(payload)
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
