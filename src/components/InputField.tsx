import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function InputField({
  value,
  onChangeText,
  placeholder,
  error,
  icon,
  isPassword = false,
  showPassword,
  setShowPassword,
  onFocus,
  onBlur,
  focus,
}:any) {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: 50,
          borderWidth: 2,
          borderColor: focus ? "#4E9FEE" : error ? "red" : "#ccc",
          borderRadius: 10,
          paddingHorizontal: 10,
          backgroundColor: "white",
          marginBottom: error ? 4 : 14, // ⭐ FIX SPACING
        }}
      >
        <Ionicons
          name={icon}
          size={22}
          color={focus ? "#4E9FEE" : "#777"}
          style={{ marginRight: 8 }}
        />

        <TextInput
          style={{ flex: 1 }}
          placeholder={placeholder}
          placeholderTextColor="#aaa"
          value={value}
          secureTextEntry={isPassword && !showPassword}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={22}
              color="#777"
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Error text spacing stays consistent */}
      {error ? (
        <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
      ) : null}
    </>
  );
}
