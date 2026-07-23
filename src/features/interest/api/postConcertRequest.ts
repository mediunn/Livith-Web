import axiosInstance from "../../../shared/api/axiosInstance";

export interface PostConcertRequestProps {
  title: string;
  url?: string;
  autoRegister: boolean;
  requestContent?: string;
  accessToken: string;
}

export const postConcertRequest = async ({
  title,
  url,
  autoRegister,
  requestContent,
  accessToken,
}: PostConcertRequestProps) => {
  const response = await axiosInstance.post(
    "/concerts/requests",
    {
      title,
      url: url || undefined,
      autoRegister,
      requestContent: requestContent || undefined,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return response.data.data;
};
