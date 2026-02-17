import { atom } from "recoil";

export const authReadyState = atom<boolean>({
  key: "authReadyState",
  default: false,
});
