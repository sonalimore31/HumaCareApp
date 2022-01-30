import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Listing from '../../../Views/BottomTabScreen/Listing';
import Appointment from '../../../Views/BottomTabScreen/Appointment';
import BookingStatus from '../../../Views/Screen/BookingStatus';
import AppointmentDetails from '../../../Views/Screen/AppointmentDetails';
import DoctorDetails from '../../../Views/Screen/DoctorDetails';
const Stack = createNativeStackNavigator();
export default function ListStack() {
  return (
    // define here all Home tabs route here
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Listing" component={Listing} />
      <Stack.Screen name="Appointment" component={Appointment} />
      <Stack.Screen name="DoctorDetails" component={DoctorDetails} />
      <Stack.Screen name="BookingStatus" component={BookingStatus} />
      <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} />
    </Stack.Navigator>
  );
}
