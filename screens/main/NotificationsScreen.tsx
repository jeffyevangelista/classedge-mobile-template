import Screen from "@/components/screen";
import NotificationList from "@/features/notifications/NotificationList";
import { Text, View } from "react-native";

const NotificationsScreen = () => {
  return (
    <Screen>
      <NotificationList />
    </Screen>
  );
};

export default NotificationsScreen;
