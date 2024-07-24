import {View, Text, Image} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Footer() {
  return (
    <View
      style={{backgroundColor: 'white', marginVertical: 20, paddingBottom: 10}}>
      {/* <View style={{flexDirection: 'row', padding: 20, alignItems: 'center'}}> */}
      <View
      //  style={{flex: 0.7}}
      >
        <Text
          style={{
            fontFamily: 'bookmanoldstyle_bold',
            color: '#bfbfbf',
            fontSize: 20,
            letterSpacing: 3,
            textAlign: 'center',
          }}>
          {/* &copy; 2021 EventBox. All rights reserved. */}
          <MaterialCommunityIcons
            name="drawing-box"
            size={20}
            color="#bfbfbf"
          />{' '}
          Instant Rental app
        </Text>
        <Text
          style={{
            fontFamily: 'bookmanoldstyle',
            color: '#a9a9a9',
            fontSize: 15,
            letterSpacing: 2,
            textAlign: 'center',
            marginTop: 10,
          }}>
          {'\u00A9'} 2024 EventBox. All rights reserved.
        </Text>
      </View>
      {/* <View style={{flex: 0.3}}>
          <Image
            source={require('../../assets/time.png')}
            style={{width: 120, height: 120, opacity: 0.6}}
          />
        </View> */}
      {/* </View> */}
    </View>
  );
}
