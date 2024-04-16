import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState,useEffect } from "react";
import InputBox from "../../components/form/InputBox";
import { useDispatch } from 'react-redux';
import { register } from "../../redux/features/auth/userActions";
import { useReduxStateHook } from "../../hooks/customHook";

const Register = ({ navigation }) => {
  const dispatch=useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const[answer,setAnswer]=useState("")
  const[country,setCountry]=useState("india")
  const loginImage =
    "https://www.unido.org/sites/default/files/inline-images/register_0.gif";

  //for Register

  const handleRegister = () => {
    if (!email || !password || !name || !address || !phone || !city) {
      return alert("All inputFields are required");
    }
    const formData = {
      email,
      password,
      name,
      address,
      phone,
      city,
      answer,
      country: "India"
    };

    dispatch(register(formData));
  };

  const loading = useReduxStateHook(navigation, "login");

  // Check if loading is false and navigation to the login page

  

  return (
    <View style={styles.container}>
      <Image source={{ uri: loginImage }} style={styles.image} />
      <InputBox
        placeholder={"Enter your name"}
        autoComplete={"name"}
        value={name}
        setValue={setName}
      />
      <InputBox
        placeholder={"Enter your email"}
        autoComplete={"email"}
        value={email}
        setValue={setEmail}
      />
      <InputBox
        placeholder={"Enter your password"}
        secureTextEntry={true}
        value={password}
        setValue={setPassword}
      />

      <InputBox
        placeholder={"Enter your address"}
        autoComplete={"address-line1"}
        value={address}
        setValue={setAddress}
      />

      <InputBox
        placeholder={"Enter your city"}
        autoComplete={"country"}
        value={city}
        setValue={setCity}
      />

      <InputBox
        placeholder={"Enter your  contact No."}
        autoComplete={"tel"}
        value={phone}
        setValue={setPhone}
      />
       <InputBox
        placeholder={"Enter You favrite dish"}
        value={answer}
        setValue={setAnswer}
        autoComplete={"name"}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
          <Text style={styles.loginBtnText}>Register</Text>
        </TouchableOpacity>
        <Text>
          Already have an account?{" "}
          <Text
            style={{ color: "blue", fontWeight: "bold" }}
            onPress={() => navigation.navigate("login")}
          >
            login....
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    //alignItems:'center',
    justifyContent: "center",
    height: "80%",
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
  btnContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    backgroundColor: "black",
    width: "80%",
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
    justifyContent: "center",
  },
  loginBtnText: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
