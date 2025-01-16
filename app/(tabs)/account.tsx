import {
  Text,
  SafeAreaView,
  Button,
  View,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useCallback, useState } from "react";
import BottomSheetComponent from "@/components/BottomSheetComponent";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";

export default function account() {
  const [pictureopen, SetPictureOpen] = useState(false);
  const theme = useColorScheme() ?? "light";
  return (
    // here flex-1 is used to make the view take the whole screen
    <SafeAreaView style={{ flex: 1 }}>
      {/* here below flex1 is used. below one is the child of the above. so to take below one can take full height we need to make parent flex1 */}
      <Header />
      {/* //* trying to use loginButtons as a JSX tag (<loginButtons />), but it's defined as a standalone function and not a React component.
      Fix:
      //!Rename loginButtons to follow PascalCase: React components should use PascalCase (e.g., LoginButtons) to differentiate them from standard HTML or intrinsic JSX elements.
      //?Export LoginButtons if used across files: If LoginButtons is a standalone component, ensure it's exported for reuse.
      //*Update the usage: Replace <loginButtons /> with <LoginButtons /> to correctly reference the component. */}
      <View style={{ flex: 1 }}>
        <LoginButtons/>
        <ThemeSelector/>

      </View>
    </SafeAreaView>
  );
}

type DownloadButtonProps = {
  label: string;
  icon: JSX.Element;
};

// function DownloadButton({label,icon}: {label: string, icon: string}){}
//! i can also define type of props like above or below. And above does not has a retunr type , so i can specify return type like below
function AuthButton({ label, icon }: DownloadButtonProps): JSX.Element {
  return (
    <Pressable
      style={{
        backgroundColor: "black",
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 40,
        borderRadius: 10,
        justifyContent: "center",
        flexDirection: "row",
        gap: 4,
      }}
    >
      {icon}
      <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
        {label}
      </Text>
    </Pressable>
  );
}

function Header(): JSX.Element {
  
  return (
    <View style={styles.topBar}>
      <ThemedText style={styles.textBig}>Account</ThemedText>
      <ThemedText>Sign In to save your data</ThemedText>
    </View>
  );
}



/*The error "Property 'loginButtons' does not exist on type 'JSX.IntrinsicElements'" occurs because you're trying to use loginButtons as a JSX tag (<loginButtons />), but it's defined as a standalone function and not a React component.

Fix:
Rename loginButtons to follow PascalCase: React components should use PascalCase (e.g., LoginButtons) to differentiate them from standard HTML or intrinsic JSX elements.

Export LoginButtons if used across files: If LoginButtons is a standalone component, ensure it's exported for reuse.

Update the usage: Replace <loginButtons /> with <LoginButtons /> to correctly reference the component. */
// ! TO USE IT LIKE A REACT COMPONENET, WE NEED TO USE <LoginButtons /> INSTEAD OF <loginButtons />, WE NEED TO FOLLOW THE REACT COMPONENT NAMING CONVENTION, JUST RETURNING A <></> (jsx fragment) FROM A FUNCTION DOES NOT MAKE IT A REACT COMPONENT
const LoginButtons: React.FC  = ()=> {          
  const theme = useColorScheme() ?? "light";
 return <>
    <AuthButton
      label={"Apple Sign-In"}
      icon={
        <Ionicons
          name="logo-apple"
          size={24}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
        />
      }
    />
    <AuthButton
      label={"Google Sign-In"}
      icon={
        <Ionicons
          name="logo-google"
          size={24}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
        />
      }
    />
  </>;
};


function ThemeSelector(): JSX.Element {
  return <View style={styles.margin}>
      <ThemedText style={styles.textBig}>Settings</ThemedText>
      <ThemedText>Theme</ThemedText>
      <View style={styles.themeSelectorContianer}>
        <ThemeButton title={"Dark"} Selected={false}/>
        <ThemeButton title={"Light"} Selected={false}/>
        <ThemeButton title={"System"} Selected={false}/>
      </View>
  </View>
}



// const ThemeButton: React.FC<{ title: string; Selected: boolean }> = ({ title, Selected  }) => {
//   return <Pressable  style={{padding:10,borderColor:"black",borderWidth:1,borderRadius:5,flex:0.3,justifyContent:"center",alignItems:"center",backgroundColor:Selected?"black":"white"}}>
//     <ThemedText>{title}</ThemedText>
//   </Pressable>
// }

//* Below one can be written as above one, but below one is more readable

function ThemeButton({ title, Selected }: { title: string; Selected: boolean }): JSX.Element {
  return  <Pressable style={{padding:10,borderColor:"black",borderWidth:1,borderRadius:5,flex:0.3,justifyContent:"center",alignItems:"center",backgroundColor:Selected?"black":"white"}}>
            <ThemedText style={{width:"100%",textAlign:"center"}}>{title}</ThemedText>
        </Pressable>
 
}


const styles = StyleSheet.create({
  textBig: {
    fontSize: 25,
    fontWeight: "bold",
  },
  topBar: {
    padding: 20,
    margin: 10,
  },
  themeSelectorContianer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:10,  
  },
  themeSelectorChild:{
    // flex:0.33,
  },
  margin:{
    padding: 20,
  }
});
