import { useCart } from "@/src/context/CartContext";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { products } from "../../src/data/product";

export default function ProductDetails() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const { addToCart } = useCart();

    
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 18 }}>Product Not Found</Text>
            </View>
        );
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
           
            <Image
                source={product.image}
                style={{
                    width: "100%",
                    height: 250,
                    resizeMode: "contain",
                    backgroundColor: "#f5f5f5",
                    padding: 16
                }}
                resizeMode="contain"
            />

           
            <View style={{ padding: 16 }}>
                
                <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8 }}>
                    {product.name}
                </Text>

                
                <Text
                    style={{
                        fontSize: 22,
                        fontWeight: "600",
                        color: "#4E9FEE",
                        marginBottom: 16,
                    }}
                >
                    ₹ {product.price}
                </Text>

                
                <Text style={{ fontSize: 16, color: "#555", lineHeight: 22 }}>
                    {product.description}
                </Text>

                
                <TouchableOpacity
                    onPress={() => {
                        addToCart(product);
                        router.push("/cart");
                    }}
                    style={{
                        height: 50,
                        backgroundColor: "#4E9FEE",
                        borderRadius: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 24,
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: "bold",
                        }}
                    >
                        Add to Cart
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
