import { GenreEnum } from "../../genre/types";
import { StatusFilter } from "../types";

const genreMap: Record<GenreEnum, string> = {
  [GenreEnum.ALL]: "전체",
  [GenreEnum.JPOP]: "J-POP",
  [GenreEnum.ROCK_METAL]: "ROCK / METAL",
  [GenreEnum.RAP_HIPHOP]: "RAP / HIPHOP",
  [GenreEnum.INDIE]: "INDIE",
  [GenreEnum.POP]: "POP",
};

const statusMap: Record<StatusFilter, string> = {
  [StatusFilter.ALL]: "전체",
  [StatusFilter.ONGOING]: "진행중",
  [StatusFilter.UPCOMING]: "진행예정",
  [StatusFilter.COMPLETED]: "진행완료",
  [StatusFilter.CANCELED]: "공연취소",
};

export { genreMap, statusMap };
