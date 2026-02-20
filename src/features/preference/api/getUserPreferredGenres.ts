import { UserGenre } from "../../../entities/genre/types";
import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

async function getUserPreferredGenres(): Promise<UserGenre[]> {
  const response = await axiosInstance.get<ApiResponse<UserGenre[]>>(
    "/users/genre-preferences",
  );
  return response.data.data;
}

export default getUserPreferredGenres;
