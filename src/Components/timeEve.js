import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import {responsiveWidth} from 'react-native-responsive-dimensions/lib/commonjs';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function time() {
  return (
    <>
      <View style={styles.container}>
        <Text style={{fontSize: rf(4), fontWeight: 'bold', paddingLeft: 20}}>
          Evening
        </Text>
        <View style={styles.boxes}>
          <View style={styles.times}>
            <Icon name="schedule" />
            <Text>08:30 AM</Text>
          </View>
          <View style={styles.times}>
            <Icon name="schedule" />
            <Text>08:30 AM</Text>
          </View>
          <View style={styles.times}>
            <Icon name="schedule" />
            <Text>08:30 AM</Text>
          </View>
        </View>
        <View style={styles.boxes}>
          <View style={styles.times}>
            <Icon name="schedule" />
            <Text>08:30 AM</Text>
          </View>
          <View style={styles.times}>
            <Icon name="schedule" />
            <Text>08:30 AM</Text>
          </View>
          <View style={styles.times}>
            <Icon name="schedule" />
            <Text>08:30 AM</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: rh(18),
    width: responsiveWidth(83),
  },
  boxes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  times: {
    height: rh(4),
    width: responsiveWidth(22),
    padding: 5,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
});
