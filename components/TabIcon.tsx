// const ICON_SIZE = 28;

// const TabIcon = ({
//   focused,
//   color,
//   OutlineIcon,
//   SolidIcon,
// }: {
//   focused: boolean;
//   color: string;
//   OutlineIcon: React.ComponentType<{ color: string; size: number }>;
//   SolidIcon: React.ComponentType<{ color: string; size: number }>;
// }) => {
//   const IconComponent = focused ? SolidIcon : OutlineIcon;
//   return <IconComponent color={color} size={ICON_SIZE} />;
// };

// export default TabIcon;

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
