import { CartProvider } from "@/src/context/CartContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";


export default function RootLayout() {
  return (
    <CartProvider>
      <StatusBar hidden={true} />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </CartProvider>
  );
}
