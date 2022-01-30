import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../../Views/HomeScreen';
import ViewDoctor from '../../../Views/Screen/ViewDoctor'
import Specialists from '../../../Views/Screen/Specialists'

import TrendingTopics from '../../../Views/Screen/TrendingTopics';

const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    // define here all Home tabs route here
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ViewDoctor" component={ViewDoctor} />
      <Stack.Screen name="Specialists" component={Specialists} />
      <Stack.Screen name="TrendingTopics" component={TrendingTopics} />
    </Stack.Navigator>
  );
}
