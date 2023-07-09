import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../Screens/';
import colors from '../styles/colors.js';
import { Image ,Text} from 'react-native';
import imagePath from '../constants/imagePath';



const Tab = createBottomTabNavigator();





function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
        
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={imagePath.home}
              style={{
                width: size,
                height: size,
                tintColor: focused ? colors.themeColor : 'black',
              }}
            />
          ),
        }}
      />
      <Tab.Screen name="Settings" component={Home}
        options={{
          tabBarLabel: 'My Cart',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={imagePath.cart}
              style={{
                width: size,
                height: size,
                tintColor: focused ? colors.themeColor : 'black',
              }}
            />
          ),
        }}
       />
      <Tab.Screen name="Settings1" component={Home} 
        options={{
          tabBarLabel: 'Create',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={imagePath.add}
              style={{
                width: size,
                height: size,
                tintColor: focused ? colors.themeColor : 'black',
              }}
            />
          ),
        }}/>
      <Tab.Screen name="Settings3" component={Home} 
        options={{
          tabBarLabel: 'Dashbord',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={imagePath.dashboard}
              style={{
                width: size,
                height: size,
                tintColor: focused ? colors.themeColor : 'black',
              }}
            />
          ),
        }}/>
      <Tab.Screen name="Settings4" component={Home} 
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={imagePath.account}
              style={{
                width: size,
                height: size,
                tintColor: focused ? colors.themeColor : 'black',
              }}
            />
          ),
        }}/>
    </Tab.Navigator>
  );
}

export default TabRoutes;