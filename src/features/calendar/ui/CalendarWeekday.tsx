import type { WeekdayProps } from "react-day-picker";

const WEEKEND_LABELS = new Set(["일", "토"]);

/** 요일 헤더. 일/토만 주말 색상으로 표시. */
export function CalendarWeekday({
  className,
  children,
  ...thProps
}: WeekdayProps) {
  const label = String(children ?? "");
  const isWeekend = WEEKEND_LABELS.has(label);

  return (
    <th
      {...thProps}
      className={[
        className,
        "text-Caption2-re",
        isWeekend && "text-lyricsTranslation",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </th>
  );
}
