import Link from "next/link";
import Image from "next/image";
import {
  FaQuestionCircle,
  FaMapMarkerAlt,
  FaStar,
  FaShieldAlt,
  FaMobileAlt,
} from "react-icons/fa";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/%EB%82%98%EC%9D%98-%ED%99%94%EC%9E%A5%EC%8B%A4/id6748704814";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 relative">
                <Image
                  src="/myrest_logo.png"
                  alt="MyRestroom Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
              </div>
              <span className="text-xl font-bold text-gray-900">
                자주 묻는 질문
              </span>
            </Link>
            <Link
              href="/"
              className="text-teal-600 hover:text-teal-700 transition-colors"
            >
              ← 홈으로 돌아가기
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaQuestionCircle className="text-white text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            자주 묻는 질문
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            MyRestroom 사용자들이 자주 묻는 질문들을 모았습니다. 빠른 답변을
            찾아보세요.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMobileAlt className="text-teal-600 text-xl" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">앱 사용법</h3>
            <p className="text-gray-600 text-sm">
              앱 설치 및 기본 사용법에 대한 질문
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">위치 서비스</h3>
            <p className="text-gray-600 text-sm">
              위치 기반 서비스 및 GPS 관련 질문
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaStar className="text-green-600 text-xl" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">리뷰 & 평점</h3>
            <p className="text-gray-600 text-sm">
              리뷰 작성 및 평점 시스템 관련 질문
            </p>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {/* App Usage */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FaMobileAlt className="text-teal-600 mr-2" />앱 사용법
            </h2>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: MyRestroom 앱은 어떻게 다운로드하나요?
                </h3>
                <p className="text-gray-600">
                  A: 현재 iOS 버전은
                  <Link href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-teal-600 underline ml-1">App Store</Link>
                  에서 다운로드 가능합니다. Android 버전은 준비 중입니다.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 어떤 편의시설 정보를 제공하나요?
                </h3>
                <p className="text-gray-600">
                  A: 아기/가족(기저귀 교환대, 수유실, 가족 화장실), 위생(비데, 온수,
                  방향제, 핸드드라이어, 비누, 휴지, 손 소독제), 기본 시설(거울, 세면대,
                  휴지통, 위생용품 자판기), 환경/쾌적성(배경 음악, 환기, 난방, 냉방) 등
                  세부 항목을 지원합니다.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 앱이 실행되지 않거나 오류가 발생해요
                </h3>
                <p className="text-gray-600">
                  A: 먼저 앱을 완전히 종료한 후 다시 실행해보세요. 문제가
                  지속되면 앱을 삭제하고 재설치해주세요. 여전히 문제가 있다면
                  고객지원팀에 연락해주시기 바랍니다.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 계정을 만들지 않고도 앱을 사용할 수 있나요?
                </h3>
                <p className="text-gray-600">
                  A: 기본적인 화장실 검색 기능은 계정 없이도 이용 가능합니다.
                  하지만 리뷰 작성, 즐겨찾기 저장, 개인화된 서비스 이용을
                  위해서는 계정 생성이 필요합니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 앱에서 로그아웃하려면 어떻게 해야 하나요?
                </h3>
                <p className="text-gray-600">
                  A: 앱 내 설정 메뉴 → 계정 관리 → 로그아웃을 선택하시면 됩니다.
                  로그아웃 후에도 기본 검색 기능은 계속 이용하실 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Location Services */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FaMapMarkerAlt className="text-blue-600 mr-2" />
              위치 서비스
            </h2>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 위치 정보가 정확하지 않아요
                </h3>
                <p className="text-gray-600">
                  A: GPS 설정을 확인하고 위치 권한을 허용해주세요. 실외에서
                  사용하시면 더 정확한 위치를 제공받을 수 있습니다. 건물
                  내부에서는 위치 정확도가 떨어질 수 있습니다.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 위치 권한을 허용하지 않아도 앱을 사용할 수 있나요?
                </h3>
                <p className="text-gray-600">
                  A: 위치 권한 없이도 앱을 사용할 수 있지만, 주변 화장실 검색
                  기능은 제한됩니다. 수동으로 지역을 선택하여 검색하실 수
                  있습니다.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 다른 지역의 화장실도 검색할 수 있나요?
                </h3>
                <p className="text-gray-600">
                  A: 네, 지도에서 원하는 지역을 선택하거나 검색창에 지역명을
                  입력하여 해당 지역의 화장실을 검색할 수 있습니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 실시간 위치 추적을 끄고 싶어요
                </h3>
                <p className="text-gray-600">
                  A: 앱 설정 → 위치 서비스에서 실시간 위치 추적을 끄실 수
                  있습니다. 이 경우 수동으로 위치를 설정해야 합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Reviews & Ratings */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FaStar className="text-green-600 mr-2" />
              리뷰 & 평점
            </h2>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 부적절한 콘텐츠는 어떻게 신고하나요?
                </h3>
                <p className="text-gray-600">
                  A: 화장실 상세 화면과 리뷰 카드에 있는 ‘신고’ 버튼을 누르면 신고 다이얼로그가 열립니다.
                  사유(허위 정보, 부적절한 내용, 스팸, 중복, 욕설, 부적절한 사진, 기타)를 선택하고 필요시 설명을 추가하세요.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 신고가 3건 이상이면 어떻게 되나요?
                </h3>
                <p className="text-gray-600">
                  A: 동일 콘텐츠에 신고가 3회 이상 접수되면 자동으로 숨김 처리되며, 작성자에게 알림이 전송됩니다.
                  이후 관리자가 검토하여 ‘해결’ 또는 ‘기각’으로 처리합니다.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 어떤 콘텐츠를 신고할 수 있나요?
                </h3>
                <p className="text-gray-600">
                  A: 사용자 등록 화장실과 모든 리뷰는 신고할 수 있습니다. 정부/공공 데이터는 신고 대상에서 제외됩니다.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 허위 신고를 하면 어떤 불이익이 있나요?
                </h3>
                <p className="text-gray-600">
                  A: 반복적인 허위 신고는 계정 제재 사유가 될 수 있으며, 신고 단계에서 경고 문구가 안내됩니다.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 편의시설 정보의 신뢰도는 어떻게 보나요?
                </h3>
                <p className="text-gray-600">
                  A: 각 편의시설 항목은 사용자 리뷰를 통해 실시간으로 집계됩니다.
                  확인/부정 비율로 신뢰도(1-5점)가 계산되며, 상태는 ✅ 확인됨 / ❓ 검증 필요 / ❌ 부정됨으로 표시돼요.
                  항목 위에 마우스를 올리면(모바일은 탭) 신뢰도와 검증 횟수 툴팁이 표시됩니다.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 리뷰를 작성하려면 계정이 필요한가요?
                </h3>
                <p className="text-gray-600">
                  A: 네, 리뷰 작성과 평점 부여를 위해서는 로그인이 필요합니다.
                  이는 악의적인 리뷰를 방지하고 신뢰할 수 있는 정보를 제공하기
                  위함입니다.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 작성한 리뷰를 수정하거나 삭제할 수 있나요?
                </h3>
                <p className="text-gray-600">
                  A: 네, 마이페이지 → 내 리뷰에서 작성한 리뷰를 수정하거나
                  삭제할 수 있습니다. 단, 리뷰 작성 후 30일이 지나면 수정이
                  제한될 수 있습니다.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 부적절한 리뷰를 발견했어요
                </h3>
                <p className="text-gray-600">
                  A: 해당 리뷰의 신고 버튼을 클릭하여 신고해주세요. 검토 후
                  부적절한 리뷰는 삭제되거나 수정될 수 있습니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 평점은 어떻게 계산되나요?
                </h3>
                <p className="text-gray-600">
                  A: 평점은 사용자들이 부여한 별점의 평균값으로 계산됩니다. 최소
                  1점부터 최대 5점까지 부여할 수 있으며, 더 많은 리뷰가 있을수록
                  신뢰할 수 있는 평점입니다.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy & Security */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FaShieldAlt className="text-purple-600 mr-2" />
              개인정보 & 보안
            </h2>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 개인정보는 어떻게 보호되나요?
                </h3>
                <p className="text-gray-600">
                  A: 회사는 개인정보보호법을 준수하며, 사용자의 개인정보를
                  안전하게 보호합니다. 자세한 내용은 개인정보처리방침을
                  참조해주세요.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 위치 정보는 저장되나요?
                </h3>
                <p className="text-gray-600">
                  A: 위치 정보는 서비스 제공을 위해 임시로만 사용되며, 사용자가
                  요청하지 않는 한 저장되지 않습니다. 개인정보처리방침에서
                  자세한 내용을 확인하실 수 있습니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Q: 계정을 삭제하려면 어떻게 해야 하나요?
                </h3>
                <p className="text-gray-600">
                  A: 앱 설정 → 계정 관리 → 계정 삭제를 선택하시면 됩니다. 계정
                  삭제 시 모든 개인정보와 데이터가 영구적으로 삭제되므로
                  신중하게 결정해주시기 바랍니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 mt-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              더 궁금한 점이 있으신가요?
            </h2>
            <p className="text-gray-600 mb-6">
              위의 FAQ에서 답변을 찾지 못하셨다면, 고객지원팀에 직접
              문의해주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/support"
                className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors font-semibold"
              >
                고객지원 문의
              </Link>
              <Link
                href="/contact"
                className="border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-full hover:bg-teal-600 hover:text-white transition-colors font-semibold"
              >
                이메일 문의
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
