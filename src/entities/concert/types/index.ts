export enum ConcertStatus {
  ONGOING = "ONGOING",
  UPCOMING = "UPCOMING",
  COMPLETED = "COMPLETED",
}

export type Concert = {
  id: string;
  code: string;
  title: string;
  startDate: string;
  endDate: string;
  poster: string;
  daysLeft: number;
  sortedIndex: number;
  artist: string;
  status: ConcertStatus;
};

export type ConcertListResponse = {
  data: Concert[];
  cursor: null | undefined;
  totalCount?: number;
};
