import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const setlistIdState = atom<number | null>({
  key: "setlistIdState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
