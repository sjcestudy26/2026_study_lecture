import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';



// 수강생 김홍엽 작업 영역
const currentWorker = "김홍엽";

// 수강생 작업 영역 - 머 추가하라고 함.
const currentWorker = "Biggy";


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
