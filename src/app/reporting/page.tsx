import Link from "next/link";

export default function ReportingDocsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">신고 시스템 안내</h1>
        <p className="text-gray-600 mb-8">
          MyRestroom은 커뮤니티 주도의 신고 시스템으로 콘텐츠의 신뢰성과 안전을 지킵니다.
          3회 이상 신고된 콘텐츠는 자동으로 숨겨지며, 관리자가 신속히 검토합니다.
        </p>

        <section className="space-y-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Report 모델</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>ReportReason: falseInformation, inappropriateContent, spam, duplicate, offensiveLanguage, inappropriatePhoto, other</li>
              <li>ReportStatus: pending, reviewed, resolved, dismissed</li>
              <li>필드: 대상 ID, 대상 타입(화장실/리뷰), 사유, 설명, 스크린샷 URL, 작성자, 생성일, 상태, 관리자 메모</li>
              <li>Helper: 한글 표시명, 상태 체크 유틸</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Report 서비스</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Firestore에 신고 저장 및 카운트</li>
              <li>3건 이상 자동 숨김 처리 및 작성자 알림</li>
              <li>관리 기능: 상태 변경, 통계, 숨김 사유 기록</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">사용자 인증/평판</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Firebase Auth 연동, 관리자 권한 확인</li>
              <li>평판 점수: 정확한 신고 보상, 허위 신고 패널티</li>
              <li>신고 쿨다운: 동일 대상 24시간 제한, 최소 평판 10점부터 신고 가능</li>
              <li>자가 신고 방지: 본인 콘텐츠 신고 불가</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">AI 기반 필터링</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>텍스트/이미지/메타데이터 분석으로 리스크 스코어 산출</li>
              <li>고위험 자동 숨김, 중위험 플래깅 및 검토 요청</li>
              <li>AI 모델 학습/재학습 및 자동 리포트 생성</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">이의제기(Appeal)</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>콘텐츠 작성자의 이의제기 접수 및 사유 분류</li>
              <li>관리자 심사, 결정 기록, 승인 시 자동 복구</li>
              <li>중복 이의제기 방지, 알림 및 통계</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">보상(리워드) 시스템</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>정확한 신고에 포인트 보상, 허위 신고 패널티</li>
              <li>배지·리더보드·주간/월간 챌린지</li>
              <li>평판 단계 진화와 꿀팁 제공</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">신고 다이얼로그</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>라디오 버튼으로 사유 선택 + 선택적 상세 설명</li>
              <li>허위 신고 경고 문구 및 한국어 전체 로컬라이제이션</li>
              <li>스크린샷 첨부(선택)로 증빙 지원</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">통합 및 관리자 화면</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>상세 화면/리뷰 카드에 신고 버튼 노출(적절한 경우만)</li>
              <li>관리자 대시보드: 통계 카드, 상태 필터, 펼침 상세, 처리/기각, 메모</li>
              <li>정부/공공 데이터는 신고 불가, 모든 리뷰는 신고 가능</li>
            </ul>
          </div>
        </section>

        <div className="mt-10 flex items-center gap-4">
          <Link href="/#reporting" className="px-5 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700">
            홈페이지 섹션으로 이동
          </Link>
          <Link href="/" className="px-5 py-3 rounded-full border-2 border-teal-600 text-teal-600 font-semibold hover:bg-teal-600 hover:text-white">
            홈으로 돌아가기
          </Link>
        </div>
      </main>
    </div>
  );
}


