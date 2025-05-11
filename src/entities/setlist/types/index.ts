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

export type SetListSong = {
  id: number;
  title: string;
  artist: string;
  setlistId: number;
  orderIndex: number;
  imgUrl: string;
};

export type SetlistSongListResponse = {
  data: SetListSong[];
  cursor?: null | undefined;
};
