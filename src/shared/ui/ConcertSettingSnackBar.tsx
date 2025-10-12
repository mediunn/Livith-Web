import { useEffect } from "react";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import InterestConcertToastIconMotion from "../../shared/assets/InterestConcertToastIconMotion.json";
import { motion, AnimatePresence } from "framer-motion";

interface ConcertSettingSnackBarProps {
  id: string | number;
  onClose: () => void;
}

function ConcertSettingSnackBar({ id, onClose }: ConcertSettingSnackBarProps) {
  const STORAGE_KEY = "InterestConcertId";
  const handleChange = () => {
    localStorage.setItem(STORAGE_KEY, String(id));

    toast(
      <div className="flex items-center space-x-13 text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
        <div className="w-24 h-24">
          <Lottie
            animationData={InterestConcertToastIconMotion}
            loop={false}
            renderer="svg"
            style={{ width: "100%", height: "100%" }}
            rendererSettings={{
              preserveAspectRatio: "xMidYMid meet",
            }}
          />
        </div>
        <span>관심 공연을 변경했어요</span>
      </div>,
      {
        position: "top-center",
        autoClose: 3000,
        pauseOnFocusLoss: false, // 창이 다른 곳에 있어도 시간 그대로 감
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
