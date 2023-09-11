import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
const flatListScrollToIndex = () => {
	const listRef = React.useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [viewPosition, setviewPosition] = useState(0.5);
	const DATA = [
		{
			id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
			title: "First Item",
		},
		{
			id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
			title: "Second Item",
		},
		{
			id: "58694a0f-3da1-471f-bd96-145571e29d72",
			title: "Third Item",
		},
		{
			id: "58694a0f-3da1-471f-2231-145571e29d72",
			title: "Four Item",
		},
		{
			id: "58694a0f-3da1-471f-1234-145571e29d72",
			title: "Five Item",
		},
		{
			id: "58694a0f-3da1-471f-1234-145571e29271",
			title: "Six Item",
		},
		{
			id: "58694a0f-3da1-471f-3234-145571e29271",
			title: "Seven Item",
		},
		{
			id: "28694a0f-3da1-471f-3234-145571e29271",
			title: "Eight Item",
		},
	];
	React.useEffect(() => {
		listRef.current?.scrollToIndex({
			index: activeIndex,
			animated: true,
			// 0.5 居中
			viewPosition: viewPosition,
		});
	}, [activeIndex, viewPosition]);
	return (
		<View className="mt-10">
			<Text className="text-red-300">flatListScrollToIndex</Text>
			<Text className="text-xs">scrollToIndex: 实现平移和Position定位</Text>
			<View className="mt-10">
				<FlatList
					ref={listRef}
					initialScrollIndex={activeIndex}
					data={DATA}
					renderItem={({ item, index }) => (
						<RenderIteam
							title={item.title}
							active={index == activeIndex}
						/>
					)}
					keyExtractor={(item) => item.id}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
				<View className="mt-6 w-full justify-around flex-row">
					<Text>{activeIndex}</Text>
					<View className="space-y-1">
						<Text>Navigate</Text>
						<View className="flex-row space-x-1">
							<TouchableOpacity
								className="p-2 bg-blue-300 w-[40px] rounded-lg"
								onPress={() => {
									if (activeIndex == 0) {
										return;
									}
									setActiveIndex(activeIndex - 1);
								}}
							>
								<MaterialIcons
									name="arrow-back"
									size={24}
									color="black"
								/>
							</TouchableOpacity>
							<TouchableOpacity
								className="p-2 bg-blue-300 w-[40px] rounded-lg"
								onPress={() => {
									if (activeIndex == DATA.length - 1) {
										return;
									}
									setActiveIndex(activeIndex + 1);
								}}
							>
								<MaterialIcons
									name="arrow-forward"
									size={24}
									color="black"
								/>
							</TouchableOpacity>
						</View>
					</View>
					<View className="space-y-2">
						<Text>Position</Text>
						<View className="flex-row space-x-1">
							<TouchableOpacity
								className="p-2 bg-blue-300 w-[40px] rounded-lg"
								onPress={() => {
									setviewPosition(0);
								}}
							>
								<MaterialIcons
									name="arrow-back"
									size={24}
									color="black"
								/>
							</TouchableOpacity>
							<TouchableOpacity
								className="p-2 bg-blue-300 w-[40px] rounded-lg"
								onPress={() => {
									setviewPosition(0.5);
								}}
							>
								<Entypo
									name="align-horizontal-middle"
									size={24}
									color="black"
								/>
							</TouchableOpacity>
							<TouchableOpacity
								className="p-2 bg-blue-300 w-[40px] rounded-lg"
								onPress={() => {
									setviewPosition(1);
								}}
							>
								<MaterialIcons
									name="arrow-forward"
									size={24}
									color="black"
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

const RenderIteam = ({ title, active }) => {
	let style = active ? "bg-green-100" : "bg-amber-200";
	return (
		<View
			className={`mx-2 px-6 py-1 border border-amber-400 rounded-xl bg-amber-1 ${style}`}
		>
			<Text className="text-xs font-bold text-neutral-400 ">{title}</Text>
		</View>
	);
};
export default flatListScrollToIndex;
