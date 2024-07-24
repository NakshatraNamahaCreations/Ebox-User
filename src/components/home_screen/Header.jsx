import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {categories} from '../../data/global-data';

export default function Header() {
  const navigation = useNavigation();

  return (
    <View>
      <LinearGradient colors={['#2f4e9e', '#152c67']}>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
          }}>
          <View style={{flex: 0.7}}>
            <Text style={{color: 'white', fontSize: 25, fontWeight: '600'}}>
              Event Box
            </Text>
          </View>
          <View
            style={{
              flex: 0.3,
              justifyContent: 'flex-end',
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{flex: 0.5}}
                onPress={() => {
                  navigation.navigate('Notifications');
                }}>
                <Ionicons name="notifications" color={'white'} size={25} />
              </TouchableOpacity>
              <View style={{flex: 0.5}}>
                <Text style={{color: 'white', fontSize: 15}}>Kiru</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // padding: 10,
            width: '100%',
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  navigation.navigate('ProductFiltered', {
                    category: category,
                  });
                }}>
                <View style={styles.categories}>
                  <Image source={category.imageUrl} style={styles.logo} />
                  <Text style={styles.categoryText}>
                    {category.categoryName}
                  </Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </LinearGradient>
    </View>
  );
}

// background: rgb(47,78,158);
// background: linear-gradient(180deg, rgba(47,78,158,1) 35%, rgba(17,28,56,1) 100%);

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
  },
  categories: {flex: 0.3, padding: 15, alignItems: 'center'},
  categoryText: {
    color: 'white',
    fontSize: 12,
  },
});
