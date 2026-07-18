import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';




@Controller()
export class AppController { // 주석달기
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealth() {//니니게그런사람이나힐순없는지니곁에있는니친구가아니라
    return this.appService.getHealth();
  }

  @Get('db-check')
  checkDatabase() {
    return this.appService.checkDatabase();
  }

  // stash 후 server-info add comment
  @Get('server-info') ///asdf wasd
  //git stash111111
  getServerInfo() {
    return this.appService.getServerInfo();
  } // TESTTESTESTs
}
