import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
function UpdateAddress() {
  return (
    <View style={styles.ViewContain}>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          marginBottom: 10,
          padding: 8,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            color: 'green',
            fontSize: 15,
            letterSpacing: 1,
          }}>
          + Add new address
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: '#595959',
          fontSize: 12,
          letterSpacing: 1,
          marginBottom: 10,
        }}>
        Your saved addresses
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          marginBottom: 10,
          padding: 8,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            color: '#3f3f3f',
            fontSize: 15,
            letterSpacing: 1,
          }}>
          Hotel <Feather name="edit" color="green" size={16} />
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Light',
            color: '#595959',
            fontSize: 12,
            letterSpacing: 1,
          }}>
          No.26, 1, Hosur Rd, Zuzuvadi, Madiwala, 1st Stage, Bommanahalli,
          Bengaluru, Karnataka 560068
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ViewContain: {
    backgroundColor: '#f7f6fd',
    height: '100%',
    padding: 10,
    paddingTop: 20,
  },
});

export default UpdateAddress;
