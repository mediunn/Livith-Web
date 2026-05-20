import { useQuery } from "@tanstack/react-query";
import getUserPreferredGenres from "../api/getUserPreferredGenres";

function useGetUserPreferredGenres(isLoggedIn: boolean = true) {
  return useQuery({
    queryKey: ["getUserPreferredGenres"],
    queryFn: getUserPreferredGenres,
    enabled: isLoggedIn,
  });
}

export default useGetUserPreferredGenres;
