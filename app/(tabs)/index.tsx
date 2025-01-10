import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageCard from "@/components/ImageCard";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpaper";
import { ThemedView } from "@/components/ThemedView";
import BottomSheetComponent from "@/components/BottomSheetComponent";

export default function explore() {
  const wallpapers = useWallpaper();
  const [selectedwallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null);
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerImage={
          <Image style={{ flex: 1 }} source={{ uri: wallpapers[0].url }} />
        }
        headerBackgroundColor={{ dark: "black", light: "white" }}
      >
        <ThemedView style={styles.container}>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_,index)=>index%2===0)}
              renderItem={({ item }) => <View style={styles.imageContainer}><ImageCard wallpaper={item} onPress={() => setSelectedWallpaper(item)} /></View>}
              keyExtractor={(item) => item.id.toString()}
            />
          </ThemedView>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_,index)=>index%2===1)}
              renderItem={({ item }) => <View style={styles.imageContainer}><ImageCard wallpaper={item} onPress={() => setSelectedWallpaper(item)}/></View>}
              keyExtractor={(item) => item.id.toString()}
              />
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>
      {selectedwallpaper && <BottomSheetComponent image={selectedwallpaper}  handleClose ={()=>setSelectedWallpaper(null)}/>}
    </SafeAreaView>
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
    paddingVertical:2
  }
});




/*
?Key Difference:

!onPress={handlefunc}:
*Passes the function reference directly.
*More efficient in performance.

!onPress={() => handlefunc}:
*Creates a new function on every render.
*Useful when additional logic or arguments are needed.

!When to Use Each:
*If no arguments are required and no additional logic is needed, prefer onPress={handlefunc}.
*If you need to pass arguments or wrap additional logic, use onPress={() => handlefunc(arg)}.

=============================================


When you use useCallback to wrap the handlefunc, the behavior changes in a way that's specifically tailored to optimize performance in React. Here's how it works and how it impacts the scenarios you mentioned earlier:

What useCallback Does
useCallback ensures that the function reference (handlefunc) remains stable across renders unless the dependencies change. This is particularly useful for optimization in React when passing functions as props to child components.

Example Code Explanation:

const handlefunc = useCallback((item: Wallpaper) => {
  setWallpaper(item); // Assuming setWallpaper is a state setter function
  console.log("image has been pressed");
}, []);
useCallback Dependency Array:
The [] means that handlefunc will never be recreated after the initial render.
If you add dependencies (e.g., [setWallpaper]), handlefunc will be recreated only when those dependencies change.
How It Affects onPress={handlefunc}
When you use useCallback and pass handlefunc directly:



!<Button onPress={handlefunc} />

Function Stability: The handlefunc reference remains stable across renders.
Performance: This avoids unnecessary re-renders of the child component (Button), as the child doesn't receive a new function reference on every parent render.
Execution: When the button is pressed, handlefunc executes with the logic you defined.
How It Affects onPress={() => handlefunc(item)}
If you wrap handlefunc in an inline arrow function:



!<Button onPress={() => handlefunc(item)} />

New Function Every Render: Even though handlefunc is stable, the arrow function creates a new function on every render.
Performance Impact: This can lead to unnecessary re-renders of the child component (Button) because React detects a new function reference.
When to Use: Use this only if you need to pass arguments to handlefunc.
Optimized Approach with Arguments
To pass arguments while keeping performance benefits, you can use useCallback to create a stable function for each specific scenario.

!Example:

const handleItemClick = useCallback(
  (item: Wallpaper) => () => {
    setWallpaper(item);
    console.log("image has been pressed");
  },
  []
);

Usage:
<Button onPress={handleItemClick(item)} />
Here:

handleItemClick(item) returns a stable function for each item.
The function remains stable as long as item doesn't change.

*/