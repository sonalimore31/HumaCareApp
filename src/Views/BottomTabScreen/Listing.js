import React, {useState, useEffect} from 'react';

import {
  View,
  useWindowDimensions,
  Text,
  TouchableOpacityBase,
  TouchableOpacity,
} from 'react-native';
import {TabView, TabBar, props, SceneMap} from 'react-native-tab-view';
import SearchBar from 'react-native-dynamic-search-bar';
import {useSelector, useDispatch} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  Linking,
  FlatList,
} from 'react-native';
import Category from '../../Components/Category';
import CasesCards from '../../Components/CasesCards';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';

import {setDocData} from '../../Redux/Slice/LoginSlice';
const DoctorData = [
  {
    src1: require('../../Assets/doc1.png'),
    docName: 'Dr. Martin Pilier',
    docInfo: 'BDS Certified Hands on Training in Alpha',
    specialities: 'Cardiologist',
    hosp: 'Sunwave Hospital Delhi',
    src2: require('../../Assets/pic1.png'),
    src3: require('../../Assets/pic2.png'),
    src4: require('../../Assets/pic3.png'),
    src5: require('../../Assets/pic4.png'),
    experience: '12 Years Experience',
    Btn1: 'Call',
    Btn2: 'Book',
  },
  {
    src1: require('../../Assets/doc2.png'),
    docName: 'Dr. Clara',
    docInfo: 'MBBS Certified Hands on Training',
    specialities: 'Dentist',
    hosp: 'Sunwave Hospital Delhi',
    src2: require('../../Assets/pic1.png'),
    src3: require('../../Assets/pic2.png'),
    src4: require('../../Assets/pic3.png'),
    src5: require('../../Assets/pic4.png'),
    experience: '8 Years Experience',
    Btn1: 'Call',
    Btn2: 'Book',
  },
  {
    src1: require('../../Assets/doc3.png'),
    docName: 'Dr. Clara',
    docInfo: 'MBBS Certified Hands on Training',
    specialities: 'Dentist',
    hosp: 'Sunwave Hospital Delhi',
    src2: require('../../Assets/pic1.png'),
    src3: require('../../Assets/pic2.png'),
    src4: require('../../Assets/pic3.png'),
    src5: require('../../Assets/pic4.png'),
    experience: '8 Years Experience',
    Btn1: 'Call',
    Btn2: 'Book',
  },
  {
    src1: require('../../Assets/doc4.png'),
    docName: 'Dr. Clara',
    docInfo: 'MBBS Certified Hands on Training',
    specialities: 'Dentist',
    hosp: 'Sunwave Hospital Delhi',
    src2: require('../../Assets/pic1.png'),
    src3: require('../../Assets/pic2.png'),
    src4: require('../../Assets/pic3.png'),
    src5: require('../../Assets/pic4.png'),
    experience: '8 Years Experience',
    Btn1: 'Call',
    Btn2: 'Book',
  },
];

const openDialScreen = () => {
  console.log('hello');
  let number = '';
  if (Platform.OS === 'ios') {
    number = 'telprompt:${7498499090}';
  } else {
    number = 'tel:${7498499090}';
  }
  Linking.openURL(number);
};

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
function Listing({navigation}) {
  const dispatch = useDispatch();

  const docData = useSelector(reduxState => reduxState.login.allDoctors);

  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setFilteredDataSource(docData);
  }, []);
  const searchData = async text => {
    console.log('searchData', text);
    if (text) {
      const newData = docData.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      console.log('New Data>>', newData);
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(docData);
      setSearch(text);
    }
  };

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Book Appointment'},
    {key: 'second', title: 'Consult Online'},
  ]);

  const renderScene = SceneMap({
    first: Cases,
    second: TODO,
  });

  const bookAppointment = (item, index) => {
    console.log('items>>', item);
    let data = item;
    dispatch(setDocData(data));
    navigation.navigate('Appointment', {paramKey: {data}});
  };
  const doctorDeatils = (item, index) => {
    console.log('items>>', item);
    let data = item;
    navigation.navigate('DoctorDetails', {paramKey: {data}});
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View
            style={{
              backgroundColor: '#e92329',
              marginBottom: 10,
              padding: 10,
              flexDirection: 'column',
            }}>
            <View
              style={{
                flexDirection: 'row',
                // padding: 10,
                width: '55%',
                justifyContent: 'space-between',
              }}>
              <Icon name="arrowleft" size={25} color="#fff" />

              <Image
                source={require('../../Assets/logo.png')}
                style={{height: 40, width: 40}}
              />
            </View>
            <Text style={{color: 'white', fontSize: rf(3), marginTop: 10}}>
              Book an appointment
            </Text>
          </View>

          {/* <Text style={{color: 'white'}}>Book an appointment</Text> */}
          <View
            style={{
              borderRadius: 10,
              margin: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
              borderColor: '#f6f6f9',
              elevation: 8,
              shadowOffset: {width: 0, height: 5},
            }}>
            <SearchBar
              place="Search Doctor, Specialities..."
              SearchTab={true}
              onChangeText={text => searchData(text)}
              style={{
                borderColor: 'black',
                height: 35,
                margin: 10,
              }}
            />
          </View>
          <TabView
            renderTabBar={renderTabBar}
            navigationState={{index, routes}}
            renderScene={SceneMap({
              first: Cases,
              second: TODO,
            })}
            onIndexChange={setIndex}
          />
          <View style={{marginLeft: 15}}>
            <Category name="All Specialities" />
          </View>
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{}}
            renderItem={({item, index}) => (
              <View
                style={{
                  flexDirection: 'column',
                  borderRadius: 8,
                  margin: 10,
                }}>
                <TouchableOpacity
                  onPress={() => doctorDeatils(item, index)}
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Image source={require('../../Assets/doc1.png')} />
                  <View style={{flexDirection: 'column', marginLeft: 10}}>
                    <Text style={{color: '#E93D43', fontWeight: 'bold'}}>
                      {item.name}
                    </Text>

                    <Text>{item.education}</Text>
                    <Text>BDS Certified Hands on Training in Alpha</Text>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',

                    justifyContent: 'space-between',
                    padding: 5,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../Assets/pic1.png')}
                      style={{height: 20}}
                    />
                    <Image
                      source={require('../../Assets/pic2.png')}
                      style={{marginLeft: 5, height: 20}}
                    />
                    <Image
                      source={require('../../Assets/pic3.png')}
                      style={{marginLeft: 5, height: 20}}
                    />
                    <Image
                      source={require('../../Assets/pic4.png')}
                      style={{marginLeft: 5, height: 20}}
                    />
                  </View>
                  <Text style={{fontSize: rf(1.5)}}>
                    {item.experience} of Experience
                  </Text>
                  <TouchableOpacity
                    onPress={() => openDialScreen()}
                    style={{
                      borderColor: 'red',
                      borderWidth: 1,
                      width: rw(12),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: rf(1.9), color: 'red'}}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => bookAppointment(item, index)}
                    style={{
                      backgroundColor: 'red',
                      width: rw(12),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: rf(1.9), color: 'white'}}>
                      Book
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default Listing;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    // flexDirection: 'column',
  },
});
