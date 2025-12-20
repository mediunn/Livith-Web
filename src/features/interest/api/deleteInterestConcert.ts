import axiosInstance from "../../../shared/api/axiosInstance";

export const deleteInterestConcert = async () => {
  const response = await axiosInstance.delete(
    `api/v4/users/interest-concert`,
    {}
  );

  return response.data;
};
