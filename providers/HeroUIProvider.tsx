import { HeroUINativeProvider } from "heroui-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function HeroUIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HeroUINativeProvider>{children}</HeroUINativeProvider>
    </GestureHandlerRootView>
  );
}
