import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import * as ImagePicker from 'react-native-image-picker';
// import ImageResizer from 'react-native-image-resizer';

const screenHeight = Dimensions.get('window').height;

export default function Register() {
  const [showEye, setShowEye] = useState(false);
  const navigation = useNavigation();
  // const [gstUri, setGstUri] = useState('');
  // const [gstFileName, setGstFileName] = useState('');
  // const [aadhaarUri, setAadhaarUri] = useState('');
  // const [aadhaarFileName, setAadhaarFileName] = useState('');
  // const [panUri, setPanUri] = useState('');
  // const [panFileName, setPanFileName] = useState('');

  const animatedInput4 = useRef(new Animated.Value(-screenHeight)).current;
  const animatedInput5 = useRef(new Animated.Value(-screenHeight)).current;
  const animatedInput6 = useRef(new Animated.Value(-screenHeight)).current;

  const animatedInput1 = useRef(new Animated.Value(100)).current;
  const animatedInput2 = useRef(new Animated.Value(300)).current;
  const animatedInput3 = useRef(new Animated.Value(300)).current;
  const animatedButton = useRef(new Animated.Value(400)).current;
  const animatedRadio1 = useRef(new Animated.Value(400)).current;
  // const animatedRadio2 = useRef(new Animated.Value(400)).current;

  useEffect(() => {
    Animated.stagger(200, [
      Animated.timing(animatedInput4, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(animatedInput5, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(animatedInput6, {
        toValue: 0,
        duration: 300,
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
      Animated.timing(animatedInput3, {
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
      Animated.timing(animatedRadio1, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
  }, [
    animatedInput4,
    animatedInput6,
    animatedInput5,
    animatedInput1,
    animatedInput2,
    animatedInput3,
    animatedButton,
    animatedRadio1,
  ]);

  // const resizeImage = async imageUri => {
  //   const resizedImage = await ImageResizer.createResizedImage(
  //     imageUri,
  //     800,
  //     600,
  //     'JPEG',
  //     80,
  //     0,
  //   );
  //   return resizedImage.uri;
  // };

  // const uploadGSTCert = () => {
  //   ImagePicker.launchImageLibrary({noData: true}, async response => {
  //     const source = {uri: response.uri};
  //     if (response.assets) {
  //       console.log('Gellery image:', response);
  //       const fileNAME = response.assets[0].fileName;
  //       const galleryPic = response.assets[0].uri;
  //       const resizedImageUri = await resizeImage(galleryPic);
  //       setGstUri(resizedImageUri);
  //       setGstFileName(fileNAME);
  //     }
  //   });
  // };
  // const uploadAadhaar = () => {
  //   ImagePicker.launchImageLibrary({noData: true}, async response => {
  //     const source = {uri: response.uri};
  //     if (response.assets) {
  //       console.log('Gellery image:', response);
  //       const fileNAME = response.assets[0].fileName;
  //       const galleryPic = response.assets[0].uri;
  //       const resizedImageUri = await resizeImage(galleryPic);
  //       setAadhaarUri(resizedImageUri);
  //       setAadhaarFileName(fileNAME);
  //     }
  //   });
  // };
  // const uploadPAN = () => {
  //   ImagePicker.launchImageLibrary({noData: true}, async response => {
  //     const source = {uri: response.uri};
  //     if (response.assets) {
  //       console.log('Gellery image:', response);
  //       const fileNAME = response.assets[0].fileName;
  //       const galleryPic = response.assets[0].uri;
  //       const resizedImageUri = await resizeImage(galleryPic);
  //       setPanUri(resizedImageUri);
  //       setPanFileName(fileNAME);
  //     }
  //   });
  // };
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedView,
          {transform: [{translateX: animatedInput4}]},
        ]}>
        <Ionicons
          name="arrow-back"
          size={25}
          color="black"
          style={{paddingLeft: 15, marginVertical: 20}}
          onPress={() => navigation.goBack()}
        />
      </Animated.View>
      <View style={{paddingLeft: 20, paddingRight: 20}}>
        <Animated.View
          style={[
            styles.animatedView,
            {transform: [{translateX: animatedInput5}], marginBottom: 10},
          ]}>
          <Text style={styles.title}>Sign up</Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.animatedView,
            {transform: [{translateY: animatedInput1}]},
          ]}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="gray"
            // activeUnderlineColor="#ea5362"
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.animatedView,
            {transform: [{translateY: animatedInput2}]},
          ]}>
          <TextInput
            style={styles.input}
            placeholder="Email id"
            placeholderTextColor="gray"
            // activeUnderlineColor="#ea5362"
            keyboardType="email-address"
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.animatedView,
            {transform: [{translateY: animatedInput3}]},
          ]}>
          <TextInput
            style={styles.input}
            placeholder="Mobile number"
            placeholderTextColor="gray"
            // activeUnderlineColor="#ea5362"
            keyboardType="number-pad"
            maxLength={10}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.animatedView,
            {transform: [{translateY: animatedInput6}]},
          ]}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="gray"
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

        {/* <Animated.View
          style={[
            styles.animatedView,
            {transform: [{translateX: animatedInput6}], marginBottom: 10},
          ]}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Company Detils
          </Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.animatedView,
            {transform: [{translateY: animatedInput6}]},
          ]}>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 10,
              overflow: 'hidden',
              marginBottom: 5,
            }}>
            <Picker
              selectedValue={selectedCategory}
              style={{height: 50, width: '100%', color: 'black'}}
              onValueChange={itemValue => {
                if (itemValue !== selectedCategory) {
                  setSelectedCategory(itemValue);
                }
              }}>
              <Picker.Item
                label="Select"
                value=""
                style={{
                  fontSize: 16,
                  fontFamily: 'Montserrat-Regular',
                  letterSpacing: 1,
                  color: colorScheme === 'dark' ? 'white' : '#757575',
                }}
              />
              {companyType.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item.type}
                  value={item.type}
                  style={{
                    color: colorScheme === 'dark' ? 'white' : 'black',
                    fontSize: 16,
                    fontFamily: 'Montserrat-Regular',
                    letterSpacing: 1,
                  }}
                />
              ))}
            </Picker>
          </View>
        </Animated.View>
        <Animated.View
          style={[
            styles.animatedView,
            {transform: [{translateY: animatedInput6}]},
          ]}>
          <TextInput
            style={styles.input}
            placeholder="Company Proprietor Name"
            placeholderTextColor="gray"
            // activeUnderlineColor="#ea5362"
            maxLength={10}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.animatedView,
            {transform: [{translateY: animatedInput6}], flexDirection: 'row'},
          ]}>
          <TextInput
            style={[styles.input, {flex: 0.6, marginLeft: 2}]}
            placeholder="GST Number"
            placeholderTextColor="gray"
            // activeUnderlineColor="#ea5362"
            maxLength={10}
          />
          <View
            style={{
              flex: 0.6,
              marginLeft: 2,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={uploadGSTCert}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  marginLeft: 5,
                  fontFamily: 'Montserrat-Medium',
                }}>
                {gstFileName ? (
                  gstFileName
                ) : (
                  <>
                    <Feather name="upload" size={25} color="black" /> Upload GST
                    Cert{' '}
                  </>
                )}
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
        <Animated.View
          style={[
            styles.animatedView,
            {transform: [{translateY: animatedInput6}], flexDirection: 'row'},
          ]}>
          <TextInput
            style={[styles.input, {flex: 0.6, marginLeft: 2}]}
            placeholder="Aadhaar Number"
            placeholderTextColor="gray"
            // activeUnderlineColor="#ea5362"
            maxLength={10}
          />
          <View
            style={{
              flex: 0.6,
              marginLeft: 2,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={uploadAadhaar}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  marginLeft: 5,
                  fontFamily: 'Montserrat-Medium',
                }}>
                {aadhaarFileName ? (
                  aadhaarFileName
                ) : (
                  <>
                    <Feather name="upload" size={25} color="black" /> Upload
                    Aadhaar
                  </>
                )}
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
        <Animated.View
          style={[
            styles.animatedView,
            {transform: [{translateY: animatedInput6}], flexDirection: 'row'},
          ]}>
          <TextInput
            style={[styles.input, {flex: 0.6, marginLeft: 2}]}
            placeholder="PAN Number"
            placeholderTextColor="gray"
            // activeUnderlineColor="#ea5362"
            maxLength={10}
          />
          <View
            style={{
              flex: 0.6,
              marginLeft: 2,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={uploadPAN}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  marginLeft: 5,
                  fontFamily: 'Montserrat-Medium',
                }}>
                {panFileName ? (
                  panFileName
                ) : (
                  <>
                    <Feather name="upload" size={25} color="black" /> Upload PAN
                  </>
                )}
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View> */}

        {/* <Animated.View
          style={[
            styles.animatedView,
            {transform: [{translateY: animatedRadio1}]},
          ]}>
         <Pressable
            style={{
              flexDirection: "row",
              marginTop: 5,
              alignItems: "flex-start",
            }}
          >
            <View style={{ flex: 0.1 }}>
              <Checkbox
                status={checkedTerms1 ? "checked" : "unchecked"}
                onPress={() => {
                  setCheckedTerms1(!checkedTerms1);
                }}
              />
            </View>
            <View style={{ flex: 0.9 }}>
              <Text
                style={{
                  color: "#373737",
                  fontSize: 18,
                  fontWeight: "400",
                  marginBottom: 3,
                  // marginTop: 5,
                  // textAlign: 'center',
                }}
              >
                Marketing communications from Event Host
              </Text>
              <View style={styles.textContainer}>
                <Text style={styles.text}>
                  I contsent to the processing of my personal data for the
                  purpose of sending me marketing communication as indicated in
                  the <Text style={styles.link}>privacy policy</Text>{" "}
                  <Text style={styles.text}>that i have read</Text>.
                </Text>
              </View>
            </View>
          </Pressable> 
          <Pressable
            style={{
              flexDirection: 'row',
              marginTop: '3%',
              alignItems: 'flex-start',
            }}>
            <View style={{flex: 0.1}}>
              <Checkbox
                status={checkedTerms1 ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCheckedTerms1(!checkedTerms1);
                }}
              />
            </View>
            <View style={{flex: 0.9, marginTop: 3}}>
              <Text
                style={{
                  color: '#373737',
                  fontSize: 16,
                  marginBottom: 3,
                  fontFamily: 'Montserrat-Medium',
                  // marginTop: 5,
                  // textAlign: 'center',
                }}>
                Terms and conditions and Privacy policy
              </Text>
              <View style={styles.textContainer1}>
                <Text style={styles.text}>
                  I confirm that i accept the{' '}
                  <Text style={styles.link}>terms and conditions</Text>{' '}
                  <Text style={styles.text}>and that i have read the </Text>
                  <Text style={styles.link}>privacy policy</Text>
                </Text>
              </View>
            </View>
          </Pressable>
        </Animated.View> */}
        <Animated.View
          style={[
            styles.animatedView,
            {transform: [{translateX: animatedButton}]},
          ]}>
          <TouchableOpacity
            style={styles.otpBtn}
            onPress={() => navigation.navigate('AddProfile')}>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontFamily: 'Montserrat-Medium',
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
    resizeMode: 'cover',
    marginBottom: 32,
  },
  title: {
    color: 'black',
    fontSize: 20,
    // marginBottom: 15,
    fontFamily: 'Montserrat-SemiBold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d5d5d5',
    color: 'black',
    fontSize: 14,
    borderRadius: 10,
    fontFamily: 'Montserrat-Medium',
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
    marginHorizontal: 70,
  },
  animatedView: {
    // marginBottom: 16, // Adjust spacing between animated elements
    // marginBottom: 5,
  },
  textContainer: {
    position: 'relative',
    // top: ,
    borderRadius: 10,
  },
  textContainer1: {
    position: 'relative',
    // top: 30,
    borderRadius: 10,
  },
  text: {
    color: '#878787',
    fontFamily: 'Montserrat-Medium',
  },
  link: {
    textDecorationLine: 'underline',
    textDecorationColor: '#878787',
  },
});
