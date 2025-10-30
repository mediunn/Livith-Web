import EventIcon from "../assets/EventIcon.svg";
import { AnimatePresence, motion } from "framer-motion";

interface SecretEventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SecretEventModal({ isOpen, onClose }: SecretEventModalProps) {
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

          {/* ✅ 모달 중앙 정렬 컨테이너 */}
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
            {/* ✅ 실제 모달 박스 */}
            <div className="w-[327px] max-w-[87%] h-fit flex flex-col items-center bg-grayScaleBlack90 rounded-11 p-16">
              <img src={EventIcon} onClick={onClose} className="w-83 h-60" />

              <p className="my-8 text-grayScaleWhite text-Body1-sm font-semibold font-NotoSansKR text-center">
                [ ‘YUURI’ 시크릿 이벤트 ]
              </p>
              <p className="text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR text-center">
                참여 방법
              </p>
              <p className="text-grayScaleBlack30 text-Body4-re font-regular font-NotoSansKR text-center">
                1. 라이빗 인스타그램 (@livith_concert) 팔로우
                <br />
                2. ‘유우리 셋리스트’ 사용 화면 캡쳐 <br />
                3. 라이빗 계정 태그 후, 스토리로 캡쳐본 업로드
                <br />
                (공개계정만 확인 가능)
                <br />⸻
              </p>

              <div className="flex justify-center">
                <p className="mr-5 text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
                  기간
                </p>
                <p className="text-grayScaleBlack30 text-Body4-re font-regular font-NotoSansKR">
                  11.1(토) – 11.8(토)
                </p>
              </div>

              <div className="flex justify-center">
                <p className="mr-5 text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
                  발표
                </p>
                <p className="text-grayScaleBlack30 text-Body4-re font-regular font-NotoSansKR">
                  11.10 (월) / 개별 DM 안내
                </p>
              </div>

              <p className="text-grayScaleBlack30 text-Body4-re font-regular font-NotoSansKR text-center">
                ⸻
              </p>

              <div className="flex justify-center">
                <p className="mr-5 text-grayScaleWhite text-Body4-sm font-semibold font-NotoSansKR">
                  상품
                </p>
                <p className="text-grayScaleBlack30 text-Body4-re font-regular font-NotoSansKR">
                  배민상품권 1만원권 (5명)
                </p>
              </div>

              <button
                onClick={onClose}
                className="mt-20 py-15 bg-mainYellow30 rounded-6 text-grayScaleBlack100 text-Body3-sm font-semibold font-NotoSansKR w-full"
              >
                확인
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default SecretEventModal;
