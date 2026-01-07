import { Text, TextProps } from "react-native";

// Define the available weights based on what you loaded in RootLayout
type FontWeight =
  | "thin"
  | "extraLight"
  | "light"
  | "regular"
  | "medium"
  | "semiBold"
  | "bold"
  | "extraBold"
  | "black";

interface AppTextProps extends TextProps {
  weight?: FontWeight;
  italic?: boolean;
}

export function AppText({
  style,
  weight = "regular",
  italic = false,
  ...props
}: AppTextProps) {
  // Mapping logic to match your RootLayout keys
  const getFontFamily = () => {
    // Capitalize the weight for the key (e.g., 'regular' -> 'Regular')
    const weightName = weight.charAt(0).toUpperCase() + weight.slice(1);
    const suffix = italic ? "Italic" : "";

    // This matches keys like "Poppins-Regular" or "Poppins-BoldItalic"
    return `Poppins-${weightName}${suffix}`;
  };

  return <Text style={[{ fontFamily: getFontFamily() }, style]} {...props} />;
}
