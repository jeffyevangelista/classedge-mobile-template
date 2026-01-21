import Screen from "@/components/screen";
import AddCourseForm from "@/features/courses/AddCourseForm";
import CourseList from "@/features/courses/CourseList";
import { useStatus } from "@powersync/react-native";
import { Text, View } from "react-native";

const CoursesScreen = () => {
  const syncStatus = useStatus();

  // 1. Check if we are connected to the sync service
  const isConnected = syncStatus.connected;

  // 2. Check if we are currently downloading data
  // If downloadProgress exists and is not null, a sync is active
  const isDownloading = !!syncStatus.downloadProgress;

  // 3. Get the progress fraction (0 to 1)
  const progress = syncStatus.downloadProgress?.downloadedFraction ?? 0;

  return (
    <Screen className="flex-1">
      <View>
        <Text>Status: {isConnected ? "Connected" : "Offline"}</Text>
        {syncStatus.connecting && <Text>Connecting...</Text>}
        {isDownloading && (
          <Text>Downloading: {Math.round(progress * 100)}%</Text>
        )}
      </View>
      <AddCourseForm />
      <CourseList />
    </Screen>
  );
};

export default CoursesScreen;
