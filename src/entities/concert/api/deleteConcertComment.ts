import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

export async function deleteConcertComment(id: number) {
  const response = await axios.delete(`${SERVER_URL}api/v4/comments/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}
