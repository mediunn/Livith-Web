import WarningTriangleIcon from "../../../shared/assets/WarningTriangleIcon.svg";
import { AnimatePresence, motion } from "framer-motion";
import CommonButton from "../../../shared/ui/CommonButton/CommonButton";

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
            className="max-w-md m-auto fixed inset-0 bg-grayScaleBlack100 z-[70]"
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
            <div className="w-[327px] max-w-[87%] h-fit fixed flex flex-col bg-grayScaleBlack90 rounded-11 pb-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={WarningTriangleIcon} className="mx-auto mt-16" />
              <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR text-center mt-4">
                {title}
              </p>
              <p className="text-grayScaleBlack30 text-Body4-re font-regular font-NotoSansKR text-center mt-6">
                {description}
              </p>
              <div className="px-16 mt-20">
                <CommonButton
                  variant="pink"
                  isActive={true}
                  title="홈으로 돌아가기"
                  onClick={() => {
                    onClose();
                  }}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
export default AuthErrorModal;
