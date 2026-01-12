import TabIcon from "@/components/TabIcon";
import { colors } from "@/utils/colors";
import { Tabs } from "expo-router";
import { Avatar, Button } from "heroui-native";
import {
  BellIcon,
  BookOpenIcon,
  CalendarBlankIcon,
  ChatsCircleIcon,
  HouseIcon,
} from "phosphor-react-native";
import { Platform } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        animation: "shift",
        headerTitleAlign: "left",
        headerRight: () => (
          <Button isIconOnly variant="ghost">
            <BellIcon color={colors.primary[500]} size={30} />
          </Button>
        ),
        tabBarInactiveTintColor: colors.primary[400],
        headerTitleStyle: {
          fontFamily: "Poppins-SemiBold",
          fontSize: Platform.OS === "ios" ? 28 : 32,
          color: "#000",
        },
        tabBarActiveTintColor: colors.primary[500],
        headerTintColor: colors.primary[500],
        tabBarLabelStyle: {
          fontFamily: "Poppins-Medium",
        },
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
          // bottom: isConnected ? 0 : 45,
        },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: colors.backgroundColor,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon focused={focused} color={color} IconElement={HouseIcon} />
          ),
          headerTitle: "Good Morning, User!",
          tabBarLabel: "Home",
          headerShown: false,
          headerLeft: () => (
            <Avatar size="sm" alt="user-profile">
              <Avatar.Image
                source={{ uri: "https://example.com/avatar.jpg" }}
              />
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>
          ),
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              focused={focused}
              color={color}
              IconElement={BookOpenIcon}
            />
          ),
          headerTitle: "Courses",
          tabBarLabel: "Courses",
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              focused={focused}
              color={color}
              IconElement={CalendarBlankIcon}
            />
          ),
          headerTitle: "Calendar",
          tabBarLabel: "Calendar",
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              focused={focused}
              color={color}
              IconElement={ChatsCircleIcon}
            />
          ),
          headerTitle: "Messages",
          tabBarLabel: "Messages",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
