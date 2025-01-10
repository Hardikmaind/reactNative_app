import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function _layout() {
  
  return (


    //! initially below there was just two tabs.Screen still it was showing 3 tabs in the bottom of our app. because we have file based routing
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' , headerShown: false }}>
      <Tabs.Screen
        name="foryou"            // ! this name is the name of the file. so it should be same as the file name. if we change the name of the file then we have to change the name here also
        options={{
          title: 'For You',
        //   href: null,            //! if we want to disable the navigation to this tab. we can use href: null. by this we can disable the navigation to this tab
          tabBarIcon: ({ color,focused }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
        <Tabs.Screen
          name="index"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color ,focused}) => <Ionicons name={focused ? 'image-sharp' : 'image-outline'} size={24} color="black" />,
          }}
        />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
