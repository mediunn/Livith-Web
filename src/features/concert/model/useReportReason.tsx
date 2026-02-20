import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import ErrorToast from "../../../shared/ui/Toast/ErrorToast";

export const useReportReason = () => {
  const [value, setValue] = useState("");
  const [hasShownToast, setHasShownToast] = useState(false); // 글자 수 초과 토스트 중복 방지

  const reset = () => {
    setValue("");
    setHasShownToast(false);
  };

  const [isScrollable, setIsScrollable] = useState(false);
  const [showTopGradient, setShowTopGradient] = useState(false);
  const [showBottomGradient, setShowBottomGradient] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const toastIdRef = useRef<string | number | null>(null);

  // textarea 글자 수 제한
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (newValue.length > 200 && !hasShownToast) {
      const id = toast(<ErrorToast message="200자를 초과했어요" />, {
        position: "top-center",
        autoClose: false,
        pauseOnFocusLoss: false,
      });
      toastIdRef.current = id;
      setHasShownToast(true);
    } else if (newValue.length <= 200 && hasShownToast) {
      if (toastIdRef.current) {
        toast.dismiss(toastIdRef.current);
        toastIdRef.current = null;
      }
      setHasShownToast(false);
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const checkScrollable = () => {
      const canScroll = textarea.scrollHeight > textarea.clientHeight;
      setIsScrollable(canScroll);

      if (canScroll) {
        const { scrollTop, scrollHeight, clientHeight } = textarea;
        setShowTopGradient(scrollTop > 0);
        setShowBottomGradient(scrollTop + clientHeight < scrollHeight);
      } else {
        setShowTopGradient(false);
        setShowBottomGradient(false);
      }
    };

    checkScrollable();

    textarea.addEventListener("scroll", checkScrollable);
    window.addEventListener("resize", checkScrollable);

    return () => {
      textarea.removeEventListener("scroll", checkScrollable);
      window.removeEventListener("resize", checkScrollable);
    };
  }, [value]);

  // 신고 버튼 활성화 조건
  const isActive = value.length >= 0 && value.length <= 200;

  return {
    value,
    textareaRef,
    handleChange,
    reset,
    isActive,
    isScrollable,
    showTopGradient,
    showBottomGradient,
  };
};
