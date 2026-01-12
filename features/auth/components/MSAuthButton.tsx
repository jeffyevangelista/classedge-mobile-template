import MsLogo from "@/assets/ms-logo.svg";
// import Image from "@/components/Image";
import { Button } from "heroui-native";
import React from "react";

const MSAuthButton = () => {
  return (
    <Button isIconOnly size="lg" variant="ghost">
      <MsLogo width={32} height={32} />
    </Button>
  );
};

export default MSAuthButton;
