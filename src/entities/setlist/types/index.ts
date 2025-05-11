export enum SetlistType {
  ONGOING = "ONGOING",
  EXPECTED = "EXPECTED",
  PAST = "PAST",
}

export type Setlist = {
  id: number;
  concertId: number;
  title: string;
  type: SetlistType;
  status: string;
  date: string;
  imgUrl: string;
  artist: string;
};

export type SetlistResponse = {
  data: Setlist[] | Setlist;
  cursor?: null | undefined;
};

export interface SetlistDetailProps {
  setlistId: number;
  concertId: number;
}
