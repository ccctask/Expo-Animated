import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
	return (
		<Drawer
			screenOptions={{
				drawerType: "slide",
				overlayColor: "transparent",
				drawerStyle: {
					flex: 1,
					width: "65%",
					padding: 20,
					backgroundColor: "transparent",
				},
				sceneContainerStyle: { backgroundColor: "transparent" },
			}}
		></Drawer>
	);
}
