import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";

export type Fanchant = {
  id: number;
  setlistId: number;
  songId: number;
  fanchant: string[];
  fanchantPoint: string;
};

export async function getFanchant(
  setlistId: number,
  songId: number
): Promise<Fanchant> {
  const response = await axiosInstance.get<ApiResponse<Fanchant>>(
    `/setlists/${setlistId}/songs/${songId}/fanchant`
  );
  return response.data.data;
}
