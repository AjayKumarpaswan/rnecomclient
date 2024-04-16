import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { categoriesData } from "../../data/CategoriesData";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
const Categories = () => {
    const navigation=useNavigation();
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
      {categoriesData?.map((item) => (
        <View key={item._id} >
          <TouchableOpacity style={styles.catContainer}
          onPress={()=>navigation.navigate(item.path)}
          
          >
            <FontAwesome name={item.icon} style={styles.caticon}/>
            <Text style={styles.cattitle}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
 container:{
 backgroundColor:'white',
 flexDirection:'row',
 padding:5,
},
catContainer:{
padding:15,
alignItems:'center',
justifyContent:'center'

},
caticon:{
 fontSize:35,
 verticalAlign:"top"
},
cattitle:{
fontSize:13
}

});
