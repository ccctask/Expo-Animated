import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const NativeIndex = () => {
	return (
		<>
			<Stack.Screen options={{ headerShown: false }} />
			<SafeAreaView>
				<Text>NativeIndex</Text>
				<Link href="/native/flatListScrollToIndex">
					Navigate to flatListScrollToIndex
				</Link>
			</SafeAreaView>
		</>
	);
};

export default NativeIndex;
