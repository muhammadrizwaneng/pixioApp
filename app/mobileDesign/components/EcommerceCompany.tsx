import { View, Image, StyleSheet, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

const EcommerceSmacookHeader = () => {
  return (
    <View>
      <View style={styles.textHeading}>
        <Image source={require("../../../images/Smacook.webp")} />
      </View>
      <View>
        <Text style={styles.smacookText}>See all products from Smacook</Text>
      </View>
      <View>
        <Text style={styles.text_color}>Color: Black</Text>
      </View>
      <View style={styles.container}>
        <View style={[styles.circle, styles.blackCircle]}></View>
        <View style={[styles.circle, styles.whiteCircle]}></View>
        <View style={[styles.circle, styles.grayCircle]}></View>
        <View style={[styles.circle, styles.blueCircle]}></View>
      </View>
      <View>
        <Text style={{marginLeft:10,fontWeight:"bold",color:"black"}}>Capacity</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.textBorder}>
          <Text style={styles.InnerPot}>Inner Pot 7L</Text>
        </View>
        <View style={styles.outerPottextBorder}>
          <Text style={styles.outerPot}>Inner Pot 9L</Text>
        </View>
      </View>
      <View style={styles.btncontainer}>
        <View style={styles.AddToCartBorder}>
          
          <Text style={styles.AddToCart}> <Icon name="shopping-cart" size={17} color="white"/>  Add To Cart</Text>
        </View>
        <View style={styles.AddToCartBorder}>
          <Text style={styles.buyNowText}><AntIcon name="delete" size={15} color="white"/> Buy Now</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  btncontainer: {
    flexDirection: "row",
    justifyContent:"space-between"
  },
  textHeading: {
    marginLeft: 10,
  },
  smacookText: {
    fontSize: 10,
    color: "#2A69E6",
    marginLeft: 10,
    fontWeight: "bold",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#D4E1FA",
  },
  text_color: {
    color: "black",
    marginLeft: 10,
    marginTop: 10,
    fontSize: 13,
    fontWeight: "bold",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginVertical: 10,
    marginLeft: 10,
  },
  blackCircle: {
    backgroundColor: '#2B2B2B',
    borderWidth: 2,
    borderColor: '#F79E84',
    padding: 5,
  },
  whiteCircle: {
    backgroundColor: 'white',
  },
  grayCircle: {
    backgroundColor: 'gray',
  },
  blueCircle: {
    backgroundColor: 'blue',
  },
  InnerPot: {
    // marginLeft: 10,
    textAlign: "center",
    width: 100,
    height: 30,
    color: "#F79E84",
    paddingVertical: 5,
    fontWeight:"bold",
    fontSize:12
  },
  textBorder: {
    borderColor: "#F79E84",
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
  },
  outerPot: {
    // marginLeft: 10,
    textAlign: "center",
    width: 100,
    height: 30,
    color: "black",
    paddingVertical: 5,
    fontWeight:"bold",
    fontSize:12
  },
  outerPottextBorder: {
    borderColor: "#E5E5E5",
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
  },
  AddToCart: {
    marginLeft:5,
    textAlign: "center",
    width: 150,
    height: 40,
    color: "white",
    paddingVertical: 10,
    backgroundColor: "#3D8C8F",
    borderRadius: 5,
    overflow: "hidden",
  },
  AddToCartBorder: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  buyNowText: {
    marginLeft: 10,
    textAlign: "center",
    width: 150,
    height: 40,
    color: "white",
    paddingVertical: 10,
    backgroundColor: "#F67049",
    borderRadius: 5,
    overflow: "hidden",
  },
});

export default EcommerceSmacookHeader;
