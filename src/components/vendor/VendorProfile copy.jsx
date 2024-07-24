import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window");

export default function VendorProfile({ navigation, route }) {
  const [isWishlist, setIsWishlist] = useState(false);
  const vendor = route.params.vendorProfile;
  console.log("vendor profile component===", vendor);

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
    <ScrollView style={styles.container}>
      {/* <ScrollView
        ref={scrollViewRef}
        onScroll={({nativeEvent}) => onChange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.viewBox}>
        {vendor.vendorBannerImage?.map((e, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image
              key={index}
              resizeMode="stretch"
              style={styles.bannerImage}
              source={{uri: e.imageUrl}}
              onError={() => console.log('Error loading image:', e.imageUrl)}
            />
          </View>
        ))}
      </ScrollView> */}
      <View
        style={{
          backgroundColor: "#c9c5d152",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          padding: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 0.6 }}>
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
              flex: 0.6,
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginRight: 10,
            }}
          >
            <Octicons
              onPress={() => setIsWishlist(!isWishlist)}
              name={!isWishlist ? "heart" : "heart-fill"}
              size={25}
              color={!isWishlist ? "#02060c99" : "#ea5362"}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            borderRadius: 15,
            borderColor: "#e2e2e7",
            borderWidth: 1,
            backgroundColor: "white",
            padding: 15,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.profileText}>{vendor.shopName} </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <MaterialCommunityIcons
                name="star-box"
                size={25}
                color="#236339"
              />
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  fontFamily: "Poppins-Medium",
                  marginTop: 2,
                  letterSpacing: 1,
                  marginLeft: 1,
                }}
              >
                4.1
              </Text>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.profileHelperText}>{vendor.location} </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  color: "#858585",
                  fontFamily: "Poppins-Regular",
                  marginTop: 2,
                  marginLeft: 1,
                }}
              >
                100 ratings
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.profile}>
        {/* <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.profileImage}
              source={require('../../../assets/samplevendor.png')}
            />
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={styles.profileText}>{vendor.vendorName} </Text>
            <Text style={styles.profileHelperText}>
              {vendor.shopName}, {vendor.location}{' '}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              {Array.from({length: 5}).map((_, index) => (
                <AntDesign key={index} name="star" size={14} color="#fdd663" />
              ))}
              <View style={{marginLeft: 9, marginTop: -2}}>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 14,
                  }}>
                  45
                </Text>
              </View>
            </View>
          </View>
        </View> */}

        <View style={{ marginLeft: 10 }}>
          <Text style={styles.profileText}>{vendor.shopName} </Text>
          <Text style={styles.profileHelperText}>{vendor.location} </Text>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            {Array.from({ length: 5 }).map((_, index) => (
              <AntDesign key={index} name="star" size={14} color="#fdd663" />
            ))}
            <View style={{ marginLeft: 9, marginTop: -2 }}>
              <Text
                style={{
                  color: "black",
                  fontFamily: "Poppins-Medium",
                  fontSize: 14,
                }}
              >
                45
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 15 }}>
          {Array.from({ length: 7 }).map((_, index) => (
            <View
              style={{
                width: "50%",
                padding: 5,
              }}
              key={index}
            >
              <View style={styles.border}>
                <Image
                  style={styles.productImage}
                  source={{
                    uri: "https://m.media-amazon.com/images/I/81FzSswwCVL.jpg",
                  }}
                />
                <View style={{ padding: 5 }}>
                  <Text style={styles.productName}>
                    {"10W USB Powered Volume Control Speaker".substring(0, 50) +
                      "..."}
                  </Text>
                  <View style={{ flexDirection: "row", marginBottom: 4 }}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <AntDesign
                        key={index}
                        name="star"
                        size={14}
                        color="#fdd663"
                      />
                    ))}
                    <View style={{ marginLeft: 9, marginTop: -2 }}>
                      <Text style={{ color: "black", fontSize: 14 }}>45</Text>
                    </View>
                  </View>
                  <Text style={styles.productPrice}>₹ 1000.00</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View
        style={{ backgroundColor: "#f7f7f7", marginTop: 15, marginBottom: 30 }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 20,
            padding: 15,
            fontFamily: "Poppins-Medium",
          }}
        >
          Add Ons you will need
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 15,
          }}
        >
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {Array.from({ length: 8 }).map((_, index) => (
              <View key={index} style={styles.addsOnView}>
                <Image
                  style={styles.addsOnImage}
                  source={{
                    uri: "https://ik.imagekit.io/faskf16pg/dslr-cameras/38_OgbjFNvll.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661426226096",
                  }}
                />
                <View style={{ padding: 5 }}>
                  <Text style={styles.addsOnText}>
                    {"Nikkor Z DX 50-250MM".substring(0, 50)}
                  </Text>

                  <View style={{ flexDirection: "row", marginBottom: 2 }}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <AntDesign
                        key={index}
                        name="star"
                        size={14}
                        color="#fdd663"
                      />
                    ))}
                    <View style={{ marginLeft: 9, marginTop: -2 }}>
                      <Text
                        style={{
                          color: "black",
                          fontSize: 14,
                          fontFamily: "Poppins-Medium",
                        }}
                      >
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
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#c9c5d152',
    // paddingTop: 10,
    backgroundColor: "white",
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
    color: "black",
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
  },
  profileHelperText: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    // marginTop: 5,
  },
  border: {
    borderWidth: 2,
    borderColor: "#f7f7f7",
  },
  productImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  productName: {
    // color: '#333',
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "black",
    marginBottom: 5,
    // textAlign: 'center',
  },
  productPrice: {
    fontSize: 15,
    color: "#414242",
    fontFamily: "Poppins-SemiBold",
  },
  addsOnView: {
    margin: 5,
    borderWidth: 2,
    borderColor: "#ededf1",
    backgroundColor: "white",
  },
  addsOnImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  addsOnText: {
    fontSize: 14,
    width: 200,
    fontFamily: "Poppins-Medium",
    color: "black",
    marginBottom: 5,
  },
});
