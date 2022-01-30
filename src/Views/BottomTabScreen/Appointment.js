import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import axios from 'axios';
import TimeEve from '../../Components/timeEve';
import TimeMor from '../../Components/TimeMor';
import CalendarStrip from 'react-native-calendar-strip';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {setAppointment} from '../../Redux/Slice/LoginSlice';
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import ApiCalls from '../../Api/Api';
import {Config} from '../../../Config';
const call = new ApiCalls();
export default function Appointment({navigation, route}) {
  const [state, setState] = useState({
    date_Value: '',
    time: '',
    userName: '',
    user_Id: '',
    doctor_id: '',
    doctorName: '',
  });

  const [backGround, setBackGround] = useState('#fff');
  const [selectedItem, setSelectedItem] = useState(null);

  const dispatch = useDispatch();
  const {data} = route.params.paramKey;
  console.log('DDDDDDDD>>>', data);
  console.log('DDDDDDDD>>>', data.name);
  const DocData = data;
  const userData = useSelector(reduxState => reduxState.login.user.user);
  const {name, _id} = userData;
  console.log('USerData>>', name, _id);
  useEffect(() => {
    setState({
      doctorName: data.name,
      doctor_id: data._id,
      user_Id: _id,
      userName: name,
    });
  }, []);

  const timingSlot = [
    '9:30am',
    '10:00am',
    '10:30am',
    '11:00am',
    '11:30am',
    '12:00pm',
    '05:30pm',
    '06:00pm',
    '06:30pm',
    '07:00pm',
    '07:30pm',
    '08:00pm',
  ];
  const selectTime = (d, i) => {
    console.log('Time and Index>>', d, i);

    setState({...state, time: d});

    console.log('TimeSlot>>', d);
  };
  console.log('State>>>', state);
  let res = [];
  const bookAppointment = async () => {
    dispatch(setAppointment(state));
    try {
      const data = {
        date_Value: state.date_Value,
        time: state.time,
        doctorName: state.doctorName,
        userName: state.userName,
        users: state.user_Id,
        doctors: state.doctor_id,
      };
      res = await call.Calls('doctorAppointment', 'POST', data, Config);

      if (res.status == 200) {
        console.log('AppointmentData>>>>', res.data);
        alert('Your Appointment Booked Successfully!!!');
      }
    } catch (error) {
      console.log('error', error);
    }

    navigation.navigate('BookingStatus');
  };
  return (
    <>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#E92329',
            flexDirection: 'column',
            height: rh(35),
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Image
              style={styles.logo}
              source={require('../../Assets/logo.png')}
            />
          </View>
          <Text
            style={{
              fontSize: rf(3.2),
              color: 'white',
              paddingLeft: 25,
              fontWeight: 'bold',
            }}>
            Book An Appointment
          </Text>
          <View style={{flexDirection: 'row', marginLeft: 25, marginTop: 10}}>
            <Image source={require('../../Assets/doc1.png')} />
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontSize: rf(2),
                  color: 'white',

                  fontWeight: 'bold',
                }}>
                {data.name}
              </Text>
              <Text style={{fontSize: rf(1.8), color: 'white'}}>
                {data.education}
              </Text>
              <Text style={{fontSize: rf(1.8), color: 'white'}}>
                {data.speciality} | {data.hospitalName}
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: rf(2),
              color: 'white',
              marginLeft: 20,
              marginTop: 10,
            }}>
            {data.experience} of Experience - ₹ 200
          </Text>
        </View>
        <View style={styles.components}>
          <CalendarStrip
            calendarHeaderStyle={styles.calendarHeaderStyle}
            onDateSelected={e => {
              console.log('DateData>>', e);
              console.log('Date>>', e._d);
              let d = moment(e._d).format('dddd, DD/MM/YYYY');
              setState({...state, date_Value: d});
            }}
            style={{height: rh(12), width: rw(89)}}
            // dateNumberStyle={{color: 'black', borderRadius: 5}}
            //       highlightDateNumberStyle={{
            //         // color: 'white',
            //         padding: 20,
            //         borderRadius: 50,
            //         backgroundColor: '#7daa2f',
            //         color: '#fff',
            //       }}

            highlightDateContainerStyle={{
              backgroundColor: '#E92329',
            }}
          />
        </View>
        <View style={{margin: 20}}>
          <View>
            <Text style={{fontSize: rf(3), fontWeight: 'bold'}}>
              Timing Slots
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              {timingSlot.map((d, i) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      selectTime(d, i);
                      setBackGround('#E92329');
                      setSelectedItem(i);
                    }}>
                    <View
                      style={{
                        height: rh(5),
                        width: rw(27),
                        padding: 5,
                        borderRadius: 3,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        backgroundColor: selectedItem == i ? '#E92329' : '#fff',
                        margin: 3,
                      }}>
                      <Icon name="schedule" size={18} />
                      <Text>{d}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* <View>
            <Text style={{fontSize: rf(3), fontWeight: 'bold', marginTop: 10}}>
              Evening
            </Text>
            <View style={styles.boxes}>
              <TouchableHighlight activeOpacity={0.6} underlayColor="red">
                <View style={styles.times}>
                  <Icon name="schedule" size={18} />
                  <Text>05:30 PM</Text>
                </View>
              </TouchableHighlight>
              <View style={styles.times}>
                <Icon name="schedule" size={18} />
                <Text>06:00 PM</Text>
              </View>
              <View style={styles.times}>
                <Icon name="schedule" size={18} />
                <Text>06:30 PM</Text>
              </View>
            </View>
            <View style={styles.boxes}>
              <View style={styles.times}>
                <Icon name="schedule" size={18} />
                <Text>07:00 PM</Text>
              </View>
              <View style={styles.times}>
                <Icon name="schedule" size={18} />
                <Text>07:30 PM</Text>
              </View>
              <View style={styles.times}>
                <Icon name="schedule" size={18} />
                <Text>08:00 PM</Text>
              </View>
            </View>
          </View> */}
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              bookAppointment();
            }}
            style={{
              backgroundColor: '#E92329',
              height: rh(6),
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
              borderRadius: 5,
              width: rw(80),
            }}>
            <Text style={{color: '#FFF', fontSize: rf(2.5)}}>
              Make An Appointment
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  stretch: {
    height: rh(40),
    width: rw(100),

    marginBottom: 30,
  },
  logoView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: rh(14),
  },
  container: {
    // borderWidth: 1,
    backgroundColor: '#f5f5f5',
    height: rh(100),
  },
  logo: {
    height: rh(8),
    width: rw(15),
    marginTop: 10,
    alignItems: 'center',
  },
  dp: {
    height: rh(12),
    width: rw(22),
    borderRadius: 2,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',

    width: rw(85),
    margin: 10,
    padding: 10,
  },
  names: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  rate: {
    display: 'flex',

    width: rw(60),
    paddingLeft: 5,
  },
  components: {
    //display: 'flex',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarHeaderStyle: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  container: {
    height: rh(18),
    width: rw(83),
  },
  boxes: {
    //  display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  times: {
    height: rh(5),
    width: rw(27),
    padding: 5,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
