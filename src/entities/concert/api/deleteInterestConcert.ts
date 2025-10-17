import axios from "axios";

export const deleteInterestConcert = async (
  concertId: number,
  token: string
) => {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const response = await axios.delete(
    `${SERVER_URL}api/v4/users/interest-concert`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { concertId },
    }
  );

  return response.data;
};
