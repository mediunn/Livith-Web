import { useQuery } from "@tanstack/react-query";
import { postEntryAlerts } from "../api/notifications";

export const useEntryAlerts = (enabled: boolean) => {
  return useQuery({
    queryKey: ["entry-alerts"],
    queryFn: postEntryAlerts,
    enabled,
  });
};
