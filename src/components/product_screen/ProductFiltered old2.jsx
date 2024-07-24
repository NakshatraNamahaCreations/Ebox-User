import {
  View,
  Text,
  Pressable,
  TextInput,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { priceFilter, productList } from "../../data/global-data";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function ProductFiltered({ route }) {
  const navigation = useNavigation();
  const category = route.params.category;

  const filteredProducts = productList.filter(
    (item) => item.categoryId === category._id
  );
  console.log("filteredProducts", filteredProducts);
  const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {filteredProducts.length === 0 ? (
        <Text
          style={{
            marginTop: 30,
            color: "#878697",
            fontSize: 17,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          {`No results for ${category.categoryName.toLowerCase()}`}
        </Text>
      ) : (
        <ScrollView>
          <View style={{ marginTop: 10 }}>
            <View
              style={{
                // flexDirection: 'row',
                // flexWrap: 'wrap',
                // paddingLeft: 2,
                // paddingRight: 2,
                // elevation: 4,
                backgroundColor: "white",
              }}
            >
              {Array.from({ length: 9 }).map((_, index) => (
                <TouchableOpacity
                  // onPress={() => {
                  //   navigation.navigate('ProductDetails', {
                  //     ele: ele,
                  //   });
                  // }}
                  style={{
                    flexDirection: "row",
                    // width: '50%',
                    // backgroundColor: 'gray',
                    margin: 10,
                    marginBottom: 3,
                  }}
                  key={index}
                >
                  <View style={{ flex: 0.4 }}>
                    <Image
                      style={{
                        marginTop: 8,
                        width: 150,
                        height: 150,
                        alignSelf: "center",
                        borderRadius: 20,
                      }}
                      source={{
                        uri: "https://img.freepik.com/free-vector/bull-logo-template-design_23-2150454457.jpg?t=st=1717825508~exp=1717829108~hmac=dee30784ec026bf7cf8e7fc0e575752aad846e7fc3c392e9bf7259b2789be7db&w=740",
                      }}
                    />
                  </View>
                  <View style={{ padding: 5, flex: 0.6 }}>
                    <Text
                      style={{
                        color: "black",
                        fontSize: 20,
                        // fontWeight: '500',
                        marginBottom: 2,
                        marginTop: 10,
                        fontFamily: "Roboto-Medium",
                      }}
                    >
                      JT Equipment Rentals LLC
                      {/* {ele.productName.length < 28
                      ? ele.productName
                      : ele.productName.substring(0, 25) + '...'} */}
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      {Array.from({ length: 5 }).map((_, index) => (
                        <AntDesign
                          key={index}
                          name="star"
                          size={16}
                          color="#fdd663"
                        />
                      ))}
                      <View style={{ marginLeft: 9 }}>
                        <Text
                          style={{
                            color: "black",
                            fontFamily: "Roboto-Medium",
                            fontSize: 16,
                          }}
                        >
                          45
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{
                        fontSize: 15,
                        // overflow: 'hidden',
                        // fontWeight: '500',
                        color: "#575656",
                        marginBottom: 7,
                      }}
                    >
                      Electronic City
                      {/* {ele.shopName} */}
                    </Text>
                    {/* <Text
                    style={{
                      fontSize: 20,
                      color: '#414242',
                      fontWeight: '500',
                    }}>
                    <MaterialIcons
                      name="currency-rupee"
                      size={13}
                      color="black"
                    />
                    {ele.productPrice}
                  </Text> */}
                    {/* <View style={{marginTop: 8, marginBottom: 8}}>
                        <Pressable
                          onPress={() => {
                            navigation.navigate('ProductDetails', {
                              ele: ele,
                            });
                          }}
                          // onPress={onPressLearnMore}
                          style={styles.viewButton}>
                          <Text style={styles.viewDetails}>View</Text>
                        </Pressable>
                      </View> */}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>

        // <ScrollView>
        //   <View style={{marginTop: 10}}>
        //     <View
        //       style={{
        //         flexDirection: 'row',
        //         flexWrap: 'wrap',
        //         paddingLeft: 2,
        //         paddingRight: 2,
        //         // elevation: 4,
        //         // backgroundColor: 'white',
        //       }}>
        //       {Array.from({length: 9}).map((_, index) => (
        //         <TouchableOpacity
        //           // onPress={() => {
        //           //   navigation.navigate('ProductDetails', {
        //           //     ele: ele,
        //           //   });
        //           // }}
        //           style={{
        //             width: '50%',
        //             // padding: 5,
        //             backgroundColor: 'white',
        //             // borderWidth: 2,
        //             // borderColor: 'transparent',
        //             elevation: 2,
        //             // borderBottomColor: 'black',
        //             // borderBottomWidth: 2,
        //             marginBottom: 3,
        //             // marginRight: 3,
        //             // paddingRight: 2,
        //           }}
        //           key={index}>
        //           <View>
        //             {/* <View style={{position: 'relative', width: '50%'}}>
        //           <View
        //             style={{
        //               backgroundColor: 'yellow',
        //               paddingLeft: 5,
        //               paddingRight: 5,
        //               // width: 100,
        //             }}>
        //             <Text style={{color: 'black', fontSize: 15}}>
        //               {`JBL`}
        //             </Text>
        //           </View>
        //         </View> */}
        //             <Image
        //               style={{
        //                 marginTop: 8,
        //                 width: 100,
        //                 height: 100,
        //                 alignSelf: 'center',
        //               }}
        //               source={{
        //                 uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/OYO_Rooms_%28logo%29.png/1200px-OYO_Rooms_%28logo%29.png',
        //               }}
        //             />
        //             <View style={{padding: 5}}>
        //               <Text
        //                 style={{
        //                   color: 'black',
        //                   fontSize: 15,
        //                   fontWeight: '500',
        //                   marginBottom: 2,
        //                 }}>
        //                 JT Equipment Rentals LLC
        //               </Text>

        //               <Text
        //                 style={{
        //                   fontSize: 14,
        //                   // overflow: 'hidden',
        //                   // fontWeight: '500',
        //                   color: '#575656',
        //                   marginBottom: 7,
        //                 }}>
        //                 Electronic City
        //                 {/* {ele.shopName} */}
        //               </Text>
        //               {/* <View style={{flexDirection: 'row'}}>
        //           {Array.from({length: 5}).map((_, index) => (
        //             <AntDesign
        //               key={index}
        //               name="star"
        //               size={14}
        //               color="#fdd663"
        //             />
        //           ))}
        //           <View style={{marginLeft: 9}}>
        //             <Text style={{color: 'black', fontSize: 14}}>45</Text>
        //           </View>
        //         </View> */}
        //               {/* <Text
        //               style={{
        //                 fontSize: 20,
        //                 color: '#414242',
        //                 fontWeight: '500',
        //               }}>
        //               <MaterialIcons
        //                 name="currency-rupee"
        //                 size={13}
        //                 color="black"
        //               />
        //               {ele.productPrice}
        //             </Text> */}
        //               {/* <View style={{marginTop: 8, marginBottom: 8}}>
        //               <Pressable
        //                 onPress={() => {
        //                   navigation.navigate('ProductDetails', {
        //                     ele: ele,
        //                   });
        //                 }}
        //                 // onPress={onPressLearnMore}
        //                 style={styles.viewButton}>
        //                 <Text style={styles.viewDetails}>View</Text>
        //               </Pressable>
        //             </View> */}
        //             </View>
        //           </View>
        //         </TouchableOpacity>
        //       ))}
        //     </View>
        //   </View>
        // </ScrollView>
      )}
    </View>
  );

  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {filteredProducts.length === 0 ? (
        <Text
          style={{
            marginTop: 30,
            color: "#878697",
            fontSize: 17,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          {`No results for ${category.categoryName.toLowerCase()}`}
        </Text>
      ) : (
        <ScrollView>
          <View style={{ marginTop: 10 }}>
            <View
              style={{
                // flexDirection: 'row',
                // flexWrap: 'wrap',
                // paddingLeft: 2,
                // paddingRight: 2,
                // elevation: 4,
                backgroundColor: "white",
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
                    flexDirection: "row",
                    // width: '50%',
                    // backgroundColor: 'gray',
                    margin: 10,
                    marginBottom: 3,
                  }}
                  key={index}
                >
                  <View style={{ flex: 0.4 }}>
                    <Image
                      style={{
                        marginTop: 8,
                        width: 150,
                        height: 150,
                        alignSelf: "center",
                      }}
                      source={{
                        uri: ele.productImage,
                      }}
                    />
                  </View>
                  <View style={{ padding: 5, flex: 0.6 }}>
                    <Text
                      style={{
                        color: "black",
                        fontSize: 20,
                        // fontWeight: '500',
                        marginBottom: 2,
                        fontFamily: "Roboto-Medium",
                      }}
                    >
                      {ele.productName.length < 28
                        ? ele.productName
                        : ele.productName.substring(0, 25) + "..."}
                    </Text>

                    <Text
                      style={{
                        fontSize: 15,
                        // overflow: 'hidden',
                        // fontWeight: '500',
                        color: "#575656",
                        marginBottom: 7,
                      }}
                    >
                      {ele.shopName}
                    </Text>
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
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#414242",
                        fontWeight: "500",
                      }}
                    >
                      <MaterialIcons
                        name="currency-rupee"
                        size={13}
                        color="black"
                      />
                      {ele.productPrice}
                    </Text>
                    {/* <View style={{marginTop: 8, marginBottom: 8}}>
                          <Pressable
                            onPress={() => {
                              navigation.navigate('ProductDetails', {
                                ele: ele,
                              });
                            }}
                            // onPress={onPressLearnMore}
                            style={styles.viewButton}>
                            <Text style={styles.viewDetails}>View</Text>
                          </Pressable>
                        </View> */}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Shops" },
    { key: "second", title: "Products" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: "#ea5362",
        borderWidth: 2,
        borderColor: "transparent",
      }}
      style={{ backgroundColor: "white" }}
      renderLabel={({ route, focused, color }) => (
        <Text
          style={[
            styles.tabLabel,
            focused ? styles.activeTab : styles.inactiveTab,
          ]}
        >
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <View style={{ backgroundColor: "white", height: "100%", paddingTop: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <Pressable style={{ flex: 0.1 }}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={30}
            color="#575656"
            style={{ marginTop: 10, marginLeft: 4 }}
            onPress={() => navigation.goBack()}
          />
        </Pressable>
        <View style={{ flex: 0.9, paddingRight: 10 }}>
          <Feather
            name="search"
            size={19}
            color="#ea5362"
            style={{ position: "absolute", zIndex: 11111, left: 15, top: 13 }}
          />
          <TextInput
            style={{
              backgroundColor: "white",
              elevation: 3,
              borderRadius: 10,
              width: "100%",
              borderWidth: 1,
              borderColor: "transparent",
              height: 45,
              padding: 5,
              color: "black",
              fontSize: 17,
              paddingLeft: 40,
              marginBottom: 10,
            }}
            placeholderTextColor="#737373"
            placeholder={`Search ${category.categoryName}`}
          />
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    // margin: 8,
    fontSize: 16,
    fontWeight: "500",
  },
  activeTab: {
    color: "black", // Active tab text color
    fontWeight: "500",
    // fontSize: 17,
  },
  inactiveTab: {
    color: "#696969", // Inactive tab text color
  },
});

export default ProductFiltered;
