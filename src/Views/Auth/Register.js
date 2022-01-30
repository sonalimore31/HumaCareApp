import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import {setIsLogged, setUser} from '../../Redux/Slice/LoginSlice';
import {useDispatch, useSelector} from 'react-redux';
import ApiCalls from '../../Api/Api';
import {Config} from '../../../Config';
const call = new ApiCalls();
const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [state, setstate] = useState({
    username: '',
    fullName: '',
    countryCode: '',
    mobile: '',
    email: '',
    referralCode: '',
    password: '',
  });

  console.log('User State>>>', state);

  let res = [];

  const signupHandler = async () => {
    console.log('Button Hit');

    try {
      setloading(true);
      if (
        state.fullName != null &&
        state.mobile != null &&
        state.email != null &&
        state.referralCode != null &&
        state.password != null
      ) {
        const data = {
          name: state.fullName,
          countryCode: state.countryCode,
          mobile: state.mobile,
          email: state.email,
          referralCode: state.referralCode,
          password: state.password,
          roles: 'user',
        };
        console.log('DATA>>', data);
        res = await call.Calls('auth/signup', 'POST', data, Config);

        if (res.status == '200') {
          // console.log(res)
          console.log('SignUp data Server>>>', res.data);
          Alert.alert('Signup Successfully!!!!');
          dispatch(setUser(res.data));
          dispatch(setIsLogged(true));
          navigation.navigate('Login');
          // navigation.replace(route.params.screen);
        } else {
          alert(`Please Enter Valid Details!!!`);
        }
      } else {
        alert(`Please Enter All Details!!!`);
      }
    } catch (e) {
      console.log(e);
      setloading(false);
    }
  };
  return (
    <>
      <ScrollView showsVerticalScrollIndicator>
        <ImageBackground
          source={require('../../Assets/backgraound.png')}
          style={{
            flex: 1,
            resizeMode: 'cover',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Image
              source={require('../../Assets/logo.png')}
              style={{
                flexDirection: 'row',
                marginTop: '9%',
              }}
            />
            <Text
              style={{
                marginTop: '3%',
                color: 'white',
                flexDirection: 'column',
                alignItems: 'center',
                fontWeight: '500',
              }}>
              lorem ipsum dolor sit amet
            </Text>
            <Text
              style={{
                color: 'white',
                alignItems: 'center',
                flexDirection: 'column',
                fontWeight: '500',
              }}>
              lorem ipsum dolor sit amet lorem ipsum dolor
            </Text>
          </View>

          <View
            style={{
              marginTop: '14%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: rf(3.5),
                fontWeight: 'bold',
                color: '#000',
                alignSelf: 'center',
              }}>
              Verify Yourself
            </Text>
          </View>

          <View
            style={{
              borderWidth: 1,
              padding: 2,
              width: rw(80),
              height: rh(7),
              borderRadius: 45,
              borderColor: '#1D2226',
              marginTop: '3%',
            }}>
            <TextInput
              style={{marginLeft: '5%'}}
              onChangeText={e => {
                setstate({fullName: e});
              }}
              placeholder="Name"></TextInput>
          </View>

          <View
            style={{
              borderWidth: 1,
              padding: 2,
              paddingLeft: 10,
              width: rw(80),
              height: rh(7),
              borderRadius: 45,
              marginTop: '3%',
              flexDirection: 'row',
              borderColor: '#1D2226',
              //justifyContent: 'space-around',
            }}>
            <TextInput
              placeholder="Code"
              // style={{borderBottomWidth: 1}}
              value="91"
              // onChangeText={e => {
              //   setstate({...state, countryCode: e});
              // }}
            />
            <TextInput
              placeholder="Mobile Number"
              onChangeText={e => {
                setstate({...state, mobile: e});
              }}
              style={{marginLeft: 10}}
            />
          </View>

          <View
            style={{
              borderWidth: 1,
              padding: 2,
              width: rw(80),
              height: rh(7),
              borderRadius: 45,
              marginTop: '3%',
              borderColor: '#1D2226',
            }}>
            <TextInput
              style={{marginLeft: '5%'}}
              placeholder="Email"
              onChangeText={e => {
                setstate({...state, email: e});
              }}
            />
          </View>

          <View
            style={{
              borderWidth: 1,
              padding: 2,
              width: rw(80),
              height: rh(7),
              borderRadius: 45,
              marginTop: '3%',
              borderColor: '#1D2226',
            }}>
            <TextInput
              style={{marginLeft: '5%'}}
              onChangeText={e => {
                setstate({...state, referralCode: e});
              }}
              placeholder="Referral Code (optional)"
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              padding: 2,
              width: rw(80),
              height: rh(7),
              borderRadius: 45,
              marginTop: '3%',
              borderColor: '#1D2226',
            }}>
            <TextInput
              style={{marginLeft: '5%'}}
              onChangeText={e => {
                setstate({...state, password: e});
              }}
              placeholder="Password"
            />
          </View>
          <View style={{marginTop: '3%'}}>
            <Text>You receive an SMS to verify your phone identity</Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => signupHandler()}
              style={{
                marginVertical: '2%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#E93D43',
                borderWidth: 1,
                padding: 5,
                width: rw(80),
                height: rh(7),
                borderRadius: 45,
                marginTop: '3%',
                borderColor: '#E93D43',
              }}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: '6%',
              // padding: 20,
              display: 'flex',
              justifyContent: 'center',
              align: 'center',
            }}>
            <Text style={{color: 'white', alignSelf: 'center'}}>
              By signing up, you are agree with our{'\n'}
              <Text style={{textDecorationLine: 'underline'}}>
                Terms Of Service <Text> </Text>
              </Text>
              <Text>&</Text>
              <Text style={{textDecorationLine: 'underline'}}>
                <Text> </Text> Privacy Policy
              </Text>
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
};

export default Register;
