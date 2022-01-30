import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import Header2 from '../../Components/Header2';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import ApiCalls from '../../Api/Api';
import {Config} from '../../../Config';
import {useSelector, useDispatch} from 'react-redux';
const call = new ApiCalls();
const ContactUs = ({navigation}) => {
  const userData = useSelector(reduxState => reduxState.login.user.user);
  const {name, _id} = userData;
  const [state, setState] = useState({
    name: '',
    email: '',
    mobile_no: '',
    user_id: _id,
    message: '',
  });

  console.log('State>>', state);

  let res = [];
  const submitToServer = async () => {
    try {
      const data = {
        // name:state.name,
        mobile_no: state.mobile_no,
        email: state.email,
        users: state.user_id,
        message: state.message,
      };
      res = await call.Calls('contact', 'POST', data, Config);

      if (res.status == 200) {
        console.log('Contact US Data>>>>', res.data);
        alert('Your Message Send Successfully!!!');
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <ScrollView>
      <Header2 Text="Contact Us" navigation={navigation} />
      <View style={{padding: 20}}>
        <Text style={{fontSize: rf(3)}}>Contact No- 9999999999{'\n'}</Text>
        <Text style={{fontSize: rf(3)}}>Email- help@gmail.com</Text>
        <View style={styles.forms}>
          <View>
            <Text style={styles.header}>Name*</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Name"
              onChangeText={e => setState({...state, name: e})}
            />
          </View>
          <View>
            <Text style={styles.header}>Mobile No*</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Mobile No"
              onChangeText={e => setState({...state, mobile_no: e})}
            />
          </View>
          <View>
            <Text style={styles.header}>Email*</Text>
            <TextInput
              style={styles.input}
              placeholder=" Enter Email "
              onChangeText={e => setState({...state, email: e})}
            />
          </View>
          <View>
            <Text style={styles.header}>Message*</Text>
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              // value={state.description}
              placeholder="Enter Details"
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
              onChangeText={e => setState({...state, message: e})}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={submitToServer}
              style={{
                width: rw(80),
                height: rh(6),
                marginTop: 10,
                borderRadius: 8,
                backgroundColor: '#E92329',
                marginBottom: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{color: '#FFF', fontSize: rf(2), fontWeight: 'bold'}}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  textArea: {
    height: rh(20),
    width: rw(80),
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    borderWidth: 1,
    fontSize: rf(2),
    textAlign: 'justify',
    lineHeight: 30,
    borderRadius: 5,
    borderColor: 'grey',
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
    // backgroundColor: '#FFF',
    marginTop: 20,
    alignItems: 'center',
  },
  header: {
    paddingLeft: 15,
    paddingTop: 5,
    color: 'grey',
    fontSize: 20,
  },
});
