import axios from "axios";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

type GetConcertCommentParams = {
  concertId: number;
  cursor?: string | null;
  size?: number;
};

export async function getConcertComment({
  concertId,
  cursor,
  size = 15,
}: GetConcertCommentParams) {
  const response = await axios.get(`/api/v4/concerts/${concertId}/comments`, {
    params: {
      cursor,
      size,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}
