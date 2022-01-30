import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {
  responsiveHeight as rH,
  responsiveWidth as rW,
  responsiveFontSize as rF,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function time() {
  return (
    <>
      <View style={styles.container}>
        <Text style={{fontSize: rF(4), fontWeight: 'bold', paddingLeft: 20}}>
          Morning
        </Text>
        <View style={styles.boxes}>
          <TouchableHighlight activeOpacity={0.6} underlayColor="red">
            <View style={styles.times}>
              <Icon name="schedule" />
              <Text>08:30 AM</Text>
            </View>
          </TouchableHighlight>
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
    height: rH(18),
    width: rW(83),
  },
  boxes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  times: {
    height: rH(4),
    width: rW(22),
    padding: 5,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
});
