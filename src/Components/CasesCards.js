import React from 'react';
// import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View, Button} from 'react-native';

function CasesCards(props) {
  console.log(props);
  const {caseNo, caseDesc, caseSubDesc, color} = props;
  return (
    <>
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 16}}>
        <Text style={styles.caseData1}>{caseNo}</Text>
        <View
          style={{
            width: 250,
            // borderRadius: 7,
            padding: 16,
            backgroundColor: color,
          }}>
          <Text style={styles.caseData2}>{caseDesc}</Text>
          <View>
            <Text>{caseSubDesc}</Text>
          </View>
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </>
  );
}

const styles = StyleSheet.create({
  caseData1: {
    paddingRight: 64,
    fontSize: 18,
  },
});

export default CasesCards;
