import axiosInstance from "../../../shared/api/axiosInstance";

interface PostConcertCommentParams {
  concertId: number;
  content: string;
  accessToken: string;
}

export const setConcertComment = async ({
  concertId,
  content,
  accessToken,
}: PostConcertCommentParams) => {
  const response = await axiosInstance.post(
    `/api/v4/concerts/${concertId}/comments`,
    { content },
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
  return response.data.data;
};
