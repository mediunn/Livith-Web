import axios from "axios";

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
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const response = await axios.post(
    `${SERVER_URL}api/v4/concerts/${concertId}/comment`,
    { content },
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
  return response.data.data;
};
