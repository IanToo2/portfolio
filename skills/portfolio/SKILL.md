---
name: "portfolio"
description: "Use for portfolio-site content, UI, structure, and debugging work."
---

# Portfolio Skill

## Use when
- 포트폴리오 콘텐츠, 이중언어 문구, 섹션, 카드, 레이아웃, 상호작용을 수정할 때
- 데이터 필드, 프로젝트 분류, 섹션 구조, PDF 관련 UI를 확장할 때
- 포트폴리오 버그를 분석하거나 수정할 때

## Route changes
- 콘텐츠/경력/프로젝트/기술 데이터: `src/data/portfolioData.js`
- UI 문구/라벨/aria/상태 메시지: `src/data/portfolioText.js`
- 파생 데이터/로컬라이징/그룹핑: `src/features/portfolio/usePortfolioHomeModel.js`
- 섹션 UI: `src/features/portfolio/components/*`
- 공통 UI: `src/components/*`
- 상위 구성/내비게이션/인트로: `src/App.tsx`
- 스타일: `src/styles/*`
- PDF 영향: `src/hooks/usePortfolioPdfExport.js`

작업 순서는 가능한 한 `data -> model -> section component -> shared component -> App -> styles`를 따른다.

## Keep true
- 사용자 노출 문구는 한/영 의미와 순서를 맞춘다
- 이름, 날짜, 지표, 회사명, 자격 정보는 언어 간 불일치가 없어야 한다
- 새 필드는 `data -> model -> UI` 순서로 연결한다
- 새 섹션은 섹션 id, 내비게이션, active-section 동작, 레이아웃 등록을 함께 갱신한다
- 기본 스캔 순서는 `Home -> Projects -> Capabilities -> Career -> Contact` 유지
- 수치는 근거 없는 값으로 추가하지 않는다

## Data model essentials
- `src/data/portfolioData.js` 주요 export:
  - `PROFILE`
  - `NAV_ITEMS`
  - `SCAN_HIERARCHY`
  - `SUMMARY_QUICK_MODEL`
  - `METRICS`
  - `HIGHLIGHTS`
  - `STACK`
  - `EXPERIENCE`
  - `EDUCATION`
  - `TRAINING`
  - `AWARDS`
  - `CERTIFICATIONS`
  - `PROJECT_CATEGORY`
  - `PROJECT_TRACK`
  - `PROJECTS`
- `src/data/portfolioText.js` export: `TEXT`
- 이중언어 필드는 기본적으로 `field` / `fieldEn`
- 타임라인 배열 항목은 `period`, `organization`, `title`, `bullets`와 각 `En` 쌍을 유지
- 프로젝트는 최소한 `category`, `track`, `name/nameEn`, `period/periodEn`, `kind/kindEn`, `scope/scopeEn`, `tech/techEn`, `contributions/contributionsEn`, `metrics`, `isFeatured`, `isPending`을 유지
- 새 프로젝트 표시 필드를 추가하면 raw data, model mapping, 소비 UI를 모두 함께 수정

## Extension patterns
- 콘텐츠 수정: 데이터 파일 또는 `TEXT`만 먼저 수정
- 새 필드: raw field 추가 -> 영어 쌍 추가 -> `usePortfolioHomeModel.js` 매핑 -> 필요한 카드/섹션만 렌더
- 새 섹션: 섹션 컴포넌트 생성 -> `App.tsx` 등록 -> nav/anchor/active-section 확인 -> 필요한 최소 스타일만 추가
- 새 프로젝트 grouping/filter: `PROJECTS`에 최소 signal 추가 -> model에서 파생 컬렉션 생성 -> 섹션 UI 연결
- 공통 UI 승격: 실제 재사용이 2곳 이상일 때만 `src/components/*`로 이동
- PDF 영향 변경: export 버튼 흐름과 섹션/card 래퍼가 PDF 출력에서 유지되는지 확인

## Validation
- `DEV` 작업 후:
  - `npm run validate`
  - `npm run build`
- dev 서버가 이미 떠 있으면 `http://localhost:5173` 응답 확인
- UI, 레이아웃, 애니메이션, 네비게이션, 상태 전환 변경 시 수동 테스트:
  - 첫 진입과 새로고침 후 모두 확인
  - 변경된 상호작용을 최소 1회 실행
  - 언어 전환, 필터, 탭, 오버레이, sticky UI, 스크롤 연동 변경이면 해당 흐름 추가 확인
  - 배포 사이트 버그 수정이면 배포 환경에서도 같은 시나리오 재확인, 불가 시 사유 기록

## Done
- 요청 변경이 최소 diff로 반영됨
- data/model/UI 정합성 유지
- 한/영 정합성 유지
- validate/build 통과
- 필요한 수동 테스트 완료 또는 차단 사유 기록
