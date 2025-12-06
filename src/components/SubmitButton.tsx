import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function SubmitButton({ disabled, onPress, title }:any) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        height: 50,
        backgroundColor: disabled ? "#9CC8F5" : "#4E9FEE",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
      }}
    >
      <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
