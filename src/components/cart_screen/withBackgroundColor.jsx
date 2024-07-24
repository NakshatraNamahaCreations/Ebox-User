import { View, Text } from "react-native";
import React from "react";

function withBackgroundColor(WrappedComponent, backgroundColor) {
  return function (props) {
    return (
      <View style={{ backgroundColor }}>
        <WrappedComponent {...props} />
      </View>
    );
  };
}

export default withBackgroundColor;
