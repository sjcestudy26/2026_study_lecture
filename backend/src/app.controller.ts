import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

<<<<<<< HEAD

=======
// git rebase main -> 코드 수정 -> git add . -> git rebase --continue 
// -> git log --oneline -> git push origin feature/각자브랜치 --force

// 수강생 김홍엽 작업 영역
const currentWorker = "으아아아악";
const currentWorker = "여기는 단풍브랜치요";
>>>>>>> 3adff0887dd6fcbd48edb20488236f91cde02182


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
<<<<<<< HEAD
  getHealth() {//니니게그런사람이나힐순없는지니곁에있는니친구가아니라
=======
  getHealth() { //머지??
>>>>>>> 3adff0887dd6fcbd48edb20488236f91cde02182
    return this.appService.getHealth();
  }

  @Get('db-check')
  checkDatabase() {
    return this.appService.checkDatabase();
  }

  @Get('server-info') 
  getServerInfo() { //stash할것
    return this.appService.getServerInfo();
  }
    
}
<<<<<<< HEAD
=======

//수강생 정재경 작업영역
const currentWorker = "정재경";
>>>>>>> 3adff0887dd6fcbd48edb20488236f91cde02182
