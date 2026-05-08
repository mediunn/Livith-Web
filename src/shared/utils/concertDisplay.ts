import { Concert } from "../../entities/concert/types";
import { formatDateRange } from "./formatDateRange";
import { setConcertStatus } from "../../features/search/utils/setConcertStatus";

export type ConcertDisplaySource = Pick<
  Concert,
  "title" | "artist" | "startDate" | "endDate" | "status" | "daysLeft" | "venue"
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

export const getConcertDisplayVenue = (concert: ConcertDisplaySource) => {
  if (concert.venue?.trim()) return concert.venue;
  return "장소 공개 예정";
};

export const formatSaleDate = (dateString: string) => {
  const date = new Date(dateString);

  const month = date.getMonth() + 1;
  const day = date.getDate();

  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = dayNames[date.getDay()];

  let hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${month}/${day}(${dayOfWeek}) ${hours}:${minutes
    .toString()
    .padStart(2, "0")}${ampm}`;
};

export const getTicketingText = (
  preSaleDate: string | null,
  generalSaleDate: string | null,
  startDate: string | null,
) => {
  const now = new Date();
  const concertStart = startDate
    ? new Date(startDate.replace(/\./g, "-"))
    : null;

  if (concertStart && now >= concertStart) {
    return "콘서트 진행중";
  }

  const pre = preSaleDate ? new Date(preSaleDate) : null;
  const general = generalSaleDate ? new Date(generalSaleDate) : null;

  if (pre && general) {
    if (now < pre) {
      return `선예매 오픈 · ${formatSaleDate(preSaleDate!)}`;
    }
    return `일반 예매 오픈 · ${formatSaleDate(generalSaleDate!)}`;
  }

  if (pre && !general) {
    return `선예매 오픈 · ${formatSaleDate(preSaleDate!)}`;
  }

  if (!pre && general) {
    return `일반 예매 오픈 · ${formatSaleDate(generalSaleDate!)}`;
  }

  return "예매 오픈 예정";
};
