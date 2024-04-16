import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { CartData } from '../data/CartData'
import Pricetable from '../components/cart/Pricetable';
import Layout from '../components/Layout/Layout';
import Cartitem from '../components/cart/Cartitem';

const Cart = ({navigation}) => {
    const [cartItems, setCartItems] = useState(CartData);

    return (
        <Layout>
            <Text style={[styles.heading, { color: cartItems?.length > 0 ? 'green' : 'red' }]}>
                {cartItems?.length > 0 ? `You have ${cartItems?.length} item(s) in your cart` : 'Oops, your cart is empty'}
            </Text>

            {
            cartItems.length>0 && (
                <>
                <ScrollView>
                    {
                    cartItems?.map((item)=>(
                        <Cartitem item={item} key={item._id}/>
                        ))
                    }
          
                </ScrollView>
               
                <View>
                <Pricetable title={'Price'} price={999}/>
                <Pricetable title={'Tax'} price={5}/>
                <Pricetable title={'Shipping'} price={50}/>
                <View style={styles.grandTotal}>
                <Pricetable title={'Grand Total'} price={1054}/>
                </View>
               
             <TouchableOpacity style={styles.btnCheckout} onPress={()=>navigation.navigate("checkout")}>
                    <Text style={styles.btnCheckoutText}>CHECKOUT</Text>
                  </TouchableOpacity>
                </View>
                </>
                )
            }
        </Layout>
    );
}

export default Cart;

const styles = StyleSheet.create({
    heading: {
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 20
    },
    grandTotal:{
    backgroundColor:'#ffffff',
    padding:10,
    margin:10,
    paddingHorizontal:20,
    borderWidth:1,
    borderColor:'lightgray',
    borderRadius:10
    },
    btnCheckout:{
    marginTop:20,
    alignItems:'center',
    justifyContent:'center',
    height:45,
    width:'90%',
    backgroundColor:'black',
    marginHorizontal:20,
    borderRadius:20
 },
 btnCheckoutText:{
color:'white',
fontWeight:'bold',
fontSize:15
}
});
