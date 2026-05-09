import axiosInstance from "../../../shared/api/axiosInstance";
import { ApiResponse } from "../../../shared/types/response";

export interface InterestConcertToastData {
  needsToShow: boolean;
}

export const getInterestConcertToast = async (): Promise<
  ApiResponse<InterestConcertToastData>
> => {
  const response = await axiosInstance.get<
    ApiResponse<InterestConcertToastData>
  >("/users/interest-concerts/toast");
  return response.data;
};

export const patchInterestConcertToast = async (): Promise<
  ApiResponse<InterestConcertToastData>
> => {
  const response = await axiosInstance.patch<
    ApiResponse<InterestConcertToastData>
  >("/users/interest-concerts/toast");
  return response.data;
};
