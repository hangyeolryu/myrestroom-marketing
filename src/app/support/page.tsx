import Link from "next/link";
import Image from "next/image";
import {
  FaHeadset,
  FaQuestionCircle,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaComments,
  FaBook,
  FaUserFriends,
} from "react-icons/fa";

export default function SupportPage() {
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
              <span className="text-xl font-bold text-gray-900">고객 지원</span>
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
            <FaHeadset className="text-white text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">고객 지원</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            MyRestroom을 이용하시는 동안 궁금한 점이나 문제가 있으시면 언제든
            연락해 주세요. 빠르고 친절한 지원을 제공해 드리겠습니다.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                <FaQuestionCircle className="text-teal-600 text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                자주 묻는 질문
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              사용자들이 자주 묻는 질문들을 확인해보세요. 빠른 답변을 찾을 수
              있습니다.
            </p>
            <Link
              href="/faq"
              className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors font-semibold inline-block"
            >
              FAQ 보기
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <FaEnvelope className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">이메일 문의</h2>
            </div>
            <p className="text-gray-600 mb-6">
              자세한 문의사항이 있으시면 이메일로 보내주세요. 24시간 내에
              답변드리겠습니다.
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold inline-block"
            >
              이메일 보내기
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaComments className="text-teal-600 mr-2" />
            연락처 정보
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FaEnvelope className="text-teal-600 mr-2" />
                이메일
              </h3>
              <p className="text-gray-600 mb-2">
                myrestroom.official@gmail.com
              </p>
              <p className="text-sm text-gray-500">일반 문의 및 기술 지원</p>
            </div>

            {/* <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FaPhone className="text-teal-600 mr-2" />
                전화번호
              </h3>
              <p className="text-gray-600 mb-2">1588-1234</p>
              <p className="text-sm text-gray-500">평일 09:00 - 18:00</p>
            </div> */}
          </div>
        </div>

        {/* Support Hours */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaClock className="text-teal-600 mr-2" />
            지원 시간
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">이메일 지원</h3>
              <p className="text-gray-600">24시간 접수</p>
              <p className="text-sm text-gray-500">24시간 내 답변</p>
            </div>

            {/* <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">전화 지원</h3>
              <p className="text-gray-600">평일 09:00 - 18:00</p>
              <p className="text-sm text-gray-500">토요일 09:00 - 13:00</p>
            </div>

            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">실시간 채팅</h3>
              <p className="text-gray-600">평일 09:00 - 18:00</p>
              <p className="text-sm text-gray-500">즉시 답변</p>
            </div> */}
          </div>
        </div>

        {/* Common Issues */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaBook className="text-teal-600 mr-2" />
            자주 발생하는 문제
          </h2>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                앱이 실행되지 않아요
              </h3>
              <p className="text-gray-600">
                앱을 완전히 종료한 후 다시 실행해보세요. 문제가 지속되면 앱을
                재설치해주세요.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                위치 정보가 정확하지 않아요
              </h3>
              <p className="text-gray-600">
                GPS 설정을 확인하고 위치 권한을 허용해주세요. 실외에서
                사용하시면 더 정확한 위치를 제공받을 수 있습니다.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                리뷰를 작성할 수 없어요
              </h3>
              <p className="text-gray-600">
                로그인이 되어 있는지 확인해주세요. 계정에 문제가 있다면
                재로그인을 시도해보세요.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaUserFriends className="text-teal-600 mr-2" />
            추가 리소스
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                사용자 가이드
              </h3>
              <p className="text-gray-600 mb-4">
                MyRestroom 앱의 모든 기능을 자세히 설명하는 가이드를
                확인해보세요.
              </p>
              <Link
                href="/contact"
                className="text-teal-600 hover:text-teal-700 font-semibold"
              >
                가이드 보기 →
              </Link>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">커뮤니티</h3>
              <p className="text-gray-600 mb-4">
                다른 사용자들과 경험을 공유하고 꿀팁을 얻어보세요.
              </p>
              <Link
                href="/contact"
                className="text-teal-600 hover:text-teal-700 font-semibold"
              >
                커뮤니티 참여 →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
