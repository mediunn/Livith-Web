import axios from "axios";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

type Cursor = {
  id: number;
  createdAt: string;
};

type GetConcertCommentParams = {
  concertId?: number | null;
  cursor?: Cursor | null;
  size?: number | null;
};

export async function getConcertComment({
  concertId,
  cursor,
  size,
}: GetConcertCommentParams) {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const response = await axios.get(
    `${SERVER_URL}api/v4/concerts/${concertId}/comments`,
    {
      params: {
        cursorId: cursor?.id,
        cursorCreatedAt: cursor?.createdAt,
        size,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data.data;
}
