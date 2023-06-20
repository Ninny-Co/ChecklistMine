import * as React from "react";
import { createDrawerNavigator } from 'react-navigation-drawer';

type DrawerAppStackParams = {
    Login: undefined;
    // MyOrders: undefined;
  };
  
  // Create the Drawer Stack Navigator
export const DrawerStack = createDrawerNavigator<DrawerAppStackParams>();