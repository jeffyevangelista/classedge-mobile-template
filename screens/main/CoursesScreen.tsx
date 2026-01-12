import AddCourseForm from "@/features/courses/AddCourseForm";
import CourseList from "@/features/courses/CourseList";
import { useStatus } from "@powersync/react-native";
import React from "react";
import { Text, View } from "react-native";
const index = () => {
  const status = useStatus();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          padding: 10,
          backgroundColor: status.connected ? "green" : "red",
        }}
      >
        <Text>Connected: {status.connected ? "Yes" : "No"}</Text>
        <Text>
          Last Synced: {status.lastSyncedAt?.toLocaleString() ?? "Never"}
        </Text>
        {/* If this stays at 0, your uploadData isn't being called */}
        <Text>Connecting: {status.connecting ? "Yes" : "No"}</Text>
      </View>

      <AddCourseForm />

      <CourseList />
    </View>
  );
};

export default index;
