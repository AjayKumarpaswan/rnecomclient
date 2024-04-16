import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pricetable = ({title,price}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>₹{price}</Text>

    </View>
  )
}

export default Pricetable

const styles = StyleSheet.create({
container:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
paddingHorizontal:20
}
})