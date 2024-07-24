import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import withBackgroundColor from './withBackgroundColor';
import CartHeader from './CartHeader';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {Checkbox} from 'react-native-paper';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
// import {Calendar} from 'react-native-calendars';

const CartHeaderWithBackground = withBackgroundColor(CartHeader, 'white');

export default function Cart({navigation}) {
  const deviceWidth = Dimensions.get('window').width;
  const data = new Date();
  const [showPolicy, setShowPolicy] = useState(false);
  const [checked, setChecked] = useState(false);
  // const [selected, setSelected] = useState('');
  const [invitationImage, setInvitationImage] = useState('');
  const [invitationFileName, setInvitationFileName] = useState('');

  let totalCart = 5;

  const openModal = () => setShowPolicy(true);
  const closeModal = () => setShowPolicy(false);

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

  const uploadInvitation = () => {
    ImagePicker.launchImageLibrary({noData: true}, async response => {
      const source = {uri: response.uri};
      if (response.assets) {
        console.log('Gellery image:', response);
        const fileNAME = response.assets[0].fileName;
        const galleryPic = response.assets[0].uri;
        const resizedImageUri = await resizeImage(galleryPic);
        setInvitationImage(resizedImageUri);
        setInvitationFileName(fileNAME);
      }
    });
  };

  return (
    <>
      <CartHeaderWithBackground cartSize={totalCart} />
      <ScrollView>
        <View style={{marginBottom: 4, paddingTop: 5}}>
          {Array.from({length: 5}).map((_, index) => (
            <View
              key={index}
              style={{
                backgroundColor: 'white',
                padding: 5,
                // border: 'transparent',
                // elevation: 2,
                borderRadius: 2,
                marginTop: 1,
                // marginBottom: 10,
                // marginLeft: 10,
                // marginRight: 10,
              }}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View
                  style={{
                    flex: 0.2,
                    // alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    backgroundColor: '#f5f5f5',
                    width: 60,
                    height: 60,
                  }}>
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      alignSelf: 'center',
                    }}
                    source={{
                      uri: 'https://ik.imagekit.io/faskf16pg/dslr-cameras/38_OgbjFNvll.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661426226096',
                    }}
                  />
                </View>
                <View style={{flex: 0.6, marginLeft: 12}}>
                  <View style={{paddingTop: 15}}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#333',
                        fontFamily: 'Montserrat-SemiBold',
                        // letterSpacing: 1,
                      }}>
                      {'Rental for Canon EOS 5D Mark'.length < 10
                        ? 'Canon EOS 5D Mark'
                        : 'Rental for Canon EOS 5D Mark'.substring(0, 25) +
                          '...'}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View style={{paddingTop: 7}}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 14,
                          fontFamily: 'Montserrat-Medium',
                          letterSpacing: 1,
                        }}>
                        <MaterialIcons
                          name="currency-rupee"
                          // size={13}
                          color="black"
                        />
                        {'1000'}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.2,
                  }}>
                  <TouchableOpacity
                    style={{
                      marginTop: 17,
                      marginBottom: 10,

                      // justifyContent: 'center',
                    }}>
                    <EvilIcons
                      name="trash"
                      size={27}
                      color="#333"
                      style={{textAlign: 'center'}}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: '#ceffa4',
                      // paddingLeft: 7,
                      // paddingRight: 7,
                      borderRadius: 5,
                      padding: 3,
                      justifyContent: 'center',
                      marginHorizontal: 5,
                    }}>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        // justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <AntDesign name="minus" size={17} color="black" />
                    </TouchableOpacity>
                    <View
                      style={{
                        marginLeft: 5,
                        marginRight: 5,
                        // padding: 9,
                      }}>
                      <Text
                        style={{
                          color: 'black',
                          fontFamily: 'Montserrat-SemiBold',
                          // letterSpacing: 1,
                        }}>
                        {' '}
                        1{' '}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        // justifyContent: 'flex-end',
                        alignContent: 'flex-end',
                        alignItems: 'center',
                      }}>
                      <AntDesign name="plus" size={17} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
        <View style={{marginBottom: 5, backgroundColor: 'white', padding: 10}}>
          <Text
            style={{
              color: '#2c2c2c',
              fontSize: 15,
              fontFamily: 'Montserrat-SemiBold',
              // letterSpacing: 1,
            }}>
            Event details
          </Text>
          <View style={{marginVertical: 10}}>
            <View style={{marginVertical: 5}}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Montserrat-Medium',
                  marginVertical: 3,
                }}>
                Event Date
              </Text>
              <TextInput
                style={{
                  borderRadius: 10,
                  // width: '100%',
                  // height: 50,
                  padding: 5,
                  color: 'black',
                  fontFamily: 'Montserrat-Medium',
                  paddingLeft: 16,
                  borderColor: '#d7d7d7',
                  borderWidth: 1,
                  marginTop: 5,
                  // letterSpacing: 1,
                }}
                value={moment(data).format('ll')}
                editable={false}
              />
              {/* <Calendar
                onDayPress={day => {
                  console.log('selected day', day);
                }}
                // markedDates={{
                // [selected]: {
                // selected: true,
                // disableTouchEvent: true,
                // selectedDotColor: 'orange',
                // marked: true,
                // selectedColor: 'yellow',
                // },
                // }}
              /> */}
            </View>
            <View style={{marginVertical: 5}}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Montserrat-Medium',
                  marginVertical: 3,
                }}>
                Event Name
              </Text>
              <TextInput
                placeholder="Enter event name"
                placeholderTextColor="#a3a3a3"
                style={{
                  borderRadius: 10,
                  // width: '100%',
                  // height: 50,
                  padding: 5,
                  color: 'black',
                  fontFamily: 'Montserrat-Medium',
                  paddingLeft: 16,
                  borderColor: '#d7d7d7',
                  borderWidth: 1,
                  marginTop: 5,
                  // letterSpacing: 1,
                }}
              />
            </View>
            <View style={{marginVertical: 5}}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Montserrat-Medium',
                  marginVertical: 3,
                }}>
                Event Address
              </Text>
              <TextInput
                placeholder="e.g. The Leela Palace, 23, HAL Old Airport Rd, HAL 2nd Stage, Kodihalli, Bengaluru, Karnataka 560008"
                placeholderTextColor="#a3a3a3"
                multiline
                numberOfLines={4}
                maxLength={40}
                style={{
                  textAlignVertical: 'top',
                  borderRadius: 10,
                  // width: '100%',
                  // height: 50,
                  padding: 10,
                  color: 'black',
                  fontFamily: 'Montserrat-Medium',
                  paddingLeft: 16,
                  borderColor: '#d7d7d7',
                  borderWidth: 1,
                  marginTop: 5,
                  // letterSpacing: 1,
                }}
              />
              <TextInput
                placeholder="Google map link (optional)"
                placeholderTextColor="#a3a3a3"
                style={{
                  borderRadius: 10,
                  // width: '100%',
                  // height: 50,
                  padding: 5,
                  color: 'black',
                  fontFamily: 'Montserrat-Medium',
                  paddingLeft: 16,
                  borderColor: '#d7d7d7',
                  borderWidth: 1,
                  marginTop: 5,
                  // letterSpacing: 1,
                }}
              />
            </View>
            <View
              style={{
                marginVertical: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                // borderBottomColor: '#d7d7d7',
                // borderBottomWidth: 1,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Montserrat-Medium',
                  marginVertical: 3,
                  flex: 0.6,
                }}>
                Event Invitation
              </Text>
              <TouchableOpacity onPress={uploadInvitation}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 13,
                    marginLeft: 5,
                    fontFamily: 'Montserrat-Medium',
                  }}>
                  {invitationFileName ? (
                    invitationFileName
                  ) : (
                    <>
                      <Feather name="upload" size={25} color="black" />
                      Upload invitation
                    </>
                  )}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginVertical: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Montserrat-Medium',
                  marginVertical: 3,
                  flex: 0.6,
                }}>
                Gate Pass
              </Text>
              <TouchableOpacity onPress={uploadInvitation}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 13,
                    marginLeft: 5,
                    fontFamily: 'Montserrat-Medium',
                  }}>
                  {invitationFileName ? (
                    invitationFileName
                  ) : (
                    <>
                      <Feather name="upload" size={25} color="black" />
                      Upload gate pass
                    </>
                  )}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginVertical: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flex: 0.6, marginRight: 2}}>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Montserrat-Medium',
                    marginVertical: 3,
                  }}>
                  Receiver Name
                </Text>
                <TextInput
                  // placeholder="Enter receiver name"
                  placeholderTextColor="#a3a3a3"
                  style={{
                    borderRadius: 10,
                    // width: '100%',
                    // height: 50,
                    padding: 5,
                    color: 'black',
                    fontFamily: 'Montserrat-Medium',
                    paddingLeft: 16,
                    borderColor: '#d7d7d7',
                    borderWidth: 1,
                    marginTop: 5,
                    // letterSpacing: 1,
                  }}
                />
              </View>
              <View style={{flex: 0.6, marginLeft: 2}}>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Montserrat-Medium',
                    marginVertical: 3,
                  }}>
                  Receiver Mobile Number
                </Text>
                <TextInput
                  // placeholder="Enter receiver Mobilenumber"
                  placeholderTextColor="#a3a3a3"
                  style={{
                    borderRadius: 10,
                    // width: '100%',
                    // height: 50,
                    padding: 5,
                    color: 'black',
                    fontFamily: 'Montserrat-Medium',
                    paddingLeft: 16,
                    borderColor: '#d7d7d7',
                    borderWidth: 1,
                    marginTop: 5,
                    // letterSpacing: 1,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                marginVertical: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flex: 0.6, marginRight: 2}}>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Montserrat-Medium',
                    marginVertical: 3,
                  }}>
                  Vehicle Number
                </Text>
                <TextInput
                  placeholder="Vehical no (optional)"
                  placeholderTextColor="#a3a3a3"
                  style={{
                    borderRadius: 10,
                    // width: '100%',
                    // height: 50,
                    padding: 5,
                    color: 'black',
                    fontFamily: 'Montserrat-Medium',
                    paddingLeft: 16,
                    borderColor: '#d7d7d7',
                    borderWidth: 1,
                    marginTop: 5,
                    // letterSpacing: 1,
                  }}
                />
              </View>
              <View style={{flex: 0.6, marginLeft: 2}}>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Montserrat-Medium',
                    marginVertical: 3,
                  }}>
                  Driver Name
                </Text>
                <TextInput
                  placeholder="Driver name (optional)"
                  placeholderTextColor="#a3a3a3"
                  style={{
                    borderRadius: 10,
                    // width: '100%',
                    // height: 50,
                    padding: 5,
                    color: 'black',
                    fontFamily: 'Montserrat-Medium',
                    paddingLeft: 16,
                    borderColor: '#d7d7d7',
                    borderWidth: 1,
                    marginTop: 5,
                    // letterSpacing: 1,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                marginVertical: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flex: 0.6, marginRight: 2}}>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Montserrat-Medium',
                    marginVertical: 3,
                  }}>
                  Driver Mobile Number
                </Text>
                <TextInput
                  placeholder="mobile no (optional)"
                  placeholderTextColor="#a3a3a3"
                  keyboardType="numeric"
                  maxLength={10}
                  style={{
                    borderRadius: 10,
                    // width: '100%',
                    // height: 50,
                    padding: 5,
                    color: 'black',
                    fontFamily: 'Montserrat-Medium',
                    paddingLeft: 16,
                    borderColor: '#d7d7d7',
                    borderWidth: 1,
                    marginTop: 5,
                    // letterSpacing: 1,
                  }}
                />
              </View>
              <View style={{flex: 0.6, marginLeft: 2}}>
                {/* <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Montserrat-Medium',
                    marginVertical: 3,
                  }}>
                  Receiver Mobile Number
                </Text>
                <TextInput
                  // placeholder="Enter receiver Mobilenumber"
                  placeholderTextColor="#a3a3a3"
                  style={{
                    borderRadius: 10,
                    // width: '100%',
                    // height: 50,
                    padding: 5,
                    color: 'black',
                    fontFamily: 'Montserrat-Medium',
                    paddingLeft: 16,
                    borderColor: '#d7d7d7',
                    borderWidth: 1,
                    marginTop: 5,
                    // letterSpacing: 1,
                  }}
                /> */}
              </View>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'white', padding: 10}}>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#eee',
              padding: 15,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomColor: '#e1e1e1',
              // borderBottomWidth: 2,
              // backgroundColor: 'white',
              // elevation: 1,
            }}>
            <Text
              style={{
                color: '#2c2c2c',
                fontSize: 15,
                fontFamily: 'Montserrat-SemiBold',
                // letterSpacing: 1,
              }}>
              Bill details
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderTopWidth: 0,
              padding: 15,
              borderColor: '#eee',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Montserrat-Medium',
                    // letterSpacing: 1,
                  }}>
                  Total Item
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Montserrat-Medium',
                    // letterSpacing: 1,
                  }}>
                  <MaterialIcons
                    name="currency-rupee"
                    size={14}
                    color="black"
                  />
                  10,25,000{' '}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Montserrat-Medium',
                    // letterSpacing: 1,
                  }}>
                  Event Box Fee
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Montserrat-Medium',
                    // letterSpacing: 1,
                  }}>
                  <MaterialIcons
                    name="currency-rupee"
                    size={14}
                    color="black"
                  />
                  20,000{' '}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Montserrat-Medium',
                    // letterSpacing: 1,
                  }}>
                  GST 18%
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Montserrat-Medium',
                    // letterSpacing: 1,
                  }}>
                  <MaterialIcons
                    name="currency-rupee"
                    size={14}
                    color="black"
                  />
                  10,000{' '}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 15,
                    letterSpacing: 1,
                  }}>
                  You Pay
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 15,
                    letterSpacing: 1,
                  }}>
                  {' '}
                  <MaterialIcons
                    name="currency-rupee"
                    size={13}
                    color="black"
                  />
                  10,45,000{' '}
                </Text>
              </View>
            </View>
          </View>
          {/* <View style={{marginTop: 10, marginBottom: 10}}>
            <View
              style={{
                borderColor: '#E3A400',
                borderWidth: 1,
                borderRadius: 5,
                height: 80,
                marginLeft: 10,
              }}></View>
            <Pressable>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#E7B32C', '#E39200']}
                style={{
                  // backgroundColor: '#E3A400',
                  marginTop: -70,
                  elevation: 1,
                  borderColor: 'transparent',
                  borderWidth: 0,
                  marginLeft: -2,
                  marginRight: 10,
                  height: 80,
                  borderRadius: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 15,
                }}>
                <Image
                  source={require('../../../assets/write.png')}
                  style={{width: 50, height: 50}}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    padding: 10,
                    fontFamily: 'Poppins-SemiBold',
                  }}>
                  DESIGN YOUR MOOD BOARD{' '}
                </Text>
                <AntDesign
                  style={{marginLeft: 50}}
                  name="right"
                  color={'white'}
                  size={15}
                />
              </LinearGradient>
            </Pressable>
          </View> */}
        </View>
        <View
          style={{
            marginTop: 5,
            marginBottom: 20,
            backgroundColor: 'white',
            paddingLeft: 5,
          }}>
          <View style={{padding: 5}}>
            <Text
              style={{
                // textAlign: 'left',
                fontSize: 13,
                color: 'green',
                // textDecorationLine: 'underline',
                fontFamily: 'Montserrat-SemiBold',
                // letterSpacing: 1,
              }}>
              Terms & Conditions
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  // textAlign: 'left',
                  color: 'black',
                  // letterSpacing: 1,
                  // textDecorationLine: 'underline',
                  fontFamily: 'Montserrat-Medium',
                  marginTop: 6,
                }}>
                {`Once booked service, you will get to chat with vendors/ Celebrities/ DJs/ etc. You will be provided with their managers or PAs numbers. Please DO NOT misuse or engage in shady activities. Your account will be terminated immediately.`.substring(
                  0,
                  79,
                )}
              </Text>
              <TouchableOpacity onPress={openModal}>
                <Text
                  style={{
                    fontSize: 12,
                    // textAlign: 'left',
                    color: 'black',
                    letterSpacing: 1,
                    textDecorationLine: 'underline',
                    fontFamily: 'Montserrat-SemiBold',
                    marginTop: 6,
                  }}>
                  Read More
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: 'white',
          borderTopColor: '#e1e1e1',
          borderWidth: 1,
          borderColor: 'transparent',
        }}>
        <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
          <View style={{flex: 0.4}}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
                fontFamily: 'Montserrat-SemiBold',
                // letterSpacing: 1,
              }}>
              <MaterialIcons name="currency-rupee" size={17} color="black" />
              10,45,000
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#555',
                fontFamily: 'Montserrat-Medium',
                // letterSpacing: 1,
                // marginTop: 5,
              }}>
              Grand Total
            </Text>
          </View>
          <View style={{flex: 0.6}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#ceffa4',
                padding: 15,
                borderRadius: 7,
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'space-between',
              }}
              onPress={() => {
                navigation.navigate(
                  // 'Add Address',
                  'Company Details',
                  // {product:product,product2:product2,product3:product3,product4
                  //  {
                  //   category: category,
                  // }
                );
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  fontFamily: 'Montserrat-SemiBold',
                  // letterSpacing: 1,
                }}>
                Checkout
              </Text>
              <AntDesign
                style={{marginTop: 4}}
                name="arrowright"
                size={15}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        animationIn="slideInUp"
        isVisible={showPolicy}
        deviceWidth={deviceWidth}
        style={{
          margin: 5,
          position: 'absolute',
          width: '100%',
          backgroundColor: 'white',
          shadowColor: '#000',
          marginTop: '15%',
        }}
        transparent={true}>
        <TouchableOpacity
          style={{position: 'absolute', right: '50%', top: -40}}
          onPress={closeModal}>
          <AntDesign
            name="closecircleo"
            color={'white'}
            size={35}
            onPress={closeModal}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: 'black',
            textAlign: 'center',
            padding: 10,
            fontFamily: 'Montserrat-Medium',
            // letterSpacing: 1,
          }}>
          Terms & Conditions
        </Text>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              // marginTop: 10,
              // marginBottom: 10,
              padding: 10,
            }}>
            <View style={{flex: 0.1}}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </View>
            <View style={{flex: 0.9}}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 13,
                  lineHeight: 17,
                  // letterSpacing: 1,
                }}>
                Once booked service, you will get to chat with
                vendors/Celebrities/DJs/ etc. You will be provided with their
                managers or PAs numbers. Please DO NOT misuse or engage in shady
                activities. Your account will be terminated immediately.
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', padding: 10}}>
            <View style={{flex: 0.1}}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </View>
            <View style={{flex: 0.9}}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 13,
                  lineHeight: 17,
                  // letterSpacing: 1,
                }}>
                Once booked service, an item will have a breathing room of 2
                HRS, after that you will charged a fee amount.
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', padding: 10}}>
            <View style={{flex: 0.1}}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </View>
            <View style={{flex: 0.9}}>
              <Text
                style={{
                  color: 'black',
                  lineHeight: 17,
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 13,
                  // letterSpacing: 1,
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis.
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', padding: 10}}>
            <View style={{flex: 0.1}}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </View>
            <View style={{flex: 0.9}}>
              <Text
                style={{
                  color: 'black',
                  lineHeight: 17,
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 13,
                  // letterSpacing: 1,
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis.
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', padding: 10}}>
            <View style={{flex: 0.1}}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </View>
            <View style={{flex: 0.9}}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 13,
                  // letterSpacing: 1,
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis.
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={{padding: 20}}>
          <Pressable
            onPress={closeModal}
            style={{
              borderRadius: 5,
              padding: 10,
              backgroundColor: '#ceffa4',
              marginHorizontal: 100,
              elevation: 3,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontFamily: 'Montserrat-Medium',
                textAlign: 'center',
                letterSpacing: 1,
              }}>
              Done
            </Text>
          </Pressable>
        </View>
      </Modal>
    </>
  );
}
