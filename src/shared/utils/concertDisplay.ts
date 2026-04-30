import { Concert } from "../../entities/concert/types";
import { formatDateRange } from "./formatDateRange";
import { setConcertStatus } from "../../features/search/utils/setConcertStatus";

export type ConcertDisplaySource = Pick<
  Concert,
  "title" | "artist" | "startDate" | "endDate" | "status" | "daysLeft"
>;

const hasValidDate = (startDate?: string, endDate?: string) => {
  return Boolean(startDate?.trim()) && Boolean(endDate?.trim());
};

export const getConcertDisplayTitle = (concert: ConcertDisplaySource) => {
  if (concert.title?.trim()) return concert.title;
  if (concert.artist?.trim()) return `${concert.artist} 내한 예정`;
  return "공연 예정";
};

export const getConcertDisplayStatus = (concert: ConcertDisplaySource) => {
  if (!hasValidDate(concert.startDate, concert.endDate)) {
    return "공연 예정";
  }

  return setConcertStatus({
    status: concert.status,
    daysLeft: concert.daysLeft,
  });
};

export const getConcertDisplayDate = (concert: ConcertDisplaySource) => {
  if (!hasValidDate(concert.startDate, concert.endDate)) {
    return "추후 발표";
  }

  return formatDateRange(concert.startDate, concert.endDate);
};