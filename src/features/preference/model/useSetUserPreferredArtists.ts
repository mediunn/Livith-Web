import { useMutation } from "@tanstack/react-query";
import { setUserPreferredArtists } from "../api/setUserPreferredArtists";

function useSetUserPreferredArtists() {
  return useMutation({
    mutationFn: (artistIds: number[]) => setUserPreferredArtists(artistIds),
  });
}
export default useSetUserPreferredArtists;
