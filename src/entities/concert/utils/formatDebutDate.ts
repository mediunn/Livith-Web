export const formatDebutDate = (debutDate: string): string => {
  if (!debutDate) return "";

  const yearPart = debutDate.split("-")[0];
  if (!yearPart) return "";

  // 소수점이 있으면 제거하고 정수로 변환
  const year = Math.floor(Number(yearPart));

  return `${year}년`;
};
