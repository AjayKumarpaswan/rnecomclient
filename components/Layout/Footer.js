import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useReduxStateHook } from "./../../hooks/customHook";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/auth/userActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Footer = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //custom hooks
  const loading = useReduxStateHook(navigation,"login");
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("home")}
      >
        <FontAwesome
          style={[styles.icon, route.name === "home" && styles.active]}
          name="home"
        />
        <Text style={[styles.iconText, route.name === "home" && styles.active]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("notifications")}
      >
        <FontAwesome
          style={[styles.icon, route.name === "notifications" && styles.active]}
          name="bell"
        />
        <Text
          style={[
            styles.iconText,
            route.name === "notifications" && styles.active,
          ]}
        >
          Notification
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("account")}
      >
        <FontAwesome
          style={[styles.icon, route.name === "account" && styles.active]}
          name="user-circle"
        />
        <Text
          style={[styles.iconText, route.name === "account" && styles.active]}
        >
          Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation.navigate("cart")}
      >
        <FontAwesome
          style={[styles.icon, route.name === "cart" && styles.active]}
          name="shopping-cart"
        />
        <Text style={[styles.iconText, route.name === "cart" && styles.active]}>
          Cart
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuContainer}
        onPress={async() => {
          dispatch(logout());
          await AsyncStorage.removeItem("@auth");
        }}
      >
        <FontAwesome style={styles.icon} name="sign-out" />
        <Text style={styles.iconText}>logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginLeft: -10,
  },
  menuContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 25,
    color: "#000000",
  },
  iconText: {
    fontSize: 10,
    color: "black",
    fontWeight: "bold",
  },
  active: {
    color: "blue",
  },
});
