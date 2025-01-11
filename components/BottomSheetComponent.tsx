import React, { useCallback, useRef } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import "../global.css"
import { Wallpaper } from '@/hooks/useWallpaper';
import { Button, Image, StyleSheet } from 'react-native';

export default function BottomSheetComponent({handleClose,image}:{handleClose :() => void,image:Wallpaper}) {     //passed the onClose callback from the parent component as a prop and wrote its type
    const bottomSheetRef = useRef<BottomSheet>(null);
      // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (




      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        // snapPoints={[600,'99%']}     //! here we can add multiple snap points
        snapPoints={['92%']}
        
        // snap points are the points at which the bottom sheet will stop . there can be multiple snap points. i have used 2 snap points here
        enablePanDownToClose={true}   
        enableHandlePanningGesture={true}
        onClose={handleClose}     
        // handleClose is the callback which will be called when the bottom sheet is closed. i have defined this in the parent component i.e in the account.tsx file
        handleIndicatorStyle={{display:"none"}}       //! here i have removed the indicator
        handleStyle={{display:"none"}}                //! here i have removed the handle}}
        style={{ borderRadius: 20,overflow:"hidden"}}  //! here i have added the borderRadius and overflow hidden to the bottom sheet}}
        >
        <BottomSheetView style={styles.contentContainer}>
          <Image style={styles.image} source={{uri:image.url}}/>
          <Button color="#841584"  title="Download"></Button>
        </BottomSheetView>
      </BottomSheet>
  )
}

const styles = StyleSheet.create({
container:{
  borderTopRightRadius:20,
  borderTopLeftRadius:20,
  backgroundColor:"red",
},

contentContainer:{
  flex:1,
  



},
image:{
  height:"60%", 
  borderTopRightRadius:20,
  borderTopLeftRadius:20,
  // resizeMode:"cover",
}
})
