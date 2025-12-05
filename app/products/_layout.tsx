import { Stack } from "expo-router";
import React from "react";

export default function ProductsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Product List Screen */}
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      {/* Product Details Screen */}
      <Stack.Screen
        name="[id]"
        options={{
          title: "Product Details",
          headerShown: true,
          headerBackVisible: false, // 👈 Removes back arrow
        }}
      />
    </Stack>
  );
}
