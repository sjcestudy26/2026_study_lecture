import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 수강생 김홍엽 작업 영역
const currentWorker = '김홍엽';

@Controller()
export class AppController {
  // 주석달기
  constructor(private readonly appService: AppService) {}

  @Get('health') //주석입니다 ㅎㅇ ㅎㅎㅎㅎㅎ
  getHealth() {
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
    //안녕하세요
    return this.appService.getServerInfo();
  } // TESTTESTESTs
}

//수강생 정재경 작업영역
const currentWorker = '정재경';

//sdfdsfs
const currentWorker1 = '송민준';
