import { useEffect } from "react";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import CompleteToast from "../../../shared/ui/Toast/CompleteToast";
import ErrorToast from "../../../shared/ui/Toast/ErrorToast";
import { useSetInterestConcert } from "../model/useSetInterestConcert";
import { useInterestConcerts } from "../model/useInterestConcerts";
import { ConcertScheduleType } from "../../../entities/concert/types";

interface ConcertSettingSnackBarProps {
  id: string | number;
  onClose: () => void;
}

function ConcertSettingSnackBar({ id, onClose }: ConcertSettingSnackBarProps) {
  const mutation = useSetInterestConcert();
  const { data: interestConcerts } = useInterestConcerts({
    sort: ConcertScheduleType.CONCERT,
  });
  const accessToken = localStorage.getItem("accessToken") ?? "";

  const handleChange = () => {
    const targetId = Number(id);
    const existingIds = (interestConcerts ?? [])
      .map((concert) => Number(concert.id))
      .filter((concertId) => Number.isFinite(concertId) && concertId > 0);
    const mergedConcertIds = Array.from(new Set([...existingIds, targetId]));

    mutation.mutate(
      { concertIds: mergedConcertIds, accessToken },
      {
        onSuccess: () => {
          toast(<CompleteToast message="소식을 받을 공연이 추가되었어요" />, {
            position: "top-center",
            autoClose: 3000,
            pauseOnFocusLoss: false,
          });
        },
        onError: () => {
          toast(<ErrorToast message="소식을 받을 공연 추가에 실패했어요" />, {
            position: "top-center",
            autoClose: 3000,
            pauseOnFocusLoss: false,
          });
        },
      },
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
