import { GenreFilter, StatusFilter } from "../types";

const genreMap: Record<GenreFilter, string> = {
  [GenreFilter.ALL]: "전체",
  [GenreFilter.JPOP]: "J-POP",
  [GenreFilter.ROCK_METAL]: "락/메탈",
  [GenreFilter.RAP_HIPHOP]: "랩/힙합",
  [GenreFilter.CLASSIC_JAZZ]: "클래식/재즈",
  [GenreFilter.ACOUSTIC]: "어쿠스틱",
  [GenreFilter.ELECTRONIC]: "일렉트로닉",
};

const statusMap: Record<StatusFilter, string> = {
  [StatusFilter.ALL]: "전체",
  [StatusFilter.ONGOING]: "진행중",
  [StatusFilter.UPCOMING]: "진행예정",
  [StatusFilter.COMPLETED]: "진행완료",
  [StatusFilter.CANCELED]: "공연취소",
};

export { genreMap, statusMap };
