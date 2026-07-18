import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 수강생 작업 영역 - 머 추가하라고 함.
const currentWorker = "Biggy smalls real name, no gimmicks";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health') // 하이
  getHealth() {
    return this.appService.getHealth();
  }

  @Get('db-check')
  checkDatabase() {
    return this.appService.checkDatabase();
  }

  
  @Get('server-info') ///asdf
  getServerInfo() {
    return this.appService.getServerInfo();
  }
}

//수강생 정재경 작업영역
const currentWorker1 = "송민준";
