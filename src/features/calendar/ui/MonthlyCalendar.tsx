import { ko } from "date-fns/locale";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { sendSelectedDate } from "../../../shared/lib/webview/bridge";
import { EmptyView } from "../../../shared/ui/EmptyView";
import { ConcertType, ScheduleType } from "../model/types";
import { useCalendarData } from "../model/useCalendarData";
import CalendarDay from "./CalendarDay";
import { CalendarDayButton } from "./CalendarDayButton";
import { CalendarMonthCaption } from "./CalendarMonthCaption";
import { CalendarWeekday } from "./CalendarWeekday";
import { CalendarWeekdays } from "./CalendarWeekdays";
import { format } from "date-fns";

type MonthlyCalendarProps = {
  scheduleTypes?: ScheduleType[];
  concertType?: ConcertType;
};

export function MonthlyCalendar({
  scheduleTypes = [ScheduleType.CONCERT, ScheduleType.TICKETING],
  concertType = ConcertType.ALL,
}: MonthlyCalendarProps) {
  const [selected, setSelected] = useState<Date>();
  const today = new Date();

  const { data, isLoading, error } = useCalendarData({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    scheduleTypes,
    concertType,
  });

  const eventMap = useMemo(() => {
    if (!data) return new Map();

    return new Map(data.days.map((day) => [day.date, day.events]));
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex min-h-[600px] items-center justify-center">
        <div className="w-24 h-24 border-4 border-grayScaleBlack80 border-t-grayScaleBlack5 rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[600px] items-center justify-center">
        <EmptyView text={"캘린더를\n 불러오지 못했어요"} />
      </div>
    );
  }

  return (
    <DayPicker
      locale={ko}
      mode="single"
      selected={selected}
      onSelect={(date) => {
        if (!date) return;
        setSelected(date);
        const dateString = format(date, "yyyy-MM-dd");
        sendSelectedDate(dateString);
      }}
      // 기본 Nav(화살표) 숨기고 MonthCaption에서 한 줄로 전부 그림
      hideNavigation
      // 월간 달력에서 이전/다음 달 날짜를 회색으로 표시
      showOutsideDays
      modifiers={{
        weekend: { dayOfWeek: [0, 6] }, // 주말 색상 변경
      }}
      components={{
        Day: CalendarDay,
        // 필터 타입 props로 넘겨주기
        DayButton: (props) => {
          const dateString = format(props.day.date, "yyyy-MM-dd");

          return (
            <CalendarDayButton
              {...props}
              events={eventMap.get(dateString) ?? []}
              scheduleTypes={scheduleTypes}
              concertType={concertType}
            />
          );
        },
        Weekday: CalendarWeekday,
        Weekdays: CalendarWeekdays, // 요일 행 + 날짜 그리드 사이 간격을 위한 spacer row.
        MonthCaption: CalendarMonthCaption,
      }}
      className="w-full text-grayScaleBlack30"
      classNames={{
        months: "w-full",
        month: "w-full",
        month_grid: "w-full table-fixed", // 화면 전체 넓이로 테이블 레이아웃
        day_button: "bg-transparent",
        selected: "bg-transparent text-inherit",
        weekday: "py-10",
        month_caption: "m-0 p-0", //기본 마진과 패딩 제거
      }}
      style={
        {
          "--rdp-day-height": "100px",
          "--rdp-day_button-border": "none",
          "--rdp-day_button-border-radius": "0",
          "--rdp-selected-border": "none",
        } as CSSProperties
      }
    />
  );
}
