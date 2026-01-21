import { Button, Spinner, useThemeColor, useToast } from "heroui-native";
import React from "react";
import { useLogout } from "../auth.hooks";

const LogoutButton = () => {
  const { toast } = useToast();
  const themeColorAccentForeground = useThemeColor("accent-foreground");
  const { mutateAsync, isPending } = useLogout();

  const handleLogout = async () => {
    try {
      await mutateAsync();
    } catch (error: any) {
      toast.show({
        variant: "danger",
        label: "Logout Failed",
        description: error?.message,
      });
    }
  };

  return (
    <Button
      isDisabled={isPending}
      variant="danger-soft"
      className="w-full"
      onPress={handleLogout}
    >
      {isPending ? (
        <Spinner color={themeColorAccentForeground} />
      ) : (
        <Button.Label>Logout</Button.Label>
      )}
    </Button>
  );
};

export default LogoutButton;
