import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import {TextInput} from 'react-native-paper';
// import MapView, {Marker} from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {ScrollView} from 'react-native';
import MultiLine from './MultiLine';

export default function AddLocality({navigation}) {
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState({
    latitude: 12.900531187593806,
    longitude: 77.52318729384943,
  });
  const destinationLocation = {
    latitude: 12.903257357603737,
    longitude: 77.52074313137831,
  };
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      {/* <MapView
        ref={mapRef}
        style={{width: '100%', height: '30%'}}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        onRegionChange={x => {
          // console.log(x);
        }}>
        <Marker
          coordinate={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
          }}
        />
        <Marker coordinate={destinationLocation} />
        <MapViewDirections
          origin={userLocation}
          destination={destinationLocation}
          apikey="AIzaSyBF48uqsKVyp9P2NlDX-heBJksvvT_8Cqk" // Replace with your Google Maps API key
          strokeWidth={7}
          strokeColor="#3dabdd"
        />
      </MapView> */}
      <Image
        source={require('../../../assets/map.png')}
        style={{width: '100%', height: 300, resizeMode: 'cover'}}
      />
      <ScrollView
        style={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderColor: 'transparent',
          backgroundColor: 'white',
          padding: 10,
          //   elevation: 3,
          position: 'relative',
          top: -10,
          width: '100%',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Montserrat-SemiBold',
            color: 'black',
            // letterSpacing: 1,
          }}>
          <SimpleLineIcons name="location-pin" color="black" size={25} />{' '}
          Madiwala
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: 'black',
            fontFamily: 'Montserrat-Medium',
            marginTop: 4,
            // letterSpacing: 1,
          }}>
          Madiwala, 1st Stage, Bommanahalli, Bengaluru, Karnataka 560068
        </Text>
        <View
          style={{
            marginTop: 20,
            borderRadius: 6,
            backgroundColor: '#fffafa',
            padding: 10,
            borderColor: '#b63d42',
            borderWidth: 1,
          }}>
          <Text
            style={{
              color: '#b63d42',
              fontFamily: 'Montserrat-Regular',
              fontSize: 11,
              // letterSpacing: 1,
            }}>
            A detailed address will help our Delivery Partner reach your
            doorstep easily
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          <TextInput
            placeholder="HOUSE / FLAT / BLOCK"
            placeholderTextColor="gray"
            activeUnderlineColor="#ea5362"
            style={{
              height: 40,
              // padding: 5,
              color: 'black',
              backgroundColor: 'transparent',
              fontSize: 14,
              borderColor: 'transparent',
              borderBottomWidth: 1,
              borderBottomColor: 'black',
              fontFamily: 'Montserrat-Regular',
              // letterSpacing: 1,
            }}
          />
        </View>
        <View style={{marginTop: 30}}>
          <TextInput
            placeholder="ROAD / AREA (OPTIONAL)"
            placeholderTextColor="gray"
            activeUnderlineColor="#ea5362"
            style={{
              height: 40,
              // padding: 5,
              color: 'black',
              backgroundColor: 'transparent',
              fontSize: 14,
              borderColor: 'transparent',
              borderBottomWidth: 1,
              borderWidth: 1,
              borderBottomColor: '#c9c9c9',
              fontFamily: 'Montserrat-Regular',
            }}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              marginBottom: 20,
              // letterSpacing: 1,
              fontFamily: 'Montserrat-Medium',
            }}>
            {/* DIRECTIONS TO REACH (OPTIONAL) */}
            Directions to reach (Optional)
          </Text>
          <MultiLine />
        </View>
        <View style={{marginTop: 30, marginBottom: 30}}>
          <TouchableOpacity
            style={{
              // marginTop: 15,
              backgroundColor: '#ceffa4',
              padding: 15,
              borderRadius: 5,
              elevation: 3,
            }}
            onPress={() => {
              navigation.navigate('Order Summary');
            }}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 18,
                // letterSpacing: 1,
                fontFamily: 'Montserrat-Medium',
              }}>
              Proceed
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
