import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import ErrorToast from "../../../shared/ui/Toast/ErrorToast";

interface CommentInputFieldProps {
  value: string;
  onChange: (value: string) => void;
  isLoggedIn: boolean;
  onRequireLogin: () => void;
}

function CommentInputField({
  value,
  onChange,
  isLoggedIn,
  onRequireLogin,
}: CommentInputFieldProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [hasShownToast, setHasShownToast] = useState(false); // 글자 수 초과 토스트 중복 방지
  const [hasShownLineToast, setHasShownLineToast] = useState(false); // 줄 수 초과 토스트 중복 방지
  const toastIdRef = useRef<string | number | null>(null);
  const lineToastIdRef = useRef<string | number | null>(null);

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
          },
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

    onChange(newValue);
  };

  // textarea 높이
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const lineHeight = 21;
    const maxHeight = lineHeight * 4;

    if (value === "") {
      textarea.style.height = `${lineHeight}px`;
      textarea.style.overflowY = "hidden";
      return;
    }

    textarea.style.height = `${lineHeight}px`;
    textarea.style.overflowY = "hidden";

    const newHeight = Math.min(textarea.scrollHeight, maxHeight);
    textarea.style.height = `${newHeight}px`;

    textarea.style.overflowY =
      textarea.scrollHeight > maxHeight ? "auto" : "hidden";
  }, [value]);

  return (
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
        if (!isLoggedIn) onRequireLogin();
      }}
      onChange={handleChange}
      rows={1}
      className="bg-transparent outline-none text-grayScaleWhite text-Body2-md font-medium font-NotoSansKR placeholder-grayScaleBlack50 w-full resize-none overflow-y-hidden"
      style={{
        lineHeight: "21px",
        maxHeight: "84px",
      }}
    />
  );
}

export default CommentInputField;
