import { AppText } from "@/components/AppText";
import { Icon } from "@/components/Icon";
import Screen from "@/components/screen";
import LogoutButton from "@/features/auth/components/LogoutButton";
import { Href, Link } from "expo-router";
import { Avatar } from "heroui-native";
import {
  BookOpenIcon,
  CalendarDotsIcon,
  IdentificationBadgeIcon,
  IdentificationCardIcon,
} from "phosphor-react-native";
import { ComponentType } from "react";
import { ScrollView, View, useWindowDimensions } from "react-native";
import { ChevronRightIcon } from "react-native-heroicons/outline";

type ProfileNavProps = {
  title: string;
  href: Href;
  icon: ComponentType<any>;
};

const profileNav: ProfileNavProps[] = [
  {
    title: "Profile Information",
    href: "/(main)/profile/profile-info",
    icon: IdentificationCardIcon,
  },
  {
    title: "Academic Records",
    href: "/(main)/profile/academic-records",
    icon: BookOpenIcon,
  },
  {
    title: "Financial Records",
    href: "/(main)/profile/financial-records",
    icon: IdentificationBadgeIcon,
  },
  {
    title: "Class Schedule",
    href: "/(main)/profile/class-schedule",
    icon: CalendarDotsIcon,
  },
];

const ProfileScreen = () => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 640;
  const isMediumScreen = width >= 640 && width < 1024;

  return (
    <Screen className="px-4 sm:px-6 md:px-8 lg:px-10">
      <ScrollView>
        <View className="flex mx-auto max-w-3xl gap-6 sm:gap-8 md:gap-10 w-full items-center py-4 sm:py-6">
          <View className="items-center">
            <View
              className={`border-4 sm:border-6 md:border-8 rounded-full border-blue-600`}
            >
              <Avatar
                className={`${isSmallScreen ? "w-28 h-28" : isMediumScreen ? "w-32 h-32" : "w-40 h-40"}`}
                alt="John Doe"
              >
                <Avatar.Image
                  source={{ uri: "https://example.com/avatar.jpg" }}
                />
                <Avatar.Fallback>JD</Avatar.Fallback>
              </Avatar>
            </View>

            <View className="items-center mt-4 sm:mt-6 md:mt-8">
              <AppText
                weight="semibold"
                className="text-xl sm:text-2xl md:text-3xl"
              >
                John Doe
              </AppText>
              <AppText className="text-xs sm:text-sm text-gray-500 leading-none">
                email
              </AppText>
              <AppText className="text-sm sm:text-md md:text-lg text-gray-500 ">
                1000000000000000
              </AppText>
            </View>
          </View>

          <View className="gap-3 sm:gap-6 w-full px-2 sm:px-0">
            {profileNav.map((item) => (
              <ProfileNav key={item.title} {...item} />
            ))}
          </View>

          <LogoutButton />
        </View>
      </ScrollView>
    </Screen>
  );
};

const ProfileNav = ({ title, href, icon }: ProfileNavProps) => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 640;

  return (
    <Link href={href}>
      <View className="px-2 sm:px-3 md:px-4  flex-row items-center gap-2 sm:gap-3 w-full max-w-full sm:max-w-md md:max-w-lg">
        <View
          className={`${isSmallScreen ? "p-2" : "p-2.5"} bg-blue-100 rounded-full`}
        >
          <Icon
            as={icon}
            size={isSmallScreen ? 18 : 20}
            className="text-blue-500"
          />
        </View>
        <AppText
          weight="semibold"
          className="text-sm sm:text-md md:text-lg flex-1"
        >
          {title}
        </AppText>
        <Icon
          as={ChevronRightIcon}
          size={isSmallScreen ? 14 : 16}
          className="text-blue-500"
        />
      </View>
    </Link>
  );
};

export default ProfileScreen;
