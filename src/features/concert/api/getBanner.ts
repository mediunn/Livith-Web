import { ApiResponse } from "../../../shared/types/response";
import axiosInstance from "../../../shared/api/axiosInstance";

type Banner = {
  id: number;
  title: string;
  category: string;
  imgUrl: string;
};

export async function getBanner(): Promise<Banner[]> {
  const response = await axiosInstance.get<ApiResponse<Banner[]>>(
    "/api/v2/category/banners"
  );
  return response.data.data;
}
