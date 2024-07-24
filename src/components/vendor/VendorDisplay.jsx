import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
// import ViewSlider from 'react-native-view-slider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

export default function VendorDisplay() {
  const navigation = useNavigation();
  const vendor = [
    {
      shopName: 'Shri Vinayaka Rents',
      vendorName: 'Vinayaka',
      location: 'Channasandra',
      shopImage:
        'https://img.freepik.com/free-vector/golden-elegant-corporative-logo-template_23-2148214854.jpg?t=st=1717825298~exp=1717828898~hmac=71a0c68ffb0e52af3115cc54d2a1da6d48443f3f354c6f3112b6a4a5bc748a6b&w=740',
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
      shopImage:
        'https://img.freepik.com/free-vector/bull-logo-template-design_23-2150454457.jpg?t=st=1717825508~exp=1717829108~hmac=dee30784ec026bf7cf8e7fc0e575752aad846e7fc3c392e9bf7259b2789be7db&w=740',
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
      shopImage:
        'https://img.freepik.com/free-vector/red-logo-black-background_1195-52.jpg?t=st=1717825243~exp=1717828843~hmac=8f302992e741f66cfaabfdc548b4918fc16dabb2c7d7ea7ad76d41486da1e1b2&w=740',
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
    {
      shopName: 'Equipment Rentals India',
      vendorName: 'Manish Yadhav',
      location: 'Silkboard',
      shopImage:
        'https://www.equipmentrentalsindia.com/public/img/sharelogo.png',
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
    {
      shopName: 'JT Equipment Rentals LLC',
      vendorName: 'Shetal Josh',
      location: 'Electronic City',
      shopImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRevtCDHnLzznZ9vW3g63h76Hg9ehuf5ThVBTbdjMK3ywdPcN7DTsPWDImpAZ05Csh7olg&usqp=CAU',
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
    {
      shopName: 'OYO',
      vendorName: 'Ritesh Agarwal',
      location: 'Whitefield',
      shopImage:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/OYO_Rooms_%28logo%29.png/1200px-OYO_Rooms_%28logo%29.png',
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
    {
      shopName: 'Myles',
      vendorName: 'SAKSHI VIJ',
      location: 'Whitefield',
      shopImage:
        'data:image/png;base64,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',
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
  //       scrollViewRef.current.scrollTo({x: 0, animated: true});
  //     }
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [imgActive]);

  const onChange = event => {
    const slide = Math.ceil(
      event.contentOffset.x / event.layoutMeasurement.width,
    );
    if (slide !== imgActive) {
      setImgActive(slide);
    }
  };

  return (
    <>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{paddingLeft: 10}}>
        {vendor.map((vdr, vIndex) => (
          <Pressable
            key={vIndex}
            style={{marginTop: 15}}
            onPress={() => {
              navigation.navigate('VendorProfile', {
                vendorProfile: vdr,
              });
            }}>
            <Image
              key={vIndex}
              style={styles.bannerImage}
              source={{uri: vdr.shopImage}}
            />
            <View style={styles.vendorDe}>
              <View style={{paddingLeft: 0}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: 'black',
                    // letterSpacing: 1,
                    fontFamily: 'Montserrat-SemiBold',
                  }}>
                  {vdr.shopName.length < 15
                    ? vdr.shopName
                    : vdr.shopName.substring(0, 11) + '...'}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#373737',
                    // letterSpacing: 1,
                    marginTop: 3,
                    fontFamily: 'Montserrat-Medium',
                  }}>
                  {vdr.location.length < 10
                    ? vdr.location
                    : vdr.location.substring(0, 9) + '...'}{' '}
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  bannerImage: {
    // width: width - 40,
    width: 110,
    height: 110,
    // resizeMode: 'center',
    borderRadius: 15,
    marginHorizontal: 7,
  },
  vendorDe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    // marginBottom: 10,
    width: 110,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: 0.5, // Change this value to adjust the opacity
  },
});
