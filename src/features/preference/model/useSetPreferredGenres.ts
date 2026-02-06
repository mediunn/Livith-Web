import { useMutation } from "@tanstack/react-query";
import { setPreferredGenres } from "../api/setPreferredGenres";

function useSetPreferredGenres() {
  return useMutation({
    mutationFn: (genreIds: number[]) => setPreferredGenres(genreIds),
  });
}
export default useSetPreferredGenres;
