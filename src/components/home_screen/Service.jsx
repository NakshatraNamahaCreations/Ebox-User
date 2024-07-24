import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import React from 'react';
// import {services} from '../../data/global-data';
import {useNavigation} from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
import djAnimation from '../../../assets/category/dj.json';
import microphoneAnimation from '../../../assets/category/microphone.json';
import cateringAnimation from '../../../assets/category/catering.json';
import photoCameraAnimation from '../../../assets/category/photo-camera.json';
import videoCameraAnimation from '../../../assets/category/video-camera.json';
import hotelAnimation from '../../../assets/category/hotel.json';
import sunbedAnimation from '../../../assets/category/sunbed.json';
import awardCeremonyAnimation from '../../../assets/category/award-ceremony.json';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Service() {
  const navigation = useNavigation();

  const services = [
    {
      _id: '65ec0b80474d5d0ee66d3f17',
      categoryName: 'DJs',
      animation: djAnimation,
    },
    {
      _id: '65d09d3461ad81ac9aa6541c',
      categoryName: 'Hosts',
      animation: microphoneAnimation,
    },
    {
      _id: '65ec52b03f362eb6d1b3295f',
      categoryName: 'Catering',
      animation: cateringAnimation,
    },
    {
      _id: '65b252c1772634ac8465d6fb',
      categoryName: 'Photographer',
      animation: photoCameraAnimation,
    },
    {
      _id: '65afb4317931820fecfa4cca',
      categoryName: 'Videography',
      animation: videoCameraAnimation,
    },
    {
      _id: '65b0daedc46b6d4c5b8b926a',
      categoryName: 'Hotels',
      animation: hotelAnimation,
    },
    {
      _id: '65b0dabbc46b6d4c5b8b9266',
      categoryName: 'Resorts',
      animation: sunbedAnimation,
    },
    {
      _id: '65afb4317931820fecfa4cca',
      categoryName: 'Celebrities',
      animation: awardCeremonyAnimation,
    },
  ];

  return (
    // <LinearGradient
    //   start={{x: 0, y: 0}}
    //   end={{x: 1, y: 0}}
    //   colors={['#fae4f1', '#f1f7dd', '#ffe6ec']}
    //   style={{paddingVertical: 10}}>
    // <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    // <View style={{flexDirection: 'row', margin: 10}}>
    //   {services.map((category, index) => (
    //     <View
    //       style={{
    //         flex: 1 / 3,
    //         alignItems: 'center',
    //         marginRight: 20,
    //         flexWrap: 'wrap',
    //       }}>
    //       <LinearGradient
    //         start={{x: 0, y: 0}}
    //         end={{x: 1, y: 0}}
    //         colors={['#ffb133cc', '#ffb1335e']}
    //         style={{
    //           paddingVertical: 10,
    //           alignItems: 'center',
    //           borderRadius: 8,
    //           borderWidth: 2,
    //           borderColor: 'white',
    //           justifyContent: 'center',
    //           height: 110,
    //           width: 110,
    //         }}>
    //         <Pressable key={index} style={{}}>
    //           <Image
    //             source={category.imageUrl}
    //             style={{
    //               height: 60,
    //               width: 60,
    //             }}
    //           />
    //           <Text
    //             style={{
    //               color: 'black',
    //               fontFamily: 'Poppins-Medium',
    //               marginTop: 5,
    //               textAlign: 'center',
    //             }}>
    //             {category.categoryName}
    //           </Text>
    //         </Pressable>
    //       </LinearGradient>
    //     </View>
    //   ))}
    // </View>

    // </ScrollView>
    // </LinearGradient>

    // <LinearGradient
    //   start={{x: 0, y: 0}}
    //   end={{x: 1, y: 0}}
    //   colors={['#bef1e3', '#3f51b557', '#ffe6ec']}>
    <View>
      <View style={styles.container}>
        {services.map((category, index) => (
          <View key={index} style={styles.categoryContainer}>
            <View
              // start={{x: 0, y: 0}}
              // end={{x: 1, y: 0}}
              // colors={['#ceffa4', '#ceffa4c2', '#ceffa475']}
              style={styles.gradientBox}>
              <Pressable style={styles.pressable}>
                <LottieView
                  source={category.animation}
                  autoPlay
                  loop
                  style={styles.animation}
                />
                {/* <Image source={category.imageUrl} style={styles.image} /> */}
                <Text style={styles.categoryName}>{category.categoryName}</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </View>
    </View>
    // </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#373737',
    marginBottom: 10,
  },
  // rowsContainer: {
  //   flexDirection: 'column',
  // },
  row: {
    flexDirection: 'row',
  },
  categoryText: {
    color: 'white',
    fontSize: 16,
    // marginTop: 10,
    top: 30,
    left: 20,
    letterSpacing: 1,
    fontFamily: 'Poppins-SemiBold',
    // fontFamily: 'bookmanoldstyle_bold',
    position: 'absolute',
    // fontWeight: '500',
    // textAlign: 'center',
    // backgroundColor: '#00000052',
    // paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    textShadowColor: '#00000052',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 2,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // margin: 10,
    justifyContent: 'space-evenly',
    // backgroundColor: '#f5f5f5',
    // padding: 15,
  },
  categoryContainer: {
    width: '30%', // Adjust as needed, 30% ensures three items per row
    marginBottom: 10,
    // flex: 0.3,
  },
  gradientBox: {
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    // borderWidth: 3,
    // borderColor: '#ceffa4',
    // backgroundColor: '#ebebeb',
    justifyContent: 'center',
    // elevation: 1,
    height: 130,
    width: 130,
  },
  pressable: {
    alignItems: 'center',
  },
  animation: {
    width: 80,
    height: 80,
  },
  categoryName: {
    color: 'black',
    fontFamily: 'Montserrat-Medium',
    marginTop: 5,
    fontSize: 13,
    textAlign: 'center',
  },
});
