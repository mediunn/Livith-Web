import { useMutation } from "@tanstack/react-query";
import { setUserPreferredGenres } from "../api/setUserPreferredGenres";

function useSetUserPreferredGenres() {
  return useMutation({
    mutationFn: (genreIds: number[]) => setUserPreferredGenres(genreIds),
  });
}
export default useSetUserPreferredGenres;
