import type { IconProps } from "phosphor-react-native";
import type { ComponentType } from "react";
import { withUniwind } from "uniwind";

interface ReusableIconProps extends IconProps {
  // Use ComponentType<IconProps> to match Phosphor's internal structure
  as: ComponentType<IconProps>;
  className?: string;
}

export const Icon = ({
  as: IconComponent,
  className,
  ...props
}: ReusableIconProps) => {
  // We cast the component through withUniwind
  const UniwindIcon = withUniwind(IconComponent);

  return <UniwindIcon className={className} {...props} />;
};
