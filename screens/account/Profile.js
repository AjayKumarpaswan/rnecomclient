import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import { userData } from "./../../data/userData";
import InputBox from "../../components/form/InputBox";

const Profile = ({navigation}) => {
  const [name, setName] = useState(userData?.name);
  const [profilePics, setProfilePics] = useState(userData?.profilePics);
  const [email, setEmail] = useState(userData?.email);
  const [password, setPassword] = useState(userData?.password);
  const [address, setAddress] = useState(userData?.address);
  const [contact, setContact] = useState(userData?.contact);
  const [city, setCity] = useState(userData?.city);
const handleProfile=()=>{
    if(!email || !password || !name || !address || !contact || !city)
    { 
     return alert("All inputFields are  required")
 
 }
          alert("Profile Updated Successfully")
          navigation.navigate("account")
}
  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: profilePics }} />
            <Pressable onPress={() => alert("open dialog box")}>
              <Text style={{ color: "red" }}>Update your profile</Text>
            </Pressable>
          </View>
          <InputBox
            value={name}
            setValue={setName}
            placeholder="enter your name"
            autoComplete={"name"}
          />

<InputBox
            value={email}
            setValue={setEmail}
            placeholder="enter your email"
            autoComplete={"email"}
          />

<InputBox
            value={password}
            setValue={setPassword}
            placeholder="enter your  password"
            autoComplete={"password"}
            secureTextEntry={true}
          />
            <InputBox
            value={address}
            setValue={setAddress}
            placeholder="enter your Address"
            autoComplete={"address-line1"}
          />
            <InputBox
            value={city}
            setValue={setCity}
            placeholder="enter your city name"
            autoComplete={"country"}
          />
            <InputBox
            value={contact}
            setValue={setContact}
            placeholder="enter your contact no."
            autoComplete={"tel"}
          />
          <TouchableOpacity style={styles.btnProfile} onPress={handleProfile}>
            <Text style={styles.btnProfileText}>
                Update profile
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: "100%",
    resizeMode: "contain",
  },
  btnProfile:{
    backgroundColor:'black',
    height:40,
    borderRadius:20,
    marginHorizontal:30,
    marginTop:10,
    justifyContent:'center'
},
btnProfileText:{
color:'white',
fontSize:20,
textAlign:'center'
}
});
