import { Icon } from "phosphor-react-native";
import React from "react";

const ICON_SIZE = 28;

interface TabIconProps {
  focused: boolean;
  color: string;
  // Phosphor icons share the same Icon type
  IconElement: Icon;
}

const TabIcon = ({ focused, color, IconElement }: TabIconProps) => {
  return (
    <IconElement
      color={color}
      size={ICON_SIZE}
      // Toggle between 'regular' (outline) and 'fill' (solid)
      weight={focused ? "fill" : "regular"}
    />
  );
};

export default TabIcon;
