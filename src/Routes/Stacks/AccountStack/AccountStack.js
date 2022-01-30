import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Account from '../../../Views/BottomTabScreen/Account';
const Stack = createNativeStackNavigator();
export default function AccountStack() {
  return (
    // define here all Home tabs route here
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
}
