import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {addsOnProducts, discount} from '../../data/global-data';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
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
          fontFamily: 'Poppins-Medium',
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
    <View style={{height: '100%'}}>
      <ScrollView>
        <View style={{backgroundColor: 'white', paddingBottom: 20}}>
          <Pressable style={{flex: 0.1, paddingTop: 20, paddingLeft: 6}}>
            <Ionicons
              name="chevron-back-sharp"
              size={30}
              color="#575656"
              onPress={() => navigation.goBack()}
            />
          </Pressable>
        </View>
        <View style={{backgroundColor: 'white', paddingBottom: 20}}>
          <Image
            style={styles.productImage}
            source={{
              uri: product.productImage,
            }}
          />
        </View>
        <View>
          <View style={{backgroundColor: '#ffd7db', padding: 15}}>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                letterSpacing: 1,
                fontFamily: 'Poppins-Light',
              }}>
              {product.brand}
            </Text>
            <Text style={styles.productName}>{product.productName} </Text>
          </View>

          <View style={{padding: 15}}>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 8,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 17,
                    color: 'black',
                    letterSpacing: 1,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  ₹ {product.productPrice}/Day
                </Text>
              </View>

              <View
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
              </View>
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
            <View style={styles.productCrispy}>
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
            </View>
            <View style={styles.productCrispy}>
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
                    Delivery
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'black',
                      fontFamily: 'Poppins-Regular',
                      letterSpacing: 1,
                    }}>
                    Seamless Delivery Guaranteed!
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: '#2c2c2c',
                  fontSize: 15,
                  fontFamily: 'Poppins-Medium',
                  marginTop: 20,
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
                      style={{marginTop: 10, padding: 5}}
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
                        source={require('../../../assets/Coupon-02.png')}
                        // source={{
                        //   uri: 'https://ps.w.org/woo-discount-rules/assets/banner-1544x500.png?rev=1977982',
                        // }}
                      />
                      <View style={{position: 'absolute', marginTop: 20}}>
                        <View style={{marginLeft: 30, marginTop: 10}}>
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
            </View>
            <Text
              style={{
                color: '#2c2c2c',
                fontSize: 15,
                fontFamily: 'Poppins-Medium',
                marginTop: 20,
                letterSpacing: 1,
              }}>
              Specifications
            </Text>
            <View
              style={{
                backgroundColor: 'white',
                marginTop: 10,
                // padding: 15,
                borderRadius: 7,
              }}>
              <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{width: layout.width}}
                renderTabBar={renderTabBar}
              />
            </View>
            <Text
              style={{
                color: '#2c2c2c',
                fontSize: 15,
                fontFamily: 'Poppins-Medium',
                marginTop: 25,
                marginBottom: 15,
                letterSpacing: 1,
              }}>
              Frequently Rented With '{product.productName}'
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
                        <View
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
                        </View>
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
                                fontFamily: 'Poppins-Medium',
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
                                  fontFamily: 'Poppins-Medium',
                                  textAlign: 'center',
                                }}>
                                + Add
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
                letterSpacing: 1,
                fontFamily: 'Poppins-SemiBold',
              }}>
              <MaterialIcons name="currency-rupee" size={17} color="black" />
              1500
            </Text>
          </View>
          <View style={{flex: 0.2}}></View>
          <View style={{flex: 0.4}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#ea5362',
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
                  color: 'white',
                  fontSize: 18,
                  letterSpacing: 1,
                  fontFamily: 'Poppins-Medium',
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
    width: 300,
    height: 300,
    alignSelf: 'center',
    // elevation: 2,
    borderRadius: 16,
  },
  goBackIcon: {
    marginTop: 25,
    marginLeft: 10,
  },
  productName: {
    fontSize: 23,
    // fontWeight: '600',
    color: 'black',
    letterSpacing: 1,
    // marginBottom: 6,
    fontFamily: 'Poppins-Regular',
    // textAlign: 'center',
  },
  productCrispy: {
    backgroundColor: 'white',
    borderRadius: 7,
    padding: 8,
    marginBottom: 10,
  },
  tabLabel: {
    // margin: 8,
    fontSize: 13,
    letterSpacing: 1,
    fontFamily: 'Poppins-Medium',
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
    fontFamily: 'Poppins-Regular',
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
    fontFamily: 'Poppins-Medium',
    // width: 200,
    // fontWeight: '500',
    // color: 'black',
    // marginBottom: 10,
  },
});
