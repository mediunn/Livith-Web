import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCheckNickname } from "../features/auth/model/useCheckNickname";
import { useSignup } from "../features/auth/model/useSignup";
import AuthErrorModal from "../features/auth/ui/AuthErrorModal";
import { useInitializeAuth } from "../shared/hooks/useInitializeAuth";
import CommonButton from "../shared/ui/CommonButton/CommonButton";
import ListHeader from "../shared/ui/ListHeader";
import TextInputField from "../shared/ui/InputField/TextInputField";
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
  const { mutate: signupMutate, isPending } = useSignup();

  const { initialize } = useInitializeAuth();

  const handleSignup = () => {
    sessionStorage.removeItem("isAdChecked");
    sessionStorage.removeItem("isUseChecked");
    if (!tempUserData) {
      setIsErrorModalOpen(true);
      return;
    }
    signupMutate(
      {
        nickname: input,
        provider: tempUserData.provider,
        providerId: tempUserData.providerId,
        email: tempUserData.email,
        marketingConsent: isAdChecked,
      },
      {
        onSuccess: async (res) => {
          const { accessToken } = res.data;
          if (accessToken) {
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("recentLogin", "카카오");

            await initialize(); // 회원가입 후 바로 로그인
          }
          navigate("/", {
            state: { showSignupComplete: true, nickname: input },
          });
        },
        onError: (error) => {
          setIsErrorModalOpen(true);
        },
      },
    );
  };

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
  }, [data]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 overflow-y-auto">
        <ListHeader title="회원가입" />
        <div className="flex flex-col mx-16 ">
          <ProgressBar total={2} current={2} />
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
      {/* 가입 완료 버튼 */}
      <div className="sticky bottom-0 bg-grayScaleBlack100 mx-16 pb-60">
        <CommonButton
          isActive={isNicknameChecked}
          onClick={() => {
            handleSignup();
          }}
          title="가입 완료"
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
