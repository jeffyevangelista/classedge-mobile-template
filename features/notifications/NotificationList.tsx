import { AppText } from "@/components/AppText";
import { FlashList } from "@shopify/flash-list";
import { Link } from "expo-router";
import { Avatar, Card } from "heroui-native";
import { Pressable, View } from "react-native";

type Notification = {
  id: number;
  entity_type: "material" | "assessment";
  entity_id: number;
  user_id: number;
  message: string;
  is_read: boolean;
  created_at: string;
  created_by: number;
  created_by_photo: string;
};

const notifications: Notification[] = [
  {
    id: 201,
    entity_id: 450,
    entity_type: "material",
    user_id: 42,
    message:
      "Prof. Thompson uploaded a new lecture slide: 'Advanced Thermodynamics'.",
    is_read: false,
    created_at: "2026-01-27T10:15:00Z",
    created_by: 5,
    created_by_photo:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Thompson",
  },
  {
    id: 202,
    entity_id: 992,
    entity_type: "assessment",
    user_id: 42,
    message: "Your 'Midterm Quiz - Unit 3' is now open for submissions.",
    is_read: false,
    created_at: "2026-01-27T09:00:00Z",
    created_by: 1,
    created_by_photo:
      "https://api.dicebear.com/7.x/identicon/svg?seed=SchoolAdmin",
  },
  {
    id: 203,
    entity_id: 451,
    entity_type: "material",
    user_id: 42,
    message:
      "New reading material: 'Case Study - Renewable Energy' has been added.",
    is_read: true,
    created_at: "2026-01-26T16:45:10Z",
    created_by: 5,
    created_by_photo:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Thompson",
  },
  {
    id: 204,
    entity_id: 880,
    entity_type: "assessment",
    user_id: 42,
    message: "Grade released: Your 'Final Project Proposal' has been reviewed.",
    is_read: true,
    created_at: "2026-01-25T14:20:00Z",
    created_by: 14,
    created_by_photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grader",
  },
];
const NotificationItem = ({
  entity_type,
  entity_id,
  message,
  created_by,
  created_at,
  is_read,
}: Notification) => {
  return (
    <Link
      href={
        entity_type === "material"
          ? `/material/${entity_id}`
          : `/assessment/${entity_id}`
      }
      asChild
    >
      <Pressable>
        <Card className="rounded max-w-7xl mx-auto w-full mb-1">
          <Card.Body className="flex-row items-center gap-2 justify-start">
            <Avatar alt="" size="sm"></Avatar>
            <View className="flex-1 h-full">
              <AppText
                numberOfLines={1}
                weight={is_read ? "regular" : "semibold"}
                className="text-sm flex-1"
              >
                {message}
              </AppText>
              <AppText numberOfLines={1} className="text-xs flex-1">
                {created_at}
              </AppText>
            </View>
          </Card.Body>
        </Card>
      </Pressable>
    </Link>
  );
};

const NotificationList = () => {
  return (
    <FlashList
      data={notifications}
      renderItem={({ item }) => <NotificationItem {...item} />}
    />
  );
};

export default NotificationList;
