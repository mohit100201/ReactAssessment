import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCart } from "../../src/context/CartContext";

export default function CartScreen() {
  const { id } = useLocalSearchParams();

  
  const { cartItems, increaseQty, decreaseQty, removeItem } = useCart();

  
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const renderItem = ({ item }: any) => (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        padding: 12,
        borderRadius: 10,
        marginBottom: 12,
        alignItems: "center",
        elevation: 2,
      }}
    >
      <Image
        source={item.image}
        style={{
          width: 70,
          height: 70,
          borderRadius: 8,
          marginRight: 10,
        }}
      />

      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>{item.name}</Text>
        <Text style={{ fontSize: 14, color: "#777" }}>₹ {item.price}</Text>

        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}>
          <TouchableOpacity
            onPress={() => decreaseQty(item.id)}
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#eee",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 18 }}>-</Text>
          </TouchableOpacity>

          <Text style={{ marginHorizontal: 10, fontSize: 16 }}>{item.qty}</Text>

          <TouchableOpacity
            onPress={() => increaseQty(item.id)}
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#eee",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 18 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => removeItem(item.id)}>
        <Text style={{ color: "red", fontWeight: "bold" }}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: "#f5f5f5" }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          alignSelf: "center",
          marginBottom: 16,
        }}
      >
        My Cart
      </Text>

      {cartItems.length === 0 ? (
        <View style={{ alignItems: "center", marginTop: 60 }}>
          <Text style={{ fontSize: 18, color: "#555" }}>Your cart is empty</Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      )}

      {cartItems.length > 0 && (
        <View
          style={{
            backgroundColor: "white",
            padding: 16,
            borderRadius: 10,
            elevation: 3,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Total:</Text>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "#4E9FEE" }}>
              ₹ {totalAmount}
            </Text>
          </View>

          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: "#4E9FEE",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
