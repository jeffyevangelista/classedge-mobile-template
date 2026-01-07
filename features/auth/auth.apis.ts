import { api } from "@/lib/axios";
import { LoginCredentials } from "./auth.types";

export const login = async (loginCredentials: LoginCredentials) => {
  return (await api.post("/auth/login", loginCredentials)).data;
};
