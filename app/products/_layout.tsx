import { Stack } from "expo-router";
import React from "react";

export default function ProductsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      
      <Stack.Screen
        name="[id]"
        options={{
          title: "Product Details",
          headerShown: true,
          headerBackVisible: false, 
        }}
      />
    </Stack>
  );
}
