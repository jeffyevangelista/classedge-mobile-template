import type { JwtPayload } from "jwt-decode";
export type LoginCredentials = {
  email: string;
  password: string;
};

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
};

export type DecodedToken = JwtPayload & {
  userId?: string;
};
