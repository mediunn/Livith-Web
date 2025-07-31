export enum SetlistType {
  ONGOING = "ONGOING",
  EXPECTED = "EXPECTED",
  PAST = "PAST",
}

export type Setlist = {
  id: number;
  title: string;
  type: SetlistType;
  status: string;
  startDate: string;
  endDate: string;
  venue: string;
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
  orderIndex: number;
};

export type SetlistSongListResponse = {
  data: SetListSong[];
};
