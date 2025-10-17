import { toast } from "react-toastify";
import WarningIcon from "../shared/assets/WarningIcon.svg";
import Lottie from "lottie-react";
import InterestConcertToastIconMotion from "../shared/assets/InterestConcertToastIconMotion.json";
import { AnimatePresence, motion } from "framer-motion";
import { setInterestConcert } from "../entities/concert/api/setInterestConcert";

interface ChangeConcertConfirmModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  setIsToastActive: (value: boolean) => void;
}

function ChangeConcertConfirmModal({
  id,
  isOpen,
  onClose,
  setIsToastActive,
}: ChangeConcertConfirmModalProps) {
  const handleChange = async () => {
    window.amplitude.track("confirm_change_interest");

    try {
      const token = import.meta.env.VITE_ACCESS_TOKEN;
      await setInterestConcert(Number(id), token);

      onClose();
      setIsToastActive(true);

      toast(
        <div className="flex items-center space-x-13 text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
          <div className="w-24 h-24">
            <Lottie
              animationData={InterestConcertToastIconMotion}
              loop={false}
              autoplay={true}
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
          onClose: () => setIsToastActive(false),
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 어둡게 Fade out 0.1 */}
          <motion.div
            onClick={onClose}
            className="max-w-md m-auto fixed inset-0 bg-black z-[70] cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
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
              <img src={WarningIcon} className="mx-auto mt-20" />
              <p className="text-grayScaleBlack100 text-Body2-md font-medium font-NotoSansKR text-center mt-17">
                관심 콘서트를 변경하시나요?
              </p>
              <div className="flex flex-row justify-center space-x-14 mt-20 ">
                <button
                  className="bg-grayScaleBlack5 text-caution100 text-Body4-re font-regular font-NotoSansKR rounded-8 py-18 px-42"
                  onClick={handleChange}
                >
                  변경할래요
                </button>
                <button
                  className="bg-grayScaleBlack80 text-grayScaleWhite text-Body4-re font-regular font-NotoSansKR rounded-8 py-18 px-28"
                  onClick={() => {
                    window.amplitude.track("cancel_change_interest");
                    onClose();
                  }}
                >
                  변경하지 않아요
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
export default ChangeConcertConfirmModal;
