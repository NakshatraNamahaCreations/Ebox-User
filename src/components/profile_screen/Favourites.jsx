import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Footer from "../../screens/Footer";

const { width } = Dimensions.get("window");

function Favourites() {
  const navigation = useNavigation();
  const [isWishlist, setIsWishlist] = useState(false);

  const vendorList = [
    {
      shopName: "Shri Vinayaka Rents",
      vendorName: "Vinayaka",
      location: "Channasandra",
      rating: 4.5,
      discount: 30,
      clausesCondition: "above ₹75",
      vendorBannerImage: [
        {
          imageUrl:
            "https://playeventrentals.com/wp-content/uploads/2021/03/play-rental-item-electro-voice-zlx-15p-510x510.jpg",
          productPrice: 345,
          productName: "Electro-Voice ZLX 15P",
        },
        {
          imageUrl:
            "https://playeventrentals.com/wp-content/uploads/2021/04/play-rental-item-sennheiser-ew-135-g3-247x247.jpg",
          productPrice: 970,
          productName:
            "Sennheiser EW135 G3 Wireless Handheld Microphone System",
        },
        {
          imageUrl:
            "https://playeventrentals.com/wp-content/uploads/2022/03/play-rental-item-ultimate-support-ts90b-speaker-stand-247x247.jpg",
          productPrice: 345,
          productName: "Ultimate Support Speaker Stand",
        },
      ],
    },

    {
      shopName: "Mani Enterprises",
      vendorName: "Mani Thiruvenkadam",
      location: "Majestic",
      rating: 5,
      vendorBannerImage: [
        {
          imageUrl:
            "https://playeventrentals.com/wp-content/uploads/2022/03/play-rental-item-shure-sm58-microphone-247x247.jpg",
          productPrice: 1750,
          productName: "Shure SM58 Microphone",
        },
        {
          imageUrl:
            "https://playeventrentals.com/wp-content/uploads/2022/03/play-rental-package-sound-system-two-247x247.jpg",
          productPrice: 480,
          productName: "Sound System #2",
        },
        {
          imageUrl:
            "https://playeventrentals.com/wp-content/uploads/2022/03/play-rental-item-eternal-lighting-cubeecho-247x247.jpg",
          productPrice: 850,
          productName: "Eternal Lighting CubeEcho",
        },
      ],
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {vendorList.map((vendor, index) => (
        <Pressable
          key={index}
          style={styles.vendorContainer}
          //   onPress={() => {
          //     navigation.navigate('VendorProfile', {vendorProfile: vendor});
          //   }}
        >
          <Image
            style={styles.sliderImage}
            source={{
              uri: vendor.vendorBannerImage[0]?.imageUrl,
            }}
          />
          {/* <VendorImageSlider images={vendor.vendorBannerImage[0]?.imageUrl} /> */}
          <View style={styles.vendorDetails}>
            <View style={styles.locationContainer}>
              <Text style={styles.vendorLocation}>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={14}
                  color="#ea5362"
                />
                {" " + vendor.location} . 5 km
              </Text>
              {/* <Text
                style={{
                  fontSize: 11,
                  color: '#363636',
                  fontFamily: 'Poppins-Medium',
                }}></Text> */}
            </View>
            <View style={styles.vendorInfo}>
              <Text style={styles.vendorName}>{vendor.shopName}</Text>
              <View style={styles.ratingContainer}>
                <MaterialCommunityIcons
                  name="star-box"
                  size={20}
                  color="#236339"
                />
                <Text style={styles.vendorRatingText}>{vendor.rating}</Text>
              </View>
            </View>
            <View style={styles.discountContainer}>
              <Text style={styles.discountText}>
                <MaterialCommunityIcons
                  name="brightness-percent"
                  size={18}
                  color="#1256cb"
                />
                {" " + vendor.discount}% OFF {vendor.clausesCondition}
              </Text>

              <TouchableOpacity
                style={styles.wishlistButton}
                onPress={() => setIsWishlist(!isWishlist)}
              >
                <Octicons
                  name={!isWishlist ? "heart-fill" : "heart"}
                  size={22}
                  color={!isWishlist ? "#ea5362" : "black"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      ))}
      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            color: "#a9a9a9",
            fontSize: 20,
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          Event Box <Octicons name={"heart-fill"} size={22} color={"#a9a9a9"} />
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            color: "#a9a9a9",
            fontSize: 15,
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          © 2024 Event Box. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: 20,
    padding: 5,
    // backgroundColor: '#f7f6fd',
  },
  vendorContainer: {
    borderRadius: 15,
    overflow: "hidden",
    marginHorizontal: 10,
    elevation: 3,
    marginBottom: 20,
  },
  vendorDetails: {
    backgroundColor: "white",
    padding: 10,
  },
  locationContainer: {
    position: "absolute",
    marginTop: 10,
    top: -30,
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    borderTopRightRadius: 15,
  },
  vendorLocation: {
    fontSize: 12,
    color: "#363636",
    letterSpacing: 1,
    fontFamily: "Poppins-Medium",
  },
  vendorInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  sliderImage: {
    width: width,
    height: 250,
    resizeMode: "cover",
  },
  vendorName: {
    fontSize: 17,
    letterSpacing: 1,
    fontFamily: "Poppins-Bold",
    color: "#252525",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  vendorRatingText: {
    fontSize: 16,
    color: "#363636",
    fontFamily: "Poppins-Medium",
    marginLeft: 5,
    letterSpacing: 1,
  },
  discountContainer: {
    marginTop: 5,
    marginBottom: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wishlistButton: {
    marginRight: 10,
  },
  discountText: {
    color: "#1256cb",
    fontSize: 14,
    letterSpacing: 1,
    fontFamily: "Poppins-Medium",
  },
});

export default Favourites;
