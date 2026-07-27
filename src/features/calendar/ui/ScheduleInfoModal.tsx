import { AnimatePresence, motion } from "framer-motion";
import GuidedBannerCloseIcon from "../../../shared/assets/GuidedBannerCloseIcon.svg";
import ScheduleInfoItem from "../../../shared/ui/ScheduleInfoItem";
import EmptyScheduleInfoIcon from "../../../shared/assets/EmptyScheduleInfoIcon.svg";
import { useNavigate } from "react-router-dom";
import { ConcertType, ScheduleType } from "../model/types";
import { useDailyCalendarEvents } from "../model/useDailyCalendarEvents";
import {
  formatDate,
  getBadgeText,
  getDescription,
  getIndicatorColor,
  getTimeText,
} from "../utils/calendarEventUtils";

interface ScheduleInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  date?: string;
  scheduleTypes: ScheduleType[];
  concertType: ConcertType;
}

function ScheduleInfoModal({
  isOpen,
  onClose,
  date,
  scheduleTypes,
  concertType,
}: ScheduleInfoModalProps) {
  const navigate = useNavigate();

  const { data } = useDailyCalendarEvents({
    date,
    scheduleTypes,
    concertType,
  });

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
            <div className="w-[335px] max-w-[90%] max-h-[540px] fixed flex flex-col px-16 py-16 bg-grayScaleBlack90 rounded-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center justify-between pb-4">
                <p className="text-grayScaleWhite text-Body2-sm font-semibold font-NotoSansKR">
                  {formatDate(date)}
                </p>
                <button onClick={onClose} className=" w-24 h-24 cursor-pointer">
                  <img src={GuidedBannerCloseIcon} className="w-full h-full" />
                </button>
              </div>

              <div className="react-modal-sheet-scroller flex-1 overflow-y-auto">
                {data?.events.length === 0 ? (
                  <div className="my-160 flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                      <img src={EmptyScheduleInfoIcon} />
                      <p className="mt-16 text-grayScaleBlack50 text-Body2-md font-medium font-NotoSansKR">
                        공연 일정이 없어요
                      </p>
                    </div>
                    <button
                      onClick={() => navigate("/set-concert")}
                      className="mt-20 flex items-center justify-center w-fit bg-grayScaleBlack90 rounded-8 border border-grayScaleBlack50 cursor-pointer"
                    >
                      <p className="px-12 py-10 text-grayScaleBlack30 text-Body4-md font-medium font-NotoSansKR">
                        관심 콘서트 설정하기
                      </p>
                    </button>
                  </div>
                ) : (
                  data?.events.map((event) => {
                    return (
                      <ScheduleInfoItem
                        key={`${event.type}-${event.id}`}
                        concertId={event.id}
                        indicatorColor={getIndicatorColor(event)}
                        time={getTimeText(event)}
                        badgeText={getBadgeText(event.type)}
                        title={event.title ?? ""}
                        description={getDescription(event)}
                        isCanceled={event.status === "CANCELED"}
                        onClick={(concertId) => {
                          navigate(`/concert/${concertId}`);
                          onClose();
                        }}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ScheduleInfoModal;
