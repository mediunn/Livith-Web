import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";

export type Md = {
  id: number;
  name: string;
  price: string;
  imgUrl: string;
};

export async function getMd(id: number): Promise<Md[]> {
  const response = await axiosInstance.get<ApiResponse<Md[]>>(
    `/concerts/${id}/mds`
  );
  return response.data.data;
}
