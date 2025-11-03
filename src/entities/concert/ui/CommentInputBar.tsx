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
  const [hasShownToast, setHasShownToast] = useState(false); // 글자 수 초과 토스트 중복 방지
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const toastIdRef = useRef<string | number | null>(null);
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
    if (!value) return;
    commentMutation.mutate(value, {
      onSuccess: () => {
        toast(<CompleteToast message="댓글이 작성되었어요" />, {
          position: "top-center",
          autoClose: 3000,
          pauseOnFocusLoss: false,
        });
        setValue("");
      },
      onError: () => {
        toast(<ErrorToast message="댓글 작성에 실패했어요" />, {
          position: "top-center",
          autoClose: 3000,
          pauseOnFocusLoss: false,
        });
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

  // 등록 버튼 활성화 조건
  const isActive = value.length > 0 && value.length <= 400;

  return (
    <>
      <div className="fixed bottom-69 h-52 w-full max-w-md bg-gradient-to-t from-grayScaleBlack100 to-transparent" />

      <div className="fixed bottom-0 px-16 py-10 w-full max-w-md bg-grayScaleBlack100 flex justify-between items-end">
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
        `}
        >
          등록
        </button>
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
