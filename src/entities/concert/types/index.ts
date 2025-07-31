export enum ConcertFilter {
  NEW = "NEW",
  UPCOMING = "UPCOMING",
  ALL = "ALL",
}

export enum ConcertStatus {
  ONGOING = "ONGOING",
  UPCOMING = "UPCOMING",
  PAST = "PAST",
}

export type Concert = {
  id: string;
  code: string;
  title: string;
  startDate: string;
  endDate: string;
  status: ConcertStatus;
  poster: string;
  artist: string;
  sortedIndex: number;
  daysLeft: number;
  ticketSite: string;
  ticketUrl: string;
  venue: string;
};

export type ConcertListResponse = {
  data: Concert[];
  cursor: null | undefined;
  totalCount?: number;
};
