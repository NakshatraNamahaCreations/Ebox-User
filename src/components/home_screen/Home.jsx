import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Ionicons from "react-native-vector-icons/Ionicons";

import VendorDisplay from "../vendor/VendorDisplay";

const { width } = Dimensions.get("window");

function Home({ navigation }) {
  const vendor = [
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661369901339-f6ac6d76541f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwdOUqXfAn8DfV_DoMhVBtklZJJzEyI7TuCpql2RnDNKMiVwcCdBJNg_4IBEhzCnQ7VQ&usqp=CAU",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsGqYkSxwHvmTZKgZTKHh6LCVRpN7B9qh6iXalyZd3VcKY9BocrfIpgXWdvhcNPpNUTlo&usqp=CAU",
    },
  ];

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
        scrollViewRef.current.scrollTo({ x: 0, animated: true });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [imgActive]);

  const onChange = (event) => {
    const slide = Math.ceil(
      event.contentOffset.x / event.layoutMeasurement.width
    );
    if (slide !== imgActive) {
      setImgActive(slide);
    }
  };

  const imageSliderData = vendor.map((item) => ({
    img: item.imageUrl,
  }));

  const imagenew = imageSliderData.map((item) => item.img);
  return (
    <ScrollView style={styles.container}>
      <Header />

      <View style={styles.moodBoardSection}>
        <View style={styles.moodBoard}>
          <View style={{ flex: 0.4 }}>
            <TouchableOpacity
              style={styles.boardDesign}
              onPress={() => {
                navigation.navigate("Create New Project");
              }}
            >
              <Text style={[styles.newProject, styles.button]}>
                New Project
              </Text>
              <Text style={styles.tab}>Tab to get started</Text>
              <View style={styles.addIcon}>
                <Ionicons name="add-circle" color="white" size={30} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.1 }}></View>
          <View style={{ flex: 0.5 }}>
            <View style={{ marginTop: 15 }}>
              <Text style={styles.text}>
                Design your event, just the way you like it.
              </Text>
              <Text style={styles.text1}>
                Start a new projects from scratch.
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* Banner Sctions========================= */}
      <View style={styles.bannerSection}>
        <View>
          <ScrollView
            ref={scrollViewRef}
            onScroll={({ nativeEvent }) => onChange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.viewBox}
          >
            {imageSliderData.map((e, index) => (
              <View key={index.toString()} style={styles.imageContainer}>
                <Image
                  key={index}
                  resizeMode="stretch"
                  style={styles.bannerImage}
                  source={{ uri: e.img }}
                  onError={() => console.log("Error loading image:", e.img)}
                />
              </View>
            ))}
          </ScrollView>
          <View style={styles.wrapDot}>
            {imagenew.map((e, index) => (
              <Text
                key={index}
                style={imgActive === index ? styles.dotActive : styles.dot}
              >
                ●
              </Text>
            ))}
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: 20,
          margin: 10,
        }}
      >
        <Text style={styles.vendorTitle}>Vendor For You</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("All Vendors");
          }}
        >
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.vendorSection}>
        <VendorDisplay />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  moodBoardSection: { backgroundColor: "white" },
  moodBoard: {
    padding: 20,
    flexDirection: "row",
  },
  text: {
    color: "black",
    fontSize: 15,
    fontWeight: "500",
  },
  text1: {
    color: "black",
    fontSize: 15,
    marginTop: 20,
    fontWeight: "400",
  },
  boardDesign: {
    padding: 15,
    width: 135,
    height: 135,
    borderRadius: 10,
    backgroundColor: "#E3A400",
  },
  newProject: {
    fontSize: 15,
    color: "white",
  },
  tab: {
    marginTop: 10,
    fontSize: 15,

    color: "#fed66d",
  },
  addIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  bannerSection: {
    marginTop: 10,
    marginBottom: 15,
    // paddingLeft: 10,
    // paddingRight: 10,
  },
  bannerImage: {
    width: width - 40, // Adjusted width to account for margins
    height: 200,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  viewBox: {
    // width: width - 20,
    width: width,
    height: 200,
  },
  dotContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",

    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 10,
    marginHorizontal: 10,
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "white",
  },
  dot: {
    margin: 3,
    color: "yellow",
  },
  vendorTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  seeAll: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2f4e9e",
    marginRight: 10,
  },
  vendorSection: {
    // marginTop: 20,
    marginBottom: 10,
    // flexDirection: 'row',
  },
});
export default Home;
