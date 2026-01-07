import { AppText } from "@/components/AppText";
import LoginForm from "@/features/auth/LoginForm";
import MSAuthButton from "@/features/auth/MSAuthButton";
import { colors } from "@/utils/colors";
import { Image } from "expo-image";
import React from "react";
import { useWindowDimensions, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LoginScreen = () => {
  const { height } = useWindowDimensions();
  const verticalPadding = height > 800 ? 64 : 30;
  const insets = useSafeAreaInsets();

  const dynamicTopPadding = Math.max(insets.top + 20, height * 0.08);

  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        backgroundColor: colors.backgroundColor,
      }}
      contentContainerStyle={{
        flexGrow: 1, // Use flexGrow instead of flex: 1 for scrollability
        paddingTop: dynamicTopPadding,
        paddingBottom: insets.bottom + 20, // Handle the "home indicator" area
      }}
    >
      <View
        className="flex-1 items-center justify-start"
        style={{
          paddingTop: verticalPadding,
          backgroundColor: colors.backgroundColor,
        }}
      >
        <View className="w-full max-w-md px-2">
          <View className="items-center mb-10">
            <Image
              source={require("@/assets/logo.png")}
              style={{ width: 100, height: 100 }}
              contentFit="contain"
            />
            <AppText weight="semiBold" className="text-2xl mt-2">
              Welcome to Classedge
            </AppText>
            <AppText className="text-gray-500">
              Login to manage your classes and learning
            </AppText>
          </View>

          <LoginForm />

          <View className="items-center gap-4 mt-12">
            <AppText className="text-gray-500">or continue with</AppText>
            <MSAuthButton />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
