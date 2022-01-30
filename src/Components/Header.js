import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import Search from 'react-native-vector-icons/Feather';
const Header = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: rh(8),
        padding: 10,
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name="ios-menu" size={35} color="#E93D43" />
      </TouchableOpacity>
      <Image
        source={require('../Assets/logo.png')}
        style={{height: 40, width: 40}}></Image>
      <TouchableOpacity

        onPress={() => navigation.navigate('SearchPage')}
        style={{
          height: rh(5),
          width: rw(10),
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#E93D43',
        }}>
        <Search name="search" size={25} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
