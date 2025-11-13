import { useState, useRef, useEffect } from "react";
import { useSetConcertComment } from "../model/useSetConcertComment";
import { toast } from "react-toastify";
import CompleteToast from "../../../shared/ui/CompleteToast";
import ErrorToast from "../../../shared/ui/ErrorToast";
import LoginModal from "../../../features/auth/ui/LoginModal";
import { useRecoilValue } from "recoil";
import { userState } from "../../../entities/recoil/atoms/userState";

interface CommentInputBarProps {
  concertId: number;
}

function CommentInputBar({ concertId }: CommentInputBarProps) {
  const [value, setValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // 등록 버튼 중복 클릭 방지
  const [hasShownToast, setHasShownToast] = useState(false); // 글자 수 초과 토스트 중복 방지
  const [hasShownLineToast, setHasShownLineToast] = useState(false); // 줄 수 초과 토스트 중복 방지
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const toastIdRef = useRef<string | number | null>(null);
  const lineToastIdRef = useRef<string | number | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const accessToken = localStorage.getItem("accessToken");
  const user = useRecoilValue(userState);
  const isLoggedIn = !!user;

  const commentMutation = useSetConcertComment({
    concertId,
    accessToken: accessToken || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    const lines = newValue.split("\n").length;

    if (lines > 15) {
      if (!hasShownLineToast) {
        const id = toast(
          <ErrorToast message="댓글은 15줄 이상 작성할 수 없어요" />,
          {
            position: "top-center",
            autoClose: false,
            pauseOnFocusLoss: false,
          }
        );
        lineToastIdRef.current = id;
        setHasShownLineToast(true);
      }
    } else if (lines <= 15 && hasShownLineToast) {
      // 15줄 이하로 줄어들면 토스트 닫기
      if (lineToastIdRef.current) {
        toast.dismiss(lineToastIdRef.current);
        lineToastIdRef.current = null;
      }
      setHasShownLineToast(false);
    }

    setValue(newValue);

    if (newValue.length > 400 && !hasShownToast) {
      const id = toast(<ErrorToast message="400자를 초과했어요" />, {
        position: "top-center",
        autoClose: false,
        pauseOnFocusLoss: false,
      });
      toastIdRef.current = id;
      setHasShownToast(true);
    } else if (newValue.length <= 400 && hasShownToast) {
      // 글자 수가 줄어들면 토스트 닫기
      if (toastIdRef.current) {
        toast.dismiss(toastIdRef.current);
        toastIdRef.current = null;
      }
      setHasShownToast(false);
    }
  };

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

  // textarea 높이
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "21px";
    const lineHeight = 21;
    const maxHeight = lineHeight * 4; // 최대 4줄

    textarea.style.height =
      textarea.scrollHeight > maxHeight
        ? `${maxHeight}px`
        : `${textarea.scrollHeight}px`;
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
            <textarea
              ref={textareaRef}
              value={value}
              placeholder={
                isLoggedIn
                  ? "댓글은 400자까지 작성 가능해요"
                  : "로그인 후 작성 가능해요"
              }
              readOnly={!isLoggedIn}
              onFocus={() => {
                if (!isLoggedIn) {
                  // 로그인 안 되어 있으면 포커스 막고 모달 띄움
                  setIsLoginModalOpen(true);
                }
              }}
              onChange={handleChange}
              className="bg-transparent outline-none text-grayScaleWhite text-Body3-md font-medium font-NotoSansKR placeholder-grayScaleBlack50 w-full resize-none overflow-y-auto"
              rows={1}
              style={{
                lineHeight: "21px",
                maxHeight: "84px",
              }}
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={!isActive}
            className={`px-16 py-14 ml-12 max-h-49 rounded-10 font-medium text-Body3-md font-NotoSansKR 
          ${isActive ? "bg-mainYellow30 text-grayScaleBlack100" : "bg-grayScaleBlack80 text-grayScaleBlack50"}
          ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none
        `}
            style={{
              WebkitAppearance: "none", // iOS 기본 스타일 제거
            }}
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
