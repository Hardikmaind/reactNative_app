import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView, Text, View } from "react-native";

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
  return (
    <View>
      <Text>This is Home</Text>
    </View>
  );
}

function Liked() {
  return (
    <View>
      <Text>This is Profile </Text>
    </View>
  );
}
function Suggested() {
  return (
    <View>
      <Text>This is Suggested </Text>
    </View>
  );
}
