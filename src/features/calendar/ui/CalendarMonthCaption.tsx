import type { MonthCaptionProps } from "react-day-picker";
import { useDayPicker } from "react-day-picker";

import PrevArrow from "../../../shared/assets/PrevArrow.svg";
import NextArrow from "../../../shared/assets/NextArrow.svg";

function formatYearMonth(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}.${month}`;
}

/**
 * 월 캡션 줄 전체 커스텀.
 * 왼쪽: 2026.06 / 오른쪽: 이전·다음 화살표
 * 기본 Nav와 겹치지 않게 DayPicker에 hideNavigation을 함께 써야 함.
 */
export function CalendarMonthCaption({
  calendarMonth,
  displayIndex: _displayIndex,
  className,
  style,
  children: _children,
  ...divProps
}: MonthCaptionProps) {
  const { goToMonth, previousMonth, nextMonth } = useDayPicker();
  const today = new Date();
  return (
    <div
      {...divProps}
      style={style}
      className={[
        "mb-16 flex w-full items-center justify-between px-16",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        role="status"
        aria-live="polite"
        className="text-Body1-sm text-grayScaleWhite"
      >
        {formatYearMonth(calendarMonth.date)}
      </div>

      <div className="flex items-center gap-8">
        {/* 오늘 버튼 */}
        <button
          type="button"
          onClick={() => goToMonth(today)}
          className="px-12 py-4 text-grayScaleBlack5 text-Caption1-Bold font-bold rounded-24 border border-grayScaleBlack80"
        >
          오늘
        </button>
        {/* 이전/다음 달 버튼 */}
        <button
          type="button"
          disabled={!previousMonth}
          aria-label="이전 달"
          onClick={() => previousMonth && goToMonth(previousMonth)}
          className="flex h-24 w-24 rounded-full bg-grayScaleBlack90 items-center justify-center disabled:opacity-30  hover:bg-grayScaleBlack100"
        >
          <img src={PrevArrow} alt="" className="h-8 w-auto" />
        </button>
        <button
          type="button"
          disabled={!nextMonth}
          aria-label="다음 달"
          onClick={() => nextMonth && goToMonth(nextMonth)}
          className="flex h-24 w-24 rounded-full bg-grayScaleBlack90 items-center justify-center disabled:opacity-30 hover:bg-grayScaleBlack100"
        >
          <img src={NextArrow} alt="" className="h-8 w-auto" />
        </button>
      </div>
    </div>
  );
}
