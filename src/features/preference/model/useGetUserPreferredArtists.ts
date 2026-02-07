import { useQuery } from "@tanstack/react-query";
import getUserPreferredArtists from "../api/getUserPreferredArtists";

function useGetUserPreferredArtists() {
  return useQuery({
    queryKey: ["userPreferredArtists"],
    queryFn: getUserPreferredArtists,
  });
}
export default useGetUserPreferredArtists;
