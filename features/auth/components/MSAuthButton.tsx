import MsLogo from "@/assets/ms-logo.svg";
import React from "react";
import { TouchableOpacity } from "react-native";

const MSAuthButton = () => {
  return (
    <TouchableOpacity>
      <MsLogo width={32} height={32} />
    </TouchableOpacity>
  );
};

export default MSAuthButton;
