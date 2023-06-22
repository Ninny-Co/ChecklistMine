import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import * as React from "react";
import { navigation } from "@react-navigation/native";
import { LoginScreen } from "./screen/loginScreen";
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';

import { DrawerStack } from "../navigation/drawStackParams";

const Drawer = createDrawerNavigator();

const App = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Entypo name="menu" size={24} color="black" />
      </TouchableOpacity>
      <StatusBar style="auto" />
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
