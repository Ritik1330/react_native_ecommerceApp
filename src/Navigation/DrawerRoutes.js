import {View, Text} from 'react-native';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home} from '../Screens';
import TabRoutes from './TabRoutes'
function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"pink"}}>
      <Text>Home Screensdfghjk</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
      <Drawer.Screen name="Feed" component={TabRoutes} />
      <Drawer.Screen name="Article" component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
