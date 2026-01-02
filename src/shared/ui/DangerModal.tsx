import { AnimatePresence, motion } from "framer-motion";
import WarningIcon from "../assets/WarningIcon.svg";

interface DangerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string | React.ReactNode;
  children?: React.ReactNode;
  primaryLabel: string;
  secondaryLabel: string;
  onPrimary: () => void;
  onSecondary?: () => void;
  primaryDisabled?: boolean;
}

function DangerModal({
  isOpen,
  onClose,
  title,
  children,
  primaryLabel,
  secondaryLabel,
  onPrimary,
  onSecondary,
  primaryDisabled,
}: DangerModalProps) {
  if (!isOpen) return null;

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
            <div
              className="w-[327px] max-w-[87%] fixed flex flex-col bg-grayScaleWhite rounded-11 pb-12
              top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <img src={WarningIcon} className="mx-auto mt-16" />
              <p className="text-grayScaleBlack100 text-Body2-md font-medium text-center mt-10">
                {title}
              </p>

              {children}

              <div className="flex gap-9 mt-20 px-16 h-57">
                <button
                  disabled={primaryDisabled}
                  onClick={onPrimary}
                  className="flex-1 bg-grayScaleBlack5 text-caution100 text-Body3-md font-medium font-NotoSansKR rounded-8"
                >
                  {primaryLabel}
                </button>
                <button
                  className="flex-1 bg-grayScaleBlack80 text-grayScaleWhite text-Body3-md font-medium font-NotoSansKR rounded-8"
                  onClick={onSecondary ?? onClose}
                >
                  {secondaryLabel}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default DangerModal;
