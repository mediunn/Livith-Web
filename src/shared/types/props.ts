import { Dispatch, SetStateAction } from "react";

export type StateWithSetter<T> = {
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
};
