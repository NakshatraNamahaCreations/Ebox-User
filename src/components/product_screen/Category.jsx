import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {categories, services} from '../../data/global-data';
import {useNavigation} from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

export default function Category() {
  const navigation = useNavigation();

  const categoriesInRow1 = categories.slice(
    0,
    Math.ceil(categories.length / 2),
  );
  const categoriesInRow2 = categories.slice(Math.ceil(categories.length / 2));

  return (
    <View>
      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => {
              navigation.navigate('ProductFiltered', {
                category: category,
              });
            }}>
            <View style={{flex: 0.3, padding: 15, alignItems: 'center'}}>
              <Image
                source={category.imageUrl}
                style={{width: 60, height: 60}}
              />
              <Text
                style={{
                  color: '#373737',
                  fontSize: 14,
                  marginTop: 10,
                  paddingLeft: 2,
                }}>
                {category.categoryName}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView> */}
      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
      <View>
        <View style={{flexDirection: 'row'}}>
          {categories.slice(0, 3).map((category, index) => (
            <Pressable
              key={index}
              style={{
                backgroundColor: category.backgroundColor,
                margin: 10,
                marginTop: 15,
                borderRadius: 15,
                flex: 0.33,
                justifyContent: 'center',
                alignItems: 'center',
                // width: 170,
                height: 170,
              }}
              onPress={() =>
                navigation.navigate('ProductFiltered', {category: category})
              }>
              <Image
                // source={require('../../../assets/category/kIRU3_1.png')}
                source={category.categoryImage}
                style={{
                  width: '80%',
                  height: '80%',
                  resizeMode: 'contain',
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  // paddingHorizontal: 15,
                }}>
                <Text style={styles.categoryText}>{category.categoryName}</Text>
                <FontAwesome6
                  name="circle-arrow-right"
                  color="black"
                  size={20}
                />
              </View>
            </Pressable>
          ))}
        </View>
        {/* <View style={styles.row}>
            {categoriesInRow2.map((category, index) => (
              <Pressable
                key={index}
                onPress={() =>
                  navigation.navigate('ProductFiltered', {category: category})
                }
                style={styles.categoryContainer}>
                <Image source={category.imageUrl} style={styles.image} />
                <Text style={styles.categoryText}>{category.categoryName}</Text>
              </Pressable>
            ))}
          </View> */}
      </View>
      {/* </ScrollView> */}
    </View>
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

  categoryText: {
    color: 'black',
    fontSize: 14,
    // marginTop: 10,
    // top: 40,
    // left: 10,
    // flexDirection: 'row',
    // letterSpacing: 1,
    fontFamily: 'Montserrat-Bold',
    // fontFamily: 'bookmanoldstyle_bold',
    // position: 'absolute',
    // fontWeight: '500',
    // textAlign: 'center',
    // backgroundColor: '#00000052',
    // paddingVertical: 2,
    paddingHorizontal: 5,
    // borderRadius: 5,
    // textShadowColor: '#00000052',
    // textShadowOffset: {width: 1, height: 2},
    // textShadowRadius: 2,
  },
});
