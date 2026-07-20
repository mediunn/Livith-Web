import type { DayButtonProps } from "react-day-picker";
import { CalendarEvent, CalendarEventType } from "./CalendarEvent";
import { ConcertType, ScheduleType } from "../model/types";

/** 날짜 버튼 내용(숫자 + 선택 보더 + 공연 목록 자리). */
export function CalendarDayButton({
  day,
  modifiers,
  className,
  style,
  scheduleTypes,
  concertType,
  ...buttonProps
}: DayButtonProps & {
  scheduleTypes: ScheduleType[];
  concertType: ConcertType;
}) {
  const date = day.date;
  const isToday = Boolean(modifiers.today);
  const isSelected = Boolean(modifiers.selected);
  const isOutside = Boolean(modifiers.outside);
  const isWeekend = Boolean(modifiers.weekend);

  const mockEvents: {
    type: CalendarEventType;
    text: string;
  }[] = [
    { type: "CONCERT", text: "콘서트1" },
    { type: "TICKETING", text: "티켓팅1" },
    { type: "CONCERT", text: "콘서트2" },
    { type: "TICKETING", text: "티켓팅2" },
  ];

  return (
    <button
      type="button"
      {...buttonProps}
      style={style}
      className={[
        // rdp 기본 .rdp-selected .rdp-day_button border가 Tailwind border를 덮어써서,
        // 선택 테두리는 안쪽 wrapper에 그림
        "h-full w-full bg-transparent p-0",
        typeof className === "string" ? className : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[
          "flex h-full w-full flex-col items-center rounded-[4px] border border-1 pt-2",
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
        <div className="w-full px-1 gap-4 flex flex-col mt-4">
          {mockEvents.slice(0, 2).map((event, index) => (
            <CalendarEvent key={index} type={event.type} text={event.text} />
          ))}
          {mockEvents.length > 2 && <CalendarEvent type="MORE" text="..." />}
        </div>
      </div>
    </button>
  );
}
