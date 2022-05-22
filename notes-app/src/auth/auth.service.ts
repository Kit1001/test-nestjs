import {Injectable} from '@nestjs/common';
import axios from "axios";

@Injectable()
export class AuthService {

    async validateUser(token): Promise<any> {
        // console.log('validate user')
        const headers = {authorization: token}
        // console.log(user)
        return await axios.get('http://localhost:3000/profile', {headers}).then(
            response => {
                // console.log('sending request')
                return response.data
            }).catch(
            error => {
                console.log(error);
                return null;
            }
        )
    }
}
