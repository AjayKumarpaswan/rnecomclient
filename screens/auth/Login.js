import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import InputBox from '../../components/form/InputBox';
//redux hooks
import {useDispatch,useSelector} from "react-redux"
import { login } from '../../redux/features/auth/userActions';
import { useReduxStateHook } from './../../hooks/customHook';


const Login = ({navigation}) => {
    
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    //hooks
    const dispatch=useDispatch()
    


    //custom hooks
  const loading =useReduxStateHook(navigation,"home");


    const loginImage="https://www.certifiedfinancialguardian.com/images/blog-wp-login.png";

    
    //for login
const handleLogin=()=>{
    if(!email || !password)
   { 
    return alert("email and password required")

}
      dispatch(login(email,password));
     
        //  alert("Login  Successfully")
        //  navigation.navigate("home")
}

  return (
    <View style={styles.container}>
      <Image source={{uri:loginImage}} style={styles.image}/>
     {loading && <Text>Loading....</Text>}
    <InputBox placeholder={"Enter your email"} autoComplete={"email"} value={email} setValue={setEmail}/>
    <InputBox placeholder={"Enter your password"} secureTextEntry={true} value={password} setValue={setPassword}/>
    
    <View style={styles.btnContainer}>
    <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginBtnText}>Login</Text>
      </TouchableOpacity>
      <Text>Don't have an account? <Text style={{color:'blue',fontWeight:'bold'}} onPress={()=>navigation.navigate("register")}>Register....</Text></Text>
    </View>
      
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
container:{
//alignItems:'center',
justifyContent:'center',
height:"80%"
},
image:{
height:200,
width:'100%',
resizeMode:"contain",
},
btnContainer:{
alignItems:'center',
justifyContent:'center'
},
loginBtn:{
backgroundColor:'black',
width:'80%',
height:40,
borderRadius:10,
marginVertical:20,
justifyContent:'center'
},
loginBtnText:{
color:'white',
textAlign:'center',
textTransform:'uppercase',
fontWeight:'bold'
}
})