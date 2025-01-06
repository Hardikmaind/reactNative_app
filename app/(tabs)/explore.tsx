import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function explore() {
  return (
    <SafeAreaView>
      <Link href={"/accountInfo"}>
        <Text className="bg-red-600 p-2 pt-2"> accountInfo</Text>
      </Link>
      <Text>explore</Text>
    </SafeAreaView>
  );
}
