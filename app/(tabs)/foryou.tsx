import Splitview from "@/components/Splitview";
import { useLibraryWallpaper, useLikedWallpaper, useSuggestedWallpaper, useWallpaper } from "@/hooks/useWallpaper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function Foryou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Suggested" component={Suggested} />
    </Tab.Navigator>
  );
}

function Library() {
  const wallpaper=useLibraryWallpaper()
  return (
    <View style={styles.container}>
      <Splitview wallpapers={wallpaper} />
    </View>
  );
}

function Liked() {
  const wallpaper=useLikedWallpaper()
  return (
    <View style={styles.container}>
      <Splitview wallpapers={wallpaper} />
    </View>
  );
}
function Suggested() {
  const wallpaper=useSuggestedWallpaper()
  return (
    <View style={styles.container}>
      <Splitview wallpapers={wallpaper} />
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  }
});