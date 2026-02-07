import { useQuery } from "@tanstack/react-query";
import getUserPreferredArtists from "../api/getUserPreferredArtists";

function useGetUserPreferredArtists(isLoggedIn: boolean) {
  return useQuery({
    queryKey: ["userPreferredArtists"],
    queryFn: getUserPreferredArtists,
    enabled: isLoggedIn,
  });
}
export default useGetUserPreferredArtists;
