# 강의 평가 API

Node.js와 NestJS를 기반으로 구현한 강의 평가 백엔드 API 프로젝트입니다.  
AWS EC2 환경에 App Server, DB Server, Monitoring Server를 분리하여 구성하고, PM2를 이용해 애플리케이션을 실행합니다.

애플리케이션의 주요 서버 지표는 `pm2-metrics`를 통해 Prometheus로 수집하고, Grafana를 이용해 시각화합니다.

## 1. 프로젝트 개요

### 주요 기술

- **Backend**: Node.js, NestJS
- **Process Manager**: PM2
- **Database**: `<DB_TYPE>`
- **Infrastructure**: AWS EC2
- **Monitoring**: PM2 Metrics → Prometheus → Grafana
- **Repository**: `<GIT_REPOSITORY_URL>`

### 서버 구성

| 서버 | 역할 |
|---|---|
| App Server EC2 | NestJS API 서버 및 PM2 실행 |
| DB Server EC2 | 애플리케이션 데이터베이스 |
| Monitoring Server EC2 | Prometheus 및 Grafana 실행 |

---

## 2. 아키텍처

전체적인 서버 및 모니터링 구성은 다음과 같습니다.

```text
                         ┌─────────────────────┐
                         │       Client        │
                         │  Web / Mobile / API │
                         └──────────┬──────────┘
                                    │
                                    │ HTTP/HTTPS
                                    ▼
                    ┌─────────────────────────────┐
                    │       App Server EC2        │
                    │                             │
                    │       NestJS API            │
                    │          │                  │
                    │         PM2                 │
                    │          │                  │
                    │    pm2-metrics              │
                    └──────────┬───────────┬───────┘
                               │           │
                       DB Connection       │ Metrics
                               │           │
                               ▼           ▼
                    ┌───────────────┐   ┌──────────────────────┐
                    │ DB Server EC2 │   │ Monitoring Server EC2│
                    │               │   │                      │
                    │  Database     │   │ Prometheus           │
                    │               │   │      │               │
                    └───────────────┘   │      ▼               │
                                        │    Grafana            │
                                        │                      │
                                        └──────────────────────┘
```

### 요청 흐름

1. Client가 App Server의 NestJS API에 요청합니다.
2. PM2가 관리하는 NestJS 애플리케이션이 요청을 처리합니다.
3. 필요한 데이터는 DB Server의 데이터베이스에서 조회하거나 저장합니다.
4. PM2 Metrics를 통해 Node.js/PM2 관련 메트릭을 노출합니다.
5. Monitoring Server의 Prometheus가 App Server의 메트릭 endpoint를 주기적으로 scrape합니다.
6. Grafana가 Prometheus 데이터를 조회하여 대시보드 형태로 시각화합니다.

---

## 3. Git Repository

프로젝트 소스 코드는 다음 Git Repository에서 관리합니다.

```text
<GIT_REPOSITORY_URL>
```

Repository clone:

```bash
git clone <GIT_REPOSITORY_URL>
cd <PROJECT_DIRECTORY>
```

> 실제 Repository URL로 `<GIT_REPOSITORY_URL>`을 변경해서 사용합니다.

---

## 4. 프로젝트 구조

일반적인 NestJS 프로젝트 구조는 다음과 같습니다.

```text
.
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── ...
│   └── ...
├── test/
├── .env.example
├── package.json
├── package-lock.json
├── nest-cli.json
├── tsconfig.json
└── README.md
```

프로젝트의 실제 모듈 구성에 따라 `src/` 하위 구조는 변경될 수 있습니다.

---

## 5. 환경 변수 설정

운영 환경의 민감한 정보는 Repository에 직접 저장하지 않습니다.

`.env.example`을 참고하여 서버에 `.env` 파일을 생성합니다.

예시:

```env
NODE_ENV=production
PORT=<APP_PORT>

DB_HOST=<DB_SERVER_PRIVATE_IP>
DB_PORT=<DB_PORT>
DB_USERNAME=<DB_USERNAME>
DB_PASSWORD=<DB_PASSWORD>
DB_DATABASE=<DB_NAME>
```

> 실제 DB 비밀번호, private IP, access key 등의 민감한 정보는 README 또는 Git Repository에 저장하지 않습니다.

---

## 6. 로컬 실행 방법

### 6.1 Node.js 설치

Node.js가 설치되어 있는지 확인합니다.

```bash
node -v
npm -v
```

필요한 Node.js 버전은 프로젝트의 `package.json` 또는 개발 환경 정책을 기준으로 맞춥니다.

### 6.2 의존성 설치

```bash
npm install
```

### 6.3 환경 변수 설정

```bash
cp .env.example .env
```

이후 `.env`에 로컬 DB 또는 개발 환경에 맞는 값을 설정합니다.

### 6.4 개발 서버 실행

```bash
npm run start:dev
```

기본적으로 다음과 같은 형태로 API 서버에 접근할 수 있습니다.

