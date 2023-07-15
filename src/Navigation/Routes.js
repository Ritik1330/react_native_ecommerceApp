import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const Routes = () => {
  const {error, loading, token} = useSelector(state => state.user);
  // useEffect(() => {
  //   console.log('token');
  //   console.log(loading);

  //   //  return () => {
  //   //    second
  //   //  }
  // }, [token]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {token !== null ? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
