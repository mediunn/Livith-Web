export const formatBirthDate = (birthDate: string): string => {
  if (!birthDate) return "";

  const [year, month, day] = birthDate.split("-");
  return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`;
};
