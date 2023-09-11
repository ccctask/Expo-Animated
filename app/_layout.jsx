// 1. safeAreview 不能包装到 slot， 某些路由 stack，tab 都有 safeareview的特性
// 2. slot 会将将 每个直接导航 作为 页面导航， 用 index到feed 到messages， 和 从 feed 到message的行为（有退出按钮和过度动画）是不一样的。
import { Slot } from "expo-router";
export default function RootLayout() {
	return <Slot />;
}
