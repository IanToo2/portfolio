# Portfolio Site

React + Vite 기반 단일 페이지 포트폴리오입니다.

## 빠른 파악
- 진입점: `src/main.jsx` -> `src/App.jsx`
- 섹션 UI: `src/components/sections/*`
- 공통 컴포넌트: `src/components/*`
- 표시 데이터: `src/data/portfolioData.js`, `src/data/portfolioText.js`
- 동작 로직: `src/hooks/*` (섹션 활성화, 뷰모델, PDF 내보내기, 뷰포트)
- 스타일: `src/styles/global.css`
- 인코딩 검증: `scripts/validate-encoding.mjs`

## 실행/검증
```bash
npm run validate
npm run build
npm run dev
```
- 개발 서버: `http://localhost:5173`

## 수정 시 기준
- 데이터/문구 수정: `src/data/*`
- 섹션 구조/레이아웃 수정: `src/components/sections/*`, `src/App.jsx`
- 공통 스타일 수정: `src/styles/global.css`
