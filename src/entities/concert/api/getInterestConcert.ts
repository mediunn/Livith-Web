import axios from "axios";

export interface InterestConcertResponse {
  id: number;
}

export const getInterestConcert =
  async (): Promise<InterestConcertResponse | null> => {
    // 임의로 발급받은 토큰
    const token = import.meta.env.VITE_ACCESS_TOKEN;

    const SERVER_URL = import.meta.env.VITE_SERVER_URL;

    const response = await axios.get(
      `${SERVER_URL}api/v4/users/interest-concert`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data;
  };
