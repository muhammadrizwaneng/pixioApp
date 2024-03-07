import React, { useEffect } from 'react';
import {Text, View, StyleSheet, Button, Image} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../features/userSlice';
import  Icon from 'react-native-vector-icons/FontAwesome6';

const LandingPage = () => {
 

  // const user = route.params;
  // console.log("----------------user",user)
//   const userData =JSON.stringify(user)
//   console.log("----------------userData",userData)
return (
    <View >
        <View >
            <View style={{flexDirection:"row"}}>
                <View>
                    <Text style={styles.fashionText}>Make Your Fashion</Text>
                    <Text style={styles.charmingtext}>Look Mire Charming</Text>
                    <View style={styles.priceSizeText}>
                        <Text style={styles.priceText}>Price</Text>
                        <Text style={styles.SizeText}>Select Size</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Text style={styles.productPrice}>$168</Text>
                        <View style={styles.sizeContainer}>
                            <View style={styles.XSizeCircle}><Text style={styles.XSizeText}>X</Text></View>
                            <View style={styles.SSizeCircle}><Text style={styles.sizeText}>S</Text></View>
                            <View style={styles.LSizeCircle}><Text style={styles.sizeText}>L</Text></View>
                        </View>
                    </View>
                    <View >
                        <View style={styles.detailCircle}><Text style={styles.detailText}>View Details</Text></View>
                    </View>
                </View>
            {/* <View>
                <Icon name="star-of-life" size={15} /> 
            </View> */}
                <Image
                    source={require("../../../images/excited-white-girl_1.jpeg")}
                    style={styles.forgot_password}
                />
            </View>
            
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
    forgot_password:{
      borderRadius:30,
      width:200,
      height:200,
      marginLeft:60,
      marginTop:10
    },
    fashionText:{
        marginTop:20,
        marginLeft:10,
        fontWeight:"bold",
        color:"black",
        fontSize:20
    },
    charmingtext:{
        // marginTop:5,
        marginLeft:10,
        fontWeight:"bold",
        color:"black",
        fontSize:20
    },
    priceSizeText:{ 
        flexDirection: "row", 
        alignItems: "flex-start",
        marginTop:15,
        marginLeft:10 
    },
    priceText:{ 
        color:"black",
        fontSize:12,
        fontWeight:"bold"
    },
    SizeText:{ 
        color:"black",
        fontSize:12,
        fontWeight:"bold",
        // marginLeft:60 
        paddingHorizontal:60
    },
    sizeContainer: {
        flexDirection: "row",
        marginLeft:50,
        marginTop: 5, 
        // justifyContent: "space-around",
    },
    XSizeCircle:{
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    SSizeCircle:{
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginLeft: 5, 
        marginRight: 5
    },
    LSizeCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    detailCircle:{
        width: 100,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:20,
        marginTop:10,
    },
    sizeText: {
        color: 'black',
        fontWeight: 'bold',
    },
      XSizeText:{
        color: 'white',
        fontWeight: 'bold',
    },
    productPrice:{
        fontSize:15,
        color:"black",
        fontWeight:"bold",
        marginTop:10,
        marginLeft:10
    },
    detailText:{
        color: 'black',
        fontWeight: 'bold',
    }
  });
export default LandingPage;