import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MyProfile({navigation}) {
  return (
    <ScrollView style={{padding: 10, paddingTop: 30}}>
      <Text
        style={{
          color: 'black',
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 22,
          letterSpacing: 1,
        }}>
        My account
      </Text>
      <Text
        style={{
          color: 'black',
          fontFamily: 'Montserrat-Regular',
          fontSize: 15,
          letterSpacing: 1,
        }}>
        John Davis
      </Text>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            color: '#595959',
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 12,
            letterSpacing: 1,
            marginBottom: 20,
          }}>
          YOUR INFORMATION
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('Account');
          }}>
          <View style={{flex: 0.2}}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: '#e7e7e7',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <FontAwesome5
                name={'user-alt'}
                size={16}
                color={'#737373'}
                // #737373
              />
            </View>
          </View>
          <View style={{flex: 0.9}}>
            <Text
              style={{
                color: '#414141',
                fontFamily: 'Montserrat-Medium',
                fontSize: 14,
                letterSpacing: 1,
              }}>
              Profile
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#ffa0a030',
              position: 'absolute',
              right: 50,
              // paddingVertical: 2,
              paddingHorizontal: 5,
              borderRadius: 5,
            }}>
            <Text
              style={{
                color: '#d12828',
                fontFamily: 'Montserrat-Medium',
                fontSize: 14,
                letterSpacing: 1,
              }}>
              32% completed
            </Text>
          </View>
          <View style={{flex: 0.1}}>
            <Octicons name={'chevron-right'} size={16} color={'#737373'} />
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('Favourites');
          }}>
          <View style={{flex: 0.2}}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: '#e7e7e7',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <Octicons
                name={'heart'}
                size={16}
                color={'#737373'}
                // #737373
              />
            </View>
          </View>
          <View style={{flex: 0.9}}>
            <Text
              style={{
                color: '#414141',
                fontFamily: 'Montserrat-Medium',
                fontSize: 14,
                letterSpacing: 1,
              }}>
              Favourites
            </Text>
          </View>
          <View style={{flex: 0.1}}>
            <Octicons name={'chevron-right'} size={16} color={'#737373'} />
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('Address');
          }}>
          <View style={{flex: 0.2}}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: '#e7e7e7',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <FontAwesome
                name={'address-book-o'}
                size={16}
                color={'#737373'}
              />
            </View>
          </View>
          <View style={{flex: 0.9}}>
            <Text
              style={{
                color: '#414141',
                fontFamily: 'Montserrat-Medium',
                fontSize: 14,
                letterSpacing: 1,
              }}>
              Address
            </Text>
          </View>
          <View style={{flex: 0.1}}>
            <Octicons name={'chevron-right'} size={16} color={'#737373'} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: '#595959',
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 12,
            letterSpacing: 1,
            marginBottom: 20,
          }}>
          OTHER INFORMATION
        </Text>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            alignItems: 'center',
          }}>
          <View style={{flex: 0.2}}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: '#e7e7e7',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <FontAwesome6
                name={'circle-exclamation'}
                size={16}
                color={'#737373'}
                // #737373
              />
            </View>
          </View>
          <View style={{flex: 0.9}}>
            <Text
              style={{
                color: '#414141',
                fontFamily: 'Montserrat-Medium',
                fontSize: 14,
                letterSpacing: 1,
              }}>
              About us
            </Text>
          </View>
          <View style={{flex: 0.1}}>
            <Octicons name={'chevron-right'} size={16} color={'#737373'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            alignItems: 'center',
          }}>
          <View style={{flex: 0.2}}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: '#e7e7e7',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <Fontisto name={'locked'} size={16} color={'#737373'} />
            </View>
          </View>
          <View style={{flex: 0.9}}>
            <Text
              style={{
                color: '#414141',
                fontFamily: 'Montserrat-Medium',
                fontSize: 14,
                letterSpacing: 1,
              }}>
              Privacy policy
            </Text>
          </View>
          <View style={{flex: 0.1}}>
            <Octicons name={'chevron-right'} size={16} color={'#737373'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            alignItems: 'center',
          }}>
          <View style={{flex: 0.2}}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: '#e7e7e7',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <MaterialCommunityIcons
                name={'face-agent'}
                size={16}
                color={'#737373'}
              />
            </View>
          </View>
          <View style={{flex: 0.9}}>
            <Text
              style={{
                color: '#414141',
                fontFamily: 'Montserrat-Medium',
                fontSize: 14,
                letterSpacing: 1,
              }}>
              Help center
            </Text>
          </View>
          <View style={{flex: 0.1}}>
            <Octicons name={'chevron-right'} size={16} color={'#737373'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            alignItems: 'center',
          }}>
          <View style={{flex: 0.2}}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: '#e7e7e7',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <FontAwesome5
                name={'clipboard-list'}
                size={16}
                color={'#737373'}
              />
            </View>
          </View>
          <View style={{flex: 0.9}}>
            <Text
              style={{
                color: '#414141',
                fontFamily: 'Montserrat-Medium',
                fontSize: 14,
                letterSpacing: 1,
              }}>
              Terms & Condition
            </Text>
          </View>
          <View style={{flex: 0.1}}>
            <Octicons name={'chevron-right'} size={16} color={'#737373'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            alignItems: 'center',
          }}>
          <View style={{flex: 0.2}}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: '#e7e7e7',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <MaterialCommunityIcons
                name={'chat-question'}
                size={16}
                color={'#737373'}
              />
            </View>
          </View>
          <View style={{flex: 0.9}}>
            <Text
              style={{
                color: '#414141',
                fontFamily: 'Montserrat-Medium',
                fontSize: 14,
                letterSpacing: 1,
              }}>
              FAQ
            </Text>
          </View>
          <View style={{flex: 0.1}}>
            <Octicons name={'chevron-right'} size={16} color={'#737373'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            alignItems: 'center',
          }}>
          <View style={{flex: 0.2}}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: '#e7e7e7',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <FontAwesome6 name={'power-off'} size={16} color={'#737373'} />
            </View>
          </View>
          <View style={{flex: 0.9}}>
            <Text
              style={{
                color: '#414141',
                fontFamily: 'Montserrat-Medium',
                fontSize: 14,
                letterSpacing: 1,
              }}>
              Logout
            </Text>
          </View>
          <View style={{flex: 0.1}}>
            <Octicons name={'chevron-right'} size={16} color={'#737373'} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 40}}>
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            color: '#a9a9a9',
            fontSize: 20,
            letterSpacing: 2,
            textAlign: 'center',
          }}>
          Event Box{' '}
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat-Regular',
            color: '#a9a9a9',
            fontSize: 15,
            letterSpacing: 2,
            textAlign: 'center',
          }}>
          © 2024 Event Box. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}
