import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Layout from "../../components/Layout/Layout";
import { userData } from "../../data/userData";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Account = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.container}>
        <Image source={{ uri: userData?.profilePics }} style={styles.image} />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.name}>
            Hi, <Text style={{ color: "green" }}>{userData?.name}</Text> 👋
          </Text>
          <Text>Email: {userData?.email}</Text>
          <Text>Contact: {userData?.contact}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Text style={styles.heading}>Account setting</Text>
          <TouchableOpacity 
          onPress={()=>navigation.navigate("profile",{id:userData._id})}
          style={styles.btn}>
            <FontAwesome name="edit" style={styles.btnText} />
            <Text style={styles.btnText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("myorders",{id:userData._id})}>
            <FontAwesome name="list" style={styles.btnText} />
            <Text style={styles.btnText}>My Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("notifications")}>
            <FontAwesome name="bell" style={styles.btnText} />
            <Text style={styles.btnText}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}   onPress={()=>navigation.navigate("adminPanel",{id:userData._id})}>
            <FontAwesome name="windows" style={styles.btnText} />
            <Text style={styles.btnText}>Admin panel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  name: {
    marginTop: 5,
  },

  btnContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    elevation: 5,
    marginVertical: 20,
    borderRadius: 10,
    paddingBottom: 30,
  },
  heading: {
    paddingBottom: 10,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 5,
  },
  btnText: {
    fontSize: 20,
    marginRight: 10,
  },
});
