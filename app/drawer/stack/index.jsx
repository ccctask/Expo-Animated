import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
const StackIndex = () => {
	return (
		<>
			<Stack.Screen options={{ headerShown: false }} />
			<View>
				<Text>StackIndex</Text>
				<Link href="/drawer/stack/stackone">
					<Text>to stack one</Text>
				</Link>
			</View>
		</>
	);
};

export default StackIndex;
