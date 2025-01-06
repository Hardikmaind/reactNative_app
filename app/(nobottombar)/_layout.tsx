import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import "../../global.css"
import { Slot, useRouter } from 'expo-router'
export default function _layout() {
  const router = useRouter()
  return (
    <SafeAreaView>
        <View>
          <Text onPress={router.back} className='text-2xl text-yellow-50 bg-purple-800'>
            go back
          </Text>
        </View>
        <Slot />
    </SafeAreaView>
  )
}