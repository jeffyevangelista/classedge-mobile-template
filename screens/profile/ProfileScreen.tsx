import LogoutButton from "@/features/auth/components/LogoutButton";
import { Link } from "expo-router";
import { View } from "react-native";

const ProfileScreen = () => {
  return (
    <View className="">
      <View className="flex mx-auto max-w-3xl gap-3 p-5 w-full items-center">
        <Link href="/profile/profile-info">Profile Information</Link>
        <Link href="/profile/academic-records">Academic Records</Link>
        <Link href="/profile/financial-records">Financial Records</Link>
        <Link href="/profile/class-schedule">Class Schedule</Link>
        <LogoutButton />
      </View>
    </View>
  );
};

export default ProfileScreen;
