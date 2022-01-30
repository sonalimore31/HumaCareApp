import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../Views/SplashScreen';
import Login from '../Views/Auth/Login';
import Register from '../Views/Auth/Register';
import Verifyotp from '../Views/Auth/Verifyotp';
import HomeScreen from '../Views/HomeScreen';
import BottomTabs from '../Routes/BottomTabs/BottomTabs';
import Appointment from '../Views/BottomTabScreen/Appointment';
import SearchPage from '../Views/Screen/SearchPage';
import ViewDoctor from '../Views/Screen/ViewDoctor';

import Drawers from '../Routes/Drawers/Drawers';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Verifyotp" component={Verifyotp} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="SearchPage" component={SearchPage} />

        <Stack.Screen name="ViewDoctor" component={ViewDoctor} />

        <Stack.Screen name="HomeScreen" component={Drawers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
