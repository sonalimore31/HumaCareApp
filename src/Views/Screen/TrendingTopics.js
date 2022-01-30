import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert
} from 'react-native';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import {useSelector, useDispatch} from 'react-redux';
import Send from 'react-native-vector-icons/Ionicons';
import {setComments} from '../../Redux/Slice/LoginSlice';
import ApiCalls from '../../Api/Api';
import {Config} from '../../../Config';
const call = new ApiCalls();
import {nullLiteral} from '@babel/types';
const TrendingTopics = ({route}) => {
  const {data} = route.params.paramKey;
  console.log('route Data>>>', data);

  const dispatch = useDispatch();
  const userData = useSelector(reduxState => reduxState.login.user.user);

  const [comment, setComment] = React.useState([]);
  const [textInput, setTextInput] = React.useState('');

  const {name, _id} = userData;
  console.log('USerData>>', name, _id);

  const addComment = async () => {
    let res = [];
    if (textInput == '') {
      Alert.alert('Error', 'Please enter Comment');
    } else {
      const newComment = {
        id: _id,
        comment: textInput,
        userName: name,
      };
      setComment([...comment, newComment]);
      dispatch(setComments([...comment, newComment]));
      try {
      
        const data = {
            article:[...comment],
            username:name,
            user:_id
        };
        res = await call.Calls('comment', 'POST', data, Config);
        
        if (res.status == 200) {
          console.log('CommentData>>>>', res.data);
        }
      } catch (error) {
        console.log('error', error);
      }
      setTextInput('');
    }
  };

  
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            display: 'flex',
          }}>
          <View
            style={{
              justifyContent: 'flex-start',
              alignContent: 'flex-start',
              padding: 10,
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{fontSize: rf(3), fontWeight: 'bold', color: '#E93D43'}}>
                {data.name}
              </Text>
            </View>
            <View style={{margin: 15, marginTop: 20}}>
              <Text
                style={{
                  fontSize: rf(2.5),
                  textAlign: 'justify',
                  lineHeight: 30,
                }}>
                {data.description}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </View>
          </View>
          <View style={{
            //justifyContent: 'flex-end',
            // flex: 1.05
             }}>
            <View
              style={{
                backgroundColor: '#E2E3E3',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                //  borderWidth: 1,
                height: rh(10),
                margin:10,
                borderRadius:8,
                padding: 10,
                // borderRadius:8
              }}>
              <TextInput
                placeholder="Add a Comment"
                value={textInput}
                style={{marginLeft: 15, fontSize: 15, width: rw(80)}}
                onChangeText={text => setTextInput(text)}
              />
              <TouchableOpacity onPress={addComment}>
                <Send name="md-send" size={30} color={'#E93D43'} style={{marginLeft:-30}} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{fontSize:rf(2.3),margin:10,fontWeight:'bold'}}>Top Comment</Text>
          <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{padding: 20, paddingBottom: 100}}
              data={comment}
              renderItem={({item}) => (
              
                  <View style={{flex: 1,marginBottom:10}}>
                  <View style={{flexDirection:'row'}}>
                  <Image source={require('../../Assets/usericon.png')} style={{height:30,width:30}}/>
                  <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        
                      }}>
                      {item.userName}
                    </Text>
                  </View>
                    
                    <Text
                      style={{
                        
                        fontSize: 17,
                        marginBottom:10,
                        marginLeft:10,
                      }}>
                      {item.comment}
                    </Text>
                    <View style={{flexDirection:'row',justifyContent:'space-around',width:rw(30),marginTop:-10}}> 
                    <TouchableOpacity>
                    <Text>Like</Text>
                    </TouchableOpacity>
                  
                    <TouchableOpacity>
                    <Text>Reply</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
               
              )}
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TrendingTopics;
