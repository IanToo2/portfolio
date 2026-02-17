# Portfolio Site

React + Vite 기반 단일 페이지 포트폴리오입니다.

## 구조 한눈에 보기
- 진입점: `src/main.tsx` -> `src/App.tsx`
- 섹션 UI: `src/components/sections/*`
- 공통 UI: `src/components/*`
- 데이터/문구: `src/data/portfolioData.js`, `src/data/portfolioText.js`
- 동작 로직: `src/hooks/*`
- 스타일: `src/styles/global.css`
- 인코딩 검증 스크립트: `scripts/validate-encoding.mjs`

## 실행/검증
```bash
npm run validate
npm run build
npm run dev
```
- 로컬 주소: `http://localhost:5173`

## 수정 시 기준
- 데이터/문구 수정: `src/data/*`
- 섹션 구조/레이아웃 수정: `src/components/sections/*`, `src/App.tsx`
- 공통 스타일 수정: `src/styles/global.css`
