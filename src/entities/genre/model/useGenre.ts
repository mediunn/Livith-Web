import { useQuery } from "@tanstack/react-query";
import getGenre from "../api/getGenre";
import { Genre } from "../types";

export function useGenre() {
  return useQuery<Genre[]>({
    queryKey: ["genres"],
    queryFn: () => getGenre(),
  });
}
