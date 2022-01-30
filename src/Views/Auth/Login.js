import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import Mail from 'react-native-vector-icons/AntDesign';
import Lock from 'react-native-vector-icons/Feather';
import {setUser, setIsLogged} from '../../Redux/Slice/LoginSlice';
import ApiCalls from '../../Api/Api';
import {Config} from '../../../Config';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
const call = new ApiCalls();
const Login = ({navigation}) => {
  const [valid, setvalid] = useState(false);
  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();
  let res = [];
  const [state, setstate] = useState({
    username: '',
    password: '',
  });
  const loginHandler = async () => {
    console.log('Hello');
    setvalid(true);
    try {
      setloading(true);
      // console.log(state)
      console.log('Button Hit!!');
      const data = {
        username: state.username,
        password: state.password,
      };
      console.log('Login DATA>>', data);
      res = await call.Calls('auth/signin', 'POST', data, Config);
      console.log('login res >> ', res);
      if (res.status == 200) {
        // console.log(res)
        dispatch(setUser(res.data));
        dispatch(setIsLogged(true));
        navigation.push('Verifyotp');
        //navigation.goBack()
      } else {
        // console.log(res)
        console.log(res.msg.response.data.message);
        // alert(res.msg.response.data.message)
        alert('Wrong Username and Password');
      }
      // console.log("res", res,)
      setloading(false);
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
          <View style={{alignSelf: 'center'}}>
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
                // justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginTop: '14%',
              }}>
              <Text
                style={{
                  fontSize: rf(3.5),
                  color: '#1D2226',
                  fontWeight: '900',
                }}>
                Login
              </Text>
              <Text style={{fontSize: rf(2), color: '#707070'}}>
                Please login to your account.
              </Text>
              <View
                style={{
                  borderColor: 'grey',
                  borderWidth: 1,
                  padding: 5,
                  width: rw(80),
                  height: rh(7.6),
                  borderRadius: 45,
                  marginTop: '5%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <TextInput
                  placeholder="Phone/Email Address"
                  onChangeText={e => {
                    setstate({username: e});
                  }}
                  style={{fontSize: rf(2)}}></TextInput>
                <Mail
                  name="mail"
                  size={25}
                  style={{alignItems: 'center', alignContent: 'center'}}
                />
              </View>
              <View
                style={{
                  borderColor: 'grey',
                  borderWidth: 1,
                  padding: 4,
                  paddingLeft: 10,
                  width: rw(80),
                  height: rh(7.5),
                  borderRadius: 45,
                  marginTop: '5%',
                  // flexDirection: 'row',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  //justifyContent: 'space-around',
                }}>
                <TextInput
                  onChangeText={e => {
                    setstate({...state, password: e});
                  }}
                  placeholder="Password"
                />
                <Lock
                  name="lock"
                  size={25}
                  style={{alignItems: 'center', alignContent: 'center'}}
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                  onPress={() => loginHandler()}
                  style={{
                    borderColor: '#E93D43',
                    borderWidth: 0.5,
                    padding: 5,
                    width: rw(80),
                    height: rh(7),
                    borderRadius: 50,
                    marginTop: '5%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#E93D43',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: rf(3),
                      fontWeight: '900',
                    }}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                marginTop: '19%',
                justifyContent: 'center',
                flex: 1,
                textAlign: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>
                {' '}
                Don't have an account ?{' '}
                <Text
                  onPress={() => navigation.navigate('Register')}
                  style={{color: '#e93d43'}}>
                  Create new now!
                </Text>
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                flex: 0.9,
                marginTop: '18%',
              }}>
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  fontSize: rf(1.6),
                  textAlign: 'center',
                }}>
                By, you are agree{'\n'}
                with our{' '}
                <Text style={{textDecorationLine: 'underline'}}>
                  {' '}
                  Terms & Conditions
                </Text>
              </Text>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
};

export default Login;
