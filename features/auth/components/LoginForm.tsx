import { colors } from "@/utils/colors";
import { Button, Spinner, TextField, useThemeColor } from "heroui-native";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";
import { FadeIn } from "react-native-reanimated";
import { useLogin } from "../auth.hooks";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { mutateAsync: login, isPending, isError, error } = useLogin();
  const themeColorAccentForeground = useThemeColor("accent-foreground");

  const handleLogin = async () => {
    try {
      await login({ email, password });
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View className="p-5 gap-4">
      <TextField>
        <TextField.Label>Email</TextField.Label>
        <TextField.Input
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="juandelacruz@hccci.edu.ph"
          value={email}
          onChangeText={setEmail}
        />
        <TextField.ErrorMessage>
          Please enter a valid email
        </TextField.ErrorMessage>
      </TextField>

      <View className="gap-1.5">
        <TextField>
          <TextField.Label>Password</TextField.Label>
          <TextField.Input
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          >
            <TextField.InputEndContent>
              <Button
                variant="ghost"
                isIconOnly
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
              </Button>
            </TextField.InputEndContent>
          </TextField.Input>
        </TextField>
        <TouchableOpacity className="self-end">
          <Text style={{ color: colors.primary[600] }}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <Button
        isDisabled={isPending}
        size="lg"
        className="mt-4"
        onPress={handleLogin}
      >
        {isPending ? (
          <Spinner
            entering={FadeIn.delay(50)}
            color={themeColorAccentForeground}
          />
        ) : (
          <Button.Label>Login</Button.Label>
        )}
      </Button>
    </View>
  );
};

export default LoginForm;
