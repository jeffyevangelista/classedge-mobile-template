import { Stack } from "expo-router";
import React from "react";

const ProfileLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="index" />
			<Stack.Screen name="academic-records" />
			<Stack.Screen name="financial-records" />
			<Stack.Screen name="class-schedule" />
			<Stack.Screen name="profile-info" />
		</Stack>
	);
};

export default ProfileLayout;
