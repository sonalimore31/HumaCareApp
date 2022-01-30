import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';

const Verifyotp = ({navigation}) => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator>
        <ImageBackground
          source={require('../../Assets/backgraound.png')}
          style={{
            // flex: 1,
            // flexDirection: 'column',
            height: '100%',
            // width: '100%',
          }}>
          <View style={{alignSelf: 'center'}}>
            <View
            //   style={{
            //     marginLeft: '10%',
            //     marginTop: '5%',
            //     flexDirection: 'row',
            //     justifyContent: 'space-between',
            //   }}
            >
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
                    marginTop: '1%',
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
            </View>

            <View
              style={{
                // marginLeft: '15%',
                marginTop: '20%',
                flexDirection: 'row',
                // alignItems: 'center',
                alignSelf: 'center',
                // justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: rf(3.5),
                  fontWeight: 'bold',
                  color: '#000',
                  //   alignSelf: 'center',
                  //   alignItems: 'center',
                }}>
                Verify Yourself
              </Text>
            </View>

            <View>
              <View>
                <Text
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    flexDirection: 'row',
                    // marginHorizontal: 42,
                    // marginVertical: 5,
                    color: '#1D2226',
                    fontSize: 12,
                    fontWeight: '500',
                    marginTop: `6%`,
                  }}>
                  To Complete verification please enter the code {'\n'}
                  received by SMS on{' '}
                  <Text style={{color: 'red', textDecorationLine: 'underline'}}>
                    9999999999
                  </Text>
                </Text>
              </View>

              <View
                style={{
                  // flex: 1,
                  marginTop: '10%',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    borderColor: 'grey',
                    borderWidth: 1,
                    padding: 2,
                    width: rw(80),
                    height: rh(7),
                    borderRadius: 45,
                    borderColor: '#1D2226',
                    marginTop: '5%',
                    marginBottom: '5%',
                  }}>
                  <TextInput
                    style={{marginLeft: '5%'}}
                    placeholder="Email Verification Code"
                  />
                </View>

                <View>
                  <Text
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      textAlign: 'center',
                      marginHorizontal: 42,
                      marginVertical: 5,
                      color: '#1D2226',
                      fontSize: 12,
                      fontWeight: '500',
                    }}>
                    IN Case you did not receive an SMS you can {'\n'} request
                    another one
                  </Text>
                </View>

                <Text
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginHorizontal: 100,
                    marginVertical: 12,
                    color: '#e92329',
                    fontWeight: 'bold',
                  }}>
                  Send SMS code again
                </Text>

                <View
                  style={{
                    // flexDirection: 'row',
                    // justifyContent: 'space-between',
                    marginTop: '5%',
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreen')}
                    style={{
                      borderColor: '#E93D43',
                      borderWidth: 1,
                      padding: 5,
                      width: rw(50),
                      height: rh(7),
                      borderRadius: 45,
                      marginTop: '5%',
                      // marginLeft: '4%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#E93D43',
                      marginVertical: '21%',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
};

export default Verifyotp;
