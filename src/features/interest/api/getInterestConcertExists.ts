import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

export type InterestConcertExistsResponse = {
  isInterested: boolean;
};

export const getInterestConcertExists = async (
  id: number,
): Promise<ApiResponse<InterestConcertExistsResponse>> => {
  const token = localStorage.getItem("accessToken");

  const response = await axiosInstance.get(
    `/users/interest-concerts/${id}/exists`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};
