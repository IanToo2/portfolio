# Portfolio Site

React + Vite 기반 단일 페이지 포트폴리오입니다.

## 문서 역할
- `README.md`: 프로젝트 개요, 구조, 실행 방법
- `AGENTS.md`: 저장소 작업 규칙 SSOT
- `skills/*`: 에이전트 작업 보조 절차

## 구조 한눈에 보기
- 진입점: `src/main.tsx` -> `src/App.tsx`
- 페이지 기능: `src/features/portfolio/*`
- 섹션 UI: `src/features/portfolio/components/*`
- 공통 UI: `src/components/*`
- 데이터/문구: `src/data/portfolioData.js`, `src/data/portfolioText.js`
- 동작 로직: `src/hooks/*`, `src/features/portfolio/usePortfolioHomeModel.js`
- 스타일: `src/styles/base.css`, `src/styles/ui.css`, `src/styles/home.css`
- 인코딩 검증 스크립트: `scripts/validate-encoding.mjs`

## 실행/검증
```bash
npm install
npm run validate
npm run build
npm run dev
```
- 로컬 주소: `http://localhost:5173`

## 배포
- 운영 배포: GitHub Pages
- 배포 방식: `main` 브랜치 push 시 `.github/workflows/deploy-pages.yml`로 자동 배포
- 기본 운영 경로: `https://<GitHub 사용자명>.github.io/portfolio/`
- 저장소가 `<user>.github.io` 형식이 아닌 경우 Vite build base는 저장소명을 기준으로 자동 계산
- GitHub 저장소 설정에서 `Settings > Pages > Build and deployment > Source`를 `GitHub Actions`로 설정해야 함

## 수정 시 기준
- 데이터/문구 수정: `src/data/*`
- 포트폴리오 섹션 구조/레이아웃 수정: `src/features/portfolio/components/*`, `src/App.tsx`
- 공통 컴포넌트 수정: `src/components/*`
- 스타일 수정: `src/styles/*.css`
