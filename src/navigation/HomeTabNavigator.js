/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={25} color={color} />
          ),
          headerShown: false,
          tabBarActiveTintColor: '#0000ff',
          tabBarInactiveTintColor: '#000000',
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="search1" size={25} color={color} />
          ),
          headerShown: false,
          tabBarActiveTintColor: '#0000ff',
          tabBarInactiveTintColor: '#000000',
        }}
      />

      <Tab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIcons name="user" size={35} color={color} />
          ),

          tabBarActiveTintColor: '#0000ff',
          tabBarInactiveTintColor: '#000000',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
