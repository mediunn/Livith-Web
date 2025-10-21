import axiosInstance from "../../../shared/api/axiosInstance";

export interface SetInterestConcertResponse {
  id: number;
}

export const setInterestConcert = async (
  concertId: number,
  token: string
): Promise<SetInterestConcertResponse> => {
  const response = await axiosInstance.post(
    `api/v4/users/interest-concert`,
    { concertId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.data;
};
