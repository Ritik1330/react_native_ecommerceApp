import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {View, Text} from 'react-native';
import {
  Home,
  Search,
  ProductDetails,
  Cart,
  ShippingDetails,
  Confarm,
} from '../Screens';
import navigationStrings from '../constants/navigationStrings';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationStrings.CART} component={Cart} />
      <Stack.Screen name={navigationStrings.SHIPPING_INFO} component={ShippingDetails}/>
      <Stack.Screen name={navigationStrings.CONFARM} component={Confarm} />
    </Stack.Navigator>
  );
}

export default HomeStack;
