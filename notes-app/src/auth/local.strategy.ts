import {Strategy} from 'passport-custom';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable, UnauthorizedException, Request, Headers} from '@nestjs/common';
import {AuthService} from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'myStrategy') {
    constructor(private service: AuthService) {
        super();
    }

    async validate(req: Request) {
        const token = req.headers['authorization'];
        // console.log(token)
        return await this.service.validateUser(token);
    }
}