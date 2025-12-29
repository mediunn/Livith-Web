//src\widgets\WithdrawBottomSheet.tsx
import { Sheet, SheetRef } from "react-modal-sheet";
import { useRef, useState } from "react";
import CheckboxIcon from "../../../shared/assets/CheckboxIcon.svg";
import CheckboxIconActive from "../../../shared/assets/CheckboxIconActive.svg";
import { useWithdraw } from "../model/useWithdraw";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import ErrorToast from "../../../shared/ui/ErrorToast";
import CompleteToast from "../../../shared/ui/CompleteToast";
import { useSetRecoilState } from "recoil";
import { userState } from "../../../shared/lib/recoil/atoms/userState";

interface WithdrawBottomSheetProps {
  isSheetOpen: boolean;
  onSheetClose: () => void;
  reasonText: string;
}

function WithdrawBottomSheet({
  isSheetOpen,
  onSheetClose,
  reasonText,
}: WithdrawBottomSheetProps) {
  const ref = useRef<SheetRef>(null);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const setUser = useSetRecoilState(userState);

  const { mutate: withdrawMutate } = useWithdraw();

  const handleCheckboxClick = () => {
    setIsChecked((prev) => !prev);
  };

  const handleWithdraw = () => {
    if (isChecked) {
      withdrawMutate(reasonText, {
        onSuccess: (response) => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("recentLogin");
          navigate("/");
          onSheetClose();
          setUser(null);

          queryClient.clear(); // 탈퇴 시 캐시 초기화
          toast(
            <CompleteToast
              message={`탈퇴가 완료되었어요.\n더 좋은 서비스로 다시 만나요!`}
            />,
            {
              position: "top-center",
              autoClose: 3000,
              pauseOnFocusLoss: false,
            }
          );
        },
        onError: (err) => {
          toast(<ErrorToast message="탈퇴에 실패했어요" />, {
            position: "top-center",
            autoClose: 3000,
            pauseOnFocusLoss: false,
          });
        },
      });
    }
  };

  return (
    <Sheet isOpen={isSheetOpen} onClose={onSheetClose} ref={ref}>
      <Sheet.Container
        className="!mx-auto !max-w-md !h-fit !bg-grayScaleBlack90 !rounded-t-20 border border-grayScaleBlack80"
        style={{
          left: "0",
          right: "0",
        }}
      >
        <Sheet.Header className="cursor-pointer" />
        <Sheet.Content className="!px-16">
          <p className="text-grayScaleWhite text-Head1-sm font-semibold font-NotoSansKR">
            정말 탈퇴하시겠어요?
          </p>
          <p className="pt-4 pb-20 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR">
            같은 아이디는 7일 이후 다시 가입할 수 있어요
          </p>

          <div className="h-184 overflow-y-auto">
            {/* 그라데이션 */}
            <div className="absolute top-74 h-16 rounded-t-10 inset-x-16 bg-gradient-to-t from-transparent to-grayScaleBlack80" />

            <div className="bg-grayScaleBlack80 rounded-10 p-16">
              <p className="text-grayScaleBlack30 text-Body3-md font-medium font-NotoSansKR">
                • 회원 탈퇴 시 관심 콘서트, 닉네임 등 개인 정보는 모두
                삭제됩니다. <br />
                • 탈퇴한 아이디로 작성한 댓글은 삭제되지 않고 유지됩니다. <br />
                • 탈퇴 후 즉시 재가입을 통해 서비스에 혼란을 초래하는 경우를
                방지하기 위해 탈퇴 후 7일간 동일 아이디로 가입이 제한됩니다.
                <br />• 탈퇴 후 7일간 가입 제한을 위해 계정 정보를 보관합니다.
              </p>
            </div>

            <div className="flex items-center mt-20 mb-35 ">
              <button
                onClick={handleCheckboxClick}
                className={`flex items-center justify-center w-24 h-24 rounded-4 border-none mr-16 px-6 ${
                  isChecked ? "bg-mainYellow60" : "bg-grayScaleBlack30"
                }`}
              >
                <img
                  src={isChecked ? CheckboxIconActive : CheckboxIcon}
                  className="w-full h-full"
                  alt="checkbox"
                />
              </button>
              <p className="text-grayScaleBlack5 text-Body2-md font-medium font-NotoSansKR">
                위 내용을 모두 확인했습니다.
              </p>
            </div>
          </div>

          {/* 그라데이션 */}
          <div className="absolute bottom-100 h-35 inset-x-16 bg-gradient-to-t from-grayScaleBlack90 to-transparent" />

          <div className="flex gap-10 mb-50">
            <button
              onClick={() => {
                onSheetClose;
                navigate("/my", { replace: true });
              }}
              className="flex-1 py-15 rounded-6 bg-grayScaleBlack80 text-grayScaleBlack30 text-Body3-sm font-semibold font-NotoSansKR"
            >
              취소할래요
            </button>
            <button
              onClick={handleWithdraw}
              disabled={!isChecked}
              className={`flex-1 py-15 rounded-6 text-Body3-sm font-semibold font-NotoSansKR transition-colors
                ${
                  isChecked
                    ? "bg-lyricsTranslation text-grayScaleBlack100"
                    : "bg-grayScaleBlack50 text-grayScaleBlack30"
                }`}
            >
              탈퇴할래요
            </button>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop
        onTap={onSheetClose}
        className="!max-w-md !mx-auto"
        style={{
          left: "0",
          right: "0",
        }}
      />
    </Sheet>
  );
}

export default WithdrawBottomSheet;
