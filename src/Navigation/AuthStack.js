import React from 'react';

import {View, Text} from 'react-native';
import {Home, Login, SignUp} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import DrawerRoutes from './DrawerRoutes';

function MainStack(Stack) {
  return (
    <>
      <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
      <Stack.Screen name={navigationStrings.SIGN_UP} component={SignUp} />
    </>
  );
}

export default MainStack;
