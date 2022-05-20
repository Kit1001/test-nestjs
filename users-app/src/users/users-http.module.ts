import {UsersController} from "./users.controller";
import {UsersService} from "./users.service";
import {Module} from "@nestjs/common";
import {UsersModule} from "./users.module";


@Module({
  imports: [UsersModule],
  providers: [UsersService],
  controllers: [UsersController]
})

export class UserHttpModule {}