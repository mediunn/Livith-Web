import { atom } from "recoil";

export const setlistIdState = atom<number | null>({
  key: "setlistIdState",
  default: null,
});