```text
http://localhost:<APP_PORT>
```

---

## 7. Production Build

운영 서버에 배포하기 전에 프로젝트를 build합니다.

```bash
npm run build
```

Build가 완료되면 NestJS 프로젝트의 설정에 따라 `dist/` 디렉터리에 실행 파일이 생성됩니다.

직접 Node.js로 실행할 경우:

```bash
npm run start:prod
```

운영 환경에서는 PM2를 사용하는 것을 권장합니다.

---

## 8. PM2를 이용한 Backend 실행

### PM2 설치

```bash
npm install -g pm2
```

설치 확인:

```bash
pm2 -v
```

### 애플리케이션 실행

예:

```bash
pm2 start dist/main.js --name lecture-api
```

실행 상태 확인:

```bash
pm2 status
```

상세 로그 확인:

```bash
pm2 logs lecture-api
```

애플리케이션 재시작:

```bash
pm2 restart lecture-api
```

애플리케이션 중지:

```bash
pm2 stop lecture-api
```

PM2 프로세스 목록 저장:

```bash
pm2 save
```

서버 재부팅 이후에도 애플리케이션을 자동 실행해야 하는 경우 PM2 startup 설정을 적용합니다.

```bash
pm2 startup
```

출력되는 안내 명령을 서버 환경에 맞게 실행한 뒤:

```bash
pm2 save
```

---

## 9. 모니터링 구성

모니터링은 다음과 같은 흐름으로 구성합니다.

```text
NestJS Application
       │
       ▼
    PM2
       │
       ▼
 pm2-metrics
       │
       │ Prometheus scrape
       ▼
  Prometheus
       │
       │ Query
       ▼
   Grafana
```

### 구성 요소

#### PM2 Metrics

PM2에서 실행 중인 Node.js 애플리케이션의 상태와 주요 성능 지표를 수집합니다.

예:

- CPU 사용량
- Memory 사용량
- Event Loop 관련 지표
- Requests 관련 지표
- Process 상태

#### Prometheus

Monitoring Server에서 실행되며 App Server의 Metrics endpoint를 주기적으로 scrape합니다.

Prometheus의 설정 파일 예시:

```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: "lecture-api"
    static_configs:
      - targets:
          - "<APP_SERVER_PRIVATE_IP>:<METRICS_PORT>"
```

> 실제 서버 IP는 `<APP_SERVER_PRIVATE_IP>` placeholder로 관리하며 Repository에 실제 IP를 저장하지 않습니다.

#### Grafana

Grafana에서 Prometheus를 Data Source로 등록하고, 수집된 데이터를 Dashboard로 시각화합니다.

---

## 10. 모니터링 확인

### 10.1 PM2 상태 확인

App Server에서:

```bash
pm2 status
```

정상적으로 실행 중이라면 `lecture-api` 프로세스의 상태가 `online`으로 표시되어야 합니다.

로그 확인:

```bash
pm2 logs lecture-api
```

### 10.2 Metrics endpoint 확인

App Server에서 PM2 Metrics endpoint가 정상적으로 응답하는지 확인합니다.

```bash
curl http://localhost:<METRICS_PORT>/metrics
```

정상적인 경우 Prometheus가 수집할 수 있는 metrics 데이터가 출력됩니다.

### 10.3 Prometheus 확인

Monitoring Server에서 Prometheus에 접속합니다.

```text
http://<MONITORING_SERVER_IP>:<PROMETHEUS_PORT>
```

Prometheus의 Targets 화면에서 `lecture-api` target의 상태가 다음과 같이 표시되는지 확인합니다.

```text
State: UP
```

`DOWN`으로 표시되는 경우 App Server의 Metrics endpoint 접근 가능 여부와 방화벽/Security Group 설정을 확인합니다.

### 10.4 Grafana 확인

Grafana에 접속합니다.

```text
http://<MONITORING_SERVER_IP>:<GRAFANA_PORT>
```

Grafana에서:

1. Prometheus Data Source가 정상 연결되어 있는지 확인합니다.
2. Dashboard를 엽니다.
3. CPU / Memory / Request 등의 Metrics가 정상적으로 표시되는지 확인합니다.
4. 시간 범위를 변경하여 데이터가 지속적으로 수집되고 있는지 확인합니다.

---

## 11. 트러블슈팅

### 11.1 PM2 프로세스가 실행되지 않는 경우

먼저 상태를 확인합니다.

```bash
pm2 status
```

로그를 확인합니다.

```bash
pm2 logs lecture-api
```

Build 결과가 존재하는지도 확인합니다.

```bash
ls -al dist/
```

필요한 경우 다시 build 후 실행합니다.

```bash
npm run build
pm2 restart lecture-api
```

---

### 11.2 API 서버에 접속할 수 없는 경우

다음 항목을 순서대로 확인합니다.

#### 1. PM2 상태 확인

```bash
pm2 status
```

