import {View, Text} from 'react-native';
import React from 'react';
import CustemDrawer from '../Components/CustemDrawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home} from '../Screens';
import TabRoutes from './TabRoutes';

const Drawer = createDrawerNavigator();
const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustemDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Feed" component={TabRoutes} />
      {/* <Drawer.Screen name="Article" component={Home} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
