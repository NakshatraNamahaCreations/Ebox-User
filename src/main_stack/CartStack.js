import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../components/cart_screen/Cart";
// import AddAddress from '../components/cart_screen/AddAddress';

const Stack = createNativeStackNavigator();

function CartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Add Address"
        component={AddAddress}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}

export default CartStack;
