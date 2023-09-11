import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeIndex = () => {
	return (
		<>
			<Stack.Screen options={{ headerShown: false }} />
			<SafeAreaView>
				<Text>HomeIndex</Text>
				<Link href="/home/feed">Navigate to feed</Link>
				<Link href="/home/messages">Navigate to messages</Link>
			</SafeAreaView>
		</>
	);
};

export default HomeIndex;
