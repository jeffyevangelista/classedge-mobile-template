import useStore from "@/lib/store";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { useToast } from "heroui-native";
import { login } from "./auth.apis";
import { AuthResponse, LoginCredentials } from "./auth.types";

export const useLogin = () => {
  const { toast } = useToast();
  const router = useRouter();
  const { setAccessToken, setRefreshToken } = useStore.getState();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (payload: LoginCredentials) => login(payload),
    onSuccess: async (data: AuthResponse) => {
      await Promise.all([
        setAccessToken(data.accessToken),
        setRefreshToken(data.refreshToken),
      ]);
      router.replace("/(main)/(tabs)");
    },
  });
};
