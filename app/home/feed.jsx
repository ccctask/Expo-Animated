import { Link } from "expo-router";
import { View, Text } from "react-native";
export default function Feed() {
	return (
		<View>
			<Text>Feed screen</Text>
			<Link href="/home/messages">Navigate to messages</Link>
		</View>
	);
}
