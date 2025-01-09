import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageCard from "@/components/ImageCard";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpaper";
import { ThemedView } from "@/components/ThemedView";

export default function explore() {
  const wallpapers = useWallpaper();
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
              data={wallpapers}
              renderItem={({ item }) => <ImageCard wallpaper={item}/>}
              keyExtractor={(item) => item.id.toString()}
            />
          </ThemedView>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers}
              renderItem={({ item }) => <ImageCard wallpaper={item}/>}
              keyExtractor={(item) => item.id.toString()}
              />
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>
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
});



// import { View, Text, Image, StyleSheet, FlatList } from "react-native";
// import React from "react";
// import { Link } from "expo-router";
// import ParallaxScrollView from "@/components/ParallaxScrollView";
// import { SafeAreaView } from "react-native-safe-area-context";
// import ImageCard from "@/components/ImageCard";
// import { useWallpaper, Wallpaper } from "@/hooks/useWallpaper";

// export default function Explore() {
//   const wallpapers = useWallpaper();
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <ParallaxScrollView
//         headerImage={
//           <Image style={{ flex: 1 }} source={{ uri: wallpapers[0]?.url }} />
//         }
//         headerBackgroundColor={{ dark: "black", light: "white" }}
//       >
//         <FlatList
//           data={wallpapers}
//           renderItem={({ item }) => (
//             <View style={styles.itemContainer}>
//               <ImageCard wallpaper={item} />
//             </View>
//           )}
//           keyExtractor={(item) => item.id.toString()}
//           numColumns={2} // Ensures 2 items per row
//           columnWrapperStyle={styles.row} // Style for each row
//           nestedScrollEnabled={true}
//         />
//       </ParallaxScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   itemContainer: {
//     flex: 1,
//     margin: 5, // Add spacing between items
//   },
//   row: {
//     justifyContent: "space-between", // Evenly space items in a row
//   },
// });
