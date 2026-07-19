import { AnimatePresence, motion } from "framer-motion";
import GuidedBannerCloseIcon from "../../../shared/assets/GuidedBannerCloseIcon.svg";
import CalenderInfoArrowIcon from "../../../shared/assets/CalenderInfoArrowIcon.svg";
import ScheduleInfoItem from "../../../shared/ui/ScheduleInfoItem";

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
              <ScheduleInfoItem
                indicatorColor="bg-lyricsTranslation"
                time="18:00"
                badgeText="예매일"
                title="위켄드 내한공연 2026"
                description="NOL 티켓"
              />

              <ScheduleInfoItem
                indicatorColor="bg-lyricsOriginal"
                time="18:00"
                badgeText="공연일"
                title="위켄드 내한공연 2026인데 만약 내용이 길어지면 최대 두줄까지 표시합니다!!"
                description="얘는 내용이 길어질 시 한 줄 까지만 표시합니다!!"
              />

              <ScheduleInfoItem
                indicatorColor="bg-grayScaleBlack50"
                time="추후 발표"
                badgeText="예매일"
                title="요아소비 내한공연 2026"
                description="추후 발표"
              />

              <ScheduleInfoItem
                indicatorColor="bg-grayScaleBlack50"
                time="공연 취소"
                badgeText="예매일"
                title="아도 내한공연 2026"
                description="잠실 실내체육관"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ScheduleInfoModal;
