import AntDesign from "@expo/vector-icons/AntDesign";
import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function WalletLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTitleStyle: { color: "#fff" },
        headerStyle: { backgroundColor: "rgb(0, 0, 0)" },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "钱包",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}}>
              <AntDesign name="menu-fold" size={24} color={"#fff"} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
