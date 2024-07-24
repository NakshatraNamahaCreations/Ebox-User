import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import {Picker} from '@react-native-picker/picker';

function UpdateAccount({navigation}) {
  const [userName, setUserName] = useState('John Davis');
  const [email, setEmail] = useState('davisjohn@gmail.com');
  const [phone, setPhone] = useState('8526190332');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [companyName, setCompanyName] = useState('Idela Logics');
  const [designation, setDesignation] = useState('Team Lead');
  const [mDName, setMDName] = useState('Jimin');
  const [mcaPanelNumber, setMcaPanelNumber] = useState('L17110MH1973PLC019786');
  const [gstNumber, setGstNumber] = useState('29AAACH7409R1ZX');

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
    <>
      <View
        style={{
          padding: 10,
          backgroundColor: 'white',
          height: '100%',
        }}>
        <ScrollView>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontFamily: 'Montserrat-SemiBold',
              marginVertical: 10,
            }}>
            BASIC DETAILS
          </Text>
          <TextInput
            placeholder="NAME"
            placeholderTextColor="#7d8592"
            textColor="black"
            underlineColor="black"
            activeUnderlineColor="#ea5362"
            autoCapitalize="none"
            style={styles.input}
            onChangeText={text => setUserName(text)}
            value={userName}
          />
          <TextInput
            placeholder="PHONE NUMBER"
            placeholderTextColor="#7d8592"
            textColor="black"
            underlineColor="black"
            activeUnderlineColor="#ea5362"
            autoCapitalize="none"
            keyboardType="numeric"
            style={styles.input}
            value={phone}
            onChangeText={text => setPhone(text)}
          />
          <TextInput
            placeholder="EMAIL ADDRESS"
            placeholderTextColor="#7d8592"
            textColor="black"
            underlineColor="black"
            activeUnderlineColor="#ea5362"
            autoCapitalize="none"
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontFamily: 'Montserrat-SemiBold',
                marginVertical: 10,
              }}>
              COMPANY DETAILS
            </Text>
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
                  label="COMPANY TYPE"
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
                      fontSize: 16,
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
            <View>
              <TextInput
                style={styles.input}
                placeholder="COMPANY NAME"
                placeholderTextColor="#7d8592"
                textColor="black"
                underlineColor="black"
                activeUnderlineColor="#ea5362"
                onChangeText={text => setCompanyName(text)}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="DESIGNATION"
                placeholderTextColor="#7d8592"
                textColor="black"
                underlineColor="black"
                activeUnderlineColor="#ea5362"
                onChangeText={text => setDesignation(text)}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="NAME"
                placeholderTextColor="#7d8592"
                textColor="black"
                underlineColor="black"
                activeUnderlineColor="#ea5362"
                onChangeText={text => setMDName(text)}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="MCA PANEL NUMBER (OPTIONAL)"
                placeholderTextColor="#7d8592"
                textColor="black"
                underlineColor="black"
                activeUnderlineColor="#ea5362"
                onChangeText={text => setMcaPanelNumber(text)}
              />
            </View>
            <View
              style={[
                {
                  flexDirection: 'row',
                },
              ]}>
              <TextInput
                style={[styles.input, {flex: 0.6, marginLeft: 2}]}
                placeholder="GST NUMBER"
                placeholderTextColor="#7d8592"
                textColor="black"
                underlineColor="black"
                activeUnderlineColor="#ea5362"
                onChangeText={text => setGstNumber(text)}
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
                        <Feather name="upload" size={25} color="black" /> UPLOAD
                        GST CERT{' '}
                      </>
                    )}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={[
                {
                  flexDirection: 'row',
                },
              ]}>
              <TextInput
                style={[styles.input, {flex: 0.6, marginLeft: 2}]}
                placeholder="PAN NUMBER"
                placeholderTextColor="#7d8592"
                textColor="black"
                underlineColor="black"
                activeUnderlineColor="#ea5362"
                onChangeText={text => setPanNumber(text)}
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
                        <Feather name="upload" size={25} color="black" /> UPLOAD
                        PAN
                      </>
                    )}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 150,
              }}>
              <TextInput
                style={[styles.input, {flex: 0.6, marginLeft: 2}]}
                placeholder="MOA"
                placeholderTextColor="#7d8592"
                textColor="black"
                underlineColor="black"
                activeUnderlineColor="#ea5362"
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
                        <Feather name="upload" size={25} color="black" /> UPLOAD
                        MOA
                      </>
                    )}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          position: 'absolute',
          bottom: 1,
          width: '100%',
        }}>
        <TouchableOpacity
          style={{
            // marginTop: 20,
            backgroundColor: '#ceffa4',
            padding: 15,
            borderRadius: 5,
            elevation: 3,
            // marginBottom: 20,
          }}
          onPress={() => {
            navigation.navigate('You');
          }}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Montserrat-Medium',
              textAlign: 'center',
              fontSize: 18,
              // letterSpacing: 1,
            }}>
            UPDATE PROFILE
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
});

export default UpdateAccount;
