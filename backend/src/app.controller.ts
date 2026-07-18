import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

<<<<<<< HEAD
// 수강생 작업 영역 - 머 추가하라고 함.
const currentWorker = "Biggy smalls real name, no gimmicks";
=======
// 수강생 김홍엽 작업 영역
const currentWorker = '김홍엽';
>>>>>>> c0afb7e (git stash)

@Controller()
export class AppController { // 주석달기
  constructor(private readonly appService: AppService) {}

<<<<<<< HEAD
<<<<<<< HEAD
  
  @Get('health') // 하이
  getHealth() { //머지??
=======
  @Get('health') //주석입니다 ㅎㅇ ㅎㅎㅎㅎㅎ
=======
  @Get('health')
>>>>>>> 81bc205 (origin)
  getHealth() {
>>>>>>> c0afb7e (git stash)
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

//수강생 정재경 작업영역
const currentWorker = "정재경";

//sdfdsfs
const currentWorker1 = "송민준";
