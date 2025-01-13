import React, { useCallback, useRef } from "react";
import {
  GestureHandlerRootView,
  Pressable,
} from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import "../global.css";
import { Wallpaper } from "@/hooks/useWallpaper";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

export default function BottomSheetComponent({
  handleClose,
  image,
}: {
  handleClose: () => void;
  image: Wallpaper;
}) {
  //passed the onClose callback from the parent component as a prop and wrote its type
  const bottomSheetRef = useRef<BottomSheet>(null);
  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const theme = useColorScheme() ?? "light";
  const styles = createStyles(theme);
  return (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      // snapPoints={[600,'99%']}     //! here we can add multiple snap points
      snapPoints={["92%"]}
      // snap points are the points at which the bottom sheet will stop . there can be multiple snap points. i have used 2 snap points here
      enablePanDownToClose={true}
      enableHandlePanningGesture={true}
      onClose={handleClose}
      // handleClose is the callback which will be called when the bottom sheet is closed. i have defined this in the parent component i.e in the account.tsx file
      handleIndicatorStyle={{ display: "none" }} //! here i have removed the indicator
      handleStyle={{ display: "none" }} //! here i have removed the handle}}
      style={{ borderRadius: 20, overflow: "hidden" }} //! here i have added the borderRadius and overflow hidden to the bottom sheet}}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Image style={styles.image} source={{ uri: image.url }} />
        <View style={styles.topbar}>
          <Ionicons
            name={"close"}
            size={24}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            onPress={handleClose}
          />
          <View style={styles.topbarInner}>
            <Ionicons
              name={"heart"}
              size={24}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
              onPress={handleClose}
            />
            <Ionicons
              name={"share"}
              size={24}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
              onPress={handleClose}
              style={{ paddingLeft: 10 }}
            />
          </View>
        </View>
        {/*     //! Now like i have shown in the NOTES folder. here we have applied the borderRaius to the parent container. and when i apply the overflow hidden to the parent  */}
        // !Why It Feels Like the Container is Clipped: /* ? Unlike typical View
        components, the BottomSheet is a higher-level component with multiple
        internal layers. Your applied overflow: "hidden" styling influences the
        container's visual boundaries. Since you’re working with a BottomSheet,
        it handles internal layouts dynamically, and applying overflow: "hidden"
        at the container level can create this behavior. !Children Behavior:
        ?Children are still clipped as expected because overflow: "hidden"
        propagates to their rendering as well. This means any content that
        spills outside the bounds of the BottomSheet or the styled container
        will also be clipped. */
        <View style={styles.textContainer}>
          <ThemedText style={styles.text}>{image.title}</ThemedText>
        </View>
        {/* <View style={styles.buttonStyle}>
          <Button  color={"green"} title="Download" onPress={handleClose}></Button>
        </View> */}
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DownloadButton />
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}

const DownloadButton = () => {

  const theme = useColorScheme() ?? "light";
  return (
    <Pressable
      style={{
        backgroundColor: "green",
        padding: 10,
        marginVertical: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: "60%",
        flexDirection: "row",
      }}
    >
      <Ionicons
              name={"download"}
              size={24}
              color={theme === "light" ? "white" : "white"}
              // onPress={handleClose}
            />
      <Text style={{ fontSize: 20, color: "white", fontWeight: "bold",}}>
        {" "}
        Download{" "}
      </Text>
    </Pressable>
  );
};

const createStyles = (theme: "light" | "dark") =>
  StyleSheet.create({
    container: {
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      backgroundColor: "red",
      flex: 1,
    },

    contentContainer: {
      flex: 1,
      backgroundColor:
        theme === "light" ? Colors.light.background : Colors.dark.background,
    },
    buttonStyle: {
      // position: "absolute",
      bottom: 0,
      width: "50%",
      marginTop: 20,
      alignSelf: "center",

      // borderRadius: 20,
      //! Now like i have shown in the NOTES folder. here we have applied the borderRaius to the parent container. and when i apply the overflow hidden to the parent the children are also clipped. becuase the overflow hidden is applied to the parent container and it will clip the children as well. without overflow hidden the button will not be rounded even though the parent container is rounded. so basically overflow hidden  ensures that the children are also clipped to the rounded corners of the parent container. (overflow hidden enforeces the style of the parent container to the children as well)
      borderRadius: 20,
      overflow: "hidden",
    },
    topbar: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      position: "absolute",
      padding: 10,
      justifyContent: "space-between",
    },
    topbarInner: {
      display: "flex",
      flexDirection: "row",
    },
    image: {
      height: "70%",
      // borderTopRightRadius:20,
      // borderTopLeftRadius:20,
      resizeMode: "cover",
      borderRadius: 13,
    },
    textContainer: {
      width: "100%",
    },
    text: {
      paddingTop: 20,
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
      color: theme === "light" ? Colors.light.text : Colors.dark.text,
    },
  });

/*You're correct that typically the `overflow` property is applied to a container to clip its children. However, in your code, the `overflow: "hidden"` applied to the container in the `BottomSheet`'s `style` is causing the clipping of the container itself. Let's break down why this happens:

### Why the Container is Clipping Itself:
//! 1. **Custom Shape or Rounded Corners (`borderRadius`)**:
   //? - When you use `borderRadius: 20` along with `overflow: "hidden"`, it causes the container to respect the shape defined by the `borderRadius`. This means the container's visual boundary is clipped to the rounded edges.
  //*?- If there is any part of the container that extends beyond its boundaries due to the layout or internal styling, `overflow: "hidden"` ensures that those parts are not visible.

2. **`BottomSheet` Styling**:
   - The `BottomSheet` component might internally use a wrapper for its content. When you set `style={{ borderRadius: 20, overflow: "hidden" }}`, you are modifying the entire `BottomSheet` container. The `borderRadius` creates rounded corners, and `overflow: "hidden"` ensures that the container does not extend outside those rounded corners.

### Why It Feels Like the Container is Clipped:
Unlike typical `View` components, the `BottomSheet` is a higher-level component with multiple internal layers. Your applied `overflow: "hidden"` styling influences the container's visual boundaries. Since you’re working with a `BottomSheet`, it handles internal layouts dynamically, and applying `overflow: "hidden"` at the container level can create this behavior.

### Children Behavior:
Children are still clipped as expected because `overflow: "hidden"` propagates to their rendering as well. This means any content that spills outside the bounds of the `BottomSheet` or the styled container will also be clipped.

### Solutions and Considerations:
If the clipping behavior is unintended, consider adjusting the following:
1. **Remove `overflow: "hidden"` if not required**:
   ```tsx
   style={{ borderRadius: 20 }} // Remove overflow: "hidden"
   ```
   This prevents the container itself from being clipped to the rounded corners but might allow child content to overflow.

2. **Debug Layer Boundaries**:
   Use a background color or border on the `BottomSheet` and `BottomSheetView` to better understand how the styles are affecting the layout.

3. **Ensure Proper Snap Points**:
   Ensure that the snap points in the `BottomSheet` do not conflict with your intended layout or styles.

By understanding the interplay between `borderRadius` and `overflow: "hidden"`, you can fine-tune the behavior of your `BottomSheet` to achieve the desired outcome. */
