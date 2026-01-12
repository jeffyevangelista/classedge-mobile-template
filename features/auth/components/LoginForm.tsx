import { colors } from "@/utils/colors";
import { Button, Spinner, TextField, useThemeColor } from "heroui-native";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";
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

  // Inside LoginForm.tsx
  return (
    <View className="p-2.5 md:p-5 gap-3">
      {/* Changed gap-4 to gap-3 */}
      <TextField>
        <TextField.Label>Email</TextField.Label>
        <TextField.Input
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="juandelacruz@hccci.edu.ph"
          value={email}
          onChangeText={setEmail}
        />
        {/* UI Hack: Only show ErrorMessage if there IS an error 
         to prevent it from taking up empty space.
      */}
        {isError && (
          <TextField.ErrorMessage>
            {error?.message || "Please enter a valid email"}
          </TextField.ErrorMessage>
        )}
      </TextField>
      <View className="gap-1">
        <TextField>
          <TextField.Label>Password</TextField.Label>
          <TextField.Input
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          >
            <TextField.InputEndContent>
              {/* Ensure the icon button doesn't add extra height */}
              <Button
                variant="ghost"
                isIconOnly
                size="sm"
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeIcon size={20} color="gray" />
                ) : (
                  <EyeSlashIcon size={20} color="gray" />
                )}
              </Button>
            </TextField.InputEndContent>
          </TextField.Input>
        </TextField>
        <TouchableOpacity className="self-end py-1">
          <Text style={{ fontSize: 12, color: colors.primary[600] }}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        isDisabled={isPending}
        size="lg"
        className="mt-2" // Reduced mt-4 to mt-2
        onPress={handleLogin}
      >
        {isPending ? (
          <Spinner color={themeColorAccentForeground} />
        ) : (
          <Button.Label>Login</Button.Label>
        )}
      </Button>
    </View>
  );
};

export default LoginForm;
