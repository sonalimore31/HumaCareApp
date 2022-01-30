import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header2 from '../../Components/Header2';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';

const TermCondition = () => {
  return (
    <ScrollView>
      <Header2 Text="Term & Conditions" />
      <View style={{padding: 20}}>
        <Text style={{fontSize: rf(2.5), textAlign: 'justify', lineHeight: 30}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
    </ScrollView>
  );
};

export default TermCondition;
