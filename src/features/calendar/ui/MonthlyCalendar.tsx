import { useState } from "react";
import type { CSSProperties } from "react";
import { DayPicker } from "react-day-picker";
import { ko } from "date-fns/locale";
import "react-day-picker/dist/style.css";

import CalendarDay from "./CalendarDay";
import { CalendarDayButton } from "./CalendarDayButton";
import { CalendarMonthCaption } from "./CalendarMonthCaption";
import { CalendarWeekday } from "./CalendarWeekday";
import { CalendarWeekdays } from "./CalendarWeekdays";

export function MonthlyCalendar() {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      locale={ko}
      mode="single"
      selected={selected}
      onSelect={setSelected}
      // 기본 Nav(화살표) 숨기고 MonthCaption에서 한 줄로 전부 그림
      hideNavigation
      // 월간 달력에서 이전/다음 달 날짜를 회색으로 표시
      showOutsideDays
      modifiers={{
        weekend: { dayOfWeek: [0, 6] }, // 주말 색상 변경
      }}
      components={{
        Day: CalendarDay,
        DayButton: CalendarDayButton,
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
