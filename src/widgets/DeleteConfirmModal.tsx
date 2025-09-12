import { AnimatePresence, motion } from "framer-motion";
import WarningIcon from "../shared/assets/WarningIcon.svg";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
}
function DeleteConfirmModal({ isOpen, onClose }: DeleteConfirmModalProps) {
  const STORAGE_KEY = "InterestConcertId";
  const handleDelete = () => {
    window.amplitude.track("click_confirm_delete");

    localStorage.removeItem(STORAGE_KEY);
    localStorage.setItem("deleteConcertToast", "true");
    window.location.href = "/";
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 어둡게 Fade out 0.1 */}
          <motion.div
            onClick={onClose}
            className="max-w-md m-auto fixed inset-0 bg-black z-40 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          />

          <motion.div
            className="fixed z-50"
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
                관심 콘서트를 삭제하시나요? <br />
                다시 언제든 지정할 수 있어요.
              </p>
              <div className="flex flex-row justify-center space-x-14 mt-20 ">
                <button
                  className="bg-grayScaleBlack5 text-caution100 text-Body4-re font-regular font-NotoSansKR rounded-8 py-18 px-22"
                  onClick={handleDelete}
                >
                  지금은 삭제할래요
                </button>
                <button
                  className="bg-grayScaleBlack80 text-grayScaleWhite text-Body4-re font-regular font-NotoSansKR rounded-8 py-18 px-34"
                  onClick={() => {
                    window.amplitude.track("click_cancel_delete");
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

export default DeleteConfirmModal;
