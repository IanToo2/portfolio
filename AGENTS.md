# AGENTS.md

저장소 작업 규칙 SSOT.

## 1. 시작
- 작업 유형을 먼저 적는다.
  - `DEV`: 코드/문서 수정
  - `ANALYSIS`: read-only
- 시작 시 3줄 계획을 적는다.
  - Goal
  - Scope
  - Done criteria
- `DEV`는 기본 순서를 따른다.
  - Issue 등록(한국어) -> Plan -> Dev -> Validate -> Commit -> Push -> Issue update -> Issue close(if resolved)
- 위험 작업은 실행 전에 확인한다.
  - 파일 삭제
  - 외부 네트워크
  - destructive shell 명령

## 2. 공통 규칙
- 모든 텍스트 파일은 UTF-8(BOM 없음)
- 소스 코드에 `\uXXXX` 이스케이프 사용 금지
- 전체 파일 재작성보다 최소 diff 우선
- scripted/regex 치환은 범위를 최소화
- import/export 무결성 유지

## 3. 문서 역할
- `README.md`: 프로젝트 개요, 실행, 배포, 구조
- `AGENTS.md`: 저장소 작업 규칙
- `skills/*`: 작업 절차와 변경 라우팅

## 4. 검증
- `DEV` 작업 후 반드시 실행:
  - `npm run validate`
  - `npm run build`
- 테스트/검증을 못 했으면 이유를 남긴다

## 5. DEV / ANALYSIS
- `DEV`
  - 깨진 상태로 커밋 금지
  - 검증이 끝나면 커밋 후 기본적으로 `push`까지 진행
  - `push`를 못 했으면 인증/네트워크/사용자 지시 사유를 남긴다
  - 작업 완료 후 이슈에 변경 요약, 검증 결과, 커밋/푸시 상태를 남긴다
  - 이슈가 해결 상태면 마지막 업데이트 후 닫고, 남은 작업이나 차단 사유가 있으면 닫지 않는다
- `ANALYSIS`
  - read-only 유지
  - commit / push 금지
  - 필요 시 `.tmp_repo_analysis` 사용 후 삭제

## 6. 이슈 규칙
- 부모 이슈 체크리스트가 2개 이상이면 구현 전에 하위 Task 이슈로 분리
- 하위 Task 제목은 고유 작업명만 사용
- 하위 Task 본문 첫 줄은 `Parent: #<번호>`
- 하위 Task 본문에 `Task-Key: T-01` 형식 식별자 사용
- 구현/검증/커밋/푸시는 하위 Task 단위로 한 번에 1개씩 처리
- 해결 완료된 이슈는 변경 요약과 검증 결과를 남긴 뒤 닫는다

## 7. 환경 메모
- 표준 실행 환경은 WSL(Ubuntu)
- 셸 차이로 재현 이슈가 있을 때만 `bash -lc "<command>"` 사용
- Git 줄바꿈은 LF 기준 유지
- Windows에서 복사된 `node_modules`는 재사용하지 않는다
