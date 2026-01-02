import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCheckNickname } from "../features/auth/model/useCheckNickname";
import { useSignup } from "../features/auth/model/useSignup";
import AuthErrorModal from "../features/auth/ui/AuthErrorModal";
import CloseRoundedIcon from "../shared/assets/CloseRoundIcon.svg";
import { useInitializeAuth } from "../shared/hooks/useInitializeAuth";
import CommonButton from "../shared/ui/CommonButton/CommonButton";
import ListHeader from "../shared/ui/ListHeader";
import { validateNickname } from "../shared/utils/validateNickname";
function SignupNicknamePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAdChecked = false, tempUserData } = location.state || {};
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>("");
  const [isValidNickname, setIsValidNickname] = useState(false); // 닉네임 형식 검사
  const [isNicknameChecked, setIsNicknameChecked] = useState(false); // 중복확인 완료 여부
  const [isFocused, setIsFocused] = useState(false); //input 포커스 여부
  const [checkMessage, setCheckMessage] = useState(
    "10자리 이내, 문자/숫자로 입력 가능해요"
  ); //검증 메시지
  const [showClear, setShowClear] = useState(false);

  // 한글 입력 시 Enter 키 이벤트가 두 번 발생하는 문제 해결
  const [isComposing, setIsComposing] = useState(false);

  //모달
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  useEffect(() => {
    setShowClear(input.length > 0 && isFocused);
  }, [input, isFocused]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isComposing && input.trim()) {
      inputRef.current?.blur(); // Enter 입력 후 포커스 해제
    }
  };
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
      }
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
          <div className="flex gap-5 mt-10 mb-30">
            <div className="h-6 rounded-16 bg-mainYellow30 flex-1" />
            <div className="h-6 rounded-16 bg-mainYellow30 flex-1" />
          </div>
          <div className="text-Body1-sm text-grayScaleWhite font-semibold font-NotoSansKR mb-20">
            라이빗에서 사용할 <br /> 닉네임을 설정해 주세요
          </div>
          {/* 닉네임 입력 */}
          <div className="flex gap-12 mb-10">
            <div
              className={`flex flex-1 items-center px-12 rounded-10 bg-grayScaleBlack90 ${isFocused ? "border border-grayScaleBlack50" : "border border-transparent"}`}
            >
              <input
                value={input}
                ref={inputRef}
                onFocus={(e) => {
                  setIsFocused(true);
                  e.currentTarget.placeholder = ""; // 포커스 시 placeholder 숨김
                }}
                onBlur={(e) => {
                  setIsFocused(false);
                  if (!input) {
                    e.currentTarget.placeholder = "예시 ) 홍길동";
                    setCheckMessage("10자리 이내, 문자/숫자로 입력 가능해요");
                  }
                }}
                onChange={(e) => {
                  const value = e.target.value;
                  setInput(value);
                  setIsNicknameChecked(false);
                  //입력값이 있을 때
                  if (value) {
                    const { isValid, message } = validateNickname(value);
                    setIsValidNickname(isValid);
                    setCheckMessage(message);
                  } else {
                    setIsValidNickname(false);
                    setCheckMessage("10자리 이내, 문자/숫자로 입력 가능해요");
                  }
                }}
                onKeyDown={handleKeyDown}
                placeholder="예시 ) 홍길동"
                onCompositionStart={() => setIsComposing(true)}
                onCompositionEnd={() => setIsComposing(false)}
                className="my-15 w-full border-none outline-none bg-transparent placeholder-grayScaleBlack50 text-grayScaleWhite"
              />
              <p className="text-Caption1-re text-grayScaleBlack50 font-regular font-NotoSansKR ml-12">
                {input.length}/10
              </p>
              {showClear && (
                <img
                  src={CloseRoundedIcon}
                  className="ml-13 cursor-pointer"
                  onMouseDown={(e) => {
                    e.preventDefault(); // 포커스 유지
                    setInput("");
                    setIsValidNickname(false);
                    setIsNicknameChecked(false);
                    setCheckMessage("10자리 이내, 문자/숫자로 입력 가능해요");
                    inputRef.current?.focus();
                  }}
                />
              )}
            </div>
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
