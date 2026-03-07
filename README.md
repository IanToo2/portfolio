# Portfolio Site

React + Vite 기반 단일 페이지 포트폴리오.

## 문서
- `README.md`: 프로젝트 개요, 실행, 배포, 구조
- `AGENTS.md`: 저장소 작업 규칙과 이슈 lifecycle(등록 -> 업데이트 -> 종료) SSOT
- `skills/portfolio/SKILL.md`: 포트폴리오 변경 라우팅과 작업 절차

## 구조
- 진입점: `src/main.tsx` -> `src/App.tsx`
- 포트폴리오 기능/섹션: `src/features/portfolio/*`
- 공통 UI: `src/components/*`
- 데이터/문구: `src/data/portfolioData.js`, `src/data/portfolioText.js`
- 훅/모델: `src/hooks/*`, `src/features/portfolio/usePortfolioHomeModel.js`
- 스타일: `src/styles/*.css`
- 인코딩 검증: `scripts/validate-encoding.mjs`

## 실행
```bash
npm install
npm run validate
npm run build
npm run dev
```

- 로컬 주소: `http://localhost:5173`

## 배포
- `main` 브랜치 push 시 GitHub Actions로 GitHub Pages 배포
- 기본 운영 경로: `https://<GitHub 사용자명>.github.io/portfolio/`
- Pages 설정은 `GitHub Actions` 소스를 사용
