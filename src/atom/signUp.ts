import axios from "axios";
import { atom } from "recoil";

export interface sign {
  userName: string;
  password: string;
}

export const userName = atom<string | null>({
  key: "username",
  default: "",
});

export const password = atom<string | null>({
  key: "password",
  default: "",
});

export function signUp(payload: sign) {
  const URL = "https://segware-book-api.segware.io/api";
  return async () => {
    await axios
      .post(`${URL}/sign-up`, { payload })
      .then((res) => console.log(res));
  };
}
