import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Animated,
  Easing,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {TextInput} from 'react-native-paper';
// import Video from 'react-native-video';

const screenHeight = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function Login() {
  const [showEye, setShowEye] = useState(false);
  const navigation = useNavigation();

  const background = require('../../assets/background.mp4');

  const animatedTop1 = useRef(new Animated.Value(-screenHeight)).current;
  const animatedTop2 = useRef(new Animated.Value(-screenHeight)).current;

  const animatedInput1 = useRef(new Animated.Value(100)).current;
  const animatedInput2 = useRef(new Animated.Value(300)).current;
  const animatedButton = useRef(new Animated.Value(400)).current;

  // Define onBuffer and onError callbacks
  const onBuffer = () => {
    // Handle buffering
  };

  const onError = error => {
    // Handle error
    console.log(error);
  };

  useEffect(() => {
    Animated.stagger(200, [
      Animated.timing(animatedTop1, {
        toValue: 0,
        duration: 100,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(animatedTop2, {
        toValue: 0,
        duration: 600,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(animatedInput1, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(animatedInput2, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(animatedButton, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
  }, [
    animatedTop1,
    animatedTop2,
    animatedInput1,
    animatedInput2,
    animatedButton,
  ]);

  return (
    <View style={styles.container}>
      {/* <Video
      source={background}
      onBuffer={onBuffer}
      onError={onError}
      style={styles.backgroundVideo}
      resizeMode="cover" 
      repeat={true} 
    /> */}
      <Image
        source={require('../../assets/pexels-background.jpg')}
        style={styles.backgroundVideo}
        // resizeMode="cover"
      />
      <View style={styles.overlay}></View>
      <View style={{position: 'absolute', zIndex: 2, width: '100%'}}>
        {/* <Animated.View
        style={[
          styles.animatedView,
          {transform: [{translateX: animatedTop1}]},
        ]}>
        <Ionicons
          name="arrow-back"
          size={30}
          color="white"
          style={{paddingLeft: 15, marginTop: 20}}
          onPress={() => navigation.goBack()}
        />
      </Animated.View> */}
        <View style={{padding: 20}}>
          <Animated.View
            style={[
              styles.animatedView,
              {transform: [{translateX: animatedTop2}]},
            ]}>
            <Text style={styles.title}>Sign in</Text>
          </Animated.View>
          <Animated.View
            style={[
              styles.animatedView,
              {transform: [{translateY: animatedInput1}]},
            ]}>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#7d8592"
              textColor="white"
              underlineColor="white"
              activeUnderlineColor="#ea5362"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </Animated.View>
          <Animated.View
            style={[
              styles.animatedView,
              {transform: [{translateY: animatedInput2}]},
            ]}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#7d8592"
                textColor="white"
                underlineColor="white"
                activeUnderlineColor="#ea5362"
                secureTextEntry={!showEye}
              />
              <TouchableOpacity
                style={{position: 'absolute', right: 15, top: 13}}
                onPress={() => setShowEye(prev => !prev)}>
                <Ionicons
                  name={showEye ? 'eye-outline' : 'eye-off-outline'}
                  color="black"
                  size={25}
                />
              </TouchableOpacity>
            </View>
          </Animated.View>

          <Animated.View
            style={[
              styles.animatedView,
              {transform: [{translateY: animatedInput2}]},
            ]}>
            <TouchableOpacity
              style={styles.otpBtn}
              onPress={() => navigation.navigate('Otp')}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontFamily: 'Montserrat-Medium',
                }}>
                Log in
              </Text>
            </TouchableOpacity>
            <Pressable>
              <Text
                style={{
                  color: '#7d8592',
                  fontSize: 15,
                  marginTop: 20,
                  fontFamily: 'Montserrat-SemiBold',
                  textAlign: 'center',
                }}>
                Have you forgotten your password?
              </Text>
            </Pressable>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    // position: 'absolute',
    //  alignSelf: 'center',
    height: '100%',
    width: width,
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
  },
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  input: {
    backgroundColor: 'white',
    // borderBottomWidth: 1,
    // borderBottomColor: 'white',
    borderRadius: 10,
    color: 'black',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginBottom: 5,
    paddingHorizontal: 15,
  },
  otpBtn: {
    backgroundColor: '#ceffa4',
    // height: 50,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: 'transparent',
    elevation: 3,
    marginTop: '5%',
    marginHorizontal: 100,
  },
  animatedView: {
    marginBottom: 16, // Adjust spacing between animated elements
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: 0.7, // Change this value to adjust the opacity
  },
});

// C:\Users\DELL\AppData\Local\Android\Sdk
// function GFG_Fun() {
//   console.log(arr[(Math.floor(Math.random() * arr.length))]);
// }
// GFG_Fun()
