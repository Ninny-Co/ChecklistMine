import React from 'react';
import * as linking from "expo-linking";



const Linking = {
    prefixes: [linking.makeUrl('/')],
    config: {
      screens: {
        LoginScreen: 'LoginScreen',
      },
    },
};