export const formatConcertDate = (
  startDate: string,
  endDate: string
): string => {
  // 시작 날짜와 끝 날짜 같을 경우
  if (startDate === endDate) return startDate;

  const [startY, startM, startD] = startDate.split(".");
  const [endY, endM, endD] = endDate.split(".");

  // 시작 연도와 끝 연도 같을 경우
  if (startY === endY) {
    return `${startDate} ~ ${endM}.${endD}`;
  }

  return `${startDate} ~ ${endDate}`;
};
