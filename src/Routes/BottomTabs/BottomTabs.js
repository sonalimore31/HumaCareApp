import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Views/HomeScreen';
import {View, Text, TouchableOpacity} from 'react-native';
import HomeStack from '../Stacks/HomeStack/HomeStack';
import AppointmentStack from '../Stacks/AppointmentStack/AppointmentStack';
import ListStack from '../Stacks/ListStack/ListStack';
import AccountStack from '../Stacks/AccountStack/AccountStack';
import Icon from 'react-native-vector-icons/Entypo';
import Square from 'react-native-vector-icons/Fontisto';
import Person from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#E93D43',
        tabBarInactiveTintColor: '#9F9F9F',
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 5,
        },
        tabBarItemStyle: {
          marginTop: 2,
        },
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      }}
      // tabBarOptions={{
      //   keyboardHidesTabBar: true,
      //   activeTintColor: '#E93D43',
      //   inactiveTintColor: '#9F9F9F',
      //   showLabel: true,
      //   style: {height: 60},
      //   tabStyle: {marginTop: 2},
      //   labelStyle: {fontSize: 12, paddingBottom: 5},
      // }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({route}) => ({
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        })}
      />

      <Tab.Screen
        name="ListStack"
        component={ListStack}
        options={({route}) => ({
          tabBarLabel: 'List',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Square name="microsoft" size={20} color={color} />
          ),
        })}
      />

      <Tab.Screen
        name="AppointmentStack"
        component={AppointmentStack}
        options={({route}) => ({
          tabBarLabel: 'Appointment',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" size={size} color={color} />
          ),
        })}
      />

      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={({route}) => ({
          tabBarLabel: 'Account',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Person name="person" size={size} color={color} />
          ),
        })}
      />
      {/* <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Appointment" component={Appointment} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabs;
