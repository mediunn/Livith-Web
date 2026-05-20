import axiosInstance from "../../../shared/api/axiosInstance";

export interface SetInterestConcertProps {
  concertIds: number[];
  accessToken: string;
}

export const setInterestConcert = async ({
  concertIds,
  accessToken,
}: SetInterestConcertProps) => {
  const response = await axiosInstance.put(
    `/users/interest-concerts`,
    { concertIds },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return response.data.data;
};
