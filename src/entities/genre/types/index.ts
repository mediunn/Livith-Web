export type Genre = {
  id: number;
  name: GenreEnum;
  imgUrl: string;
};

export enum GenreEnum {
  ALL = "ALL",
  JPOP = "JPOP",
  ROCK_METAL = "ROCK_METAL",
  RAP_HIPHOP = "RAP_HIPHOP",
  INDIE = "INDIE",
  POP = "POP",
}

export type UserGenre = Genre & {
  userId: number;
};
