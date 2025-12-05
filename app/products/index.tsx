import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../src/data/product";

const ProductList = () => {
  const router = useRouter();

  // ---------- Render Product Card ----------
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      onPress={() => router.push(`/products/${item.id}`)}
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        padding: 12,
        borderRadius: 10,
        marginBottom: 16,
        alignItems: "center",

        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
      }}
    >
      {/* Product Image */}
      <Image
        source={item.image}
        style={{
          width: 80,
          height: 80,
          borderRadius: 8,
          marginRight: 12,
        }}
      />

      {/* Product Info */}
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>{item.name}</Text>

        <Text style={{ fontSize: 14, color: "#666", marginVertical: 4 }}>
          {item.shortDesc}
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#4E9FEE",
          }}
        >
          ₹ {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#f7f7f7", padding: 16 }}
    >
      {/* -------- Header with Cart Icon -------- */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>Products</Text>

        {/* Cart Icon */}
        <TouchableOpacity onPress={() => router.push("/cart")}>
          <Ionicons name="cart-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* -------- Product List -------- */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ProductList;
