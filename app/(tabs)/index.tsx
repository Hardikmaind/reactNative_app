import { View, Text, Image ,StyleSheet} from "react-native";
import React from "react";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageCard from "@/components/ImageCard";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpaper";

export default function explore() {
  const wallpapers=useWallpaper();
  return (
    <SafeAreaView style={{ flex: 1 }}>
     <ParallaxScrollView  headerImage={<Image style={{ flex: 1}} source={{ uri: wallpapers[0].url }}/>}  headerBackgroundColor={{dark: "black",light: "white"}}  >
      {wallpapers.map((wallpaper:Wallpaper) => {
        return (
          <Link key={wallpaper.id} href="/(popupSelectWallpaper)/wallpaper">
            <View style={styles.container}>
              <View style={styles.innerContainer}>
                  <ImageCard wallpaper={wallpaper} />
              </View>
              <View style={styles.innerContainer}>
                  <ImageCard wallpaper={wallpaper} />
              </View>
            </View>
          </Link>
        );
      })}


     </ParallaxScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  innerContainer: {
      flex:1,
      paddingHorizontal: 5,
      borderRadius: 20,
  }

  
  
})