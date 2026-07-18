import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

<<<<<<< HEAD
=======
<<<<<<< HEAD
// 수강생 최용재 작업 영역
const currentWorker = "최용재";
const currentWorkers = [
  '이범준',
  '최용재',
  '황윤식',
  '홍정기',
  '김효동1',
  'ASH',
];
//injectable
const something = "on my branch heyeyeye"

//test
=======
>>>>>>> 650a031 (쓸데없는 코드 제거)
>>>>>>> 66fc25f (정리)


@Injectable()
export class AppService {
  private readonly startedAt = Date.now();

  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  getHealth() {
    return {
      status: 'ok',
      currentWorker,
      currentWorkers,
      something,
      timestamp: new Date().toISOString(),
    };
  }

  async checkDatabase() {
    try {
      await this.dataSource.query('SELECT 1');
      return {
        status: 'ok',
        database: 'connected',
      };
    } catch {
      throw new ServiceUnavailableException({
        status: 'error',
        database: 'disconnected',
      });
    }
  }

  getServerInfo() {
    const uptimeSeconds = Math.floor((Date.now() - this.startedAt) / 1000);

    return {
      name: 'lecture-eval-api',
      version: process.env.npm_package_version ?? '0.0.1',
      nodeVersion: process.version,
      uptimeSeconds,
      env: process.env.NODE_ENV ?? 'development',
      port: process.env.PORT ?? 3000,
    };
  }
}
