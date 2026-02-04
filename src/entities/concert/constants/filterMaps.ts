import { GenreEnum } from "../../genre/types";
import { StatusFilter } from "../types";

const genreMap: Record<GenreEnum, string> = {
  [GenreEnum.ALL]: "전체",
  [GenreEnum.JPOP]: "J-POP",
  [GenreEnum.ROCK_METAL]: "락/메탈",
  [GenreEnum.RAP_HIPHOP]: "랩/힙합",
  [GenreEnum.CLASSIC_JAZZ]: "클래식/재즈",
  [GenreEnum.ACOUSTIC]: "어쿠스틱",
  [GenreEnum.ELECTRONIC]: "일렉트로닉",
};

const statusMap: Record<StatusFilter, string> = {
  [StatusFilter.ALL]: "전체",
  [StatusFilter.ONGOING]: "진행중",
  [StatusFilter.UPCOMING]: "진행예정",
  [StatusFilter.COMPLETED]: "진행완료",
  [StatusFilter.CANCELED]: "공연취소",
};

export { genreMap, statusMap };
