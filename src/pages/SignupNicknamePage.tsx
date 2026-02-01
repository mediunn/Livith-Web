import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCheckNickname } from "../features/auth/model/useCheckNickname";
import AuthErrorModal from "../features/auth/ui/AuthErrorModal";
import CommonButton from "../shared/ui/CommonButton/CommonButton";
import TextInputField from "../shared/ui/InputField/TextInputField";
import ListHeader from "../shared/ui/ListHeader";
import ProgressBar from "../shared/ui/ProgressBar/ProgressBar";
function SignupNicknamePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAdChecked = false, tempUserData } = location.state || {};
  const [input, setInput] = useState<string>("");
  const [isValidNickname, setIsValidNickname] = useState(false);
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const [checkMessage, setCheckMessage] = useState(
    "10자리 이내, 문자/숫자로 입력 가능해요",
  );

  //모달
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const { data, isFetching, isError, refetch } = useCheckNickname(input);

  useEffect(() => {
    if (data) {
      setIsNicknameChecked(data.available);
      if (data.available) {
        setCheckMessage("사용할 수 있는 닉네임이에요!");
      } else {
        setCheckMessage("이미 존재하는 닉네임이에요");
      }
    } else if (isError) {
      setIsErrorModalOpen(true);
    }
  }, [data, isError]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 overflow-y-auto">
        <ListHeader title="회원가입" />
        <div className="flex flex-col mx-16 ">
          <div className="mt-10 mb-30">
            <ProgressBar total={4} current={2} />
          </div>
          <div className="text-Body1-sm text-grayScaleWhite font-semibold font-NotoSansKR mb-20">
            라이빗에서 사용할 <br /> 닉네임을 설정해 주세요
          </div>
          {/* 닉네임 입력 */}
          <div className="flex gap-12 mb-10">
            <TextInputField
              value={input}
              onChange={setInput}
              onValidationChange={setIsValidNickname}
              onCheckStateChange={setIsNicknameChecked}
              onMessageChange={setCheckMessage}
              placeholder="예시 ) 홍길동"
            />

            <button
              // 버튼 눌렸을 때만 요청 실행
              onClick={() => refetch()}
              disabled={!isValidNickname || isNicknameChecked}
              className={`bg-grayScaleBlack80 text-Body3-md font-medium font-NotoSansKR px-12 py-16 rounded-10 ${!isValidNickname || isNicknameChecked ? "text-grayScaleBlack50" : "text-grayScaleBlack5 "}`}
            >
              {isNicknameChecked ? "확인완료" : "중복확인"}
            </button>
          </div>
          <p
            className={`${isNicknameChecked ? "text-mainYellow30" : (!isValidNickname || !isNicknameChecked) && input ? "text-lyricsTranslation" : "text-grayScaleBlack50"} text-Caption1-re font-regular font-NotoSansKR mb-10`}
          >
            {checkMessage}
          </p>
        </div>
      </div>
      {/* 다음 완료 버튼 */}
      <div className="sticky bottom-0 bg-grayScaleBlack100 mx-16 pb-60">
        <CommonButton
          isActive={isNicknameChecked}
          onClick={() => {
            navigate("/signup/prefer-genre", {
              state: {
                isAdChecked,
                tempUserData: { ...tempUserData, nickname: input },
              },
            });
          }}
          title="다음"
          variant="primary"
        />
      </div>
      <AuthErrorModal
        isOpen={isErrorModalOpen}
        onClose={() => {
          navigate("/");
          setIsErrorModalOpen(false);
        }}
        title="오류가 발생했어요!"
        description="홈에서 다시 시도해주세요"
      />
    </div>
  );
}

export default SignupNicknamePage;
