import axiosInstance from "../../../shared/api/axiosInstance";

export interface SetInterestConcertProps {
  concertId: number;
  accessToken: string;
}

export const setInterestConcert = async ({
  concertId,
  accessToken,
}: SetInterestConcertProps) => {
  const response = await axiosInstance.post(
    `/users/interest-concert`,
    { concertId },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return response.data.data;
};
