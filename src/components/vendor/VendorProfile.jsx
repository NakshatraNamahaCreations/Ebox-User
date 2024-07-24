import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Pressable,
  TouchableOpacity,
  Button,
  TextInput,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';

const {width} = Dimensions.get('window');

export default function VendorProfile({navigation, route}) {
  const [isWishlist, setIsWishlist] = useState(false);
  const vendor = route.params.vendorProfile;
  console.log('vendor profile component===', vendor);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const [isModalVisible, setModalVisible] = useState(false);
  const [showItems, setShowItems] = useState({});

  const toggleModal = () => {
    // setShowItems(item);
    setModalVisible(true);
  };
  const closeModal = () => {
    console.log('Modal close triggered');
    setModalVisible(false);
  };

  const animateWishlist = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false, // This must be false for certain properties
    }).start(() => {
      // Optional: You can perform additional actions after animation completes
    });
  };

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
    animateWishlist(); // Call animation function when wishlist state changes
  };

  const heartScale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.2],
  });

  // const scrollViewRef = useRef(null);
  // const [imgActive, setImgActive] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (imgActive < vendor.length - 1) {
  //       scrollViewRef.current.scrollTo({
  //         x: (imgActive + 1) * width,
  //         animated: true,
  //       });
  //     } else {
  //       scrollViewRef.current.scrollTo({x: 0, animated: true});
  //     }
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [imgActive]);

  // const onChange = event => {
  //   const slide = Math.ceil(
  //     event.contentOffset.x / event.layoutMeasurement.width,
  //   );
  //   if (slide !== imgActive) {
  //     setImgActive(slide);
  //   }
  // };

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              backgroundColor: '#f0f0f5',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              padding: 15,
              paddingTop: 25,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{flex: 0.3}}>
                <Pressable>
                  <Ionicons
                    name="chevron-back-sharp"
                    size={25}
                    color="#575656"
                    onPress={() => navigation.goBack()}
                  />
                </Pressable>
              </View>
              <View
                style={{
                  flex: 0.5,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  marginRight: 10,
                }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    alignSelf: 'center',
                  }}
                  source={{uri: vendor.shopImage}}
                />
              </View>

              <View
                style={{
                  flex: 0.2,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  marginRight: 10,
                }}>
                <TouchableOpacity onPress={toggleWishlist}>
                  <Animated.View style={{transform: [{scale: heartScale}]}}>
                    <Octicons
                      name={!isWishlist ? 'heart' : 'heart-fill'}
                      size={25}
                      color={!isWishlist ? '#02060c99' : '#ea5362'}
                    />
                  </Animated.View>
                </TouchableOpacity>
                {/* <Octicons
                  onPress={() => setIsWishlist(!isWishlist)}
                  name={!isWishlist ? 'heart' : 'heart-fill'}
                  size={25}
                  color={!isWishlist ? '#02060c99' : '#ea5362'}
                /> */}
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                borderRadius: 15,
                borderColor: '#e2e2e7',
                borderWidth: 1,
                backgroundColor: 'white',
                padding: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.profileText}>{vendor.shopName} </Text>

                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <MaterialCommunityIcons
                    name="star-box"
                    size={25}
                    color="#236339"
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'black',
                      fontFamily: 'Poppins-Medium',
                      marginTop: 2,
                      letterSpacing: 1,
                      marginLeft: 1,
                    }}>
                    4.1
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.profileHelperText}>{vendor.location} </Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#858585',
                      fontFamily: 'Poppins-Regular',
                      marginTop: 2,
                      marginLeft: 1,
                    }}>
                    100 ratings
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.profile}>
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontSize: 17,
                  color: 'black',
                  textAlign: 'center',
                  fontFamily: 'Poppins-Medium',
                  letterSpacing: 1,
                }}>
                <Ionicons name="flower-outline" size={10} color="black" /> ITEMS{' '}
                <Ionicons name="flower-outline" size={10} color="black" />
              </Text>

              <View style={{marginTop: 15}}>
                <Feather
                  name="search"
                  size={19}
                  color="#ea5362"
                  style={{
                    position: 'absolute',
                    zIndex: 11111,
                    left: 15,
                    top: 13,
                  }}
                />
                <TextInput
                  style={{
                    backgroundColor: '#d1d1d14d',
                    borderRadius: 10,
                    width: '100%',
                    borderWidth: 1,
                    borderColor: 'transparent',
                    height: 50,
                    color: 'black',
                    fontSize: 17,
                    paddingLeft: 40,
                    marginBottom: 10,
                    fontFamily: 'Poppins-Regular',
                  }}
                  placeholderTextColor="#737373"
                  placeholder="Search for items"
                />
              </View>
            </View>
            <View style={{marginTop: 15}}>
              {Array.from({length: 5}).map((ele, index) => (
                <>
                  <Pressable
                    key={index}
                    // onPress={toggleModal}
                    // onPress={() => uncommand this
                    //   navigation.navigate('ProductDetails', {
                    //     ele: ele,
                    //   })
                    // }
                    style={{
                      flexDirection: 'row',
                      margin: 10,
                      marginBottom: 3,
                    }}>
                    <View style={{padding: 5, flex: 0.6}}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 18,
                          // fontWeight: '500',
                          marginBottom: 1,
                          fontFamily: 'Poppins-SemiBold',
                        }}>
                        10W USB Powered Volume Control Speaker
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <MaterialCommunityIcons
                          name="star-box"
                          size={20}
                          color="#236339"
                        />
                        <View
                          style={{
                            marginLeft: 2,
                          }}>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: '500',
                              color: '#236339',
                              fontFamily: 'Poppins-Bold',
                              marginTop: 0,
                              letterSpacing: 1,
                            }}>
                            4.3
                          </Text>
                        </View>
                      </View>
                      <Text
                        style={{
                          fontSize: 17,
                          color: 'black',
                          fontFamily: 'Poppins-Medium',
                        }}>
                        <MaterialIcons
                          name="currency-rupee"
                          size={13}
                          color="black"
                        />
                        1000
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          marginTop: 6,
                          color: '#02060c99',
                          fontFamily: 'Poppins-Medium',
                        }}>
                        10W USB Powered Volume Control Speaker
                        {/* {expandedItems[ele._id] ||
                            ele.productDescription.length < 68
                              ? ele.productDescription
                              : ele.productDescription.substring(0, 67) + '...'} */}
                      </Text>
                      {/* {ele.productDescription.length > 68 ? (
                            <Pressable onPress={() => handleReadMore(ele._id)}>
                              <Text
                                style={{
                                  fontSize: 14,
                                  color: '#02060c99',
                                  fontFamily: 'Poppins-SemiBold',
                                }}>
                                {expandedItems[ele._id]
                                  ? 'show less'
                                  : 'read more'}
                              </Text>
                            </Pressable>
                          ) : (
                            ''
                          )} */}
                    </View>
                    <View style={{flex: 0.4}}>
                      <Pressable onPress={toggleModal}>
                        <Image
                          style={{
                            marginTop: 8,
                            width: 150,
                            height: 150,
                            alignSelf: 'center',
                            borderRadius: 15,
                          }}
                          source={{
                            uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/m/y/y/-original-imahfcgwza6fty8w.jpeg?q=70',
                          }}
                        />
                      </Pressable>
                    </View>
                  </Pressable>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: '#e0e0e0',
                      borderStyle: 'dashed',
                      margin: 10,
                    }}></View>
                </>
              ))}
            </View>
          </View>
          {/* <View
        style={{backgroundColor: '#f7f7f7', marginTop: 15, marginBottom: 30}}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            padding: 15,
            fontFamily: 'Poppins-Medium',
          }}>
          Add Ons you will need
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 15,
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {Array.from({length: 8}).map((_, index) => (
              <View key={index} style={styles.addsOnView}>
                <Image
                  style={styles.addsOnImage}
                  source={{
                    uri: 'https://ik.imagekit.io/faskf16pg/dslr-cameras/38_OgbjFNvll.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661426226096',
                  }}
                />
                <View style={{padding: 5}}>
                  <Text style={styles.addsOnText}>
                    {'Nikkor Z DX 50-250MM'.substring(0, 50)}
                  </Text>

                  <View style={{flexDirection: 'row', marginBottom: 2}}>
                    {Array.from({length: 5}).map((_, index) => (
                      <AntDesign
                        key={index}
                        name="star"
                        size={14}
                        color="#fdd663"
                      />
                    ))}
                    <View style={{marginLeft: 9, marginTop: -2}}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 14,
                          fontFamily: 'Poppins-Medium',
                        }}>
                        45
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.productPrice}>₹ 1000.00</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View> */}
        </ScrollView>
      </View>
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        // animationInTiming={400}
        // animationOut={400}
        // backdropOpacity={0.6}
        style={{
          margin: 0,
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        <TouchableOpacity
          style={{
            position: 'relative',
            top: -20,
            zIndex: 1000,
          }}
          onPress={closeModal}>
          <AntDesign
            name="closecircle"
            size={35}
            color="white"
            style={{textAlign: 'center'}}
          />
        </TouchableOpacity>
        {/* <Button title="Close" color="#841584" onPress={closeModal} /> */}
        <View
          style={{
            backgroundColor: '#e3e3e3',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 15,
          }}>
          <ScrollView>
            <View
              style={{
                backgroundColor: 'white',
                marginBottom: 10,
                borderRadius: 10,
                padding: 6,
              }}>
              <View style={{width: '100%'}}>
                <Image
                  style={{
                    width: '100%',
                    height: 300,
                    resizeMode: 'stretch',
                    alignSelf: 'center',
                    borderRadius: 10,
                  }}
                  source={{
                    uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/m/y/y/-original-imahfcgwza6fty8w.jpeg?q=70',
                  }}
                />
              </View>
              <View style={{padding: 10}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    marginBottom: 1,
                    marginTop: 10,
                    fontFamily: 'Poppins-SemiBold',
                  }}>
                  10W USB Powered Volume Control Speaker
                  {/* {showItems.productName} */}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#fff9ce',
                      borderColor: '#f1e698',
                      borderWidth: 1,
                      alignItems: 'center',
                      flexDirection: 'row',
                      borderRadius: 5,
                    }}>
                    {Array.from({length: 5}).map((_, index) => (
                      <MaterialCommunityIcons
                        key={index}
                        name="star"
                        size={13}
                        color="#ffa41c"
                      />
                    ))}
                  </View>
                  <View
                    style={{
                      marginLeft: 2,
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'black',
                        fontFamily: 'Poppins-Medium',
                        marginTop: 0,
                        letterSpacing: 1,
                        marginTop: 2,
                      }}>
                      {' '}
                      435 ratings
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    marginTop: 6,
                    color: '#696969',
                    fontFamily: 'Poppins-Medium',
                  }}>
                  10W USB Powered Volume Control Speaker
                  {/* {showItems.productDescription} */}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                marginBottom: 10,
                borderRadius: 10,
                padding: 6,
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
              }}>
              <View>
                <Pressable
                  style={{
                    backgroundColor: '#ceffa4',
                    padding: 10,
                    borderRadius: 7,
                    elevation: 3,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontFamily: 'Montserrat-Medium',
                      textAlign: 'center',
                      letterSpacing: 1,
                    }}>
                    Add Item{' '}
                    {/* <MaterialIcons
                      name="currency-rupee"
                      size={14}
                      color="black"
                    />
                    {showItems.productPrice} */}
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#c9c5d152',
    // paddingTop: 10,
    backgroundColor: 'white',
  },
  viewBox: {
    width: width,
    height: 200,
    marginTop: 10,
  },
  imageContainer: {
    borderRadius: 10,
    marginHorizontal: 10,
  },
  bannerImage: {
    width: width - 40,
    height: 200,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  profile: {
    margin: 10,
    // marginTop: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  profileText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
  profileHelperText: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    // marginTop: 5,
  },
  border: {
    borderWidth: 2,
    borderColor: '#f7f7f7',
  },
  productImage: {
    width: 100,
    height: 100,
    // borderRadius: 50,
    alignSelf: 'center',
  },
  productName: {
    // color: '#333',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    marginBottom: 5,
    // textAlign: 'center',
  },
  productPrice: {
    fontSize: 15,
    color: '#414242',
    fontFamily: 'Poppins-SemiBold',
  },
  addsOnView: {
    margin: 5,
    borderWidth: 2,
    borderColor: '#ededf1',
    backgroundColor: 'white',
  },
  addsOnImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  addsOnText: {
    fontSize: 14,
    width: 200,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    marginBottom: 5,
  },
});
