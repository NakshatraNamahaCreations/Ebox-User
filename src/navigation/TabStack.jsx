import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./BottomTab";
import ProductFiltered from "../components/ProductFiltered";
import VendorProfile from "../components/vendor/VendorProfile";
// import AddAddress from '../components/cart_screen/AddAddress';

const Stack = createNativeStackNavigator();

function TabStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductFiltered"
        component={ProductFiltered}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VendorProfile"
        component={VendorProfile}
        options={{ headerShown: true }}
      />
      {/* <Stack.Screen
        name="Add Address"
        component={AddAddress}
        options={{headerShown: true}}
      /> */}
    </Stack.Navigator>
  );
}

export default TabStack;
