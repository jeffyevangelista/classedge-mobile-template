import { deleteSSItem, setSSItem } from "@/lib/storage/secure-storage";
import { jwtDecode } from "jwt-decode";
import type { StateCreator } from "zustand";
import type { DecodedToken } from "./auth.types";

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  expiresAt: number | null;
};

type AuthAction = {
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  logout: () => void;
};

export type AuthSlice = AuthState & AuthAction;

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  expiresAt: null,
};

const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  ...initialState,
  setAccessToken: async (accessToken: string) => {
    if (!accessToken) return;
    const { userId, exp } = jwtDecode<DecodedToken>(accessToken);

    if (!userId || !exp) return;

    await setSSItem("accessToken", accessToken);
    set({ accessToken, expiresAt: exp * 1000 });
  },
  setRefreshToken: async (refreshToken: string) => {
    await setSSItem("refreshToken", refreshToken);
    set({ refreshToken });
  },
  logout: () => {
    set({ ...initialState });
    deleteSSItem("accessToken");
    deleteSSItem("refreshToken");
  },
});

export default createAuthSlice;
