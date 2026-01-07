import { colors } from "@/utils/colors";
import { Button, TextField } from "heroui-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="p-5 gap-4">
      <TextField>
        <TextField.Label>Email</TextField.Label>
        <TextField.Input placeholder="Enter your email" />
      </TextField>

      <View className="gap-1.5">
        <TextField>
          <TextField.Label>Password</TextField.Label>
          <TextField.Input
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
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
      <Button className="mt-4">
        <Button.Label>Login</Button.Label>
      </Button>
    </View>
  );
};

export default LoginForm;
