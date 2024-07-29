import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Pressable,
  ImageBackground,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

export default function OrderSummary({navigation}) {
  const deviceWidth = Dimensions.get('window').width;
  const [showMessage, setShowMessage] = useState(false);
  let todayDate = new Date();
  //   console.log('todayDate', todayDate);
  const handlePay = () => {
    setShowMessage(true);
  };

  function openLink() {
    Linking.openURL('https://maps.app.goo.gl/spyNxz1BQ8ejGd1C6');
  }

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <ScrollView style={{marginVertical: 5}}>
        <Text
          style={{
            fontSize: 20,
            padding: 15,
            fontFamily: 'Montserrat-SemiBold',
            color: 'black',
            // color: '#3f51b5',
            // letterSpacing: 1,
          }}>
          Order Summary
        </Text>
        <View>
          <View style={{padding: 15}}>
            <View>
              {Array.from({length: 5}).map((_, index) => (
                <View
                  key={index}
                  style={{flexDirection: 'row', flex: 1, marginBottom: 10}}>
                  <View style={{flex: 0.6}}>
                    <Text
                      style={{
                        color: '#3c4145',
                        fontSize: 14,
                        fontFamily: 'Montserrat-Medium',
                        textAlign: 'left',
                        // letterSpacing: 1,
                      }}>
                      {'Rental for Canon EOS 5D Mark'.length < 10
                        ? 'Canon EOS 5D Mark'
                        : 'Rental for Canon EOS 5D Mark'.substring(0, 25) +
                          '...'}
                    </Text>
                  </View>
                  <View style={{flex: 0.1}}>
                    <Text
                      style={{
                        color: '#3c4145',
                        fontSize: 14,
                        textAlign: 'right',
                        // letterSpacing: 1,
                        fontFamily: 'Montserrat-Medium',
                      }}>
                      X3
                    </Text>
                  </View>
                  <View style={{flex: 0.3}}>
                    <Text
                      style={{
                        color: '#3c4145',
                        fontSize: 14,
                        textAlign: 'right',
                        // letterSpacing: 1,
                        fontFamily: 'Montserrat-Medium',
                      }}>
                      <MaterialIcons
                        name="currency-rupee"
                        // size={13}
                        color="#3c4145"
                      />
                      1,000
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View
            style={{
              // borderBottomColor: '#e2e2e2',
              borderWidth: 1,
              borderColor: '#e2e2e2',
              borderStyle: 'dashed',
              marginBottom: 15,
            }}></View>
          <View style={{padding: 15}}>
            <View style={{flexDirection: 'row', flex: 1, marginBottom: 10}}>
              <View style={{flex: 0.6}}>
                <Text
                  style={{
                    color: '#3c4145',
                    fontSize: 15,
                    textAlign: 'left',
                    // letterSpacing: 1,
                    fontFamily: 'Montserrat-Medium',
                  }}>
                  Total Item
                </Text>
              </View>

              <View style={{flex: 0.4}}>
                <Text
                  style={{
                    color: '#3c4145',
                    fontSize: 15,
                    textAlign: 'right',
                    // letterSpacing: 1,
                    fontFamily: 'Montserrat-Medium',
                  }}>
                  <MaterialIcons
                    name="currency-rupee"
                    // size={13}
                    color="#3c4145"
                  />
                  10,25,000
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', flex: 1, marginBottom: 10}}>
              <View style={{flex: 0.6}}>
                <Text
                  style={{
                    color: '#3c4145',
                    fontSize: 15,
                    textAlign: 'left',
                    // letterSpacing: 1,
                    fontFamily: 'Montserrat-Medium',
                  }}>
                  Event Box Fee
                </Text>
              </View>

              <View style={{flex: 0.4}}>
                <Text
                  style={{
                    color: '#3c4145',
                    fontSize: 15,
                    textAlign: 'right',
                    // letterSpacing: 1,
                    fontFamily: 'Montserrat-Medium',
                  }}>
                  <MaterialIcons
                    name="currency-rupee"
                    // size={13}
                    color="#3c4145"
                  />
                  20,000
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', flex: 1, marginBottom: 10}}>
              <View style={{flex: 0.6}}>
                <Text
                  style={{
                    color: '#3c4145',
                    fontSize: 15,
                    textAlign: 'left',
                    // letterSpacing: 1,
                    fontFamily: 'Montserrat-Medium',
                  }}>
                  GST 18%
                </Text>
              </View>

              <View style={{flex: 0.4}}>
                <Text
                  style={{
                    color: '#3c4145',
                    fontSize: 15,
                    textAlign: 'right',
                    // letterSpacing: 1,
                    fontFamily: 'Montserrat-Medium',
                  }}>
                  <MaterialIcons
                    name="currency-rupee"
                    // size={13}
                    color="#3c4145"
                  />
                  10,000
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', flex: 1, marginBottom: 10}}>
              <View style={{flex: 0.6}}>
                <Text
                  style={{
                    color: '#3c4145',
                    fontSize: 17,
                    textAlign: 'left',
                    // letterSpacing: 1,
                    fontFamily: 'Montserrat-SemiBold',
                  }}>
                  Total
                </Text>
              </View>

              <View style={{flex: 0.4}}>
                <Text
                  style={{
                    color: '#3c4145',
                    fontSize: 17,
                    textAlign: 'right',
                    letterSpacing: 1,
                    fontFamily: 'Montserrat-SemiBold',
                  }}>
                  <MaterialIcons
                    name="currency-rupee"
                    // size={13}
                    color="#3c4145"
                  />
                  10,45,000
                </Text>
              </View>
            </View>
          </View>
          <View style={{padding: 15}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: '#3c4145',
                  fontSize: 17,
                  textAlign: 'left',
                  // letterSpacing: 1,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                Event Details{' '}
              </Text>
              <TouchableOpacity>
                <Feather name="edit-3" size={17} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'blue',
                  fontSize: 14,
                  textAlign: 'left',
                  marginTop: 5,
                  // letterSpacing: 1,
                  fontFamily: 'Montserrat-Medium',
                }}>
                4th Gen Conference On {moment(todayDate).format('DD-MM-YYYY')}
              </Text>
              {/* <Text
                style={{
                  color: 'blue',
                  fontSize: 14,
                  textAlign: 'left',
                  // letterSpacing: 1,
                  fontFamily: 'Montserrat-Medium',
                }}>
                {' '}
                on{' '}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  textAlign: 'left',
                  // letterSpacing: 1,
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                {moment(todayDate).format('DD-MM-YYYY')}
              </Text> */}
            </View>
            <Text
              style={{
                color: '#3c4145',
                fontSize: 14,
                marginTop: 5,
                // letterSpacing: 1,
                fontFamily: 'Montserrat-Medium',
              }}>
              <Ionicons name="location-sharp" color="#292929" size={18} /> Ibis
              Party Hall, No.26, 1, Hosur Rd, Zuzuvadi, Madiwala, 1st Stage,
              Bommanahalli, Bengaluru, Karnataka 560068
            </Text>
            <TouchableOpacity onPress={openLink}>
              <Text
                style={{
                  color: 'blue',
                  fontSize: 14,
                  marginTop: 5,
                  // letterSpacing: 1,
                  fontFamily: 'Montserrat-Medium',
                }}>
                https://maps.app.goo.gl/spyNxz1BQ8ejGd1C6
              </Text>
            </TouchableOpacity>
            {/* <Text
              style={{
                color: '#292929',
                // color: '#3c4145',
                fontSize: 14,
                fontFamily: 'Montserrat-SemiBold',
                marginTop: 5,
                // letterSpacing: 1,
              }}>
              <MaterialCommunityIcons
                name="calendar-star"
                color="#292929"
                size={16}
              />{' '}
              {moment(todayDate).format('DD-MM-YYYY')}
            </Text> */}
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
              }}>
              <View style={{flex: 0.4}}>
                <Text
                  style={{
                    color: '#292929',
                    // color: '#3c4145',
                    fontSize: 16,
                    fontFamily: 'Montserrat-SemiBold',

                    // letterSpacing: 1,
                  }}>
                  <FontAwesome5 name="user-tie" color="#292929" size={16} />{' '}
                  Receiver
                </Text>
                <Text
                  style={{
                    color: '#3c4145',
                    fontSize: 14,
                    fontFamily: 'Montserrat-Medium',
                    // marginLeft: 20,
                    marginTop: 5,
                  }}>
                  Suman Raj
                </Text>
                <Text
                  style={{
                    color: '#3c4145',
                    fontSize: 14,
                    fontFamily: 'Montserrat-Medium',
                    // marginLeft: 20,
                    marginTop: 5,
                  }}>
                  +91-9843174532
                </Text>
              </View>
              {/* <View style={{flex: 0.4}}>
                <Text
                  style={{
                    color: 'black',
                    // color: '#3c4145',
                    fontSize: 16,
                    fontFamily: 'Montserrat-SemiBold',

                    // letterSpacing: 1,
                  }}>
                  <MaterialCommunityIcons
                    name="steering"
                    color="black"
                    size={16}
                  />{' '}
                  Vehicle Details{' '}
                </Text>
                <Text
                  style={{
                    color: '#3c4145',
                    fontSize: 14,
                    fontFamily: 'Montserrat-Medium',
                    // marginLeft: 20,
                    marginTop: 5,
                  }}>
                  Surender
                </Text>
                <Text
                  style={{
                    color: '#3c4145',
                    fontSize: 14,
                    fontFamily: 'Montserrat-Medium',
                    // marginLeft: 20,
                    marginTop: 5,
                  }}>
                  +91-9843174532
                </Text>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 18,
                    fontFamily: 'Montserrat-Medium',
                    // marginLeft: 20,
                    marginTop: 5,
                  }}>
                  KA 02TR 0006
                </Text>
              </View> */}
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 120, height: 120, marginRight: 10}}>
                <Image
                  source={require('../../../assets/gatepass.jpg')}
                  style={{width: '100%', height: 150, resizeMode: 'contain'}}
                />
              </View>
              <View style={{width: 120, height: 120}}>
                <Image
                  source={require('../../../assets/eventinvitation.jpg')}
                  style={{width: '100%', height: 150, resizeMode: 'contain'}}
                />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: '#ceffa4',
            padding: 15,
            borderRadius: 5,
            marginBottom: 20,
            marginHorizontal: 100,
            elevation: 3,
          }}
          onPress={handlePay}>
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'Montserrat-Medium',
              // letterSpacing: 1,
            }}>
            Pay <MaterialIcons name="currency-rupee" size={17} color="black" />
            10,45,000
          </Text>
        </TouchableOpacity>
        <View
          style={{
            position: 'relative',
            bottom: 0,
            width: '100%',
            padding: 15,
          }}>
          <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
            <View style={{flex: 0.8}}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 13,
                  // letterSpacing: 1,
                }}>
                Safe, easy and secure Payments
              </Text>
            </View>
            <View style={{flex: 0.2}}>
              <Image
                source={require('../../../assets/icons8-magnetic-card-48.png')}
                style={{width: 55, height: 55}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <Modal
        animationIn="slideInUp"
        isVisible={showMessage}
        deviceWidth={deviceWidth}
        style={{
          margin: 0,
          position: 'absolute',
          height: '100%',
          width: '100%',
          // opacity: 0.1,
        }}
        transparent={true}>
        <View>
          <ImageBackground
            // source={{
            //   uri: 'https://cliply.co/wp-content/uploads/2019/08/371908020_CONFETTI_400px.gif',
            // }}
            source={require('../../../assets/371908020_CONFETTI_400px.gif')}
            style={{width: '100%', height: '100%'}}>
            <View
              style={{
                // position: 'absolute',
                zIndex: 1111,
                marginTop: '50%',
                // marginLeft: '35%',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // marginLeft: 70,
                }}>
                <View>
                  <AntDesign
                    name="checkcircle"
                    size={50}
                    color="#5cad2a"
                    style={{textAlign: 'center', marginBottom: 10}}
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Montserrat-Medium',
                      fontSize: 20,
                      textAlign: 'center',
                      letterSpacing: 1,
                    }}>
                    Your booking is confirmed
                  </Text>
                  <Pressable
                    style={{
                      backgroundColor: '#ceffa4',
                      padding: 10,
                      borderRadius: 10,
                      marginTop: 10,
                      margin: 30,
                      elevation: 3,
                    }}
                    onPress={() => {
                      navigation.navigate('Home');
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontFamily: 'Montserrat-Medium',
                        fontSize: 15,
                        // letterSpacing: 1,
                        textAlign: 'center',
                      }}>
                      Go back to home page
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Modal>
    </View>
  );
}
