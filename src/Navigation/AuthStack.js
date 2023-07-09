import React from 'react';

import {View, Text} from 'react-native';
import { Home } from "../Screens";
import navigationStrings from '../constants/navigationStrings';
import DrawerRoutes from './DrawerRoutes';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screensdfghjk</Text>
    </View>
  );
}
function MainStack(Stack) {
  return (
    <>
      <Stack.Screen name={navigationStrings.DRAWER_ROUTES} component={DrawerRoutes} />
      <Stack.Screen name={navigationStrings.HOME} component={Home} />
    </>
  );
}

export default MainStack;