#### 2. 포트가 LISTEN 상태인지 확인

```bash
sudo ss -lntp
```

#### 3. 애플리케이션 로그 확인

```bash
pm2 logs lecture-api
```

#### 4. AWS Security Group 확인

- App Server의 API 포트가 필요한 범위에서 허용되어 있는지 확인
- DB Server의 DB 포트는 App Server에서만 접근할 수 있도록 제한
- Monitoring Server에서 Metrics 포트에 접근할 수 있는지 확인

---

### 11.3 DB 연결에 실패하는 경우

환경 변수의 DB 설정을 확인합니다.

```text
DB_HOST=<DB_SERVER_PRIVATE_IP>
DB_PORT=<DB_PORT>
DB_USERNAME=<DB_USERNAME>
DB_PASSWORD=<DB_PASSWORD>
DB_DATABASE=<DB_NAME>
```

App Server에서 DB Server로 네트워크 연결이 가능한지도 확인합니다.

```bash
nc -zv <DB_SERVER_PRIVATE_IP> <DB_PORT>
```

또한 DB Server의 Security Group 및 DB 자체의 접근 제어 설정을 확인합니다.

> DB 비밀번호와 같은 민감 정보는 로그나 Git Repository에 출력하지 않도록 주의합니다.

---

### 11.4 Prometheus Target이 DOWN인 경우

Prometheus Server에서 App Server의 Metrics endpoint에 접근할 수 있는지 확인합니다.

```bash
curl http://<APP_SERVER_PRIVATE_IP>:<METRICS_PORT>/metrics
```

확인 항목:

- App Server가 정상 실행 중인지
- `pm2-metrics`가 정상 동작하는지
- Metrics 포트가 LISTEN 상태인지
- App Server Security Group에서 Monitoring Server의 접근을 허용했는지
- Prometheus `scrape_configs`의 target 주소가 올바른지
- Prometheus 설정 변경 후 reload/restart가 정상적으로 되었는지

---

### 11.5 Grafana에 데이터가 표시되지 않는 경우

먼저 Grafana의 Prometheus Data Source 연결 상태를 확인합니다.

그 다음 Prometheus에서 직접 Query를 실행하여 데이터가 존재하는지 확인합니다.

```text
Grafana
  ↓
Prometheus Data Source
  ↓
Prometheus Query
  ↓
Metrics 존재 여부 확인
```

Prometheus에는 데이터가 있지만 Grafana에서 표시되지 않는다면 다음을 확인합니다.

- Grafana Data Source 설정
- Dashboard의 Query
- Dashboard Time Range
- Metric 이름 변경 여부
- Prometheus scrape 상태

---

## 12. 보안 주의사항

다음 정보는 Git Repository에 절대 commit하지 않습니다.

```text
실제 EC2 Public / Private IP
DB Password
AWS Access Key
AWS Secret Key
SSH Private Key
.pem 파일
실제 운영 환경의 .env
Grafana 관리자 비밀번호
```

`.gitignore`에 다음과 같은 항목을 포함하는 것을 권장합니다.

```gitignore
.env
.env.*
!.env.example
*.pem
*.key
```

운영 환경의 민감 정보는 서버의 환경 변수, Secret 관리 시스템 또는 별도의 보안 저장소를 이용합니다.

---

## 13. 배포 기본 절차

App Server에 최신 코드를 반영하는 경우 일반적인 절차는 다음과 같습니다.

```bash
git pull origin main

npm install

npm run build

pm2 restart lecture-api

pm2 status

pm2 logs lecture-api
```

배포 후 API가 정상적으로 응답하는지 확인하고, Prometheus의 Target 및 Grafana Dashboard에서도 Metrics가 정상적으로 수집되는지 확인합니다.

---

## 14. 운영 점검 체크리스트

- [ ] Git Repository에서 최신 코드 반영
- [ ] 환경 변수 설정 확인
- [ ] `npm install` 완료
- [ ] `npm run build` 성공
- [ ] PM2 프로세스 `online` 상태 확인
- [ ] API 정상 응답 확인
- [ ] DB 연결 확인
- [ ] Metrics endpoint 응답 확인
- [ ] Prometheus Target `UP` 확인
- [ ] Grafana Dashboard 데이터 확인
- [ ] 민감 정보가 Git에 포함되지 않았는지 확인

---

## 15. 참고

이 README의 IP 주소, 포트, DB 정보 및 Repository 주소는 실제 운영 환경에 맞게 placeholder를 변경하여 사용합니다.

```text
<GIT_REPOSITORY_URL>
<APP_SERVER_PRIVATE_IP>
<DB_SERVER_PRIVATE_IP>
<MONITORING_SERVER_IP>
<APP_PORT>
<DB_PORT>
<PROMETHEUS_PORT>
<GRAFANA_PORT>
<METRICS_PORT>
<DB_USERNAME>
<DB_PASSWORD>
<DB_NAME>
```