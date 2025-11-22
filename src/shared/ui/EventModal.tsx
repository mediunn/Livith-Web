import { AnimatePresence, motion } from "framer-motion";

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function EventModal({ isOpen, onClose }: EventModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 어둡게 Fade out 0.1 */}
          <motion.div
            className="fixed inset-0 bg-grayScaleBlack100 z-[70]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          />

          <motion.div
            className="fixed inset-0 z-[10000] flex justify-center items-center"
            initial={{ opacity: 0 }}
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
            exit={{
              opacity: 0,
              transition: { duration: 0.15, ease: "easeOut" },
            }}
          >
            <div className="w-[327px] max-w-[87%] h-fit flex flex-col items-center bg-grayScaleBlack90 rounded-11 px-16 py-24">
              <p className="text-grayScaleWhite text-Body4-re font-regular font-NotoSansKR text-center">
                하단의 ‘다운로드’ 버튼을 누르면,
                <br />
                라이빗이 직접 제작한 도자캣 배경화면 <br />
                2종을 받을 수 있어요.
                <br />
                설레는 마음으로 함께 내한을 기다려볼까요?
                <br />
              </p>

              <button
                onClick={() => {
                  window.open(
                    "https://drive.google.com/drive/folders/1D3jkTTCwgDSJqCTkMvHQgGO42zNf1bcg?usp=sharing",
                    "_blank"
                  );
                  onClose();
                }}
                className="mt-20 py-15 bg-mainYellow30 rounded-6 text-grayScaleBlack100 text-Body3-sm font-semibold font-NotoSansKR w-full"
              >
                배경화면 다운로드
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default EventModal;
