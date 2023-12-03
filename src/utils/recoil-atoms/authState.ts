import { atom } from "recoil";

interface Credentials {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export const authState = atom<{
  userCredentials: Credentials | null;
  isLoggedIn: boolean;
}>({
  key: "authState",
  default: {
    userCredentials: null,
    isLoggedIn: false,
  },
});
