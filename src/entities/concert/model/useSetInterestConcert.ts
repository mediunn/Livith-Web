import { useMutation } from "@tanstack/react-query";
import {
  setInterestConcert,
  SetInterestConcertProps,
} from "../api/setInterestConcert";

export const useSetInterestConcert = () => {
  return useMutation({
    mutationFn: (variables: SetInterestConcertProps) =>
      setInterestConcert(variables),
  });
};
