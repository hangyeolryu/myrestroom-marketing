import Link from "next/link";

export default function VerificationDocsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          사용자 검증 시스템 안내
        </h1>
        <p className="text-gray-600 mb-8">
          MyRestroom은 군중 참여형(Crowd-Sourced) 검증 시스템으로 편의시설 정보를
          신뢰성 있게 제공합니다. 모든 리뷰는 실시간으로 집계되어 신뢰도와 상태가
          업데이트됩니다.
        </p>

        <section className="space-y-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">리뷰 모델 확장</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>amenitiesReview: Map&lt;string, boolean&gt; – 리뷰 시 각 편의시설의 유무 기록</li>
              <li>amenitiesAccuracyRating: 1–5 – 리뷰어가 느낀 정보 정확도</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">집계 모델</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>AmenitiesAggregation: 편의시설별 확인/부정 카운트와 정확도</li>
              <li>AmenityData: 개별 편의시설의 신뢰도, 검증 횟수, 상태</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">핵심 기능</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>실시간 집계: 리뷰 저장 시 즉시 통합 데이터 갱신</li>
              <li>신뢰도 점수: 확인/부정 비율 기반 1–5점, 가중치 적용</li>
              <li>시각 표시: ✅ 확인됨 / ❓ 검증 필요 / ❌ 부정됨 + 툴팁(퍼센트·검증 횟수)</li>
              <li>전체 정확도: 모든 편의시설을 합산한 정확도 퍼센트 및 추세</li>
            </ul>
          </div>
        </section>

        <div className="mt-10 flex items-center gap-4">
          <Link href="/#verification" className="px-5 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700">
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


