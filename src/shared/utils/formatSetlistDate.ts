export const formatSetlistDate = (
  startDate: string,
  endDate: string
): string => {
  const [startY, startM, startD] = startDate.split("-");
  const [endY, endM, endD] = endDate.split("-");

  const formatedStartDate = `${startY}.${startM}.${startD}`;
  const formatedEndDate = `${endY}.${endM}.${endD}`;

  // 시작 날짜와 끝 날짜 같을 경우
  if (startDate === endDate) return formatedStartDate;

  // 시작 연도와 끝 연도 같을 경우
  if (startY === endY) {
    return `${formatedStartDate}~${endM}.${endD}`;
  }

  return `${formatedStartDate}~${formatedEndDate}`;
};
