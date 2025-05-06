import AntDesign from "@expo/vector-icons/AntDesign";
import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTitleStyle: { color: "#fff" },
        headerStyle: { backgroundColor: "#1890ff" },
        headerShadowVisible: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
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
