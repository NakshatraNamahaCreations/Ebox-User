import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

function ProductReview({navigation}) {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <LinearGradient
        colors={['#ffcc7acc', '#fff6e8cc']}
        style={{paddingTop: 35, paddingBottom: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Pressable style={{flex: 0.1}}>
            <Ionicons
              name="chevron-back-sharp"
              size={30}
              color="#575656"
              style={{marginTop: 7, marginLeft: 4}}
              onPress={() => navigation.goBack()}
            />
          </Pressable>
          <View style={{flex: 0.8, paddingRight: 10}}>
            <Feather
              name="search"
              size={19}
              color="#ea5362"
              style={{position: 'absolute', zIndex: 11111, left: 15, top: 13}}
            />
            <TextInput
              style={{
                backgroundColor: 'white',
                elevation: 3,
                borderRadius: 50,
                width: '100%',
                borderWidth: 1,
                borderColor: 'transparent',
                height: 45,
                padding: 5,
                color: 'black',
                fontSize: 15,
                paddingLeft: 40,
                marginBottom: 10,
                fontFamily: 'Montserrat-SemiBold',
                // letterSpacing: 1,
              }}
              placeholderTextColor="#737373"
              placeholder={`Search`}
            />
          </View>
          <Pressable style={{flex: 0.1, marginTop: 10}}>
            <Text
              style={{
                position: 'absolute',
                top: -7,
                right: 12,
                backgroundColor: '#ea5362',
                color: 'white',
                fontSize: 9,
                textAlign: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 5,
                borderRadius: 50,
                zIndex: 999,
                width: 20,
                height: 20,
                fontFamily: 'Poppins-SemiBold',
              }}>
              5
            </Text>
            <AntDesign name="shoppingcart" color="black" size={25} />
          </Pressable>
        </View>
      </LinearGradient>
      <View style={{padding: 16}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 50, height: 50, borderRadius: 5}}
            // source={{
            //   uri: product.productImage,
            // }}
            source={{
              uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/m/y/y/-original-imahfcgwza6fty8w.jpeg?q=70',
            }}
          />
          {/* <Text style={{color: 'black'}}>ProductReview</Text> */}
        </View>
        <View style={{marginVertical: 20}}>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            How would you rate it?
          </Text>
          <View style={{flexDirection: 'row', marginVertical: 15}}>
            {Array.from({length: 5}).map((_, index) => (
              <AntDesign key={index} name="staro" size={30} color="#ffa41c" />
            ))}
          </View>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Title your review
          </Text>
          <TextInput
            style={{
              backgroundColor: 'transparent',
              borderRadius: 6,
              borderWidth: 1,
              borderColor: '#b7b4b4',
              color: 'black',
              fontSize: 15,
              padding: 10,
              marginBottom: 10,
              fontFamily: 'Montserrat-Medium',
              marginVertical: 10,
            }}
            placeholderTextColor="#a1a1a1"
            placeholder="What's most important to know?"
          />
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Write your review
          </Text>
          <TextInput
            style={{
              backgroundColor: 'transparent',
              borderRadius: 6,
              borderWidth: 1,
              borderColor: '#b7b4b4',
              color: 'black',
              fontSize: 15,
              padding: 10,
              marginBottom: 10,
              fontFamily: 'Montserrat-Medium',
              marginVertical: 10,
              textAlignVertical: 'top',
            }}
            placeholderTextColor="#a1a1a1"
            placeholder="What did you use this product for?"
            multiline
            numberOfLines={4}
            maxLength={40}
          />

          <TouchableOpacity
            style={{
              backgroundColor: '#ceffa4',
              padding: 7,
              borderRadius: 7,
              padding: 10,
              marginTop: 30,
              elevation: 3,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                letterSpacing: 1,
                fontFamily: 'Montserrat-Medium',
                textAlign: 'center',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ProductReview;
