# Portfolio Site

React + Vite 기반 단일 페이지 포트폴리오.

## 문서
- `README.md`: 프로젝트 개요, 실행, 배포, 구조
- `AGENTS.md`: 저장소 작업 규칙과 이슈 lifecycle(등록 -> 업데이트 -> 종료) SSOT
- `skills/portfolio/SKILL.md`: 포트폴리오 변경 라우팅과 작업 절차

## 구조
- 진입점: `src/main.tsx` -> `src/App.tsx`
- 화면 3개(해시 라우팅)
  - 경력기술서 `#/resume`(기본, PDF 정본) `src/features/portfolio/document/ResumeDocument.jsx`
  - 이력서 `#/cv`(2쪽, 서술 없이 사실 목록) `src/features/portfolio/document/CvDocument.jsx`
  - 웹 뷰 `#/card`(개인 홈페이지형) `src/features/portfolio/web/*`
  - 두 문서 공용 부품: `src/features/portfolio/document/DocumentParts.jsx`
- PDF: 브라우저 인쇄(PDF로 저장). 인쇄 레이아웃은 `src/styles/resume.css`의 `@media print`
- 데이터/문구: `src/data/portfolioData.js`, `src/data/portfolioText.js`
- 직무별 버전: `src/data/variants/*` (`dev` 개발자, `qa` QA Tester). 원본 데이터는 그대로 두고 선택·순서·문구 덮어쓰기만 정의
  - 경로: `#/resume/<id>`, `#/cv/<id>`, `#/card/<id>` (지정하지 않으면 전체 버전), PDF 기본 파일명 `portfolio-<id>-YYYY-MM-DD`(경력기술서), `cv-<id>-YYYY-MM-DD`(이력서)
  - 설정 필드: `profile`(PROFILE 필드 덮어쓰기), `fit`, `trackOrder`, `highlights`(HIGHLIGHTS id), `stackOrder`, `extraStack`
  - 새 직무 추가: 설정 파일 작성 -> `variants/index.js` 등록 -> `npm run validate`(참조 id·한/영 쌍 검사)
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
