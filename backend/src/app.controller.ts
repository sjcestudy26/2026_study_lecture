import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 수강생 작업 영역 - 머 추가하라고 함.
const currentWorker = "Biggy smalls real name, no gimmicks";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealth() {
    return this.appService.getHealth();
  }

  @Get('db-check')
  checkDatabase() {
    return this.appService.checkDatabase();
  }

  @Get('server-info')
  getServerInfo() {
    return this.appService.getServerInfo();
  }
}
