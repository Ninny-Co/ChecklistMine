import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { DrawerStack } from "../navigation/drawStackParams";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <NavigationContainer>
        {
          <DrawerStack.Navigator initialRouteName={"Login"}>
            <DrawerStack.Screen name="Login" component={LoginScreen} />
          </DrawerStack.Navigator>
        }
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfc",
    alignItems: "center",
    justifyContent: "center",
  },
});
