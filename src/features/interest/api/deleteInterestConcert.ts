import axiosInstance from "../../../shared/api/axiosInstance";

export interface DeleteInterestConcertProps {
  concertId: number;
  accessToken: string;
}

export const deleteInterestConcert = async ({
  concertId,
  accessToken,
}: DeleteInterestConcertProps) => {
  const response = await axiosInstance.delete(
    `/users/interest-concert/${concertId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return response.data.data;
};
