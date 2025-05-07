import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Drawer
        initialRouteName="index"
        screenOptions={
          {
            // headerShown: false,
          }
        }
      >
        <Stack.Screen name="index" />
      </Drawer>
    </GestureHandlerRootView>
  );
}
