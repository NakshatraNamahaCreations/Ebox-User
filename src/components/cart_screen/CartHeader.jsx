import { View, Text } from "react-native";
import React from "react";

export default function CartHeader({ cartSize }) {
  return (
    <View
      style={{
        // backgroundColor: 'white',
        padding: 15,
        // elevation: 10,
        borderWidth: 2,
        borderColor: "#e3e3e3",
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          color: "black",
          fontSize: 20,
          fontWeight: "600",
          marginRight: 5,
        }}
      >
        Cart
      </Text>
      <Text style={{ color: "black", fontSize: 20, fontWeight: "600" }}>
        ({cartSize})
      </Text>
    </View>
  );
}
