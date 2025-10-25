import { atom } from "recoil";
import { User } from "../../../entities/user/types";

export const userState = atom<User | null>({
  key: "userState",
  default: null,
});
