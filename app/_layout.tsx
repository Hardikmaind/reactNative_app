import { View, Text } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot, Stack } from "expo-router";

export default function _layout() {
  return (
    <GestureHandlerRootView>
      {/* <Slot /> */}
{/*  //! IF WE USED THE Stack OR Tabs, we dont have to explicitely specify the <Slot/> */}
      <Stack screenOptions={{headerShown:true}}/>          
      {/* //! HERE ABOVE I HAVE USED THE PROP WHICH HIDES THE HEADER */}
    </GestureHandlerRootView>
  );
}
