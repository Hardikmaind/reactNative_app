import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, Slot, usePathname, useRouter } from "expo-router";
import "../global.css";

export default function _layout() {
    
    const pathname = usePathname();
   
  return (
    <SafeAreaView>
      <View className="bg-blue-300 h-[90%] p-2">
        <Slot />
      </View>
      <View className="bg-red-700 p-4 flex flex-row justify-around items-center fixed bottom-0 w-full">
      <Link 
        href={"/accounts"} 
        className={pathname === "/accounts" ? "bg-blue-500 text-white" : "text-white"}
      >
        <Text className="text-white">Accounts</Text>
      </Link>
      <Link 
        href={"/"} 
        className={pathname === "/" ? "bg-blue-500 text-white" : "text-white"}
      >
        <Text className="text-white">For You</Text>
      </Link>
      <Link 
        href={"/explore"} 
        className={pathname === "/explore" ? "bg-blue-500 text-white" : "text-white"}
      >
        <Text className="text-white">Explore</Text>
      </Link>
    </View>

    </SafeAreaView>
  );
}
