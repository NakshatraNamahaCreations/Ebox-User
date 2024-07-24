import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function Project() {
  return (
    <View style={{ height: "100%", padding: 20, backgroundColor: "white  " }}>
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 0.2 }}>
          <Image
            source={require("../../assets/blueprint_6475483.png")}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View style={{ flex: 0.8 }}>
          <View style={{ padding: 10 }}>
            <Text style={{ color: "#353535", fontWeight: "600", fontSize: 19 }}>
              From scratch
            </Text>
            <Text style={{ color: "#353535", fontSize: 16 }}>
              Use your creativity
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
