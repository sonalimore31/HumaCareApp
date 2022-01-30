import React from 'react';
// import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

function Category(props) {
  console.log(props);
  const {name} = props;
  return (
    <>
      <TouchableHighlight activeOpacity={0.3} onPress={() => alert('Pressed!')}>
        <Text
          style={{
            // backgroundColor: 'grey',
            fontSize: 15,
            marginTop: 10,
            color: 'black',
          }}>
          {name}
        </Text>
      </TouchableHighlight>
    </>
  );
}
export default Category;
