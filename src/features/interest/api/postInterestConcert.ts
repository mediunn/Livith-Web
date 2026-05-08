import axiosInstance from "../../../shared/api/axiosInstance";

export interface PostInterestConcertProps {
  concertId: number;
  accessToken: string;
}

export const postInterestConcert = async ({
  concertId,
  accessToken,
}: PostInterestConcertProps) => {
  const response = await axiosInstance.post(
    `/users/interest-concert/${concertId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return response.data.data;
};
