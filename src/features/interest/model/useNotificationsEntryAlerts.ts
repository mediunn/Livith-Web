import { useQuery } from "@tanstack/react-query";
import { postEntryAlerts } from "../api/postNotifications";

export const useEntryAlerts = (enabled: boolean) => {
  return useQuery({
    queryKey: ["entry-alerts"],
    queryFn: postEntryAlerts,
    enabled,
  });
};
