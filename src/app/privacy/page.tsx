import Link from "next/link";
import Image from "next/image";
import {
  FaShieldAlt,
  FaUser,
  FaDatabase,
  FaLock,
  FaEye,
  FaTrash,
} from "react-icons/fa";

export default function PrivacyPage() {
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
                개인정보처리방침
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
              <FaShieldAlt className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              개인정보처리방침
            </h1>
            <p className="text-gray-600">최종 업데이트: 2025년 8월 5일</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaUser className="text-teal-600 mr-2" />
                1. 개인정보 수집 및 이용 목적
              </h2>
              <p className="text-gray-700 mb-4">
                깨끗한 나의 화장실 앱은 다음과 같은 목적으로 개인정보를 수집하고
                이용합니다:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>서비스 제공 및 운영</li>
                <li>사용자 인증 및 계정 관리</li>
                <li>위치 기반 화장실 검색 서비스</li>
                <li>리뷰 및 평점 시스템 운영</li>
                <li>고객 지원 및 문의 응답</li>
                <li>서비스 개선 및 신규 서비스 개발</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaDatabase className="text-teal-600 mr-2" />
                2. 수집하는 개인정보 항목
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  필수 수집 항목
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>이메일 주소 (회원가입 시)</li>
                  <li>닉네임 (서비스 이용 시)</li>
                  <li>위치 정보 (화장실 검색 시)</li>
                  <li>기기 정보 (앱 설치 및 운영 시)</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                  선택 수집 항목
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>프로필 이미지</li>
                  <li>리뷰 및 평점 데이터</li>
                  <li>화장실 추가 정보</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaLock className="text-teal-600 mr-2" />
                3. 개인정보 보호 및 보안
              </h2>
              <p className="text-gray-700 mb-4">
                당사는 사용자의 개인정보 보호를 위해 다음과 같은 보안 조치를
                취하고 있습니다:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>개인정보 암호화 저장 및 전송</li>
                <li>접근 권한 관리 및 제한</li>
                <li>정기적인 보안 점검 및 업데이트</li>
                <li>개인정보 접근 로그 관리</li>
                <li>안전한 데이터 백업 및 복구 시스템</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaEye className="text-teal-600 mr-2" />
                4. 개인정보 이용 및 제공
              </h2>
              <p className="text-gray-700 mb-4">
                수집된 개인정보는 다음과 같이 이용됩니다:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  이용 목적별 상세
                </h3>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-gray-900">서비스 제공:</strong>
                    <span className="text-gray-700 ml-2">
                      화장실 검색, 리뷰 작성, 평점 시스템
                    </span>
                  </li>
                  <li>
                    <strong className="text-gray-900">고객 지원:</strong>
                    <span className="text-gray-700 ml-2">
                      문의 응답, 기술 지원
                    </span>
                  </li>
                  <li>
                    <strong className="text-gray-900">서비스 개선:</strong>
                    <span className="text-gray-700 ml-2">
                      사용자 행동 분석, 기능 개선
                    </span>
                  </li>
                  <li>
                    <strong className="text-gray-900">법적 의무:</strong>
                    <span className="text-gray-700 ml-2">
                      관련 법령 준수, 분쟁 해결
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaTrash className="text-teal-600 mr-2" />
                5. 개인정보 보유 및 파기
              </h2>
              <p className="text-gray-700 mb-4">
                개인정보는 수집 및 이용 목적이 달성된 후에는 지체 없이
                파기됩니다:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  보유 기간
                </h3>
                <ul className="space-y-2">
                  <li>
                    <strong className="text-gray-900">회원 정보:</strong>{" "}
                    <span className="text-gray-700">회원 탈퇴 시까지</span>
                  </li>
                  <li>
                    <strong className="text-gray-900">위치 정보:</strong>{" "}
                    <span className="text-gray-700">
                      서비스 이용 종료 시까지
                    </span>
                  </li>
                  <li>
                    <strong className="text-gray-900">리뷰 데이터:</strong>{" "}
                    <span className="text-gray-700">회원 탈퇴 후 30일</span>
                  </li>
                  <li>
                    <strong className="text-gray-900">로그 데이터:</strong>{" "}
                    <span className="text-gray-700">3개월</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. 개인정보 권리 및 행사
              </h2>
              <p className="text-gray-700 mb-4">
                사용자는 다음과 같은 개인정보 관련 권리를 행사할 수 있습니다:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>개인정보 열람 요구</li>
                <li>개인정보 정정·삭제 요구</li>
                <li>개인정보 처리정지 요구</li>
                <li>개인정보 이전 요구</li>
                <li>개인정보 처리 동의 철회</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. 개인정보 처리방침 변경
              </h2>
              <p className="text-gray-700 mb-4">
                이 개인정보처리방침은 법령 및 방침에 따라 변경될 수 있으며, 변경
                시에는 앱 내 공지사항을 통해 사전에 공지하겠습니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. 개인정보 보호책임자
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2">
                  <strong className="text-gray-900">
                    개인정보 보호책임자:
                  </strong>
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>이름: MyRestroom Team</li>
                  <li>이메일: myrestroom.official@gmail.com</li>
                  {/* <li>전화번호: 02-1234-5678</li> */}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. 문의 및 연락처
              </h2>
              <p className="text-gray-700 mb-4">
                개인정보 처리에 관한 문의사항이 있으시면 아래로 연락해 주시기
                바랍니다:
              </p>
              <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
                <p className="text-gray-700">
                  <strong className="text-gray-900">이메일:</strong>{" "}
                  myrestroom.official@gmail.com
                  <br />
                  <strong className="text-gray-900">웹사이트:</strong>{" "}
                  https://myrestroom-korea.web.app/privacy/
                  {/* <br />
                  <strong className="text-gray-900">주소:</strong> 서울특별시
                  강남구 테헤란로 123 */}
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
