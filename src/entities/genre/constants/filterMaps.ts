import { GenreEnum } from "../types";

const genreMap: Record<GenreEnum, string> = {
  [GenreEnum.ALL]: "전체",
  [GenreEnum.JPOP]: "J-POP",
  [GenreEnum.ROCK_METAL]: "ROCK / METAL",
  [GenreEnum.RAP_HIPHOP]: "RAP / HIPHOP",
  [GenreEnum.INDIE]: "INDIE",
  [GenreEnum.POP]: "POP",
};

export { genreMap };
