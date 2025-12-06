E-Commerce App (React Native + Expo Router)

A simple and clean mobile e-commerce application built using Expo, React Native, and Expo Router.
The app includes:

Login screen with validation

Product list page

Product details page

Global Cart using Context API

Cart screen with quantity selector

Fully reusable UI components

🚀 Features
🔐 Authentication

Email & password validation

Focus styles

Toggle show/hide password

Proper error messages

🛍 Product Features

Product listing with FlatList

Reusable product card UI

Full product description view

Navigation with expo-router

🛒 Cart System

Global Cart state using Context API

Add to Cart from Product Details

Increase / Decrease quantity

Remove item

Total price calculation

🎨 UI Components (Reusable)

AuthHeader

InputField

SubmitButton

Clean and scalable architecture



⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/mohit100201/ReactAssessment
cd project-folder

2️⃣ Install dependencies
npm install
# or
yarn install

3️⃣ Start the Expo development server
npx expo start

4️⃣ Run on device or emulator

Press a → Android emulator

Press i → iOS simulator

Scan QR code in Expo Go app

📦 Libraries Used
Library	Purpose
expo-router	File-based navigation
react-native-safe-area-context	Safe area handling
@expo/vector-icons	Icons for UI
expo-status-bar	Control device status bar
React Context API	Global cart management
expo-image / RN Image	Product and background images
🧠 Approach & Architecture Notes
✔ Component-Based Architecture

Each UI element (inputs, buttons, headers) is separated into individual reusable components to keep screens clean and maintainable.

✔ Global Cart using Context API

Cart data persists across screens and updates instantly.
This is more reliable than passing params through navigation.

✔ expo-router Navigation

All pages are organized logically in directories:

/products

/cart

/auth

Routes automatically map to files → cleaner code, no manual route config.

✔ FlatList Optimization

The product list uses FlatList for performance and smooth scrolling.

✔ Scalable Folder Structure

Keeps UI components, data, hooks, and context clearly separated to support larger features later.