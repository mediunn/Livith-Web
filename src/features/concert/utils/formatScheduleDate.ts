import dayjs from "dayjs";

export function getFormatDday(scheduledAt: string): string {
  const today = dayjs().startOf("day");
  const target = dayjs(scheduledAt).startOf("day");
  const diff = target.diff(today, "day");

  if (diff === 0) return "D-DAY";
  if (diff > 0) return `D-${diff}`;
  return `D+${Math.abs(diff)}`;
}

export function getFormatDateTime(scheduledAt: string): string {
  const date = dayjs(scheduledAt);
  const dayMap = ["일", "월", "화", "수", "목", "금", "토"];
  const day = dayMap[date.day()];

  const hasTime = date.hour() !== 0 || date.minute() !== 0;
  return hasTime
    ? `${date.format("M/D")}(${day}) ${date.format("h:mmA")}`
    : `${date.format("M/D")}(${day})`;
}
