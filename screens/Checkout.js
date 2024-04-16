import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Layout from '../components/Layout/Layout'

const Checkout = ({navigation}) => {
  //For cod
  const handleCod=()=>{
  alert("Your Order has been Place successfully")
  }

  //for onlinepayment

  const handleOnline=()=>{
   alert('you are redirecting to payment gateway')
navigation.navigate("payment")

  }
  return (
    <Layout>

   
    <View style={styles.container}>
    <Text style={styles.text}>Payment Options</Text>
    <Text style={styles.price}>Total Amount :$2020</Text>
    <View style={styles.paymentCard}>
    <Text style={styles.paymentHeading}>Select your Payment Mode</Text>
        <TouchableOpacity style={styles.paymentButton} 
        onPress={handleCod}
        >
           
            <Text style={styles.paymentButtonText}>Cash on Delivery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.paymentButton}
        onPress={handleOnline}
        >
           
           <Text style={styles.paymentButtonText}>Online Pay(CREDIT|DEBIT CARD)</Text>
       </TouchableOpacity>
    </View>
    </View>
    </Layout>
  )
}

export default Checkout

const styles = StyleSheet.create({
container:{
alignItems:'center',
justifyContent:'center',
height:'90%'
},
text:{
fontSize:30,
fontWeight:'500',
marginVertical:10
},

price:{
fontSize:20,
marginVertical:10,
color:'gray'
},
paymentCard:{
backgroundColor:'white',
width:'90%',
padding:30,
marginVertical:10,
borderRadius:10
},
paymentHeading:{
color:'gray',
marginBottom:10

},
paymentButton:{
backgroundColor:'black',
borderRadius:10,
marginVertical:20,
height:40,
justifyContent:"center"
},
paymentButtonText:{
color:'white',
textAlign:'center',
fontWeight:'bold'
}

})