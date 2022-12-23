import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigation from '../Navigation/TabNavigation';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return <TabNavigation />;
};

export default AppStack;
