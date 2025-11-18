import ListHeader from "../shared/ui/ListHeader";
import CloseRoundedIcon from "../shared/assets/CloseRoundIcon.svg";
import { useEffect, useRef, useState } from "react";
import SignupButton from "../features/auth/ui/SignupButton";
import { useNavigate } from "react-router-dom";
import { validateNickname } from "../shared/utils/validateNickname";
import { useCheckNickname } from "../features/auth/model/useCheckNickname";
import { useUpdateNickname } from "../features/auth/model/useUpdateNickname";
import { toast } from "react-toastify";
import CompleteToast from "../shared/ui/CompleteToast";
import ErrorToast from "../shared/ui/ErrorToast";
import { useInitializeAuth } from "../shared/hooks/useInitializeAuth";
function NicknamePage() {
  const { initialize } = useInitializeAuth();
  const navigate = useNavigate();
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

  useEffect(() => {
    setShowClear(input.length > 0 && isFocused);
  }, [input, isFocused]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isComposing && input.trim()) {
      inputRef.current?.blur(); // Enter 입력 후 포커스 해제
    }
  };
  const { data, isError, refetch } = useCheckNickname(input);
  const { mutate: updateNicknameMutate } = useUpdateNickname();

  const handleClickUpdate = () => {
    updateNicknameMutate(input, {
      onSuccess: async () => {
        // 로그인 직후 Recoil 상태 초기화
        await initialize();
        toast(<CompleteToast message="닉네임이 수정되었어요" />, {
          position: "top-center",
          autoClose: 3000,
          pauseOnFocusLoss: false,
        });
        navigate("/my");
      },
      onError: (error) => {
        toast(<ErrorToast message="닉네임 변경에 실패했어요" />, {
          position: "top-center",
          autoClose: 3000,
          pauseOnFocusLoss: false,
        });
      },
    });
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
      toast(<ErrorToast message="닉네임 변경에 실패했어요" />, {
        position: "top-center",
        autoClose: 3000,
        pauseOnFocusLoss: false,
      });
    }
  }, [data]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 overflow-y-auto">
        <ListHeader title="닉네임 수정" />
        <div className="flex flex-col mx-16 ">
          <div className="text-Body1-sm text-grayScaleWhite font-semibold font-NotoSansKR mt-30 mb-20">
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
                className=" my-15 w-full border-none outline-none bg-transparent placeholder-grayScaleBlack50 text-grayScaleWhite"
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
        <SignupButton
          isActive={isNicknameChecked}
          onClick={() => {
            handleClickUpdate();
          }}
          title="닉네임 변경"
        />
      </div>
    </div>
  );
}

export default NicknamePage;
