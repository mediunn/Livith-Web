import { useMutation } from "@tanstack/react-query";
import { setPreferredArtists } from "../api/setPreferredArtists";

function useSetPreferredArtists() {
  return useMutation({
    mutationFn: (artistIds: number[]) => setPreferredArtists(artistIds),
  });
}
export default useSetPreferredArtists;
