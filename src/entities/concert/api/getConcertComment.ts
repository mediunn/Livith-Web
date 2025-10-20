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
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const response = await axios.get(
    `${SERVER_URL}api/v4/concerts/${concertId}/comments`,
    {
      params: {
        cursor,
        size,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
}
