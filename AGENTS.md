# AGENTS.md

이 문서는 이 저장소의 작업 규칙 단일 원본(SSOT)이다.

## 0) 적용 우선순위
1. `AGENTS.md` MUST 규칙
2. `AGENT_RULES.md` 실행 팁
3. 사용자의 현재 요청

충돌이 있으면 반드시 먼저 보고하고 정리 후 진행한다.

## 1) 작업 시작 절차 (MUST)
- `R-START-001`: 작업 시작 전, 이번 세션에 적용할 MUST 규칙 ID를 5줄 이내로 요약한다.
- `R-START-002`: 작업 유형을 먼저 분류한다.
  - `DEV`: 코드/문서 수정 작업
  - `ANALYSIS`: 분석 전용 read-only 작업
- `R-START-003`: 시작 전에 3줄 계획을 작성한다.
  - Goal
  - Scope
  - Done criteria
- `R-START-004`: 완료 전 체크리스트(검증/커밋/푸시 포함)를 갱신한다.

## 2) 공통 MUST 규칙
- `R-ENC-001` 규칙: 소스 코드에 유니코드 이스케이프(`\uXXXX`)를 사용하지 않는다.
  - 검증: `npm run validate`
- `R-ENC-002` 규칙: 한글/영문 텍스트는 실제 문자 그대로 작성한다.
  - 검증: 텍스트 파일 수동 확인 + `npm run validate`
- `R-ENC-003` 규칙: 모든 텍스트 파일은 UTF-8(BOM 없음)을 유지한다.
  - 검증: `npm run validate`
- `R-EDIT-001` 규칙: 단순 문구 수정은 `apply_patch`를 우선 사용한다.
  - 검증: 변경 diff 확인
- `R-EDIT-002` 규칙: PowerShell 멀티라인 치환 시 코드에 `` `r`n `` 리터럴이 들어가지 않게 here-string 또는 `apply_patch`를 사용한다.
  - 검증: 변경 파일 검색
- `R-EDIT-003` 규칙: scripted/regex 치환은 범위를 최소화해 import/export를 깨지 않게 한다.
  - 검증: diff + 빌드
- `R-VERIFY-001` 규칙: 코드 수정 후 `npm run build`를 반드시 실행한다.
  - 검증: 빌드 로그
- `R-VERIFY-002` 규칙: 텍스트/문자열 치환 이후 깨짐 패턴이 없는지 확인한다.
  - 검증: `npm run validate`
- `R-VERIFY-003` 규칙: 개발 서버가 이미 실행 중이면 `http://localhost:5173` 응답 확인까지 수행한다.
  - 검증: HTTP 응답 확인 로그
- `R-SANDBOX-001` 규칙: `windows sandbox: setup refresh failed` 발생 시 동일 목적 명령을 `require_escalated`로 즉시 재시도한다.
  - 검증: 재시도 명령 로그
- `R-SANDBOX-002` 규칙: 샌드박스 오류 상황에서 목적이 달라지는 우회 명령을 사용하지 않는다.
  - 검증: 명령 이력 확인

## 3) 작업 유형별 MUST 규칙

### DEV 작업
- `R-GIT-001` 규칙: 각 task 종료 시 변경사항을 반드시 커밋한다.
- `R-GIT-002` 규칙: 각 task 종료 시 `git push`까지 수행한다.
- `R-GIT-003` 규칙: 샌드박스 환경에서는 `git push`를 첫 시도부터 `require_escalated`로 실행한다.

### ANALYSIS 작업
- `R-ANALYSIS-001` 규칙: 분석 목적 작업은 read-only로 수행하고 `commit/push`를 금지한다.
- `R-ANALYSIS-002` 규칙: 임시 클론은 `.tmp_repo_analysis` 폴더를 사용한다.
- `R-ANALYSIS-003` 규칙: 작업 종료 시 임시 클론을 삭제하고 `DELETED`를 확인한다.

## 4) SHOULD 규칙 (권장)
- `R-SHOULD-001`: 전체 파일 재작성보다 최소 diff 편집을 유지한다.
- `R-SHOULD-002`: 리팩토링 후 필요한 import 누락 여부를 확인한다.
- `R-SHOULD-003`: 콘솔 출력이 깨져 보여도 파일 인코딩 자체를 먼저 검증한다.

## 5) 완료 체크리스트
- [ ] 작업 유형(`DEV`/`ANALYSIS`) 분류 완료
- [ ] MUST 규칙 ID 요약 보고 완료
- [ ] `npm run validate` 실행
- [ ] `npm run build` 실행
- [ ] DEV 작업이면 커밋 + 푸시 완료
- [ ] ANALYSIS 작업이면 read-only 준수 + 임시 클론 삭제 확인
