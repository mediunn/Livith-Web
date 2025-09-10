import { GenreFilter, StatusFilter } from "../types";

const genreOrder: GenreFilter[] = [
  GenreFilter.ALL,
  GenreFilter.JPOP,
  GenreFilter.ROCK_METAL,
  GenreFilter.RAP_HIPHOP,
  GenreFilter.CLASSIC_JAZZ,
  GenreFilter.ACOUSTIC,
  GenreFilter.ELECTRONIC,
];

const statusOrder: StatusFilter[] = [
  StatusFilter.ALL,
  StatusFilter.ONGOING,
  StatusFilter.UPCOMING,
  StatusFilter.COMPLETED,
];

export { genreOrder, statusOrder };
