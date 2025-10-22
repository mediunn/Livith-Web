import WarningIcon from "../shared/assets/WarningIcon.svg";
import { AnimatePresence, motion } from "framer-motion";

interface DeleteCommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

function DeleteCommentModal({
  isOpen,
  onClose,
  onDelete,
}: DeleteCommentModalProps) {
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
              <img src={WarningIcon} className="mx-auto mt-16" />
              <p className="text-grayScaleBlack100 text-Body2-md font-medium font-NotoSansKR text-center mt-10">
                댓글을 삭제하시겠어요?
              </p>
              <div className="flex flex-row justify-center gap-9 mt-20 px-16 h-57">
                <button
                  className="flex-1 bg-grayScaleBlack5 text-caution100 text-Body3-md font-medium font-NotoSansKR rounded-8"
                  onClick={onDelete}
                >
                  지금은 삭제할래요
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
export default DeleteCommentModal;
