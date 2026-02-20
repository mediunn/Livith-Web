import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCheckNickname } from "../features/auth/model/useCheckNickname";
import { useUpdateNickname } from "../features/auth/model/useUpdateNickname";
import { useInitializeAuth } from "../shared/hooks/useInitializeAuth";
import CommonButton from "../shared/ui/CommonButton/CommonButton";
import CompleteToast from "../shared/ui/Toast/CompleteToast";
import ErrorToast from "../shared/ui/Toast/ErrorToast";
import ListHeader from "../shared/ui/ListHeader";
import ConfirmBtn from "../shared/ui/ConfirmButton/ConfirmButton";
import TextInputField from "../shared/ui/InputField/TextInputField";
function NicknamePage() {
  const { initialize } = useInitializeAuth();
  const navigate = useNavigate();
  const [input, setInput] = useState<string>("");
  const [isValidNickname, setIsValidNickname] = useState(false);
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const [checkMessage, setCheckMessage] = useState(
    "10자리 이내, 문자/숫자로 입력 가능해요"
  );
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
            <TextInputField
              value={input}
              onChange={setInput}
              onValidationChange={setIsValidNickname}
              onCheckStateChange={setIsNicknameChecked}
              onMessageChange={setCheckMessage}
              placeholder="예시 ) 홍길동"
            />

            <ConfirmBtn
              label={isNicknameChecked ? "확인완료" : "중복확인"}
              onClick={() => refetch()}
              disabled={!isValidNickname || isNicknameChecked}
              className={`bg-grayScaleBlack80 px-12 py-16 ${!isValidNickname || isNicknameChecked ? "text-grayScaleBlack50" : "text-grayScaleWhite hover:bg-grayScaleBlack90"}`}
            />
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
            handleClickUpdate();
          }}
          title="닉네임 변경"
          variant="primary"
        />
      </div>
    </div>
  );
}

export default NicknamePage;
