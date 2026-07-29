import { DailyCalendarEvent } from "../model/types";

export function getBadgeText(type: DailyCalendarEvent["type"]) {
  switch (type) {
    case "CONCERT":
      return "공연일";
    case "GENERAL_TICKETING":
      return "일반 예매";
    case "PRE_TICKETING":
      return "선예매";
    case "ADD_TICKETING":
      return "추가 예매";
  }
}

export function getIndicatorColor(event: DailyCalendarEvent) {
  if (event.status === "CANCELED" || event.time === null) {
    return "bg-grayScaleBlack50";
  }

  return event.type === "CONCERT"
    ? "bg-lyricsOriginal"
    : "bg-lyricsTranslation";
}

export function getTimeText(event: DailyCalendarEvent) {
  if (event.status === "CANCELED") {
    return "공연 취소";
  }

  return event.time ?? "추후 발표";
}

export function getDescription(event: DailyCalendarEvent) {
  return event.detail?.trim() || "추후 발표";
}

export function formatDate(date?: string) {
  if (!date) return "";

  const d = new Date(date);

  const weekdays = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  return `${d.getMonth() + 1}월 ${d.getDate()}일 ${weekdays[d.getDay()]}`;
}
