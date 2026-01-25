import axiosInstance from "../../../shared/api/axiosInstance";

export const deleteInterestConcert = async () => {
  const response = await axiosInstance.delete(`users/interest-concert`, {});

  return response.data;
};
