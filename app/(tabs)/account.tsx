import { Text, SafeAreaView, Button, View } from "react-native";
import React, { useState } from "react";
import BottomSheetComponent from "@/components/BottomSheetComponent";

export default function account() {
  const [pictureopen, SetPictureOpen] = useState(false);
``
  return (
    // here flex-1 is used to make the view take the whole screen
    <SafeAreaView className="flex-1">     
    {/* here below flex1 is used below one is the child of the above. so to take below full height we need to make parent flex1 */}
      <View className="flex-1 ">

      <Text>account</Text>
      <Button title="Open bottom sheet" onPress={() => SetPictureOpen(!pictureopen)} ></Button>
      {pictureopen && <BottomSheetComponent/>}
      </View>
    </SafeAreaView>
  );
}
