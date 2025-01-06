import { View, Text, Button, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";

const index = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <SafeAreaView>
      <View>
        <Text>
          this is a index page which will be a for you page and it will be
          default page
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default index;
