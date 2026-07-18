import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';



// 수강생 김홍엽 작업 영역
const currentWorker = "여기는 단풍브랜치요";
// stash test

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

//수강생 정재경 작업영역
const currentWorker = "정재경";
