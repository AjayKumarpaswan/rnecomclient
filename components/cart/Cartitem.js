import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'

const Cartitem = ({item}) => {
  const[qty,setQty]=useState(1);
//functions for handle + -
const handleAddqty=()=>{
  if(qty===10) return alert("you can't add more than 10 items")
setQty((prev)=>prev+1);
}

const handleRemoveqty=()=>{
  if(qty<=1) return;
setQty((prev)=>prev-1);
}

  return (
    <View style={styles.container}>
      <Image source={{uri:item?.imageUrl}} style={styles.image}/>
       <View>
        <Text style={styles.name}>{item?.name}</Text>
        <Text style={styles.name}>Price:₹{item?.price}</Text>
      </View>
      <View style={styles.btnContainer}>
             <TouchableOpacity  style={styles.btnQty} onPress={handleRemoveqty}>
              <Text style={styles.btnQtyText}>-</Text>
             </TouchableOpacity>
             <Text>{qty}</Text>
             <TouchableOpacity style={styles.btnQty} onPress={handleAddqty}>
              <Text>+</Text>
             </TouchableOpacity>
           
          </View>
    </View>
  )
}

export default Cartitem

const styles = StyleSheet.create({
container:{
margin:10, 
backgroundColor:'#ffffff',
 borderWidth:1,
 borderColor:'lightgray',
 borderRadius:10,
 padding:10,
 alignItems:'center',
 flexDirection:'row'
},
image:{
height:50,
width:50,
resizeMode:"contain"
},
name:{
  fontSize:12
},
btnContainer: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginVertical:20,
  marginHorizontal:10
},
btncart:{
 width:150,
 backgroundColor:'black',
 height:40,
 borderRadius:10,
 justifyContent:'center'
},
btncartText:{
color:'white',
fontSize:16,
textAlign:'center',
fontWeight:'bold'
},
btnQty:{
backgroundColor:'lightgray',
width:50,
alignItems:'center',
marginHorizontal:8
},
btnQtyText:{
fontSize:20
}
})