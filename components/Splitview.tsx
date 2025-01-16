import { View, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { ThemedView } from "./ThemedView";
import ImageCard from "./ImageCard";
import { Wallpaper } from "@/hooks/useWallpaper";
import BottomSheetComponent from "./BottomSheetComponent";

export default function Splitview({ wallpapers }: { wallpapers: Wallpaper[] }) {
  const [selectedwallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(
    null
  );
  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.innerContainer}>
          <FlatList
            data={wallpapers.filter((_, index) => index % 2 === 0)}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <ImageCard
                  wallpaper={item}
                  onPress={() => setSelectedWallpaper(item)}
                />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </ThemedView>
        <ThemedView style={styles.innerContainer}>
          <FlatList
            data={wallpapers.filter((_, index) => index % 2 === 1)}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <ImageCard
                  wallpaper={item}
                  onPress={() => setSelectedWallpaper(item)}
                />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </ThemedView>
      </ThemedView>
      {selectedwallpaper && (
        <BottomSheetComponent
          image={selectedwallpaper}
          handleClose={() => setSelectedWallpaper(null)}
        />
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  innerContainer: {
    // paddingBottom: 10,
    flex: 1,
    padding: 5,
    borderRadius: 20,
  },
  imageContainer: {
    paddingVertical: 2,
  },
});
