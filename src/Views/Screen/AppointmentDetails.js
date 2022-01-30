import React,{useState,useEffect} from 'react';
// import Option from 'react-native-vector-icons/SimpleLineIcons';
// import Search from 'react-native-vector-icons/EvilIcons';
// import Filter from 'react-native-vector-icons/Feather';
import {
  View,
  useWindowDimensions,
  Text,
  TouchableOpacityBase,
  TouchableOpacity,
} from 'react-native';
import {TabView, TabBar, props, SceneMap} from 'react-native-tab-view';
import SearchBar from 'react-native-dynamic-search-bar';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Map from 'react-native-vector-icons/Feather';
import {useSelector,useDispatch} from 'react-redux'
function AppointmentDetails({navigation}) {

  const AppointmentDetails = useSelector((reduxState) => reduxState.login.appointment)
  console.log("Appointment Details>>>",AppointmentDetails)
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={{backgroundColor: '#e92329', marginBottom: 10}}>
            <View style={{marginLeft: 15, marginTop: 12}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrowleft" size={25} color="#fff" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 100,
                alignItems: 'center',
                marginTop: -40,
                marginBottom: 10,
              }}>
              <Image
                source={require('../../Assets/logo.png')}
                style={{height: 40, width: 40, marginTop: 17}}
              />
              <View>
                <Text style={{color: 'white', fontSize: 23, marginRight: 90}}>
                  Appointment Details
                </Text>
              </View>
            </View>
          </View>
          {/* <Text style={{color: 'white'}}>Book an appointment</Text> */}

          <View
            style={{
              marginLeft: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            <Text style={{fontSize: 20, marginLeft: 20}}>For</Text>
            <Text style={{fontSize: 20, marginRight: 20, color: '#e92329'}}>
             {AppointmentDetails.userName}
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              margin: 20,
            }}
          />
          <View
            style={{
              marginLeft: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 20, marginLeft: 20}}>With</Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../Assets/martin.png')}
                style={{height: 40, width: 40}}
              />
              <Text style={{fontSize: 20, marginRight: 20, color: '#e92329'}}>
              {AppointmentDetails.doctorName}
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              margin: 20,
            }}
          />
          <View
            style={{
              marginLeft: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 20, marginLeft: 20}}>On</Text>
           
            <Text style={{fontSize: 18, marginRight: 20, color: '#e92329'}}>
            {AppointmentDetails.date_Value} ,{AppointmentDetails.time}
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              margin: 20,
            }}
          />
          <View
            style={{
              marginLeft: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 20, marginLeft: 20}}>At</Text>
            <Text style={{fontSize: 20, marginRight: 20, color: '#e92329'}}>
              001 main road
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              margin: 20,
            }}
          />

          <TouchableOpacity
            style={{
              backgroundColor: '#e92329',
              height: 50,
              width: '90%',
              marginLeft: 20,
              flexDirection: 'row',
            }}>
            <Map
              name="map-pin"
              size={25}
              color="#fff"
              style={{marginLeft: 120, marginTop: 10}}
            />

            <Text
              style={{
                // textAlign: 'center',
                marginTop: 10,
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              {' '}
              Directions
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default AppointmentDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    // flexDirection: 'column',
  },
  // header: {
  //   // flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   // margin: 16,
  //   // alignItems: 'center',
  // },
  // headerText: {
  //   fontSize: 26,
  //   fontWeight: 'bold',
  // },
  // categoryBtn: {
  //   flexDirection: 'row',
  // },
  // category: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color: '#2d4379',
  // },
});
