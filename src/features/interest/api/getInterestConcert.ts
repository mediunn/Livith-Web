import axiosInstance from "../../../shared/api/axiosInstance";

export interface InterestConcertResponse {
  id: number;
}

export const getInterestConcert =
  async (): Promise<InterestConcertResponse | null> => {
    const token = localStorage.getItem("accessToken");

    const response = await axiosInstance.get(`/users/interest-concert`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  };
