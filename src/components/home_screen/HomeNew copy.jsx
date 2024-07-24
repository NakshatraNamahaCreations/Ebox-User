import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import VendorDisplay from '../vendor/VendorDisplay';
import HeaderNew from './HeaderNew';
import Category from '../product_screen/Category';
import LinearGradient from 'react-native-linear-gradient';
import Featured from './Featured';
import Footer from '../../screens/Footer';

const {width} = Dimensions.get('window');

function HomeNew({navigation}) {
  const vendor = [
    {
      imageUrl: require('../../../assets/banner1.png'),
    },
    {
      imageUrl: require('../../../assets/banner2.png'),
    },
    {
      imageUrl: require('../../../assets/banner3.png'),
    },
  ];

  // const howItWorks = [
  //   {
  //     title: 'BOOK',
  //     subTitle: 'Browse our online inventory until you find the right gear.',
  //     image: require('../../../assets/deadline.png'),
  //   },
  //   {
  //     title: 'RECEIVE',
  //     subTitle: 'We’ll deliver your order on the specified delivery date.',
  //     image: require('../../../assets/notification.png'),
  //   },
  //   {
  //     title: 'PLAY',
  //     subTitle: 'Have a fantastic event!',
  //     image: require('../../../assets/birthday-party.png'),
  //   },
  //   {
  //     title: 'RELAX',
  //     subTitle: 'We’ll pickup your order on the specified pickup date',
  //     image: require('../../../assets/meditation.png'),
  //   },
  // ];

  const scrollViewRef = useRef(null);
  const [imgActive, setImgActive] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imgActive < vendor.length - 1) {
        scrollViewRef.current.scrollTo({
          x: (imgActive + 1) * width,
          animated: true,
        });
      } else {
        scrollViewRef.current.scrollTo({x: 0, animated: true});
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [imgActive]);

  const onChange = event => {
    const slide = Math.ceil(
      event.contentOffset.x / event.layoutMeasurement.width,
    );
    if (slide !== imgActive) {
      setImgActive(slide);
    }
  };

  const imageSliderData = vendor.map(item => ({
    img: item.imageUrl,
  }));

  const imagenew = imageSliderData.map(item => item.img);
  return (
    <ScrollView style={styles.container}>
      <HeaderNew />
      <View style={{padding: 10}}>
        <Image
          style={{
            marginTop: 8,
            width: '100%',
            height: 160,
            // alignSelf: 'center',
            resizeMode: 'cover',
            borderRadius: 15,
          }}
          source={require('../../../assets/kIRU3-07.png')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: 20,
          marginRight: 20,
          marginTop: 30,
          alignItems: 'center',
        }}>
        <Text style={styles.vendorTitle}>EXPLORE PRODUCTS</Text>
        <View
          style={{
            marginTop: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#e0e0e0',
            // borderColor: 'transparent',
            // borderWidth: 2,
            width: '100%',
            marginLeft: 2,
          }}></View>
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('All Vendors');
          }}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.vendorSection}>
        <Category />
      </View>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: 20,
          marginRight: 20,
          alignItems: 'center',
        }}>
        <Text style={styles.vendorTitle}>FEATURED PRODUCTS</Text>
        <View
          style={{
            marginTop: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#e0e0e0',
            width: '100%',
            marginLeft: 2,
          }}></View>
      </View>
      <View>
        <Featured />
      </View>

      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: 20,
          marginRight: 20,
          alignItems: 'center',
        }}>
        <Text style={styles.vendorTitle}>VENDORS FOR YOU </Text>
        <View
          style={{
            marginTop: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#e0e0e0',
            // borderColor: 'transparent',
            // borderWidth: 2,
            width: '100%',
            marginLeft: 2,
          }}></View>
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('All Vendors');
          }}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.vendorSection1}>
        <VendorDisplay />
      </View>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: 20,
          marginRight: 20,
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <Text style={styles.vendorTitle}>HIGHLIGHTS FOR YOU</Text>
        <View
          style={{
            marginTop: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#e0e0e0',
            // borderColor: 'transparent',
            // borderWidth: 2,
            width: '100%',
            marginLeft: 2,
          }}></View>

        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('All Vendors');
          }}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity> */}
      </View>
      {/* Banner Sctions========================= */}
      <View style={styles.bannerSection}>
        <ScrollView
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
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: 20,
          marginRight: 20,
          alignItems: 'center',
        }}>
        <Text style={styles.vendorTitle}>WHAT MAKES US DIFFERENT</Text>
        <View
          style={{
            marginTop: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#e0e0e0',
            width: '100%',
            marginLeft: 2,
          }}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          // margin: 20,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          // backgroundColor: 'white',
        }}>
        <View style={styles.makesDiff}>
          <View style={{marginTop: 20}}>
            <Image
              resizeMode="cover"
              style={styles.diffImage}
              source={require('../../../assets/businessman.png')}
            />
            <Text style={styles.diffText}> Trusted by Professionals </Text>
          </View>
        </View>
        <View style={styles.makesDiff}>
          <View style={{marginTop: 20}}>
            <Image
              resizeMode="cover"
              style={styles.diffImage}
              source={require('../../../assets/anonymous.png')}
            />
            <Text style={styles.diffText}>
              {' '}
              Tailored for Event Professionals{' '}
            </Text>
          </View>
        </View>
        <View style={styles.makesDiff}>
          <View style={{marginTop: 20}}>
            <Image
              resizeMode="cover"
              style={styles.diffImage}
              source={require('../../../assets/shield.png')}
            />
            <Text style={styles.diffText}> Reliable Rentals, Anytime </Text>
          </View>
        </View>
        <View style={styles.makesDiff}>
          <View style={{marginTop: 20}}>
            <Image
              resizeMode="cover"
              style={styles.diffImage}
              source={require('../../../assets/customer-service.png')}
            />
            <Text style={styles.diffText}> 24/7 Support</Text>
          </View>
        </View>
      </View>
      {/* <View>
        <Text
          style={{
            fontSize: 13,
            color: '#1256cb',
            fontFamily: 'Poppins-Medium',
            textAlign: 'center',
            marginBottom: 10,
            letterSpacing: 1,
          }}>
          45 vendors deliverying to you
        </Text>
      </View> */}

      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: 20,
          marginRight: 20,
          alignItems: 'center',
        }}>
        <Text style={styles.vendorTitle}>HOW IT WORKS? </Text>
        {/* <View
          style={{
            marginTop: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#e0e0e0',
            width: '100%',
            marginLeft: 2,
          }}></View> */}
      </View>
      <View style={{marginLeft: 10, marginRight: 10, marginBottom: 10}}>
        <Image
          source={require('../../../assets/Steps(1).png')}
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
      {/* <View style={styles.howItWorks}>
        {howItWorks.map((ele, index) => (
          <>
            <View
              key={index}
              style={{
                flexDirection: 'row',
                flex: 1,
                marginBottom: 20,
              }}>
              {index < howItWorks.length - 1 && (
                <View
                  style={{
                    borderLeftWidth: 1,
                    height: 70,
                    position: 'absolute',
                    left: 25,
                    top: 37,
                    borderStyle: 'dashed',
                  }}></View>
              )}
              <View style={{flex: 0.1}}>
                <Image
                  source={ele.image}
                  style={{
                    width: 35,
                    height: 35,
                    resizeMode: 'contain',
                    margin: 10,
                  }}
                />
              </View>
              <View style={{flex: 0.9, marginLeft: 20, marginTop: 10}}>
                <Text style={styles.howItWorksText}>{ele.title} </Text>
                <Text style={styles.howItWorkSubText}>{ele.subTitle} </Text>
              </View>
            </View>
          </>
        ))}
      </View> */}
    </ScrollView>
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
  bannerSection: {
    marginVertical: 20,
    // paddingLeft: 10,
    // paddingRight: 10,
  },
  bannerImage: {
    // width: width - 40, // Adjusted width to account for margins
    // width: 300,
    width: 300,
    height: 150,
    borderRadius: 15,
    marginHorizontal: 10,
    resizeMode: 'cover',
  },
  viewBox: {
    // width: width - 20,
    width: width,
    height: 150,
  },
  dotContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',

    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 10,
    marginHorizontal: 10,
  },
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
    // fontFamily: 'bookmanoldstyle_bold',
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: 2,
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
    marginBottom: 10,
  },
  diffText: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    letterSpacing: 1,
    textAlign: 'center',
  },
  makesDiff: {
    width: '45%',
    // borderRadius: 15,
    // borderWidth: 1,
    // borderColor: '#e0e0e0',
    marginBottom: 20,
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
});
export default HomeNew;
