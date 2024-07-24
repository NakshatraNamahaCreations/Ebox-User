import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('window');
const TAB_WIDTH = width / 4; // Adjusted for four tabs

const CustomTabBar = ({state, descriptors, navigation}) => {
  const animatedValue = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = withTiming(animatedValue.value * TAB_WIDTH, {
      duration: 250,
    });
    return {
      transform: [{translateX}],
    };
  });

  const handlePress = index => {
    animatedValue.value = index;
    const event = navigation.emit({
      type: 'tabPress',
      target: state.routes[index].key,
    });

    if (!event.defaultPrevented) {
      navigation.navigate(state.routes[index].name);
    }
  };

  return (
    <View style={styles.bg}>
      <View style={styles.tabBar}>
        <Animated.View style={[styles.highlight, animatedStyle]} />
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;
          let iconName, label;

          switch (route.name) {
            case 'HomeStack':
              iconName = 'home';
              label = 'Home';
              break;
            case 'BookingStack':
              iconName = 'calendar';
              label = 'Bookings';
              break;
            case 'CategoryStack':
              iconName = 'category';
              label = 'Categories';
              break;
            case 'CartStack':
              iconName = 'shoppingcart'; // Example icon for Services tab
              label = 'Cart';
              break;
            case 'You':
              iconName = 'user'; // Example icon for Services tab
              label = 'You';
              break;
            default:
              iconName = 'circle';
              label = 'Unknown';
          }

          // Calculate the icon position based on whether the tab is focused
          const iconPosition = isFocused ? {} : {};

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => handlePress(index)}
              style={[styles.tab, isFocused && styles.tabActive]}>
              <View
                style={[
                  styles.iconContainer,
                  isFocused && styles.activeIconContainer,
                ]}>
                <MaterialCommunityIcons
                  name={iconName}
                  size={25}
                  color={isFocused ? '#fff' : '#222'}
                  style={iconPosition} // Apply dynamic style for icon position
                />
              </View>
              {isFocused && <Text style={styles.label}>{label}</Text>}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'white',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 60,
    paddingBottom: 5,
    margin: 10,
    borderRadius: 10,
    position: 'relative',
    overflow: 'overflow',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  highlight: {
    width: TAB_WIDTH / 1.3,
    height: 0,
    backgroundColor: '#e91e63',
    position: 'absolute',
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabActive: {
    position: 'relative',
  },
  iconContainer: {
    backgroundColor: 'transparent',
    borderRadius: 20, // Adjust as needed to match the tabActive borderRadius
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIconContainer: {
    backgroundColor: '#FF7A00', // Background color for active icon
    borderRadius: 30, // Adjust as needed to match the tabActive borderRadius
    width: 40, // Adjust width for the active tab background
    height: 40, // Adjust height for the active tab background
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20, // Adjust position to move icon to top
  },
  label: {
    marginTop: 8,
    fontSize: 12,
    color: '#FF7A00',
    fontFamily: 'Poppins-Medium',
  },
});

export default CustomTabBar;
