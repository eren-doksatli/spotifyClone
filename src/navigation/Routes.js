import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import LikedSongScreen from '../screens/LikedSongScreen';
import SongInfoScreen from '../screens/SongInfoScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#131624',
          shadowOpacity: 0.3,
          shadowRadius: 4,
          shadowOffset: {
            width: 0,
            height: -10,
          },
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 85,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {color: 'white', fontSize: 13, fontWeight: '500'},
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="home-sharp" color="white" size={24} />
            ) : (
              <Ionicons name="home-outline" color="white" size={24} />
            ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarLabelStyle: {color: 'white', fontSize: 13, fontWeight: '500'},
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="search-sharp" color="white" size={24} />
            ) : (
              <Ionicons name="search-outline" color="white" size={24} />
            ),
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Library',
          tabBarLabelStyle: {color: 'white', fontSize: 13, fontWeight: '500'},
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="library-sharp" color="white" size={24} />
            ) : (
              <Ionicons name="library-outline" color="white" size={24} />
            ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={BottomTabs} />
        <Stack.Screen name="Liked" component={LikedSongScreen} />
        <Stack.Screen name="Info" component={SongInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
