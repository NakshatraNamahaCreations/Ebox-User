import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import Video from 'react-native-video';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('window').width;
export default function FlashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('BottomTab');
    }, 1000);
  }, []);

  const background = require('../../assets/background.mp4');

  // Define onBuffer and onError callbacks
  const onBuffer = () => {
    // Handle buffering
  };

  const onError = error => {
    // Handle error
    console.log(error);
  };

  return (
    <View style={{flex: 1}}>
      <Video
        source={background}
        onBuffer={onBuffer}
        onError={onError}
        style={styles.backgroundVideo}
        resizeMode="cover"
        repeat={true}
      />
      <View style={styles.overlay}></View>
      <View style={{position: 'absolute', zIndex: 2, top: '21%', padding: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* <Image
            source={require('../../assets/event.png')}
            style={{width: 50, height: 50, marginTop: 10}}
          /> */}
          <MaterialCommunityIcons
            name="drawing-box"
            size={50}
            color="#ceffa4"
          />
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              marginLeft: 10,
              // fontWeight: '400',
              marginTop: 15,
              fontFamily: 'Montserrat-Regular',
              letterSpacing: 1,
            }}>
            EVENT BOX
          </Text>
        </View>
        <View style={{width: 300}}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              marginTop: 20,
              // fontWeight: '500',
              fontFamily: 'Montserrat-Light',
            }}>
            Join the biggest racket sports players community
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              marginTop: 5,
              // fontWeight: '500',
              fontFamily: 'Montserrat-Medium',
            }}>
            And find your perfect match
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ceffa4',
              width: '100%',
              borderRadius: 50,
              // borderWidth: 1,
              borderColor: 'transparent',
              paddingTop: 10,
              paddingBottom: 10,
            }}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 16,
                // fontWeight: '700',
                fontFamily: 'Montserrat-Medium',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'transparent',
              width: '100%',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
              paddingTop: 10,
              paddingBottom: 10,
              elevation: 2,
            }}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 16,
                // fontWeight: '700',
                fontFamily: 'Montserrat-Medium',
              }}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 30}}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontFamily: 'Montserrat-Medium',
            }}>
            Or continue with:
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/facebook.png')}
            style={{width: 53, height: 53, borderRadius: 5}}
          />
          <Image
            source={require('../../assets/search.png')}
            style={{width: 50, height: 50, borderRadius: 5, marginLeft: 35}}
          />
        </View>
        <View style={{marginTop: 0}}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              By registering you are accepting our{' '}
              <Text style={styles.link}>terms of use</Text> and{' '}
              <Text style={styles.link}>privacy policy</Text>.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  textContainer: {
    position: 'absolute',
    top: 50,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Montserrat-Medium',
  },
  link: {
    textDecorationLine: 'underline',
    textDecorationColor: 'white',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: 0.3, // Change this value to adjust the opacity
  },
});
