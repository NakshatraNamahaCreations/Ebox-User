import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Booking from "../components/booking_screen/Booking";
const Stack = createNativeStackNavigator();

function BookingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export default BookingStack;
