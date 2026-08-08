import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


//asdf
//qwerty
// git rebase main -> 코드 수정 -> git add . -> git rebase --continue 
// -> git log --oneline -> git push origin feature/각자브랜치 --force


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

