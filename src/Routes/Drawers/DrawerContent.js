import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Entypo';
import Arrow from 'react-native-vector-icons/AntDesign';
import Setting from 'react-native-vector-icons/Ionicons';
import Fork from 'react-native-vector-icons/AntDesign';
import Call from 'react-native-vector-icons/Ionicons';
import Privacy from 'react-native-vector-icons/MaterialIcons';
import Logout from 'react-native-vector-icons/MaterialCommunityIcons';
import Term from 'react-native-vector-icons/SimpleLineIcons';
import {useSelector, useDispatch} from 'react-redux';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
} from 'react-native-paper';
export default function DrawerContent(props) {
  const userData = useSelector(reduxState => reduxState.login.user.user);
  return (
    <View style={{flex: 1, backgroundColor: '#E93D43'}}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../../Assets/logo.png')}
            style={{height: 40, width: 40}}
          />
          <TouchableOpacity>
            <Arrow
              name="arrowright"
              size={25}
              color="#fff"
              style={{marginTop: 10}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Image
                source={require('../../Assets/profile.png')}
                style={{
                  width: 80,
                  height: 80,
                  borderWidth: 1,
                  borderRadius: 50,
                  borderColor: '#FFF',
                  //backgroundColor: '#FFF',
                }}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>{userData.name}</Title>
                <Caption style={styles.caption}>{userData.email}</Caption>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('Account');
                  }}
                  style={{
                    backgroundColor: '#FFF',
                    padding: 4,
                    borderRadius: 20,
                    width: 100,
                    alignItems: 'center',
                  }}>
                  <Text>Edit Profile</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.row}></View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              style={{marginBottom: -10}}
              icon={({color, size}) => (
                <Icon name="home" color="#FFF" size={30} />
              )}
              label="Profile view"
              labelStyle={{fontSize: 17, color: '#FFF'}}
              onPress={() => {
                props.navigation.navigate('Account');
              }}
            />
            <DrawerItem
              style={{marginBottom: -10}}
              icon={({color, size}) => (
                <Fork name="fork" color="#FFF" size={30} />
              )}
              label="Appointment"
              labelStyle={{fontSize: 17, color: '#FFF'}}
              onPress={() => {
                props.navigation.navigate('BookingStatus');
              }}
            />
            <DrawerItem
              style={{marginBottom: -10}}
              icon={({color, size}) => (
                <Privacy name="drive-file-move" color="#FFF" size={30} />
              )}
              label="Privacy Policy"
              labelStyle={{fontSize: 17, color: '#FFF'}}
              onPress={() => {
                props.navigation.navigate('PrivacyPolicy');
              }}
            />
            <DrawerItem
              style={{marginBottom: -10}}
              icon={({color, size}) => (
                <Term name="home" color="#FFF" size={30} />
              )}
              label="Term and Condition"
              labelStyle={{fontSize: 17, color: '#FFF'}}
              onPress={() => {
                props.navigation.navigate('TermCondition');
              }}
            />
            <DrawerItem
              style={{marginBottom: -10}}
              icon={({color, size}) => (
                <Call name="call" color="#FFF" size={30} />
              )}
              label="Contact Us"
              labelStyle={{fontSize: 17, color: '#FFF'}}
              onPress={() => {
                props.navigation.navigate('ContactUs');
              }}
            />
            <DrawerItem
              style={{marginBottom: -10}}
              icon={({color, size}) => (
                <Setting name="settings-sharp" color="#FFF" size={30} />
              )}
              label="Setting"
              labelStyle={{fontSize: 17, color: '#FFF'}}
              // onPress={() => {props.navigation.navigate('Home')}}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Logout name="logout" color="#FFF" size={30} />
          )}
          label="Logout"
          labelStyle={{fontSize: 17, color: '#FFF'}}
          //  onPress={() => {signOut()}}
          onPress={() => {
            props.navigation.navigate('Login');
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    color: '#FFF',
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    color: '#FFF',
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 10,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
