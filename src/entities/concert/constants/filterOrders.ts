import { GenreEnum } from "../../genre/types";
import { StatusFilter } from "../types";

const genreOrder: GenreEnum[] = [
  GenreEnum.ALL,
  GenreEnum.JPOP,
  GenreEnum.ROCK_METAL,
  GenreEnum.RAP_HIPHOP,
  GenreEnum.POP,
  GenreEnum.INDIE,
];

const statusOrder: StatusFilter[] = [
  StatusFilter.ALL,
  StatusFilter.ONGOING,
  StatusFilter.UPCOMING,
  StatusFilter.COMPLETED,
];

export { genreOrder, statusOrder };
