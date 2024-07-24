import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { Image } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
// import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AllVendors({ navigation }) {
  const vendor = [
    {
      shopName: "Shri Vinayaka Rents",
      vendorName: "Vinayaka",
      location: "Channasandra",
      vendorBannerImage: [
        {
          imageUrl:
            "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg",
        },
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaA8j3JXCUJK6s0E139bWxzBDGcLkBaAaZBUycCpQo-9_9JZf99E2r7QQrTKS7qyNNmk&usqp=CAU",
        },
        {
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-qEOjAIUbs_tt9F5PFoFXzTsCvcTCr-xEpJsbaaEyp2mXkCZzv-yjkn1MzV5TEUr1rw&usqp=CAU",
        },
      ],
    },
    {
      shopName: "Nayak Digitals",
      vendorName: "Nayakan",
      location: "Banashankari",
      vendorBannerImage: [
        {
          imageUrl:
            "https://lh3.googleusercontent.com/p/AF1QipOV6toil7D3V_8hdR04NcbKC3tpOaG6BQKrwNR-=s680-w680-h510",
        },
        {
          imageUrl:
            "https://lh3.googleusercontent.com/p/AF1QipN5gR_rQob6ywAzN6KgTasz7-NEU6seZjtHs6Q6=s680-w680-h510",
        },
        {
          imageUrl:
            "https://lh3.googleusercontent.com/p/AF1QipOvmutDqf12OuCsy-f_NRf6B03W46ZRqhPe7bch=s680-w680-h510",
        },
      ],
    },
    {
      shopName: "Mani Enterprises",
      vendorName: "Mani Thiruvenkadam",
      location: "Majestic",
      vendorBannerImage: [
        {
          imageUrl:
            "https://lh3.googleusercontent.com/p/AF1QipPXLvQb1Va5haLR42be6Jnz35WemPmaJDjmJX6W=s680-w680-h510",
        },
        {
          imageUrl:
            "https://content.jdmagicbox.com/comp/nalgonda/m3/9999p8682.8682.201203170035.l9m3/catalogue/-8t9w2ohcqk.jpg",
        },
        {
          imageUrl:
            "https://www.daytonlocal.com/images/profiles/covers/special-occasions-party-supply.jpg",
        },
      ],
    },
  ];
  const [searchVendor, setSearchVendor] = useState("");
  const [filteredVendor, setFilteredVendor] = useState([]);
  useEffect(() => {
    const search = vendor.filter((vend) =>
      vend.vendorName.toLowerCase().includes(searchVendor.toLowerCase())
    );
    setFilteredVendor(search);
  }, [searchVendor]);
  console.log("filteredVendor", filteredVendor);
  return (
    <View>
      <LinearGradient
        colors={["#2f4e9e", "#152c67"]}
        style={{ flexDirection: "row" }}
      >
        <Pressable style={{ flex: 0.1 }}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={30}
            color="white"
            style={{ marginTop: 20, marginLeft: 4 }}
            onPress={() => navigation.goBack()}
          />
        </Pressable>
        <View style={{ flex: 0.9, paddingRight: 10 }}>
          <Fontisto
            name="search"
            size={18}
            color="black"
            style={{ position: "relative", zIndex: 11111, left: 15, top: 28 }}
          />
          <TextInput
            placeholderTextColor="#929292"
            placeholder="Search Vendor"
            style={{
              backgroundColor: "#F2F4FF",
              elevation: 6,
              borderRadius: 5,
              // width: '100%',
              borderWidth: 1,
              borderColor: "#C8C8C8",
              height: 35,
              padding: 5,
              color: "black",
              fontSize: 17,
              paddingLeft: 40,
              marginBottom: 10,
            }}
            onChangeText={(name) => setSearchVendor(name)}
          />
        </View>
      </LinearGradient>
      <View style={{ padding: 10, backgroundColor: "white", height: "100%" }}>
        {filteredVendor.map((ved, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: "white",
              borderColor: "transparent",
              borderWidth: 1,
              borderRadius: 15,
              // padding: 10,
              elevation: 2,
              marginBottom: 10,
            }}
            onPress={() => {
              navigation.navigate("VendorProfile", {
                vendorProfile: ved,
              });
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 0.3 }}>
                <Image
                  // key={index}
                  resizeMode="stretch"
                  style={{
                    width: 100,
                    height: 100,
                    borderTopLeftRadius: 15,
                    borderBottomLeftRadius: 15,
                  }}
                  //   source={require('../../../assets/samplevendor.png')}
                  source={{ uri: ved.vendorBannerImage[0]?.imageUrl }}
                  onError={() =>
                    console.log("Error loading image:", e.imageUrl)
                  }
                />
              </View>
              <View
                style={{
                  flex: 0.7,
                  justifyContent: "center",
                  //   alignContent: 'center',
                  //   alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    color: "black",
                    fontWeight: "500",
                  }}
                >
                  {/* <Ionicons name="storefront-outline" size={18} color="black" />{' '} */}
                  {ved.shopName}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: "black",
                    marginTop: 7,
                    // fontWeight: '500',
                  }}
                >
                  {/* <SimpleLineIcons name="user" size={15} color="black" />{' '} */}
                  {ved.vendorName}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: "#5d6fff",
                    marginTop: 7,
                    fontWeight: "500",
                  }}
                >
                  <SimpleLineIcons
                    name="location-pin"
                    size={13}
                    color="#5d6fff"
                  />{" "}
                  {ved.location}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
