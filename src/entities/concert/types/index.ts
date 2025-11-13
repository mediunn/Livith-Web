export enum ConcertFilter {
  NEW = "NEW",
  UPCOMING = "UPCOMING",
  ALL = "ALL",
}

export enum ConcertStatus {
  ONGOING = "ONGOING",
  UPCOMING = "UPCOMING",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
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
  daysLeft: number;
  ticketSite: string;
  ticketUrl: string;
  venue: string;
  introduction: string;
  label: string;
};

export type ConcertListResponse = {
  data: Concert[];
  cursor: null | undefined;
  totalCount?: number;
};

export type SectionConcert = {
  id: string;
  code: string;
  title: string;
  startDate: string;
  endDate: string;
  status: ConcertStatus;
  poster: string;
  artist: string;
  daysLeft: number;
  createdAt: string;
  updatedAt: string;
  artistId: number;
  ticketSite: string;
  ticketUrl: string;
  venue: string;
  introduction: string;
  label: string;
  sortedIndex: number;
};

export enum GenreFilter {
  ALL = "ALL",
  JPOP = "JPOP",
  ROCK_METAL = "ROCK_METAL",
  RAP_HIPHOP = "RAP_HIPHOP",
  CLASSIC_JAZZ = "CLASSIC_JAZZ",
  ACOUSTIC = "ACOUSTIC",
  ELECTRONIC = "ELECTRONIC",
}

export enum StatusFilter {
  ALL = "ALL",
  ONGOING = "ONGOING",
  UPCOMING = "UPCOMING",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}

export enum SortFilter {
  LATEST = "LATEST",
  ALPHABETICAL = "ALPHABETICAL",
}
