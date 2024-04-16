import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import { OrderData } from './../../data/OrderData';
import OrderItems from '../../components/form/OrderItems';

const Myorders = () => {
  return (
    <Layout>
        <View style={styles.container}>
          <Text style={styles.header}>Myorders</Text>
        </View>
     <ScrollView>
        {
        OrderData.map(order=>(
            <OrderItems key={order?._id} order={order}/>
            ))
        }
     </ScrollView>
    </Layout>
  )
}

export default Myorders

const styles = StyleSheet.create({
container:{
 marginTop:10
},
header:{
textAlign:'center',
color:"gray",
fontWeight:'bold',
fontSize:20
}
})
