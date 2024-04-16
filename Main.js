import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import About from "./screens/About";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import Payments from "./screens/Payments";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Account from "./screens/account/Account";
import Notification from "./screens/account/Notification";
import Profile from "./screens/account/Profile";
import Myorders from "./screens/account/Myorders";
import Dashboard from "./screens/admin/Dashboard";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();
export default function Main() {
  const [isAuth, setIsAuth] = useState(null);
  //get user
  useEffect(() => {
    const getUserLocalData = async () => {
      let data = await AsyncStorage.getItem("@auth");
      setIsAuth(data);
      // let loginData=JSON.parse(data);
      console.log("user login data", data);
    };
    getUserLocalData();
  }, []);
  return (
    <>
        <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="productDetails" component={ProductDetails} />
        <Stack.Screen name="checkout" component={Checkout} />
        <Stack.Screen name="payment" component={Payments} />
        <Stack.Screen name="notifications" component={Notification} />
        <Stack.Screen name="myorders" component={Myorders} />
        <Stack.Screen name="adminPanel" component={Dashboard} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="account" component={Account} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="about" component={About} />
       
       {
       !isAuth && (
        <>
         <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{ headerShown: false }}
        />
        </>
        )
       }
       
       
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
