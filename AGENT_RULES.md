# AGENT_RULES.md

이 문서는 `AGENTS.md`의 보조 실행 가이드다.
강제 규칙(MUST)은 항상 `AGENTS.md`를 우선 적용한다.

## Core Execution Notes
1. 전체 파일 재작성보다 최소 diff 기반 편집을 우선한다.
2. 파일 손상(인코딩/깨짐)이 의심되면 무작정 재작성하지 말고 먼저 검증한다.
3. 대규모 리팩토링 후에는 import/export 무결성을 점검한다.
4. scripted/regex 치환은 범위를 최소화해 top-level 구조를 깨지 않게 한다.
5. 샌드박스 세션의 `git push`는 첫 시도부터 `require_escalated`를 사용한다.

## Windows Shell Notes
1. PowerShell 연속 명령은 `&&` 대신 `;`를 사용한다.
2. `npm.ps1` 실행 정책 이슈가 있으면 `cmd /c npm ...`를 사용한다.
3. `rg`에서 `*.md` 직접 전달 대신 `-g "*.md"` 형태를 사용한다.
4. 콘솔 출력이 깨져 보일 때는 편집 전에 실제 파일 인코딩을 먼저 확인한다.
