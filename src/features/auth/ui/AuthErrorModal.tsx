import WarningTriangleIcon from "../../../shared/assets/WarningTriangleIcon.svg";
import { AnimatePresence, motion } from "framer-motion";

interface AuthErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

function AuthErrorModal({
  isOpen,
  onClose,
  title,
  description,
}: AuthErrorModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 어둡게 Fade out 0.1 */}
          <motion.div
            className="max-w-md m-auto fixed inset-0 bg-black z-[70]"
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
            <div className="w-[327px] max-w-[87%] h-fit fixed flex flex-col bg-grayScaleBlack90 rounded-11 pb-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={WarningTriangleIcon} className="mx-auto mt-16" />
              <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR text-center mt-4">
                {title}
              </p>
              <p className="text-grayScaleBlack30 text-Body4-re font-regular font-NotoSansKR text-center mt-6">
                {description}
              </p>
              <button
                className="bg-lyricsTranslation text-grayScaleBlack100 text-Body3-md font-medium font-NotoSansKR rounded-6 py-16 px-28 mx-16 mt-20"
                onClick={() => {
                  onClose();
                }}
              >
                홈으로 돌아가기
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
export default AuthErrorModal;
