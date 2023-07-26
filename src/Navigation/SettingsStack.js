import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {View, Text} from 'react-native';
import {Profile, SignOut,Settings,Myorder} from '../Screens';
import navigationStrings from '../constants/navigationStrings';

const Stack = createStackNavigator();

function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationStrings.SETTINGS} component={Settings} />
      <Stack.Screen name={navigationStrings.PROFILE} component={Profile} />
      <Stack.Screen name={navigationStrings.MY_ORDERS} component={Myorder} />
      <Stack.Screen name={navigationStrings.SIGN_OUT} component={SignOut} />
    </Stack.Navigator>
  );
}

export default SettingsStack;
