import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from '../BottomTabs/BottomTabs';
import HomeScreen from '../../Views/HomeScreen';
import Account from '../../Views/BottomTabScreen/Account';
import AppointmentDetails from '../../Views/Screen/AppointmentDetails';
import Appointment from '../../Views/BottomTabScreen/Appointment';
import PrivacyPolicy from '../../Views/Screen/PrivacyPolicy';
import TermCondition from '../../Views/Screen/TermCondition';
import ContactUs from '../../Views/Screen/ContactUs';
import DrawerContent from './DrawerContent';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function Drawers(props) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="BottomTabs">
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} />
      <Stack.Screen name="Appointment" component={Appointment} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="TermCondition" component={TermCondition} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
    </Drawer.Navigator>
  );
}
