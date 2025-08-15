import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaComments,
  FaDownload,
  FaHeadset,
  FaApple,
  FaAndroid,
} from "react-icons/fa";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/%EB%82%98%EC%9D%98-%ED%99%94%EC%9E%A5%EC%8B%A4/id6748704814";

export default function ContactPage() {
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
              <span className="text-xl font-bold text-gray-900">문의하기</span>
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
            <FaEnvelope className="text-white text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">문의하기</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            MyRestroom에 대한 문의사항이나 피드백이 있으시면 언제든 연락해
            주세요. 빠르고 친절한 답변을 드리겠습니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FaComments className="text-teal-600 mr-2" />
              문의 양식
            </h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    이름 *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="이름을 입력하세요"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    성 *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="성을 입력하세요"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="이메일을 입력하세요"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  전화번호
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="전화번호를 입력하세요 (선택사항)"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  문의 유형 *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">문의 유형을 선택하세요</option>
                  <option value="general">일반 문의</option>
                  <option value="technical">기술 지원</option>
                  <option value="bug">버그 신고</option>
                  <option value="feature">기능 제안</option>
                  <option value="business">비즈니스 문의</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  메시지 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="문의사항을 자세히 작성해 주세요..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-gray-700">
                  <Link
                    href="/privacy"
                    className="text-teal-600 hover:text-teal-700 underline"
                  >
                    개인정보처리방침
                  </Link>
                  에 동의합니다. *
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
              >
                문의 보내기
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaHeadset className="text-teal-600 mr-2" />
                연락처 정보
              </h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">이메일</h3>
                    <p className="text-gray-600">
                      myrestroom.official@gmail.com
                    </p>
                    <p className="text-sm text-gray-500">24시간 접수 가능</p>
                  </div>
                </div>

                {/* <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaPhone className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">전화번호</h3>
                    <p className="text-gray-600">1588-1234</p>
                    <p className="text-sm text-gray-500">평일 09:00 - 18:00</p>
                  </div>
                </div> */}

                {/* <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">주소</h3>
                    <p className="text-gray-600">
                      서울특별시 강남구 테헤란로 123
                    </p>
                    <p className="text-sm text-gray-500">MyRestroom 빌딩 5층</p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaClock className="text-teal-600 mr-2" />
                운영 시간
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">평일</span>
                  <span className="text-gray-600">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">토요일</span>
                  <span className="text-gray-600">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-900">일요일</span>
                  <span className="text-gray-600">휴무</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>참고:</strong> 이메일 문의는 24시간 접수되며, 평일
                  24시간 내에 답변드립니다.
                </p>
              </div>
            </div>

            {/* Download App */
            }
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaDownload className="text-teal-600 mr-2" />앱 다운로드
              </h2>
              <p className="text-gray-600 mb-6">
                MyRestroom 앱을 다운로드하고 언제 어디서나 깨끗한 화장실을
                찾아보세요!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-center flex items-center justify-center gap-2"
                >
                  <FaApple className="text-xl" />
                  iOS App Store
                </Link>
                <div
                  aria-disabled="true"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-center flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
                >
                  <FaAndroid className="text-xl" />
                  Android (준비 중)
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-500">Android 버전은 현재 개발 중입니다.</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            자주 묻는 질문
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                문의 응답 시간은 얼마나 걸리나요?
              </h3>
              <p className="text-gray-600">
                이메일 문의는 24시간 내에 답변드리며, 전화 문의는 평일
                09:00-18:00에 즉시 응답 가능합니다.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                기술 지원도 받을 수 있나요?
              </h3>
              <p className="text-gray-600">
                네, 앱 사용 중 발생하는 기술적 문제에 대해서도 전문적인 지원을
                제공해드립니다.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
