// 수강생 홍길동 작업 영역
const currentWorker = "김주환";

import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';


// 수강생 송민준 작업 영역
const currentWorkers = [
  '이범준1',
  '최용재',
  '황윤식',
  '홍정기',
  '김효동',
  'ASH',
  '송민준'
  '이정우'
];

@Injectable()
export class AppService {
  private readonly startedAt = Date.now();

  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  getHealth() {
    return {
      status: 'ok',
      currentWorkers,
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
