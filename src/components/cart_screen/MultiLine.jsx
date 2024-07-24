import {View, Text, TextInput} from 'react-native';
import React from 'react';

export default function MultiLine() {
  return (
    <View>
      <TextInput
        placeholder="Instructions to find your location."
        placeholderTextColor="gray"
        multiline
        numberOfLines={4}
        maxLength={200}
        style={{
          height: 120,
          padding: 10,
          color: 'black',
          backgroundColor: '#e3e3e326',
          fontSize: 14,
          borderColor: '#e3e3e3',
          borderWidth: 1,
          //   borderBottomColor: '#e3e3e3',
          textAlignVertical: 'top',
          borderRadius: 5,
          // letterSpacing: 1,
          fontFamily: 'Montserrat-Regular',
        }}
      />
    </View>
  );
}
