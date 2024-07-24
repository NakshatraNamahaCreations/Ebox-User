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

export default function Category() {
  const navigation = useNavigation();

  const categoriesInRow1 = categories.slice(
    0,
    Math.ceil(categories.length / 2),
  );
  const categoriesInRow2 = categories.slice(Math.ceil(categories.length / 2));

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}>
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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <View style={styles.row}>
              {categories.map((category, index) => (
                <Pressable
                  key={index}
                  onPress={() =>
                    navigation.navigate('ProductFiltered', {category: category})
                  }>
                  <Image
                    // source={require('../../../assets/category/kIRU3_1.png')}
                    source={category.imageUrl}
                    style={{
                      width: 200,
                      height: 200,
                      resizeMode: 'cover',
                      margin: 10,
                      marginTop: 15,
                      borderRadius: 15,
                      // backgroundColor: 'black',
                      // opacity: 0.6,
                    }}
                  />
                  <Text style={styles.categoryText}>
                    {category.categoryName}
                  </Text>
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
          marginVertical: 10,
        }}>
        <Text
          style={{
            fontSize: 13,
            color: 'black',
            fontFamily: 'bookmanoldstyle_bold',
            // fontFamily: "Poppins-Medium",
            letterSpacing: 1,
          }}>
          SERVICES{' '}
        </Text>
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
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginBottom: 10,
        }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <View style={styles.row}>
              {services.map((category, index) => (
                <Pressable
                  key={index}
                  style={{
                    backgroundColor: '#ffb133',
                    marginHorizontal: 6,
                    borderRadius: 50,
                    flex: 0.3,
                  }}
                  onPress={() =>
                    navigation.navigate('ProductFiltered', {category: category})
                  }>
                  <Image
                    source={category.imageUrl}
                    style={{
                      width: '60%',
                      height: '60%',
                      resizeMode: 'contain',
                      marginTop: 15,
                      alignSelf: 'center',
                    }}
                  />
                  <Text
                    style={{
                      color: '#373737',
                      fontSize: 13,
                      textAlign: 'center',
                      marginTop: 10,
                      letterSpacing: 1,
                      fontFamily: 'Poppins-Medium',
                    }}>
                    {category.categoryName}
                  </Text>
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
        </ScrollView>
      </View>
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
  row: {
    flexDirection: 'row',
  },
  categoryText: {
    color: '#373737',
    fontSize: 20,
    // marginTop: 10,
    top: 30,
    left: 20,
    letterSpacing: 1,
    fontFamily: 'bookmanoldstyle_bold',
    position: 'absolute',
    // fontWeight: '500',
    // textAlign: 'center',
    textShadowColor: '#0000004a',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 2,
  },
});
