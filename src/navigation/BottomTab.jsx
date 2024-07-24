import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeStack from '../main_stack/HomeStack';
import CartStack from '../main_stack/CartStack';
import MyProfile from '../components/profile_screen/MyProfile';
import BookingStack from '../main_stack/BookingStack';
import CategoryStack from '../main_stack/CategoryStack';
import {TouchableOpacity} from 'react-native';
// import CustomTabBar from './CustomTabBar';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  const CustomTabBarButton = ({children, onPress, accessibilityState}) => {
    const isSelected = accessibilityState.selected;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: isSelected ? '#ceffa4' : 'transparent',
          borderRadius: 0, // Adjust the border radius as needed
        }}>
        {children}
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      // tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerTintColor: '#01007B',
        tabBarActiveBackgroundColor: '#ceffa4',
        tabBarStyle: {height: 55},
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" color={color} size={size} />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="BookingStack"
        component={BookingStack}
        options={{
          tabBarLabel: 'Bookings',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <AntDesign name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CategoryStack"
        component={CategoryStack}
        options={{
          tabBarLabel: 'Categories',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="category" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarBadge: 5,
          tabBarLabel: 'Cart',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <AntDesign name="shoppingcart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="You"
        component={MyProfile}
        options={{
          tabBarLabel: 'You',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
