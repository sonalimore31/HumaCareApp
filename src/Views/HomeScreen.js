import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../Components/Header';
import {useDispatch, useSelector} from 'react-redux';
import ApiCalls from '../Api/Api';
import {
  setAllDoctors,
  setDoctors,
  setSpecialists,
} from '../Redux/Slice/LoginSlice';
const TredingTopics = [
  {
    src: require('../Assets/Asthma.png'),
    name: 'Asthma',
  },
  {
    src: require('../Assets/Gingivitis.png'),
    name: 'Gingivitis',
  },
  {
    src: require('../Assets/Acne.png'),
    name: 'Acne',
  },
  {
    src: require('../Assets/Myopia.png'),
    name: 'Myopia',
  },
  {
    src: require('../Assets/Migrant.png'),
    name: 'Migrant',
  },
];
const DocTab = [
  {
    src1: require('../Assets/doctor1.png'),
    name: 'Dr. Martin Pilier',
    Post: 'MBBS',
    exp: '10 Year experience',
  },
  {
    src1: require('../Assets/doctor2.png'),
    name: 'Dr. Stella Kane ',
    Post: 'Senior Assistant',
    exp: '10 Year experience',
  },
  {
    src1: require('../Assets/doctor3.png'),
    name: 'Dr. Zac Wolff',
    Post: 'BDO',
    exp: '10 Year experience',
  },
  {
    src1: require('../Assets/doctor4.png'),
    name: 'Dr. Mac Jodiac',
    Post: 'BUMS',
    exp: '10 Year experience',
  },
];

const SpecTab = [
  {
    src: require('../Assets/special1.png'),
    Name: 'Dr John Yoo',
    Speciality: 'General Practitioner',
  },
  {
    src: require('../Assets/special2.png'),
    Name: 'Dr Mandy Cox',
    Speciality: 'Gynecologist',
  },
  {
    src: require('../Assets/special3.png'),
    Name: 'Dr Nate Lance',
    Speciality: 'General Practitioner',
  },
];

