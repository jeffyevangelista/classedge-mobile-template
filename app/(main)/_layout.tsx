import { Stack } from "expo-router";

const MainLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="course" />
      <Stack.Screen name="assessment/[assessmentId]/index" />
      <Stack.Screen name="material/[materialId]/index" />
    </Stack>
  );
};

export default MainLayout;
