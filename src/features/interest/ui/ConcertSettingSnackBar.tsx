import { useEffect } from "react";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import CompleteToast from "../../../shared/ui/Toast/CompleteToast";
import { useSetInterestConcert } from "../model/useSetInterestConcert";

interface ConcertSettingSnackBarProps {
  id: string | number;
  onClose: () => void;
}

function ConcertSettingSnackBar({ id, onClose }: ConcertSettingSnackBarProps) {
  const mutation = useSetInterestConcert();
  const accessToken = localStorage.getItem("accessToken") ?? "";

  const handleChange = () => {
    mutation.mutate(
      { concertId: Number(id), accessToken },
      {
        onSuccess: () => {
          toast(<CompleteToast message="관심 공연을 변경했어요" />, {
            position: "top-center",
            autoClose: 3000,
            pauseOnFocusLoss: false,
          });
        },
        onError: (err) => {
          console.error(err);
        },
      }
    );
  };

  useEffect(() => {
    // 스낵바 5초 동안 유지
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{
          y: 100,
          opacity: 0,
          transition: { duration: 0.5, ease: "easeOut" }, // 0.5초 동안 easeOut
        }}
        transition={{
          // 0.8초 후 0.5초 동안 easeOut
          delay: 0.8,
          duration: 0.5,
          ease: "easeOut",
        }}
        className="flex justify-between items-start px-20 py-12 w-full bg-grayScaleBlack80 rounded-8"
      >
        <div>
          <p className="text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
            웹사이트를 보셨나요?
          </p>
          <p className="text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
            관심 콘서트 설정하고 공연 알림을 받으세요
          </p>
        </div>
        <button
          onClick={handleChange}
          className="pt-4 text-mainYellow30 text-Caption1-sm font-semibold font-NotoSansKR"
        >
          콘서트 설정
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export default ConcertSettingSnackBar;
