import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";

const { width } = Dimensions.get("window");

const VendorImageSlider = ({ images }) => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  //  working................
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      scrollViewRef.current.scrollTo({ x: nextIndex * width, animated: true });
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  // const handleScroll = event => {
  //   const contentOffsetX = event.nativeEvent.contentOffset.x;
  //   const index = Math.round(contentOffsetX / width);
  //   if (index !== currentIndex) {
  //     setCurrentIndex(index);
  //   }
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  //     if (scrollViewRef.current) {
  //       scrollViewRef.current.scrollTo({
  //         x: (currentIndex + 1) * width,
  //         animated: true,
  //       });
  //     }
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [currentIndex, images.length]);

  return (
    <View style={{ position: "relative" }}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.sliderContainer}
      >
        {images.map((image, index) => (
          <View key={index}>
            {/* <View
              style={{
                position: 'absolute',
                zIndex: 11111,
                left: 15,
                top: 15,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontFamily: 'Poppins-Medium',
                  backgroundColor: '#00000047',
                  paddingLeft: 5,
                  paddingRight: 5,
                  borderRadius: 5,
                }}>
                {image.productName} . ₹{image.productPrice}
              </Text>
            </View> */}
            <Image
              key={index}
              source={{ uri: image.imageUrl }}
              style={styles.sliderImage}
            />
            <View style={styles.textOverlayContainer}>
              <Text style={styles.productName}>
                {image.productName}{" "}
                <Octicons name="dot-fill" size={10} color="#ea5362" /> ₹
                {image.productPrice}
                {/* {image.productName.length > 21
                  ? image.productName.substring(0, 21) + '...'
                  : image.productName} */}
              </Text>
              {/* <Text style={styles.productPrice}>
                <MaterialIcons name="currency-rupee" size={13} color="white" />                
              </Text> */}
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.paginationDots}>
        {images.map((_, index) => (
          <Text
            key={index}
            style={currentIndex === index ? styles.dotActive : styles.dot}
          >
            ●
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    height: 250,
  },
  sliderImage: {
    width: width,
    height: 250,
    resizeMode: "cover",
  },
  textOverlayContainer: {
    position: "absolute",
    // bottom: 10,
    // top: 10,
    // left: 10,
    // right: 10,
    marginRight: 1,
    width: "95%",
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderTopLeftRadius: 5,
  },
  productName: {
    color: "white",
    fontSize: 13,
    fontFamily: "Poppins-Medium",
    letterSpacing: 1,
  },
  productPrice: {
    color: "white",
    fontSize: 13,
    fontFamily: "Poppins-Regular",
    letterSpacing: 1,
  },
  paginationDots: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    left: 100,
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    marginHorizontal: 1,
    color: "gray",
    fontSize: 14,
    letterSpacing: 1,
  },
  dotActive: {
    marginHorizontal: 1,
    color: "#ea5362",
    fontSize: 14,
    letterSpacing: 1,
  },
});
export default VendorImageSlider;
