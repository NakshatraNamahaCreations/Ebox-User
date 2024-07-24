import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {bookingHistory} from '../../data/global-data';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

export default function Booking() {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: '#f7f6fd'}}>
      {bookingHistory.lenght === 0 ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/nobooking.jpg')}
            style={{width: 300, height: 300}}
            onError={() => console.log('Error loading image')}
          />
          <Text
            style={{
              color: '#012a32',
              fontSize: 20,
              fontWeight: '500',
              marginBottom: 15,
              fontFamily: 'Montserrat-Medium',
              letterSpacing: 1,
            }}>
            You have not made any bookings yet
          </Text>
        </View>
      ) : (
        <View style={{padding: 10}}>
          {bookingHistory.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: 'white',
                marginBottom: 10,
                borderRadius: 7,
                borderColor: '#eee',
                borderWidth: 1,
              }}
              onPress={() =>
                navigation.navigate('Booking Summary', {product: item})
              }>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                  marginBottom: 5,
                }}>
                <View style={{flex: 0.2}}>
                  <View
                    style={{
                      backgroundColor: 'yellow',
                      borderRadius: 50,
                      width: 50,
                      height: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <FontAwesome
                      name={
                        item.bookingStatus === 'Event Completed'
                          ? 'flag-checkered'
                          : 'calendar-check-o'
                      }
                      size={25}
                      color="#3b3b3b"
                    />
                  </View>
                </View>
                <View style={{flex: 0.7}}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'black',
                      letterSpacing: 1,
                      fontFamily: 'Montserrat-SemiBold',
                    }}>
                    {item.bookingStatus}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: 'black',
                      letterSpacing: 1,
                      marginVertical: 2,
                      fontFamily: 'Montserrat-Regular',
                    }}>
                    ₹{item.amount}
                    <Entypo name="dot-single" size={20} color="gray" />
                    {item.bookingDate}
                  </Text>
                </View>
                <TouchableOpacity style={{flex: 0.1}}>
                  <Feather name="arrow-right" size={20} color="#313131" />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderTopColor: '#f9f9f9',
                  borderTopWidth: 1,
                  paddingTop: 5,
                  marginBottom: 5,
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 10,
                  paddingLeft: 5,
                  paddingRight: 5,
                }}>
                {item.products.slice(0, 4).map((ele, eleIndex) => (
                  <>
                    <Image
                      key={eleIndex}
                      source={{uri: ele.productImage}}
                      style={{
                        flex: 0.2,
                        borderWidth: 1,
                        borderColor: '#e3e1e1',
                        paddingVertical: 10,
                        height: 80,
                        borderRadius: 10,
                        resizeMode: 'cover',
                        margin: 4,
                      }}
                    />
                  </>
                ))}
                {item.products.length > 4 && (
                  <View
                    style={{
                      flex: 0.2,
                      // paddingVertical: 10,
                      height: 80,
                      borderRadius: 10,
                      margin: 4,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#efefef',
                    }}>
                    <Text
                      style={{
                        color: '#575757',
                        fontFamily: 'Montserrat-SemiBold',
                      }}>
                      +{item.products.length - 4}
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
}
