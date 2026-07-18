import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';




@Controller()
export class AppController { // 주석달기
  constructor(private readonly appService: AppService) {}

  
  @Get('health') // 하이
  getHealth() { //머지??
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
