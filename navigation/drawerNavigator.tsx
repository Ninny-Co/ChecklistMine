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

import LoginScreen from '../Screen/LoginScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
}
