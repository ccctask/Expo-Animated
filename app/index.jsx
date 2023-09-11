import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

export default function Root() {
	return (
		<SafeAreaView>
			<Text>Index Page</Text>
			<Link href="/home">Navigate to home</Link>
			<Link href="/native">Navigate to native</Link>
			<Link href="/drawer">Navigate to drawer</Link>
		</SafeAreaView>
	);
}
