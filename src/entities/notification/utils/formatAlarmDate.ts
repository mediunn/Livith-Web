export const formatAlarmDate = (createdAt: string) => {
  // "2026.01.19 10:15" → Date 변환
  const formatted = createdAt.replace(/\./g, "-");
  const date = new Date(formatted);
  const now = new Date();

  const diffMs = now.getTime() - date.getTime();
  const rawDiffHours = diffMs / (1000 * 60 * 60);
  const diffHours = Math.floor(rawDiffHours);
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // 24시간 미만
  if (diffHours < 24) {
    const displayHours = diffHours === 0 ? 1 : diffHours;
    return `${displayHours}시간 전`;
  }

  // 24시간 초과 ~ 6일
  if (diffDays < 7) {
    return `${diffDays}일 전`;
  }

  // 7일 ~
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};
