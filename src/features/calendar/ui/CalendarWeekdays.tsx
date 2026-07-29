import type { WeekdaysProps } from "react-day-picker";

/**
 * 요일 행 + 날짜 그리드 사이 간격을 위한 spacer row.
 * Day 셀 padding을 건드리지 않아서 주차별 높이가 일정하게 유지됨.
 */
export function CalendarWeekdays({
  className,
  style,
  children,
  ...trProps
}: WeekdaysProps) {
  return (
    <thead aria-hidden>
      <tr
        {...trProps}
        className={[
          className,
          "bg-grayScaleBlack90 border-b border-grayScaleBlack80",
        ]
          .filter(Boolean)
          .join(" ")}
        style={style}
      >
        {children}
      </tr>
      <tr>
        <td colSpan={7} className="h-10 p-0" />
      </tr>
    </thead>
  );
}
