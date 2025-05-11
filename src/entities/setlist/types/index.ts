export enum SetlistType {
  ONGOING = "ONGOING",
  EXPECTED = "EXPECTED",
  PAST = "PAST",
}

export type Setlist = {
  id: string;
  concertId: number;
  title: string;
  type: SetlistType;
  status: string;
  date: string;
  imgUrl: string;
  artist: string;
};

export type SetlistResponse = {
  data: Setlist[];
  cursor: null | undefined;
};
