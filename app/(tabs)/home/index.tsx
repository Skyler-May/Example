import { Link } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>home</Text>
      <Link href="/home/firstPage" push asChild>
        <Button title="first" />
      </Link>
    </View>
  );
}
