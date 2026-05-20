import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";
import { Genre } from "../types";

async function getGenre(): Promise<Genre[]> {
  const response = await axiosInstance.get<ApiResponse<Genre[]>>("/genres");

  return response.data.data;
}
export default getGenre;
