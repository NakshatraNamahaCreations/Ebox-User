import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {featuredProduct} from '../../data/global-data';
import LottieView from 'lottie-react-native';

export default function NewArrivals() {
  const [showNewArr, setShowNewArr] = useState(false);
  const deviceWidth = Dimensions.get('window').width;

  return (
    <View>
      <TouchableOpacity
        style={{
          borderRadius: 16,
          backgroundColor: '#ceffa4',
          width: 70,
          height: 70,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'black',
          // borderColor: '#ebebeb',
          borderWidth: 1,
          elevation: 3,
        }}
        onPress={() => setShowNewArr(true)}>
        <View>
          <Image
            source={require('../../../assets/category/sound2.png')}
            style={{
              width: '100%',
              height: 50,
              resizeMode: 'cover',
            }}
          />
          {/* <LottieView
            source={require('../../../assets/newLaunch.json')}
            autoPlay
            loop
            style={{width: 80, height: 80}}
          /> */}
          <Text
            style={{
              color: 'black',
              fontSize: 12,
              textAlign: 'center',
              fontFamily: 'Montserrat-Bold',
            }}>
            NEW
          </Text>
        </View>
        <View></View>
      </TouchableOpacity>
      <Modal
        animationIn="slideInUp"
        isVisible={showNewArr}
        deviceWidth={deviceWidth}
        style={{
          margin: 0,
          position: 'absolute',
          width: '100%',
          backgroundColor: 'white',
          shadowColor: '#000',
          bottom: 2,
          padding: 10,
          borderRadius: 15,
        }}
        transparent={true}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: -50,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setShowNewArr(false)}>
            <AntDesign
              name="closecircle"
              size={35}
              color="white"
              style={{textAlign: 'center'}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text
            style={{
              color: 'red',
              fontSize: 18,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Newly
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            {' '}
            launched Products
          </Text>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 10,
              // padding: 5,
              marginTop: 5,
            }}>
            {featuredProduct.map((vendor, index) => (
              <TouchableOpacity
                key={vendor._id}
                style={{width: 150, margin: 10, borderRadius: 15}}
                // onPress={() =>
                //   navigation.navigate('ProductDetails', {
                //     ele: vendor,
                //   })
                // }
              >
                {/* {vendor.discount && (
                  <View style={{position: 'absolute', top: 10, zIndex: 999999}}>
                    <Image
                      // resizeMode="cover"
                      style={{
                        width: 40,
                        height: 35,
                        transform: [{rotate: '315deg'}],
                      }}
                      source={require('../../../assets/tag.png')}
                    />
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 8,
                        zIndex: 9999,
                        position: 'absolute',
                        left: 12,
                        top: 10,
                        fontWeight: '700',
                      }}>
                      {vendor.discount}%
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 8,
                        zIndex: 9999,
                        position: 'absolute',
                        left: 12,
                        top: 20,
                        fontWeight: '700',
                      }}>
                      OFF
                    </Text>
                  </View>
                )} */}
                <Image
                  key={index} // Ensure each image has a unique key
                  source={{uri: vendor.productImage[0]?.imageUrl}}
                  style={{
                    width: '100%',
                    height: 150,
                    borderColor: '#e8e8e8',
                    borderWidth: 1,
                    borderRadius: 10,
                    // resizeMode: 'cover',
                  }}
                />

                {/* <VendorImageSlider images={vendor.productImage} /> */}
                <View style={{paddingTop: 10, padding: 3}}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#363636',
                      // letterSpacing: 1,
                      marginBottom: 3,
                      fontFamily: 'Montserrat-Medium',
                    }}>
                    {/* {vendor.productName} */}
                    {vendor.productName.length < 20
                      ? vendor.productName
                      : vendor.productName.substring(0, 20) + '...'}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      // marginTop: 10,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Montserrat-SemiBold',
                        fontSize: 15,
                        color: '#363636',
                        letterSpacing: 1,
                      }}>
                      ₹{vendor.productPrice}
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#e6e6e6',
                        borderRadius: 5,
                        paddingHorizontal: 5,
                        paddingVertical: 2,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Montserrat-SemiBold',
                          fontSize: 13,
                          color: '#363636',
                          letterSpacing: 1,
                          textAlign: 'center',
                        }}>
                        + Add
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}
