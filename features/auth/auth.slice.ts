import { StateCreator } from "zustand";

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
  setAccessToken: (accessToken: string) => set({ accessToken }),
  setRefreshToken: (refreshToken: string) => set({ refreshToken }),
  logout: () => set({ ...initialState }),
});

export default createAuthSlice;
