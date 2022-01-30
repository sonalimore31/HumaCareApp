import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  });
  return (
    <View
      style={{
        backgroundColor: '#E93D43',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={require('../Assets/logo.png')} />
    </View>
  );
};

export default SplashScreen;
