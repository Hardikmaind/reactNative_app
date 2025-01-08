import { View, Text, Image } from 'react-native'
import React from 'react'
import { Wallpaper } from '@/hooks/useWallpaper'

export default function ImageCard({wallpaper}: {wallpaper: Wallpaper}) {
  return (
    <View>
      <Image source={{uri: wallpaper.url}} style={{height: 300,resizeMode:"contain"}} />
    </View>
  )
}