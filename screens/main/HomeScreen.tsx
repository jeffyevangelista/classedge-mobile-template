import { AppText } from "@/components/AppText";
import { Icon } from "@/components/Icon";
import Image from "@/components/Image";
import Screen from "@/components/screen";
import { colors } from "@/utils/colors";
import { FlashList } from "@shopify/flash-list";
import { Link } from "expo-router";
import { Avatar, Button, Card } from "heroui-native";
import { BellIcon, BookOpenIcon } from "phosphor-react-native";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

type PendingAssessment = {
  id: string;
  assessmentName: string;
  dueDate: string;
};

const PENDING_ASSESSMENTS: PendingAssessment[] = [
  {
    id: "pa-001",
    assessmentName: "Quarterly Financial Audit",
    dueDate: "2026-01-15",
  },
  {
    id: "pa-002",
    assessmentName: "Security Compliance Review",
    dueDate: "2026-01-20",
  },
  {
    id: "pa-003",
    assessmentName: "User Experience Heuristic Evaluation",
    dueDate: "2026-02-05",
  },
  {
    id: "pa-004",
    assessmentName: "Mid-Year Performance Feedback",
    dueDate: "2025-12-30", // Overdue example
  },
  {
    id: "pa-005",
    assessmentName: "Accessibility Standards Checklist",
    dueDate: "2026-03-12",
  },
];

const HomeScreen = () => {
  return (
    <Screen>
      <ScrollView className="pt-10">
        <View className="gap-5 w-full max-w-3xl mx-auto px-5 pt-2.5 md:p-0">
          {/* header */}
          <View className="flex flex-row justify-between">
            <Link href="/profile">
              <View className="flex flex-row items-center gap-3">
                <Avatar size="sm" alt="user-profile">
                  <Avatar.Image
                    source={{ uri: "https://example.com/avatar.jpg" }}
                  />
                  <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>
                <View>
                  <AppText numberOfLines={1} className="">
                    Good Morning,
                  </AppText>
                  <AppText
                    numberOfLines={1}
                    weight="semibold"
                    className="text-2xl leading-none"
                  >
                    User
                  </AppText>
                </View>
              </View>
            </Link>
            <Button isIconOnly variant="ghost">
              <BellIcon color={colors.primary[500]} size={30} />
            </Button>
          </View>

          {/* Current Class Card */}
          <Card
            className="max-w-3xl w-full mx-auto h-44"
            style={{ backgroundColor: colors.primary[500] }}
          ></Card>

          {/* Pending Submissions */}
          <View className="gap-2.5">
            <AppText className="text-lg">Pending Submissions</AppText>
            <FlashList
              data={PENDING_ASSESSMENTS}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Card className="w-72 md:w-80 lg:w-96 mx-1.5">
                  <Card.Body className="flex flex-row items-center gap-2.5">
                    <View className="p-2 bg-emerald-100 rounded-full">
                      <Icon
                        as={BookOpenIcon}
                        size={24}
                        className="text-emerald-500"
                      />
                    </View>
                    <View>
                      <AppText>{item.assessmentName}</AppText>
                      <AppText>{item.dueDate}</AppText>
                    </View>
                  </Card.Body>
                </Card>
              )}
            />
          </View>

          {/* My Courses */}
          <View className="gap-2.5">
            <AppText className="text-lg">My Courses</AppText>
            <View className="flex-row flex-wrap gap-2.5">
              {[1, 2, 3, 4].map((course) => (
                <Card key={course} className="flex-1 min-w-[45%] p-2">
                  {/* <Card.Body className=""> */}
                  <Image
                    contentFit="cover"
                    className="rounded-2xl overflow-hidden h-20"
                    source={{ uri: "https://picsum.photos/200/300" }}
                  />
                  <AppText weight="semibold" className="text-base mb-2">
                    Course {course}
                  </AppText>
                  <AppText className="text-sm text-gray-600">
                    Description for course {course}
                  </AppText>
                  {/* </Card.Body> */}
                </Card>
              ))}
            </View>
          </View>

          <View className="gap-2.5">
            <AppText className="text-lg">Announcements</AppText>

            <FlashList
              data={[1, 2, 3, 4]}
              renderItem={() => (
                <Card className="rounded-3x">
                  <Card.Body>
                    <AppText>Announcement</AppText>
                  </Card.Body>
                </Card>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;
