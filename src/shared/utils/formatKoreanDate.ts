export function formatKoreanDate({ dateStr }: { dateStr: string }): string {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${year}년 ${month}월 ${day}일`;
}
