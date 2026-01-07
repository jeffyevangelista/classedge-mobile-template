import LoginForm from "@/features/auth/LoginForm";
import MSAuthButton from "@/features/auth/MSAuthButton";
import { colors } from "@/utils/colors";
import { Image } from "expo-image";
import React from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

const LoginScreen = () => {
  const { height } = useWindowDimensions();
  const verticalPadding = height > 800 ? 64 : 30;

  return (
    <KeyboardAwareScrollView
      showsHorizontalScrollIndicator={false}
      bottomOffset={65}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        flex: 1,
        backgroundColor: colors.backgroundColor,
      }}
    >
      <View
        className="flex-1 items-center justify-start"
        style={{ paddingTop: verticalPadding }}
      >
        <View className="w-full max-w-md px-2">
          <View className="items-center mb-10">
            <Image
              source={require("@/assets/logo.png")}
              style={{ width: 100, height: 100 }}
              contentFit="contain"
            />
            <Text className="text-2xl font-bold mt-2">
              Welcome to Classedge
            </Text>
          </View>

          <LoginForm />

          <View className="items-center gap-4 mt-12">
            <Text className="text-gray-500">or continue with</Text>
            <MSAuthButton />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
