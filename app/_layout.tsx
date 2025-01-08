import { View, Text } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot, Stack } from "expo-router";
import accountInfo from "./(nobottombar)/accountInfo";

export default function _layout() {
  return (
    <GestureHandlerRootView>
      {/* <Slot /> */}
      {/*  //! IF WE USED THE Stack OR Tabs, we dont have to explicitely specify the <Slot/> */}
      <Stack screenOptions={{ headerShown: false }}>
        {/* //! HERE ABOVE I HAVE USED THE PROP WHICH HIDES THE HEADER */}
        <Stack.Screen name="(nobottombar)/accountInfo" options={{ headerShown: true,headerTitle:"My Account",headerBackTitle:"back", headerTitleAlign:"center" }} />
      </Stack>
    </GestureHandlerRootView>
  
    //* If we were yousing the React Navigation instead of Expo Router, we would have used the StackScreen and Tab.Screen instead of expo router file based routing

);
}
