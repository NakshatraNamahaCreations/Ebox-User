import {
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function BookingSummary({navigation, route}) {
  const product = route.params.product;
  console.log('product>>>>>>>>>>', product);
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <TouchableOpacity style={{paddingTop: 20, padding: 10}}>
        <Ionicons
          name="chevron-back-sharp"
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      <ScrollView>
        <View style={{padding: 10}}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              letterSpacing: 1,
              fontFamily: 'Montserrat-SemiBold',
              // marginBottom: 20,
            }}>
            Booking Summary
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#636363',
              letterSpacing: 1,
              fontFamily: 'Montserrat-Regular',
              marginVertical: 5,
            }}>
            {product.bookingDate}
          </Text>
          {/* <TouchableOpacity>
          <Text
            style={{
              fontSize: 13,
              color: 'green',
              fontFamily: 'Montserrat-Light',
              // marginBottom: 20,
            }}>
            Download Invoice{' '}
            <AntDesign
              name="download"
              size={14}
              color="green"
              //   onPress={() => navigation.goBack()}
            />
          </Text>
        </TouchableOpacity> */}
          <Text
            style={{
              fontSize: 12,
              color: 'green',
              letterSpacing: 1,
              fontFamily: 'Montserrat-Medium',
              // marginBottom: 20,
            }}>
            {product.bookingStatus}
          </Text>
          <View style={{marginTop: 10, marginBottom: 10}}>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                letterSpacing: 1,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              {product.products.length} items in this order
            </Text>
          </View>
          <View>
            {product.products.map((item, productIndex) => (
              <View
                key={productIndex}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                  marginBottom: 5,
                }}>
                <View style={{flex: 0.2}}>
                  <View
                    style={{
                      borderRadius: 50,
                      width: 50,
                      height: 50,
                      borderWidth: 1,
                      borderColor: '#e3e1e1',
                      borderRadius: 10,
                    }}>
                    <Image
                      source={{
                        uri: item.productImage,
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 50,
                      }}
                    />
                  </View>
                </View>
                <View style={{flex: 0.6}}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: 'black',
                      letterSpacing: 1,
                      fontFamily: 'Montserrat-Regular',
                    }}>
                    {item.productName}
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      // color: '#454444',
                      color: '#ea5362',
                      letterSpacing: 1,
                      fontFamily: 'Montserrat-Regular',
                    }}>
                    Qty: {item.quantity}
                  </Text>
                </View>
                <View style={{flex: 0.2, alignItems: 'flex-end'}}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: 'black',
                      letterSpacing: 1,
                      fontFamily: 'Montserrat-SemiBold',
                    }}>
                    <MaterialIcons
                      name="currency-rupee"
                      // size={13}
                      color="#3c4145"
                    />
                    {item.totalPrice}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View
          style={{
            borderColor: '#f7f6fd',
            borderWidth: 5,
            marginBottom: 5,
          }}></View>
        <View
          style={{
            marginBottom: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              fontFamily: 'Montserrat-SemiBold',
              padding: 10,
              letterSpacing: 1,
            }}>
            Bill details
          </Text>
          <View
            style={{
              borderTopColor: '#f5f5f5',
              borderTopWidth: 1,
              marginBottom: 5,
            }}></View>
          <View style={{padding: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 13,
                    letterSpacing: 1,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Total Item
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 13,
                    letterSpacing: 1,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  <MaterialIcons
                    name="currency-rupee"
                    size={14}
                    color="black"
                  />
                  1025000{' '}
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
                    fontSize: 13,
                    letterSpacing: 1,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Event Box Fee
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 13,
                    letterSpacing: 1,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  <MaterialIcons
                    name="currency-rupee"
                    size={14}
                    color="black"
                  />
                  20000{' '}
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
                    fontSize: 13,
                    letterSpacing: 1,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  GST 18%
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 13,
                    letterSpacing: 1,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  <MaterialIcons
                    name="currency-rupee"
                    size={14}
                    color="black"
                  />
                  10000{' '}
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
                    fontSize: 13,
                    letterSpacing: 1,
                  }}>
                  Bill total
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 13,
                    letterSpacing: 1,
                  }}>
                  {' '}
                  <MaterialIcons
                    name="currency-rupee"
                    size={14}
                    color="black"
                  />
                  10,45,000{' '}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            borderColor: '#f7f6fd',
            borderWidth: 5,
            marginBottom: 5,
          }}></View>
        <View
          style={{
            marginBottom: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              // color: 'black',
              fontFamily: 'Montserrat-SemiBold',
              padding: 10,
              color: 'black',
              letterSpacing: 1,
            }}>
            Order details
          </Text>
          <View
            style={{
              borderTopColor: '#f5f5f5',
              borderTopWidth: 1,
              marginBottom: 5,
            }}></View>
          <View style={{padding: 10}}>
            <Text
              style={{
                fontSize: 12,
                color: '#636363',
                letterSpacing: 1,
                fontFamily: 'Montserrat-Regular',
              }}>
              Order id
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                letterSpacing: 1,
                fontFamily: 'Montserrat-Regular',
              }}>
              {`J372Y9YE`}
            </Text>
            <View style={{marginTop: 5}}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#636363',
                  letterSpacing: 1,
                  fontFamily: 'Montserrat-Regular',
                }}>
                Payment
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: 'black',
                  letterSpacing: 1,
                  fontFamily: 'Montserrat-Regular',
                }}>
                Online
              </Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#636363',
                  letterSpacing: 1,
                  fontFamily: 'Montserrat-Regular',
                }}>
                Address
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: 'black',
                  letterSpacing: 1,
                  fontFamily: 'Montserrat-Regular',
                }}>
                Ibis Party Hall, No.26, 1, Hosur Rd, Zuzuvadi, Madiwala, 1st
                Stage, Bommanahalli, Bengaluru, Karnataka 560068
              </Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#636363',
                  letterSpacing: 1,
                  fontFamily: 'Montserrat-Regular',
                }}>
                Event on
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: 'black',
                  letterSpacing: 1,
                  fontFamily: 'Montserrat-Regular',
                }}>
                June 28, 2024, 10:00 AM - June 28, 2024, 6:00 PM
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: 'white',
          paddingLeft: 30,
          paddingRight: 30,
          marginTop: 15,
          paddingBottom: 15,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#ceffa4',
            padding: 10,
            borderRadius: 7,
            marginHorizontal: 50,
            elevation: 3,
          }}
          // onPress={() => {
          //   navigation.navigate(
          //     'Add Address',
          //   );
          // }}
        >
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontFamily: 'Montserrat-Medium',
              textAlign: 'center',
              letterSpacing: 1,
            }}>
            Download Invoice{' '}
            <AntDesign
              name="download"
              size={14}
              color="black"
              //   onPress={() => navigation.goBack()}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
