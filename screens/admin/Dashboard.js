import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Layout from './../../components/Layout/Layout';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Dashboard = () => {
  return (
    <Layout>
        <View style={styles.main}>
        <Text style={styles.heading}>Dashboard</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
        <FontAwesome style={styles.icon} name='edit'/>
            <Text style={styles.btnText}>Manage Products</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
        <FontAwesome style={styles.icon} name='edit'/>
            <Text style={styles.btnText}>Manage Categories</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
        <FontAwesome style={styles.icon} name='user'/>
            <Text style={styles.btnText}>Manage Users</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
        <FontAwesome style={styles.icon} name='list'/>
            <Text style={styles.btnText}>Manage Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
        <FontAwesome style={styles.icon} name='info'/>
            <Text style={styles.btnText}>About Apps</Text>
        </TouchableOpacity>

       
      </View>
        </View>
    </Layout>
  )
}

export default Dashboard

const styles = StyleSheet.create({
main:{
backgroundColor:"lightgray",
height:"96.6%"
},
heading:{
backgroundColor:"black",
color:"white",
textAlign:"center",
padding:10,
margin:10,
borderRadius:10,
fontSize:20,

},
btnContainer:{
margin:10
},
btn:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"white",
padding:20,
borderRadius:10,
elevation:10,
marginBottom:20
},
icon:{
fontSize:30,
marginLeft:10,
marginRight:10
},
btnText:{
fontSize:20
}
})