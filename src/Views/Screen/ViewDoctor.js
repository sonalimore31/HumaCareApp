import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Phone from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-vector-icons/Ionicons';
import Cap from 'react-native-vector-icons/Entypo';
import Case from 'react-native-vector-icons/Entypo';
import Line from 'react-native-vector-icons/Ionicons';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import Medicalkit from 'react-native-vector-icons/MaterialIcons';
export const ChatIcon = <Icon name="message1" size={20} color="#e92329" />;
export const PhoneIcon = <Phone name="phone" size={20} color="#e92329" />;
export const VideoIcon = <Video name="videocam" size={20} color="#e92329" />;
const consultData = [
  {
    icon: ChatIcon,
    consultType: ' Text Consult',
    consultCharge: '100 days validity ₹ - 100',
    message:
      'Send multiple message/attachment get first response within first hour',
  },
  {
    icon: PhoneIcon,
    consultType: ' Phone Consult',
    consultCharge: '15 minutes call duration ₹ - 250',
    message:
      'Schedule for your preferred date / time response within first hour',
  },

  {
    icon: VideoIcon,
    consultType: ' Video Consult',
    consultCharge: '15 minutes call duration ₹ - 350',
    message:
      'Schedule for your preferred date / time response within first hour',
  },
];
const ViewDoctor = ({route, navigation}) => {
  const {data} = route.params.paramKey;
  console.log('DDDDDDDD>>>', data);

  return (
    <>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#e92329',
            height: rh(35),
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            marginBottom: 10,
          }}>
          <View style={{marginLeft: 15, marginTop: 12}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrowleft" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
          {/* <View
            style={{
              alignItems: 'center',
              // marginTop: -37,
            }}>
           
          </View> */}
          <View style={{marginLeft: 10}}>
            <Text style={{color: 'white', fontSize: 20}}>{data.name}</Text>
            <Line name="remove-outline" size={20} color="white" />
          </View>

          <View style={{alignItems: 'center'}}>
            {/* <Image
               source={{uri: data.src1}}
              style={{borderColor: 'white', borderWidth: 1.5}}
            /> */}
            <Image
              source={{
                uri: 'https://image.freepik.com/free-vector/medical-mask-emoji-doctor-face-design-art-trendy-communication-chat-elements-medical-virus-protection_32879-299.jpg',
              }}
              style={{height: 50, width: 50, marginTop: 10}}
            />
            <Text style={{color: 'white', fontSize: 15}}>{data.education}</Text>
            <View style={{flexDirection: 'row'}}>
              <Medicalkit name="medical-services" size={20} color="#FFF" />
              <Text style={{color: 'white', fontSize: 15}}>
                {data.experience} of Experience
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 15,
              padding: 10,
              color: 'white',
              backgroundColor: '#E93D43',
            }}>
            Consult privately
          </Text>

          <FlatList
            data={consultData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={{flexDirection: 'column', margin: 10}}>
                <View style={{flexDirection: 'row'}}>
                  <Text>{item.icon} </Text>
                  <Text
                    style={{
                      color: '#e92329',
                      fontSize: rf(2.1),
                      fontWeight: '500',
                    }}>
                    {item.consultType}
                  </Text>
                </View>
                <View style={{marginLeft: 25}}>
                  <Text
                    style={{
                      fontSize: rf(2.1),
                      fontWeight: '400',
                      color: '#1A1A1A',
                    }}>
                    {item.consultCharge}{' '}
                  </Text>
                  <Text>{item.message}</Text>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderColor: '#eaecf5',
                    }}></View>
                </View>
              </View>
            )}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 15,
              padding: 10,
              color: 'white',
              backgroundColor: '#E93D43',
            }}>
            Additional info
          </Text>
        </View>

        <View style={{marginTop: 10, marginLeft: 10}}>
          <Text style={{color: '#e92329', fontSize: 15}}>
            <Cap name="graduation-cap" size={20} color="#e92329" />
            Education
          </Text>
          <View style={{margin: 10}}>
            <Text>{data.education}</Text>
          </View>

          <Text style={{color: '#e92329', fontSize: 15}}>
            <Case name="briefcase" size={20} color="#e92329" />
            Experience
          </Text>
          <Text>2011-2019 Dental surgen Air Force Station</Text>
          <Text>Chandigarh Punjab</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default ViewDoctor;
