import "@/global.css";
import RootProvider from "@/providers/RootProvider";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <RootProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
      </Stack>
      <StatusBar style="light" />
    </RootProvider>
  );
}
