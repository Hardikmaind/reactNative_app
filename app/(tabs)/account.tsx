import { Text, SafeAreaView, Button, View, Pressable } from "react-native";
import React, { useCallback, useState } from "react";
import BottomSheetComponent from "@/components/BottomSheetComponent";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Ionicons } from "@expo/vector-icons";

export default function account() {
  const [pictureopen, SetPictureOpen] = useState(false);

  return (
    // here flex-1 is used to make the view take the whole screen
    <SafeAreaView style={{ flex: 1 }}>     
    {/* here below flex1 is used below one is the child of the above. so to take below full height we need to make parent flex1 */}
      <View style={{flex:1}}>

      <Text>Accounts</Text>
      <DownloadButton label={"sanjay"} icon="download"  />
      </View>
    </SafeAreaView>
  );
}

type DownloadButtonProps = {
  label: string;
  icon: string;
}

// function DownloadButton({label,icon}: {label: string, icon: string}){}
//! i can also define type of props like above or below. And above does not has a retunr type , so i can specify return type like below
function DownloadButton({label,icon}: DownloadButtonProps): JSX.Element {
  const theme = useColorScheme() ?? "light";
  return (
    <Pressable
      style={{
        backgroundColor: "green",
        padding: 10,
        marginVertical: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: "60%",
        flexDirection: "row",
      }}
    >
      <Ionicons
              name={"download"}
              size={24}
              color={theme === "light" ? "white" : "white"}
              // onPress={handleClose}
              style={{ marginBottom: 4 }}
            />
      <Text style={{ fontSize: 20, color: "white", fontWeight: "bold",}}>
        
        {label}
      </Text>
    </Pressable>
  );
};
