/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeTabNavigator from './HomeTabNavigator';

import ProfileScreen from '../screens/ProfileScreen';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import TrailerScreen from '../screens/TrailerScreen/TrailerScreen';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'HomeScreen'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={'Profile'}
          component={ProfileScreen}
          options={{
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name={'Details'}
          component={DetailsScreen}
          options={{
            headerTransparent: true,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name={'Trailer'}
          component={TrailerScreen}
          options={{
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
