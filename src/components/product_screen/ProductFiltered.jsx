import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {categories, priceFilter, productList} from '../../data/global-data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {Modal} from 'react-native-paper';
// import BottomSheet from 'react-native-simple-bottom-sheet';
// import RBSheet from 'react-native-raw-bottom-sheet';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import {RadioButton} from 'react-native-paper';

const {width} = Dimensions.get('window');

function ProductFiltered({route}) {
  const deviceWidth = Dimensions.get('window').width;
  const [checked, setChecked] = React.useState('first');
  const navigation = useNavigation();
  const category = route.params.category;
  const refRBSheet = useRef();
  const [isModalVisible, setModalVisible] = useState(false);
  const [showItems, setShowItems] = useState({});

  const toggleModal = item => {
    setShowItems(item);
    setModalVisible(!isModalVisible);
  };
  const [showOptions, setShowOptions] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const [showPrice, setShowPrice] = useState(true);
  const [showBrand, setShowBrand] = useState(false);
  const [showShop, setShowShop] = useState(false);

  const [expandedItems, setExpandedItems] = useState({});
  const filteredProducts = productList.filter(
    item => item.categoryId === category._id,
  );
  console.log('filteredProducts>>>>>>', filteredProducts);
  const [showFilter, setShowFilter] = useState(null);

  const filteredProduct = item => {
    const showProduct = productList.filter(
      category => category.categoryId === item._id,
    );
    setShowFilter(showProduct);
  };

  // console.log('productList', productList);
  // console.log(
  //   'showFilter>>>',
  //   showFilter?.length === 0 ? 'No products' : 'Yes products',
  // );

  const panelRef = useRef(null);

  const vendor = [
    {
      shopName: 'Shri Vinayaka Rents',
      vendorName: 'Vinayaka',
      location: 'Channasandra',
      rating: 4.5,
      discount: 30,
      clausesCondition: 'above ₹75',
      vendorBannerImage: [
        {
          imageUrl:
            'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaA8j3JXCUJK6s0E139bWxzBDGcLkBaAaZBUycCpQo-9_9JZf99E2r7QQrTKS7qyNNmk&usqp=CAU',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-qEOjAIUbs_tt9F5PFoFXzTsCvcTCr-xEpJsbaaEyp2mXkCZzv-yjkn1MzV5TEUr1rw&usqp=CAU',
        },
      ],
    },
    {
      shopName: 'Nayak Digitals',
      vendorName: 'Nayakan',
      location: 'Banashankari',
      rating: 4.3,
      discount: 20,
      clausesCondition: 'above ₹499',
      vendorBannerImage: [
        {
          imageUrl:
            'https://lh3.googleusercontent.com/p/AF1QipOV6toil7D3V_8hdR04NcbKC3tpOaG6BQKrwNR-=s680-w680-h510',
        },
        {
          imageUrl:
            'https://lh3.googleusercontent.com/p/AF1QipN5gR_rQob6ywAzN6KgTasz7-NEU6seZjtHs6Q6=s680-w680-h510',
        },
        {
          imageUrl:
            'https://lh3.googleusercontent.com/p/AF1QipOvmutDqf12OuCsy-f_NRf6B03W46ZRqhPe7bch=s680-w680-h510',
        },
      ],
    },
    {
      shopName: 'Mani Enterprises',
      vendorName: 'Mani Thiruvenkadam',
      location: 'Majestic',
      rating: 5,
      vendorBannerImage: [
        {
          imageUrl:
            'https://lh3.googleusercontent.com/p/AF1QipPXLvQb1Va5haLR42be6Jnz35WemPmaJDjmJX6W=s680-w680-h510',
        },
        {
          imageUrl:
            'https://content.jdmagicbox.com/comp/nalgonda/m3/9999p8682.8682.201203170035.l9m3/catalogue/-8t9w2ohcqk.jpg',
        },
        {
          imageUrl:
            'https://www.daytonlocal.com/images/profiles/covers/special-occasions-party-supply.jpg',
        },
      ],
    },
  ];

  const handleReadMore = id => {
    setExpandedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the expanded state
    }));
  };

  const scrollViewRef = useRef(null);
  const [imgActive, setImgActive] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (imgActive < vendor.length - 1) {
  //       scrollViewRef.current.scrollTo({
  //         x: (imgActive + 1) * width,
  //         animated: true,
  //       });
  //     } else {
  //       scrollViewRef.current?.scrollTo({x: 0, animated: true});
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

  // const VendorImageSlider = ({images}) => {
  //   const scrollViewRef = useRef(null);
  //   const [currentIndex, setCurrentIndex] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       const nextIndex = (currentIndex + 1) % images.length;
  //       setCurrentIndex(nextIndex);
  //       scrollViewRef.current.scrollTo({x: nextIndex * width, animated: true});
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, [currentIndex, images.length]);

  //   return (
  //     <View style={{position: 'relative'}}>
  //       <ScrollView
  //         ref={scrollViewRef}
  //         horizontal
  //         pagingEnabled
  //         showsHorizontalScrollIndicator={false}
  //         style={styles.sliderContainer}>
  //         {images.map((image, index) => (
  //           <Image
  //             key={index}
  //             source={{uri: image.imageUrl}}
  //             style={styles.sliderImage}
  //           />
  //         ))}
  //       </ScrollView>
  //       <View style={styles.paginationDots}>
  //         {images.map((_, index) => (
  //           <Text
  //             key={index}
  //             style={currentIndex === index ? styles.dotActive : styles.dot}>
  //             ●
  //           </Text>
  //         ))}
  //       </View>
  //     </View>
  //   );
  // };

  const openModal = () => {
    setShowOptions(true);
  };
  const openFilterModal = () => {
    setShowFilters(true);
  };
  // const FirstRoute = () => (
  // <ScrollView>
  //   <View style={{flex: 1, backgroundColor: 'white'}}>
  //     {filteredProducts.length === 0 ? (
  //       <Text
  //         style={{
  //           marginTop: 30,
  //           color: '#878697',
  //           fontSize: 17,
  //           fontWeight: '500',
  //           fontFamily: 'Poppins-SemiBold',
  //           textAlign: 'center',
  //         }}>
  //         {`No results for ${category.categoryName.toLowerCase()}`}
  //       </Text>
  //     ) : (
  //       <>
  //         <View
  //           style={{
  //             marginLeft: 5,
  //             flexDirection: 'row',
  //             justifyContent: 'space-evenly',
  //             alignItems: 'center',
  //             marginTop: 20,
  //           }}>
  //           <View
  //             style={{
  //               flex: 0.1,
  //               borderBottomWidth: 1,
  //               borderBottomColor: '#e0e0e0',
  //             }}></View>
  //           <View style={{flex: 0.8}}>
  //             <Text
  //               style={{
  //                 // marginTop: 30,
  //                 color: '#696969',
  //                 fontSize: 15,
  //                 textAlign: 'center',
  //                 fontFamily: 'Poppins-Medium',
  //                 letterSpacing: 3,
  //               }}>
  //               {`ALL SHOPS OFFERING ${category.categoryName.toUpperCase()}`}
  //             </Text>
  //           </View>

  //           <View
  //             style={{
  //               flex: 0.1,
  //               borderBottomWidth: 1,
  //               borderBottomColor: '#e0e0e0',
  //             }}></View>
  //         </View>
  //         <ScrollView contentContainerStyle={styles.scrollViewContent}>
  //           {vendor.map((vendor, vIndex) => (
  //             <Pressable
  //               key={vIndex}
  //               style={{marginBottom: 30}}
  //               onPress={() => {
  //                 navigation.navigate('VendorProfile', {
  //                   vendorProfile: vendor,
  //                 });
  //               }}>
  //               <View style={styles.vendorContainer}>
  //                 <TouchableOpacity
  //                   style={{
  //                     marginTop: 10,
  //                     position: 'absolute',
  //                     right: 20,
  //                     zIndex: 1,
  //                     width: 40,
  //                     height: 40,
  //                     flexDirection: 'row',
  //                     justifyContent: 'center',
  //                     alignItems: 'center',
  //                     backgroundColor: '#00000047',
  //                     borderRadius: 15,
  //                   }}
  //                   onPress={() => setIsWishlist(!isWishlist)}>
  //                   <Octicons
  //                     name={!isWishlist ? 'heart' : 'heart-fill'}
  //                     size={22}
  //                     color={!isWishlist ? 'white' : '#ea5362'}
  //                   />
  //                 </TouchableOpacity>
  //                 <VendorImageSlider images={vendor.vendorBannerImage} />
  //                 <View style={styles.vendorDetails}>
  //                   <View
  //                     style={{
  //                       backgroundColor: 'white',
  //                       position: 'absolute',
  //                       top: -20,
  //                       left: 0,
  //                       borderTopRightRadius: 15,
  //                     }}>
  //                     <Text style={styles.vendorLocation}>
  //                       <MaterialCommunityIcons
  //                         name="map-marker"
  //                         size={14}
  //                         color="#ea5362"
  //                       />{' '}
  //                       {vendor.location}
  //                     </Text>
  //                   </View>
  //                   <View
  //                     style={{
  //                       // flex: 1,
  //                       flexDirection: 'row',
  //                       // justifyContent: 'space-between',
  //                     }}>
  //                     <View style={{flex: 0.6}}>
  //                       <Text style={styles.vendorName}>{vendor.shopName}</Text>
  //                     </View>
  //                     <View
  //                       style={{
  //                         flex: 0.6,
  //                         flexDirection: 'row',
  //                         justifyContent: 'flex-end',
  //                         alignItems: 'center',
  //                       }}>
  //                       <MaterialCommunityIcons
  //                         name="star-box"
  //                         size={20}
  //                         color="#236339"
  //                       />
  //                       <View
  //                         style={{
  //                           marginLeft: 2,
  //                         }}>
  //                         <Text style={styles.vendorRatingText}>
  //                           {vendor.rating}
  //                         </Text>
  //                       </View>
  //                     </View>
  //                   </View>
  //                   <View
  //                     style={{
  //                       marginTop: 5,
  //                     }}>
  //                     <Text
  //                       style={{
  //                         color: '#1256cb',
  //                         fontSize: 14,
  //                         fontWeight: '500',
  //                         fontFamily: 'Poppins-Medium',
  //                       }}>
  //                       <MaterialCommunityIcons
  //                         name="brightness-percent"
  //                         size={18}
  //                         color="#1256cb"
  //                       />{' '}
  //                       {vendor.discount}% OFF {vendor.clausesCondition}{' '}
  //                     </Text>
  //                   </View>
  //                 </View>
  //               </View>
  //             </Pressable>
  //           ))}
  //         </ScrollView>
  //       </>
  //     )}
  //   </View>
  // </ScrollView>;
  // );

  // const SecondRoute = () => <></>;

  return (
    <View
      style={{
        backgroundColor: 'white',
        // backgroundColor: '#f7f6fd',
        height: '100%',
      }}>
      <LinearGradient
        colors={['#ceffa4', '#f4ffeb', '#fff']}
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
              placeholder={`Search ${category.categoryName}`}
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
                fontFamily: 'Montserrat-SemiBold',
              }}>
              5
            </Text>
            <AntDesign name="shoppingcart" color="black" size={25} />
          </Pressable>
        </View>
      </LinearGradient>
      <View>
        {filteredProducts.length === 0 ? null : (
          <>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{alignItems: 'center'}}>
              <View
                style={{
                  marginLeft: 10,
                  // marginTop: 15,
                  // marginBottom: 15,
                  flexDirection: 'row',
                }}>
                <Pressable
                  onPress={openModal}
                  style={{
                    borderRadius: 8,
                    flex: 0.2,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    paddingVertical: 10,
                    backgroundColor: 'white',
                    elevation: 1,
                    margin: 4,
                    paddingHorizontal: 10,
                  }}>
                  <Text
                    style={{
                      color: '#2f2f2f',
                      fontSize: 13,
                      fontFamily: 'Montserrat-SemiBold',
                      textAlign: 'center',
                      // letterSpacing: 1,
                    }}>
                    Sort{' '}
                    <AntDesign name="caretdown" size={12} color="#2f2f2f" />
                  </Text>
                </Pressable>
                <Pressable
                  onPress={openFilterModal}
                  style={{
                    borderRadius: 8,
                    flex: 0.2,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    paddingVertical: 10,
                    backgroundColor: 'white',
                    elevation: 1,
                    margin: 4,
                    paddingHorizontal: 10,
                  }}>
                  <Text
                    style={{
                      color: '#2f2f2f',
                      fontSize: 13,
                      fontFamily: 'Montserrat-SemiBold',
                      textAlign: 'center',
                      // letterSpacing: 1,
                    }}>
                    Filter{' '}
                    <FontAwesome name="filter" size={18} color="#2f2f2f" />
                  </Text>
                </Pressable>
              </View>
            </ScrollView>
          </>
        )}
        <ScrollView>
          <View style={{flex: 1}}>
            {filteredProducts.length === 0 ? (
              <Text
                style={{
                  marginTop: 30,
                  color: '#878697',
                  fontSize: 17,
                  fontFamily: 'Poppins-SemiBold',
                  textAlign: 'center',
                  // letterSpacing: 1,
                }}>
                {`No results for ${category.categoryName.toLowerCase()}`}
              </Text>
            ) : (
              <ScrollView>
                {/* <Text
                  style={{
                    color: '#696969',
                    fontSize: 15,
                    textAlign: 'center',
                    fontFamily: 'Poppins-Medium',
                    letterSpacing: 3,
                    marginTop: 20,
                  }}>
                  {`ALL SHOPS OFFERING ${category.categoryName.toUpperCase()}`}
                </Text> */}
                <View style={{marginTop: 1}}>
                  <View
                    style={{
                      // flexDirection: 'row',
                      // flexWrap: 'wrap',
                      // paddingLeft: 2,
                      // paddingRight: 2,
                      // elevation: 4,
                      backgroundColor: 'white',
                      // backgroundColor: '#f7f6fd',
                    }}>
                    {filteredProducts.map((ele, index) => (
                      <>
                        <View
                          key={index}
                          // onPress={() => bottomSheetRef.current?.snapToIndex(1)}
                          // onPress={openModal}
                          // navigation.navigate('ProductDetails', {
                          //   ele: ele,
                          // });

                          style={{
                            flexDirection: 'row',
                            // width: '50%',
                            // backgroundColor: 'gray',
                            margin: 10,
                            // marginBottom: 1,
                          }}>
                          <TouchableOpacity
                            style={{padding: 5, flex: 0.6}}
                            onPress={() =>
                              navigation.navigate('ProductDetails', {
                                ele: ele,
                              })
                            }>
                            <Text
                              style={{
                                color: 'black',
                                fontSize: 15,
                                marginBottom: 3,
                                // letterSpacing: 1,
                                fontFamily: 'Montserrat-ExtraBold',
                              }}>
                              {ele.productName}
                            </Text>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              <MaterialCommunityIcons
                                name="star-box"
                                size={20}
                                color="#006705"
                              />
                              <View
                                style={{
                                  marginLeft: 2,
                                }}>
                                <Text
                                  style={{
                                    fontSize: 15,
                                    color: '#006705',
                                    fontFamily: 'Montserrat-Bold',
                                    marginTop: 0,
                                    marginVertical: 2,
                                    // letterSpacing: 1,
                                  }}>
                                  4.3
                                </Text>
                              </View>
                            </View>
                            <Text
                              style={{
                                fontSize: 17,
                                color: 'black',
                                // letterSpacing: 1,
                                marginVertical: 2,
                                fontFamily: 'Montserrat-Bold',
                              }}>
                              <MaterialIcons
                                name="currency-rupee"
                                size={13}
                                color="black"
                              />
                              {ele.productPrice}
                            </Text>
                            <Text
                              style={{
                                fontSize: 14,
                                marginTop: 6,
                                color: '#02060c99',
                                // letterSpacing: 1,
                                fontFamily: 'Montserrat-Medium',
                              }}>
                              {expandedItems[ele._id] ||
                              ele.productDescription.length < 68
                                ? ele.productDescription
                                : ele.productDescription.substring(0, 67) +
                                  '...'}
                            </Text>
                            {ele.productDescription.length > 68 ? (
                              <Pressable
                                onPress={() => handleReadMore(ele._id)}>
                                <Text
                                  style={{
                                    fontSize: 14,
                                    // letterSpacing: 1,
                                    color: '#02060c99',
                                    fontFamily: 'Montserrat-SemiBold',
                                  }}>
                                  {expandedItems[ele._id]
                                    ? 'show less'
                                    : 'read more'}
                                </Text>
                              </Pressable>
                            ) : (
                              ''
                            )}
                          </TouchableOpacity>
                          <View style={{flex: 0.4}}>
                            {/* <Pressable
                              style={
                                {
                                  // borderWidth: 1,
                                  // borderColor: '#e0e0e0',
                                  // borderRadius: 16,
                                }
                              }
                              onPress={() => toggleModal(ele)}> */}
                            <Image
                              style={{
                                marginTop: 8,
                                width: 150,
                                height: 150,
                                alignSelf: 'center',
                                borderRadius: 16,
                              }}
                              source={{
                                uri: ele.productImage[0]?.imageUrl,
                              }}
                              // source={{
                              //   uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/m/y/y/-original-imahfcgwza6fty8w.jpeg?q=70',
                              // }}
                            />
                            {/* </Pressable> */}
                          </View>
                        </View>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: '#dadde1',
                            borderStyle: 'dashed',
                            margin: 10,
                          }}></View>
                      </>
                    ))}
                  </View>
                </View>
              </ScrollView>
            )}
          </View>
        </ScrollView>
      </View>
      {/* show short details */}
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        // animationInTiming={400}
        // animationOut={400}
        backdropOpacity={0.5}
        style={{margin: 0, position: 'absolute', bottom: 0, width: '100%'}}>
        <TouchableOpacity
          style={{
            position: 'relative',
            top: -20,
          }}
          onPress={toggleModal}>
          <AntDesign
            name="closecircle"
            size={35}
            color="white"
            style={{textAlign: 'center'}}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#f7f6fd',
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
                  // source={{
                  //   uri: showItems.productImage[0]?.imageUrl,
                  // }}
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
                    marginTop: 10,
                    letterSpacing: 1,
                    marginVertical: 5,
                    fontFamily: 'Montserrat-SemiBold',
                  }}>
                  {showItems.productName}
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
                        fontFamily: 'Montserrat-Medium',
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
                    letterSpacing: 1,
                    color: '#696969',
                    fontFamily: 'Montserrat-Medium',
                  }}>
                  {showItems.productDescription}
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
              {/* <View
                style={{
                  flexDirection: 'row',
                  marginTop: 5,
                  borderColor: '#ea5362',
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 5,
                  backgroundColor: '#ea53621a',
                  flex: 0.3,
                }}>
                <TouchableOpacity
                  style={{
                    padding: 9,
                    marginTop: 3,
                  }}>
                  <FontAwesome5
                    name="minus"
                    size={14}
                    color="#ea5362"
                    style={{fontWeight: '500'}}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: 'black',
                    padding: 9,
                    fontFamily: 'Poppins-SemiBold',
                    letterSpacing: 1,
                    fontSize: 15,
                  }}>
                  1
                </Text>
                <TouchableOpacity
                  style={{
                    padding: 9,
                    marginTop: 3,
                  }}>
                  <FontAwesome5 name="plus" size={14} color="#ea5362" />
                </TouchableOpacity>
              </View> */}
              {/* <View style={{flex: 0.1}}></View> */}
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
      {/* show filter model */}
      <Modal
        animationIn="slideInUp"
        isVisible={showOptions}
        deviceWidth={deviceWidth}
        style={styles.modal}
        transparent={true}>
        <TouchableOpacity
          style={{position: 'relative', top: -20}}
          onPress={() => setShowOptions(false)}>
          <AntDesign
            name="closecircle"
            size={35}
            color="white"
            style={{textAlign: 'center'}}
          />
        </TouchableOpacity>
        <View style={styles.centeredView}>
          <View
            style={{
              padding: 10,
              // backgroundColor: 'white',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#dadde1',
            }}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 18,
                  // letterSpacing: 1,
                }}>
                Sort by
              </Text>
            </View>
          </View>
          {/* <View
            style={{borderBottomColor: '#e4e4e4', borderBottomWidth: 1}}></View> */}
          <View style={{padding: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 3,
              }}>
              <RadioButton
                value="default"
                status={checked === 'default' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('default')}
              />
              <Text
                style={{
                  color: '#2f2f2f',
                  fontSize: 14,
                  textAlign: 'left',
                  fontFamily: 'Montserrat-Medium',
                }}>
                Relevance (default)
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 3,
              }}>
              <RadioButton
                value="low"
                status={checked === 'low' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('low')}
              />
              <Text
                style={{
                  color: '#2f2f2f',
                  fontSize: 14,
                  textAlign: 'left',
                  fontFamily: 'Montserrat-Medium',
                }}>
                Price (low to high)
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 3,
              }}>
              <RadioButton
                value="high"
                Type="Price (high to low)"
                status={checked === 'high' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('high')}
              />
              <Text
                style={{
                  color: '#2f2f2f',
                  fontSize: 14,
                  textAlign: 'left',
                  fontFamily: 'Montserrat-Medium',
                }}>
                Price (high to low)
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      {/* filter 2 modal */}
      <Modal
        animationIn="slideInUp"
        isVisible={showFilters}
        deviceWidth={deviceWidth}
        style={styles.modal}
        transparent={true}>
        <View style={styles.centeredView}>
          <View
            style={{
              padding: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 18,
                }}>
                Filters
              </Text>
            </View>
            <Pressable onPress={() => setShowFilters(false)}>
              <Fontisto name="close-a" size={13} color="black" />
            </Pressable>
          </View>
          <View
            style={{borderBottomColor: '#dadde1', borderBottomWidth: 1}}></View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.2,
                // borderRightWidth: 1,
                borderColor: '#e4e4e4',
                backgroundColor: 'white',
              }}>
              <Pressable
                style={{
                  borderLeftWidth: showPrice ? 3 : 0,
                  borderLeftColor: showPrice ? 'red' : 'transparent',
                }}
                onPress={() => {
                  setShowPrice(true);
                  setShowBrand(false);
                  setShowShop(false);
                }}>
                <View
                  style={{
                    backgroundColor: showPrice ? '#f7f6fd' : 'white',
                    paddingLeft: 10,
                    paddingTop: 16,
                    paddingBottom: 16,
                    borderBottomColor: '#e4e4e4',
                    borderWidth: 1,
                    borderColor: 'transparent',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Montserrat-Medium',
                      // color: showPrice ? '#01007B' : 'black',
                      fontSize: 15,
                      textAlign: 'left',
                      marginLeft: 5,
                      // fontWeight: showPrice ? '600' : '',
                    }}>
                    Price
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={{
                  borderLeftWidth: showShop ? 3 : 0,
                  borderLeftColor: showShop ? 'red' : 'transparent',
                }}
                onPress={() => {
                  setShowPrice(false);
                  setShowBrand(false);
                  setShowShop(true);
                }}>
                <View
                  style={{
                    backgroundColor: showShop ? '#f7f6fd' : 'white',
                    paddingLeft: 10,
                    paddingTop: 16,
                    paddingBottom: 16,
                    borderBottomColor: '#e4e4e4',
                    borderWidth: 1,
                    borderColor: 'transparent',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Montserrat-Medium',
                      // color: showVendor ? '#01007B' : 'black',
                      fontSize: 15,
                      textAlign: 'left',
                      marginLeft: 5,
                      // fontWeight: showVendor ? '600' : '',
                    }}>
                    Shop
                  </Text>
                </View>
              </Pressable>
              <Pressable
                style={{
                  borderLeftWidth: showBrand ? 3 : 0,
                  borderLeftColor: showBrand ? 'red' : 'transparent',
                }}
                onPress={() => {
                  setShowPrice(false);
                  setShowShop(false);
                  setShowBrand(true);
                }}>
                <View
                  style={{
                    backgroundColor: showBrand ? '#f7f6fd' : 'white',
                    paddingLeft: 10,
                    paddingTop: 16,
                    paddingBottom: 16,
                    borderBottomColor: '#e4e4e4',
                    borderWidth: 1,
                    borderColor: 'transparent',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Montserrat-Medium',
                      // color: showVendor ? '#01007B' : 'black',
                      fontSize: 15,
                      textAlign: 'left',
                      marginLeft: 5,
                      // fontWeight: showVendor ? '600' : '',
                    }}>
                    Brand
                  </Text>
                </View>
              </Pressable>
              {/* <Pressable
                onPress={() => {
                  setShowPrice(false);
                  setShowVendor(false);
                  setShowShop(true);
                }}>
                <View
                  style={{
                    backgroundColor: showShop ? '#e2e2e2' : 'white',
                    paddingLeft: 10,
                    paddingTop: 16,
                    paddingBottom: 16,
                    borderBottomColor: '#e4e4e4',
                    borderWidth: 1,
                    borderColor: 'transparent',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      // color: showVendor ? '#01007B' : 'black',
                      fontSize: 15,
                      textAlign: 'left',
                      marginLeft: 5,
                      // fontWeight: showVendor ? '600' : '',
                    }}>
                    Shop
                  </Text>
                </View>
              </Pressable> */}
            </View>
            <View style={{flex: 0.8, padding: 20}}>
              {showPrice && (
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      fontFamily: 'Montserrat-SemiBold',
                      // paddingRight: 1,
                    }}>
                    Price
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      justifyContent: 'space-around',
                      // alignItems: 'center',
                      marginTop: 6,
                    }}>
                    {priceFilter.map((ele, index) => (
                      <TouchableOpacity
                        key={index}
                        style={{
                          // flex: 0.5,
                          width: '30%',
                          margin: 1,
                          backgroundColor: '#ceffa4',
                          borderColor: '#ceffa4',
                          borderWidth: 1,
                          marginBottom: 6,
                          paddingVertical: 10,
                          paddingHorizontal: 2,
                          borderRadius: 6,
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 12,
                            textAlign: 'center',
                            fontFamily: 'Montserrat-Medium',
                          }}>
                          {ele.price}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}

              {showShop && (
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      fontFamily: 'Montserrat-SemiBold',
                      // paddingRight: 1,
                    }}>
                    Vendor
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      justifyContent: 'space-around',
                      // alignItems: 'center',
                      marginTop: 6,
                    }}>
                    {filteredProducts.map((vendor, index) => (
                      <TouchableOpacity
                        key={index}
                        style={{
                          // flex: 0.5,
                          width: '30%',
                          margin: 1,
                          backgroundColor: '#ceffa4',
                          borderColor: '#ceffa4',
                          borderWidth: 1,
                          marginBottom: 6,
                          paddingVertical: 10,
                          paddingHorizontal: 2,
                          borderRadius: 6,
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 12,
                            textAlign: 'center',
                            fontFamily: 'Montserrat-Medium',
                          }}>
                          {vendor.shopName}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}
              {showBrand && (
                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      fontFamily: 'Montserrat-SemiBold',
                      // paddingRight: 1,
                    }}>
                    Brand
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      justifyContent: 'space-around',
                      // alignItems: 'center',
                      marginTop: 6,
                    }}>
                    {filteredProducts.map((vendor, index) => (
                      <TouchableOpacity
                        key={index}
                        style={{
                          // flex: 0.5,
                          width: '30%',
                          margin: 1,
                          backgroundColor: '#ceffa4',
                          borderColor: '#ceffa4',
                          borderWidth: 1,
                          marginBottom: 6,
                          paddingVertical: 10,
                          paddingHorizontal: 2,
                          borderRadius: 6,
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 12,
                            textAlign: 'center',
                            fontFamily: 'Montserrat-Medium',
                          }}>
                          {vendor.brand}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}
            </View>
          </View>
          <View
            style={{
              position: 'relative',
              width: '100%',
              bottom: 0,
              // top: 10,
              backgroundColor: '#f7f6fd',
              // margin: 0,
              // height: 62,
              padding: 12,
              borderTopColor: '#e4e4e4',
              borderWidth: 1,
              border: 'transparent',
              // border-bottom: .1rem solid #e7e7e7;
              zIndex: 99999,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Pressable
                onPress={() => setShowOptions(false)}
                style={{
                  borderColor: '#e4e4e4',
                  borderWidth: 1,
                  paddingRight: 12,
                  paddingLeft: 12,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderRadius: 5,
                }}>
                <Text style={{color: 'black', fontFamily: 'Montserrat-Medium'}}>
                  Clear Filters
                </Text>
              </Pressable>
            </View>
            <View>
              <Pressable
                onPress={() => setShowOptions(false)}
                style={{
                  borderColor: '#ceffa4',
                  borderWidth: 1,
                  paddingRight: 12,
                  paddingLeft: 12,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderRadius: 5,
                  backgroundColor: '#ceffa4',
                }}>
                <Text style={{color: 'black', fontFamily: 'Montserrat-Medium'}}>
                  Show Results
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    // margin: 8,
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins-SemiBold',
  },
  activeTab: {
    color: 'black', // Active tab text color
    fontWeight: '500',
    // fontSize: 17,
  },
  inactiveTab: {
    color: '#696969', // Inactive tab text color
  },
  // scrollViewContent: {
  //   paddingVertical: 20,
  // },
  bannerImage: {
    width: width - 40,
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginHorizontal: 10,
  },
  imageContainer: {
    borderRadius: 10,
    marginHorizontal: 10,
  },
  viewBox: {
    width: width,
    height: 200,
  },
  dotContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    bottom: 50,
  },
  // dot: {
  //   margin: 3,
  //   color: 'yellow',
  // },
  // dotActive: {
  //   margin: 3,
  //   color: 'white',
  // },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  vendorDe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
    elevation: 3,
    width: width - 40,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  scrollViewContent: {
    paddingVertical: 20,
  },
  vendorContainer: {
    // backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 10,
    elevation: 3,
  },
  sliderContainer: {
    width: width,
    height: 200,
  },
  sliderImage: {
    width: width,
    height: 200,
    resizeMode: 'cover',
  },
  paginationDots: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    margin: 3,
    color: 'gray',
  },
  dotActive: {
    margin: 3,
    color: 'white',
  },
  vendorDetails: {
    padding: 15,
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  vendorName: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Poppins-Bold',
    color: '#252525',
  },
  vendorLocation: {
    fontSize: 14,
    color: '#363636',
    fontFamily: 'Poppins-Medium',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  vendorRatingText: {
    fontSize: 16,
    color: '#363636',
    fontFamily: 'Poppins-Medium',
    marginTop: 2,
    letterSpacing: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  modal: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    margin: 0,
  },
  centeredView: {
    // flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 5,
    backgroundColor: '#f7f6fd',
    // paddingLeft: 12,
    // paddingRight: 12,
    // paddingTop: 15,
    shadowColor: '#000',
  },
});

export default ProductFiltered;
