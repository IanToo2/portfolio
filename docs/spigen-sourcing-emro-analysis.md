# 슈피겐 코리아 SCM 프로젝트 커밋 분석 메모

- 분석 대상 저장소: https://github.com/spigenHQ/sourcing_emro
- 분석 기준 작성자 이메일:
  - iantoo.kim@emro.co.kr
  - rlawjddla0203@gmail.com
- 분석 방식: no-merge 커밋 중심, 커밋 메시지/변경 파일 패턴 확인
- 분석 기간: 2024-11-13 ~ 2025-03-21
- 비머지 커밋 수: 145

## 요약 결과
1. SAP 인터페이스 연동 및 적재 로직 개발
- MM11/MM18 인터페이스 매퍼/서비스 수정 및 고도화
- 대표 파일: if-sap-mm11.xml, if-sap-mm18.xml, SapToScmInforecodeServiceImpl.java

2. DAMO 결재 연동 구현 및 안정화
- 조회/상세/취소/재상신 로직, callback/security 설정 반영
- 대표 파일: ApprovalService.java, GwApprovalService.java, SharedController.java, SecurityConfiguration.java

3. SCM 기능 신규 개발
- 계약 단가 모니터링(임가공) 신규 화면/백엔드 구현
- 품목 검색 팝업 및 품목 마스터/현황 기능 추가

4. 데이터/운영 개선
- 인터페이스 중복 데이터 처리 기능 추가
- 조회 쿼리 및 검색 성능 개선
- 정산 수량/금액 필드 확장

## 대표 커밋 샘플
- 775c29d3 feat : IF 데이터 연동
- 96e28ef3 feat : DAMO 연동
- d400a7c4 feat : 계약 단가 모니터링(임가공) 화면 신규 개발
- fc18ef21 feat : 품목 현황/품목 마스터 Search 팝업 추가
- 6a44f992 feat : 인터페이스 처리 후 중복 데이터 처리 기능
- a514681e feat : 암호화 및 복호화 확인용 api 추가

## 참고
- 본 문서는 이력서/포트폴리오 상세 기여 문구 작성을 위한 내부 분석 메모입니다.
