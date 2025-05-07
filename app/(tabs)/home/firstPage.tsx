import { Link } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function firstPage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>firstPage</Text>
      <Link href="/home/second" push asChild>
        <Button title="second" />
      </Link>
    </View>
  );
}
