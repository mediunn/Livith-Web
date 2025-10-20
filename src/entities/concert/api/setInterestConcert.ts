import axios from "axios";

export interface SetInterestConcertResponse {
  id: number;
}

export const setInterestConcert = async (
  concertId: number,
  token: string
): Promise<SetInterestConcertResponse> => {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const response = await axios.post(
    `${SERVER_URL}api/v4/users/interest-concert`,
    { concertId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.data;
};
