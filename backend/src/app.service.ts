import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

<<<<<<< HEAD
<<<<<<< HEAD
// 수강생 황윤식 작업 영역
const currentWorker = "황윤식";
=======
=======
// 수강생 홍정기 작업 영역
const currentWorker = "홍정기";
>>>>>>> d5509e31fb93b089cf7ddf300df05333dcec6e76

>>>>>>> b2422c8a7d40d32df7fae429a78ddff7ee4ea69f

@Injectable()
export class AppService {
  const currentWorker = "ddd";
  private readonly startedAt = Date.now();

  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  getHealth() {
    return {
      status: 'ok',
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

const currentWorker "김효동";