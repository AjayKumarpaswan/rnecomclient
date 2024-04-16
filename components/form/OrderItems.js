import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderItems = ({order}) => {
  return (
    <View style={styles.container}>
     <View style={styles.orderInfo}>
     <Text>Order Id: {order?._id}</Text>
     <Text>Date:{order?.date}</Text>
     </View>
 <Text>Product Name:{order?.productInfo?.name}</Text>
 <Text>Price :{order?.productInfo?.price}</Text>
 <Text>Quantity :{order?.productInfo?.qty}</Text>
 <Text>Total Amount :₹{order?.totalAmount}</Text>
    <Text style={styles.status}>Status:{order?.status}</Text>

    </View>
  )
}

export default OrderItems

const styles = StyleSheet.create({
container:{
backgroundColor:"white",
margin:10,
padding:10,
borderRadius:10
},
orderInfo:{
 flexDirection:'row',
 justifyContent:'space-between',
 borderBottomWidth:1,
 borderBottomColor:"lightgray"
},
status:{
borderTopWidth:1,
borderTopColor:"lightgray",
fontWeight:"bold",
padding:5
}

})