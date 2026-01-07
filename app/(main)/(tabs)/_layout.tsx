import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="subjects" />
      <Tabs.Screen name="calendar" />
      <Tabs.Screen name="notifications" />
    </Tabs>
  );
};

export default TabsLayout;
