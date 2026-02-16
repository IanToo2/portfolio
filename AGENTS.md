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
