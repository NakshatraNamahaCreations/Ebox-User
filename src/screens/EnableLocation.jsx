import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect, useRef} from 'react';

export default function EnableLocation({navigation}) {
  const animatedButton = useRef(new Animated.Value(400)).current;

  useEffect(() => {
    Animated.stagger(200, [
      Animated.timing(animatedButton, {
        toValue: 0,
        duration: 600,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
  }, [animatedButton]);

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{padding: 15}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BottomTab');
          }}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 13,
              backgroundColor: 'transparent',
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 50,
              paddingLeft: 14,
              paddingRight: 14,
              paddingTop: 7,
              paddingBottom: 7,
              fontFamily: 'Montserrat-Regular',
            }}>
            skip
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/LocationMarker.gif')}
          resizeMode="cover"
          style={{
            height: 300,
            width: 300,
          }}
        />
        {/* <View style={styles.overlay}></View> */}

        <View
          style={{
            padding: 15,
            marginTop: 20,
            width: '80%',
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontFamily: 'Montserrat-Medium',
              textAlign: 'center',
              marginBottom: 10,
            }}>
            Locate what you need!
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              fontFamily: 'Montserrat-Medium',
              textAlign: 'center',
            }}>
            Please allow us to access your location service
          </Text>
        </View>
        <Animated.View
          style={[
            styles.animatedView,
            {transform: [{translateY: animatedButton}]},
          ]}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ceffa4',
              borderRadius: 10,
              elevation: 3,
              padding: 10,
            }}
            onPress={() => navigation.navigate('BottomTab')}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontFamily: 'Montserrat-Medium',
                textAlign: 'center',
              }}>
              Allow access
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: 0.6, // Change this value to adjust the opacity
  },
  animatedView: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
});
