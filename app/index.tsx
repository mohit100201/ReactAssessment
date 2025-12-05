import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";

export default function Index() {
  const router = useRouter();
  const [emailFocus, setEmailFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (value: any) => {
    setEmail(value);
    const emailRegex = /\S+@\S+\.\S+/;
    setEmailError(!emailRegex.test(value) ? "Enter a valid email" : "");
  };

  const validatePassword = (value: any) => {
    setPassword(value);
    setPassError(value.length < 8 ? "Password must be 8 characters" : "");
  };

  const isFormValid =
    email !== "" && password !== "" && emailError === "" && passError === "";

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 16 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {/* TOP SECTION */}
            <View style={{ flex: 0.5, minHeight: 200 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Image source={require("../assets/images/light.png")} />
                <Image
                  source={require("../assets/images/light.png")}
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

            {/* INPUT SECTION */}
            <View style={{ flex: 0.5, marginTop: 20, paddingBottom: 40 }}>

              {/* EMAIL INPUT */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 50,
                  borderWidth: 2,
                  borderColor: emailFocus ? "#4E9FEE" : emailError ? "red" : "#ccc",
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  backgroundColor: "white",
                  marginBottom: 8,
                }}
              >
                <Ionicons
                  name="mail-outline"
                  size={22}
                  color={emailFocus ? "#4E9FEE" : "#777"}
                  style={{ marginRight: 8 }}
                />

                <TextInput
                  style={{ flex: 1 }}
                  placeholder="Email"
                  placeholderTextColor="#aaa"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={validateEmail}
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                />
              </View>

              {emailError ? (
                <Text style={{ color: "red", marginBottom: 8 }}>{emailError}</Text>
              ) : null}

              {/* PASSWORD INPUT */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 50,
                  borderWidth: 2,
                  borderColor: passFocus ? "#4E9FEE" : passError ? "red" : "#ccc",
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  backgroundColor: "white",
                  marginBottom: 8,
                }}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={22}
                  color={passFocus ? "#4E9FEE" : "#777"}
                  style={{ marginRight: 8 }}
                />

                <TextInput
                  style={{ flex: 1 }}
                  placeholder="Password"
                  placeholderTextColor="#aaa"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={validatePassword}
                  onFocus={() => setPassFocus(true)}
                  onBlur={() => setPassFocus(false)}
                />

                {/* 👁️ EYE ICON */}
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={22}
                    color="#777"
                  />
                </TouchableOpacity>
              </View>

              {passError ? (
                <Text style={{ color: "red", marginBottom: 8 }}>{passError}</Text>
              ) : null}

              {/* LOGIN BUTTON */}
              <TouchableOpacity
                disabled={!isFormValid}
                onPress={() => router.push("/products")}
                style={{
                  height: 50,
                  backgroundColor: isFormValid ? "#4E9FEE" : "#9CC8F5",
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 12,
                }}
              >
                <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
                  Login
                </Text>
              </TouchableOpacity>

            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}