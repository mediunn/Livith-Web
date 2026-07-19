import { AnimatePresence, motion } from "framer-motion";
import GuidedBannerCloseIcon from "../../../shared/assets/GuidedBannerCloseIcon.svg";
import CalenderInfoArrowIcon from "../../../shared/assets/CalenderInfoArrowIcon.svg";

interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ScheduleInfoModal({ isOpen, onClose }: CommonModalProps) {
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
            onClick={onClose}
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
            <div className="w-[335px] max-w-[90%] h-fit fixed flex flex-col px-16 py-16 bg-grayScaleBlack90 rounded-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center justify-between pb-4">
                <p className="text-grayScaleWhite text-Body2-sm font-semibold font-NotoSansKR">
                  6월 20일 수요일
                </p>
                <button onClick={onClose} className=" w-24 h-24 cursor-pointer">
                  <img src={GuidedBannerCloseIcon} className="w-full h-full" />
                </button>
              </div>
              <div className="flex flex-col pt-16">
                <div className="flex items-center">
                  <div className="w-4 h-12 bg-lyricsTranslation rounded-1 mr-6" />
                  <p className="text-grayScaleBlack5 text-Body4-md font-medium font-NotoSansKR">
                    18:00
                  </p>
                </div>

                <div className="flex items-center justify-between bg-grayScaleBlack80 rounded-8 mt-10 px-12 py-12 cursor-pointer">
                  <div>
                    <div
                      className={`inline-flex items-center justify-center rounded-24 bg-grayScaleBlack90 `}
                    >
                      <p
                        className={`px-10 py-4 text-grayScaleBlack50 text-Caption1-sm font-semibold font-NotoSansKR line-clamp-1`}
                      >
                        예매일
                      </p>
                    </div>
                    <p className="pt-6 text-grayScaleWhite text-Body2-sm font-semibold font-NotoSansKR line-clamp-2">
                      위켄드 내한공연 2026
                    </p>
                    <p className="pt-6 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR line-clamp-1">
                      NOL 티켓
                    </p>
                  </div>
                  <img
                    src={CalenderInfoArrowIcon}
                    className="ml-16 w-24 h-24"
                  />
                </div>
              </div>
              <div className="flex flex-col pt-16">
                <div className="flex items-center">
                  <div className="w-4 h-12 bg-lyricsOriginal rounded-1 mr-6" />
                  <p className="text-grayScaleBlack5 text-Body4-md font-medium font-NotoSansKR">
                    18:00
                  </p>
                </div>

                <div className="flex items-center justify-between bg-grayScaleBlack80 rounded-8 mt-10 px-12 py-12 cursor-pointer">
                  <div>
                    <div
                      className={`inline-flex items-center justify-center rounded-24 bg-grayScaleBlack90 `}
                    >
                      <p
                        className={`px-10 py-4 text-grayScaleBlack50 text-Caption1-sm font-semibold font-NotoSansKR line-clamp-1`}
                      >
                        공연일
                      </p>
                    </div>
                    <p className="pt-6 text-grayScaleWhite text-Body2-sm font-semibold font-NotoSansKR line-clamp-2">
                      위켄드 내한공연 2026인데 만약 내용이 길어지면 최대
                      두줄까지 표시합니다!!
                    </p>
                    <p className="pt-6 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR line-clamp-1">
                      얘는 내용이 길어질 시 한 줄 까지만 표시합니다!!
                    </p>
                  </div>
                  <img
                    src={CalenderInfoArrowIcon}
                    className="ml-16 w-24 h-24"
                  />
                </div>
              </div>
              <div className="flex flex-col pt-16">
                <div className="flex items-center">
                  <div className="w-4 h-12 bg-grayScaleBlack50 rounded-1 mr-6" />
                  <p className="text-grayScaleBlack5 text-Body4-md font-medium font-NotoSansKR">
                    추후 발표
                  </p>
                </div>

                <div className="flex items-center justify-between bg-grayScaleBlack80 rounded-8 mt-10 px-12 py-12 cursor-pointer">
                  <div>
                    <div
                      className={`inline-flex items-center justify-center rounded-24 bg-grayScaleBlack90 `}
                    >
                      <p
                        className={`px-10 py-4 text-grayScaleBlack50 text-Caption1-sm font-semibold font-NotoSansKR line-clamp-1`}
                      >
                        예매일
                      </p>
                    </div>
                    <p className="pt-6 text-grayScaleWhite text-Body2-sm font-semibold font-NotoSansKR line-clamp-2">
                      요아소비 내한공연 2026
                    </p>
                    <p className="pt-6 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR line-clamp-1">
                      추후 발표
                    </p>
                  </div>
                  <img
                    src={CalenderInfoArrowIcon}
                    className="ml-16 w-24 h-24"
                  />
                </div>
              </div>
              <div className="flex flex-col pt-16">
                <div className="flex items-center">
                  <div className="w-4 h-12 bg-grayScaleBlack50 rounded-1 mr-6" />
                  <p className="text-grayScaleBlack5 text-Body4-md font-medium font-NotoSansKR">
                    공연 취소
                  </p>
                </div>

                <div className="flex items-center justify-between bg-grayScaleBlack80 rounded-8 mt-10 px-12 py-12 cursor-pointer">
                  <div>
                    <div
                      className={`inline-flex items-center justify-center rounded-24 bg-grayScaleBlack90 `}
                    >
                      <p
                        className={`px-10 py-4 text-grayScaleBlack50 text-Caption1-sm font-semibold font-NotoSansKR line-clamp-1`}
                      >
                        예매일
                      </p>
                    </div>
                    <p className="pt-6 text-grayScaleWhite text-Body2-sm font-semibold font-NotoSansKR line-clamp-2">
                      아도 내한공연 2026
                    </p>
                    <p className="pt-6 text-grayScaleBlack50 text-Body4-re font-regular font-NotoSansKR line-clamp-1">
                      잠실 실내체육관
                    </p>
                  </div>
                  <img
                    src={CalenderInfoArrowIcon}
                    className="ml-16 w-24 h-24"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ScheduleInfoModal;
