import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductsCard from './ProductsCard'
import { ProductsData } from '../../data/ProductsData'

const Products = () => {
  return (
    <View>
      {
      ProductsData?.map(product=>(
        <ProductsCard key={product._id} product={product}/>
        ))
      }
    
    </View>
  )
}

export default Products

const styles = StyleSheet.create({})