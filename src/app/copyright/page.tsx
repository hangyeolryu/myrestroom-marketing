import Link from "next/link";
import Image from "next/image";
import {
  FaCopyright,
  FaShieldAlt,
  FaExclamationTriangle,
  FaGavel,
  FaCreativeCommons,
  FaFileAlt,
} from "react-icons/fa";

export default function CopyrightPage() {
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
                저작권 정보
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
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCopyright className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              저작권 정보
            </h1>
            <p className="text-gray-600">최종 업데이트: 년2025 8월 5일</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaShieldAlt className="text-teal-600 mr-2" />
                1. 저작권 보호
              </h2>
              <p className="text-gray-700 mb-4">
                MyRestroom 서비스의 모든 콘텐츠, 디자인, 로고, 텍스트, 이미지,
                소프트웨어 및 기타 자료는 저작권법에 의해 보호됩니다. 이러한
                자료들은 MyRestroom의 지적재산권이며, 사전 서면 승인 없이는
                복제, 배포, 전송, 전시, 공연, 방송, 2차적 저작물 작성 등의
                행위를 할 수 없습니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaFileAlt className="text-teal-600 mr-2" />
                2. 보호되는 저작물
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  저작권 보호 대상
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>MyRestroom 앱 및 웹사이트의 모든 콘텐츠</li>
                  <li>로고, 브랜드명, 디자인 요소</li>
                  <li>사용자 인터페이스 및 사용자 경험 디자인</li>
                  <li>소프트웨어 코드 및 알고리즘</li>
                  <li>데이터베이스 구조 및 콘텐츠</li>
                  <li>마케팅 자료 및 문서</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaExclamationTriangle className="text-teal-600 mr-2" />
                3. 금지되는 행위
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  저작권 침해 행위
                </h3>
                <ul className="list-disc list-inside text-red-700 space-y-2 ml-4">
                  <li>저작물의 무단 복제 및 배포</li>
                  <li>저작물의 수정 및 2차적 저작물 작성</li>
                  <li>상업적 목적의 무단 사용</li>
                  <li>저작권 표시의 제거 또는 변경</li>
                  <li>저작물의 무단 전시 및 공연</li>
                  <li>기타 저작권법을 위반하는 행위</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaCreativeCommons className="text-teal-600 mr-2" />
                4. 공정이용
              </h2>
              <p className="text-gray-700 mb-4">
                저작권법에 따라 다음과 같은 경우에는 저작물의 공정이용이 허용될
                수 있습니다:
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <ul className="list-disc list-inside text-blue-700 space-y-2 ml-4">
                  <li>교육 목적의 사용</li>
                  <li>보도, 비평, 교육, 연구 목적의 사용</li>
                  <li>개인적 학습 및 연구 목적의 사용</li>
                  <li>법령에 따른 공정이용</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaGavel className="text-teal-600 mr-2" />
                5. 저작권 침해 신고
              </h2>
              <p className="text-gray-700 mb-4">
                저작권 침해를 발견하신 경우, 다음 정보와 함께 신고해 주시기
                바랍니다:
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                  신고 시 필요한 정보
                </h3>
                <ul className="list-disc list-inside text-yellow-700 space-y-2 ml-4">
                  <li>침해된 저작물의 구체적인 위치</li>
                  <li>침해 행위의 구체적인 내용</li>
                  <li>신고인의 연락처 정보</li>
                  <li>저작권 소유자임을 증명할 수 있는 자료</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. 면책조항
              </h2>
              <p className="text-gray-700 mb-4">
                MyRestroom은 사용자가 게시한 콘텐츠에 대한 저작권을 주장하지
                않습니다. 단, 사용자는 자신이 게시한 콘텐츠에 대한 저작권을
                보유하고 있으며, 해당 콘텐츠의 저작권 침해에 대한 책임을 져야
                합니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. 라이선스
              </h2>
              <p className="text-gray-700 mb-4">
                MyRestroom 서비스의 이용과 관련하여, 사용자는 서비스 이용약관에
                따라 제한된 범위 내에서 서비스를 이용할 수 있는 라이선스를
                받습니다. 이 라이선스는 개인적, 비상업적 목적으로만 사용할 수
                있으며, 양도, 재라이선스, 판매가 금지됩니다.
              </p>
            </section>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-teal-900 mb-2">
                문의사항
              </h3>
              <p className="text-teal-700">
                저작권 관련 문의사항이 있으시면{" "}
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
