import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 수강생 작업 영역 - 머 추가하라고 함.
const currentWorker = "Biggy smalls real name, no gimmicks";

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
  @Get('server-info') // wow wonderful
  getServerInfo() { 
  @Get('server-info')
  getServerInfo() { //2222222
    return this.appService.getServerInfo();
  } // TESTTESTESTs
}

//수강생 정재경 작업영역
const currentWorker = "정재경";

//sdfdsfs
const currentWorker1 = "송민준";
