import React, { createContext, ReactNode, useContext, useState } from "react";

// ---------------------------------------
// 1️⃣ Define Cart Item Type
// ---------------------------------------
export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: any;   // you can refine this later
  qty: number;
}

// ---------------------------------------
// 2️⃣ Define Context Type
// ---------------------------------------
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Omit<CartItem, "qty">) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  removeItem: (id: number) => void;
}

// ---------------------------------------
// 3️⃣ Create Context with Proper Type
// ---------------------------------------
const CartContext = createContext<CartContextType | null>(null);

// ---------------------------------------
// 4️⃣ Provider Component
// ---------------------------------------
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Omit<CartItem, "qty">) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const increaseQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, increaseQty, decreaseQty, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ---------------------------------------
// 5️⃣ useCart Hook with Safety Check
// ---------------------------------------
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart must be used inside a CartProvider");
  return context;
};
