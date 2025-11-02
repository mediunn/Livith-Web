import { useRef, useState } from "react";
import WarningIcon from "../shared/assets/WarningIcon.svg";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-toastify";
import ErrorToast from "../shared/ui/ErrorToast";

interface ReportCommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reason: string) => void;
}

function ReportCommentModal({
  isOpen,
  onClose,
  onSubmit,
}: ReportCommentModalProps) {
  const [value, setValue] = useState("");
  const [hasShownToast, setHasShownToast] = useState(false); // 글자 수 초과 토스트 중복 방지
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const toastIdRef = useRef<string | number | null>(null);

  if (!isOpen) return null;

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

  // 신고 버튼 활성화 조건
  const isActive = value.length >= 0 && value.length <= 200;

  const handleSubmit = () => {
    onSubmit(value);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 어둡게 Fade out 0.1 */}
          <motion.div
            onClick={onClose}
            className="max-w-md m-auto fixed inset-0 bg-grayScaleBlack100 z-[70] cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          />

          <motion.div
            className="fixed z-[71]"
            initial={{ opacity: 0 }}
            // 팝업 열릴 때
            animate={{
              opacity: 1,
              transition: {
                duration: 0.15,
                type: "spring",
                stiffness: 756,
                damping: 48,
                mass: 1,
              },
            }}
            // 팝업 닫힐 때
            exit={{
              opacity: 0,
              transition: {
                duration: 0.15,
                ease: "easeOut",
              },
            }}
          >
            <div className="w-[327px] max-w-[87%] h-fit fixed flex flex-col bg-grayScaleWhite rounded-11 pb-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={WarningIcon} className="mx-auto mt-16" />
              <p className="text-grayScaleBlack100 text-Body2-md font-medium font-NotoSansKR text-center mt-10">
                댓글을 신고하시겠어요?
              </p>
              <div className="relative mx-16 mt-20">
                <textarea
                  ref={textareaRef}
                  value={value}
                  onChange={handleChange}
                  placeholder="신고 사유를 작성해 주세요"
                  className="h-172 w-full px-14 pt-14 pb-30 resize-none rounded-6 bg-grayScaleBlack5 text-grayScaleBlack80 text-Body3-md font-medium font-NotoSansKR
                  placeholder:text-grayScaleBlack50
                  border border-transparent
                  focus:border focus:border-grayScaleBlack30
                  outline-none"
                />

                {/* 그라데이션 */}
                <div className="absolute top-0 h-30 w-full max-w-md bg-gradient-to-t from-transparent to-grayScaleBlack5" />

                <div className="absolute bottom-5 left-1 h-30 w-[94%] rounded-6 bg-grayScaleBlack5">
                  <p className="absolute bottom-14 right-0 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR">
                    {value.length}/200
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center gap-9 mt-20 px-16 h-57">
                <button
                  disabled={!isActive}
                  onClick={handleSubmit}
                  className="flex-1 bg-grayScaleBlack5 text-caution100 text-Body3-md font-medium font-NotoSansKR rounded-8"
                >
                  신고할래요
                </button>
                <button
                  className="flex-1 bg-grayScaleBlack80 text-grayScaleWhite text-Body3-md font-medium font-NotoSansKR rounded-8"
                  onClick={() => {
                    onClose();
                  }}
                >
                  잘못 눌렀어요
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
export default ReportCommentModal;
