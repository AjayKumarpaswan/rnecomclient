import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ProductsData } from "../data/ProductsData";
import Layout from "../components/Layout/Layout";

const ProductDetails = ({ route }) => {
  // console.log(route)
  const { params } = route;
  //Get all products Details
  const [Pdetails, setPdetails] = useState({});
   //for qty
   const[qty,setQty]=useState(1);
  useEffect(() => {
    //find Products
    const getProduct = ProductsData.find((p) => {
      return params?._id == p?._id;
    });

    setPdetails(getProduct);
  }, [params?._id]);


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
    <Layout>
      <Image style={styles.image} source={{ uri: Pdetails?.imageUrl }} />
      <View style={styles.container}>
        <Text style={styles.title}>{Pdetails?.name}</Text>
        <Text style={styles.title}>Price: ₹{Pdetails?.price}</Text>
        <Text style={styles.desc}>Descriptions:{Pdetails?.description}</Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btncart} onPress={()=>alert(`${qty} items added to cart`)}
          disabled={Pdetails?.quantity<=0}
          >
            <Text style={styles.btncartText}>{ Pdetails?.quantity>0?'Add to cart':'Out of Stock'}</Text>
          </TouchableOpacity>

          <View style={styles.btnContainer}>
             <TouchableOpacity style={styles.btnQty} onPress={handleRemoveqty}>
              <Text style={styles.btnQtyText}>-</Text>
             </TouchableOpacity>
             <Text>{qty}</Text>
             <TouchableOpacity style={styles.btnQty} onPress={handleAddqty}>
              <Text>+</Text>
             </TouchableOpacity>
           
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  container: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
  },
  desc: {
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "justify",
    marginVertical: 10,
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

});
