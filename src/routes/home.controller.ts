import { Get, Controller, Req } from '@nestjs/common';
import { Authenticate } from '../security/guards/authenticate.decator';
import { ApiUseTags } from '@nestjs/swagger';
import { WinLogger } from '../common/logger/winlogger';
import { Roles } from '../security/guards/roles.decorator';
import { Role } from '../repository/enum/role.enum';

@ApiUseTags('home')
@Controller()
export class HomeController {

  private logger = WinLogger.get('home-controller');

  constructor() { }

  @Get('')
  public get(): string {
    return 'Hello world!';
  }

  @Get('me')
  @Authenticate()
  public me(@Req() req: any) {
    this.logger.info('Get user information');
    // user information are extracter from JWT in auth.service.ts
    return req.user;
  }

  @Get('admin')
  @Roles(Role.ADMIN)
  public admin() {
    // You must be admin to reach this endpoint, none admin user will be block by auth.guard.ts
    return 'yes, you are admin';
  }
}
