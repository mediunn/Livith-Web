import axiosInstance from "../../../shared/api/axiosInstance";

const accessToken = localStorage.getItem("accessToken");

export async function deleteConcertComment(id: number) {
  const response = await axiosInstance.delete(`/comments/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}
