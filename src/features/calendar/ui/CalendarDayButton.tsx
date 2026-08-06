import type { DayButtonProps } from "react-day-picker";
import { CalendarEvent, CalendarEventType } from "./CalendarEvent";
import { ConcertType, ScheduleType } from "../model/types";

export type CalendarEvent = {
  id: number;
  artist: string;
  type: ScheduleType;
};

/** 날짜 버튼 내용(숫자 + 선택 보더 + 공연 목록 자리). */
export function CalendarDayButton({
  day,
  modifiers,
  className,
  style,
  scheduleTypes,
  concertType,
  events,
  ...buttonProps
}: DayButtonProps & {
  scheduleTypes: ScheduleType[];
  concertType: ConcertType;
  events: CalendarEvent[];
}) {
  const date = day.date;
  const isToday = Boolean(modifiers.today);
  const isSelected = Boolean(modifiers.selected);
  const isOutside = Boolean(modifiers.outside);
  const isWeekend = Boolean(modifiers.weekend);

  return (
    <button
      type="button"
      {...buttonProps}
      style={style}
      className={[
        // rdp 기본 .rdp-selected .rdp-day_button border가 Tailwind border를 덮어써서,
        // 선택 테두리는 안쪽 wrapper에 그림
        "block h-full w-full bg-transparent p-0",
        typeof className === "string" ? className : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[
          "box-border flex h-full min-h-[calc(var(--rdp-day-height,100px)-0.5rem)] w-full flex-col items-center rounded-[4px] border border-1 pt-2",
          isSelected ? "border-grayScaleBlack50" : "border-transparent",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div
          className={[
            "box-border flex h-22 w-22 shrink-0 items-center justify-center rounded-full text-Caption1-re",
            isToday
              ? "bg-grayScaleBlack80 text-white"
              : "border border-transparent",
            isWeekend && "text-lyricsTranslation",
            isOutside && !isToday && "opacity-30", // 이전/다음 달 날짜는 회색으로 표시
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {date.getDate()}
        </div>

        {/* 공연 목록 자리 */}
        <div className="mt-4 flex w-full flex-1 flex-col gap-4 px-1">
          {events.slice(0, 2).map((event, index) => (
            <CalendarEvent key={index} type={event.type} text={event.artist} />
          ))}
          {events.length > 2 && <CalendarEvent type="MORE" text="..." />}
        </div>
      </div>
    </button>
  );
}
