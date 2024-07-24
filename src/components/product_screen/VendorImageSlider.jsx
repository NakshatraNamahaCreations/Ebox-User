import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const {width} = Dimensions.get('window');

const VendorImageSlider = ({images}) => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      scrollViewRef.current.scrollTo({x: nextIndex * width, animated: true});
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <View style={{position: 'relative'}}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.sliderContainer}>
        {images.map((image, index) => (
          <Image
            key={index} // Ensure each image has a unique key
            source={{uri: image.imageUrl}}
            style={styles.sliderImage}
          />
        ))}
      </ScrollView>
      <View style={styles.paginationDots}>
        {images.map((_, index) => (
          <Text
            key={index}
            style={currentIndex === index ? styles.dotActive : styles.dot}>
            ●
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    // height: 250,
  },
  sliderImage: {
    width: width,
    height: 250,
    // resizeMode: 'contain',
    borderRadius: 15,
  },
  // textOverlayContainer: {
  //   position: 'absolute',
  //   // bottom: 10,
  //   // top: 10,
  //   // left: 10,
  //   // right: 10,
  //   marginRight: 1,
  //   width: '95%',
  //   flexDirection: 'row',
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
  //   paddingTop: 10,
  //   paddingBottom: 10,
  //   paddingLeft: 5,
  //   paddingRight: 5,
  //   borderTopLeftRadius: 5,
  // },
  // productName: {
  //   color: 'white',
  //   fontSize: 13,
  //   fontFamily: 'Poppins-Medium',
  //   letterSpacing: 1,
  // },
  // productPrice: {
  //   color: 'white',
  //   fontSize: 13,
  //   fontFamily: 'Poppins-Regular',
  //   letterSpacing: 1,
  // },
  paginationDots: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    left: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    marginHorizontal: 1,
    color: 'gray',
    fontSize: 14,
    letterSpacing: 1,
  },
  dotActive: {
    marginHorizontal: 1,
    color: '#ea5362',
    fontSize: 14,
    letterSpacing: 1,
  },
});
export default VendorImageSlider;
