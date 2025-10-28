import axiosInstance from "../../../shared/api/axiosInstance";

const accessToken = localStorage.getItem("accessToken");

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
  const response = await axiosInstance.get(
    `api/v4/concerts/${concertId}/comments`,
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
