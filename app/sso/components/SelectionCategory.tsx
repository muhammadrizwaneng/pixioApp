import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const SelectionCategory = () => {
  return (
    <View>
      <Text style={styles.featuredText}>Set Your Wardroble With Our</Text>
      <Text style={styles.selectionText}>Amazing Selection!</Text>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryItem}>
          <View style={styles.childImgCircle}>
            <Image
              source={require("../../../images/blush-fashion-bg-remover.png")}
              style={styles.childImage}
            />
          </View>
          <Text style={styles.text}>Child</Text>
        </View>
        <View style={styles.categoryItem}>
          <View style={styles.menImgCircle}>
            <Image
              source={require("../../../images/men.png")}
              style={styles.menImage}
            />
          </View>
          <Text style={styles.text}>Men</Text>
        </View>
        <View style={styles.categoryItem}>
          <View style={styles.circle}>
            <Image
              source={require("../../../images/lml-clothing-bg-remover.png")}
              style={styles.image}
            />
          </View>
          <Text style={styles.text}>Women</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  featuredText: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 15,
  },
  selectionText:{
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 15,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  categoryItem: {
    alignItems: "center",
  },
  circle: {
    width: 90,
    height: 90,
    borderRadius: 100,
    backgroundColor: "#FEC5CF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  childImgCircle:{
    width: 90,
    height: 90,
    borderRadius: 100,
    backgroundColor: "#EBDDDD",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  menImgCircle:{
    width: 90,
    height: 90,
    borderRadius: 100,
    backgroundColor: "#92DDE1",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  childImage: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  menImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  text:{
    marginTop:5,
    width: 60,
    height: 20,
    borderRadius:50,
    borderColor:"black",
    borderWidth:1,
    textAlign:"center",
    alignItems:"center",
    backgroundColor:"white",
    justifyContent: "center",
    color:"black",
    fontWeight:"bold"
}
});

export default SelectionCategory;
