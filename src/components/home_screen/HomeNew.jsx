import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import VendorDisplay from '../vendor/VendorDisplay';
import HeaderNew from './HeaderNew';
import Category from '../product_screen/Category';
// import LinearGradient from 'react-native-linear-gradient';
import Featured from './Featured';
import Footer from '../../screens/Footer';
import Service from './Service';
import businessman from '../../../assets/businessman.json';
import Professionals from '../../../assets/Professionals.json';
import Reliable from '../../../assets/Reliable.json';
import Support from '../../../assets/Support.json';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import NewArrivals from './NewArrivals';
// import homevideo from '../../../assets/homevideo.mp4';
// import Video, {VideoRef} from 'react-native-video';
// import SliderBanner from './sliderBanner';

const {width} = Dimensions.get('window');

function HomeNew() {
  const navigation = useNavigation();
  const vendor = [
    {
      imageUrl: require('../../../assets/event1.jpeg'),
    },
    {
      imageUrl: require('../../../assets/event2.jpeg'),
    },
    {
      imageUrl: require('../../../assets/event2.jpeg'),
    },
    {
      imageUrl: require('../../../assets/event1.jpeg'),
    },
  ];

  const scrollViewRef = useRef(null);
  const [imgActive, setImgActive] = React.useState(0);

  const videoRef = useRef(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.seek(0); // Ensure video starts from the beginning
  //     // videoRef.current.play(); // Start playing the video
  //   }
  // }, []);

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
  //   }, 2000);

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

  const imageSliderData = vendor.map(item => ({
    img: item.imageUrl,
  }));

  // const imagenew = imageSliderData.map(item => item.img);

  const makesDiffD = [
    {
      _id: '65ec0b80474d5d0ee66d3f17',
      title: 'Trusted by Professionals',
      animation: businessman,
    },
    {
      _id: '65d09d3461ad81ac9aa6541c',
      title: 'Tailored Professionals',
      animation: Professionals,
    },
    {
      _id: '65ec0b80474d5d0ee66d3f17',
      title: 'Reliable',
      animation: Reliable,
    },
    {
      _id: '65d09d3461ad81ac9aa6541c',
      title: '24/7 Support',
      animation: Support,
    },
  ];
  return (
    <>
      <ScrollView style={styles.container}>
        <HeaderNew />
        <View style={{padding: 10}}>
          <Image
            style={{
              marginTop: 8,
              width: '100%',
              height: 160,
              resizeMode: 'cover',
              borderRadius: 15,
            }}
            source={require('../../../assets/kIRU3-07.jpeg')}
          />
          {/* <Image
          style={{
            marginTop: 8,
            width: '100%',
            height: 160,
            resizeMode: 'cover',
            borderRadius: 15,
          }}
          source={require('../../../assets/KIRU4-07.jpeg')}
        /> */}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 30,
            // alignItems: 'center',
          }}>
          <Text style={[styles.vendorTitle, {flex: 0.6}]}>
            EXPLORE PRODUCTS
          </Text>
          <TouchableOpacity
            style={{
              flex: 0.6,
              alignItems: 'flex-end',
            }}
            onPress={() => navigation.navigate('CategoryStack')}>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              View All
            </Text>
          </TouchableOpacity>
          {/* <View
          style={{
            marginTop: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#e0e0e0',
            width: '100%',
            marginLeft: 2,
          }}></View> */}
        </View>
        <View style={styles.vendorSection}>
          <Category />
        </View>
        <View
          style={{
            // flexDirection: 'row',
            // alignItems: 'center',
            marginLeft: 20,
            marginTop: 10,
            marginRight: 20,
            // alignItems: 'center',
          }}>
          <Text style={styles.vendorTitle}>FEATURED PRODUCTS</Text>
          {/* <View
          style={{
            marginTop: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#e0e0e0',
            width: '100%',
            marginLeft: 2,
          }}></View> */}
        </View>
        <View>
          <Featured />
        </View>

        {/* <Video
        ref={videoRef}
        source={require('../../../assets/homevideo.mp4')}
        style={styles.video}
        resizeMode="contain"
        paused={false} // Ensure autoplay
      /> */}

        {/* <Image
        source={require('../../../assets/homevideo.gif')}
        style={{width: '100%', height: 120}}
      /> */}

        <View
          style={{
            // flexDirection: 'row',
            // alignItems: 'center',
            marginLeft: 20,
            marginRight: 20,
            paddingVertical: 10,
            // alignItems: 'center',
          }}>
          <Text style={styles.vendorTitle}>EXPLORE OUR SERVICES</Text>
          {/* <View
          style={{
            marginTop: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#e0e0e0',
            width: '100%',
            marginLeft: 2,
          }}></View> */}
        </View>

        <View style={styles.vendorSection1}>
          <Service />
        </View>
        <View
          style={{
            // flexDirection: 'row',
            // alignItems: 'center',
            marginLeft: 20,
            marginRight: 20,
            // alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text style={styles.vendorTitle}>NEARBY VENDORS</Text>
          {/* <View
          style={{
            marginTop: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#e0e0e0',
            width: '100%',
            marginLeft: 2,
          }}></View> */}
        </View>
        <View style={styles.vendorSection1}>
          <VendorDisplay />
        </View>
        <View
          style={{
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            // alignItems: 'center',
            marginLeft: 20,
            marginRight: 20,
            // alignItems: 'center',
            // paddingVertical: 10,
          }}>
          <Text style={styles.vendorTitle}>EVENTS</Text>
          {/* <View
          style={{
            marginTop: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#e0e0e0',
            width: '100%',
            marginLeft: 2,
          }}></View> */}
        </View>
        {/* Banner Sctions========================= */}
        <View style={styles.bannerSection}>
          {/* <ScrollView
          ref={scrollViewRef}
          onScroll={({nativeEvent}) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.viewBox}>
          {imageSliderData.map((e, index) => (
            <View key={index.toString()} style={styles.imageContainer}>
              <Image
                key={index}
                resizeMode="stretch"
                style={styles.bannerImage}
                source={e.img}
                // source={{uri: e.img}}
                onError={() => console.log('Error loading image:', e.img)}
              />
            </View>
          ))}
        </ScrollView> */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {imageSliderData.map((e, vIndex) => (
              <View
                key={vIndex}
                style={{marginTop: 15}}
                // onPress={() => {
                //   navigation.navigate('VendorProfile', {
                //     vendorProfile: vdr,
                //   });
                // }}
              >
                <Image style={styles.bannerImage} source={e.img} />
              </View>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            // flexDirection: 'row',
            // alignItems: 'center',
            marginLeft: 20,
            marginRight: 20,
            // alignItems: 'center',
            marginVertical: 15,
          }}>
          <Text style={styles.vendorTitle}>WHAT MAKES US DIFFERENT</Text>
          {/* <View
          style={{
            marginTop: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#e0e0e0',
            width: '100%',
            marginLeft: 2,
          }}></View> */}
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {makesDiffD.map((ele, index) => (
            <View key={index} style={styles.makesDiff}>
              <View>
                <LottieView
                  source={ele.animation}
                  autoPlay
                  loop
                  style={styles.diffImage}
                />
                {/* <Image
      resizeMode="cover"
      style={styles.diffImage}
      source={require('../../../assets/businessman.gif')}
    /> */}
                <Text style={styles.diffText}> {ele.title} </Text>
              </View>
            </View>
          ))}
        </View>
        {/* <View>
        <SliderBanner />
      </View> */}
        <View
          style={{
            // flexDirection: 'row',
            // alignItems: 'center',
            marginLeft: 20,
            marginRight: 20,
            // alignItems: 'center',
          }}>
          <Text style={styles.vendorTitle}>HOW IT WORKS? </Text>
        </View>
        <View
          style={{
            // marginLeft: 10,
            // marginRight: 10,
            padding: 5,
            marginTop: 15,
            marginBottom: 10,
            backgroundColor: '#ebebeb',
          }}>
          <Image
            source={require('../../../assets/Steps3-12.png')}
            style={{
              width: '100%',
              height: 280,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View>
          <Footer />
        </View>
      </ScrollView>
      <View style={{position: 'absolute', bottom: 50, right: 10}}>
        <NewArrivals />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  moodBoardSection: {backgroundColor: 'white'},
  moodBoard: {
    padding: 20,
    flexDirection: 'row',
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },
  text1: {
    color: 'black',
    fontSize: 15,
    marginTop: 20,
    fontWeight: '400',
  },
  boardDesign: {
    padding: 15,
    width: 135,
    height: 135,
    borderRadius: 10,
    backgroundColor: '#E3A400',
  },
  newProject: {
    fontSize: 15,
    color: 'white',
  },
  tab: {
    marginTop: 10,
    fontSize: 15,
    color: '#fed66d',
  },
  addIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  bannerImage: {
    width: 150,
    height: 250,
    borderRadius: 15,
    marginHorizontal: 5,
    resizeMode: 'cover',
  },
  viewBox: {
    // width: width - 20,
    width: width,
    height: 200,
  },
  dotContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',

    alignItems: 'center',
  },
  // imageContainer: {
  //   borderRadius: 10,
  //   marginHorizontal: 10,
  // },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'white',
  },
  dot: {
    margin: 3,
    color: 'yellow',
  },
  vendorTitle: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Montserrat-ExtraBold',
    // fontFamily: 'Poppins-SemiBold',
    // letterSpacing: 1,
  },
  seeAll: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: '#2f4e9e',
    // marginRight: 10,
  },
  vendorSection: {
    // marginTop: 10,
    marginBottom: 20,
    // flexDirection: 'row',
  },
  diffImage: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    // marginBottom: 10,
  },
  diffText: {
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    // letterSpacing: 1,
    textAlign: 'center',
  },
  makesDiff: {
    width: '25%',
    // borderRadius: 15,
    // borderWidth: 1,
    // borderColor: '#e0e0e0',
    marginBottom: 30,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: 0.5, // Change this value to adjust the opacity
  },
  howItWorks: {
    paddingLeft: 15,
    marginBottom: 20,
    marginTop: 25,
  },
  howItWorksText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  howItWorkSubText: {
    color: 'black',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  video: {
    width: '100%',
    height: 300,
  },
});
export default HomeNew;
