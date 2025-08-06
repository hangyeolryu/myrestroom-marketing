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
} from "react-icons/fa";

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
                MyRestroom
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
                href="/contact"
                className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors font-medium"
              >
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
              깨끗한 나의{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                화장실
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              언제 어디서나 깨끗하고 편리한 화장실을 찾아보세요. 실시간 리뷰와
              평점으로 최고의 화장실을 추천받으세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-colors font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <FaMobileAlt />
                <span>앱 다운로드</span>
              </Link>
              <Link
                href="/#features"
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full hover:bg-teal-600 hover:text-white transition-colors font-semibold text-lg"
              >
                기능 알아보기
              </Link>
            </div>
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
              MyRestroom이 제공하는 핵심 기능들을 확인해보세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                실시간 검색
              </h3>
              <p className="text-gray-600">
                현재 위치 기반으로 주변 화장실을 실시간으로 검색하고 찾아보세요
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                리뷰 & 평점
              </h3>
              <p className="text-gray-600">
                실제 사용자들의 리뷰와 평점으로 깨끗하고 편리한 화장실을
                선택하세요
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                즐겨찾기
              </h3>
              <p className="text-gray-600">
                자주 이용하는 화장실을 즐겨찾기에 추가하고 빠르게 접근하세요
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBell className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                알림 서비스
              </h3>
              <p className="text-gray-600">
                새로운 화장실 추가나 특별한 이벤트에 대한 알림을 받아보세요
              </p>
            </div>
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
                MyRestroom의 비전
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                우리는 모든 사람이 언제 어디서나 깨끗하고 편리한 화장실을 이용할
                수 있는 세상을 만들고자 합니다. 사용자들의 실제 경험과 리뷰를
                바탕으로 최고의 화장실 정보를 제공하며, 모든 화장실이 기본적인
                위생 용품을 갖추도록 노력합니다.
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
                  href="/contact"
                  className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  다운로드하기
                </Link>
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
                <span className="text-xl font-bold">MyRestroom</span>
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
            <p>&copy; 2025 MyRestroom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
