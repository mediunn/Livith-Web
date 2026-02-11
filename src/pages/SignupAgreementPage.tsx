import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Checkbox from "../shared/ui/Checkbox/Checkbox";
import CommonButton from "../shared/ui/CommonButton/CommonButton";
import ListHeader from "../shared/ui/ListHeader";
import ProgressBar from "../shared/ui/ProgressBar/ProgressBar";
function SignupAgreementPage() {
  const [isUseChecked, setIsUseChecked] = useState<boolean>(
    sessionStorage.getItem("isUseChecked") === "true" || false,
  );
  const [isAdChecked, setIsAdChecked] = useState<boolean>(
    sessionStorage.getItem("isAdChecked") === "true" || false,
  );

  const [isPersonalChecked, setIsPersonalChecked] = useState<boolean>(
    sessionStorage.getItem("isPersonalChecked") === "true" || false,
  );

  const [isAllChecked, setIsAllChecked] = useState(isUseChecked && isAdChecked);
  const location = useLocation();
  const { tempUserData } = location.state;

  const navigate = useNavigate();

  useEffect(() => {
    setIsAllChecked(isUseChecked && isAdChecked && isPersonalChecked);
  }, [isUseChecked, isAdChecked, isPersonalChecked]);

  // 모두 동의 클릭 시 모든 체크박스 상태 변경
  const handleAllCheck = () => {
    const newState = !isAllChecked;
    setIsAllChecked(newState);
    setIsUseChecked(newState);
    setIsAdChecked(newState);
    setIsPersonalChecked(newState);
  };

  const handleClickCondition = (link: string) => {
    window.open(
      link,
      // "https://youz2me.notion.site/Livith-v-25-04-13-1d402dd0e5fc80eaacd9d3dfdc7d0aa0?pvs=4",
      "_blank", // 새 탭으로 열기
      "noopener,noreferrer", // 보안 옵션 (부모 페이지 접근 차단)
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 overflow-y-auto">
        <ListHeader title="회원가입" />
        <div className="flex flex-col mx-16 ">
          <div className="mt-10 mb-30">
            <ProgressBar total={4} current={1} />
          </div>
          <div className="text-Body1-sm text-grayScaleWhite font-semibold font-NotoSansKR mb-20">
            서비스 이용을 위해 <br /> 약관 동의가 필요해요
          </div>
          {/* 모두 동의 */}
          <div className="flex items-center bg-grayScaleBlack90 rounded-10 px-12 py-20 gap-16 mb-24">
            <button onClick={handleAllCheck}>
              <Checkbox variant="fill" isPressed={isAllChecked} />
            </button>
            <p className="text-Body2-md text-grayScaleBlack5 font-medium font-NotoSansKR">
              약관 모두 동의
            </p>
          </div>
          {/* 이용약관 동의 */}
          <div className="flex items-center mb-24">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setIsUseChecked(!isUseChecked)}
            >
              <Checkbox variant="line" isPressed={isUseChecked} />
              <p className="text-Body2-md text-grayScaleBlack5 font-medium font-NotoSansKR ml-16 mr-4">
                이용약관 동의
              </p>
            </div>
            <p className="text-Caption1-re text-grayScaleBlack50 font-regular font-NotoSansKR">
              필수
            </p>
            <p
              onClick={() =>
                handleClickCondition(
                  "https://youz2me.notion.site/Livith-v-25-04-13-1d402dd0e5fc80eaacd9d3dfdc7d0aa0?pvs=4",
                )
              }
              className="cursor-pointer text-Caption2-sm text-grayScaleBlack30 font-semibold font-NotoSansKR ml-auto mr-6"
            >
              더보기 &gt;
            </p>
          </div>
          <div className="flex items-center  mb-24">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setIsPersonalChecked(!isPersonalChecked)}
            >
              <Checkbox variant="line" isPressed={isPersonalChecked} />
              <p className="text-Body2-md text-grayScaleBlack5 font-medium font-NotoSansKR ml-16 mr-4">
                개인정보 이용 동의
              </p>
            </div>
            <p className="text-Caption1-re text-grayScaleBlack50 font-regular font-NotoSansKR">
              필수
            </p>
            <p
              onClick={() =>
                handleClickCondition(
                  "https://youz2me.notion.site/v-26-02-03-2fb02dd0e5fc806ca182ecaf18099979?pvs=74",
                )
              }
              className="cursor-pointer text-Caption2-sm text-grayScaleBlack30 font-semibold font-NotoSansKR ml-auto mr-6"
            >
              더보기 &gt;
            </p>
          </div>
          {/* 마케팅,광고 동의 */}
          <div className="flex items-center  mb-24">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setIsAdChecked(!isAdChecked)}
            >
              <Checkbox variant="line" isPressed={isAdChecked} />
              <p className="text-Body2-md text-grayScaleBlack5 font-medium font-NotoSansKR ml-16 mr-4">
                마케팅 활용 / 광고성 정보 수신 동의
              </p>
            </div>
            <p className="text-Caption1-re text-grayScaleBlack50 font-regular font-NotoSansKR">
              선택
            </p>
            <p
              onClick={() =>
                handleClickCondition(
                  "https://youz2me.notion.site/v-26-02-03-2fb02dd0e5fc80af9708cf5e39f44f77",
                )
              }
              className="cursor-pointer text-Caption2-sm text-grayScaleBlack30 font-semibold font-NotoSansKR ml-auto mr-6"
            >
              더보기 &gt;
            </p>
          </div>
        </div>
      </div>
      {/* 다음 버튼 */}
      <div className="sticky bottom-0 bg-grayScaleBlack100 mx-16 pb-60">
        <CommonButton
          isActive={isUseChecked && isPersonalChecked}
          onClick={() => {
            sessionStorage.setItem("isUseChecked", String(isUseChecked));
            sessionStorage.setItem(
              "isPersonalChecked",
              String(isPersonalChecked),
            );
            sessionStorage.setItem("isAdChecked", String(isAdChecked));
            navigate("/signup/nickname", {
              state: { isAdChecked, tempUserData },
            });
          }}
          title="다음"
          variant="primary"
        />
      </div>
    </div>
  );
}

export default SignupAgreementPage;
