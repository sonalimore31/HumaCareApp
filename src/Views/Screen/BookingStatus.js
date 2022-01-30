import React from 'react';

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
import {useSelector, useDispatch} from 'react-redux';
import Category from '../../Components/Category';
import CasesCards from '../../Components/CasesCards';
import Icon from 'react-native-vector-icons/AntDesign';
import Call from 'react-native-vector-icons/Ionicons';
import Feed from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import Rupee from 'react-native-vector-icons/FontAwesome';
const DoctorData = [
  {
    src1: require('../../Assets/martin.png'),
    docName: 'Dr. Martin Pilier',
    docInfo: 'BDS Certified Hands on Training in Alpha',
    specialities: 'Cardiologist',
    hosp: 'Sunwave Hospital Delhi',
    fees: '300 fee',
    Btn1: 'Call',
    Btn2: 'Book',
  },
];

const Cases = () => (
  <View>
    <CasesCards
      caseNo="#1"
      caseDesc="Case title1"
      caseSubDesc="6 December 2021"
      color="#cdd2fd"
    />
  </View>
);

const TODO = () => (
  <View>
    <Text>TODO-Page</Text>
  </View>
);

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#e92329'}}
    style={{backgroundColor: 'white'}}
    activeColor={'#e92329'}
    inactiveColor={'black'}
    inactiveOpacity={0.5}
    activeOpacity={1.0}
  />
);
function BookingStatus({navigation, route}) {
  const layout = useWindowDimensions();

  const DocData = useSelector(state => state.login.docData);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'UPCOMING'},
    {key: 'second', title: 'PAST'},
  ]);

  const renderScene = SceneMap({
    first: Cases,
    second: TODO,
  });

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
                marginTop: -35,
                marginBottom: 10,
              }}>
              <Image
                source={require('../../Assets/logo.png')}
                style={{height: 40, width: 40, marginTop: 5}}
              />
              <View style={{marginTop: 12}}>
                <Text style={{color: 'white', fontSize: 25, marginRight: 170}}>
                  Appointments
                </Text>
              </View>
            </View>
          </View>
          {Object.keys(DocData).length !== 0 ? (
            <View>
              <TabView
                renderTabBar={renderTabBar}
                navigationState={{index, routes}}
                renderScene={SceneMap({
                  first: Cases,
                  second: TODO,
                })}
                onIndexChange={setIndex}
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  margin: 15,
                }}>
                <Text>Appointment for Self</Text>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    padding: 2,
                    width: 90,
                    height: 25,

                    backgroundColor: 'black',
                  }}>
                  <Text style={{textAlign: 'center', color: 'white'}}>
                    Cancelled
                  </Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={[DocData]}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{}}
                renderItem={({item}) => (
                  <View style={{flexDirection: 'column', margin: 10}}>
                    <View style={{flexDirection: 'row'}}>
                      <Image source={require('../../Assets/doc1.png')} />
                      <View style={{flexDirection: 'column', marginLeft: 10}}>
                        <Text style={{color: '#E93D43', fontWeight: 'bold'}}>
                          {item.name}
                        </Text>
                        <Text>{item.education}</Text>
                        <Text>{item.experience} of Experience</Text>
                        <Text>{item.email}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        margin: 10,
                        justifyContent: 'space-between',
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <Rupee name="rupee" size={15} color="#000" />
                        <Text style={{color: '#000'}}> 300 </Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                          style={{
                            borderColor: 'red',
                            borderWidth: 1,
                            width: rw(20),
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{fontSize: rf(1.9), color: 'red'}}>
                            Message
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('AppointmentDetails')
                          }
                          style={{
                            backgroundColor: 'red',
                            width: rw(20),
                            marginLeft: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{fontSize: rf(1.9), color: 'white'}}>
                            Details
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  backgroundColor: '#E93D43',
                  alignItems: 'center',
                  height: rh(8),
                }}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <Call name="ios-call" size={20} color="#FFF" />
                  <Text style={{fontSize: rf(2.5), color: '#FFF'}}> Call</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <Feed name="feedback" size={20} color="#FFF" />
                  <Text style={{fontSize: rf(2.5), color: '#FFF'}}>
                    Feedback
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <>
              <View
                style={{
                  margin: 10,
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: rf(2.5), color: '#000'}}>
                  No Appointment Booked , Please Book Your Appointment!
                </Text>
              </View>
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default BookingStatus;

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
