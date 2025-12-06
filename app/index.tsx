import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View
} from "react-native";

import AuthHeader from "../src/components/AuthHeader";
import InputField from "../src/components/InputField";
import SubmitButton from "../src/components/SubmitButton";

export default function Index() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailFocus, setEmailFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (value: string) => {
    setEmail(value);
    const emailRegex = /\S+@\S+\.\S+/;
    setEmailError(!emailRegex.test(value) ? "Enter a valid email" : "");
  };

  const validatePassword = (value: string) => {
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
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 16 }}
            keyboardShouldPersistTaps="handled"
          >
            <AuthHeader />

            <View style={{ marginTop: 20 }}>
              <InputField
                placeholder="Email"
                value={email}
                onChangeText={validateEmail}
                icon="mail-outline"
                error={emailError}
                focus={emailFocus}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />

              <InputField
                placeholder="Password"
                value={password}
                onChangeText={validatePassword}
                icon="lock-closed-outline"
                error={passError}
                focus={passFocus}
                isPassword
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                onFocus={() => setPassFocus(true)}
                onBlur={() => setPassFocus(false)}
              />

              <SubmitButton
                title="Login"
                disabled={!isFormValid}
                onPress={() => router.push("/products")}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
