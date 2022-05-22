import {Module} from '@nestjs/common';
import {PassportModule} from "@nestjs/passport";
import {AuthService} from "./auth.service";
import {CustomStrategy} from "./custom.strategy";

@Module({
    imports: [PassportModule],
    providers: [AuthService, CustomStrategy],
    exports: [AuthService]
})
export class AuthModule {
}
