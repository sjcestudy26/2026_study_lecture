import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// git rebase main -> 코드 수정 -> git add . -> git rebase --continue 
// -> git log --oneline -> git push origin feature/각자브랜치 --force

// 수강생 김홍엽 작업 영역
const currentWorker = "으아아아악";
const currentWorker = "여기는 단풍브랜치요";


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealth() { //머지??
    return this.appService.getHealth();
  }

  @Get('db-check')
  checkDatabase() {
    return this.appService.checkDatabase();
  }

  @Get('server-info') 
  getServerInfo() { //stash할것
    return this.appService.getServerInfo();
  } // TESTTESTESTs
} //hihi
//hello..

//수강생 정재경 작업영역
const currentWorker = "정재경";
