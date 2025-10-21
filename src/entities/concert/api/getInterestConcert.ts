import axiosInstance from "../../../shared/api/axiosInstance";

export interface InterestConcertResponse {
  id: number;
}

export const getInterestConcert =
  async (): Promise<InterestConcertResponse | null> => {
    // 임의로 발급받은 토큰
    const token = import.meta.env.VITE_ACCESS_TOKEN;

    const response = await axiosInstance.get(`api/v4/users/interest-concert`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  };
