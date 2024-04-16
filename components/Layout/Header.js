import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Header = () => {
   const[searchText,setSearchText]=useState("");

   //function of  searching 

   const handleSearch=()=>{
     console.log(searchText);
     setSearchText("");
}

  return (
    <View style={{height:90,backgroundColor:'lightgray'}}>
     
     <View style={styles.container}>
     <TextInput style={styles.inputBox} value={searchText} onChangeText={(text)=>setSearchText(text)}/>
      <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
        <FontAwesome name='search' style={styles.icon} />
     </TouchableOpacity>
     </View>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
container:{
  display:'flex',
  flex:1,
  alignItems:'center',
  flexDirection:'row',
  paddingHorizontal:15,
  marginTop:30
},
inputBox:{
    borderWidth:0.3,
    width:'100%',
    position:'absolute',
    left:15,
    paddingLeft:10,
    height:40,
    fontSize:15,
    borderRadius:5,
    color:"#000000",
    backgroundColor:'white'
},
searchBtn:{
left:'95%',
position:'absolute'
},
icon:{
color:'#000000',
fontSize:20
}
})