import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Settings, CreateProduct, Cart} from '../Screens/';
import colors from '../styles/colors.js';
import {Image, Text} from 'react-native';
import imagePath from '../constants/imagePath';
import HomeStack from './HomeStack';
import CartStack from './CartStack';
import navigationStrings from '../constants/navigationStrings';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
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
      <Tab.Screen
        name={navigationStrings.CART}
        component={CartStack}
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
      <Tab.Screen
        name={navigationStrings.CREATE_PRODUCT}
        component={CreateProduct}
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
        }}
      />
      <Tab.Screen
        name="Settings3"
        component={Home}
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
        }}
      />
      <Tab.Screen
        name="Settings4"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
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
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
