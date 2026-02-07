import { useMutation } from "@tanstack/react-query";
import upadateUserPreferredGenres from "../api/updateUserPreferredGenres";

function useUpdateUserPreferredGenres() {
  return useMutation({
    mutationFn: (genreIds: number[]) => upadateUserPreferredGenres(genreIds),
  });
}
export default useUpdateUserPreferredGenres;
