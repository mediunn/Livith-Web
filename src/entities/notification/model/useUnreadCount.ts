import { useQuery } from "@tanstack/react-query";
import { getUnreadCount } from "../api/getUnreadCount";

export const useUnreadCount = () => {
  return useQuery({
    queryKey: ["unreadCount"],
    queryFn: getUnreadCount,
  });
};
