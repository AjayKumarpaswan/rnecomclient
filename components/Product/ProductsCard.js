import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const ProductsCard = ({product}) => {
  const navigation=useNavigation();

  const handleMoreDetails=(id)=>{
  navigation.navigate('productDetails',{_id:id})
  console.log(id);
  }

  const handleAddtoCart=()=>{
  alert("added to cart")
  }
  return (
    <View>
     <View style={styles.card}>
     <Image
  style={styles.cardImage}
  source={{ uri: product?.imageUrl }}
  
/>
      <Text style={styles.cardTitle}>{product?.name}</Text>
      <Text style={styles.cardDesc}>{product?.description.substring(0,50)}...more</Text>

      <View style={styles.BtnContainer}>
         <TouchableOpacity style={styles.btn} onPress={()=>handleMoreDetails(product?._id)}>
           <Text style={styles.btnText}>Details</Text>
          </TouchableOpacity>   

          <TouchableOpacity style={styles.btn1} onPress={handleAddtoCart}>
           <Text style={styles.btnText}>ADD TO CART </Text>
          </TouchableOpacity>   
    </View>      
  
     </View>
    </View>
  )
}

export default ProductsCard

const styles = StyleSheet.create({
card:{
  borderWidth:1,
  borderColor:'lightgray',
  width:'40%',
  marginHorizontal:5,
  marginVertical:8,
  backgroundColor:'#ffffff',
  justifyContent:'center',
  padding:10
},
cardImage:{
  
height:120,
width:'100%',
marginBottom:10

},
cardTitle:{
fontSize:10,
fontWeight:'bold',
marginBottom:5
},
cardDesc:{
fontSize:10,
fontWeight:'bold',
textAlign:'left'
},
BtnContainer:{
marginTop:5,
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center'
},
btn:{
backgroundColor:'black',
height:20,
width:70,
borderRadius:5,
justifyContent:'center',
marginVertical:5
},
btn1:{
  backgroundColor:'brown',
  height:20,
  width:70,
  borderRadius:5,
  justifyContent:'center'
  },
btnText:{
color:'white',
textAlign:'center',
fontWeight:'bold',
fontSize:10,
}
})