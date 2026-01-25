import { useState, useRef, useEffect } from "react";
import { useSetConcertComment } from "../model/useSetConcertComment";
import { toast } from "react-toastify";
import CompleteToast from "../../../shared/ui/Toast/CompleteToast";
import ErrorToast from "../../../shared/ui/Toast/ErrorToast";
import LoginModal from "../../auth/ui/LoginModal";
import { useRecoilValue } from "recoil";
import { userState } from "../../../shared/lib/recoil/atoms/userState";
import CommentInputField from "../../../shared/ui/InputField/CommentInputField";

interface CommentInputBarProps {
  concertId: number;
}

function CommentInputBar({ concertId }: CommentInputBarProps) {
  const [value, setValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // 등록 버튼 중복 클릭 방지
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const accessToken = localStorage.getItem("accessToken");
  const user = useRecoilValue(userState);
  const isLoggedIn = !!user;

  const commentMutation = useSetConcertComment({
    concertId,
    accessToken: accessToken || "",
  });

  const handleSubmit = () => {
    if (!value || isSubmitting) return; // 이미 요청 중이면 중단
    setIsSubmitting(true); // 등록 중 상태 ON

    // Offline이면 즉시 reject
    if (!navigator.onLine) {
      toast(<ErrorToast message="댓글 작성에 실패했어요" />, {
        position: "top-center",
        autoClose: 3000,
      });
      setIsSubmitting(false);
      return;
    }

    commentMutation.mutate(value, {
      onSuccess: () => {
        toast(<CompleteToast message="댓글이 작성되었어요" />, {
          position: "top-center",
          autoClose: 3000,
          pauseOnFocusLoss: false,
        });
        setValue("");
        setIsSubmitting(false); // 성공 후 버튼 다시 활성화
      },
      onError: () => {
        toast(<ErrorToast message="댓글 작성에 실패했어요" />, {
          position: "top-center",
          autoClose: 3000,
          pauseOnFocusLoss: false,
        });
        setIsSubmitting(false); // 실패 후 버튼 다시 활성화
      },
    });
  };

  const forceReflow = () => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.display = "none";
    el.offsetHeight;
    el.style.display = "";
  };

  useEffect(() => {
    if (value === "") {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          forceReflow();
        });
      });
    }
  }, [value]);

  const lineCount = value.split("\n").length;
  // 등록 버튼 활성화 조건
  const isActive = value.length > 0 && value.length <= 400 && lineCount <= 15;

  return (
    <>
      <div className="fixed bottom-0 w-full max-w-md bg-grayScaleBlack100 pb-[env(safe-area-inset-bottom)]">
        {/* 그라데이션 */}
        <div className="absolute -top-50 left-0 w-full h-52 bg-gradient-to-t from-grayScaleBlack100 to-transparent pointer-events-none" />

        <div className="px-16 pt-10 pb-10 flex justify-between items-end">
          <div className="flex items-center flex-1 px-16 py-14 bg-grayScaleBlack90 rounded-10">
            <CommentInputField
              value={value}
              onChange={setValue}
              isLoggedIn={isLoggedIn}
              onRequireLogin={() => setIsLoginModalOpen(true)}
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={!isActive}
            className={`px-16 py-14 ml-12 max-h-49 rounded-10 font-medium text-Body2-md font-NotoSansKR 
          ${isActive ? "bg-mainYellow30 text-grayScaleBlack100" : "bg-grayScaleBlack80 text-grayScaleBlack50"}
        `}
          >
            등록
          </button>
        </div>
      </div>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        type="concertInfo"
      />
    </>
  );
}

export default CommentInputBar;
