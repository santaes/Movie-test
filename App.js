/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import React from 'react';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import Router from './src/navigation/Router';

LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
]);

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Router />
    </SafeAreaView>
  );
};

export default App;
