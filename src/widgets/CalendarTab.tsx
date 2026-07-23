import { useState } from "react";

import { MonthlyCalendar } from "../features/calendar/ui/MonthlyCalendar";
import { CalendarFilter } from "../features/calendar/ui/CalendarFilter";

import { ConcertType, ScheduleType } from "../features/calendar/model/types";
import { useRecoilValue } from "recoil";
import { userState } from "../shared/lib/recoil/atoms/userState";
import LoginModal from "../features/auth/ui/LoginModal";
import { toast } from "react-toastify";
import ErrorToast from "../shared/ui/Toast/ErrorToast";
import ScheduleInfoModal from "../features/calendar/ui/ScheduleInfoModal";
import { isIOSWebView } from "../shared/lib/webview/isIOSWebView";
import { sendSelectedDate } from "../shared/lib/webview/bridge";

export default function CalendarTab() {
  const [scheduleTypes, setScheduleTypes] = useState<ScheduleType[]>([
    ScheduleType.CONCERT,
    ScheduleType.TICKETING,
  ]);

  const [concertType, setConcertType] = useState<ConcertType>(ConcertType.ALL);
  const user = useRecoilValue(userState);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>();

  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  const handleConcertTypeChange = (value: ConcertType) => {
    if (value === ConcertType.INTEREST && !user) {
      setOpenLoginModal(true);
      return;
    }

    setConcertType(value);
  };
  const handleScheduleTypesChange = (value: ScheduleType[]) => {
    if (value.length === 0) {
      toast(
        <ErrorToast message={"예매일 또는 공연일 중 하나는 선택해야 해요."} />,
        {
          toastId: "calendar-schedule-type-error",
          position: "top-center",
          autoClose: 3000,
          pauseOnFocusLoss: false,
        },
      );
      return;
    }

    setScheduleTypes(value);
  };

  const handleDateSelect = (date: string) => {
    if (isIOSWebView()) {
      sendSelectedDate(date);
      return;
    }
    setSelectedDate(date);
    setIsScheduleModalOpen(true);
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <CalendarFilter
          scheduleTypes={scheduleTypes}
          concertType={concertType}
          onScheduleTypesChange={handleScheduleTypesChange}
          onConcertTypeChange={handleConcertTypeChange}
        />

        <MonthlyCalendar
          scheduleTypes={scheduleTypes}
          concertType={concertType}
          onDateSelect={handleDateSelect}
        />
      </div>
      <LoginModal
        isOpen={openLoginModal}
        onClose={() => setOpenLoginModal(false)}
        type="interestConcert"
      />
      {!isIOSWebView() && (
        <ScheduleInfoModal
          isOpen={isScheduleModalOpen}
          date={selectedDate}
          onClose={() => setIsScheduleModalOpen(false)}
        />
      )}
    </>
  );
}
