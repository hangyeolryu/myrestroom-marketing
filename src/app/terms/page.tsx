import Link from "next/link";
import Image from "next/image";
import {
  FaFileContract,
  FaUser,
  FaShieldAlt,
  FaExclamationTriangle,
  FaGavel,
  FaHandshake,
} from "react-icons/fa";

export default function TermsPage() {
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
              <span className="text-xl font-bold text-gray-900">이용약관</span>
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
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaFileContract className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">이용약관</h1>
            <p className="text-gray-600">최종 업데이트: 2024년 8월 5일</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaUser className="text-teal-600 mr-2" />
                1. 서비스 개요
              </h2>
              <p className="text-gray-700 mb-4">
                MyRestroom(이하 &ldquo;회사&rdquo;)은 사용자에게 깨끗하고 편리한
                화장실 정보를 제공하는 위치 기반 서비스입니다. 본 약관은 회사가
                제공하는 서비스의 이용과 관련하여 회사와 사용자 간의 권리, 의무
                및 책임사항을 규정합니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaHandshake className="text-teal-600 mr-2" />
                2. 서비스 이용
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  이용 조건
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>서비스 이용을 위해서는 회원가입이 필요합니다</li>
                  <li>사용자는 본인의 실제 정보로 가입해야 합니다</li>
                  <li>서비스 이용 시 관련 법령을 준수해야 합니다</li>
                  <li>타인의 권리를 침해하는 행위를 해서는 안 됩니다</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaShieldAlt className="text-teal-600 mr-2" />
                3. 개인정보 보호
              </h2>
              <p className="text-gray-700 mb-4">
                회사는 사용자의 개인정보를 보호하기 위해 개인정보처리방침을
                수립하고 이를 준수합니다. 개인정보의 수집, 이용, 제공 등에 관한
                자세한 내용은 개인정보처리방침을 참조하시기 바랍니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaExclamationTriangle className="text-teal-600 mr-2" />
                4. 금지행위
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  다음 행위는 금지됩니다
                </h3>
                <ul className="list-disc list-inside text-red-700 space-y-2 ml-4">
                  <li>허위 정보 게시 또는 악의적인 리뷰 작성</li>
                  <li>타인의 개인정보 무단 수집 및 이용</li>
                  <li>서비스의 정상적인 운영을 방해하는 행위</li>
                  <li>저작권 등 지적재산권 침해</li>
                  <li>기타 관련 법령을 위반하는 행위</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaGavel className="text-teal-600 mr-2" />
                5. 책임제한
              </h2>
              <p className="text-gray-700 mb-4">
                회사는 서비스의 이용과 관련하여 사용자에게 발생한 손해에 대하여
                회사의 고의 또는 중대한 과실이 없는 한 책임을 지지 않습니다.
                또한 사용자가 서비스를 이용하여 얻은 정보의 정확성, 완전성,
                유용성 등에 대해서도 보장하지 않습니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. 약관 변경
              </h2>
              <p className="text-gray-700 mb-4">
                회사는 필요한 경우 본 약관을 변경할 수 있으며, 변경된 약관은
                서비스 내 공지사항을 통해 고지합니다. 변경된 약관은 고지 즉시
                효력이 발생하며, 계속 서비스를 이용하는 경우 변경된 약관에
                동의한 것으로 간주됩니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. 분쟁해결
              </h2>
              <p className="text-gray-700 mb-4">
                본 약관과 관련하여 분쟁이 발생할 경우, 회사와 사용자는 상호
                협의를 통해 해결하고, 협의가 이루어지지 않을 경우 회사의 주소지
                관할법원에서 해결합니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. 기타</h2>
              <p className="text-gray-700 mb-4">
                본 약관에 명시되지 않은 사항은 관련 법령 및 회사가 정한 서비스
                운영정책에 따릅니다.
              </p>
            </section>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-teal-900 mb-2">
                문의사항
              </h3>
              <p className="text-teal-700">
                본 약관에 대한 문의사항이 있으시면{" "}
                <Link
                  href="/contact"
                  className="text-teal-600 hover:text-teal-700 underline"
                >
                  문의하기
                </Link>
                페이지를 통해 연락해 주시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
