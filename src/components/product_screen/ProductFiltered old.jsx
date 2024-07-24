import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  // Modal,
  // Button,
  // SafeAreaView,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import React, { useState } from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import { priceFilter, productList } from "../../data/global-data";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";

// import BottomSheet from 'react-native-gesture-bottom-sheet';

export default function ProductFiltered({ route }) {
  const navigation = useNavigation();
  const category = route.params.category;
  // console.log('category', category);
  const deviceWidth = Dimensions.get("window").width;
  const [showPrice, setShowPrice] = useState(true);
  const [showVendor, setShowVendor] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const filteredProducts = productList.filter(
    (item) => item.categoryId === category._id
  );

  const openModal = () => {
    setShowOptions(true);
  };

  // console.log('filteredProducts', filteredProducts);
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View style={{ paddingTop: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <Pressable style={{ flex: 0.1 }}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={30}
              color="#575656"
              style={styles.goBackIcon}
              onPress={() => navigation.goBack()}
            />
          </Pressable>
          <View style={{ flex: 0.9, paddingRight: 10 }}>
            <Feather
              name="search"
              size={19}
              color="#ea5362"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="#737373"
              placeholder={`Search ${category.categoryName}`}
            />
          </View>
        </View>
      </View>
      {filteredProducts.length === 0 ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: 'white',
            // height: '100%',
          }}
        >
          <Text style={{ color: "black", fontSize: 18, textAlign: "center" }}>
            No Products available!
          </Text>
        </View>
      ) : (
        <>
          <View
            style={{
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              padding: 10,
              // elevation: 1,
              // borderBottomColor: 'white',
              // borderBottomWidth: 1,
            }}
          >
            <Pressable onPress={openModal}>
              <Text
                style={{
                  color: "#01007B",
                  fontSize: 18,
                  textAlign: "right",
                  paddingRight: 10,
                }}
              >
                Filters{" "}
                <Entypo name="chevron-small-down" size={16} color="#01007B" />
              </Text>
            </Pressable>
          </View>

          <ScrollView>
            <View style={styles.container}>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  paddingLeft: 2,
                  paddingRight: 2,
                  // elevation: 4,
                  // backgroundColor: 'white',
                }}
              >
                {filteredProducts.map((ele, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ProductDetails", {
                        ele: ele,
                      });
                    }}
                    style={{
                      width: "50%",
                      // padding: 5,
                      backgroundColor: "white",
                      borderWidth: 1,
                      borderColor: "#ededed",
                      // elevation: 1,
                    }}
                    key={index}
                  >
                    <View>
                      <View style={{ position: "relative" }}>
                        {/* <View
                      style={{
                        backgroundColor: 'yellow',
                        paddingLeft: 5,
                        paddingRight: 5,
                        width: 'auto',
                      }}>
                      <Text style={{color: 'black', fontSize: 15}}>
                        {`JBL`}
                      </Text>
                    </View> */}
                      </View>
                      <Image
                        style={styles.productImage}
                        source={{
                          uri: ele.productImage,
                        }}
                      />
                      <View style={{ padding: 5 }}>
                        <Text
                          style={{
                            color: "black",
                            fontSize: 15,
                            fontWeight: "500",
                            marginBottom: 2,
                          }}
                        >
                          {ele.productName.length < 28
                            ? ele.productName
                            : ele.productName.substring(0, 25) + "..."}
                        </Text>

                        <Text style={styles.productName}>{ele.shopName}</Text>
                        {/* <View style={{flexDirection: 'row'}}>
                      {Array.from({length: 5}).map((_, index) => (
                        <AntDesign
                          key={index}
                          name="star"
                          size={14}
                          color="#fdd663"
                        />
                      ))}
                      <View style={{marginLeft: 9}}>
                        <Text style={{color: 'black', fontSize: 14}}>45</Text>
                      </View>
                    </View> */}
                        <Text style={styles.productPrice}>
                          <MaterialIcons
                            name="currency-rupee"
                            size={13}
                            color="black"
                          />
                          {ele.productPrice}
                        </Text>
                        <View style={{ marginTop: 8, marginBottom: 8 }}>
                          <Pressable
                            onPress={() => {
                              navigation.navigate("ProductDetails", {
                                ele: ele,
                              });
                            }}
                            // onPress={onPressLearnMore}
                            style={styles.viewButton}
                          >
                            <Text style={styles.viewDetails}>View</Text>
                          </Pressable>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>
        </>
      )}
      <Modal
        animationIn="slideInUp"
        isVisible={showOptions}
        deviceWidth={deviceWidth}
        style={styles.modal}
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View
            style={{
              padding: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ color: "black", fontWeight: "600", fontSize: 16 }}>
                Filters
              </Text>
            </View>
            <Pressable onPress={() => setShowOptions(false)}>
              <Fontisto name="close-a" size={13} color="black" />
            </Pressable>
          </View>
          <View
            style={{ borderBottomColor: "#e4e4e4", borderBottomWidth: 1 }}
          ></View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{ flex: 0.2, borderRightWidth: 1, borderColor: "#e4e4e4" }}
            >
              <Pressable
                onPress={() => {
                  setShowPrice(true);
                  setShowVendor(false);
                  setShowShop(false);
                }}
              >
                <View
                  style={{
                    backgroundColor: showPrice ? "#e2e2e2" : "white",
                    paddingLeft: 10,
                    paddingTop: 16,
                    paddingBottom: 16,
                    borderBottomColor: "#e4e4e4",
                    borderWidth: 1,
                    borderColor: "transparent",
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      // color: showPrice ? '#01007B' : 'black',
                      fontSize: 15,
                      textAlign: "left",
                      marginLeft: 5,
                      // fontWeight: showPrice ? '600' : '',
                    }}
                  >
                    Price
                  </Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  setShowPrice(false);
                  setShowVendor(true);
                  setShowShop(false);
                }}
              >
                <View
                  style={{
                    backgroundColor: showVendor ? "#e2e2e2" : "white",
                    paddingLeft: 10,
                    paddingTop: 16,
                    paddingBottom: 16,
                    borderBottomColor: "#e4e4e4",
                    borderWidth: 1,
                    borderColor: "transparent",
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      // color: showVendor ? '#01007B' : 'black',
                      fontSize: 15,
                      textAlign: "left",
                      marginLeft: 5,
                      // fontWeight: showVendor ? '600' : '',
                    }}
                  >
                    Vendor
                  </Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  setShowPrice(false);
                  setShowVendor(false);
                  setShowShop(true);
                }}
              >
                <View
                  style={{
                    backgroundColor: showShop ? "#e2e2e2" : "white",
                    paddingLeft: 10,
                    paddingTop: 16,
                    paddingBottom: 16,
                    borderBottomColor: "#e4e4e4",
                    borderWidth: 1,
                    borderColor: "transparent",
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      // color: showVendor ? '#01007B' : 'black',
                      fontSize: 15,
                      textAlign: "left",
                      marginLeft: 5,
                      // fontWeight: showVendor ? '600' : '',
                    }}
                  >
                    Shop
                  </Text>
                </View>
              </Pressable>
              {/* <Pressable
                onPress={() => {
                  setShowPrice(false);
                  setShowVendor(false);
                  setShowShop(true);
                }}>
                <View
                  style={{
                    backgroundColor: showShop ? '#e2e2e2' : 'white',
                    paddingLeft: 10,
                    paddingTop: 16,
                    paddingBottom: 16,
                    borderBottomColor: '#e4e4e4',
                    borderWidth: 1,
                    borderColor: 'transparent',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      // color: showVendor ? '#01007B' : 'black',
                      fontSize: 15,
                      textAlign: 'left',
                      marginLeft: 5,
                      // fontWeight: showVendor ? '600' : '',
                    }}>
                    Shop
                  </Text>
                </View>
              </Pressable> */}
            </View>
            <View style={{ flex: 0.8, padding: 20, marginBottom: 20 }}>
              {showPrice && (
                <View>
                  <Text
                    style={{
                      color: "black",
                      fontSize: 15,
                      fontWeight: "600",
                      // paddingRight: 1,
                    }}
                  >
                    Price
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-around",
                      // alignItems: 'center',
                      marginTop: 6,
                    }}
                  >
                    {priceFilter.map((ele, index) => (
                      <TouchableOpacity
                        key={index}
                        style={{
                          // flex: 0.5,
                          width: "30%",
                          margin: 1,
                          backgroundColor: "#DADDF8",
                          borderColor: "#01007b70",
                          borderWidth: 1,
                          marginBottom: 6,
                          paddingLeft: 2,
                          paddingRight: 2,
                          paddingTop: 10,
                          paddingBottom: 10,
                          borderRadius: 6,
                        }}
                      >
                        <Text
                          style={{
                            color: "#01007B",
                            fontSize: 14,
                            textAlign: "center",
                          }}
                        >
                          {ele.price}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}

              {showVendor && (
                <View>
                  <Text
                    style={{
                      color: "black",
                      fontSize: 15,
                      fontWeight: "600",
                      // paddingRight: 1,
                    }}
                  >
                    Vendor
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-around",
                      // alignItems: 'center',
                      marginTop: 6,
                    }}
                  >
                    {filteredProducts.map((vendor, index) => (
                      <TouchableOpacity
                        key={index}
                        style={{
                          // flex: 0.5,
                          width: "30%",
                          margin: 1,
                          backgroundColor: "#DADDF8",
                          borderColor: "#01007b70",
                          borderWidth: 1,
                          marginBottom: 6,
                          paddingLeft: 2,
                          paddingRight: 2,
                          paddingTop: 10,
                          paddingBottom: 10,
                          borderRadius: 6,
                        }}
                      >
                        <Text
                          style={{
                            color: "#01007B",
                            fontSize: 14,
                            textAlign: "center",
                          }}
                        >
                          {vendor.vendorName}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}
            </View>
          </View>
          <View
            style={{
              position: "relative",
              width: "100%",
              bottom: 0,
              // top: 10,
              backgroundColor: "white",
              // margin: 0,
              // height: 62,
              padding: 12,
              borderTopColor: "#e4e4e4",
              borderWidth: 1,
              border: "transparent",
              // border-bottom: .1rem solid #e7e7e7;
              zIndex: 99999,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Pressable
                onPress={() => setShowOptions(false)}
                style={{
                  borderColor: "#01007b70",
                  borderWidth: 1,
                  paddingRight: 12,
                  paddingLeft: 12,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: "#01007B" }}>Clear Filters</Text>
              </Pressable>
            </View>
            <View>
              <Pressable
                onPress={() => setShowOptions(false)}
                style={{
                  borderColor: "#01007b70",
                  borderWidth: 1,
                  paddingRight: 12,
                  paddingLeft: 12,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderRadius: 5,
                  backgroundColor: "#01007B",
                }}
              >
                <Text style={{ color: "white" }}>Show Results</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    // flex: 1,
    marginTop: 10,
  },
  goBackIcon: {
    marginTop: 10,
    marginLeft: 4,
  },
  searchIcon: {
    position: "absolute",
    zIndex: 11111,
    left: 15,
    top: 16,
  },
  input: {
    backgroundColor: "white",
    elevation: 3,
    borderRadius: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: "transparent",
    height: 50,
    padding: 5,
    color: "black",
    fontSize: 17,
    paddingLeft: 40,
    marginBottom: 10,
  },
  productImage: {
    marginTop: 8,
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  productName: {
    fontSize: 14,
    // overflow: 'hidden',
    // fontWeight: '500',
    color: "#575656",
    marginBottom: 7,
    // textAlign: 'center',
  },
  productPrice: {
    fontSize: 20,
    color: "#414242",
    fontWeight: "500",
  },
  viewButton: {
    borderRadius: 20,
    backgroundColor: "#DADDF8",
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  viewDetails: {
    fontSize: 16,
    color: "#01007B",
    textAlign: "center",
    fontWeight: "500",
  },
  // section_text: {
  //   fontSize: 20,
  //   alignSelf: 'center',
  //   color: '#000000',
  //   textDecorationLine: 'underline',
  // },
  // textPrice: {
  //   color: '#000000',
  //   fontSize: 16,
  //   marginHorizontal: 20,
  //   marginVertical: 3,
  // },
  // button: {
  //   height: 50,
  //   width: 150,
  //   backgroundColor: '#140078',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 20,
  //   shadowColor: '#8559da',
  //   shadowOpacity: 0.7,
  //   shadowOffset: {
  //     height: 4,
  //     width: 4,
  //   },
  //   shadowRadius: 5,
  //   elevation: 6,
  // },
  // text: {
  //   color: 'white',
  //   fontWeight: '600',
  // },
  modal: {
    margin: 0,
  },
  centeredView: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    width: "100%",
    elevation: 5,
    backgroundColor: "white",
    // padding: 10,
    shadowColor: "#000",
    // borderTopRightRadius: 10,
    // borderTopLeftRadius: 10,
  },
});
