import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import Arrow from 'react-native-vector-icons/AntDesign';
import {NavigationContext} from '@react-navigation/native';
const Header2 = Props => {
  const navigation = React.useContext(NavigationContext);

  console.log('Props Navigation>>', Props.navigation, navigation);
  return (
    <View
      style={{
        flexDirection: 'row',
        height: rh(8),
        padding: 10,
        justifyContent: 'space-between',
        backgroundColor: '#E93D43',
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
        <Arrow name="arrowleft" size={30} color="#FFFF" />
      </TouchableOpacity>
      <Text style={{fontSize: rf(2.8), color: '#FFF'}}>{Props.Text}</Text>
      <Image
        source={require('../Assets/logo.png')}
        style={{height: 40, width: 40}}></Image>
    </View>
  );
};

export default Header2;
