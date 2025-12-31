import CongratsIcon from "../../../shared/assets/CongratsIcon.svg";
import { AnimatePresence, motion } from "framer-motion";
import CommonButton from "../../../shared/ui/CommonButton/CommonButton";

interface SignupCompleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  nickname: string;
}

function SignupCompleteModal({
  isOpen,
  onClose,
  nickname,
}: SignupCompleteModalProps) {
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
              <img src={CongratsIcon} className="mx-auto mt-16" />
              <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR text-center mt-4">
                {nickname}님,
                <br />
                라이빗에 어서오세요!
              </p>
              <p className="text-grayScaleBlack30 text-Body4-re font-regular font-NotoSansKR text-center mt-6 mb-20">
                라이빗과 즐거운 내한 공연을 준비해 볼까요?
              </p>
              <div className="px-16">
                <CommonButton
                  variant="primary"
                  isActive={true}
                  title="시작하기"
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
export default SignupCompleteModal;
