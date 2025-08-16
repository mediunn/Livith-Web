export const formatDebutDate = (DebutDate: string): string => {
  if (!DebutDate) return "";

  const parts = DebutDate.split("-").map((p) => {
    if (!p) return "";
    // 소수점이 있으면 제거하고 정수로 변환
    return String(Math.floor(Number(p)));
  });

  const [year, month, day] = parts;

  let result = "";
  if (year) result += `${year}년`;
  if (month) result += ` ${month}월`;
  if (day) result += ` ${day}일`;

  return result.trim();
};
