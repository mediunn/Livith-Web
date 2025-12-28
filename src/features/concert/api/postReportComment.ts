import axiosInstance from "../../../shared/api/axiosInstance";

interface PostReportCommentParams {
  id: number;
  accessToken: string;
  content?: string;
}

export async function postReportComment({
  id,
  accessToken,
  content,
}: PostReportCommentParams) {
  const response = await axiosInstance.post(
    `api/v4/comments/${id}/report`,
    { content },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
}
