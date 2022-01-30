import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import {useSelector, useDispatch} from 'react-redux';
const DoctorData = [
  {
    src1: require('../../Assets/doc1.png'),
    docName: 'Dr. Martin Pilier',
    docInfo: 'BDS Certified Hands on Training in Alpha',
    specialities: 'Cardiologist',
    hosp: 'Sunwave Hospital Delhi',
    // src2: require('../../Assets/pic1.png'),
    // src3: require('../../Assets/pic2.png'),
    // src4: require('../../Assets/pic3.png'),
    // src5: require('../../Assets/pic4.png'),
    experience: '12 Years Experience',
    // Btn1: 'Call',
    // Btn2: 'Book',
  },
  {
    src1: require('../../Assets/doc2.png'),
    docName: 'Dr. Clara',
    docInfo: 'MBBS Certified Hands on Training',
    specialities: 'Dentist',
    hosp: 'Sunwave Hospital Delhi',
    // src2: require('../../Assets/pic1.png'),
    // src3: require('../../Assets/pic2.png'),
    // src4: require('../../Assets/pic3.png'),
    // src5: require('../../Assets/pic4.png'),
    experience: '8 Years Experience',
    // Btn1: 'Call',
    // Btn2: 'Book',
  },
  {
    src1: require('../../Assets/doc3.png'),
    docName: 'Dr. Sandy',
    docInfo: 'MBBS Certified Hands on Training',
    specialities: 'Dentist',
    hosp: 'Sunwave Hospital Delhi',
    // src2: require('../../Assets/pic1.png'),
    // src3: require('../../Assets/pic2.png'),
    // src4: require('../../Assets/pic3.png'),
    // src5: require('../../Assets/pic4.png'),
    experience: '8 Years Experience',
    // Btn1: 'Call',
    // Btn2: 'Book',
  },
  {
    src1: require('../../Assets/doc4.png'),
    docName: 'Dr. Jayden',
    docInfo: 'MBBS Certified Hands on Training',
    specialities: 'Dentist',
    hosp: 'Sunwave Hospital Delhi',
    // src2: require('../../Assets/pic1.png'),
    // src3: require('../../Assets/pic2.png'),
    // src4: require('../../Assets/pic3.png'),
    // src5: require('../../Assets/pic4.png'),
    experience: '8 Years Experience',
    // Btn1: 'Call',
    // Btn2: 'Book',
  },
];
const SearchPage = ({navigation}) => {
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

  return (
    <ScrollView>
      <View>
        <View
          style={{
            borderRadius: 10,
            margin: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            // borderWidth: 1,
            borderColor: '#f6f6f9',
            // shadowColor: 'black',
            elevation: 8,
            shadowOffset: {width: 0, height: 5},
          }}>
          <SearchBar
            // placeholder="Doctor, Specialities..."
            // onPress={() => alert('onPress')}
            // onChangeText={text => console.log(text)}
            // style={{
            //   // borderWidth: 2,
            //   borderColor: 'black',
            //   height: 35,
            //   margin: 10,
            // }}
            place="Search Doctor, Specialities..."
            SearchTab={true}
            onChangeText={text => searchData(text)}
          />
        </View>
        <Text style={{margin: 10, fontSize: rf(2.5)}}>Doctor,Specialities</Text>
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{}}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'column',
                borderRadius: 8,
                margin: 10,
              }}>
              <TouchableOpacity
                //   onPress={() => navigation.navigate('DoctorDetails')}
                style={{
                  flexDirection: 'row',
                }}>
                <Image source={require('../../Assets/doc1.png')} />
                <View style={{flexDirection: 'column', marginLeft: 10}}>
                  <Text style={{color: '#E93D43', fontWeight: 'bold'}}>
                    {item.name}
                  </Text>
                  <Text>
                    {item.education} | {item.speciality}
                  </Text>
                  <Text>{item.experience} of Experience</Text>
                  <Text>
                    {item.address} | {item.hospitalName}
                  </Text>
                </View>
              </TouchableOpacity>
              {/* <View
                style={{
                  flexDirection: 'row',

                  justifyContent: 'space-between',
                  padding: 5,
                }}>
                <Text style={{fontSize: rf(1.5)}}>{item.experience}</Text>
              </View> */}
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default SearchPage;
