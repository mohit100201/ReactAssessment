import React from "react";
import { Image, Text, View } from "react-native";

export default function AuthHeader() {
  return (
    <View style={{ flex: 0.5, minHeight: 200 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image source={require("../../assets/images/light.png")} />
        <Image
          source={require("../../assets/images/light.png")}
          style={{ marginTop: -60, opacity: 0.8 }}
        />
      </View>

      <Text
        style={{
          fontSize: 34,
          color: "white",
          marginTop: 32,
          alignSelf: "center",
          fontWeight: "bold",
        }}
      >
        Login
      </Text>
    </View>
  );
}
