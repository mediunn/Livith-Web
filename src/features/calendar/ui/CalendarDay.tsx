import type { DayButtonProps, DayProps } from "react-day-picker";

/** 날짜 셀(td). 테이블 레이아웃을 유지하려면 반드시 td로 렌더해야 함. */
export default function CalendarDay({
  day: _day,
  modifiers: _modifiers,
  className,
  style,
  children,
  ...tdProps
}: DayProps) {
  return (
    <td
      {...tdProps}
      style={style}
      className={[className, "p-1 align-top"].filter(Boolean).join(" ")}
    >
      {children}
    </td>
  );
}
