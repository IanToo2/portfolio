# AGENTS.md

이 문서는 본 저장소의 작업 규칙 단일 원본(SSOT)이다.
과도한 통제보다 안전하고 빠른 반복 실험을 목표로 한다.

---

## 1. 작업 시작 절차

1) 작업 유형을 먼저 분류한다.
- DEV: 코드/문서 수정 가능
- ANALYSIS: read-only 분석 전용

2) 시작 전에 3줄 계획을 작성한다.
- Goal
- Scope
- Done criteria

3) 위험 작업(파일 삭제, 외부 네트워크, shell 명령)은 실행 전 명시 확인한다.

---

## 2. 핵심 MUST 규칙

### 인코딩
- 모든 텍스트 파일은 UTF-8 (BOM 없음)
- 소스 코드에 `\uXXXX` 이스케이프 사용 금지

### 수정 원칙
- 전체 파일 재작성 금지 (최소 diff 유지)
- scripted/regex 치환은 범위를 최소화
- import/export 무결성 유지

### 검증
- 코드 수정 후 반드시:
  - `npm run validate`
  - `npm run build`
- dev 서버 실행 중이면 `http://localhost:5173` 응답 확인

---

## 3. DEV 작업 규칙

- build 통과 후 커밋
- git push는 명시적 요청 시 수행
- 깨진 상태로 커밋 금지
- MCP 환경이 아닌 경우 Git, GitHub 작업은 CLI 환경을 사용
- MCP 환경이 아닌 경우 Codex shell 명령은 `bash -lc "<command>"` 형태로 강제 실행

---

## 4. ANALYSIS 작업 규칙

- read-only 원칙 준수
- commit / push 금지
- 필요 시 `.tmp_repo_analysis` 사용 후 삭제

---

## 5. 작업 완료 체크리스트

- [ ] 작업 유형 분류 완료
- [ ] 3줄 계획 작성
- [ ] validate 실행
- [ ] build 실행
- [ ] DEV 작업이면 정상 동작 확인 후 커밋

---

## 6. Short Session Template

Goal:  
Scope:  
Done:  
Type: DEV / ANALYSIS  
Validate: validate + build (+ localhost if needed)

---

## 7. WSL 전환 기준 규칙

- 이 저장소의 표준 실행 환경은 WSL(ubuntu/bash)이다.
- shell 명령은 `bash -lc "<command>"` 형태를 기본으로 한다.
- Git 줄바꿈 정책은 LF 기준으로 고정한다.
  - 권장: `git config --global core.autocrlf input`
  - 권장: `git config --global core.eol lf`
  - 권장: `git config --global core.filemode false`
- 저장소 루트에 `.gitattributes`를 유지해 EOL 차이로 인한 대량 diff를 방지한다.
- Windows에서 복사된 `node_modules`는 재사용하지 않는다.
  - WSL 첫 실행 시: `rm -rf node_modules && npm install`
  - 증상: `@rollup/rollup-linux-x64-gnu` 누락 등 플랫폼 바이너리 오류

---

## 8. 작업 기본 순서 (Issue -> Plan -> Dev)

- DEV 작업은 기본적으로 아래 순서를 따른다.
  - 1) Issue: 작업 시작 시 GitHub 이슈를 먼저 등록한다. (한국어 작성)
  - 2) Plan: Goal / Scope / Done criteria를 명시한다.
  - 3) Dev: 구현 후 검증(validate, build, 필요 시 localhost 확인)을 수행한다.
- 이슈 등록이 인증/네트워크 문제로 막히면 사유를 기록하고 Plan -> Dev를 먼저 진행한 뒤, 가능해지는 즉시 이슈를 등록/갱신한다.
- 작업 완료 후 이슈에 결과(변경 요약, 검증 결과, 관련 커밋)를 반영한다.

### 체크리스트 분할 원칙

- 부모 이슈에 체크리스트 항목이 2개 이상이면, 구현 전에 항목별 하위 Task 이슈로 분리한다.
- 하위 Task 이슈 제목에는 부모 이슈 번호를 넣지 않는다. 제목은 고유 작업명으로 작성한다. (예: `[task] 접근성 alt 누락 수정`)
- 부모 이슈 번호는 하위 Task 본문 첫 줄에 `Parent: #7` 형태로 표기한다.
- 하위 Task 본문에 `Task-Key: T-01` 형태의 식별자를 둔다.
- 부모 이슈에는 하위 Task 링크를 체크리스트 형태로 코멘트/본문에 남겨 추적 가능하게 유지한다.
- 부모 이슈 체크리스트 항목은 `T-01 - <작업명> (#하위이슈번호)` 형태로 기록해 하위 Task와 1:1로 매핑한다.
- 구현/검증/커밋은 하위 Task 단위로 한 번에 1개씩 처리한다.
- 각 하위 Task 완료 시 부모 이슈에 진행 상태(완료 항목, 검증 결과, 관련 커밋)를 함께 반영한다.
