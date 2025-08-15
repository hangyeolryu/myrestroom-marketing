import Link from "next/link";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaStar,
  FaUsers,
  FaShieldAlt,
  FaMobileAlt,
  FaSearch,
  FaHeart,
  FaBell,
  FaHandPaper,
  FaToiletPaper,
  FaSoap,
  FaShieldVirus,
  FaApple,
} from "react-icons/fa";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/%EB%82%98%EC%9D%98-%ED%99%94%EC%9E%A5%EC%8B%A4/id6748704814";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <Image
                  src="/myrest_logo.png"
                  alt="MyRestroom Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                  priority
                />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                나의 화장실
              </span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/#features"
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                기능
              </Link>
              <Link
                href="/#reporting"
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                신고
              </Link>
              <Link
                href="/#verification"
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                검증
              </Link>
              <Link
                href="/#amenities"
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                편의시설
              </Link>
              <Link
                href="/#hygiene"
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                위생
              </Link>
              <Link
                href="/#about"
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                소개
              </Link>
              <Link
                href="/support"
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                지원
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                문의
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors font-medium"
                  >
                  <FaApple className="text-xl" />
                다운로드
                </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 relative">
                <Image
                  src="/myrest_logo.png"
                  alt="MyRestroom Logo"
                  width={96}
                  height={96}
                  className="rounded-2xl shadow-lg"
                  priority
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              화장실에 진심인 사람들의<br/>
              <span className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">화장실 필수 앱</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              아기/가족, 위생, 기본 시설, 환경/쾌적성까지 세부 편의시설로 원하는 화장실을 정확하게 찾고,
              AI 필터링·사용자 검증·신고/이의제기 시스템으로 더 안전하게 이용하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-colors font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <FaApple className="text-xl" />
                <span>iOS앱 다운로드</span>
              </Link>
              <Link
                href="/#features"
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full hover:bg-teal-600 hover:text-white transition-colors font-semibold text-lg"
              >
                기능 알아보기
              </Link>
            </div>
            <p className="mt-3 text-sm text-gray-500">Android 버전은 준비 중입니다.</p>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              주요 기능
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              세부 편의시설, AI 필터링, 사용자 검증, 신고/보상/이의제기까지 모두 담았습니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">실시간 검색</h3>
              <p className="text-gray-600">현재 위치 기반 빠른 탐색 및 혼잡도/인기순 정렬(예정)</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">리뷰 & 평점</h3>
              <p className="text-gray-600">실사용자 리뷰와 평점, 신뢰도 기반 정렬로 더 정확한 선택</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">즐겨찾기</h3>
              <p className="text-gray-600">즐겨찾기·히스토리·오프라인 보기(예정)로 더 편리하게</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                세부 편의시설 필터
              </h3>
              <p className="text-gray-600">아기/가족·위생·기본 시설·환경까지 디테일 필터</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">신고·보상 시스템</h3>
              <p className="text-gray-600">3회 이상 자동 숨김, 관리자 검토, 정확한 신고에 보상</p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Detail Section */}
      <section id="amenities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              화장실에 진심인 사람들을 위한 디테일
            </h2>
            <p className="text-lg text-gray-600">
              아래 편의시설 정보를 기반으로 원하는 화장실을 정확히 찾을 수 있어요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">아기 & 가족</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>👶 기저귀 교환대</li>
                <li>🤱 수유실</li>
                <li>👨‍👩‍👧‍👦 가족/유니섹스 화장실</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">위생</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>🚿 비데</li>
                <li>🌡️ 온수</li>
                <li>🌸 방향제</li>
                <li>💨 핸드드라이어</li>
                <li>🧼 비누</li>
                <li>🧻 휴지</li>
                <li>🧴 손 소독제</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">기본 시설</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>🪞 거울</li>
                <li>🚰 세면대</li>
                <li>🗑️ 휴지통</li>
                <li>🧻 위생용품 자판기</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">환경 & 쾌적성</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>🎵 배경 음악</li>
                <li>💨 환기</li>
                <li>🔥 난방</li>
                <li>❄️ 냉방</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  {/* Crowd-Sourced Amenities Verification */}
  <section id="verification" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">Beta</span>
              <Link href="/verification" className="text-teal-600 text-sm underline hover:text-teal-700">자세히 보기</Link>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              사용자 검증 기반 편의시설
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              리뷰가 등록될 때마다 편의시설 정보가 자동 집계되고 신뢰도(1–5점)가 갱신됩니다. 툴팁으로 퍼센트와 검증 횟수를 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">실시간 집계</h3>
              <p className="text-gray-600 text-sm">각 리뷰의 편의시설 선택이 즉시 반영되어 통합 결과를 업데이트합니다.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">신뢰도 점수</h3>
              <p className="text-gray-600 text-sm">확인/부정 비율 기반 1–5점 스코어, 가중치 반영</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">직관적 표시</h3>
              <p className="text-gray-600 text-sm">✅ 확인됨 / ❓ 검증 필요 / ❌ 부정됨 상태와 툴팁으로 세부 수치를 제공합니다.</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm">✅ 확인됨 (신뢰도 높음)</span>
              <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-sm">❓ 검증 필요 (불확실)</span>
              <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 text-sm">❌ 부정됨 (신뢰도 낮음)</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="flex items-center justify-between bg-white rounded-xl border border-gray-200 p-3">
                <span className="text-sm text-gray-800">👶 기저귀 교환대</span>
                <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs">✅ 92% (확인 46 · 부정 4)</span>
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl border border-gray-200 p-3">
                <span className="text-sm text-gray-800">🚿 비데</span>
                <span className="px-2 py-1 rounded bg-orange-100 text-orange-700 text-xs">❓ 68% (확인 17 · 부정 8)</span>
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl border border-gray-200 p-3">
                <span className="text-sm text-gray-800">🧴 손 소독제</span>
                <span className="px-2 py-1 rounded bg-red-100 text-red-700 text-xs">❌ 40% (확인 8 · 부정 12)</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-800">전체 정확도</span>
                <span className="text-sm text-gray-600">82%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-3 bg-gradient-to-r from-teal-500 to-blue-500 animate-grow-width"
                  style={{ ['--target-width' as any]: '82%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      {/* Reporting System */}
      <section id="reporting" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">Beta</span>
              <Link href="/reporting" className="text-teal-600 text-sm underline hover:text-teal-700">자세히 보기</Link>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">신고 시스템</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              부적절한 콘텐츠를 손쉽게 신고하세요. 3회 이상 신고 시 자동으로 숨김 처리되며,
              관리자가 신속히 검토합니다. 정부/공공 데이터는 신고 대상에서 제외됩니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">신고 사유</h3>
              <p className="text-gray-600 text-sm">허위 정보, 부적절한 내용, 스팸, 중복, 욕설, 부적절한 사진, 기타</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">자동 숨김</h3>
              <p className="text-gray-600 text-sm">동일 콘텐츠 3회 신고 시 자동 숨김 및 작성자 알림</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">관리자 도구</h3>
              <p className="text-gray-600 text-sm">상태 변경(검토중/해결/기각), 통계, 일괄 처리, 메모 기록</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6">
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>사용자가 신고 버튼 클릭</li>
              <li>신고 다이얼로그에서 사유 선택 및 설명 입력</li>
              <li>Firestore에 신고 저장 및 건수 확인</li>
              <li>3건 이상이면 콘텐츠 자동 숨김, 작성자 알림</li>
              <li>관리자 화면에서 검토, 해결/기각 처리 및 메모</li>
            </ol>
          </div>
        </div>
      </section>
    

      {/* Hygiene Essentials Section */}
      <section
        id="hygiene"
        className="py-20 bg-gradient-to-br from-blue-50 to-teal-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              위생의 중요성
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              모든 화장실이 기본적인 위생 용품을 갖추어야 한다고 믿습니다.
              우리의 목표는 한국의 모든 화장실이 다음 세 가지 필수 위생 용품을
              갖추도록 하는 것입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaToiletPaper className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                휴지 (Toilet Paper)
              </h3>
              <p className="text-gray-600 mb-4">
                기본적인 위생을 위한 필수품입니다. 모든 화장실에는 충분한 양의
                깨끗한 휴지가 구비되어야 합니다.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">
                  왜 중요한가요?
                </h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• 기본적인 위생 관리</li>
                  <li>• 사용자 편의성 제공</li>
                  <li>• 위생적이고 안전한 환경</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaSoap className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                비누 (Soap)
              </h3>
              <p className="text-gray-600 mb-4">
                손 씻기는 건강한 습관의 기본입니다. 모든 화장실에는 액체 비누나
                고체 비누가 구비되어야 합니다.
              </p>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">
                  왜 중요한가요?
                </h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• 세균 및 바이러스 제거</li>
                  <li>• 감염병 예방</li>
                  <li>• 공중보건 향상</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHandPaper className="text-purple-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                종이타월 (Paper Towels)
              </h3>
              <p className="text-gray-600 mb-4">
                손을 깨끗하게 말리는 필수품입니다. 모든 화장실에는 종이타월이나
                핸드드라이어가 구비되어야 합니다.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">
                  왜 중요한가요?
                </h4>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• 손을 완전히 건조</li>
                  <li>• 세균 번식 방지</li>
                  <li>• 위생적 환경 유지</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <div className="flex items-center justify-center mb-4">
              <FaShieldVirus className="text-4xl mr-4" />
              <h3 className="text-2xl font-bold">우리의 목표</h3>
            </div>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              한국의 모든 화장실이 이 세 가지 필수 위생 용품을 갖추도록 하여
              더욱 깨끗하고 안전한 화장실 환경을 만들어가겠습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                함께 참여하기
              </Link>
              <Link
                href="/#about"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-colors inline-block"
              >
                더 알아보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                나의 화장실의 비전
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                우리는 모든 사람이 언제 어디서나 깨끗하고 편리한 화장실을 이용할
                수 있는 세상을 만들고자 합니다. 사용자들의 실제 경험과 리뷰,
                그리고 세부 편의시설 데이터를 바탕으로 원하는 화장실을 정확히
                찾을 수 있도록 돕습니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                    <FaShieldAlt className="text-white text-sm" />
                  </div>
                  <span className="text-gray-700">
                    안전하고 신뢰할 수 있는 정보
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-sm" />
                  </div>
                  <span className="text-gray-700">전국 모든 지역 커버</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 relative mr-4">
                    <Image
                      src="/myrest_logo.png"
                      alt="MyRestroom Logo"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">앱 다운로드</h3>
                </div>
                <p className="mb-6">
                  지금 바로 MyRestroom을 다운로드하고 깨끗한 화장실을
                  찾아보세요!
                </p>
                <Link
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  다운로드하기
                </Link>
                <p className="mt-3 text-sm text-white/90">Android 버전은 준비 중입니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 relative">
                  <Image
                    src="/myrest_logo.png"
                    alt="MyRestroom Logo"
                    width={32}
                    height={32}
                    className="rounded-lg"
                  />
                </div>
                <span className="text-xl font-bold">나의 화장실</span>
              </div>
              <p className="text-gray-400">
                깨끗한 나의 화장실을 찾는 가장 쉬운 방법
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">서비스</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/#features"
                    className="hover:text-white transition-colors"
                  >
                    기능
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#hygiene"
                    className="hover:text-white transition-colors"
                  >
                    위생
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="hover:text-white transition-colors"
                  >
                    소개
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="hover:text-white transition-colors"
                  >
                    지원
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">법적 고지</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    이용약관
                  </Link>
                </li>
                <li>
                  <Link
                    href="/copyright"
                    className="hover:text-white transition-colors"
                  >
                    저작권
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">연락처</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    문의하기
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="hover:text-white transition-colors"
                  >
                    고객지원
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 나의 화장실. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
