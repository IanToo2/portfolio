# Portfolio Site 상태 요약

기준일: 2026-02-17

## 1) 현재 상태
- 용도: React/Vite 기반 개인 포트폴리오 단일 페이지.
- Git: `main` 브랜치, `origin/main` 추적, 워킹트리 변경 없음.
- 로컬 서버: `http://localhost:5173` 응답 `200` 확인.
- 최근 커밋:
  - `ef0d719` chore: stop tracking local dev log files
  - `3e33f10` feat: resolve issues #2-#5 for cards, a11y, seo, and fonts
  - `405c8f9` docs: enforce bash-lc for codex shell commands

## 2) 실행/검증
```bash
npm run validate
npm run build
npm run dev
```

- `validate`: UTF-8(BOM 없음), `\uXXXX` 금지, 깨진 문자 검사.
- 개발 서버 주소: `http://localhost:5173`

## 3) 코드 구조(핵심)
- `src/App.jsx`: 페이지 조합, 언어 전환, 섹션 내비게이션.
- `src/components/sections/*`: Summary/Highlights/Projects/Stack/Experience/Contact.
- `src/data/portfolioData.js`, `src/data/portfolioText.js`: 이력/프로젝트/문구 데이터.
- `src/hooks/usePortfolioViewModel.js`: 데이터 가공/표시 모델.
- `src/hooks/useActiveSection.js`: active section 추적.
- `src/hooks/usePortfolioPdfExport.js`: PDF 내보내기.
- `scripts/validate-encoding.mjs`: 인코딩/문자 검증 스크립트.

## 4) 현재 기능 범위
- 한국어/영어 전환.
- 프로젝트 분류/필터 표시.
- 섹션 active 상태 반영(스크롤 기반).
- 포트폴리오 PDF 저장.
- 반응형 UI, 스킵 링크/키보드 내비게이션 적용.
