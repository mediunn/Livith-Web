import CloseIcon from "../../../shared/assets/CloseIcon.svg";
import LoginGuideIcon from "../../../shared/assets/LoginGuideIcon.svg";
import { AnimatePresence, motion } from "framer-motion";
import KakaoLoginButton from "./KakaoLoginButton";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function LoginModal({ isOpen, onClose }: LoginModalProps) {
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
            <div className=" w-[327px] max-w-[87%] h-fit fixed flex flex-col bg-grayScaleBlack90 rounded-11 pb-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src={CloseIcon}
                onClick={onClose}
                className="absolute right-16 top-16 mx-auto cursor-pointer"
              />
              <p className="text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR text-center mt-30">
                관심 콘서트 설정으로
                <br />
                필요한 정보를 한눈에 👀
              </p>
              <p className="text-grayScaleBlack30 text-Body4-re font-regular font-NotoSansKR text-center mt-6 mb-20">
                <span className="text-mainYellow30">30초 만에 가입 완료</span>
                하고 빠르게 이용해요
              </p>
              <img src={LoginGuideIcon} className="mx-auto mb-20" />
              <KakaoLoginButton />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
export default LoginModal;
