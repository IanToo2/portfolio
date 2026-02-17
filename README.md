# Portfolio Site

## 1) 개요
- 용도: React/Vite 기반 개인 포트폴리오 단일 페이지.
- 주요 기능: 다국어 전환(ko/en), 프로젝트/경력 섹션, PDF 내보내기, 반응형 UI.

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

## 4) WSL 전환 체크리스트
- Windows에서 가져온 `node_modules`는 삭제 후 WSL에서 재설치한다.
```bash
rm -rf node_modules
npm install
```
- Git 줄바꿈 설정을 LF 기준으로 맞춘다.
```bash
git config --global core.autocrlf input
git config --global core.eol lf
git config --global core.filemode false
```
- `.gitattributes`(`* text=auto eol=lf`)가 유지되는지 확인한다.
