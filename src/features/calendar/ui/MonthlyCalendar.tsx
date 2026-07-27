import { ko } from "date-fns/locale";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import {
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { EmptyView } from "../../../shared/ui/EmptyView";
import { ConcertType, ScheduleType } from "../model/types";
import { useCalendarData } from "../model/useCalendarData";
import CalendarDay from "./CalendarDay";
import { CalendarDayButton } from "./CalendarDayButton";
import { CalendarMonthCaption } from "./CalendarMonthCaption";
import { CalendarWeekday } from "./CalendarWeekday";
import { CalendarWeekdays } from "./CalendarWeekdays";
import { isIOSWebView } from "../../../shared/lib/webview/isIOSWebView";
import { sendMonthChanged } from "../../../shared/lib/webview/bridge";

type MonthlyCalendarProps = {
  scheduleTypes?: ScheduleType[];
  concertType?: ConcertType;
  onDateSelect?: (date: string) => void;
};

export function MonthlyCalendar({
  scheduleTypes = [ScheduleType.CONCERT, ScheduleType.TICKETING],
  concertType = ConcertType.ALL,
  onDateSelect,
}: MonthlyCalendarProps) {
  const [selected, setSelected] = useState<Date>();
  const [month, setMonth] = useState(new Date());

  //캘린더의 시작일과 종료일을 계산 (해당 월의 시작일과 종료일을 포함한 주 단위로 계산)
  const startDate = format(
    startOfWeek(startOfMonth(month), { weekStartsOn: 0 }),
    "yyyy-MM-dd",
  );

  const endDate = format(
    endOfWeek(endOfMonth(month), { weekStartsOn: 0 }),
    "yyyy-MM-dd",
  );

  const { data, isLoading, error } = useCalendarData({
    startDate,
    endDate,
    scheduleTypes,
    concertType,
  });

  const eventMap = useMemo(() => {
    if (!data) return new Map();

    return new Map(data.map((item) => [item.date, item.events]));
  }, [data]);

  const isWebView = isIOSWebView();

  useEffect(() => {
    if (!isWebView) return;

    sendMonthChanged(startDate, endDate);
  }, [isWebView, startDate, endDate]);

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
      month={month}
      onMonthChange={(newMonth) => {
        setMonth(newMonth);
      }}
      selected={selected}
      onDayClick={(day) => {
        setSelected(day);
        onDateSelect?.(format(day, "yyyy-MM-dd"));
      }}
      required
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
