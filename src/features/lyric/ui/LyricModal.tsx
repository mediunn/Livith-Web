import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface LyricModalProps {
  children: ReactNode;
  onClose: () => void;
}

const LyricModal = ({ children, onClose }: LyricModalProps) => {
  return createPortal(
    <AnimatePresence>
      {children && (
        <>
          {/* 배경 어둡게 Fade out 0.1 */}
          <motion.div
            onClick={onClose}
            className="!max-w-md !mx-auto fixed inset-0 bg-black z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          />
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
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
            <div
              className=" flex items-center justify-center w-309 h-98 bg-[#222831]/90 backdrop-blur-sm rounded-6 shadow-[0_0_16.5px_rgba(255,255,151,0.5)]"
              onClick={(e) => e.stopPropagation()} // 팝업 내부 클릭 시 닫힘 방지
            >
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default LyricModal;
