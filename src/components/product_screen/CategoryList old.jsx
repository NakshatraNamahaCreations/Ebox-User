import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {categories} from '../../data/global-data';

export default function CategoryList() {
  return (
    <View style={{backgroundColor: 'white', height: '100%', padding: 20}}>
      <Text
        style={{
          color: 'black',
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 25,
        }}>
        Categories
      </Text>
      <View style={{marginTop: 15}}>
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
      </View>
    </View>
  );
}
