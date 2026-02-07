import { useQuery } from "@tanstack/react-query";
import getUserPreferredGenres from "../api/getUerPreferredGenres";

function useGetUserPreferredGenres() {
  return useQuery({
    queryKey: ["getUserPreferredGenres"],
    queryFn: getUserPreferredGenres,
  });
}

export default useGetUserPreferredGenres;
