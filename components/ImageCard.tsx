import { View, Text, Image,StyleSheet, useColorScheme, Pressable } from "react-native";
import React from "react";
import { Wallpaper } from "@/hooks/useWallpaper";
import { ThemedText } from "./ThemedText";
import { Colors } from '@/constants/Colors';
import { Ionicons } from "@expo/vector-icons";

export default function ImageCard({ wallpaper ,onPress}: { wallpaper: Wallpaper,onPress:(item:Wallpaper)=>void }) {
   const theme = useColorScheme() ?? 'light';
   const styles = createStyles(theme);
  return (
    <Pressable onPress={()=>onPress(wallpaper)} style={{ marginVertical: 5 }}>
      <Image
        source={{ uri: wallpaper.url }}
        style={styles.image}
      />
      <View style={styles.labelcontainer}>

      <ThemedText style={styles.label}>{wallpaper.title}</ThemedText>
      <View style={styles.iconStyle}>

      <Ionicons 
                name="heart"
                size={24}
                weight="medium"
                color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                
                />
      </View>
                </View>
    </Pressable>
  );
}


const createStyles=(theme: 'light' | 'dark')=>StyleSheet.create({
  
  iconStyle:{
    marginRight:10,
    marginBottom:2,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  }
  ,
  image:{
    flex:1,
    height:200,
    resizeMode:"cover",
    borderRadius:20,
  },
  label:{
    color:theme === 'light' ? Colors.light.icon : Colors.dark.icon,
  },
  labelcontainer:{
    paddingLeft:10,
    position:"absolute",
    width:"100%",
    backgroundColor:"rgba(0,0,0,0.5)",
    flexDirection:"row",
    justifyContent:"space-between",
    bottom:0,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  }

})

