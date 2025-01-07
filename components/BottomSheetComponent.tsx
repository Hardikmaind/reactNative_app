import React, { useCallback, useRef } from 'react'
import { View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import "../global.css"

export default function BottomSheetComponent() {
    const bottomSheetRef = useRef<BottomSheet>(null);
      // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (


    <View className='flex-1 items-center justify-center'>


      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={[200,'90%']}
        
        // snap points are the points at which the bottom sheet will stop . there can be multiple snap points. i have used 2 snap points here
        enablePanDownToClose={true}   
        enableHandlePanningGesture={true}
        >
        <BottomSheetView className='items-center flex-1  justify-center '>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
        </View>
  )
}