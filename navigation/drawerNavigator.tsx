import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import * as React from "react";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="loginScreen">
      <Stack.Screen name="loginScreen" component={loginScreen} />
    </Drawer.Navigator>
  );
}
