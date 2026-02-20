import { Genre, UserGenre } from "../../../entities/genre/types";
import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

export async function setUserPreferredGenres(
  genreIds: number[],
): Promise<UserGenre> {
  const response = await axiosInstance.put<ApiResponse<UserGenre>>(
    "/users/genre-preferences",
    {
      genreIds,
    },
  );
  return response.data.data;
}
