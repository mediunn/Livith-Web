import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";

export type Setlist = {
  id: number;
  title: string;
  imgUrl: string;
  type: string;
  startDate: string;
  endDate: string;
  status: string;
  venue: string;
  artist: string;
};

export async function getSetlistInfo(id: number): Promise<Setlist[]> {
  const response = await axiosInstance.get<ApiResponse<Setlist[]>>(
    `/api/v4/concerts/${id}/setlists`
  );
  return response.data.data;
}
