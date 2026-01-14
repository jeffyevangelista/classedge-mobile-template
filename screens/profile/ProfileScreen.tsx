import { Link } from "expo-router";
import { View } from "react-native";

const ProfileScreen = () => {
  return (
    <View>
      <View className="flex mx-auto max-w-3xl gap-3">
        <Link href="/profile/profile-info">Profile Information</Link>
        <Link href="/profile/academic-records">Academic Records</Link>
        <Link href="/profile/financial-records">Financial Records</Link>
        <Link href="/profile/class-schedule">Class Schedule</Link>
      </View>
    </View>
  );
};

export default ProfileScreen;
