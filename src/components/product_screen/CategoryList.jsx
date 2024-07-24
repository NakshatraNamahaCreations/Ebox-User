import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {categories, categories1} from '../../data/global-data';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

export default function CategoryList() {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: 'white', height: '100%', padding: 20}}>
      <ScrollView>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 25,
          }}>
          Categories
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {categories.map((ele, index) => (
            <TouchableOpacity
              key={index}
              style={{
                marginTop: 15,
                borderRadius: 29,
                backgroundColor: '#f7f7f7',
                elevation: 3,
                // backgroundColor: ele.backgroundColor,
                width: '48%',
                marginBottom: 10,
              }}
              onPress={() =>
                navigation.navigate('ProductFiltered', {category: ele})
              }>
              <View
                style={{
                  width: 150,
                  height: 150,
                  alignSelf: 'center',
                  marginTop: 10,
                }}>
                <Image
                  source={ele.categoryImage}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 15,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 18,
                    textAlign: 'center',
                    marginVertical: 10, // Add some margin for spaci
                  }}>
                  {ele.categoryName}
                </Text>
                <FontAwesome6
                  name="circle-arrow-right"
                  color="black"
                  size={20}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* {categories1.map((ele, index) => (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              marginVertical: 5,
              padding: 10,
              borderRadius: 6,
              elevation: 2,
              alignItems: 'center',
              borderColor: '#acc99378',
              borderWidth: 1,
            }}>
            <View style={{flex: 0.4}}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 16,
                  marginLeft: 10,
                }}>
                {ele.categoryName}
              </Text>
            </View>
            <View
              style={{
                flex: 0.6,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                position: 'relative',
              }}>
              {ele.categoryImage?.map((image, imageIndex) => (
                <View
                  style={{
                    backgroundColor: '#acc99378',
                    borderRadius: 50,
                    width: 60,
                    height: 60,
                    // elevation: 1,
                    padding: 5,
                  }}>
                  <Image
                    key={imageIndex}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 50,
                      resizeMode: 'contain',
                      alignSelf: 'center',
                    }}
                    source={image.imageUrl}
                  />
                </View>
              ))}
            </View>
          </TouchableOpacity>
        ))} */}

        {/* <View style={{marginTop: 15}}>
        {categories.map((ele, index) => (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: 'row',
              backgroundColor: ele.backgroundColor,
              marginVertical: 5,
              padding: 10,
              borderRadius: 6,
              alignItems: 'center',
              borderColor: '#acc99378',
              borderWidth: 1,
            }}>
            <View style={{flex: 0.4}}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 16,
                  marginLeft: 10,
                }}>
                {ele.categoryName}
              </Text>
            </View>
            <View
              style={{
                flex: 0.6,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                position: 'relative',
              }}>
              {ele.categoryImage?.map((image, imageIndex) => (
                <View
                  style={{
                    backgroundColor: '#acc99378',
                    borderRadius: 50,
                    width: 60,
                    height: 60,
                    // elevation: 1,
                    padding: 5,
                  }}>
                  <Image
                    key={imageIndex}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 50,
                      resizeMode: 'contain',
                      alignSelf: 'center',
                    }}
                    source={image.imageUrl}
                  />
                </View>
              ))}
            </View>
          </TouchableOpacity>
        ))}
      </View> */}
      </ScrollView>
    </View>
  );
}
