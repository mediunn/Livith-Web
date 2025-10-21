import axiosInstance from "../../../shared/api/axiosInstance";

export const deleteInterestConcert = async (
  concertId: number,
  token: string
) => {
  const response = await axiosInstance.delete(`api/v4/users/interest-concert`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: { concertId },
  });

  return response.data;
};
