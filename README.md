# Portfolio Site (React + Vite)

개인 포트폴리오 웹사이트입니다. 과장된 소개 문구보다 실제 구현 내용과 구조를 중심으로 정리합니다.

## 기술 스택
- Runtime: `react@19`, `react-dom@19`
- Build/Dev: `vite@7`, `@vitejs/plugin-react`
- Styling: 전역 CSS (`src/styles/global.css`)
- Data & Content: 정적 데이터/텍스트 모듈 (`src/data/portfolioData.js`, `src/data/portfolioText.js`)
- Validation: UTF-8(BOM 없음), source `\\uXXXX` 금지 검사 (`scripts/validate-encoding.mjs`)

## 주요 구현 포인트
- 데이터/표현 분리
  - 포트폴리오 원천 데이터는 `src/data/portfolioData.js`에 모으고
  - 섹션 문구/라벨은 `src/data/portfolioText.js`에서 `ko/en`으로 분리
  - 화면 렌더용 가공은 `src/hooks/usePortfolioViewModel.js`에서 담당
- 섹션 기반 단일 페이지 구조
  - `src/App.jsx`에서 Summary/Focus/Highlights/Projects/Stack/Experience/Contact 섹션을 조합
  - 각 섹션은 `src/components/sections/*`로 분리해 변경 범위를 작게 유지
- 사용자 상호작용 로직
  - `IntersectionObserver` 기반 active menu 처리 (`src/hooks/useActiveSection.js`)
  - viewport 상태와 top 버튼 노출 제어 (`src/hooks/useViewportFlags.js`)
  - 모바일에서 프로젝트 카드 접기/펼치기 지원 (`src/components/ProjectCard.jsx`)
- 프로젝트 데이터 정렬/상태 계산
  - 기간 문자열(`YYYY.MM`)을 파싱해 최신순 정렬
  - 종료 월 기준으로 `isPending` 상태를 자동 계산해 진행중/완료 배지 표시
- 접근성/반응형
  - skip link, `prefers-reduced-motion` 대응
  - 1080/760/520 breakpoint 기반 레이아웃 조정

## 프로젝트 구조
```text
portfolio-site/
|- public/
|- scripts/
|  `- validate-encoding.mjs
|- src/
|  |- components/
|  |  |- sections/
|  |  `- ...
|  |- data/
|  |- hooks/
|  |- styles/
|  |- App.jsx
|  `- main.jsx
|- index.html
|- vite.config.js
`- package.json
```

## 실행 방법
```powershell
cd C:\ToyProject\portfolio-site
npm ci
```

```powershell
npm run validate
npm run dev
```

브라우저에서 `http://localhost:5173`에 접속합니다.

## 빌드 및 프리뷰
```powershell
npm run validate
npm run build
npm run preview
```

## 향후 개선 방향
- 타입 안정성 강화
  - `TypeScript` 전환 또는 JSDoc 타입 정의 보강으로 데이터 스키마 오류를 조기에 탐지
- 테스트 추가
  - `usePortfolioViewModel`의 정렬/상태 계산 단위 테스트
  - 주요 섹션 렌더링과 상호작용(접기/펼치기, active section) UI 테스트
- 데이터 품질 관리
  - 한글 문자열 인코딩/표시 깨짐 여부를 점검하고 콘텐츠 업데이트 프로세스 표준화
- 성능 최적화
  - 불필요 렌더 최소화, 아이콘/이미지 자산 최적화, 필요 시 코드 스플리팅 검토
- 운영 정보 확장
  - 실제 배포 환경(호스팅, CI/CD)이 확정되면 배포 절차와 환경 변수 정책 문서화