const HomeScreen = ({navigation}) => {
  const call = new ApiCalls();
  const dispatch = useDispatch();
  const [indexData, setIndexData] = useState({});
  const [trendingTopic, setTrendingTopic] = useState([]);
  const [doctorData, setDoctorData] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [specialist, setSpecialist] = useState([]);
  React.useEffect(() => {
    // console.log('Hello From Server');
    (async () => {
      //dispatch(setloading(true));

      const trending = await call.Calls('trending', 'GET');
      const userData = await call.Calls('admin/user', 'GET');

      console.log('trending Data>>>>:', trending.data.results);
      setTrendingTopic(trending.data.results);
      console.log('trending Data  For filter>>>', trendingTopic);

      console.log('Doctor Data>>>>:', userData.data.results);
      let Data = userData.data.results;
      const docData = Data.filter((d, i) => {
        if (d.roles == '61d6d9e94a150a86b4f64560') {
          console.log('docData filter', d);
          return d;
        } else {
          console.log('Error');
        }
      });

      console.log('Doctors>>', docData);

      dispatch(setAllDoctors(docData));

      if (docData) {
        console.log('Hello');
        let myDoctor = [];
        let myspecialist = [];
        docData.filter((d, i) => {
          if (d.doctorType == 'doctor') {
            console.log('D Values>>>', d);
            myDoctor.push(d);
            setDoctor(myDoctor);
            dispatch(setDoctors(doctor));
          } else if (d.doctorType == 'specialist') {
            myspecialist.push(d);
            setSpecialist(myspecialist);
            dispatch(setSpecialists(specialist));
          }
        });
      }

      //  dispatch(setDoctors(doctor));
      //  dispatch(setSpecialists(specialist))
    })();
  }, []);
  console.log('DDD>>', doctor);
  console.log('Specialists>>>', specialist);
  const gotoViewDoctor = (item, index) => {
    console.log('item>>', item);
    console.log('index>>', index);

    let data = item;
    setIndexData(data);
    navigation.navigate('ViewDoctor', {paramKey: {data}});
    // setToggleActionSheet(13);
    // actionSheetRef.current?.setModalVisible();
  };

  const gotoViewSpec = (item, index) => {
    console.log('item>>', item);
    console.log('index>>', index);

    let data = item;
    // setIndexData(data);
    navigation.navigate('Specialists', {paramKey: {data}});
    // setToggleActionSheet(13);
    // actionSheetRef.current?.setModalVisible();
  };

  const gotoTrendingTopic = (item, index) => {
    console.log('item>>', item);
    console.log('index>>', index);

    let data = item;
    // setIndexData(data);
    navigation.navigate('TrendingTopics', {paramKey: {data}});
    // setToggleActionSheet(13);
    // actionSheetRef.current?.setModalVisible();
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Header navigation={navigation} />
        <View
          style={{
            flexDirection: 'column',
          }}>
          <Image source={require('../Assets/homehead.png')} />
          <View style={{margin: 10}}>
            <View>
              <Text style={{fontSize: rf(2.5), color: 'black'}}>Doctors</Text>
              <FlatList
                horizontal
                data={doctor}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{}}
                renderItem={({item, index}) => (
                  <View>
                    <TouchableOpacity
                      onPress={() => gotoViewDoctor(item, index)}
                      style={{flexDirection: 'row'}}>
                      <Image
                        source={require('../Assets/doc1.png')}
                        resizeMode="cover"
                        style={{
                          height: 70,
                          width: 70,
                          borderWidth: 2,
                          borderColor: '#e92329',
                          borderRadius: 50,
                          marginLeft: 30,
                          marginTop: 10,
                        }}
                      />
                    </TouchableOpacity>
                    <View>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 12,
                          marginLeft: 20,
                          color: '#e92329',
                        }}>
                        {item.name}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 9,
                          marginLeft: 20,
                          color: 'black',
                        }}>
                        {item.education}
                      </Text>
                    </View>
                  </View>
                )}
              />

              <Text style={{fontSize: rf(2.5), color: 'black', marginTop: 5}}>
                Specialists
              </Text>

              <FlatList
                horizontal
                data={specialist}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{}}
                renderItem={({item, index}) => (
                  <View
                    style={{
                      backgroundColor: 'white',
                      height: 150,
                      width: 130,
                      padding: 10,
                      marginLeft: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 10,
                      borderRadius: 10,
                    }}>
                    <TouchableOpacity
                      onPress={() => gotoViewDoctor(item, index)}>
                      <Image
                        resizeMode="cover"
                        source={require('../Assets/special1.png')}
                      />
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 10,
                          marginLeft: 3,

                          color: '#e92329',
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 9,
                          marginLeft: 3,
                          color: 'black',
                          marginBottom: 0,
                        }}>
                        {item.education}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
              <Text style={{fontSize: rf(2.5), color: 'black', marginTop: 5}}>
                Trending Topics
              </Text>
              {/* {trendingTopics.map((d, i) => {
                return;
                <Text>d.name</Text>;
              })} */}
              <FlatList
                horizontal
                data={trendingTopic}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{}}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() => gotoTrendingTopic(item, index)}
                    style={{
                      marginLeft: 20,
                      justifyContent: 'space-around',
                      // flexDirection: 'row',
                    }}>
                    <Image
                      // source={{
                      //   uri: 'https://image.freepik.com/free-vector/medical-mask-emoji-doctor-face-design-art-trendy-communication-chat-elements-medical-virus-protection_32879-299.jpg',
                      // }}
                      source={require('../Assets/doc1.png')}
                      resizeMode="cover"
                      style={{
                        height: 70,
                        width: 70,
                        borderWidth: 2,
                        borderColor: '#e92329',
                        borderRadius: 50,
                        // marginLeft: 30,
                        marginTop: 10,
                      }}
                    />
                    <Text
                      style={{
                        color: '#E93D43',
                        marginLeft: 15,
                        fontSize: rf(1.8),
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../Assets/homefoot.png')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
