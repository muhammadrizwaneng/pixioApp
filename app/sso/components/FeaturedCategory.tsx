import React, { useEffect } from 'react';
import {Text, View, StyleSheet, Button, Image} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../features/userSlice';
import  Icon from 'react-native-vector-icons/FontAwesome6';

const FeaturedCategory = () => {
 

  // const user = route.params;
  // console.log("----------------user",user)
//   const userData =JSON.stringify(user)
//   console.log("----------------userData",userData)
return (
    <View >
            <Text style={{fontSize:15,color:"black",fontWeight:"bold",margin:15}}>Featured Categories</Text>
              <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                <View>
                  <Image source={require("../../../images/blackcoat-bg-remover.png")} style={styles.image}/>
                  <Text style={styles.text}>t-shirt</Text>
                </View>
                 <View>
                  <Image source={require("../../../images/redshirt-bg-remover.png")} style={styles.image}/>
                  <Text style={styles.text}>Shirt</Text>
                </View>
                <View>
                  <Image source={require("../../../images/blackpant-bg-remover.png")}  style={styles.image}/>
                  <Text style={styles.text}>Jeans</Text>
                </View>
                <View>
                  <Image source={require("../../../images/jgsh-bg-remover.png")}  style={styles.image}/>
                  <Text style={styles.text}>shorts</Text>
                </View>
              </View>
    </View>
  );
};
const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        marginLeft: 5,
    },
    text:{
        marginLeft: 10,
        marginTop:5,
        width: 60,
        height: 20,
        borderRadius:50,
        borderColor:"black",
        borderWidth:2,
        textAlign:"center",
        alignItems:"center",
        backgroundColor:"white",
        justifyContent: "center",
        color:"black",
        fontWeight:"bold"
    }
    
  });
export default FeaturedCategory;