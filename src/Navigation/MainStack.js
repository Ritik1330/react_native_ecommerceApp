import React, {useEffect} from 'react';

import {View, Text} from 'react-native';
import {Home} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import DrawerRoutes from './DrawerRoutes';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { profileRequst } from '../redux/Slice/userSlice';

function MainStack(Stack) {
  const dispatch = useDispatch();
  const {error, loading, token,user} = useSelector(state => state.user);
  useEffect(() => {
    dispatch(profileRequst());
    // console.log(user);
  }, []);

 

  // axios.defaults.headers.common['token'] =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTgyOWRkNmE4MzJmY2Y3NjBlNjk5ZiIsImlhdCI6MTY5MDAxMjUzN30.5ZZlH4M2B6e4Rr4Bz3ebcwiuH5Yg2GGkwMp68KrTvpE';

  return (
    <>
      <Stack.Screen
        name={navigationStrings.DRAWER_ROUTES}
        component={DrawerRoutes}
      />
      <Stack.Screen name={navigationStrings.HOME} component={Home} />
    </>
  );
}

export default MainStack;
