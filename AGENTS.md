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

## 7. GitHub 이슈 한글 인코딩 규칙

- GitHub API로 이슈/코멘트 작성 시 `Content-Type`에 반드시 `charset=utf-8`을 지정한다.
- PowerShell에서 JSON 본문은 UTF-8 바이트로 전송한다.
  - 예시: `$utf8NoBom = [System.Text.UTF8Encoding]::new($false)`
  - 예시: `$bodyBytes = $utf8NoBom.GetBytes($payloadJson)`
  - 예시: `Invoke-RestMethod ... -Body $bodyBytes -ContentType "application/json; charset=utf-8"`
- 전송 후에는 API 재조회로 한글 키워드가 정상인지 확인한다.
  - 제목/본문에 `?` 치환 문자가 보이면 실패로 간주하고 UTF-8 바이트 전송 방식으로 재시도한다.

---

## 8. PowerShell Markdown Safety (GitHub API)

- PowerShell에서 백틱()은 escape 문자다.
- Markdown 본문에 backtick 표기(예: ria-current, 
pm run ...)가 있으면, 이중 인용 here-string(@"...")을 사용하지 않는다.
- 이 경우 단일 인용 here-string(@'... '@)을 사용해 원문을 그대로 유지한다.
- GitHub API 전송은 항상 UTF-8 bytes + pplication/json; charset=utf-8을 사용한다.
- 전송 후 GET 재조회로 제어문자(\x00-\x1F) 및 U+FFFD 문자가 없는지 검증한다.

---

## 9. 작업 기본 순서 (Issue -> Plan -> Dev)

- DEV 작업은 기본적으로 아래 순서를 따른다.
  - 1) Issue: 작업 시작 시 GitHub 이슈를 먼저 등록한다. (한국어 작성)
  - 2) Plan: Goal / Scope / Done criteria를 명시한다.
  - 3) Dev: 구현 후 검증(validate, build, 필요 시 localhost 확인)을 수행한다.
- 이슈 등록이 인증/네트워크 문제로 막히면 사유를 기록하고 Plan -> Dev를 먼저 진행한 뒤, 가능해지는 즉시 이슈를 등록/갱신한다.
- 작업 완료 후 이슈에 결과(변경 요약, 검증 결과, 관련 커밋)를 반영한다.