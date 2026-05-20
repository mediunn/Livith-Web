import { Concert } from "../../entities/concert/types";
import { formatDateRange } from "./formatDateRange";
import {
  setConcertStatus,
  setInterestConcertCarouselStatus,
} from "../../features/search/utils/setConcertStatus";

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
export const getInterestConcertCarouseltDisplayStatus = (
  concert: ConcertDisplaySource,
) => {
  if (!hasValidDate(concert.startDate, concert.endDate)) {
    return "공연 예정";
  }

  return setInterestConcertCarouselStatus({
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

type DateParts = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
};

const parseKoreanDateString = (dateString: string): DateParts | null => {
  const match = dateString
    .trim()
    .match(
      /^(\d{4})[-./](\d{1,2})[-./](\d{1,2})(?:[ T](\d{1,2}):(\d{2})(?::(\d{2}))?(?:\.\d{1,6})?)?(?:Z|[+-]\d{2}:?\d{2})?$/,
    );

  if (!match) return null;

  return {
    year: Number(match[1]),
    month: Number(match[2]),
    day: Number(match[3]),
    hour: Number(match[4] ?? 0),
    minute: Number(match[5] ?? 0),
    second: Number(match[6] ?? 0),
  };
};

const toComparableValue = (parts: DateParts) =>
  Number(
    `${parts.year}${String(parts.month).padStart(2, "0")}${String(
      parts.day,
    ).padStart(2, "0")}${String(parts.hour).padStart(2, "0")}${String(
      parts.minute,
    ).padStart(2, "0")}${String(parts.second).padStart(2, "0")}`,
  );

const getNowInKoreaComparableValue = () => {
  const formatter = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = formatter
    .formatToParts(new Date())
    .reduce<Record<string, string>>((acc, part) => {
      if (part.type !== "literal") acc[part.type] = part.value;
      return acc;
    }, {});

  return Number(
    `${parts.year}${parts.month}${parts.day}${parts.hour}${parts.minute}${parts.second}`,
  );
};

export const formatSaleDate = (dateString: string) => {
  const parsed = parseKoreanDateString(dateString);
  if (!parsed) return dateString;

  const { year, month, day, hour, minute } = parsed;

  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = dayNames[new Date(year, month - 1, day).getDay()];

  let hours = hour;

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${month}/${day}(${dayOfWeek}) ${hours}:${minute
    .toString()
    .padStart(2, "0")}${ampm}`;
};

export const getTicketingText = (
  preSaleDate: string | null,
  generalSaleDate: string | null,
  startDate: string | null,
) => {
  const now = getNowInKoreaComparableValue();
  const concertStart = startDate ? parseKoreanDateString(startDate) : null;

  if (concertStart && now >= toComparableValue(concertStart)) {
    return "콘서트 진행중";
  }

  const pre = preSaleDate ? parseKoreanDateString(preSaleDate) : null;
  const general = generalSaleDate
    ? parseKoreanDateString(generalSaleDate)
    : null;

  if (pre && general) {
    if (now < toComparableValue(pre)) {
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
