import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {addsOnProducts, discount} from '../../data/global-data';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';
// import {
//   BottomSheetModal,
//   BottomSheetModalProvider,
//   BottomSheetView,
// } from '@gorhom/bottom-sheet';

export default function ProductDetails({navigation, route}) {
  const product = route.params.ele;
  console.log('product', product);

  const FirstRoute = () => (
    <ScrollView style={{padding: 10}}>
      <Text style={styles.desc}>{product.productDescription}</Text>
    </ScrollView>
  );
  const SecondRoute = () => (
    <ScrollView style={{padding: 10}}>
      <Text
        style={{
          fontSize: 18,
          letterSpacing: 1,
          color: '#555',
          fontFamily: 'Montserrat-Medium',
        }}>
        What's Included
      </Text>
      <View style={{marginTop: 5}}>
        <Text style={styles.desc}>
          <Entypo size={17} color="black" name="dot-single" /> Protective Cover
        </Text>
        <Text style={styles.desc}>
          <Entypo size={17} color="black" name="dot-single" /> Power Cord
        </Text>
      </View>
    </ScrollView>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Descriptions'},
    {key: 'second', title: `What's Included`},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: '#ea5362',
        borderWidth: 2,
        borderColor: 'transparent',
      }}
      style={{backgroundColor: 'transparent'}}
      renderLabel={({route, focused, color}) => (
        <Text
          style={[
            styles.tabLabel,
            focused ? styles.activeTab : styles.inactiveTab,
          ]}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <LinearGradient
        colors={['#ceffa4', '#f4ffeb']}
        style={{paddingTop: 35, paddingBottom: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Pressable style={{flex: 0.1}}>
            <Ionicons
              name="chevron-back-sharp"
              size={30}
              color="#575656"
              style={{marginTop: 5, marginLeft: 4}}
              onPress={() => navigation.goBack()}
            />
          </Pressable>
          <View style={{flex: 0.8, paddingRight: 10}}>
            <Feather
              name="search"
              size={19}
              color="#ea5362"
              style={{position: 'absolute', zIndex: 11111, left: 15, top: 13}}
            />
            <TextInput
              style={{
                backgroundColor: 'white',
                elevation: 3,
                borderRadius: 50,
                width: '100%',
                borderWidth: 1,
                borderColor: 'transparent',
                height: 45,
                padding: 5,
                color: 'black',
                fontSize: 15,
                paddingLeft: 40,
                marginBottom: 10,
                fontFamily: 'Montserrat-SemiBold',
                // letterSpacing: 1,
              }}
              placeholderTextColor="#737373"
              placeholder={`Search`}
            />
          </View>
          <Pressable style={{flex: 0.1, marginTop: 10}}>
            <Text
              style={{
                position: 'absolute',
                top: -7,
                right: 12,
                backgroundColor: '#ea5362',
                color: 'white',
                fontSize: 9,
                textAlign: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 5,
                borderRadius: 50,
                zIndex: 999,
                width: 20,
                height: 20,
                fontFamily: 'Poppins-SemiBold',
              }}>
              5
            </Text>
            <AntDesign name="shoppingcart" color="black" size={25} />
          </Pressable>
        </View>
      </LinearGradient>
      <ScrollView>
        <View style={{backgroundColor: 'white', paddingVertical: 20}}>
          <Image
            style={styles.productImage}
            // source={{
            //   uri: product.productImage,
            // }}
            source={{
              uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/m/y/y/-original-imahfcgwza6fty8w.jpeg?q=70',
            }}
          />
        </View>
        <View>
          <View style={{padding: 15}}>
            <Text
              style={{
                fontSize: 12,
                color: '#0a6fe8',
                // letterSpacing: 1,
                fontFamily: 'Montserrat-Regular',
                marginBottom: 2,
              }}>
              {product.brand}
            </Text>
            <Text style={styles.productName}>
              JBL Go 4, Wireless Ultra Portable Bluetooth Speaker, Pro Sound,
              Vibrant Colors, Water & Dust Proof, Type C (without Mic, Black)
              {/* {product.productName} */}
            </Text>
          </View>

          <View style={{paddingHorizontal: 10}}>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                backgroundColor: '#CC0C39',
                // letterSpacing: 1,
                fontFamily: 'Montserrat-Regular',
                padding: 5,
                marginBottom: 12,
                flexDirection: 'row',
                borderRadius: 5,
                marginRight: 250,
              }}>
              Limited time deal
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 8,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 25,
                    color: '#CC0C39',
                    // letterSpacing: 1,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  -{product.discount}%
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 25,
                    color: 'black',
                    // letterSpacing: 1,
                    fontFamily: 'Montserrat-Bold',
                  }}>
                  {' '}
                  <MaterialIcons
                    name="currency-rupee"
                    size={18}
                    color="black"
                  />
                  {product.productPrice}/Day
                </Text>
              </View>
              {/* <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#f3c6cb1c',
                  borderColor: '#ea5362',
                  borderWidth: 1,
                  // paddingLeft: 7,
                  // paddingRight: 7,
                  borderRadius: 5,
                  padding: 10,
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    // justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <AntDesign name="minus" size={17} color="#ea5362" />
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
                      letterSpacing: 1,
                      fontFamily: 'Poppins-SemiBold',
                    }}>
                    {' '}
                    0{' '}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    // justifyContent: 'flex-end',
                    alignContent: 'flex-end',
                    alignItems: 'center',
                  }}>
                  <AntDesign name="plus" size={17} color="#ea5362" />
                </TouchableOpacity>
              </View> */}
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 13,
                  color: 'black',
                  fontFamily: 'Montserrat-Light',
                }}>
                M.R.P:
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: 'black',
                  // letterSpacing: 1,
                  fontFamily: 'Montserrat-Light',
                  textDecorationLine: 'line-through',
                }}>
                ₹{product.productPrice}
              </Text>
            </View>
            {/* <View>
                <Text style={styles.descTitle}>Description...</Text>
                <Text style={styles.desc}>{product.productDescription} </Text>
              </View> */}
            {/* <View style={{flexDirection: 'row', justifyContent: 'center'}}> */}
            {/* <TouchableOpacity style={styles.cartButton}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#01007B',
                    textAlign: 'center',
                    fontWeight: '500',
                  }}>
                  Add to cart
                </Text>
              </TouchableOpacity> */}
            {/* </View> */}
            {/* <View style={styles.productCrispy}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome name="thumbs-o-up" size={20} color="black" />
                <View style={{marginLeft: 10}}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#777',
                      fontFamily: 'Poppins-Light',
                      letterSpacing: 1,
                    }}>
                    Condition
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'black',
                      fontFamily: 'Poppins-Regular',
                      letterSpacing: 1,
                    }}>
                    As good as new
                  </Text>
                </View>
              </View>
            </View> */}
            <View
              style={{
                borderBottomColor: '#e1e1e1',
                borderColor: '#e1e1e1',
                borderBottomWidth: 1,
                borderWidth: 1,
                marginVertical: 5,
              }}></View>
            <View>
              <Text
                style={{
                  color: '#2c2c2c',
                  fontSize: 15,
                  fontFamily: 'Poppins-Medium',
                  marginTop: 5,
                  letterSpacing: 1,
                }}>
                Offers & Discounts
              </Text>
              <View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {discount.map((dis, vIndex) => (
                    <TouchableOpacity
                      key={vIndex}
                      style={{padding: 5}}
                      // onPress={() => {
                      //   navigation.navigate('VendorProfile', {
                      //     vendorProfile: vdr,
                      //   });
                      // }}
                    >
                      <Image
                        resizeMode="cover"
                        style={{
                          width: 200,
                          height: 110,
                          opacity: 0.6,
                        }}
                        source={require('../../../assets/kiru-discount-03.png')}
                        // source={{
                        //   uri: 'https://ps.w.org/woo-discount-rules/assets/banner-1544x500.png?rev=1977982',
                        // }}
                      />
                      <View style={{position: 'absolute', marginTop: 20}}>
                        <View style={{marginLeft: 30}}>
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 13,
                              letterSpacing: 1,
                              fontFamily: 'Poppins-SemiBold',
                            }}>
                            {dis.offerName.length > 21
                              ? dis.offerName.substring(0, 21) + '...'
                              : dis.offerName}
                          </Text>
                          <Text
                            style={{
                              color: '#434343',
                              fontSize: 10,
                              fontFamily: 'Poppins-Regular',
                              letterSpacing: 1,
                            }}>
                            {`Apply this coupon to ${dis.offerName} your event rent
                        and chill. Great reason to start renting today!`.substring(
                              0,
                              25,
                            )}
                          </Text>
                          <Text
                            style={{
                              color: '#000000',
                              fontSize: 10,
                              fontFamily: 'Poppins-Medium',
                              letterSpacing: 1,
                            }}>
                            Use Coupon Code: {dis.couponCode}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              <View style={[styles.productCrispy, {marginTop: 5}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialCommunityIcons
                    name="truck-outline"
                    size={25}
                    color="black"
                  />
                  <View style={{marginLeft: 10}}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#777',
                        fontFamily: 'Montserrat-Light',
                        // letterSpacing: 1,
                      }}>
                      Delivery
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: 'black',
                        fontFamily: 'Montserrat-Regular',
                        // letterSpacing: 1,
                      }}>
                      Seamless Delivery Guaranteed!
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: '#e1e1e1',
                  borderColor: '#e1e1e1',
                  borderBottomWidth: 1,
                  borderWidth: 1,
                  // marginVertical: 15,
                }}></View>
            </View>
            <Text
              style={{
                color: '#2c2c2c',
                fontSize: 15,
                fontFamily: 'Montserrat-SemiBold',
                marginTop: 5,
                // letterSpacing: 1,
              }}>
              Product Details
            </Text>
            <View
              style={{
                backgroundColor: 'white',
                marginTop: 10,
                // padding: 15,
                borderRadius: 7,
              }}>
              {/* <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{width: layout.width}}
                renderTabBar={renderTabBar}
              /> */}
              <View style={styles.productsDetasilRow}>
                <View style={{flex: 0.4}}>
                  <Text style={styles.productDetailsHead}>Brand</Text>
                </View>
                <View style={{flex: 0.6}}>
                  <Text style={styles.productsDetailsAns}>{product.brand}</Text>
                </View>
              </View>
              <View style={styles.productsDetasilRow}>
                <View style={{flex: 0.4}}>
                  <Text style={styles.productDetailsHead}>Maximum power</Text>
                </View>
                <View style={{flex: 0.6}}>
                  <Text style={styles.productsDetailsAns}>4.2 Watts</Text>
                </View>
              </View>

              <View style={styles.productsDetasilRow}>
                <View style={{flex: 0.4}}>
                  <Text style={styles.productDetailsHead}>Connectivity</Text>
                </View>
                <View style={{flex: 0.6}}>
                  <Text style={styles.productsDetailsAns}>
                    Bluetooth, wireless
                  </Text>
                </View>
              </View>
              <View style={styles.productsDetasilRow}>
                <View style={{flex: 0.4}}>
                  <Text style={styles.productDetailsHead}>
                    Audio output mode
                  </Text>
                </View>
                <View style={{flex: 0.6}}>
                  <Text style={styles.productsDetailsAns}>Stereo</Text>
                </View>
              </View>
              <View style={styles.productsDetasilRow}>
                <View style={{flex: 0.4}}>
                  <Text style={styles.productDetailsHead}>Material</Text>
                </View>
                <View style={{flex: 0.6}}>
                  <Text style={styles.productsDetailsAns}>Fabric</Text>
                </View>
              </View>
              <View style={styles.productsDetasilRow}>
                <View style={{flex: 0.4}}>
                  <Text style={styles.productDetailsHead}>Model Name</Text>
                </View>
                <View style={{flex: 0.6}}>
                  <Text style={styles.productsDetailsAns}>GO 3</Text>
                </View>
              </View>
              <View style={styles.productsDetasilRow}>
                <View style={{flex: 0.4}}>
                  <Text style={styles.productDetailsHead}>Speaker Type</Text>
                </View>
                <View style={{flex: 0.6}}>
                  <Text style={styles.productsDetailsAns}>Portable</Text>
                </View>
              </View>
              <View style={styles.productsDetasilRow}>
                <View style={{flex: 0.4}}>
                  <Text style={styles.productDetailsHead}>Special Feature</Text>
                </View>
                <View style={{flex: 0.6}}>
                  <Text style={styles.productsDetailsAns}>
                    Ultra portable, IP67 Water proof
                  </Text>
                </View>
              </View>

              <View style={styles.productsDetasilRow}>
                <View style={{flex: 0.4}}>
                  <Text style={styles.productDetailsHead}>Recommented Use</Text>
                </View>
                <View style={{flex: 0.6}}>
                  <Text style={styles.productsDetailsAns}>
                    For Smartphones or tablets
                  </Text>
                </View>
              </View>

              <View style={styles.productsDetasilRow}>
                <View style={{flex: 0.4}}>
                  <Text style={styles.productDetailsHead}>
                    Product Dimension
                  </Text>
                </View>
                <View style={{flex: 0.6}}>
                  <Text style={styles.productsDetailsAns}>
                    7.5D X 8.7W X 4.1H Cm
                  </Text>
                </View>
              </View>
              <View style={styles.productsDetasilRow}>
                <View style={{flex: 0.4}}>
                  <Text style={styles.productDetailsHead}>Product Weight</Text>
                </View>
                <View style={{flex: 0.6}}>
                  <Text style={styles.productsDetailsAns}>209 Grams</Text>
                </View>
              </View>
              <View style={styles.productsDetasilRow}>
                <View style={{flex: 0.4}}>
                  <Text style={styles.productDetailsHead}>Battery Life</Text>
                </View>
                <View style={{flex: 0.6}}>
                  <Text style={styles.productsDetailsAns}>5 Hours</Text>
                </View>
              </View>
              <View style={styles.productsDetasilRow}>
                <View style={{flex: 0.4}}>
                  <Text style={styles.productDetailsHead}>Charging Time</Text>
                </View>
                <View style={{flex: 0.6}}>
                  <Text style={styles.productsDetailsAns}>2.5 Hours</Text>
                </View>
              </View>
              <View style={styles.productsDetasilRow}>
                <View style={{flex: 0.4}}>
                  <Text style={styles.productDetailsHead}>Maximum Range</Text>
                </View>
                <View style={{flex: 0.6}}>
                  <Text style={styles.productsDetailsAns}>10 Meters</Text>
                </View>
              </View>
              <View style={styles.productsDetasilRow}>
                <View style={{flex: 0.4}}>
                  <Text style={styles.productDetailsHead}>Manufacture</Text>
                </View>
                <View style={{flex: 0.6}}>
                  <Text style={styles.productsDetailsAns}>
                    Harman International Industries, Inc
                  </Text>
                </View>
              </View>
              <View style={styles.productsDetasilRow}>
                <View style={{flex: 0.4}}>
                  <Text style={styles.productDetailsHead}>
                    Country of Orgin
                  </Text>
                </View>
                <View style={{flex: 0.6}}>
                  <Text style={styles.productsDetailsAns}>India</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: '#e1e1e1',
                borderColor: '#e1e1e1',
                borderBottomWidth: 1,
                borderWidth: 1,
                marginVertical: 15,
              }}></View>
            <Text
              style={{
                color: '#2c2c2c',
                fontSize: 15,
                fontFamily: 'Montserrat-SemiBold',
                // marginTop: 25,
                // letterSpacing: 1,
              }}>
              Product Specification
            </Text>
            <View style={{marginTop: 2}}>
              <Text style={styles.productsDetailsAns}>
                <MaterialCommunityIcons
                  name="star-four-points"
                  size={20}
                  color="black"
                />{' '}
                Ultimate JBL Pro Sound: Enjoy signature JBL bass without any
                distortion.
              </Text>
              <Text style={styles.productsDetailsAns}>
                <MaterialCommunityIcons
                  name="star-four-points"
                  size={20}
                  color="black"
                />{' '}
                Port-anywhere: Feather light, ultra-portable grab-and-go design.
              </Text>
              <Text style={styles.productsDetailsAns}>
                <MaterialCommunityIcons
                  name="star-four-points"
                  size={20}
                  color="black"
                />{' '}
                Charging Time: 2.5 Hrs IP67 water-resistant and dust-resistant:
                Engineered to withstand splashes and sand.
              </Text>
              <Text style={styles.productsDetailsAns}>
                <MaterialCommunityIcons
                  name="star-four-points"
                  size={20}
                  color="black"
                />{' '}
                Quick-Connect: Experience your music and movies without any
                lagging with Bluetooth 5.1’s Insta-sync.
              </Text>
              <Text style={styles.productsDetailsAns}>
                <MaterialCommunityIcons
                  name="star-four-points"
                  size={20}
                  color="black"
                />{' '}
                Mega Playtime: One single charge = upto 5 Hour battery backup
                under optimum audio settings.
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: '#e1e1e1',
                borderColor: '#e1e1e1',
                borderBottomWidth: 1,
                borderWidth: 1,
                marginVertical: 15,
              }}></View>
            <Text
              style={{
                color: '#2c2c2c',
                fontSize: 15,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Frequently Rented Products
            </Text>
            <ScrollView>
              <View style={{flexDirection: 'row'}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {addsOnProducts.map((items, index) => (
                    <Pressable key={index} style={styles.addsOnView}>
                      <View style={{padding: 3}}>
                        <Image
                          style={styles.addsOnImage}
                          source={{
                            uri: items.productImage,
                          }}
                          // source={{
                          //   uri: 'https://playeventrentals.com/wp-content/uploads/2022/03/play-rental-item-eternal-lighting-echomate-247x247.jpg',
                          // }}
                        />
                      </View>
                      <View
                        style={{backgroundColor: 'transparent', padding: 5}}>
                        <Text style={styles.addsOnText}>
                          {items.productName.length < 15
                            ? items.productName
                            : items.productName.substring(0, 14) + '...'}
                        </Text>
                        {/* <View
                          style={{
                            flexDirection: 'row',
                          }}>
                          <MaterialCommunityIcons
                            name="star-box"
                            size={16}
                            color="#236339"
                            style={{
                              marginTop: 2,
                            }}
                          />
                          <View
                            style={{
                              marginLeft: 2,
                            }}>
                            <Text
                              style={{
                                fontSize: 14,
                                color: '#236339',
                                fontFamily: 'Poppins-SemiBold',
                                letterSpacing: 1,
                              }}>
                              4.3
                            </Text>
                          </View>
                        </View> */}
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <View style={{flex: 0.6}}>
                            <Text
                              style={{
                                fontSize: 13,
                                color: 'black',
                                fontFamily: 'Montserrat-SemiBold',
                              }}>
                              <MaterialIcons
                                name="currency-rupee"
                                size={13}
                                color="black"
                              />
                              {items.productPrice}
                            </Text>
                          </View>
                          <View
                            style={{
                              flex: 0.4,
                            }}>
                            <TouchableOpacity
                              style={{
                                backgroundColor: '#ffd7db',
                                borderRadius: 5,
                                height: 30,
                                // width: 60,
                                paddingTop: 5,
                              }}>
                              <Text
                                style={{
                                  fontSize: 13,
                                  color: 'black',
                                  fontFamily: 'Montserrat-Medium',
                                  textAlign: 'center',
                                }}>
                                Add
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </Pressable>
                  ))}
                </ScrollView>
              </View>
            </ScrollView>
            <View
              style={{
                borderBottomColor: '#e1e1e1',
                borderColor: '#e1e1e1',
                borderBottomWidth: 1,
                borderWidth: 1,
                marginVertical: 15,
              }}></View>
            <Text
              style={{
                color: '#2c2c2c',
                fontSize: 15,
                fontFamily: 'Montserrat-SemiBold',
                // letterSpacing: 1,
              }}>
              Customer Reviews
            </Text>
            {Array.from({length: 5}).map((_, index) => (
              <View key={index}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: 10,
                    alignItems: 'center',
                  }}>
                  <View>
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                        resizeMode: 'stretch',
                        alignSelf: 'center',
                        borderRadius: 50,
                      }}
                      // source={{
                      //   uri: showItems.productImage[0]?.imageUrl,
                      // }}
                      source={{
                        uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/m/y/y/-original-imahfcgwza6fty8w.jpeg?q=70',
                      }}
                    />
                  </View>
                  <View style={{marginLeft: 10}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontFamily: 'Montserrat-SemiBold',
                      }}>
                      Kiru
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  {Array.from({length: 5}).map((_, index) => (
                    <AntDesign
                      key={index}
                      name="star"
                      size={15}
                      color="#ffa41d"
                    />
                  ))}
                  {/* <Text
                    style={{
                      color: 'maroon',
                      fontSize: 13,
                      fontFamily: 'Montserrat-Regular',
                      marginLeft: 5,
                    }}>
                    Verified Purchase
                  </Text> */}
                </View>
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginBottom: 1,
                      marginTop: 5,
                      fontFamily: 'Montserrat-SemiBold',
                    }}>
                    Amazing!
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 12,
                      marginBottom: 1,
                      marginTop: 2,
                      fontFamily: 'Montserrat-Regular',
                    }}>
                    Review on 9 July 2024
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 12,
                      marginBottom: 1,
                      marginTop: 5,
                      fontFamily: 'Montserrat-Regular',
                      lineHeight: 18,
                    }}>
                    Every speaker has conditions under which it works best. The
                    JBL Flips sound better on the table. This baby on the other
                    hand sounds amazing on the floor. Just place it on the floor
                    you will think it’s a much larger speaker, sounds
                    incredible. Great bass, dynamic mids and beautiful highs.
                    Just buy it.
                  </Text>
                </View>
              </View>
            ))}
            {/* <View
              style={{
                borderBottomColor: '#e1e1e1',
                borderColor: '#e1e1e1',
                borderBottomWidth: 1,
                borderWidth: 1,
                marginVertical: 15,
              }}></View> */}
            <TouchableOpacity
              style={{
                borderRadius: 20,
                borderColor: 'black',
                borderWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 7,
                alignItems: 'center',
                marginVertical: 25,
                marginHorizontal: 50,
              }}
              onPress={() => navigation.navigate('ProductReview')}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontFamily: 'Montserrat-Medium',
                }}>
                Write a review
              </Text>
              <EvilIcons name="pointer" size={30} color="black" />
            </TouchableOpacity>
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
                // letterSpacing: 1,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              <MaterialIcons name="currency-rupee" size={17} color="black" />
              1500
            </Text>
          </View>
          <View style={{flex: 0.2}}></View>
          <View style={{flex: 0.4}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#ceffa4',
                padding: 7,
                borderRadius: 7,
                padding: 10,
              }}
              onPress={() => {
                navigation.navigate(
                  'CartStack',
                  // {product:product,product2:product2,product3:product3,product4
                  //  {
                  //   category: category,
                  // }
                );
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  // letterSpacing: 1,
                  fontFamily: 'Montserrat-Medium',
                  textAlign: 'center',
                }}>
                Add to cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    // backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  productImage: {
    // marginTop: 20,
    width: 200,
    height: 200,
    alignSelf: 'center',
    // elevation: 2,
    borderRadius: 16,
    resizeMode: 'contain',
  },
  goBackIcon: {
    marginTop: 25,
    marginLeft: 10,
  },
  productName: {
    fontSize: 13,
    // fontWeight: '600',
    color: 'black',
    // letterSpacing: 1,
    // marginBottom: 6,
    fontFamily: 'Montserrat-Medium',
    // textAlign: 'center',
  },
  productCrispy: {
    backgroundColor: 'white',
    borderRadius: 7,
    padding: 8,
    marginBottom: 5,
  },
  tabLabel: {
    // margin: 8,
    fontSize: 13,
    letterSpacing: 1,
    fontFamily: 'Montserrat-Medium',
  },
  activeTab: {
    color: 'black',
  },
  inactiveTab: {
    color: '#696969',
  },
  qtyIcon: {
    borderColor: '#01007B',
    borderWidth: 1,
    padding: 9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#01007B',
    backgroundColor: '#01007B',
  },
  descTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
    color: 'black',
  },
  desc: {
    fontSize: 13,
    // fontWeight: '400',
    marginBottom: 4,
    color: 'black',
    letterSpacing: 1,
    fontFamily: 'Montserrat-Regular',
    // fontStyle: 'italic',
  },
  cartButton: {
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#DADDF8',
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    // width: '50%',
  },
  addsOnView: {
    elevation: 2,
    margin: 5,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: 'white',
    // padding: 5,
    borderRadius: 10,
    // width: '15%',
  },
  addsOnImage: {
    // width: '50%',
    width: 150,
    height: 100,
    resizeMode: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    // borderWidth: 1,
    // borderColor: '#ededed',
    // alignSelf: 'center',
  },
  productPrice: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
  addsOnText: {
    fontSize: 15,
    color: '#2c2c2c',
    letterSpacing: 1,
    fontFamily: 'Montserrat-Bold',
    // width: 200,
    // fontWeight: '500',
    // color: 'black',
    marginBottom: 5,
  },
  productsDetasilRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  productDetailsHead: {
    color: '#2c2c2c',
    fontSize: 13,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 5,
    // letterSpacing: 1,
  },
  productsDetailsAns: {
    color: '#2c2c2c',
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
    marginTop: 5,
    // letterSpacing: 1,
  },
});
