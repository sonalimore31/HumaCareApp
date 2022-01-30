import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Appointment from '../../../Views/BottomTabScreen/Appointment';
import BookingStatus from '../../../Views/Screen/BookingStatus';
const Stack = createNativeStackNavigator();
export default function AppointmentStack() {
  return (
    // define here all Home tabs route here
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BookingStatus" component={BookingStatus} />
      {/* <Stack.Screen name="Appointment" component={Appointment} /> */}
    </Stack.Navigator>
  );
}
