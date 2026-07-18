import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

<<<<<<< HEAD
// 수강생 최용재 작업 영역
const currentWorker = '최용재';
=======
<<<<<<< HEAD
>>>>>>> ee3a8a1 (feat:최용재의 일상)

// 수강생 송민준 작업 영역
const currentWorkers = [
  '이범준',
  '최용재',
  '황윤식',
  '홍정기',
  '김효동1',
  '안세호',
  '송민준',
  '이정우'
  'ASH',
  '송민준'
  '이정우',
  '양나은'
  '이정우1111'
  'cool_guy'
  '이정우'
  '정재경'
];

<<<<<<< HEAD
// injectable
const something = 'on my branch';

// test
=======
=======
// 수강생 최용재 작업 영역
const currentWorker = "최용재";
>>>>>>> 01c8117 (feat:최용재의 일상)
>>>>>>> ee3a8a1 (feat:최용재의 일상)

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
