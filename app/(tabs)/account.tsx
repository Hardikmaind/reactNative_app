import {
  Text,
  SafeAreaView,
  Button,
  View,
  Pressable,
  Appearance,
  StyleSheet,
} from "react-native";
import React, { useCallback, useState } from "react";
import BottomSheetComponent from "@/components/BottomSheetComponent";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

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
      <ThemedView style={{ flex: 1 }}>
        <LoginButtons/>
        <ThemeSelector/>

      </ThemedView>
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
  const theme = useColorScheme() ?? "light";

  return (
    <Pressable
      style={{
        backgroundColor: theme,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 40,
        borderRadius: 10,
        justifyContent: "center",
        flexDirection: "row",
        gap: 4,
        borderWidth: 1,
        borderColor: theme === 'light' ? Colors.light.icon : Colors.dark.icon,
      }}
    >
      {icon}
      <ThemedText style={{ fontSize: 20,  fontWeight: "bold" }}>
        {label}
      </ThemedText>
    </Pressable>
  );
}

function Header(): JSX.Element {
  
  return (
    <ThemedView style={styles.topBar}>
      <ThemedText style={styles.textBig}>Panels</ThemedText>
      <ThemedText>Sign In to save your data</ThemedText>
    </ThemedView>
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
          color={theme === 'light' ? Colors.light.text : Colors.dark.icon}
        />
      }
    />
    <AuthButton
      label={"Google Sign-In"}
      icon={
        <Ionicons
          name="logo-google"
          size={24}
          color={theme === 'light' ? Colors.light.text : Colors.dark.icon}
        />
      }
    />
  </>;
};


function ThemeSelector(): JSX.Element {
  return <ThemedView style={styles.margin}>
      <ThemedText style={styles.textBig}>Settings</ThemedText>
      <ThemedText>Theme</ThemedText>
      <ThemedView style={styles.themeSelectorContianer}>
        <ThemeButton title={"Dark"} Selected={false}/>
        <ThemeButton title={"Light"} Selected={false}/>
        <ThemeButton title={"System"} Selected={false}/>
      </ThemedView>
  </ThemedView>
}



// const ThemeButton: React.FC<{ title: string; Selected: boolean }> = ({ title, Selected  }) => {
//   return <Pressable  style={{padding:10,borderColor:"black",borderWidth:1,borderRadius:5,flex:0.3,justifyContent:"center",alignItems:"center",backgroundColor:Selected?"black":"white"}}>
//     <ThemedText>{title}</ThemedText>
//   </Pressable>
// }

//* Below one can be written as above one, but below one is more readable

function ThemeButton({ title, Selected }: { title: string |"dark" |"light"| any; Selected: boolean }): JSX.Element {
  const theme = useColorScheme() ?? "light";

  return  <Pressable style={{padding:10,borderWidth:1,borderRadius:5,flex:0.3,justifyContent:"center",alignItems:"center",borderColor:theme==='light'?Colors.light.text:Colors.dark.text}} onPress={()=>{Appearance.setColorScheme(title.toLowerCase())}}>
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
    // margin: 10,
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
