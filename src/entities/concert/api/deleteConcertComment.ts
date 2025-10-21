import axiosInstance from "../../../shared/api/axiosInstance";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

export async function deleteConcertComment(id: number) {
  const response = await axiosInstance.delete(`api/v4/comments/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}
