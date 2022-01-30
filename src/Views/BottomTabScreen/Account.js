import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import {Input} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {Avatar, Accessory} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {CheckBox} from 'react-native-elements';
export default function Account({navigation}) {
  const userData = useSelector(reduxState => reduxState.login.user.user);
  const [check, setCheck] = useState(false);
  console.log('Mobile>>', userData.username);
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator>
        <View
          style={{
            flexDirection: 'column',
          }}>
          <View
            style={{
              // flexDirection: 'column',
              height: rh(45),
              backgroundColor: '#E92329',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.arrow}>
                <Icon name="arrowleft" size={25} color="#fff" />
              </View>
            </TouchableOpacity>
            <View style={styles.ppic}>
              <TouchableOpacity>
                <Avatar
                  source={require('../../Assets/profile.png')}
                  size="xlarge">
                  <Image
                    style={styles.cam}
                    source={require('../../Assets/camera.png')}
                  />
                </Avatar>
              </TouchableOpacity>

              <View style={{width: rw(70), marginBottom: 40}}>
                <TextInput
                  placeholderTextColor="#FFF"
                  value={userData.name}
                  // placeholder="Name Here"
                  style={{
                    borderBottomWidth: 1,
                    color: '#FFF',
                    fontSize: 16,
                    borderBottomColor: '#FFF',
                  }}></TextInput>
                <CheckBox
                  title="Privacy Hide"
                  checked={check}
                  onPress={() => setCheck(!check)}
                />
              </View>
            </View>
          </View>
          <View style={styles.forms}>
            <View>
              <Text style={styles.header}>Email*</Text>
              <TextInput
                style={styles.input}
                placeholder={userData.email ? userData.email : 'Enter Email'}
              />
            </View>
            <View>
              <Text style={styles.header}>Username*</Text>
              <TextInput
                style={styles.input}
                placeholder={
                  userData.username ? userData.username : 'Enter userName'
                }
              />
            </View>
            <View>
              <Text style={styles.header}>Phone*</Text>
              <TextInput
                style={styles.input}
                placeholder={
                  userData.username ? userData.username : 'Enter Phone No'
                }
              />
            </View>
            <View>
              <Text style={styles.header}>Password*</Text>
              <TextInput style={styles.input} placeholder="Enter Password" />
            </View>
            <View>
              <TouchableOpacity
                style={{
                  width: rw(50),
                  height: rh(5),
                  borderRadius: 8,
                  backgroundColor: '#E92329',
                  marginBottom: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{color: '#FFF', fontSize: rf(2), fontWeight: 'bold'}}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  stretch: {
    height: rh(40),
    width: rw(100),
  },
  arrow: {
    display: 'flex',
    padding: 25,
  },
  pic: {
    width: rw(35),
    height: rh(15),
  },
  ppic: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: rh(30),
  },
  input: {
    height: rh(5.5),
    width: rw(80),
    margin: 12,
    borderWidth: 1,

    padding: 10,
    borderColor: 'grey',
    borderRadius: 3,
  },
  forms: {
    //display: 'flex',
    // height: rh(90),
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  header: {
    paddingLeft: 15,
    paddingTop: 5,
    color: 'grey',
    fontSize: 20,
  },
  cam: {
    marginLeft: 100,
    marginTop: -50,
  },
});
