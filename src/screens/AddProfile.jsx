import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import {Picker} from '@react-native-picker/picker';
import Entypo from 'react-native-vector-icons/Entypo';

const screenHeight = Dimensions.get('window').height;

const AddProfile = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [checkedTerms1, setCheckedTerms1] = React.useState(false);
  const [checkedTerms2, setCheckedTerms2] = React.useState(false);
  const [gstUri, setGstUri] = useState('');
  const [gstFileName, setGstFileName] = useState('');
  const [MOAUri, setMOAUri] = useState('');
  const [MOAFileName, setMOAFileName] = useState('');
  const [panUri, setPanUri] = useState('');
  const [panFileName, setPanFileName] = useState('');

  const colorScheme = useColorScheme();

  const companyType = [
    // {
    //   type: 'Select',
    // },
    {
      type: 'Private Limited',
    },
    {
      type: 'Partnership',
    },
    {
      type: 'Proprietorship',
    },
    {
      type: 'Trust',
    },
    //   {
    //     type: 'Individual',
    //   },
  ];

  const animatedInput4 = useRef(new Animated.Value(-screenHeight)).current;
  const animatedInput5 = useRef(new Animated.Value(-screenHeight)).current;
  const animatedInput6 = useRef(new Animated.Value(-screenHeight)).current;

  const animatedInput1 = useRef(new Animated.Value(100)).current;
  const animatedInput2 = useRef(new Animated.Value(300)).current;
  const animatedInput3 = useRef(new Animated.Value(300)).current;
  const animatedButton = useRef(new Animated.Value(400)).current;
  const animatedRadio1 = useRef(new Animated.Value(400)).current;

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

  const resizeImage = async imageUri => {
    const resizedImage = await ImageResizer.createResizedImage(
      imageUri,
      800,
      600,
      'JPEG',
      80,
      0,
    );

    return resizedImage.uri;
  };

  const uploadGSTCert = () => {
    ImagePicker.launchImageLibrary({noData: true}, async response => {
      const source = {uri: response.uri};
      if (response.assets) {
        console.log('Gellery image:', response);
        const fileNAME = response.assets[0].fileName;
        const galleryPic = response.assets[0].uri;
        const resizedImageUri = await resizeImage(galleryPic);
        setGstUri(resizedImageUri);
        setGstFileName(fileNAME);
      }
    });
  };
  const uploadMOA = () => {
    ImagePicker.launchImageLibrary({noData: true}, async response => {
      const source = {uri: response.uri};
      if (response.assets) {
        console.log('Gellery image:', response);
        const fileNAME = response.assets[0].fileName;
        const galleryPic = response.assets[0].uri;
        const resizedImageUri = await resizeImage(galleryPic);
        setMOAUri(resizedImageUri);
        setMOAFileName(fileNAME);
      }
    });
  };
  const uploadPAN = () => {
    ImagePicker.launchImageLibrary({noData: true}, async response => {
      const source = {uri: response.uri};
      if (response.assets) {
        console.log('Gellery image:', response);
        const fileNAME = response.assets[0].fileName;
        const galleryPic = response.assets[0].uri;
        const resizedImageUri = await resizeImage(galleryPic);
        setPanUri(resizedImageUri);
        setPanFileName(fileNAME);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedView,
          {transform: [{translateX: animatedInput6}], marginBottom: 10},
        ]}>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontFamily: 'Montserrat-SemiBold',
          }}>
          Company Details
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
              label="Company Type"
              value=""
              style={{
                fontSize: 14,
                fontFamily: 'Montserrat-Regular',
                // letterSpacing: 1,
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
                  fontSize: 14,
                  fontFamily: 'Montserrat-Regular',
                  // letterSpacing: 1,
                }}
              />
            ))}
          </Picker>
          <View style={{position: 'absolute', right: 20, top: 16}}>
            <Entypo name="chevron-down" size={20} color="black" />
          </View>
        </View>
      </Animated.View>
      <Animated.View
        style={[
          styles.animatedView,
          {transform: [{translateY: animatedInput6}]},
        ]}>
        <TextInput
          style={styles.input}
          placeholder="Company Name"
          placeholderTextColor="gray"
          // activeUnderlineColor="#ea5362"
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.animatedView,
          {transform: [{translateY: animatedInput6}]},
        ]}>
        <TextInput
          style={styles.input}
          placeholder="Designation"
          placeholderTextColor="gray"
          // activeUnderlineColor="#ea5362"
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.animatedView,
          {transform: [{translateY: animatedInput6}]},
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
          {transform: [{translateY: animatedInput6}]},
        ]}>
        <TextInput
          style={styles.input}
          placeholder="MCA Panel Member (Optional)"
          placeholderTextColor="gray"
          // activeUnderlineColor="#ea5362"
        />
      </Animated.View>
      <Animated.View
        style={[
          styles.animatedView,
          {transform: [{translateY: animatedInput6}], flexDirection: 'row'},
        ]}>
        <TextInput
          style={[styles.input, {flex: 0.6, marginLeft: 2}]}
          placeholder="GST Number (Optional)"
          placeholderTextColor="gray"
          // activeUnderlineColor="#ea5362"
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
          placeholder="PAN Number (Optional)"
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
      </Animated.View>
      <Animated.View
        style={[
          styles.animatedView,
          {
            transform: [{translateY: animatedInput6}],
            flexDirection: 'row',
            alignItems: 'center',
          },
        ]}>
        <TextInput
          style={[styles.input, {flex: 0.6, marginLeft: 2}]}
          placeholder="MOA (Optional)"
          placeholderTextColor="gray"
          maxLength={10}
          editable={false}
        />
        <View
          style={{
            flex: 0.6,
            marginLeft: 2,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={uploadMOA}>
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                marginLeft: 5,
                fontFamily: 'Montserrat-Medium',
              }}>
              {MOAFileName ? (
                MOAFileName
              ) : (
                <>
                  <Feather name="upload" size={25} color="black" /> Upload MOA
                </>
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <Animated.View
        style={[
          styles.animatedView,
          {transform: [{translateX: animatedButton}]},
        ]}>
        <TouchableOpacity
          style={{
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
          }}
          onPress={() => navigation.navigate('Enable Location')}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontFamily: 'Montserrat-Medium',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // backgroundColor: '#ceffa42b',
            // height: 50,
            // borderColor: '#ceffa4',
            // borderWidth: 1,
            // padding: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // borderRadius: 50,
            marginTop: '3%',
            // marginHorizontal: 70,
            // elevation: 1,
          }}
          onPress={() => navigation.navigate('Enable Location')}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontFamily: 'Montserrat-Medium',
              textDecorationLine: 'underline',
            }}>
            Skip
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default AddProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
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
  animatedView: {
    // marginBottom: 16, // Adjust spacing between animated elements
    // marginBottom: 5,
  },
});
