export enum ConcertFilter {
  NEW = "NEW",
  UPCOMING = "UPCOMING",
  ALL = "ALL",
}

export type Concert = {
  id: string;
  code: string;
  title: string;
  startDate: string;
  endDate: string;
  status: ConcertFilter;
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
